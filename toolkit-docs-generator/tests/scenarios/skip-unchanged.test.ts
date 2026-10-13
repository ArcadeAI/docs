/**
 * Scenario Test: Skip unchanged toolkits
 *
 * Verifies that --skip-unchanged correctly identifies and skips unchanged toolkits.
 */
import { describe, expect, it } from "vitest";

import {
  detectChanges,
  getChangedToolkitIds,
  hasChanges,
} from "../../src/diff/index";
import type { CurrentToolkitDiffInput } from "../../src/diff/toolkit-diff";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: null,
  description: "A test tool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  name: "TestTool",
  output: null,
  parameters: [],
  qualifiedName: "TestKit.TestTool",
  secrets: [],
  toolkitDescription: "Test toolkit",
  ...overrides,
});

const createMergedToolkit = (id: string, version = "1.0.0"): MergedToolkit => ({
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
  tools: [
    {
      auth: null,
      description: "A test tool", // Must match createTool description
      documentationChunks: [],
      fullyQualifiedName: `${id}.Tool1@${version}`,
      name: "Tool1",
      output: null,
      parameters: [],
      qualifiedName: `${id}.Tool1`,
      secrets: [],
      secretsInfo: [],
    },
  ],
  version,
});

describe("Scenario: Skip unchanged toolkits", () => {
  it("identifies unchanged toolkits correctly", () => {
    const currentToolkitTools = new Map([
      [
        "Github",
        [createTool({ name: "Tool1", qualifiedName: "Github.Tool1" })],
      ],
      ["Slack", [createTool({ name: "Tool1", qualifiedName: "Slack.Tool1" })]],
    ]);

    const previousToolkits = new Map([
      ["Github", createMergedToolkit("Github")],
      ["Slack", createMergedToolkit("Slack")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(hasChanges(result)).toBe(false);
    expect(getChangedToolkitIds(result)).toHaveLength(0);
    expect(result.summary.unchangedToolkits).toBe(2);
  });

  it("identifies only changed toolkits when mixed", () => {
    const currentToolkitTools = new Map([
      [
        "Github",
        [
          createTool({
            name: "Tool1",
            output: {
              description: null,
              type: "array",
            },
            qualifiedName: "Github.Tool1",
          }),
        ],
      ],
      ["Slack", [createTool({ name: "Tool1", qualifiedName: "Slack.Tool1" })]],
      ["Jira", [createTool({ name: "Tool1", qualifiedName: "Jira.Tool1" })]],
    ]);

    const previousToolkits = new Map([
      ["Github", createMergedToolkit("Github")],
      ["Slack", createMergedToolkit("Slack")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(hasChanges(result)).toBe(true);
    const changedIds = getChangedToolkitIds(result);
    expect(changedIds).toContain("Github"); // Modified
    expect(changedIds).toContain("Jira"); // New
    expect(changedIds).not.toContain("Slack"); // Unchanged
  });

  it("excludes removed toolkits from changed IDs", () => {
    const currentToolkitTools = new Map([
      [
        "Github",
        [createTool({ name: "Tool1", qualifiedName: "Github.Tool1" })],
      ],
    ]);

    const previousToolkits = new Map([
      ["Github", createMergedToolkit("Github")],
      ["Slack", createMergedToolkit("Slack")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    const changedIds = getChangedToolkitIds(result);
    expect(changedIds).not.toContain("Slack"); // Removed, not changed
    expect(result.summary.removedToolkits).toBe(1);
  });

  it("includes version-only changes in changed IDs", () => {
    // Create a toolkit where only the version changed (tool signature is identical)
    const currentTool = createTool({
      fullyQualifiedName: "Github.Tool1@2.0.0",
      name: "Tool1",
      qualifiedName: "Github.Tool1",
    });

    const previousToolkit: MergedToolkit = {
      auth: null,
      customImports: [],
      description: "A toolkit",
      documentationChunks: [],
      generatedAt: new Date().toISOString(),
      id: "Github",
      label: "Github",
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
      tools: [
        {
          auth: null,
          description: "A test tool", // Must match createTool default description
          documentationChunks: [],
          fullyQualifiedName: "Github.Tool1@1.0.0", // Old version in fullyQualifiedName
          name: "Tool1",
          output: null,
          parameters: [], // Same parameters
          qualifiedName: "Github.Tool1",
          secrets: [],
          secretsInfo: [],
        },
      ],
      version: "1.0.0", // Old version
    };

    const currentToolkitTools = new Map([["Github", [currentTool]]]);

    const previousToolkits = new Map([["Github", previousToolkit]]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    const changedIds = getChangedToolkitIds(result);
    expect(changedIds).toContain("Github"); // Version changed
    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.versionOnlyToolkits).toBe(1);
    expect(result.toolkitChanges[0]?.versionChanged).toBe(true);
    expect(result.toolkitChanges[0]?.toolChanges).toHaveLength(0); // No tool-level changes
  });

  it("includes metadata-only changes in changed IDs", () => {
    const currentToolkitData = new Map<string, CurrentToolkitDiffInput>([
      [
        "Github",
        {
          metadata: {
            category: "databases",
            docsLink: "https://docs.example.com/databases/github",
            iconUrl: "https://example.com/icon.svg",
            id: "Github",
            isBYOC: false,
            isComingSoon: false,
            isHidden: false,
            isPro: false,
            label: "Github",
            type: "arcade",
          },
          tools: [createTool({ name: "Tool1", qualifiedName: "Github.Tool1" })],
        },
      ],
    ]);
    const previousToolkits = new Map([
      ["Github", createMergedToolkit("Github")],
    ]);

    const result = detectChanges(currentToolkitData, previousToolkits);

    const changedIds = getChangedToolkitIds(result);
    expect(changedIds).toContain("Github");
    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.versionOnlyToolkits).toBe(0);
    expect(result.toolkitChanges[0]?.toolChanges).toHaveLength(0);
    expect(result.toolkitChanges[0]?.metadataChanged).toBe(true);
  });
});
