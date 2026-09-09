import { describe, expect, it } from "vitest";
import { PublicCatalogApiSource } from "../../src/sources/public-catalog-api";
import { fetchAllPages } from "../../src/sources/public-catalog-pagination";
import {
  extractToolkitRequirements,
  groupToolsByToolkit,
  transformPublicToolItem,
} from "../../src/sources/public-catalog-schema";

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
          providerId: "arcade-github",
          providerType: "oauth2",
          scopes: ["repo"],
        },
        secrets: ["GITHUB_SERVER_URL"],
      }
    );
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
      providerId: "arcade-github",
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
    expect(first[0]?.auth?.providerId).toBe("arcade-github");
    expect(catalogCalls).toBe(1);
    expect(toolsCalls).toBe(1);
  });
});
