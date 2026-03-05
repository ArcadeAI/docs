/**
 * Scenario Test: Removed toolkit JSON files are deleted during --skip-unchanged
 *
 * These tests verify the pipeline added in src/cli/index.ts:
 *   detectChanges() → extract removed IDs → add to excludedToolkitIds →
 *   cleanupExcludedToolkitOutput() → files deleted + index.json rebuilt
 *
 * No mocks: uses real filesystem (temp dirs), real detectChanges(), real
 * JsonGenerator, and real removeExcludedToolkitFiles(). The only external
 * dependency is the Arcade/Engine API, which is replaced by in-memory data.
 */

import { readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { cleanupExcludedToolkitOutput } from "../../src/cli/exclusion-cleanup.js";
import { detectChanges } from "../../src/diff/index.js";
import { createJsonGenerator } from "../../src/generator/index.js";
import type { MergedToolkit, ToolDefinition } from "../../src/types/index.js";

// ── Fixtures ──────────────────────────────────────────────────────────────────

const makeTool = (toolkitId: string, toolName = "Tool1"): ToolDefinition => ({
  name: toolName,
  qualifiedName: `${toolkitId}.${toolName}`,
  fullyQualifiedName: `${toolkitId}.${toolName}@1.0.0`,
  description: "A test tool",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
});

const makeToolkit = (id: string): MergedToolkit => ({
  id,
  label: id,
  version: "1.0.0",
  description: "A toolkit for testing",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: `https://docs.example.com/${id.toLowerCase()}`,
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [
    {
      name: "Tool1",
      qualifiedName: `${id}.Tool1`,
      fullyQualifiedName: `${id}.Tool1@1.0.0`,
      description: "A test tool",
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

// ── Helpers ───────────────────────────────────────────────────────────────────

let tmpDir: string | undefined;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
    tmpDir = undefined;
  }
});

/**
 * Creates a temp output directory pre-populated with real MergedToolkit JSON
 * files (written via the real JsonGenerator so format is guaranteed valid).
 * Returns the dir path and a ready-to-use generator bound to it.
 */
const setupOutputDir = async (toolkitIds: string[]) => {
  const { mkdtemp } = await import("node:fs/promises");
  tmpDir = await mkdtemp(join(tmpdir(), "removed-cleanup-test-"));

  const generator = createJsonGenerator({
    outputDir: tmpDir,
    prettyPrint: true,
    generateIndex: true,
    indexSource: "output",
  });

  for (const id of toolkitIds) {
    await generator.generateToolkitFile(makeToolkit(id));
  }

  // Write an initial index.json that includes all toolkits.
  const initialToolkits = toolkitIds.map(makeToolkit);
  await generator.generateAll(initialToolkits);

  return { dir: tmpDir, generator };
};

/**
 * Replicates the exact extraction logic from src/cli/index.ts so tests
 * stay aligned with the real code path.
 */
const extractRemovedIds = (
  result: ReturnType<typeof detectChanges>
): Set<string> => {
  const ids = result.toolkitChanges
    .filter((change) => change.changeType === "removed")
    .map((change) => change.toolkitId.toLowerCase());
  return new Set(ids);
};

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("Scenario: Removed toolkit files are deleted after change detection", () => {
  it("deletes the JSON file for a toolkit that disappeared from the API", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    // OldKit is gone from API; Github remains.
    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = extractRemovedIds(diff);

    await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    const remaining = await readdir(dir);
    expect(remaining).not.toContain("oldkit.json");
    expect(remaining).toContain("github.json");
  });

  it("deletes all JSON files for multiple toolkits removed from the API", async () => {
    const { dir, generator } = await setupOutputDir([
      "Github",
      "Deepwiki",
      "ComplexTools",
    ]);

    // Both Deepwiki and ComplexTools are gone; Github stays.
    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["Deepwiki", makeToolkit("Deepwiki")],
      ["ComplexTools", makeToolkit("ComplexTools")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    expect(diff.summary.removedToolkits).toBe(2);

    const removedIds = extractRemovedIds(diff);
    expect(removedIds).toContain("deepwiki");
    expect(removedIds).toContain("complextools");

    await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    const remaining = await readdir(dir);
    expect(remaining).not.toContain("deepwiki.json");
    expect(remaining).not.toContain("complextools.json");
    expect(remaining).toContain("github.json");
  });

  it("never deletes unchanged or modified toolkits — only removed ones", async () => {
    const { dir, generator } = await setupOutputDir([
      "Github",
      "Slack",
      "GoneKit",
    ]);

    // Github was modified (new tool added). Slack is unchanged. GoneKit is removed.
    const currentTools = new Map([
      ["Github", [makeTool("Github"), makeTool("Github", "NewTool")]],
      ["Slack", [makeTool("Slack")]],
    ]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["Slack", makeToolkit("Slack")],
      ["GoneKit", makeToolkit("GoneKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    expect(diff.summary.modifiedToolkits).toBe(1);
    expect(diff.summary.unchangedToolkits).toBe(1);
    expect(diff.summary.removedToolkits).toBe(1);

    const removedIds = extractRemovedIds(diff);
    expect(removedIds.size).toBe(1);
    expect(removedIds).toContain("gonekit");

    await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    const remaining = await readdir(dir);
    expect(remaining).toContain("github.json");
    expect(remaining).toContain("slack.json");
    expect(remaining).not.toContain("gonekit.json");
  });

  it("rebuilds index.json without the removed toolkit after cleanup", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = extractRemovedIds(diff);

    await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    const indexRaw = await readFile(join(dir, "index.json"), "utf-8");
    const index = JSON.parse(indexRaw) as {
      toolkits: Array<{ id: string }>;
    };

    const ids = index.toolkits.map((t) => t.id.toLowerCase());
    expect(ids).toContain("github");
    expect(ids).not.toContain("oldkit");
  });

  it("produces no removals when nothing disappeared from the API", async () => {
    const { dir } = await setupOutputDir(["Github", "Slack"]);

    const currentTools = new Map([
      ["Github", [makeTool("Github")]],
      ["Slack", [makeTool("Slack")]],
    ]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["Slack", makeToolkit("Slack")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = extractRemovedIds(diff);

    expect(removedIds.size).toBe(0);

    const remainingBefore = await readdir(dir);
    // No cleanup needed when there are no removals — both files stay.
    expect(remainingBefore).toContain("github.json");
    expect(remainingBefore).toContain("slack.json");
  });

  it("handles toolkit already in the excluded set without double-deleting", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = extractRemovedIds(diff);

    // Simulate OldKit also being in the static excluded-toolkits.txt list.
    // Adding it again to a Set is a no-op — the file must still be deleted once.
    const baseExcludedIds = new Set(["oldkit"]);
    for (const id of removedIds) {
      baseExcludedIds.add(id);
    }
    expect(baseExcludedIds.size).toBe(1);

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: baseExcludedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["oldkit.json"]);

    const remaining = await readdir(dir);
    expect(remaining).not.toContain("oldkit.json");
  });
});
