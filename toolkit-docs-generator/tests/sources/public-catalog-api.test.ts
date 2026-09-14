import { describe, expect, it } from "vitest";
import { PublicCatalogApiSource } from "../../src/sources/public-catalog-api";
import { fetchAllPages } from "../../src/sources/public-catalog-pagination";
import {
  extractToolkitRequirements,
  groupToolsByToolkit,
  transformPublicToolItem,
  transformPublicToolkitMetadata,
} from "../../src/sources/public-catalog-schema";
import { createPublicCatalogSources } from "../../src/sources/toolkit-data-source";

const githubBranding = {
  id: "GitHub",
  label: "GitHub",
  category: "development",
  type: "arcade",
  docsLink:
    "https://docs.arcade.dev/en/resources/integrations/development/github",
  publicIconUrl: "https://design-system.arcade.dev/icons/github.svg",
  isBYOC: false,
  isPro: false,
  isComingSoon: false,
  isHidden: false,
};

const githubCatalogEntry = {
  name: "Github",
  description: "Arcade.dev LLM tools for Github",
  version: "4.1.1",
  tool_count: 2,
  requirements: {
    authorization: {
      items: {
        github: {
          provider_id: "arcade-github",
          scopes: ["repo"],
        },
      },
    },
    secrets: {
      items: {
        GITHUB_SERVER_URL: {},
      },
    },
  },
  metadata: githubBranding,
};

const githubTool = {
  fully_qualified_name: "Github.CreateIssue@4.1.1",
  qualified_name: "Github.CreateIssue",
  name: "CreateIssue",
  description: "Create issue",
  toolkit: {
    name: "Github",
    version: "4.1.1",
    description: "GitHub toolkit",
  },
  input: { parameters: [] },
  output: null,
  metadata: {
    behavior: {
      operations: ["create"],
      read_only: false,
      destructive: false,
      idempotent: false,
      open_world: true,
    },
  },
};

/** Serve one page of catalog entries and one page of tools, nothing else. */
const stubCatalogFetch = (
  catalogItems: unknown[],
  toolItems: unknown[],
  onCatalogFetch?: () => void
): typeof fetch =>
  (async (input: string | URL | Request) => {
    const url = new URL(input.toString());
    const page = (items: unknown[]) =>
      new Response(JSON.stringify({ items, total_count: items.length }), {
        status: 200,
      });

    if (url.pathname.endsWith("/public/tool_catalog")) {
      onCatalogFetch?.();
      return page(catalogItems);
    }

    if (url.pathname.endsWith("/public/tools")) {
      return page(toolItems);
    }

    return new Response("not found", { status: 404 });
  }) as typeof fetch;

describe("fetchAllPages", () => {
  it("reads every page until total_count is satisfied", async () => {
    const calls: string[] = [];
    const items = Array.from({ length: 125 }, (_, index) => ({
      name: `Toolkit${index}`,
    }));
    const fetchFn = (async (input: string | URL | Request) => {
      calls.push(input.toString());
      const url = new URL(input.toString());
      const offset = Number(url.searchParams.get("offset") ?? 0);
      const limit = Number(url.searchParams.get("limit") ?? 100);
      return new Response(
        JSON.stringify({
          items: items.slice(offset, offset + limit),
          total_count: items.length,
        }),
        { status: 200 }
      );
    }) as typeof fetch;

    const result = await fetchAllPages<{ name: string }>(
      "https://api.example/v1/public/tool_catalog",
      fetchFn
    );

    expect(result).toHaveLength(125);
    expect(calls).toHaveLength(2);
    expect(calls[0]).toContain("offset=0");
    expect(calls[1]).toContain("offset=100");
  });

  it("refuses a short read", async () => {
    const fetchFn = (async (input: string | URL | Request) => {
      const url = new URL(input.toString());
      const offset = Number(url.searchParams.get("offset") ?? 0);

      if (offset > 0) {
        return new Response(
          JSON.stringify({
            items: [],
            total_count: 5,
          }),
          { status: 200 }
        );
      }

      return new Response(
        JSON.stringify({
          items: [{ name: "Github" }],
          total_count: 5,
        }),
        { status: 200 }
      );
    }) as typeof fetch;

    await expect(
      fetchAllPages("https://api.example/v1/public/tools", fetchFn)
    ).rejects.toThrow(/read 1 of 5/);
  });
});

