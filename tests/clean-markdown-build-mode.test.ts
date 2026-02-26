import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { resolveCleanMarkdownBuildMode } from "../scripts/clean-markdown-build-mode";

async function createTempOutputDir(): Promise<string> {
  const root = await mkdtemp(join(tmpdir(), "clean-markdown-mode-"));
  const outputDir = join(root, "public", "_markdown");
  await mkdir(outputDir, { recursive: true });
  return root;
}

describe("resolveCleanMarkdownBuildMode", () => {
  let tempRoot: string | null = null;

  afterEach(async () => {
    if (tempRoot) {
      await rm(tempRoot, { recursive: true, force: true });
      tempRoot = null;
    }
  });

  it("enables full rebuild when FULL_REBUILD=true", async () => {
    tempRoot = await createTempOutputDir();
    const mode = await resolveCleanMarkdownBuildMode({
      fullRebuildEnv: "true",
      outputDir: join(tempRoot, "public", "_markdown"),
    });

    expect(mode).toEqual({
      fullRebuild: true,
      reason: "FULL_REBUILD=true",
    });
  });

  it("keeps diff mode when FULL_REBUILD=false even on CI", async () => {
    tempRoot = await createTempOutputDir();
    const outputDir = join(tempRoot, "public", "_markdown");
    await writeFile(join(outputDir, "en.md"), "# existing\n", "utf-8");

    const mode = await resolveCleanMarkdownBuildMode({
      fullRebuildEnv: "false",
      ciEnv: "true",
      outputDir,
    });

    expect(mode).toEqual({
      fullRebuild: false,
      reason: "FULL_REBUILD=false",
    });
  });

  it("enables full rebuild automatically on CI when env is unset", async () => {
    tempRoot = await createTempOutputDir();
    const mode = await resolveCleanMarkdownBuildMode({
      ciEnv: "true",
      outputDir: join(tempRoot, "public", "_markdown"),
    });

    expect(mode).toEqual({
      fullRebuild: true,
      reason: "CI/VERCEL environment",
    });
  });

  it("enables full rebuild when output directory is empty", async () => {
    tempRoot = await createTempOutputDir();
    const mode = await resolveCleanMarkdownBuildMode({
      outputDir: join(tempRoot, "public", "_markdown"),
    });

    expect(mode).toEqual({
      fullRebuild: true,
      reason: "No existing clean markdown output",
    });
  });

  it("keeps diff mode when output already exists and no CI flags are set", async () => {
    tempRoot = await createTempOutputDir();
    const outputDir = join(tempRoot, "public", "_markdown");
    await writeFile(join(outputDir, "en.md"), "# existing\n", "utf-8");

    const mode = await resolveCleanMarkdownBuildMode({
      outputDir,
    });

    expect(mode).toEqual({
      fullRebuild: false,
      reason: "Diff-based mode",
    });
  });
});
