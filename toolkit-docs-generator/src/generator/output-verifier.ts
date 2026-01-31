import { readdir, readFile } from "fs/promises";
import { basename, join } from "path";
import type { MergedToolkit, ToolkitIndex } from "../types/index.js";
import { MergedToolkitSchema, ToolkitIndexSchema } from "../types/index.js";

export interface OutputVerificationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export interface ToolkitReadResult {
  toolkits: MergedToolkit[];
  errors: string[];
}

export interface VerificationProgress {
  phase: "reading" | "validating" | "cross-referencing";
  current: number;
  total: number;
  fileName?: string;
}

export type VerificationProgressCallback = (
  progress: VerificationProgress
) => void;

const isToolkitFile = (fileName: string): boolean =>
  fileName.endsWith(".json") && fileName !== "index.json";

const normalizeToolkitKey = (toolkitId: string): string =>
  toolkitId.toLowerCase();

type ReadToolkitFileResult = {
  toolkit: MergedToolkit | null;
  error?: string;
};

const readToolkitFile = async (
  filePath: string
): Promise<ReadToolkitFileResult> => {
  const fileName = basename(filePath);
  let content: string;
  try {
    content = await readFile(filePath, "utf-8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      toolkit: null,
      error: `Failed to read ${fileName}: ${message}`,
    };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content) as unknown;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      toolkit: null,
      error: `Invalid JSON in ${fileName}: ${message}`,
    };
  }

  const result = MergedToolkitSchema.safeParse(parsed);
  if (!result.success) {
    return {
      toolkit: null,
      error: `Invalid toolkit schema in ${fileName}: ${result.error.message}`,
    };
  }

  return { toolkit: result.data };
};

export const readToolkitsFromDir = async (
  dir: string,
  onProgress?: VerificationProgressCallback
): Promise<ToolkitReadResult> => {
  const toolkits: MergedToolkit[] = [];
  const errors: string[] = [];

  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch (error) {
    return {
      toolkits: [],
      errors: [`Failed to read output directory: ${error}`],
    };
  }

  const jsonFiles = entries.filter(isToolkitFile);
  const total = jsonFiles.length;

  for (let i = 0; i < jsonFiles.length; i++) {
    const fileName = jsonFiles[i];
    if (!fileName) continue;

    onProgress?.({
      phase: "reading",
      current: i + 1,
      total,
      fileName,
    });

    const filePath = join(dir, fileName);
    const result = await readToolkitFile(filePath);
    if (!result.toolkit) {
      errors.push(result.error ?? `Invalid toolkit JSON: ${fileName}`);
      continue;
    }
    toolkits.push(result.toolkit);
  }

  return { toolkits, errors };
};

const readIndexFile = async (dir: string): Promise<ToolkitIndex | null> => {
  const indexPath = join(dir, "index.json");
  try {
    const content = await readFile(indexPath, "utf-8");
    const parsed = JSON.parse(content) as unknown;
    const result = ToolkitIndexSchema.safeParse(parsed);
    if (!result.success) {
      return null;
    }
    return result.data;
  } catch {
    return null;
  }
};

const buildToolkitMap = (
  toolkits: MergedToolkit[]
): Map<string, MergedToolkit> => {
  const toolkitById = new Map<string, MergedToolkit>();
  for (const toolkit of toolkits) {
    const key = normalizeToolkitKey(toolkit.id);
    toolkitById.set(key, toolkit);
  }
  return toolkitById;
};

const reportProgress = (
  onProgress: VerificationProgressCallback | undefined,
  progress: VerificationProgress
): void => {
  onProgress?.(progress);
};

