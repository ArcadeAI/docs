import { mkdtemp, readFile, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanupExcludedToolkitOutput } from "../../src/cli/exclusion-cleanup.js";

let tmpDir: string;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
  }
});

const setupDir = async (files: Array<{ name: string; content: string }>) => {
  tmpDir = await mkdtemp(join(tmpdir(), "exclude-cleanup-test-"));
  for (const file of files) {
    await writeFile(join(tmpDir, file.name), file.content, "utf-8");
  }
  return tmpDir;
};

describe("cleanupExcludedToolkitOutput", () => {
  it("returns warning instead of throwing when index rebuild fails", async () => {
    const outputDir = await setupDir([
      { name: "github.json", content: "{}" },
      { name: "index.json", content: "{}" },
    ]);
    const generator = {
      rebuildIndexFromOutput: vi
        .fn()
        .mockRejectedValue(new Error("simulated rebuild failure")),
    };

    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds: new Set(["github"]),
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json"]);
    expect(result.warnings).toHaveLength(1);
    expect(result.warnings[0]).toContain("index rebuild failed");
    expect(generator.rebuildIndexFromOutput).toHaveBeenCalledTimes(1);
    await expect(
      readFile(join(outputDir, "github.json"), "utf-8")
    ).rejects.toThrow();
  });

  it("surfaces index rebuild read errors and warnings", async () => {
    const outputDir = await setupDir([
      { name: "github.json", content: "{}" },
      { name: "index.json", content: "{}" },
    ]);
    const generator = {
      rebuildIndexFromOutput: vi.fn().mockResolvedValue({
        indexPath: join(outputDir, "index.json"),
        readErrors: ["Invalid JSON in bad.json: Unexpected token"],
        readWarnings: ["Loaded legacy.json with fallback parser."],
      }),
    };

    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds: new Set(["github"]),
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual(["github.json"]);
    expect(result.warnings).toEqual([
      "Index rebuild skipped 1 unreadable toolkit file(s).",
      "Index rebuild reported 1 warning(s).",
    ]);
  });

  it("includes detailed rebuild diagnostics in verbose mode", async () => {
    const outputDir = await setupDir([
      { name: "github.json", content: "{}" },
      { name: "index.json", content: "{}" },
    ]);
    const generator = {
      rebuildIndexFromOutput: vi.fn().mockResolvedValue({
        indexPath: join(outputDir, "index.json"),
        readErrors: ["Invalid JSON in bad.json: Unexpected token"],
        readWarnings: ["Loaded legacy.json with fallback parser."],
      }),
    };

    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds: new Set(["github"]),
      generator,
      verbose: true,
    });

    expect(result.warnings).toEqual([
      "Index rebuild skipped 1 unreadable toolkit file(s).",
      "Index rebuild read error: Invalid JSON in bad.json: Unexpected token",
      "Index rebuild reported 1 warning(s).",
      "Index rebuild warning: Loaded legacy.json with fallback parser.",
    ]);
  });

  it("skips rebuild when no files were deleted", async () => {
    const outputDir = await setupDir([
      { name: "slack.json", content: "{}" },
      { name: "index.json", content: "{}" },
    ]);
    const generator = {
      rebuildIndexFromOutput: vi.fn().mockResolvedValue({
        indexPath: join(outputDir, "index.json"),
        readErrors: [],
        readWarnings: [],
      }),
    };

    const result = await cleanupExcludedToolkitOutput({
      outputDir,
      excludedToolkitIds: new Set(["github"]),
      generator,
      verbose: false,
    });

    expect(result.deleted).toEqual([]);
    expect(result.warnings).toEqual([]);
    expect(generator.rebuildIndexFromOutput).not.toHaveBeenCalled();
  });
});
