/**
 * Tests for the Data Merger
 *
 * These tests use in-memory implementations (NOT mocks) to verify
 * the merge logic works correctly.
 */
import { describe, expect, it } from "vitest";
import {
  computeAllScopes,
  DataMerger,
  determineAuthType,
  extractVersion,
  getProviderId,
  groupToolsByToolkit,
  mergeToolkit,
  type ToolExampleGenerator,
  type ToolkitSummaryGenerator,
} from "../../src/merger/data-merger.js";
import {
  EmptyCustomSectionsSource,
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory.js";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source.js";
import type {
  CustomSections,
  ToolDefinition,
  ToolkitMetadata,
} from "../../src/types/index.js";

// ============================================================================
// Test Fixtures - Realistic data matching production schema
// ============================================================================

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "Toolkit description",
  parameters: [
    {
      name: "param1",
      type: "string",
      required: true,
      description: "First parameter",
      enum: null,
      inferrable: true,
    },
  ],
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  secrets: [],
  output: {
    type: "object",
    description: "Result",
  },
  ...overrides,
});

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  id: "TestKit",
  label: "Test Kit",
  category: "development",
  iconUrl: "https://example.com/icon.svg",
  isBYOC: false,
  isPro: false,
  type: "arcade",
  docsLink: "https://docs.example.com/test",
  isComingSoon: false,
  isHidden: false,
  ...overrides,
});

const createCustomSections = (
  overrides: Partial<CustomSections> = {}
): CustomSections => ({
  documentationChunks: [],
  customImports: [],
  subPages: [],
  toolChunks: {},
  ...overrides,
});

const createStubGenerator = (): ToolExampleGenerator => ({
  generate: async (tool) => ({
    codeExample: {
      toolName: tool.qualifiedName,
      parameters: {},
      requiresAuth: tool.auth !== null,
      authProvider: tool.auth?.providerId ?? undefined,
      tabLabel: tool.auth
        ? "Call the Tool with User Authorization"
        : "Call the Tool",
    },
    secretsInfo: tool.secrets.map((secret) => ({
      name: secret,
      type: "unknown",
    })),
  }),
});

const createStubSummaryGenerator = (
  summary: string
): ToolkitSummaryGenerator => ({
  generate: async (toolkit) => `${summary} (${toolkit.id})`,
});

const createCountingGenerator = () => {
  let calls = 0;
  const generator: ToolExampleGenerator = {
    generate: async (tool) => {
      calls += 1;
      return {
        codeExample: {
          toolName: tool.qualifiedName,
          parameters: {},
          requiresAuth: tool.auth !== null,
          authProvider: tool.auth?.providerId ?? undefined,
          tabLabel: tool.auth
            ? "Call the Tool with User Authorization"
            : "Call the Tool",
        },
        secretsInfo: tool.secrets.map((secret) => ({
          name: secret,
          type: "unknown",
        })),
      };
    },
  };

  return {
    generator,
    getCalls: () => calls,
  };
};

const createCountingSummaryGenerator = () => {
  let calls = 0;
  const generator: ToolkitSummaryGenerator = {
    generate: async () => {
      calls += 1;
      return "Generated summary";
    },
  };

  return {
    generator,
    getCalls: () => calls,
  };
};

// ============================================================================
// Pure Function Tests
// ============================================================================

describe("groupToolsByToolkit", () => {
  it("should group tools by their toolkit name", () => {
    const tools = [
      createTool({ qualifiedName: "Github.CreateIssue" }),
      createTool({ qualifiedName: "Github.ListPRs" }),
      createTool({ qualifiedName: "Slack.SendMessage" }),
    ];

    const result = groupToolsByToolkit(tools);

    expect(result.size).toBe(2);
    expect(result.get("Github")).toHaveLength(2);
    expect(result.get("Slack")).toHaveLength(1);
  });

  it("should handle empty array", () => {
    const result = groupToolsByToolkit([]);
    expect(result.size).toBe(0);
  });

  it("should skip tools with invalid qualified names", () => {
    const tools = [
      createTool({ qualifiedName: "Github.CreateIssue" }),
      createTool({ qualifiedName: "" }), // Invalid
    ];

    const result = groupToolsByToolkit(tools);

    expect(result.size).toBe(1);
    expect(result.get("Github")).toHaveLength(1);
  });
});

