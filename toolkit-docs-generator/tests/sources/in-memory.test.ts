/**
 * Tests for in-memory data source implementations
 *
 * These tests demonstrate the testing philosophy:
 * - Use real implementations instead of mocks
 * - Test with realistic fixture data
 * - Focus on behavior, not implementation details
 */
import { describe, expect, it } from "vitest";
import {
  EmptyCustomSectionsSource,
  InMemoryCustomSectionsSource,
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory";
import type {
  CustomSections,
  ToolDefinition,
  ToolkitMetadata,
} from "../../src/types/index";

// ============================================================================
// Test Fixtures - Realistic data matching production schema
// ============================================================================

const createTestTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: {
    providerId: "github",
    providerType: "oauth2",
    scopes: ["repo"],
  },
  description: "Create a new issue in a GitHub repository",
  fullyQualifiedName: "Github.CreateIssue@1.0.0",
  name: "CreateIssue",
  output: {
    description: "Created issue details",
    type: "object",
  },
  parameters: [
    {
      description: "Repository owner",
      enum: null,
      inferrable: true,
      name: "owner",
      required: true,
      type: "string",
    },
    {
      description: "Repository name",
      enum: null,
      inferrable: true,
      name: "repo",
      required: true,
      type: "string",
    },
  ],
  qualifiedName: "Github.CreateIssue",
  secrets: [],
  ...overrides,
});

const createTestMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
  iconUrl: "https://design-system.arcade.dev/icons/github.svg",
  id: "Github",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  label: "GitHub",
  type: "arcade",
  ...overrides,
});

const createTestCustomSections = (
  overrides: Partial<CustomSections> = {}
): CustomSections => ({
  customImports: [],
  documentationChunks: [
    {
      content: "This toolkit requires OAuth2 authentication.",
      location: "header",
      position: "after",
      type: "warning",
    },
  ],
  subPages: [],
  toolChunks: {},
  ...overrides,
});

// ============================================================================
// InMemoryToolDataSource Tests
// ============================================================================

describe("InMemoryToolDataSource", () => {
  const githubTool1 = createTestTool({
    fullyQualifiedName: "Github.CreateIssue@1.0.0",
    name: "CreateIssue",
    qualifiedName: "Github.CreateIssue",
  });

  const githubTool2 = createTestTool({
    fullyQualifiedName: "Github.SetStarred@1.0.0",
    name: "SetStarred",
    qualifiedName: "Github.SetStarred",
  });

  const slackTool = createTestTool({
    auth: {
      providerId: "slack",
      providerType: "oauth2",
      scopes: ["chat:write"],
    },
    fullyQualifiedName: "Slack.SendMessage@1.2.0",
    name: "SendMessage",
    qualifiedName: "Slack.SendMessage",
  });

  const testTools = [githubTool1, githubTool2, slackTool];

  describe("fetchToolsByToolkit", () => {
    it("should return tools for the specified toolkit", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchToolsByToolkit("Github");

      expect(result).toHaveLength(2);
      expect(result.map((t) => t.name)).toContain("CreateIssue");
      expect(result.map((t) => t.name)).toContain("SetStarred");
    });

    it("should handle case-insensitive toolkit IDs", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchToolsByToolkit("github");

      expect(result).toHaveLength(2);
    });

    it("should return empty array for unknown toolkit", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchToolsByToolkit("Unknown");

      expect(result).toHaveLength(0);
    });
  });

  describe("fetchAllTools", () => {
    it("should return all tools when no options provided", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchAllTools();

      expect(result).toHaveLength(3);
    });

    it("should filter by toolkitId option", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchAllTools({ toolkitId: "Slack" });

      expect(result).toHaveLength(1);
      expect(result[0]?.name).toBe("SendMessage");
    });

    it("should filter by version option", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchAllTools({ version: "1.2.0" });

      expect(result).toHaveLength(1);
      expect(result[0]?.name).toBe("SendMessage");
    });

    it("should filter by providerId option", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchAllTools({ providerId: "slack" });

      expect(result).toHaveLength(1);
      expect(result[0]?.name).toBe("SendMessage");
    });

    it("should combine multiple filters", async () => {
      const source = new InMemoryToolDataSource(testTools);

      const result = await source.fetchAllTools({
        toolkitId: "Github",
        version: "1.0.0",
      });

      expect(result).toHaveLength(2);
    });
  });

  describe("isAvailable", () => {
    it("should always return true", async () => {
      const source = new InMemoryToolDataSource([]);

      const result = await source.isAvailable();

      expect(result).toBe(true);
    });
  });
});

