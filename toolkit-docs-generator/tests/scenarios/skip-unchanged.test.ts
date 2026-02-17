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
} from "../../src/diff/index.js";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "Test toolkit",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

const createMergedToolkit = (id: string, version = "1.0.0"): MergedToolkit => ({
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
  tools: [
    {
      name: "Tool1",
      qualifiedName: `${id}.Tool1`,
      fullyQualifiedName: `${id}.Tool1@${version}`,
      description: "A test tool", // Must match createTool description
      parameters: [],
      auth: null,
      secrets: [],
      secretsInfo: [],
      output: null,
      documentationChunks: [],
    },
  ],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
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
            qualifiedName: "Github.Tool1",
            output: {
              type: "array",
              description: null,
            },
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
      name: "Tool1",
      qualifiedName: "Github.Tool1",
      fullyQualifiedName: "Github.Tool1@2.0.0",
    });

    const previousToolkit: MergedToolkit = {
      id: "Github",
      label: "Github",
      version: "1.0.0", // Old version
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
      tools: [
        {
          name: "Tool1",
          qualifiedName: "Github.Tool1",
          fullyQualifiedName: "Github.Tool1@1.0.0", // Old version in fullyQualifiedName
          description: "A test tool", // Must match createTool default description
          parameters: [], // Same parameters
          auth: null,
          secrets: [],
          secretsInfo: [],
          output: null,
          documentationChunks: [],
        },
      ],
      documentationChunks: [],
      customImports: [],
      subPages: [],
      generatedAt: new Date().toISOString(),
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
});