describe("computeAllScopes", () => {
  it("should compute union of all scopes", () => {
    const tools = [
      createTool({
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["read", "write"],
        },
      }),
      createTool({
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["write", "delete"],
        },
      }),
    ];

    const result = computeAllScopes(tools);

    expect(result).toHaveLength(3);
    expect(result).toContain("read");
    expect(result).toContain("write");
    expect(result).toContain("delete");
  });

  it("should return sorted array", () => {
    const tools = [
      createTool({
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["z_scope", "a_scope"],
        },
      }),
    ];

    const result = computeAllScopes(tools);

    expect(result).toEqual(["a_scope", "z_scope"]);
  });

  it("should return empty array for tools without auth", () => {
    const tools = [createTool({ auth: null })];

    const result = computeAllScopes(tools);

    expect(result).toEqual([]);
  });
});

describe("determineAuthType", () => {
  it("should return oauth2 for oauth2 provider type", () => {
    const tools = [
      createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
      }),
    ];

    const result = determineAuthType(tools);

    expect(result).toBe("oauth2");
  });

  it("should return api_key for non-oauth2 provider type", () => {
    const tools = [
      createTool({
        auth: { providerId: "api", providerType: "api_key", scopes: [] },
      }),
    ];

    const result = determineAuthType(tools);

    expect(result).toBe("api_key");
  });

  it("should return mixed when oauth2 and api_key both exist", () => {
    const tools = [
      createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
      }),
      createTool({
        auth: { providerId: "stripe", providerType: "api_key", scopes: [] },
      }),
    ];

    const result = determineAuthType(tools);

    expect(result).toBe("mixed");
  });

  it("should ignore secrets when no auth exists", () => {
    const tools = [createTool({ auth: null, secrets: ["API_KEY"] })];

    const result = determineAuthType(tools);

    expect(result).toBe("none");
  });

  it("should return none when no auth and no secrets", () => {
    const tools = [createTool({ auth: null, secrets: [] })];

    const result = determineAuthType(tools);

    expect(result).toBe("none");
  });
});

describe("getProviderId", () => {
  it("should return provider ID from first tool with auth", () => {
    const tools = [
      createTool({ auth: null }),
      createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
      }),
    ];

    const result = getProviderId(tools);

    expect(result).toBe("github");
  });

  it("should return null when no tools have auth", () => {
    const tools = [createTool({ auth: null })];

    const result = getProviderId(tools);

    expect(result).toBeNull();
  });
});

describe("extractVersion", () => {
  it("should extract version from fully qualified name", () => {
    expect(extractVersion("Github.CreateIssue@1.0.0")).toBe("1.0.0");
    expect(extractVersion("Slack.SendMessage@2.1.3")).toBe("2.1.3");
  });

  it("should return 0.0.0 for names without version", () => {
    expect(extractVersion("Github.CreateIssue")).toBe("0.0.0");
  });
});

describe("ToolExampleGenerator", () => {
  it("should generate an example config for a tool", async () => {
    const tool = createTool({
      name: "CreateIssue",
      qualifiedName: "Github.CreateIssue",
    });
    const generator = createStubGenerator();

    const result = await generator.generate(tool);

    expect(result.codeExample.toolName).toBe("Github.CreateIssue");
    expect(result.codeExample.requiresAuth).toBe(true);
    expect(result.codeExample.authProvider).toBe("test");
  });

  it("should set requiresAuth to false when no auth", async () => {
    const tool = createTool({ auth: null });
    const generator = createStubGenerator();

    const result = await generator.generate(tool);

    expect(result.codeExample.requiresAuth).toBe(false);
    expect(result.codeExample.authProvider).toBeUndefined();
  });
});

// ============================================================================
// mergeToolkit Function Tests
// ============================================================================

