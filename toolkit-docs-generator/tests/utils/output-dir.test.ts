import { mkdir, mkdtemp, realpath, rm } from "fs/promises";
import { tmpdir } from "os";
import { basename, join } from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  clearSafeOutputDir,
  resolveDefaultOutputDir,
  resolveSafeOutputDir,
} from "../../src/utils/output-dir.js";

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

  it("rejects the repository root when run from the generator directory", async () => {
    const generatorDir = join(repoRoot ?? "", "toolkit-docs-generator");
    await mkdir(generatorDir);
    process.chdir(generatorDir);

    await expect(clearSafeOutputDir(repoRoot ?? "")).rejects.toThrow(
      "unsafe output directory"
    );
    expect(await realpath(repoRoot ?? "")).toContain(
      basename(repoRoot ?? "repo")
    );
  });

  it("clears a safe output directory", async () => {
    const outputDir = join(repoRoot ?? "", "output");
    await mkdir(outputDir, { recursive: true });
    const expected = await realpath(outputDir);

    const cleared = await clearSafeOutputDir(outputDir, {
      repoRoot: repoRoot ?? undefined,
      homeDir: homeDir ?? undefined,
    });

    expect(cleared).toBe(expected);
    await expect(realpath(outputDir)).rejects.toThrow();
  });

  it("does not clear a relative directory outside the repository", async () => {
    const outsideName = `${basename(repoRoot ?? "repo")}-outside`;
    const outsideDir = join(repoRoot ?? "", "..", outsideName);
    await mkdir(outsideDir);
    try {
      await expect(
        clearSafeOutputDir(`../${outsideName}`, {
          repoRoot: repoRoot ?? undefined,
          homeDir: homeDir ?? undefined,
        })
      ).rejects.toThrow("outside repo root");
      expect(await realpath(outsideDir)).toContain(outsideName);
    } finally {
      await rm(outsideDir, { recursive: true, force: true });
    }
  });
});

describe("resolveDefaultOutputDir", () => {
  it("uses the generator data directory from the repository root", () => {
    expect(resolveDefaultOutputDir("/repo")).toBe(
      "/repo/toolkit-docs-generator/data/toolkits"
    );
  });

  it("uses the local data directory from the generator directory", () => {
    expect(resolveDefaultOutputDir("/repo/toolkit-docs-generator")).toBe(
      "/repo/toolkit-docs-generator/data/toolkits"
    );
  });
});
