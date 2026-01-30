/**
 * Scenario Test: Toolkit not returned by API but exists in docs
 *
 * Verifies that when a toolkit is missing from API but exists in previous output:
 * - The toolkit is detected as removed
 * - It's logged but not deleted from output
 * - Change detection reports it correctly
 */
import { describe, expect, it } from "vitest";

import { detectChanges } from "../../src/diff/index.js";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index.js";

const createMergedToolkit = (id: string): MergedToolkit => ({
  id,
  label: id,
  version: "1.0.0",
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
      fullyQualifiedName: `${id}.Tool1@1.0.0`,
      description: "A tool",
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

describe("Scenario: Toolkit removed from API", () => {
  it("detects toolkit as removed", () => {
    const currentToolkitTools = new Map<string, readonly ToolDefinition[]>();
    const previousToolkits = new Map([
      ["Github", createMergedToolkit("Github")],
      ["Slack", createMergedToolkit("Slack")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(result.summary.removedToolkits).toBe(2);
    expect(
      result.toolkitChanges.filter((c) => c.changeType === "removed")
    ).toHaveLength(2);
  });

  it("marks removed toolkits correctly", () => {
    const currentToolkitTools = new Map<string, readonly ToolDefinition[]>();
    const previousToolkits = new Map([
      ["OldKit", createMergedToolkit("OldKit")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    const removedChange = result.toolkitChanges.find(
      (c) => c.toolkitId === "OldKit"
    );
    expect(removedChange?.changeType).toBe("removed");
    expect(removedChange?.currentToolCount).toBe(0);
    expect(removedChange?.previousToolCount).toBe(1);
  });

  it("includes removed toolkits in change log", () => {
    const currentToolkitTools = new Map<string, readonly ToolDefinition[]>();
    const previousToolkits = new Map([
      ["RemovedKit", createMergedToolkit("RemovedKit")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    expect(
      result.toolkitChanges.some(
        (c) => c.changeType === "removed" && c.toolkitId === "RemovedKit"
      )
    ).toBe(true);
  });

  it("does not count removed toolkits as needing regeneration", () => {
    const currentToolkitTools = new Map<string, readonly ToolDefinition[]>();
    const previousToolkits = new Map([
      ["RemovedKit", createMergedToolkit("RemovedKit")],
    ]);

    const result = detectChanges(currentToolkitTools, previousToolkits);

    // Removed toolkits should not appear in changed IDs (they don't need regeneration)
    const changedIds = result.toolkitChanges
      .filter((c) => c.changeType !== "unchanged" && c.changeType !== "removed")
      .map((c) => c.toolkitId);

    expect(changedIds).not.toContain("RemovedKit");
  });
});
