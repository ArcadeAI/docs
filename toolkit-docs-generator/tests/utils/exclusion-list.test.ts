import { mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { readExclusionList } from "../../src/utils/exclusion-list.js";

let tmpDir: string;

afterEach(async () => {
  if (tmpDir) {
    await rm(tmpDir, { recursive: true, force: true });
  }
});

const writeTmp = async (content: string): Promise<string> => {
  tmpDir = await mkdtemp(join(tmpdir(), "exclusion-test-"));
  const path = join(tmpDir, "excluded.txt");
  await writeFile(path, content, "utf-8");
  return path;
};

describe("readExclusionList", () => {
  it("returns empty set for empty file", async () => {
    const path = await writeTmp("");
    const result = await readExclusionList(path);
    expect(result?.size).toBe(0);
  });

  it("parses one toolkit ID per line", async () => {
    const path = await writeTmp("Github\nSlack\nJira\n");
    const result = await readExclusionList(path);
    expect(result).toEqual(new Set(["github", "slack", "jira"]));
  });

  it("normalizes IDs to lowercase", async () => {
    const path = await writeTmp("GitHub\nSLACK\n");
    const result = await readExclusionList(path);
    expect(result?.has("github")).toBe(true);
    expect(result?.has("slack")).toBe(true);
  });

  it("ignores blank lines", async () => {
    const path = await writeTmp("Github\n\n\nSlack\n\n");
    const result = await readExclusionList(path);
    expect(result?.size).toBe(2);
  });

  it("ignores lines starting with #", async () => {
    const path = await writeTmp("# comment\nGithub\n# another\nSlack\n");
    const result = await readExclusionList(path);
    expect(result).toEqual(new Set(["github", "slack"]));
  });

  it("trims surrounding whitespace from each line", async () => {
    const path = await writeTmp("  Github  \n  Slack\n");
    const result = await readExclusionList(path);
    expect(result).toEqual(new Set(["github", "slack"]));
  });

  it("returns null when the file does not exist", async () => {
    const result = await readExclusionList(
      "/tmp/definitely-does-not-exist.txt"
    );
    expect(result).toBeNull();
  });

  it("handles CRLF line endings", async () => {
    const path = await writeTmp("Github\r\nSlack\r\nJira\r\n");
    const result = await readExclusionList(path);
    expect(result).toEqual(new Set(["github", "slack", "jira"]));
  });
});