describe("mergeToolkit", () => {
  it("should merge tools, metadata, and custom sections", async () => {
    const tools = [
      createTool({
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
        fullyQualifiedName: "TestKit.Tool1@1.2.0",
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["scope1"],
        },
      }),
      createTool({
        name: "Tool2",
        qualifiedName: "TestKit.Tool2",
        fullyQualifiedName: "TestKit.Tool2@1.2.0",
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["scope2"],
        },
      }),
    ];
    const metadata = createMetadata({ id: "TestKit", label: "Test Kit" });
    const customSections = createCustomSections({
      documentationChunks: [
        {
          type: "warning",
          location: "header",
          position: "after",
          content: "Warning!",
        },
      ],
    });

    const result = await mergeToolkit(
      "TestKit",
      tools,
      metadata,
      customSections,
      createStubGenerator()
    );

    expect(result.toolkit.id).toBe("TestKit");
    expect(result.toolkit.label).toBe("Test Kit");
    expect(result.toolkit.version).toBe("1.2.0");
    expect(result.toolkit.tools).toHaveLength(2);
    expect(result.toolkit.auth?.allScopes).toContain("scope1");
    expect(result.toolkit.auth?.allScopes).toContain("scope2");
    expect(result.toolkit.documentationChunks).toHaveLength(1);
    expect(result.warnings).toHaveLength(0);
  });

  it("should use default metadata when not provided", async () => {
    const tools = [createTool({ qualifiedName: "Unknown.Tool" })];

    const result = await mergeToolkit(
      "Unknown",
      tools,
      null,
      null,
      createStubGenerator()
    );

    expect(result.toolkit.label).toBe("Unknown");
    expect(result.toolkit.metadata.category).toBe("development");
    expect(result.warnings).toContain(
      "No metadata found for toolkit: Unknown - using defaults"
    );
  });

  it("should warn when no tools found", async () => {
    const result = await mergeToolkit(
      "Empty",
      [],
      createMetadata(),
      null,
      createStubGenerator()
    );

    expect(result.toolkit.tools).toHaveLength(0);
    expect(result.warnings).toContain("No tools found for toolkit: Empty");
  });

  it("should set auth to null when auth type is none", async () => {
    const tools = [createTool({ auth: null, secrets: [] })];

    const result = await mergeToolkit(
      "NoAuth",
      tools,
      null,
      null,
      createStubGenerator()
    );

    expect(result.toolkit.auth).toBeNull();
  });

  it("should include per-tool documentation chunks", async () => {
    const tools = [createTool({ name: "SpecialTool" })];
    const customSections = createCustomSections({
      toolChunks: {
        SpecialTool: [
          {
            type: "info",
            location: "parameters",
            position: "after",
            content: "Note about params",
          },
        ],
      },
    });

    const result = await mergeToolkit(
      "TestKit",
      tools,
      null,
      customSections,
      createStubGenerator()
    );

    expect(result.toolkit.tools[0]?.documentationChunks).toHaveLength(1);
  });

  it("should include secret classifications for tools", async () => {
    const generator: ToolExampleGenerator = {
      generate: async () => ({
        codeExample: {
          toolName: "TestKit.CreateIssue",
          parameters: {},
          requiresAuth: true,
          authProvider: "test",
          tabLabel: "Call the Tool with User Authorization",
        },
        secretsInfo: [
          { name: "API_KEY", type: "api_key" },
          { name: "WEBHOOK_SECRET", type: "webhook_secret" },
          { name: "ACCESS_TOKEN", type: "token" },
        ],
      }),
    };
    const tools = [
      createTool({
        secrets: ["API_KEY", "WEBHOOK_SECRET", "ACCESS_TOKEN"],
      }),
    ];

    const result = await mergeToolkit("TestKit", tools, null, null, generator);

    expect(result.toolkit.tools[0]?.secretsInfo).toEqual([
      { name: "API_KEY", type: "api_key" },
      { name: "WEBHOOK_SECRET", type: "webhook_secret" },
      { name: "ACCESS_TOKEN", type: "token" },
    ]);
  });

  it("should omit code examples when generator is missing", async () => {
    const tools = [createTool()];

    const result = await mergeToolkit("TestKit", tools, null, null, undefined);

    expect(result.toolkit.tools[0]?.codeExample).toBeUndefined();
    expect(result.toolkit.tools[0]?.secretsInfo).toEqual([]);
  });

  it("should reuse previous code examples without generator", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];
    const previousResult = await mergeToolkit(
      "TestKit",
      tools,
      null,
      null,
      createStubGenerator()
    );

    const result = await mergeToolkit("TestKit", tools, null, null, undefined, {
      previousToolkit: previousResult.toolkit,
    });

    expect(result.toolkit.tools[0]?.codeExample).toEqual(
      previousResult.toolkit.tools[0]?.codeExample
    );
    expect(result.toolkit.tools[0]?.secretsInfo).toEqual(
      previousResult.toolkit.tools[0]?.secretsInfo
    );
  });
});

// ============================================================================
// DataMerger Class Tests
// ============================================================================

