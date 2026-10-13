/**
 * Tests for the Data Merger
 *
 * These tests use in-memory implementations (NOT mocks) to verify
 * the merge logic works correctly.
 */
import { describe, expect, it, vi } from "vitest";
import type { SecretEditGenerator } from "../../src/llm/secret-edit-generator";
import {
  computeAllScopes,
  DataMerger,
  determineAuthType,
  getCustomSectionsSourceHash,
  getProviderId,
  groupToolsByToolkit,
  mergeToolkit,
  type ToolExampleGenerator,
  type ToolkitSummaryGenerator,
} from "../../src/merger/data-merger";
import {
  EmptyCustomSectionsSource,
  InMemoryCustomSectionsSource,
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory";
import type { ICustomSectionsSource } from "../../src/sources/interfaces";
import {
  createCombinedToolkitDataSource,
  type ToolkitData,
  type ToolkitDataSource,
} from "../../src/sources/toolkit-data-source";
import type {
  CustomSections,
  ToolDefinition,
  ToolkitMetadata,
} from "../../src/types/index";
import { extractVersion } from "../../src/utils/index";

// ============================================================================
// Test Fixtures - Realistic data matching production schema
// ============================================================================

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: {
    providerId: "test",
    providerType: "oauth2",
    scopes: ["read", "write"],
  },
  description: "A test tool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  name: "TestTool",
  output: {
    description: "Result",
    type: "object",
  },
  parameters: [
    {
      description: "First parameter",
      enum: null,
      inferrable: true,
      name: "param1",
      required: true,
      type: "string",
    },
  ],
  qualifiedName: "TestKit.TestTool",
  secrets: [],
  toolkitDescription: "Toolkit description",
  ...overrides,
});

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.example.com/test",
  iconUrl: "https://example.com/icon.svg",
  id: "TestKit",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  label: "Test Kit",
  type: "arcade",
  ...overrides,
});

const createCustomSections = (
  overrides: Partial<CustomSections> = {}
): CustomSections => ({
  customImports: [],
  documentationChunks: [],
  subPages: [],
  toolChunks: {},
  ...overrides,
});

