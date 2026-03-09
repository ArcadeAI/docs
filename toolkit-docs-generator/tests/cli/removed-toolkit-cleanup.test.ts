import { mkdtemp, readdir, readFile, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { cleanupExcludedToolkitOutput } from "../../src/cli/exclusion-cleanup.js";
import { resolveAutoCleanupCandidates } from "../../src/cli/generate-flow.js";
import type { ChangeDetectionResult } from "../../src/diff/index.js";

// ── Helpers ───────────────────────────────────────────────────────────────────

let tmpDir: string;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
  }
});

const setupDir = async (
  files: Array<{ name: string; content?: string }>
): Promise<string> => {
  tmpDir = await mkdtemp(join(tmpdir(), "removed-cleanup-test-"));
  for (const file of files) {
    await writeFile(join(tmpDir, file.name), file.content ?? "{}", "utf-8");
  }
  return tmpDir;
};

/**
 * Minimal real generator — reads the dir and writes a simple index.json.
 * No mocks: all filesystem operations are real.
 */
const createRealGenerator = (outputDir: string) => ({
  rebuildIndexFromOutput: async (): Promise<{
    indexPath: string;
    readErrors: string[];
    readWarnings: string[];
  }> => {
    const files = await readdir(outputDir);
    const toolkitIds = files
      .filter((f) => f.endsWith(".json") && f !== "index.json")
      .map((f) => f.replace(".json", ""));
    const indexPath = join(outputDir, "index.json");
    await writeFile(
      indexPath,
      JSON.stringify({ toolkits: toolkitIds }),
      "utf-8"
    );
    return { indexPath, readErrors: [], readWarnings: [] };
  },
});

const makeChangeResult = (
  changes: Array<{ toolkitId: string; changeType: string }>
): ChangeDetectionResult =>
  ({
    toolkitChanges: changes.map((c) => ({ ...c })),
    summary: {
      newToolkits: 0,
      removedToolkits: 0,
      modifiedToolkits: 0,
      unchangedToolkits: 0,
      versionOnlyToolkits: 0,
      totalToolkits: 0,
      newTools: 0,
      removedTools: 0,
      modifiedTools: 0,
    },
  }) as unknown as ChangeDetectionResult;

const fileExists = async (path: string): Promise<boolean> => {
  try {
    await readFile(path, "utf-8");
    return true;
  } catch {
    return false;
  }
};

// ── Integration tests ─────────────────────────────────────────────────────────

describe("removed-toolkit-cleanup pipeline", () => {
  it("deletes the JSON file for a removed toolkit", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "removed" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json"]);
    expect(result.warnings).toHaveLength(0);
    expect(await fileExists(join(outputDir, "github.json"))).toBe(false);
  });

  it("deletes all files when multiple toolkits are removed", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "slack.json" },
      { name: "jira.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "removed" },
      { toolkitId: "Slack", changeType: "removed" },
      { toolkitId: "Jira", changeType: "removed" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json", "jira.json", "slack.json"]);
    expect(await fileExists(join(outputDir, "github.json"))).toBe(false);
    expect(await fileExists(join(outputDir, "slack.json"))).toBe(false);
    expect(await fileExists(join(outputDir, "jira.json"))).toBe(false);
  });

  it("preserves the JSON file for a toolkit in the ignored set", async () => {
    const outputDir = await setupDir([
      { name: "figma.json" },
      { name: "github.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Figma", changeType: "removed" },
      { toolkitId: "Github", changeType: "removed" },
    ]);

    const ignoredToolkitIds = new Set(["figma"]);
    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      ignoredToolkitIds
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json"]);
    expect(await fileExists(join(outputDir, "figma.json"))).toBe(true);
    expect(await fileExists(join(outputDir, "github.json"))).toBe(false);
  });

  it("preserves files for non-removed toolkits (modified and unchanged)", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "slack.json" },
      { name: "jira.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "removed" },
      { toolkitId: "Slack", changeType: "modified" },
      { toolkitId: "Jira", changeType: "unchanged" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(await fileExists(join(outputDir, "github.json"))).toBe(false);
    expect(await fileExists(join(outputDir, "slack.json"))).toBe(true);
    expect(await fileExists(join(outputDir, "jira.json"))).toBe(true);
  });

  it("matches file names case-insensitively against removed toolkit IDs", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "GitHub", changeType: "removed" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json"]);
    expect(await fileExists(join(outputDir, "github.json"))).toBe(false);
  });

  it("is a no-op when the removed toolkit has no corresponding file", async () => {
    const outputDir = await setupDir([{ name: "index.json" }]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "removed" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
  });

  it("rebuilds index.json without the deleted toolkit after cleanup", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "slack.json" },
      { name: "index.json" },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "removed" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    const indexContent = await readFile(join(outputDir, "index.json"), "utf-8");
    const index = JSON.parse(indexContent) as { toolkits: string[] };
    expect(index.toolkits).not.toContain("github");
    expect(index.toolkits).toContain("slack");
  });

  it("touches no files when no toolkits are removed", async () => {
    const outputDir = await setupDir([
      { name: "github.json" },
      { name: "slack.json" },
      { name: "index.json", content: '{"toolkits":["github","slack"]}' },
    ]);

    const changeResult = makeChangeResult([
      { toolkitId: "Github", changeType: "modified" },
      { toolkitId: "Slack", changeType: "unchanged" },
    ]);

    const excludedToolkitIds = resolveAutoCleanupCandidates(
      changeResult,
      new Set()
    );
    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds,
      generator: createRealGenerator(outputDir),
      verbose: false,
    });

    expect(result.deleted).toHaveLength(0);
    expect(await fileExists(join(outputDir, "github.json"))).toBe(true);
    expect(await fileExists(join(outputDir, "slack.json"))).toBe(true);
    const indexContent = await readFile(join(outputDir, "index.json"), "utf-8");
    expect(indexContent).toBe('{"toolkits":["github","slack"]}');
  });
});
