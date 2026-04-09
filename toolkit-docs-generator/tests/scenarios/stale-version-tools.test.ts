/**
 * Scenario Test: Stale version tools are filtered out
 *
 * Verifies that when the Engine API returns tools at mixed versions for the
 * same toolkit, the majority-version coherence filter drops stale tools before
 * they reach the diff or merger.
 */
import { describe, expect, it } from "vitest";

import {
  detectChanges,
  getChangedToolkitIds,
  hasChanges,
} from "../../src/diff/index.js";
import {
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory.js";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source.js";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "Github.TestTool",
  fullyQualifiedName: "Github.TestTool@3.1.3",
  description: "A test tool",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

const createMergedToolkit = (
  id: string,
  version: string,
  toolNames: string[]
): MergedToolkit => ({
  id,
  label: id,
  version,
  description: "A toolkit",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: toolNames.map((name) => ({
    name,
    qualifiedName: `${id}.${name}`,
    fullyQualifiedName: `${id}.${name}@${version}`,
    description: "A test tool",
    parameters: [],
    auth: null,
    secrets: [],
    secretsInfo: [],
    output: null,
    documentationChunks: [],
  })),
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
});

describe("Scenario: Stale version tools filtered by majority-version coherence", () => {
  it("fetchAllToolkitsData drops stale tools at non-majority versions", async () => {
    // Simulate Engine API returning mixed-version Github tools
    const toolSource = new InMemoryToolDataSource([
      createTool({
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@3.1.3",
      }),
      createTool({
        name: "ListPullRequests",
        qualifiedName: "Github.ListPullRequests",
        fullyQualifiedName: "Github.ListPullRequests@3.1.3",
      }),
      createTool({
        name: "SetStarred",
        qualifiedName: "Github.SetStarred",
        fullyQualifiedName: "Github.SetStarred@3.1.3",
      }),
      // Stale tools from older version
      createTool({
        name: "GetNotificationSummary",
        qualifiedName: "Github.GetNotificationSummary",
        fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
      }),
      createTool({
        name: "ListNotifications",
        qualifiedName: "Github.ListNotifications",
        fullyQualifiedName: "Github.ListNotifications@2.0.1",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([]);
    const dataSource = createCombinedToolkitDataSource({
      toolSource,
      metadataSource,
    });

    const result = await dataSource.fetchAllToolkitsData();
    const github = result.get("Github");

    expect(github).toBeDefined();
    expect(github?.tools).toHaveLength(3);
    expect(
      github?.tools.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))
    ).toBe(true);
  });

  it("diff correctly reflects removal when previous output had stale tools", async () => {
    // After filtering, the data source returns only @3.1.3 tools
    const filteredTools = new Map([
      [
        "Github",
        [
          createTool({
            name: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
            fullyQualifiedName: "Github.CreateIssue@3.1.3",
          }),
          createTool({
            name: "ListPullRequests",
            qualifiedName: "Github.ListPullRequests",
            fullyQualifiedName: "Github.ListPullRequests@3.1.3",
          }),
          createTool({
            name: "SetStarred",
            qualifiedName: "Github.SetStarred",
            fullyQualifiedName: "Github.SetStarred@3.1.3",
          }),
        ],
      ],
    ]);

    // Previous output (before the filter existed) had stale tools
    const previousToolkits = new Map([
      [
        "Github",
        createMergedToolkit("Github", "3.1.3", [
          "CreateIssue",
          "ListPullRequests",
          "SetStarred",
          "GetNotificationSummary",
          "ListNotifications",
        ]),
      ],
    ]);

    const result = detectChanges(filteredTools, previousToolkits);

    // The diff should detect the change (stale tools removed)
    expect(hasChanges(result)).toBe(true);
    const changedIds = getChangedToolkitIds(result);
    expect(changedIds).toContain("Github");
    expect(result.summary.modifiedToolkits).toBe(1);
  });

  it("diff sees no changes when previous output already had clean data", async () => {
    // After filtering, data source returns only @3.1.3 tools
    const filteredTools = new Map([
      [
        "Github",
        [
          createTool({
            name: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
            fullyQualifiedName: "Github.CreateIssue@3.1.3",
          }),
          createTool({
            name: "ListPullRequests",
            qualifiedName: "Github.ListPullRequests",
            fullyQualifiedName: "Github.ListPullRequests@3.1.3",
          }),
        ],
      ],
    ]);

    // Previous output already had only the majority-version tools
    const previousToolkits = new Map([
      [
        "Github",
        createMergedToolkit("Github", "3.1.3", [
          "CreateIssue",
          "ListPullRequests",
        ]),
      ],
    ]);

    const result = detectChanges(filteredTools, previousToolkits);

    expect(hasChanges(result)).toBe(false);
    expect(getChangedToolkitIds(result)).toHaveLength(0);
  });
});
