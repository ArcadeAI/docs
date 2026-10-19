import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";

const { create } = vi.hoisted(() => ({
  create: vi.fn().mockRejectedValue(new Error("Claude unavailable")),
}));

vi.mock("@anthropic-ai/sdk", () => ({
  default: class {
    messages = { create };
  },
}));

const { getChangedFilesSince, hasSameBody, summarizePagesInBatches } =
  await import("../../scripts/generate-llmstxt");

const WARNING_REGEX = /^::warning::1 of 1 page summaries fell back/;

const PAGE_URL = "https://docs.arcade.dev/en/get-started/quickstart";

const llmsTxt = (header: string, description: string) =>
  `${header}\n\n# Arcade\n\n## Get Started\n\n- [Quickstart](${PAGE_URL}): ${description}\n`;

const EXISTING = llmsTxt(
  "<!-- git-sha: aaaaaaa generation-date: 2026-10-01T00:00:00.000Z -->",
  "Documentation page"
);

describe("placeholder retry that fails again", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("emits the warning and leaves llms.txt unchanged", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {
      // silence script output
    });
    const log = vi.spyOn(console, "log").mockImplementation(() => {
      // silence script output
    });

    const [retried] = await summarizePagesInBatches(
      [
        {
          path: "content/docs/get-started/quickstart.mdx",
          url: PAGE_URL,
          content: "# Quickstart\n\nGet going.",
        },
      ],
      []
    );

    expect(create).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(expect.stringMatching(WARNING_REGEX));

    const regenerated = llmsTxt(
      "<!-- git-sha: bbbbbbb generation-date: 2026-10-08T00:00:00.000Z -->",
      retried.description
    );
    expect(hasSameBody(EXISTING, regenerated)).toBe(true);
  });

  it("still rewrites llms.txt when a description changes", () => {
    const regenerated = llmsTxt(
      "<!-- git-sha: bbbbbbb generation-date: 2026-10-08T00:00:00.000Z -->",
      "Walks through calling your first tool."
    );
    expect(hasSameBody(EXISTING, regenerated)).toBe(false);
  });
});

describe("getChangedFilesSince", () => {
  let repo = "";

  afterEach(() => {
    rmSync(repo, { recursive: true, force: true });
  });

  const git = (...args: string[]) =>
    execFileSync("git", args, { cwd: repo, encoding: "utf-8" }).trim();

  const write = (file: string, content: string) => {
    mkdirSync(path.dirname(path.join(repo, file)), { recursive: true });
    writeFileSync(path.join(repo, file), content);
  };

  const initRepo = () => {
    repo = mkdtempSync(path.join(tmpdir(), "llmstxt-"));
    git("init", "-q");
    git("config", "user.email", "test@example.com");
    git("config", "user.name", "Test");
  };

  it("includes uncommitted and untracked changes", () => {
    initRepo();
    write("committed.mdx", "one");
    write("edited.mdx", "one");
    write("removed.mdx", "one");
    git("add", ".");
    git("commit", "-q", "-m", "base");
    const base = git("rev-parse", "HEAD");

    write("later.mdx", "two");
    git("add", ".");
    git("commit", "-q", "-m", "later");

    write("edited.mdx", "two");
    rmSync(path.join(repo, "removed.mdx"));
    write("new/untracked.mdx", "two");

    expect(getChangedFilesSince(base, repo)).toEqual(
      new Set(["later.mdx", "edited.mdx", "removed.mdx", "new/untracked.mdx"])
    );
  });

  it("still returns working-tree and untracked changes when the SHA is unreachable", () => {
    initRepo();
    write("edited.mdx", "one");
    write("stable.mdx", "one");
    git("add", ".");
    git("commit", "-q", "-m", "base");

    write("edited.mdx", "two");
    write("new/untracked.mdx", "two");

    const warn = vi.spyOn(console, "warn").mockImplementation(() => {
      // silence the expected warning
    });
    try {
      expect(getChangedFilesSince("0".repeat(40), repo)).toEqual(
        new Set(["edited.mdx", "new/untracked.mdx"])
      );
      expect(warn).toHaveBeenCalledTimes(1);
    } finally {
      warn.mockRestore();
    }
  });
});
