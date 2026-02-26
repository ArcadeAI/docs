import fs from "node:fs/promises";

type ResolveCleanMarkdownBuildModeInput = {
  fullRebuildEnv?: string;
  ciEnv?: string;
  vercelEnv?: string;
  outputDir: string;
};

export type CleanMarkdownBuildMode = {
  fullRebuild: boolean;
  reason: string;
};

function normalizeEnvFlag(value?: string): boolean | null {
  if (value === undefined) {
    return null;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === "true") {
    return true;
  }
  if (normalized === "false") {
    return false;
  }

  return null;
}

async function outputDirHasFiles(outputDir: string): Promise<boolean> {
  try {
    const entries = await fs.readdir(outputDir);
    return entries.length > 0;
  } catch {
    return false;
  }
}

export async function resolveCleanMarkdownBuildMode(
  input: ResolveCleanMarkdownBuildModeInput
): Promise<CleanMarkdownBuildMode> {
  const explicitFullRebuild = normalizeEnvFlag(input.fullRebuildEnv);
  if (explicitFullRebuild === true) {
    return { fullRebuild: true, reason: "FULL_REBUILD=true" };
  }

  if (explicitFullRebuild === false) {
    return { fullRebuild: false, reason: "FULL_REBUILD=false" };
  }

  if (input.ciEnv || input.vercelEnv) {
    return { fullRebuild: true, reason: "CI/VERCEL environment" };
  }

  const hasExistingOutput = await outputDirHasFiles(input.outputDir);
  if (!hasExistingOutput) {
    return { fullRebuild: true, reason: "No existing clean markdown output" };
  }

  return { fullRebuild: false, reason: "Diff-based mode" };
}
