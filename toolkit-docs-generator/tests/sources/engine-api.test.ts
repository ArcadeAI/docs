import { describe, expect, it } from "vitest";

import { EngineApiSource } from "../../src/sources/engine-api.js";

type ToolMetadataItem = {
  fully_qualified_name: string;
  qualified_name: string;
  name: string;
  description: string | null;
  toolkit: {
    name: string;
    version: string;
    description: string | null;
  };
  input: {
    parameters: Array<{
      name: string;
      required: boolean;
      description: string | null;
      value_schema: {
        val_type: string;
        inner_val_type: string | null;
        enum: string[] | null;
      };
      inferrable: boolean;
    }>;
  };
  output?: {
    description: string | null;
    value_schema: {
      val_type: string;
      inner_val_type: string | null;
      enum: string[] | null;
    } | null;
  } | null;
  requirements?: {
    authorization: {
      id?: string | null;
      provider_id: string | null;
      provider_type: string | null;
      scopes: string[];
    } | null;
    secrets: Array<{ key: string }> | null;
  } | null;
};

const createItems = (): ToolMetadataItem[] => [
  {
    fully_qualified_name: "Github.CreateIssue@1.0.0",
    qualified_name: "Github.CreateIssue",
    name: "CreateIssue",
    description: "Create issue",
    toolkit: {
      name: "Github",
      version: "1.0.0",
      description: "GitHub toolkit",
    },
    input: { parameters: [] },
    output: null,
    requirements: {
      authorization: {
        provider_id: "github",
        provider_type: "oauth2",
        scopes: ["repo"],
      },
      secrets: [{ key: "GITHUB_API_KEY" }],
    },
  },
  {
    fully_qualified_name: "Slack.SendMessage@1.2.0",
    qualified_name: "Slack.SendMessage",
    name: "SendMessage",
    description: "Send message",
    toolkit: {
      name: "Slack",
      version: "1.2.0",
      description: "Slack toolkit",
    },
    input: { parameters: [] },
    output: {
      description: "Confirmation",
      value_schema: null,
    },
    requirements: {
      authorization: {
        provider_id: null,
        provider_type: "oauth2",
        scopes: ["chat:write"],
      },
      secrets: null,
    },
  },
];

const createFetchStub =
  (items: ToolMetadataItem[], status = 200) =>
  async (input: RequestInfo | URL) => {
    if (status !== 200) {
      return new Response("error", { status });
    }

    const url = new URL(input.toString());
    const limit = Number(url.searchParams.get("limit") ?? items.length);
    const offset = Number(url.searchParams.get("offset") ?? 0);
    const toolkit = url.searchParams.get("toolkit");
    const providerId = url.searchParams.get("provider_id");
    const version = url.searchParams.get("version");

    let filtered = items;
    if (toolkit) {
      filtered = filtered.filter((item) => item.toolkit.name === toolkit);
    }
    if (providerId) {
      filtered = filtered.filter(
        (item) => item.requirements?.authorization?.provider_id === providerId
      );
    }
    if (version) {
      filtered = filtered.filter((item) =>
        item.fully_qualified_name.endsWith(`@${version}`)
      );
    }

    const pageItems = filtered.slice(offset, offset + limit);

    return new Response(
      JSON.stringify({
        items: pageItems,
        total_count: filtered.length,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

const createErrorFetchStub = (status: number, payload: unknown) => async () =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const createInspectFetchStub =
  (inspect: (params: URLSearchParams) => void) =>
  async (input: RequestInfo | URL) => {
    const url = new URL(input.toString());
    inspect(url.searchParams);
    return new Response(
      JSON.stringify({
        items: [],
        total_count: 0,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  };

const createSummaryFetchStub =
  (payload: unknown, inspect?: (params: URLSearchParams) => void) =>
  async (input: RequestInfo | URL) => {
    const url = new URL(input.toString());
    inspect?.(url.searchParams);
    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  };

const createInvalidJsonFetchStub =
  (contentType = "application/json") =>
  async () =>
    new Response("not-json", {
      status: 200,
      headers: { "Content-Type": contentType },
    });

describe("EngineApiSource", () => {
  it("fetches and transforms tool metadata with pagination", async () => {
    const items = createItems();
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      pageSize: 1,
      fetchFn: createFetchStub(items),
    });

    const tools = await source.fetchAllTools();

    expect(tools).toHaveLength(2);
    expect(tools[0]?.toolkitDescription).toBe("GitHub toolkit");
    expect(tools[0]?.secrets).toEqual(["GITHUB_API_KEY"]);
    expect(tools[1]?.output?.type).toBe("unknown");
    expect(tools[1]?.auth?.providerId).toBeNull();
  });

  it("filters tools by toolkit and provider", async () => {
    const items = createItems();
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createFetchStub(items),
    });

    const tools = await source.fetchAllTools({
      toolkitId: "Github",
      providerId: "github",
    });

    expect(tools).toHaveLength(1);
    expect(tools[0]?.qualifiedName).toBe("Github.CreateIssue");
  });

  it("returns false when the endpoint is not available", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createFetchStub(createItems(), 500),
    });

    const available = await source.isAvailable();

    expect(available).toBe(false);
  });

  it("includes error details from API responses", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createErrorFetchStub(400, {
        name: "BadRequest",
        message: "Invalid query",
      }),
    });

    await expect(source.fetchAllTools()).rejects.toThrow(
      "BadRequest: Invalid query"
    );
  });

  it("clamps page size to the maximum limit", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      pageSize: 1500, // Over max of 1000
      fetchFn: createInspectFetchStub((params) => {
        expect(params.get("limit")).toBe("1000"); // Capped at 1000
      }),
    });

    await source.fetchAllTools();
  });

  it("forces include_all_versions when filtering by version", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createInspectFetchStub((params) => {
        expect(params.get("include_all_versions")).toBe("true");
        expect(params.get("version")).toBe("0.1.3");
      }),
    });

    await source.fetchAllTools({ version: "0.1.3" });
  });

  it("fetches toolkit summary using summary mode", async () => {
    const summaryPayload = {
      total_tools: 2,
      total_toolkits: 1,
      starter_toolkits: 0,
      toolkits: [
        {
          name: "Github",
          version: "1.0.0",
          tool_count: 2,
          requires_secrets: true,
          requires_oauth: true,
        },
      ],
    };

    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createSummaryFetchStub(summaryPayload, (params) => {
        expect(params.get("mode")).toBe("summary");
      }),
    });

    const summary = await source.fetchToolkitsSummary();

    expect(summary.totalToolkits).toBe(1);
    expect(summary.toolkits[0]).toEqual({
      name: "Github",
      version: "1.0.0",
      toolCount: 2,
      requiresSecrets: true,
      requiresOauth: true,
    });
  });

  it("throws a clear error when tool metadata response is invalid JSON", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createInvalidJsonFetchStub(),
    });

    await expect(source.fetchAllTools()).rejects.toThrow(
      "Engine API returned invalid JSON for tool metadata"
    );
  });

  it("throws a clear error when summary response is invalid JSON", async () => {
    const source = new EngineApiSource({
      baseUrl: "https://api.arcade.dev",
      apiKey: "test",
      fetchFn: createInvalidJsonFetchStub(),
    });

    await expect(source.fetchToolkitsSummary()).rejects.toThrow(
      "Engine API returned invalid JSON for tool metadata summary"
    );
  });
});
