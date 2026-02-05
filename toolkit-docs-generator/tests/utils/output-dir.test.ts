import { mkdir, mkdtemp, realpath, rm } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { resolveSafeOutputDir } from "../../src/utils/output-dir.js";

describe("resolveSafeOutputDir", () => {
  const originalCwd = process.cwd();
  let repoRoot: string | null = null;
  let homeDir: string | null = null;

  beforeEach(async () => {
    repoRoot = await mkdtemp(join(tmpdir(), "generator-repo-"));
    homeDir = await mkdtemp(join(tmpdir(), "generator-home-"));
    process.chdir(repoRoot);
  });

  afterEach(async () => {
    process.chdir(originalCwd);
    if (repoRoot) {
      await rm(repoRoot, { recursive: true, force: true });
      repoRoot = null;
    }
    if (homeDir) {
      await rm(homeDir, { recursive: true, force: true });
      homeDir = null;
    }
  });

  it("resolves a safe relative output directory inside the repo", async () => {
    await mkdir(join(repoRoot ?? "", "output"), { recursive: true });

    const resolved = await resolveSafeOutputDir("output", {
      repoRoot: repoRoot ?? undefined,
      homeDir: homeDir ?? undefined,
    });

    const expected = await realpath(join(repoRoot ?? "", "output"));
    expect(resolved).toBe(expected);
  });

  it("rejects relative paths that escape the repo root", async () => {
    await expect(
      resolveSafeOutputDir("../outside", {
        repoRoot: repoRoot ?? undefined,
        homeDir: homeDir ?? undefined,
      })
    ).rejects.toThrow("outside repo root");
  });

  it("rejects deleting the filesystem root", async () => {
    await expect(
      resolveSafeOutputDir("/", {
        repoRoot: repoRoot ?? undefined,
        homeDir: homeDir ?? undefined,
      })
    ).rejects.toThrow("unsafe output directory");
  });

  it("rejects deleting the home directory", async () => {
    await expect(
      resolveSafeOutputDir(homeDir ?? "", {
        repoRoot: repoRoot ?? undefined,
        homeDir: homeDir ?? undefined,
      })
    ).rejects.toThrow("unsafe output directory");
  });
});