// ============================================================================
// InMemoryMetadataSource Tests
// ============================================================================

describe("InMemoryMetadataSource", () => {
  const githubMetadata = createTestMetadata({
    category: "development",
    id: "Github",
    label: "GitHub",
  });

  const slackMetadata = createTestMetadata({
    category: "social",
    id: "Slack",
    label: "Slack",
  });

  const testMetadata = [githubMetadata, slackMetadata];

  describe("getToolkitMetadata", () => {
    it("should return metadata for exact ID match", async () => {
      const source = new InMemoryMetadataSource(testMetadata);

      const result = await source.getToolkitMetadata("Github");

      expect(result).not.toBeNull();
      expect(result?.id).toBe("Github");
      expect(result?.label).toBe("GitHub");
    });

    it("should handle case-insensitive lookup", async () => {
      const source = new InMemoryMetadataSource(testMetadata);

      const result = await source.getToolkitMetadata("github");

      expect(result).not.toBeNull();
      expect(result?.id).toBe("Github");
    });

    it("should return null for unknown toolkit", async () => {
      const source = new InMemoryMetadataSource(testMetadata);

      const result = await source.getToolkitMetadata("Unknown");

      expect(result).toBeNull();
    });
  });

  describe("getAllToolkitsMetadata", () => {
    it("should return all unique toolkits", async () => {
      const source = new InMemoryMetadataSource(testMetadata);

      const result = await source.getAllToolkitsMetadata();

      expect(result).toHaveLength(2);
      expect(result.map((m) => m.id)).toContain("Github");
      expect(result.map((m) => m.id)).toContain("Slack");
    });
  });

  describe("listToolkitIds", () => {
    it("should return all toolkit IDs", async () => {
      const source = new InMemoryMetadataSource(testMetadata);

      const result = await source.listToolkitIds();

      expect(result).toHaveLength(2);
      expect(result).toContain("Github");
      expect(result).toContain("Slack");
    });
  });
});

// ============================================================================
// InMemoryCustomSectionsSource Tests
// ============================================================================

describe("InMemoryCustomSectionsSource", () => {
  const githubSections = createTestCustomSections({
    documentationChunks: [
      {
        content: "GitHub OAuth required",
        location: "header",
        position: "after",
        type: "warning",
      },
    ],
  });

  const slackSections = createTestCustomSections({
    subPages: ["environment-variables"],
  });

  const testSections = {
    Github: githubSections,
    Slack: slackSections,
  };

  describe("getCustomSections", () => {
    it("should return sections for exact ID match", async () => {
      const source = new InMemoryCustomSectionsSource(testSections);

      const result = await source.getCustomSections("Github");

      expect(result).not.toBeNull();
      expect(result?.documentationChunks).toHaveLength(1);
    });

    it("should handle case-insensitive lookup", async () => {
      const source = new InMemoryCustomSectionsSource(testSections);

      const result = await source.getCustomSections("github");

      expect(result).not.toBeNull();
    });

    it("should return null for unknown toolkit", async () => {
      const source = new InMemoryCustomSectionsSource(testSections);

      const result = await source.getCustomSections("Unknown");

      expect(result).toBeNull();
    });
  });

  describe("getAllCustomSections", () => {
    it("should return all sections", async () => {
      const source = new InMemoryCustomSectionsSource(testSections);

      const result = await source.getAllCustomSections();

      expect(Object.keys(result)).toHaveLength(2);
    });
  });
});

// ============================================================================
// EmptyCustomSectionsSource Tests
// ============================================================================

describe("EmptyCustomSectionsSource", () => {
  it("should always return null for getCustomSections", async () => {
    const source = new EmptyCustomSectionsSource();

    const result = await source.getCustomSections("Github");

    expect(result).toBeNull();
  });

  it("should return empty object for getAllCustomSections", async () => {
    const source = new EmptyCustomSectionsSource();

    const result = await source.getAllCustomSections();

    expect(result).toEqual({});
  });
});
