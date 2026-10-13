/**
 * Tests for the Combined Toolkit Data Source
 *
 * These tests use real in-memory sources to verify the combined
 * abstraction returns tools + metadata together.
 */
import { describe, expect, it } from "vitest";
import { createDesignSystemMetadataSourceFromToolkits } from "../../src/sources/design-system-metadata";
import {
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory";
import type { MetadataSource } from "../../src/sources/internal";
import {
  createCachedToolkitDataSource,
  createCombinedToolkitDataSource,
  type ToolkitDataSource,
} from "../../src/sources/toolkit-data-source";
import type { ToolDefinition, ToolkitMetadata } from "../../src/types/index";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: null,
  description: "A test tool",
  fullyQualifiedName: "Github.TestTool@1.0.0",
  name: "TestTool",
  output: null,
  parameters: [],
  qualifiedName: "Github.TestTool",
  secrets: [],
  ...overrides,
});

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.example.com/github",
  iconUrl: "https://example.com/github.svg",
  id: "Github",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  label: "GitHub",
  type: "arcade",
  ...overrides,
});

describe("CombinedToolkitDataSource", () => {
  it("should return tools and metadata for a toolkit", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({ qualifiedName: "Github.CreateIssue" }),
      createTool({ qualifiedName: "Github.ListPullRequests" }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchToolkitData("Github");

    expect(result.tools).toHaveLength(2);
    expect(result.metadata?.label).toBe("GitHub");
  });

  it("should filter tools by version when provided", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
      createTool({
        fullyQualifiedName: "Github.CreateIssue@2.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchToolkitData("Github", "1.0.0");

    expect(result.tools).toHaveLength(1);
    expect(result.tools[0]?.fullyQualifiedName).toContain("@1.0.0");
  });

  it("should return null metadata when not found", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({ qualifiedName: "Github.CreateIssue" }),
    ]);
    const metadataSource = new InMemoryMetadataSource([]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchToolkitData("Github");

    expect(result.metadata).toBeNull();
  });

  it("should return all toolkits with metadata when available", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
      createTool({
        fullyQualifiedName: "Slack.SendMessage@1.2.0",
        qualifiedName: "Slack.SendMessage",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([
      createMetadata(),
      createMetadata({ category: "social", id: "Slack", label: "Slack" }),
    ]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchAllToolkitsData();

    expect(result.size).toBe(2);
    expect(result.get("Github")?.metadata?.label).toBe("GitHub");
    expect(result.get("Slack")?.metadata?.label).toBe("Slack");
  });

  it("fetchAllToolkitsData resolves metadata for *Api toolkits whose design system id omits the Api suffix", async () => {
    // Simulates WeaviateApi (Engine API name) vs Weaviate (design system id).
    // getAllToolkitsMetadata returns { id: "Weaviate" }, but the toolkit group key
    // is "WeaviateApi" — the direct map lookup misses and must fall through to
    // getToolkitMetadata which has the "api" suffix fallback.
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "WeaviateApi.ActivateUser@2.0.0",
        qualifiedName: "WeaviateApi.ActivateUser",
      }),
    ]);

    const metadataSource = createDesignSystemMetadataSourceFromToolkits([
      createMetadata({
        category: "databases",
        iconUrl: "https://design-system.arcade.dev/icons/weaviate.svg",
        id: "Weaviate",
        label: "Weaviate",
      }),
    ]);

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchAllToolkitsData();
    const weaviate = result.get("WeaviateApi");

    expect(weaviate).toBeDefined();
    expect(weaviate?.metadata?.category).toBe("databases");
    expect(weaviate?.metadata?.label).toBe("Weaviate API");
  });

  it("should filter out stale tools at older versions in fetchAllToolkitsData", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@3.1.3",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      }),
      createTool({
        fullyQualifiedName: "Github.ListPullRequests@3.1.3",
        name: "ListPullRequests",
        qualifiedName: "Github.ListPullRequests",
      }),
      createTool({
        fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
        name: "GetNotificationSummary",
        qualifiedName: "Github.GetNotificationSummary",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchAllToolkitsData();
    const github = result.get("Github");

    expect(github?.tools).toHaveLength(2);
    expect(
      github?.tools.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))
    ).toBe(true);
  });

  it("should apply highest-version filter in fetchToolkitData when no version specified", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@3.1.3",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      }),
      createTool({
        fullyQualifiedName: "Github.ListPullRequests@3.1.3",
        name: "ListPullRequests",
        qualifiedName: "Github.ListPullRequests",
      }),
      createTool({
        fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
        name: "GetNotificationSummary",
        qualifiedName: "Github.GetNotificationSummary",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchToolkitData("Github");

    expect(result.tools).toHaveLength(2);
    expect(
      result.tools.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))
    ).toBe(true);
  });

  it("should still allow explicit version filter in fetchToolkitData", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@3.1.3",
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
      }),
      createTool({
        fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
        name: "GetNotificationSummary",
        qualifiedName: "Github.GetNotificationSummary",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    // Explicit version bypasses highest-version filter
    const result = await dataSource.fetchToolkitData("Github", "2.0.1");

    expect(result.tools).toHaveLength(1);
    expect(result.tools[0]?.fullyQualifiedName).toContain("@2.0.1");
  });

  it("should fall back to providerId metadata for *Api toolkits", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        auth: { providerId: "mailchimp", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "MailchimpMarketingApi.CreateCampaign@1.0.0",
        qualifiedName: "MailchimpMarketingApi.CreateCampaign",
      }),
    ]);

    const metadataSource = new InMemoryMetadataSource([
      createMetadata({
        category: "productivity",
        id: "MailchimpApi",
        label: "Mailchimp API",
        type: "arcade_starter",
      }),
    ]);

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchToolkitData("MailchimpMarketingApi");
    expect(result.metadata?.label).toBe("Mailchimp API");
  });

  it("should use providerId fallback consistently in fetchAllToolkitsData", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        auth: { providerId: "mailchimp", providerType: "oauth2", scopes: [] },
        fullyQualifiedName: "MailchimpMarketingApi.CreateCampaign@1.0.0",
        qualifiedName: "MailchimpMarketingApi.CreateCampaign",
      }),
    ]);

    const metadataSource = new InMemoryMetadataSource([
      createMetadata({
        category: "productivity",
        id: "MailchimpApi",
        label: "Mailchimp API",
        type: "arcade_starter",
      }),
    ]);

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const single = await dataSource.fetchToolkitData("MailchimpMarketingApi");
    const all = await dataSource.fetchAllToolkitsData();
    const listed = all.get("MailchimpMarketingApi");

    expect(single.metadata?.label).toBe("Mailchimp API");
    expect(listed?.metadata?.label).toBe("Mailchimp API");
  });

  it("fetchToolkitData does not re-fetch metadata when direct lookup is already null", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
    ]);

    let metadataLookupCalls = 0;
    const metadataSource = {
      async getAllToolkitsMetadata() {
        return [];
      },
      async getToolkitMetadata(_toolkitId) {
        metadataLookupCalls += 1;
        return null;
      },
      async listToolkitIds() {
        return [];
      },
    } satisfies MetadataSource;

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    await dataSource.fetchToolkitData("Github");
    expect(metadataLookupCalls).toBe(1);
  });

  it("fetchAllToolkitsData performs toolkit-id lookup when metadata map misses", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
    ]);

    const lookedUpIds: string[] = [];
    const metadataSource = {
      async getAllToolkitsMetadata() {
        return [
          createMetadata({ category: "social", id: "Slack", label: "Slack" }),
        ];
      },
      async getToolkitMetadata(toolkitId) {
        lookedUpIds.push(toolkitId);
        return null;
      },
      async listToolkitIds() {
        return ["Slack"];
      },
    } satisfies MetadataSource;

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    await dataSource.fetchAllToolkitsData();
    expect(lookedUpIds).toEqual(["Github"]);
  });

  it("fetchAllToolkitsData does not re-lookup metadata when the map already has a direct hit", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        qualifiedName: "Github.CreateIssue",
      }),
    ]);

    const lookedUpIds: string[] = [];
    const metadataSource = {
      async getAllToolkitsMetadata() {
        return [createMetadata()];
      },
      async getToolkitMetadata(toolkitId) {
        lookedUpIds.push(toolkitId);
        return null;
      },
      async listToolkitIds() {
        return ["Github"];
      },
    } satisfies MetadataSource;

    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
    });

    const result = await dataSource.fetchAllToolkitsData();
    expect(result.get("Github")?.metadata?.label).toBe("GitHub");
    expect(lookedUpIds).toEqual([]);
  });
});

describe("createCachedToolkitDataSource", () => {
  it("reuses one immutable all-toolkit snapshot within a run", async () => {
    const snapshot = new Map([
      [
        "Github",
        {
          metadata: createMetadata(),
          tools: [createTool()],
        },
      ],
    ]);
    const githubData = snapshot.get("Github");
    if (!githubData) {
      throw new Error("Expected GitHub fixture");
    }
    let fetchAllCalls = 0;
    const source: ToolkitDataSource = {
      fetchAllToolkitsData: async () => {
        fetchAllCalls += 1;
        return snapshot;
      },
      fetchToolkitData: async () => githubData,
      isAvailable: async () => true,
    };
    const cached = createCachedToolkitDataSource(source);

    const [first, second, third] = await Promise.all([
      cached.fetchAllToolkitsData(),
      cached.fetchAllToolkitsData(),
      cached.fetchAllToolkitsData(),
    ]);

    expect(fetchAllCalls).toBe(1);
    expect(first).toBe(snapshot);
    expect(second).toBe(first);
    expect(third).toBe(first);
  });
});