describe("extractToolkitRequirements", () => {
  it("maps catalog authorization and secrets onto tool auth fields", () => {
    expect(extractToolkitRequirements(githubCatalogEntry.requirements)).toEqual(
      {
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo"],
        },
        secrets: ["GITHUB_SERVER_URL"],
      }
    );
  });

  it("strips the arcade- prefix so the provider id matches its docs page", () => {
    expect(
      extractToolkitRequirements({
        authorization: {
          items: { powerbi: { provider_id: "arcade-microsoft-powerbi" } },
        },
      }).auth?.providerId
    ).toBe("microsoft-powerbi");
  });

  it("leaves an unprefixed provider id alone", () => {
    expect(
      extractToolkitRequirements({
        authorization: { items: { salesforce: { provider_id: "salesforce" } } },
      }).auth?.providerId
    ).toBe("salesforce");
  });

  it("returns no auth when only secrets are required", () => {
    expect(
      extractToolkitRequirements({
        authorization: { items: {} },
        secrets: { items: { SERP_API_KEY: {} } },
      })
    ).toEqual({
      auth: null,
      secrets: ["SERP_API_KEY"],
    });
  });
});

describe("transformPublicToolItem", () => {
  it("fans toolkit requirements out to each tool", () => {
    const tool = transformPublicToolItem(
      githubTool,
      githubCatalogEntry.requirements
    );

    expect(tool.auth).toEqual({
      providerId: "github",
      providerType: "oauth2",
      scopes: ["repo"],
    });
    expect(tool.secrets).toEqual(["GITHUB_SERVER_URL"]);
    expect(tool.metadata?.behavior.readOnly).toBe(false);
  });
});

describe("groupToolsByToolkit", () => {
  it("groups tools by toolkit name", () => {
    const grouped = groupToolsByToolkit([
      githubTool,
      {
        ...githubTool,
        qualified_name: "Slack.SendMessage",
        toolkit: { name: "Slack" },
      },
    ]);

    expect(grouped.get("Github")).toHaveLength(1);
    expect(grouped.get("Slack")).toHaveLength(1);
  });
});

