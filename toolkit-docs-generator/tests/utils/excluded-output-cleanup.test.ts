import { mkdtemp, readdir, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { removeExcludedToolkitFiles } from "../../src/utils/excluded-output-cleanup.js";

let tmpDir: string;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
  }
});

const setupDir = async (fileNames: string[]): Promise<string> => {
  tmpDir = await mkdtemp(join(tmpdir(), "cleanup-test-"));
  for (const name of fileNames) {
    await writeFile(join(tmpDir, name), "{}", "utf-8");
  }
  return tmpDir;
};

describe("removeExcludedToolkitFiles", () => {
  it("deletes .json files whose base name is in the excluded set", async () => {
    const dir = await setupDir(["github.json", "slack.json", "jira.json"]);
    const removed = await removeExcludedToolkitFiles(
      dir,
      new Set(["github", "slack"])
    );
    const remaining = await readdir(dir);
    expect(remaining).toEqual(["jira.json"]);
    expect(removed.sort()).toEqual(["github.json", "slack.json"]);
  });

  it("is case-insensitive when matching", async () => {
    const dir = await setupDir(["GitHub.json", "Slack.json"]);
    const removed = await removeExcludedToolkitFiles(
      dir,
      new Set(["github", "slack"])
    );
    expect(removed).toHaveLength(2);
    expect(await readdir(dir)).toHaveLength(0);
  });

  it("never deletes index.json", async () => {
    const dir = await setupDir(["index.json", "github.json"]);
    await removeExcludedToolkitFiles(dir, new Set(["index", "github"]));
    const remaining = await readdir(dir);
    expect(remaining).toContain("index.json");
  });

  it("returns empty array when no files match", async () => {
    const dir = await setupDir(["github.json"]);
    const removed = await removeExcludedToolkitFiles(dir, new Set(["jira"]));
    expect(removed).toHaveLength(0);
  });

  it("returns empty array when excluded set is empty", async () => {
    const dir = await setupDir(["github.json"]);
    const removed = await removeExcludedToolkitFiles(dir, new Set());
    expect(removed).toHaveLength(0);
  });
});