const validateIndexEntry = (
  toolkit: MergedToolkit,
  indexEntry: ToolkitIndex["toolkits"][number]
): string[] => {
  const errors: string[] = [];
  if (indexEntry.version !== toolkit.version) {
    errors.push(
      `index.json version mismatch for ${toolkit.id}: ${indexEntry.version} vs ${toolkit.version}`
    );
  }
  if (indexEntry.category !== toolkit.metadata.category) {
    errors.push(
      `index.json category mismatch for ${toolkit.id}: ${indexEntry.category} vs ${toolkit.metadata.category}`
    );
  }
  if (indexEntry.type !== toolkit.metadata.type) {
    errors.push(
      `index.json type mismatch for ${toolkit.id}: ${indexEntry.type} vs ${toolkit.metadata.type}`
    );
  }
  if (indexEntry.toolCount !== toolkit.tools.length) {
    errors.push(
      `index.json toolCount mismatch for ${toolkit.id}: ${indexEntry.toolCount} vs ${toolkit.tools.length}`
    );
  }
  const authType = toolkit.auth?.type ?? "none";
  if (indexEntry.authType !== authType) {
    errors.push(
      `index.json authType mismatch for ${toolkit.id}: ${indexEntry.authType} vs ${authType}`
    );
  }
  return errors;
};

const validateIndex = async (
  dir: string,
  toolkitById: Map<string, MergedToolkit>,
  onProgress?: VerificationProgressCallback
): Promise<string[]> => {
  const errors: string[] = [];

  reportProgress(onProgress, {
    phase: "validating",
    current: 0,
    total: 1,
    fileName: "index.json",
  });

  const index = await readIndexFile(dir);
  if (!index) {
    errors.push("Missing or invalid index.json in output directory.");
    return errors;
  }

  const indexIds = new Set(
    index.toolkits.map((entry) => normalizeToolkitKey(entry.id))
  );

  const toolkitEntries = Array.from(toolkitById.entries());
  const totalEntries = toolkitEntries.length;

  for (let i = 0; i < toolkitEntries.length; i++) {
    const entry = toolkitEntries[i];
    if (!entry) {
      continue;
    }
    const [toolkitId, toolkit] = entry;

    reportProgress(onProgress, {
      phase: "cross-referencing",
      current: i + 1,
      total: totalEntries,
      fileName: `${toolkit.id}.json`,
    });

    if (!indexIds.has(toolkitId)) {
      errors.push(`index.json missing toolkit entry: ${toolkit.id}`);
      continue;
    }

    const indexEntry = index.toolkits.find(
      (item) => normalizeToolkitKey(item.id) === toolkitId
    );
    if (!indexEntry) {
      continue;
    }

    errors.push(...validateIndexEntry(toolkit, indexEntry));
  }

  for (const indexEntry of index.toolkits) {
    const toolkitId = normalizeToolkitKey(indexEntry.id);
    if (!toolkitById.has(toolkitId)) {
      errors.push(`index.json entry has no matching file: ${indexEntry.id}`);
    }
  }

  return errors;
};

const validateFileNames = async (
  dir: string,
  toolkitById: Map<string, MergedToolkit>
): Promise<string[]> => {
  const errors: string[] = [];
  const fileNames = await readdir(dir).catch(() => []);
  const jsonFiles = fileNames.filter(isToolkitFile);
  for (const fileName of jsonFiles) {
    const baseName = basename(fileName, ".json");
    if (baseName !== baseName.toLowerCase()) {
      errors.push(`File name must be lowercase: ${fileName}`);
    }
    const idFromFile = baseName.toLowerCase();
    if (!toolkitById.has(idFromFile)) {
      errors.push(`File name does not match toolkit id: ${fileName}`);
    }
  }
  return errors;
};

export const verifyOutputDir = async (
  dir: string,
  onProgress?: VerificationProgressCallback
): Promise<OutputVerificationResult> => {
  const errors: string[] = [];
  const warnings: string[] = [];

  const { toolkits, errors: toolkitErrors } = await readToolkitsFromDir(
    dir,
    onProgress
  );
  errors.push(...toolkitErrors);

  if (toolkits.length === 0) {
    errors.push("No toolkit JSON files found in output directory.");
  }

  const toolkitById = buildToolkitMap(toolkits);
  errors.push(...(await validateIndex(dir, toolkitById, onProgress)));
  errors.push(...(await validateFileNames(dir, toolkitById)));

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
};