const createStubGenerator = (): ToolExampleGenerator => ({
  generate: async (tool) => ({
    codeExample: {
      authProvider: tool.auth?.providerId ?? undefined,
      parameters: {},
      requiresAuth: tool.auth !== null,
      tabLabel: tool.auth
        ? "Call the Tool with User Authorization"
        : "Call the Tool",
      toolName: tool.qualifiedName,
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
          authProvider: tool.auth?.providerId ?? undefined,
          parameters: {},
          requiresAuth: tool.auth !== null,
          tabLabel: tool.auth
            ? "Call the Tool with User Authorization"
            : "Call the Tool",
          toolName: tool.qualifiedName,
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
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["scope1"],
        },
        fullyQualifiedName: "TestKit.Tool1@1.2.0",
        name: "Tool1",
        qualifiedName: "TestKit.Tool1",
      }),
      createTool({
        auth: {
          providerId: "test",
          providerType: "oauth2",
          scopes: ["scope2"],
        },
        fullyQualifiedName: "TestKit.Tool2@1.2.0",
        name: "Tool2",
        qualifiedName: "TestKit.Tool2",
      }),
    ];
    const metadata = createMetadata({ id: "TestKit", label: "Test Kit" });
    const customSections = createCustomSections({
      documentationChunks: [
        {
          content: "Warning!",
          location: "header",
          position: "after",
          type: "warning",
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
    expect(result.toolkit.curationSourceHash).toBe(
      getCustomSectionsSourceHash(customSections)
    );
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
    // The fabricated category can't be trusted enough to route or display —
    // isHidden neutralizes it until real design-system metadata arrives.
    expect(result.toolkit.metadata.isHidden).toBe(true);
    // Must match the real integration route shape (see
    // app/_lib/toolkit-static-params.ts getToolkitCanonicalPath), never the
    // retired /en/mcp-servers/ prefix.
    expect(result.toolkit.metadata.docsLink).toBe(
      "https://docs.arcade.dev/en/resources/integrations/development/unknown"
    );
    expect(result.warnings).toContain(
      "No metadata found for toolkit: Unknown - using defaults"
    );
    expect(result.usedDefaultMetadata).toBe(true);
  });

  it("does not flag usedDefaultMetadata when design-system metadata is present", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];

    const result = await mergeToolkit(
      "TestKit",
      tools,
      createMetadata(),
      null,
      createStubGenerator()
    );

    expect(result.usedDefaultMetadata).toBe(false);
  });

  it("infers a readable label from toolkit description without metadata", async () => {
    const tools = [
      createTool({
        fullyQualifiedName: "MicrosoftOnedrive.ListFolderItems@1.0.0",
        qualifiedName: "MicrosoftOnedrive.ListFolderItems",
        toolkitDescription: "Arcade.dev LLM tools for Microsoft OneDrive",
      }),
    ];

    const result = await mergeToolkit(
      "MicrosoftOnedrive",
      tools,
      null,
      null,
      undefined
    );

    expect(result.toolkit.label).toBe("Microsoft OneDrive");
  });

  it("humanizes toolkit ID when metadata and description label are unavailable", async () => {
    const tools = [
      createTool({
        fullyQualifiedName: "MyCustomApi.Run@1.0.0",
        qualifiedName: "MyCustomApi.Run",
        toolkitDescription: "",
      }),
    ];

    const result = await mergeToolkit(
      "MyCustomApi",
      tools,
      null,
      null,
      undefined
    );

    expect(result.toolkit.label).toBe("My Custom API");
  });

  it("marks *Api toolkits as arcade_starter", async () => {
    const tools = [
      createTool({
        fullyQualifiedName: "GithubApi.ListRepos@1.0.0",
        qualifiedName: "GithubApi.ListRepos",
      }),
    ];
    const metadata = createMetadata({ id: "GithubApi", type: "arcade" });

    const result = await mergeToolkit(
      "GithubApi",
      tools,
      metadata,
      null,
      createStubGenerator()
    );

    expect(result.toolkit.metadata.type).toBe("arcade_starter");
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
            content: "Note about params",
            location: "parameters",
            position: "after",
            type: "info",
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
          authProvider: "test",
          parameters: {},
          requiresAuth: true,
          tabLabel: "Call the Tool with User Authorization",
          toolName: "TestKit.CreateIssue",
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

  it("should record failed tools when example generation fails", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.FailTool" })];
    const failingGenerator: ToolExampleGenerator = {
      generate: async () => {
        throw new Error("LLM error");
      },
    };

    const result = await mergeToolkit(
      "TestKit",
      tools,
      null,
      null,
      failingGenerator
    );

    expect(result.failedTools).toHaveLength(1);
    expect(result.failedTools[0]?.qualifiedName).toBe("TestKit.FailTool");
    expect(
      result.warnings.some((warning) => warning.includes("LLM error"))
    ).toBe(true);
    expect(result.toolkit.tools[0]?.codeExample).toBeUndefined();
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

  it("should preserve toolkit-level custom sections from previous output when source is empty", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];

    // Create a previous result with custom sections
    const previousResult = await mergeToolkit(
      "TestKit",
      tools,
      null,
      createCustomSections({
        customImports: ['import CustomComponent from "@/components/custom";'],
        documentationChunks: [
          {
            content: "Important warning!",
            location: "header",
            position: "after",
            type: "warning",
          },
        ],
        subPages: ["environment-variables"],
      }),
      createStubGenerator()
    );

    // No curation file for this toolkit (null source) — carry forward.
    const result = await mergeToolkit("TestKit", tools, null, null, undefined, {
      previousToolkit: previousResult.toolkit,
    });

    expect(result.toolkit.documentationChunks).toHaveLength(1);
    expect(result.toolkit.documentationChunks[0]?.content).toBe(
      "Important warning!"
    );
    expect(result.toolkit.customImports).toHaveLength(1);
    expect(result.toolkit.subPages).toHaveLength(1);
  });

  it("should clear toolkit-level custom sections when curation is authoritative but empty", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];

    const previousResult = await mergeToolkit(
      "TestKit",
      tools,
      null,
      createCustomSections({
        customImports: ['import CustomComponent from "@/components/custom";'],
        documentationChunks: [
          {
            content: "Important warning!",
            location: "header",
            position: "after",
            type: "warning",
          },
        ],
        subPages: ["environment-variables"],
      }),
      createStubGenerator()
    );

    const result = await mergeToolkit(
      "TestKit",
      tools,
      null,
      createCustomSections(),
      undefined,
      { previousToolkit: previousResult.toolkit }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(0);
    expect(result.toolkit.customImports).toHaveLength(0);
    expect(result.toolkit.subPages).toHaveLength(0);
  });

  it("should use source custom sections over previous when source has content", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];

    // Create previous with old custom sections
    const previousResult = await mergeToolkit(
      "TestKit",
      tools,
      null,
      createCustomSections({
        documentationChunks: [
          {
            content: "Old warning",
            location: "header",
            position: "after",
            type: "warning",
          },
        ],
      }),
      createStubGenerator()
    );

    // Run with new custom sections from source - should use source
    const newCustomSections = createCustomSections({
      documentationChunks: [
        {
          content: "New info from source",
          location: "header",
          position: "before",
          type: "info",
        },
      ],
    });

    const result = await mergeToolkit(
      "TestKit",
      tools,
      null,
      newCustomSections,
      undefined,
      { previousToolkit: previousResult.toolkit }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(1);
    expect(result.toolkit.documentationChunks[0]?.content).toBe(
      "New info from source"
    );
  });

  it("should preserve per-tool documentation chunks from previous output when source is empty", async () => {
    const tools = [
      createTool({ name: "SpecialTool", qualifiedName: "TestKit.SpecialTool" }),
    ];

    // Create previous with tool-level custom sections
    const previousResult = await mergeToolkit(
      "TestKit",
      tools,
      null,
      createCustomSections({
        toolChunks: {
          SpecialTool: [
            {
              content: "Note about params",
              location: "parameters",
              position: "after",
              type: "info",
            },
          ],
        },
      }),
      createStubGenerator()
    );

    // Run again with empty custom sections - should preserve previous tool chunks
    const result = await mergeToolkit("TestKit", tools, null, null, undefined, {
      previousToolkit: previousResult.toolkit,
    });

    expect(result.toolkit.tools[0]?.documentationChunks).toHaveLength(1);
    expect(result.toolkit.tools[0]?.documentationChunks[0]?.content).toBe(
      "Note about params"
    );
  });
});

// ============================================================================
// mergeToolkit provider ID fallback tests
// ============================================================================

