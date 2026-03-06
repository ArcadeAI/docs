/**
 * Scenario Test: Removed toolkit JSON files are deleted during --skip-unchanged
 *
 * Verifies the pipeline added in src/cli/index.ts:
 *   detectChanges() → collectRemovedToolkitIds() → add to excludedToolkitIds →
 *   cleanupExcludedToolkitOutput() → files deleted + index.json rebuilt
 *
 * No mocks: real filesystem (temp dirs), real detectChanges(),
 * real collectRemovedToolkitIds(), real JsonGenerator throughout.
 * The Engine API is replaced by in-memory tool data.
 */

import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { cleanupExcludedToolkitOutput } from "../../src/cli/exclusion-cleanup.js";
import { collectRemovedToolkitIds } from "../../src/cli/generate-flow.js";
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

// ── Setup helpers ─────────────────────────────────────────────────────────────

let tmpDir: string | undefined;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
    tmpDir = undefined;
  }
});

/**
 * Creates a temp output directory pre-populated with real MergedToolkit JSON
 * files written by the real JsonGenerator (guarantees valid schema on disk).
 */
const setupOutputDir = async (toolkitIds: string[]) => {
  tmpDir = await mkdtemp(join(tmpdir(), "removed-cleanup-test-"));
  const generator = createJsonGenerator({
    outputDir: tmpDir,
    prettyPrint: true,
    generateIndex: true,
    indexSource: "output",
  });
  await generator.generateAll(toolkitIds.map(makeToolkit));
  return { dir: tmpDir, generator };
};

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("Scenario: Removed toolkit files are deleted after change detection", () => {
  it("deletes the JSON file for a toolkit that disappeared from the API", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["oldkit.json"]);
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

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["Deepwiki", makeToolkit("Deepwiki")],
      ["ComplexTools", makeToolkit("ComplexTools")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted.sort()).toEqual(
      ["complextools.json", "deepwiki.json"].sort()
    );
    const remaining = await readdir(dir);
    expect(remaining).toContain("github.json");
    expect(remaining).not.toContain("deepwiki.json");
    expect(remaining).not.toContain("complextools.json");
  });

  it("never deletes unchanged or modified toolkits — only removed ones", async () => {
    const { dir, generator } = await setupOutputDir([
      "Github",
      "Slack",
      "GoneKit",
    ]);

    // Github modified (new tool), Slack unchanged, GoneKit removed from API.
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

    const removedIds = collectRemovedToolkitIds(diff);
    expect(removedIds).toEqual(new Set(["gonekit"]));

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["gonekit.json"]);
    const remaining = await readdir(dir);
    expect(remaining).toContain("github.json");
    expect(remaining).toContain("slack.json");
    expect(remaining).not.toContain("gonekit.json");
  });

  it("rebuilds index.json that no longer lists the removed toolkit", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: collectRemovedToolkitIds(diff),
      generator,
      verbose: false,
    });

    const index = JSON.parse(
      await readFile(join(dir, "index.json"), "utf-8")
    ) as {
      toolkits: Array<{ id: string }>;
    };
    const ids = index.toolkits.map((t) => t.id.toLowerCase());
    expect(ids).toContain("github");
    expect(ids).not.toContain("oldkit");
  });

  it("is a no-op when nothing was removed from the API", async () => {
    const { dir, generator } = await setupOutputDir(["Github", "Slack"]);

    const currentTools = new Map([
      ["Github", [makeTool("Github")]],
      ["Slack", [makeTool("Slack")]],
    ]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["Slack", makeToolkit("Slack")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);
    expect(removedIds.size).toBe(0);

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toHaveLength(0);
    const remaining = await readdir(dir);
    expect(remaining).toContain("github.json");
    expect(remaining).toContain("slack.json");
  });

  it("handles mixed-case toolkit IDs: diff returns CamelCase, file on disk is lowercase", async () => {
    // Toolkit ID from the diff is "GoogleCalendar" (as the API returns it),
    // but the file on disk is "googlecalendar.json" (generator lowercases IDs).
    const { dir, generator } = await setupOutputDir([
      "GoogleCalendar",
      "Slack",
    ]);

    const currentTools = new Map([["Slack", [makeTool("Slack")]]]);
    const previousToolkits = new Map([
      ["GoogleCalendar", makeToolkit("GoogleCalendar")],
      ["Slack", makeToolkit("Slack")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);
    expect(removedIds).toContain("googlecalendar");

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["googlecalendar.json"]);
    const remaining = await readdir(dir);
    expect(remaining).not.toContain("googlecalendar.json");
    expect(remaining).toContain("slack.json");
  });

  it("treats a zero-tools API response as removed and deletes the stale file", async () => {
    // Edge case in compareToolkit: toolkit is still in the API but returns
    // zero tools while the previous file had tools → changeType = "removed".
    const { dir, generator } = await setupOutputDir(["Github", "BrokenKit"]);

    // BrokenKit is still in the API map but with an empty tools array.
    const currentTools = new Map([
      ["Github", [makeTool("Github")]],
      ["BrokenKit", []], // zero tools
    ]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["BrokenKit", makeToolkit("BrokenKit")], // had tools before
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);
    expect(removedIds).toContain("brokenkit");

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: removedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["brokenkit.json"]);
    const remaining = await readdir(dir);
    expect(remaining).not.toContain("brokenkit.json");
    expect(remaining).toContain("github.json");
  });

  it("merging removed IDs with pre-existing exclusions deletes each file exactly once", async () => {
    // OldKit is in excluded-toolkits.txt (static list) AND removed from the API.
    // Set.add() is idempotent — the file must be deleted exactly once.
    const { dir, generator } = await setupOutputDir(["Github", "OldKit"]);

    const currentTools = new Map([["Github", [makeTool("Github")]]]);
    const previousToolkits = new Map([
      ["Github", makeToolkit("Github")],
      ["OldKit", makeToolkit("OldKit")],
    ]);

    const diff = detectChanges(currentTools, previousToolkits);
    const removedIds = collectRemovedToolkitIds(diff);

    const excludedIds = new Set(["oldkit"]); // pre-existing from --exclude-file
    for (const id of removedIds) {
      excludedIds.add(id); // no-op — oldkit already present
    }
    expect(excludedIds.size).toBe(1);

    const result = await cleanupExcludedToolkitOutput({
      outputDir: dir,
      excludedToolkitIds: excludedIds,
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["oldkit.json"]);
    expect(result.warnings).toHaveLength(0);
  });
});