describe("PublicCatalogApiSource", () => {
  it("loads catalog and tools once, then filters by toolkit", async () => {
    let catalogCalls = 0;
    let toolsCalls = 0;

    const fetchFn = (async (input: string | URL | Request) => {
      const url = new URL(input.toString());

      if (url.pathname.endsWith("/public/tool_catalog")) {
        catalogCalls += 1;
        return new Response(
          JSON.stringify({
            items: [githubCatalogEntry],
            total_count: 1,
          }),
          { status: 200 }
        );
      }

      if (url.pathname.endsWith("/public/tools")) {
        toolsCalls += 1;
        return new Response(
          JSON.stringify({
            items: [githubTool],
            total_count: 1,
          }),
          { status: 200 }
        );
      }

      return new Response("not found", { status: 404 });
    }) as typeof fetch;

    const source = new PublicCatalogApiSource({
      baseUrl: "https://api.example",
      fetchFn,
    });

    const first = await source.fetchToolsByToolkit("Github");
    const second = await source.fetchAllTools({ toolkitId: "Github" });

    expect(first).toHaveLength(1);
    expect(second).toHaveLength(1);
    expect(first[0]?.auth?.providerId).toBe("github");
    expect(catalogCalls).toBe(1);
    expect(toolsCalls).toBe(1);
  });

  it("serves toolkit branding from the same catalog read", async () => {
    let catalogCalls = 0;
    const source = new PublicCatalogApiSource({
      baseUrl: "https://experience.example/api",
      fetchFn: stubCatalogFetch([githubCatalogEntry], [githubTool], () => {
        catalogCalls += 1;
      }),
    });

    const tools = await source.fetchAllTools();
    const metadata = await source.getToolkitMetadata("Github");

    expect(tools).toHaveLength(1);
    expect(metadata).toEqual({
      id: "Github",
      label: "GitHub",
      category: "development",
      iconUrl: "https://design-system.arcade.dev/icons/github.svg",
      isBYOC: false,
      isPro: false,
      type: "arcade",
      docsLink:
        "https://docs.arcade.dev/en/resources/integrations/development/github",
      isComingSoon: false,
      isHidden: false,
    });
    expect(catalogCalls).toBe(1);
  });

  it("looks branding up by catalog name, branding id, or label", async () => {
    const source = new PublicCatalogApiSource({
      baseUrl: "https://experience.example/api",
      fetchFn: stubCatalogFetch([githubCatalogEntry], [githubTool]),
    });

    // The catalog says "Github" where the branding block says "GitHub".
    expect((await source.getToolkitMetadata("GitHub"))?.id).toBe("Github");
    expect((await source.getToolkitMetadata("github"))?.id).toBe("Github");
    expect(await source.getToolkitMetadata("Slack")).toBeNull();
  });

  it("lists each toolkit once despite the multi-key branding index", async () => {
    const source = new PublicCatalogApiSource({
      baseUrl: "https://experience.example/api",
      fetchFn: stubCatalogFetch([githubCatalogEntry], [githubTool]),
    });

    expect(await source.getAllToolkitsMetadata()).toHaveLength(1);
    expect(await source.listToolkitIds()).toEqual(["Github"]);
  });

  it("reports no branding when the experience API drops it", async () => {
    const source = new PublicCatalogApiSource({
      baseUrl: "https://experience.example/api",
      fetchFn: stubCatalogFetch(
        [{ ...githubCatalogEntry, metadata: null }],
        [githubTool]
      ),
    });

    expect(await source.getToolkitMetadata("Github")).toBeNull();
    expect(await source.getAllToolkitsMetadata()).toEqual([]);
    expect(await source.fetchAllTools()).toHaveLength(1);
  });
});

describe("transformPublicToolkitMetadata", () => {
  it("prefers the public icon and keys off the catalog name", () => {
    const metadata = transformPublicToolkitMetadata({
      ...githubCatalogEntry,
      metadata: { ...githubBranding, iconUrl: "https://internal/github.svg" },
    });

    expect(metadata?.id).toBe("Github");
    expect(metadata?.iconUrl).toBe(
      "https://design-system.arcade.dev/icons/github.svg"
    );
  });

  it("returns null for a category the generator does not publish", () => {
    expect(
      transformPublicToolkitMetadata({
        ...githubCatalogEntry,
        metadata: { ...githubBranding, category: "not-a-category" },
      })
    ).toBeNull();
  });

  it("returns null when no icon is available", () => {
    const { publicIconUrl: _publicIconUrl, ...withoutIcon } = githubBranding;

    expect(
      transformPublicToolkitMetadata({
        ...githubCatalogEntry,
        metadata: withoutIcon,
      })
    ).toBeNull();
  });
});

describe("createPublicCatalogSources", () => {
  it("merges tools and branding without a design-system read", async () => {
    const { toolkitDataSource } = createPublicCatalogSources({
      baseUrl: "https://experience.example/api",
      fetchFn: stubCatalogFetch([githubCatalogEntry], [githubTool]),
    });

    const data = await toolkitDataSource.fetchToolkitData("Github");

    expect(data.tools).toHaveLength(1);
    expect(data.metadata?.label).toBe("GitHub");
  });
});