describe("mergeToolkit resolveProviderId fallback", () => {
  it("uses resolveProviderId when tools have null providerId", async () => {
    const tools = [
      createTool({
        auth: { providerId: null, providerType: "oauth2", scopes: ["read"] },
        fullyQualifiedName: "Salesforce.ReadAccount@2.0.1",
        name: "ReadAccount",
        qualifiedName: "Salesforce.ReadAccount",
      }),
    ];

    const result = await mergeToolkit(
      "Salesforce",
      tools,
      createMetadata({ id: "Salesforce", label: "Salesforce" }),
      null,
      undefined,
      {
        resolveProviderId: (toolkitId) =>
          toolkitId === "Salesforce" ? "salesforce" : null,
      }
    );

    expect(result.toolkit.auth?.providerId).toBe("salesforce");
    expect(result.toolkit.tools[0]?.auth?.providerId).toBe("salesforce");
  });

  it("does NOT override an existing non-null providerId from tools", async () => {
    const tools = [
      createTool({
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo"],
        },
        fullyQualifiedName: "Github.CreateIssue@2.0.1",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      }),
    ];

    const result = await mergeToolkit(
      "Github",
      tools,
      createMetadata({ id: "Github", label: "GitHub" }),
      null,
      undefined,
      {
        resolveProviderId: () => "should-not-be-used",
      }
    );

    expect(result.toolkit.auth?.providerId).toBe("github");
  });

  it("does NOT call resolver when tools have no auth at all", async () => {
    let resolverCalled = false;
    const tools = [
      createTool({
        auth: null,
        fullyQualifiedName: "NoAuth.PublicTool@1.0.0",
        name: "PublicTool",
        qualifiedName: "NoAuth.PublicTool",
        secrets: [],
      }),
    ];

    const result = await mergeToolkit(
      "NoAuth",
      tools,
      createMetadata({ id: "NoAuth", label: "No Auth" }),
      null,
      undefined,
      {
        resolveProviderId: () => {
          resolverCalled = true;
          return "unexpected";
        },
      }
    );

    expect(result.toolkit.auth).toBeNull();
    expect(resolverCalled).toBe(false);
  });

  it("leaves providerId null when resolver returns null", async () => {
    const tools = [
      createTool({
        auth: { providerId: null, providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Unknown.SomeTool@1.0.0",
        name: "SomeTool",
        qualifiedName: "Unknown.SomeTool",
      }),
    ];

    const result = await mergeToolkit(
      "Unknown",
      tools,
      createMetadata({ id: "Unknown", label: "Unknown" }),
      null,
      undefined,
      {
        resolveProviderId: () => null,
      }
    );

    expect(result.toolkit.auth?.providerId).toBeNull();
  });

  it("leaves providerId null when no resolver is provided", async () => {
    const tools = [
      createTool({
        auth: { providerId: null, providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Unknown.SomeTool@1.0.0",
        name: "SomeTool",
        qualifiedName: "Unknown.SomeTool",
      }),
    ];

    const result = await mergeToolkit(
      "Unknown",
      tools,
      createMetadata({ id: "Unknown", label: "Unknown" }),
      null,
      undefined
    );

    expect(result.toolkit.auth?.providerId).toBeNull();
  });
});

describe("mergeToolkit overview chunk handling", () => {
  it("rejects curation that targets a tool outside the toolkit", async () => {
    await expect(
      mergeToolkit(
        "TestKit",
        [createTool()],
        createMetadata(),
        createCustomSections({
          toolChunks: {
            MissingTool: [
              {
                content: "This target is stale.",
                location: "description",
                position: "after",
                type: "markdown",
              },
            ],
          },
        }),
        undefined
      )
    ).rejects.toThrow(
      "Curation for TestKit targets unknown tool(s): MissingTool"
    );
  });

  it("keeps toolkit-level overview chunks from source custom sections", async () => {
    const result = await mergeToolkit(
      "TestKit",
      [createTool()],
      createMetadata(),
      createCustomSections({
        documentationChunks: [
          {
            content: "## Overview\n\nOverview text.",
            location: "header",
            position: "before",
            type: "markdown",
          },
          {
            content: "Keep this warning.",
            location: "header",
            position: "after",
            type: "warning",
          },
        ],
      }),
      undefined
    );

    expect(result.toolkit.documentationChunks).toHaveLength(2);
    expect(
      result.toolkit.documentationChunks[0]?.content
        .toLowerCase()
        .startsWith("## overview")
    ).toBe(true);
    expect(result.toolkit.documentationChunks[1]?.content).toBe(
      "Keep this warning."
    );
  });

  it("preserves previous toolkit overview chunks when source is empty", async () => {
    const tools = [createTool({ qualifiedName: "TestKit.Tool1" })];
    const previous = await mergeToolkit(
      "TestKit",
      tools,
      createMetadata(),
      createCustomSections({
        documentationChunks: [
          {
            content: "## Overview\n\nOld overview.",
            location: "header",
            position: "before",
            type: "markdown",
          },
          {
            content: "Old tip.",
            location: "header",
            position: "after",
            type: "info",
          },
        ],
      }),
      createStubGenerator()
    );

    const result = await mergeToolkit(
      "TestKit",
      tools,
      createMetadata(),
      null,
      undefined,
      { previousToolkit: previous.toolkit }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(2);
    expect(
      result.toolkit.documentationChunks.some(
        (chunk) => chunk.content === "Old tip."
      )
    ).toBe(true);
    expect(
      result.toolkit.documentationChunks.some((chunk) =>
        chunk.content.toLowerCase().startsWith("## overview")
      )
    ).toBe(true);
  });
});

// ============================================================================
// DataMerger Class Tests
// ============================================================================

describe("DataMerger", () => {
  const githubTool1 = createTool({
    auth: { providerId: "github", providerType: "oauth2", scopes: ["repo"] },
    fullyQualifiedName: "Github.CreateIssue@1.0.0",
    name: "CreateIssue",
    qualifiedName: "Github.CreateIssue",
  });

  const githubTool2 = createTool({
    auth: {
      providerId: "github",
      providerType: "oauth2",
      scopes: ["public_repo"],
    },
    fullyQualifiedName: "Github.SetStarred@1.0.0",
    name: "SetStarred",
    qualifiedName: "Github.SetStarred",
  });

  const slackTool = createTool({
    auth: {
      providerId: "slack",
      providerType: "oauth2",
      scopes: ["chat:write"],
    },
    fullyQualifiedName: "Slack.SendMessage@1.2.0",
    name: "SendMessage",
    qualifiedName: "Slack.SendMessage",
  });

  const githubMetadata = createMetadata({
    category: "development",
    id: "Github",
    label: "GitHub",
  });
  const slackMetadata = createMetadata({
    category: "social",
    id: "Slack",
    label: "Slack",
  });

  describe("mergeToolkit", () => {
    it("should merge data for a single toolkit", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.id).toBe("Github");
      expect(result.toolkit.label).toBe("GitHub");
      expect(result.toolkit.description).toBe("Toolkit description");
      expect(result.toolkit.tools).toHaveLength(2);
      expect(result.toolkit.auth?.allScopes).toContain("repo");
      expect(result.toolkit.auth?.allScopes).toContain("public_repo");
    });

    it("adds a summary when no overview chunk is present", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Toolkit summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Toolkit summary (Github)");
    });

    it("skips summary generation when an overview chunk is present", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const countingSummary = createCountingSummaryGenerator();
      const overviewCustomSectionsSource = new InMemoryCustomSectionsSource({
        Github: createCustomSections({
          documentationChunks: [
            {
              content: "## Overview\n\nGenerated overview.",
              location: "header",
              position: "before",
              type: "markdown",
            },
          ],
        }),
      });
      const merger = new DataMerger({
        customSectionsSource: overviewCustomSectionsSource,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: countingSummary.generator,
      });

      const result = await merger.mergeToolkit("Github");

      expect(
        result.toolkit.documentationChunks.some((chunk) =>
          chunk.content.toLowerCase().startsWith("## overview")
        )
      ).toBe(true);
      expect(countingSummary.getCalls()).toBe(0);
      expect(result.toolkit.summary).toBeUndefined();
    });

    it("reuses the previous summary when toolkit input is unchanged", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
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
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: countingSummary.generator,
      });

      const result = await merger.mergeToolkit("Github");

      expect(countingSummary.getCalls()).toBe(0);
      expect(result.toolkit.summary).toBe("Cached summary");
    });

    it("does not reuse previous summary when current toolkit has an overview chunk", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
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
      const overviewCustomSectionsSource = new InMemoryCustomSectionsSource({
        Github: createCustomSections({
          documentationChunks: [
            {
              content: "## Overview\n\nGenerated overview.",
              location: "header",
              position: "before",
              type: "markdown",
            },
          ],
        }),
      });
      const merger = new DataMerger({
        customSectionsSource: overviewCustomSectionsSource,
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: countingSummary.generator,
      });

      const result = await merger.mergeToolkit("Github");

      expect(
        result.toolkit.documentationChunks.some((chunk) =>
          chunk.content.toLowerCase().startsWith("## overview")
        )
      ).toBe(true);
      expect(countingSummary.getCalls()).toBe(0);
      expect(result.toolkit.summary).toBeUndefined();
    });

    it("preserves previous summary when no LLM generator is available and the signature changed", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1, githubTool2]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Hand-authored summary";

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.tools).toHaveLength(2);
      expect(result.toolkit.summary).toBe("Hand-authored summary");
      expect(result.toolkit.summaryStale).toBe(true);
      expect(result.toolkit.summaryStaleReason).toBe(
        "llm_generator_unavailable"
      );
      expect(
        result.warnings.some((warning) =>
          warning.includes("Summary is stale for Github")
        )
      ).toBe(true);
    });

    it("preserves previous summary when the LLM generator throws", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1, githubTool2]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Hand-authored summary";

      const failingSummary: ToolkitSummaryGenerator = {
        generate: async () => {
          throw new Error("rate limited");
        },
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: failingSummary,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Hand-authored summary");
      expect(
        result.warnings.some((warning) =>
          warning.includes("Summary generation failed for Github")
        )
      ).toBe(true);
      expect(result.toolkit.summaryStale).toBe(true);
      expect(result.toolkit.summaryStaleReason).toBe("llm_generation_failed");
    });

    it("clears the stale flag when the generator succeeds on the next run", async () => {
      // A toolkit whose summary was stale on a prior run should come back
      // clean once the generator actually produces a new summary. This
      // proves the CI gate will stop flagging the toolkit once fixed.
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1, githubTool2]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Older summary";
      previousResult.toolkit.summaryStale = true;
      previousResult.toolkit.summaryStaleReason = "llm_generation_failed";

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Fresh summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Fresh summary (Github)");
      expect(result.toolkit.summaryStale).toBeUndefined();
      expect(result.toolkit.summaryStaleReason).toBeUndefined();
    });

    it("does not flag stale when the signature matches a fresh previous summary", async () => {
      // Baseline: if previous.summaryStale is falsy, signature match is a
      // valid proof of freshness and the reuse path should keep the
      // summary and stay clean.
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
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
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: countingSummary.generator,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Cached summary");
      expect(result.toolkit.summaryStale).toBeUndefined();
      expect(result.toolkit.summaryStaleReason).toBeUndefined();
      expect(countingSummary.getCalls()).toBe(0);
    });

    it("regenerates when signature matches but the previous summary was already stale", async () => {
      // If the previous summary was already flagged stale, a matching
      // signature does NOT prove freshness — the stale summary was
      // carried forward from an earlier toolset. The reuse fast path
      // must skip, and the LLM must actually regenerate.
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Stale carried-forward summary";
      previousResult.toolkit.summaryStale = true;
      previousResult.toolkit.summaryStaleReason = "llm_generation_failed";

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Fresh"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Fresh (Github)");
      expect(result.toolkit.summaryStale).toBeUndefined();
      expect(result.toolkit.summaryStaleReason).toBeUndefined();
    });

    it("keeps the stale flag when previous was stale, signature matches, and no generator is available", async () => {
      // Same as above, but the regen attempt is not possible. The carried-
      // forward summary remains, and the stale flag must persist so CI
      // keeps flagging the toolkit until a working LLM run produces a
      // fresh one.
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousResult.toolkit.summary = "Stale carried-forward summary";
      previousResult.toolkit.summaryStale = true;
      previousResult.toolkit.summaryStaleReason = "llm_generation_failed";

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.toolkit.summary).toBe("Stale carried-forward summary");
      expect(result.toolkit.summaryStale).toBe(true);
      expect(result.toolkit.summaryStaleReason).toBe(
        "llm_generator_unavailable"
      );
    });

    it("runs the secret-coherence editor when a removed secret still appears in a toolkit documentation chunk", async () => {
      const toolWithSecret = createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        secrets: ["GITHUB_SERVER_URL"],
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([toolWithSecret]),
      });

      const previousWithOldSecret = await mergeToolkit(
        "Github",
        [
          createTool({
            ...toolWithSecret,
            secrets: [
              "GITHUB_SERVER_URL",
              "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN",
            ],
          }),
        ],
        githubMetadata,
        null,
        createStubGenerator()
      );
      // Put the stale reference inside a toolkit-level doc chunk — chunks
      // persist verbatim across runs, unlike the summary which gets
      // regenerated when the signature changes.
      previousWithOldSecret.toolkit.documentationChunks = [
        {
          content:
            "| Secret | Required For |\n| `GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN` | Notifications |",
          location: "before_available_tools",
          position: "after",
          type: "section",
        },
      ];

      const cleanupSpy = vi.fn<SecretEditGenerator["cleanupStaleReferences"]>(
        async () =>
          "| Secret | Required For |\n| `GITHUB_SERVER_URL` | All tools |"
      );
      const coverageSpy = vi.fn(
        async (input: { content: string }) =>
          `${input.content}\n\n[config link]`
      );
      const secretEditGenerator: SecretEditGenerator = {
        cleanupStaleReferences: cleanupSpy,
        fillCoverageGaps: coverageSpy,
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousWithOldSecret.toolkit]]),
        secretEditGenerator,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Stub summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(cleanupSpy).toHaveBeenCalledTimes(1);
      const cleanupCall = cleanupSpy.mock.calls[0]?.[0];
      expect(cleanupCall?.removedSecrets).toEqual([
        "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN",
      ]);
      expect(cleanupCall?.kind).toBe("documentation_chunk");
      // The chunk content in the result reflects the editor output.
      expect(
        result.toolkit.documentationChunks[0]?.content.includes(
          "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN"
        )
      ).toBe(false);
      expect(result.toolkit.documentationChunks[0]?.content).toContain(
        "GITHUB_SERVER_URL"
      );
      expect(
        result.warnings.some((warning) =>
          warning.includes("Stale secret reference")
        )
      ).toBe(true);
    });

    it("warns without rewriting an authoritative curation chunk", async () => {
      const currentTool = createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        secrets: [],
      });
      const previous = await mergeToolkit(
        "Github",
        [createTool({ ...currentTool, secrets: ["OLD_SECRET"] })],
        githubMetadata,
        null,
        createStubGenerator()
      );
      const cleanupSpy = vi.fn(async () => "Rewritten content");
      const merger = new DataMerger({
        customSectionsSource: new InMemoryCustomSectionsSource({
          Github: createCustomSections({
            documentationChunks: [
              {
                content: "Source still mentions OLD_SECRET.",
                location: "description",
                position: "after",
                type: "warning",
              },
            ],
          }),
        }),
        previousToolkits: new Map([["github", previous.toolkit]]),
        secretEditGenerator: {
          cleanupStaleReferences: cleanupSpy,
          fillCoverageGaps: vi.fn(async ({ content }) => content),
        },
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource: createCombinedToolkitDataSource({
          metadataSource: new InMemoryMetadataSource([githubMetadata]),
          toolSource: new InMemoryToolDataSource([currentTool]),
        }),
      });

      const result = await merger.mergeToolkit("Github");

      expect(cleanupSpy).not.toHaveBeenCalled();
      expect(result.toolkit.documentationChunks[0]?.content).toBe(
        "Source still mentions OLD_SECRET."
      );
      expect(
        result.warnings.some((warning) =>
          warning.includes("Stale secret reference")
        )
      ).toBe(true);
    });

    it("passes the post-cleanup summary to the coverage editor, not the original", async () => {
      // Ordering guarantee: applyStaleRefCleanup runs before the coverage
      // scan is re-computed. We prove this by making cleanup mutate a
      // chunk (unrelated to summary), then verifying the coverage editor
      // receives the current-summary content rather than a pre-cleanup
      // snapshot. This also demonstrates that re-detection uses the
      // updated toolkit state.
      const toolWithSecrets = createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        secrets: ["GITHUB_SERVER_URL"],
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([toolWithSecrets]),
      });
      const previous = await mergeToolkit(
        "Github",
        [
          createTool({
            ...toolWithSecrets,
            secrets: ["GITHUB_SERVER_URL", "OLD_SECRET"],
          }),
        ],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previous.toolkit.documentationChunks = [
        {
          content: "Legacy note about OLD_SECRET.",
          location: "header",
          position: "after",
          type: "markdown",
        },
      ];

      const cleanupSpy = vi.fn(async () => "Edited chunk.");
      const coverageSpy = vi.fn(
        async (input: { content: string }) => `${input.content} [link]`
      );
      const secretEditGenerator: SecretEditGenerator = {
        cleanupStaleReferences: cleanupSpy,
        fillCoverageGaps: coverageSpy,
      };
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previous.toolkit]]),
        secretEditGenerator,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Stub summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(cleanupSpy).toHaveBeenCalledTimes(1);
      // Coverage editor runs because the stub summary does not mention
      // GITHUB_SERVER_URL. It must see the current summary state — post-
      // cleanup — not any snapshot taken before cleanup.
      expect(coverageSpy).toHaveBeenCalledTimes(1);
      const coverageCall = coverageSpy.mock.calls[0]?.[0] as {
        content: string;
        missingSecretNames: string[];
      };
      // The content passed in was the post-cleanup summary (unchanged by
      // cleanup in this scenario, since the stale ref was in a chunk).
      expect(coverageCall.content).toBe("Stub summary (Github)");
      expect(coverageCall.missingSecretNames).toContain("GITHUB_SERVER_URL");
      // After the coverage edit, the summary should reflect the editor's
      // output built on top of the post-cleanup content.
      expect(result.toolkit.summary).toBe("Stub summary (Github) [link]");
    });

    it("emits warnings but no LLM calls when no editor is configured", async () => {
      const toolWithSecret = createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        secrets: ["GITHUB_SERVER_URL"],
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([toolWithSecret]),
      });
      const previousWithOldSecret = await mergeToolkit(
        "Github",
        [
          createTool({
            ...toolWithSecret,
            secrets: ["GITHUB_SERVER_URL", "OLD_SECRET"],
          }),
        ],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previousWithOldSecret.toolkit.documentationChunks = [
        {
          content: "Still references OLD_SECRET for legacy flows.",
          location: "header",
          position: "after",
          type: "markdown",
        },
      ];

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousWithOldSecret.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Stub summary"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(
        result.warnings.some(
          (warning) =>
            warning.includes("Stale secret reference") &&
            warning.includes("OLD_SECRET")
        )
      ).toBe(true);
    });

    it("skipSecretCoherence suppresses both the edit step and the scan warnings", async () => {
      // --skip-secret-coherence is documented to disable the entire
      // step. That means no LLM edits AND no coherence warnings in the
      // run log. A stale secret reference in a chunk must pass through
      // without any signal to the run log.
      const toolWithSecret = createTool({
        auth: { providerId: "github", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        secrets: ["GITHUB_SERVER_URL"],
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([toolWithSecret]),
      });
      const previous = await mergeToolkit(
        "Github",
        [
          createTool({
            ...toolWithSecret,
            secrets: ["GITHUB_SERVER_URL", "OLD_SECRET"],
          }),
        ],
        githubMetadata,
        null,
        createStubGenerator()
      );
      previous.toolkit.documentationChunks = [
        {
          content: "Still references OLD_SECRET for legacy flows.",
          location: "header",
          position: "after",
          type: "markdown",
        },
      ];

      const cleanupSpy = vi.fn(async () => "unreached");
      const coverageSpy = vi.fn(
        async (input: { content: string }) => input.content
      );
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previous.toolkit]]),
        secretEditGenerator: {
          cleanupStaleReferences: cleanupSpy,
          fillCoverageGaps: coverageSpy,
        },
        skipSecretCoherence: true,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
        toolkitSummaryGenerator: createStubSummaryGenerator("Stub"),
      });

      const result = await merger.mergeToolkit("Github");

      expect(cleanupSpy).not.toHaveBeenCalled();
      expect(coverageSpy).not.toHaveBeenCalled();
      expect(
        result.warnings.some((warning) =>
          warning.includes("Stale secret reference")
        )
      ).toBe(false);
    });

    it("reuses previous examples when the tool is unchanged", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
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
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: counting.generator,
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(counting.getCalls()).toBe(0);
      expect(result.toolkit.tools[0]?.codeExample).toEqual(
        previousResult.toolkit.tools[0]?.codeExample
      );
    });

    it("does not call the generator when only descriptions change", async () => {
      const updatedTool = createTool({
        auth: {
          providerId: "github",
          providerType: "oauth2",
          scopes: ["repo"],
        },
        description: "Updated description",
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([updatedTool]),
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
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: counting.generator,
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(counting.getCalls()).toBe(0);
      expect(result.toolkit.tools[0]?.codeExample).toEqual(
        previousResult.toolkit.tools[0]?.codeExample
      );
    });

    it("calls the generator only for changed tools in mixed toolkits", async () => {
      const unchangedTool = createTool({
        fullyQualifiedName: "Github.ListIssues@1.0.0",
        name: "ListIssues",
        qualifiedName: "Github.ListIssues",
      });
      const changedToolPrevious = createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      });
      const changedToolCurrent = createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        name: "CreateIssue",
        output: {
          description: "Result",
          type: "array",
        },
        qualifiedName: "Github.CreateIssue",
      });
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([
          unchangedTool,
          changedToolCurrent,
        ]),
      });
      const previousResult = await mergeToolkit(
        "Github",
        [unchangedTool, changedToolPrevious],
        githubMetadata,
        null,
        createStubGenerator()
      );
      const counting = createCountingGenerator();
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: counting.generator,
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");
      const toolByQualifiedName = new Map(
        result.toolkit.tools.map((tool) => [tool.qualifiedName, tool])
      );
      const previousByQualifiedName = new Map(
        previousResult.toolkit.tools.map((tool) => [tool.qualifiedName, tool])
      );

      expect(counting.getCalls()).toBe(1);
      expect(toolByQualifiedName.get("Github.ListIssues")?.codeExample).toEqual(
        previousByQualifiedName.get("Github.ListIssues")?.codeExample
      );
      expect(
        toolByQualifiedName.get("Github.CreateIssue")?.codeExample
      ).toBeDefined();
    });

    it("should merge data using unified toolkit data source", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
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
          fullyQualifiedName: "Test.Tool@1.0.0",
          qualifiedName: "Test.Tool",
        }),
        createTool({
          fullyQualifiedName: "Test.Tool@2.0.0",
          qualifiedName: "Test.Tool",
        }),
      ];

      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource(tools),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Test", "1.0.0");

      expect(result.toolkit.tools).toHaveLength(1);
      expect(result.toolkit.version).toBe("1.0.0");
    });

    it("should handle case-insensitive toolkit IDs", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("github"); // lowercase

      expect(result.toolkit.id).toBe("github");
      expect(result.toolkit.label).toBe("GitHub");
    });
  });

  describe("curation configuration errors", () => {
    const makeFailingCustomSectionsSource = (): ICustomSectionsSource => ({
      getAllCustomSections: async () => {
        throw new Error("Custom sections source unavailable");
      },
      getCustomSections: async () => {
        throw new Error("Custom sections source unavailable");
      },
    });

    it("fails before recovery instead of preserving stale prose", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });

      const previousResult = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections({
          customImports: ['import { Callout } from "nextra/components";'],
          documentationChunks: [
            {
              content: "Critical: GitHub Apps only.",
              location: "description",
              position: "after",
              type: "warning",
            },
          ],
          subPages: ["setup-guide"],
        }),
        createStubGenerator()
      );
      const merger = new DataMerger({
        customSectionsSource: makeFailingCustomSectionsSource(),
        previousToolkits: new Map([["github", previousResult.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      await expect(merger.mergeAllToolkits()).rejects.toThrow(
        "Custom sections source unavailable"
      );
    });
  });

  describe("mergeAllToolkits", () => {
    it("should merge all toolkits found in tools", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([
          githubMetadata,
          slackMetadata,
        ]),
        toolSource: new InMemoryToolDataSource([
          githubTool1,
          githubTool2,
          slackTool,
        ]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const results = await merger.mergeAllToolkits();

      expect(results).toHaveLength(2);

      const githubResult = results.find((r) => r.toolkit.id === "Github");
      const slackResult = results.find((r) => r.toolkit.id === "Slack");

      expect(githubResult?.toolkit.tools).toHaveLength(2);
      expect(slackResult?.toolkit.tools).toHaveLength(1);
    });

    it("skips toolkits with no tools (but present metadata) when requireCompleteData is true", async () => {
      const completeToolkitData: ToolkitData = {
        metadata: githubMetadata,
        tools: [githubTool1],
      };
      const missingToolsToolkitData: ToolkitData = {
        metadata: slackMetadata,
        tools: [],
      };

      const toolkitDataSource: ToolkitDataSource = {
        fetchAllToolkitsData: async () =>
          new Map([
            ["Github", completeToolkitData],
            ["Slack", missingToolsToolkitData],
          ]),
        fetchToolkitData: async (toolkitId: string) => {
          if (toolkitId === "Github") {
            return completeToolkitData;
          }
          if (toolkitId === "Slack") {
            return missingToolsToolkitData;
          }
          return { metadata: null, tools: [] };
        },
        isAvailable: async () => true,
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        requireCompleteData: true,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const count = await merger.getToolkitCount();
      const results = await merger.mergeAllToolkits();

      expect(count.total).toBe(2);
      expect(count.toProcess).toBe(1);
      expect(count.skipped).toBe(1);
      expect(results).toHaveLength(1);
      expect(results[0]?.toolkit.id).toBe("Github");
    });

    it("preserves prior output when metadata is missing in resilient publishing mode", async () => {
      const previous = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections(),
        createStubGenerator()
      );
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        preserveLastKnownGood: true,
        previousToolkits: new Map([["github", previous.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const [result] = await merger.mergeAllToolkits();

      expect(result?.recovery).toBe("preserved");
      expect(result?.toolkit).toEqual(previous.toolkit);
      expect(result?.error).toContain("missing design-system metadata");
    });

    it("overlays authoritative empty curation on preserved prior output", async () => {
      const previous = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections({
          customImports: ["import Old from 'old';"],
          documentationChunks: [
            {
              content: "Delete me",
              location: "description",
              position: "after",
              type: "warning",
            },
          ],
          subPages: ["old-page"],
          toolChunks: {
            CreateIssue: [
              {
                content: "Delete this too",
                location: "parameters",
                position: "after",
                type: "info",
              },
            ],
          },
        }),
        createStubGenerator()
      );
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new InMemoryCustomSectionsSource({
          Github: createCustomSections(),
        }),
        preserveLastKnownGood: true,
        previousToolkits: new Map([["github", previous.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const [result] = await merger.mergeAllToolkits();

      expect(result?.recovery).toBe("preserved");
      expect(result?.toolkit.documentationChunks).toEqual([]);
      expect(result?.toolkit.customImports).toEqual([]);
      expect(result?.toolkit.subPages).toEqual([]);
      expect(result?.toolkit.tools[0]?.documentationChunks).toEqual([]);
      expect(result?.toolkit.tools[0]?.codeExample).toEqual(
        previous.toolkit.tools[0]?.codeExample
      );
    });

    it("preserves prior output when curation targets a tool absent from it", async () => {
      const previous = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections(),
        createStubGenerator()
      );
      const curation = createCustomSections({
        toolChunks: {
          SetStarred: [
            {
              content: "Applies once the prior artifact catches up.",
              location: "parameters",
              position: "after",
              type: "info",
            },
          ],
        },
      });
      // The API exposes SetStarred, so the curation is valid; only the
      // preserved artifact predates it.
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([githubTool1, githubTool2]),
      });
      const merger = new DataMerger({
        customSectionsSource: new InMemoryCustomSectionsSource({
          Github: curation,
        }),
        preserveLastKnownGood: true,
        previousToolkits: new Map([["github", previous.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const [result] = await merger.mergeAllToolkits();

      expect(result?.recovery).toBe("preserved");
      expect(result?.toolkit.tools).toHaveLength(1);
      expect(result?.toolkit.curationSourceHash).toBe(
        getCustomSectionsSourceHash(curation)
      );
    });

    it("fails the run when curation targets a tool the API does not expose, even with preserveLastKnownGood", async () => {
      // A mistyped `tool:` target is an authoring mistake, not an upstream
      // outage. Recovering from it would leave the nightly job green while
      // the toolkit kept stale data and lost the chunk.
      const previous = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections(),
        createStubGenerator()
      );
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new InMemoryCustomSectionsSource({
          Github: createCustomSections({
            toolChunks: {
              CreateIsue: [
                {
                  content: "Typo in the target tool name.",
                  location: "parameters",
                  position: "after",
                  type: "info",
                },
              ],
            },
          }),
        }),
        preserveLastKnownGood: true,
        previousToolkits: new Map([["github", previous.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      await expect(merger.mergeAllToolkits()).rejects.toThrow(
        "Curation for Github targets unknown tool(s): CreateIsue"
      );
    });

    it("preserves prior output for provider-mode generation when metadata is missing", async () => {
      const previous = await mergeToolkit(
        "Github",
        [githubTool1],
        githubMetadata,
        createCustomSections(),
        createStubGenerator()
      );
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        preserveLastKnownGood: true,
        previousToolkits: new Map([["github", previous.toolkit]]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const result = await merger.mergeToolkit("Github");

      expect(result.recovery).toBe("preserved");
      expect(result.toolkit).toEqual(previous.toolkit);
      expect(result.error).toContain("missing design-system metadata");
    });

    it("omits a new toolkit when metadata is missing in resilient publishing mode", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        preserveLastKnownGood: true,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const [result] = await merger.mergeAllToolkits();

      expect(result?.recovery).toBe("omitted");
      expect(result?.error).toContain("missing design-system metadata");
    });

    it("fails the run and names every toolkit missing design-system metadata when requireCompleteData is true", async () => {
      // Silently dropping (the old behavior) or silently fabricating
      // metadata for these toolkits are both worse than failing loudly:
      // --require-complete exists so CI can't ship a wrong-but-valid
      // category or a docsLink nobody chose. The error must name every
      // affected toolkit, not just the first one found, so a single CI
      // failure is enough to fix the whole batch.
      const completeToolkitData: ToolkitData = {
        metadata: githubMetadata,
        tools: [githubTool1],
      };
      const missingMetadataToolkitData: ToolkitData = {
        metadata: null,
        tools: [
          createTool({
            fullyQualifiedName: "Unknown.Lookup@1.0.0",
            name: "Lookup",
            qualifiedName: "Unknown.Lookup",
          }),
        ],
      };
      const anotherMissingMetadataToolkitData: ToolkitData = {
        metadata: null,
        tools: [
          createTool({
            fullyQualifiedName: "AlsoUnknown.Ping@1.0.0",
            name: "Ping",
            qualifiedName: "AlsoUnknown.Ping",
          }),
        ],
      };

      const toolkitDataSource: ToolkitDataSource = {
        fetchAllToolkitsData: async () =>
          new Map([
            ["Github", completeToolkitData],
            ["Unknown", missingMetadataToolkitData],
            ["AlsoUnknown", anotherMissingMetadataToolkitData],
          ]),
        fetchToolkitData: async () => {
          throw new Error("not used by mergeAllToolkits");
        },
        isAvailable: async () => true,
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        requireCompleteData: true,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      await expect(merger.mergeAllToolkits()).rejects.toThrow(
        /missing design-system metadata.*Unknown.*AlsoUnknown/s
      );
      await expect(merger.getToolkitCount()).rejects.toThrow(
        /missing design-system metadata.*Unknown.*AlsoUnknown/s
      );
    });

    it("fails strict runs for toolkits in skipToolkitIds when metadata is missing", async () => {
      const missingMetadataToolkitData: ToolkitData = {
        metadata: null,
        tools: [
          createTool({
            fullyQualifiedName: "Unknown.Lookup@1.0.0",
            name: "Lookup",
            qualifiedName: "Unknown.Lookup",
          }),
        ],
      };

      const toolkitDataSource: ToolkitDataSource = {
        fetchAllToolkitsData: async () =>
          new Map([["Unknown", missingMetadataToolkitData]]),
        fetchToolkitData: async () => missingMetadataToolkitData,
        isAvailable: async () => true,
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        requireCompleteData: true,
        skipToolkitIds: new Set(["unknown"]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      await expect(merger.mergeAllToolkits()).rejects.toThrow(
        /missing design-system metadata.*Unknown/s
      );
      await expect(merger.getToolkitCount()).rejects.toThrow(
        /missing design-system metadata.*Unknown/s
      );
    });

    it("does not skip or fail toolkits missing metadata when requireCompleteData is false", async () => {
      // Without --require-complete, generation must still complete — the
      // toolkit falls back to getDefaultMetadata (hidden placeholder
      // metadata) and usedDefaultMetadata reports the fact rather than the
      // omission disappearing entirely.
      const missingMetadataToolkitData: ToolkitData = {
        metadata: null,
        tools: [
          createTool({
            fullyQualifiedName: "Unknown.Lookup@1.0.0",
            name: "Lookup",
            qualifiedName: "Unknown.Lookup",
          }),
        ],
      };

      const toolkitDataSource: ToolkitDataSource = {
        fetchAllToolkitsData: async () =>
          new Map([["Unknown", missingMetadataToolkitData]]),
        fetchToolkitData: async () => missingMetadataToolkitData,
        isAvailable: async () => true,
      };

      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const results = await merger.mergeAllToolkits();

      expect(results).toHaveLength(1);
      expect(results[0]?.toolkit.id).toBe("Unknown");
      expect(results[0]?.usedDefaultMetadata).toBe(true);
      expect(results[0]?.toolkit.metadata.isHidden).toBe(true);
    });

    it("fails strict runs when a complete toolkit cannot be merged", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([githubMetadata]),
        toolSource: new InMemoryToolDataSource([githubTool1]),
      });
      const merger = new DataMerger({
        customSectionsSource: {
          getAllCustomSections: async () => {
            throw new Error("Custom sections source unavailable");
          },
          getCustomSections: async () => {
            throw new Error("Custom sections source unavailable");
          },
        },
        requireCompleteData: true,
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      await expect(merger.mergeAllToolkits()).rejects.toThrow(
        "Custom sections source unavailable"
      );
    });

    it("should return empty array when no tools", async () => {
      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([]),
        toolSource: new InMemoryToolDataSource([]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const results = await merger.mergeAllToolkits();

      expect(results).toHaveLength(0);
    });

    it("skips toolkits listed in skipToolkitIds without affecting others", async () => {
      const googleTool = createTool({
        auth: { providerId: "google", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "Google.Search@1.0.0",
        name: "Search",
        qualifiedName: "Google.Search",
      });
      const googleMetadata = createMetadata({
        category: "search",
        id: "Google",
        label: "Google",
      });

      const toolkitDataSource = createCombinedToolkitDataSource({
        metadataSource: new InMemoryMetadataSource([
          googleMetadata,
          slackMetadata,
        ]),
        toolSource: new InMemoryToolDataSource([googleTool, slackTool]),
      });
      const merger = new DataMerger({
        customSectionsSource: new EmptyCustomSectionsSource(),
        skipToolkitIds: new Set(["google"]),
        toolExampleGenerator: createStubGenerator(),
        toolkitDataSource,
      });

      const count = await merger.getToolkitCount();
      const results = await merger.mergeAllToolkits();

      expect(count.total).toBe(2);
      expect(count.skipped).toBe(1);
      expect(count.toProcess).toBe(1);

      expect(results).toHaveLength(1);
      const ids = results.map((r) => r.toolkit.id);
      expect(ids).not.toContain("Google");
      expect(ids).toContain("Slack");
    });
  });
});
