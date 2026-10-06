/**
 * Scenario Test: Stale version tools are filtered out
 *
 * Verifies that when the Engine API returns tools at mixed versions for the
 * same toolkit, the highest-version coherence filter drops stale tools before
 * they reach the diff or merger.
 */
import { describe, expect, it } from "vitest";

import {
  detectChanges,
  getChangedToolkitIds,
  hasChanges,
} from "../../src/diff/index";
import {
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: null,
  description: "A test tool",
  fullyQualifiedName: "Github.TestTool@3.1.3",
  name: "TestTool",
  output: null,
  parameters: [],
  qualifiedName: "Github.TestTool",
  secrets: [],
  ...overrides,
});

const createMergedToolkit = (
  id: string,
  version: string,
  toolNames: string[]
): MergedToolkit => ({
  auth: null,
  customImports: [],
  description: "A toolkit",
  documentationChunks: [],
  generatedAt: new Date().toISOString(),
  id,
  label: id,
  metadata: {
    category: "development",
    docsLink: "https://docs.example.com",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: toolNames.map((name) => ({
    auth: null,
    description: "A test tool",
    documentationChunks: [],
    fullyQualifiedName: `${id}.${name}@${version}`,
    name,
    output: null,
    parameters: [],
    qualifiedName: `${id}.${name}`,
    secrets: [],
    secretsInfo: [],
  })),
  version,
});

describe("Scenario: Stale version tools filtered by highest-version coherence", () => {
  it("fetchAllToolkitsData drops stale tools at older versions", async () => {
    // Simulate Engine API returning mixed-version Github tools
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
        fullyQualifiedName: "Github.SetStarred@3.1.3",
        name: "SetStarred",
        qualifiedName: "Github.SetStarred",
      }),
      // Stale tools from older version
      createTool({
        fullyQualifiedName: "Github.GetNotificationSummary@2.0.1",
        name: "GetNotificationSummary",
        qualifiedName: "Github.GetNotificationSummary",
      }),
      createTool({
        fullyQualifiedName: "Github.ListNotifications@2.0.1",
        name: "ListNotifications",
        qualifiedName: "Github.ListNotifications",
      }),
    ]);
    const metadataSource = new InMemoryMetadataSource([]);
    const dataSource = createCombinedToolkitDataSource({
      metadataSource,
      toolSource,
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
            fullyQualifiedName: "Github.SetStarred@3.1.3",
            name: "SetStarred",
            qualifiedName: "Github.SetStarred",
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
            fullyQualifiedName: "Github.CreateIssue@3.1.3",
            name: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
          }),
          createTool({
            fullyQualifiedName: "Github.ListPullRequests@3.1.3",
            name: "ListPullRequests",
            qualifiedName: "Github.ListPullRequests",
          }),
        ],
      ],
    ]);

    // Previous output already had only the highest-version tools
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
