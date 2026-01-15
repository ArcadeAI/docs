/**
 * Tests for the Combined Toolkit Data Source
 *
 * These tests use real in-memory sources to verify the combined
 * abstraction returns tools + metadata together.
 */
import { describe, expect, it } from "vitest";
import {
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory.js";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source.js";
import type { ToolDefinition, ToolkitMetadata } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "Github.TestTool",
  fullyQualifiedName: "Github.TestTool@1.0.0",
  description: "A test tool",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  id: "Github",
  label: "GitHub",
  category: "development",
  iconUrl: "https://example.com/github.svg",
  isBYOC: false,
  isPro: false,
  type: "arcade",
  docsLink: "https://docs.example.com/github",
  isComingSoon: false,
  isHidden: false,
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
      toolSource,
      metadataSource,
    });

    const result = await dataSource.fetchToolkitData("Github");

    expect(result.tools).toHaveLength(2);
    expect(result.metadata?.label).toBe("GitHub");
  });

  it("should filter tools by version when provided", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
      }),
      createTool({
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@2.0.0",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([createMetadata()]);
    const dataSource = createCombinedToolkitDataSource({
      toolSource,
      metadataSource,
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
      toolSource,
      metadataSource,
    });

    const result = await dataSource.fetchToolkitData("Github");

    expect(result.metadata).toBeNull();
  });

  it("should return all toolkits with metadata when available", async () => {
    const toolSource = new InMemoryToolDataSource([
      createTool({
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
      }),
      createTool({
        qualifiedName: "Slack.SendMessage",
        fullyQualifiedName: "Slack.SendMessage@1.2.0",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([
      createMetadata(),
      createMetadata({ id: "Slack", label: "Slack", category: "social" }),
    ]);
    const dataSource = createCombinedToolkitDataSource({
      toolSource,
      metadataSource,
    });

    const result = await dataSource.fetchAllToolkitsData();

    expect(result.size).toBe(2);
    expect(result.get("Github")?.metadata?.label).toBe("GitHub");
    expect(result.get("Slack")?.metadata?.label).toBe("Slack");
  });
});