describe("DataMerger", () => {
  const githubTool1 = createTool({
    name: "CreateIssue",
    qualifiedName: "Github.CreateIssue",
    fullyQualifiedName: "Github.CreateIssue@1.0.0",
    auth: { providerId: "github", providerType: "oauth2", scopes: ["repo"] },
  });

  const githubTool2 = createTool({
    name: "SetStarred",
    qualifiedName: "Github.SetStarred",
    fullyQualifiedName: "Github.SetStarred@1.0.0",
    auth: {
      providerId: "github",
      providerType: "oauth2",
      scopes: ["public_repo"],
    },
  });

  const slackTool = createTool({
    name: "SendMessage",
    qualifiedName: "Slack.SendMessage",
    fullyQualifiedName: "Slack.SendMessage@1.2.0",
    auth: {
      providerId: "slack",
      providerType: "oauth2",
      scopes: ["chat:write"],
    },
  });

  const githubMetadata = createMetadata({
    id: "Github",
    label: "GitHub",
    category: "development",
  });
  const slackMetadata = createMetadata({
    id: "Slack",
    label: "Slack",
    category: "social",
  });

  describe("mergeToolkit", () => {
    it("should merge data for a single toolkit", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.id).toBe("Github");
      expect(result.toolkit.label).toBe("GitHub");
      expect(result.toolkit.description).toBe("Toolkit description");
      expect(result.toolkit.tools).toHaveLength(2);
      expect(result.toolkit.auth?.allScopes).toContain("repo");
      expect(result.toolkit.auth?.allScopes).toContain("public_repo");
    });

    it("adds a summary when a summary generator is provided", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([githubTool1]),
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitSummaryGenerator: createStubSummaryGenerator("Toolkit summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Toolkit summary (Github)");
    });

    it("reuses the previous summary when toolkit input is unchanged", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([githubTool1]),
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Cached summary";

      const countingSummary = createCountingSummaryGenerator();
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitSummaryGenerator: countingSummary.generator,
        previousToolkits: new Map([["github", previousResult.toolkit]]),
      });

      const result = await merger.mergeToolkit("Github");

      expect(countingSummary.getCalls()).toBe(0);
      expect(result.toolkit.summary).toBe("Cached summary");
    });

    it("reuses previous examples when the tool is unchanged", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([githubTool1]),
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      const counting = createCountingGenerator();
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: counting.generator,
        previousToolkits: new Map([["github", previousResult.toolkit]]),
      });

      const result = await merger.mergeToolkit("Github");

      expect(counting.getCalls()).toBe(0);
      expect(result.toolkit.tools[0]?.codeExample).toEqual(
        previousResult.toolkit.tools[0]?.codeExample
      );
    });

    it("calls the generator when the tool definition changes", async () => {
      const updatedTool = createTool({
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        description: "Updated description",
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo"],
        },
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([updatedTool]),
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      const counting = createCountingGenerator();
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: counting.generator,
        previousToolkits: new Map([["github", previousResult.toolkit]]),
      });

      await merger.mergeToolkit("Github");

      expect(counting.getCalls()).toBe(1);
    });

    it("should merge data using unified toolkit data source", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.id).toBe("Github");
      expect(result.toolkit.label).toBe("GitHub");
      expect(result.toolkit.tools).toHaveLength(2);
      expect(result.toolkit.auth?.allScopes).toContain("repo");
      expect(result.toolkit.auth?.allScopes).toContain("public_repo");
    });

    it("should filter by version when specified", async () => {
      const tools = [
        createTool({
          qualifiedName: "Test.Tool",
          fullyQualifiedName: "Test.Tool@1.0.0",
        }),
        createTool({
          qualifiedName: "Test.Tool",
          fullyQualifiedName: "Test.Tool@2.0.0",
        }),
      ];

      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource(tools),
        metadataSource: new InMemoryMetadataSource([]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const result = await merger.mergeToolkit("Test", "1.0.0");

      expect(result.toolkit.tools).toHaveLength(1);
      expect(result.toolkit.version).toBe("1.0.0");
    });

    it("should handle case-insensitive toolkit IDs", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([githubTool1]),
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const result = await merger.mergeToolkit("github"); // lowercase

      expect(result.toolkit.id).toBe("github");
      expect(result.toolkit.label).toBe("GitHub");
    });
  });

  describe("mergeAllToolkits", () => {
    it("should merge all toolkits found in tools", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const results = await merger.mergeAllToolkits();

      expect(results).toHaveLength(2);

      const githubResult = results.find((r) => r.toolkit.id === "Github");
      const slackResult = results.find((r) => r.toolkit.id === "Slack");

      expect(githubResult?.toolkit.tools).toHaveLength(2);
      expect(slackResult?.toolkit.tools).toHaveLength(1);
    });

    it("should return empty array when no tools", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([]),
        metadataSource: new InMemoryMetadataSource([]),
      });
      const merger = new DataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
      });

      const results = await merger.mergeAllToolkits();

      expect(results).toHaveLength(0);
    });
  });
});
