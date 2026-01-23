import { readFile, readdir } from "fs/promises";
import { basename, join } from "path";
import type { MergedToolkit, ToolkitIndex } from "../types/index.js";
import {
  MergedToolkitSchema,
  ToolkitIndexSchema,
} from "../types/index.js";

export interface OutputVerificationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

export interface ToolkitReadResult {
  toolkits: MergedToolkit[];
  errors: string[];
}

const isToolkitFile = (fileName: string): boolean =>
  fileName.endsWith(".json") && fileName !== "index.json";

const normalizeToolkitKey = (toolkitId: string): string =>
  toolkitId.toLowerCase();

const readToolkitFile = async (
  filePath: string
): Promise<MergedToolkit | null> => {
  try {
    const content = await readFile(filePath, "utf-8");
    const parsed = JSON.parse(content) as unknown;
    const result = MergedToolkitSchema.safeParse(parsed);
    if (!result.success) {
      return null;
    }
    return result.data;
  } catch {
    return null;
  }
};

export const readToolkitsFromDir = async (
  dir: string
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
  for (const fileName of jsonFiles) {
    const filePath = join(dir, fileName);
    const toolkit = await readToolkitFile(filePath);
    if (!toolkit) {
      errors.push(`Invalid toolkit JSON: ${fileName}`);
      continue;
    }
    toolkits.push(toolkit);
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

export const verifyOutputDir = async (
  dir: string
): Promise<OutputVerificationResult> => {
  const errors: string[] = [];
  const warnings: string[] = [];

  const { toolkits, errors: toolkitErrors } = await readToolkitsFromDir(dir);
  errors.push(...toolkitErrors);

  if (toolkits.length === 0) {
    errors.push("No toolkit JSON files found in output directory.");
  }

  const toolkitById = new Map<string, MergedToolkit>();
  for (const toolkit of toolkits) {
    const key = normalizeToolkitKey(toolkit.id);
    toolkitById.set(key, toolkit);
  }

  const index = await readIndexFile(dir);
  if (!index) {
    errors.push("Missing or invalid index.json in output directory.");
  } else {
    const indexIds = new Set(
      index.toolkits.map((entry) => normalizeToolkitKey(entry.id))
    );

    for (const [toolkitId, toolkit] of toolkitById) {
      if (!indexIds.has(toolkitId)) {
        errors.push(`index.json missing toolkit entry: ${toolkit.id}`);
        continue;
      }

      const entry = index.toolkits.find(
        (item) => normalizeToolkitKey(item.id) === toolkitId
      );
      if (!entry) {
        continue;
      }

      if (entry.version !== toolkit.version) {
        errors.push(
          `index.json version mismatch for ${toolkit.id}: ${entry.version} vs ${toolkit.version}`
        );
      }

      if (entry.category !== toolkit.metadata.category) {
        errors.push(
          `index.json category mismatch for ${toolkit.id}: ${entry.category} vs ${toolkit.metadata.category}`
        );
      }

      if (entry.toolCount !== toolkit.tools.length) {
        errors.push(
          `index.json toolCount mismatch for ${toolkit.id}: ${entry.toolCount} vs ${toolkit.tools.length}`
        );
      }

      const authType = toolkit.auth?.type ?? "none";
      if (entry.authType !== authType) {
        errors.push(
          `index.json authType mismatch for ${toolkit.id}: ${entry.authType} vs ${authType}`
        );
      }
    }

    for (const entry of index.toolkits) {
      const toolkitId = normalizeToolkitKey(entry.id);
      if (!toolkitById.has(toolkitId)) {
        errors.push(`index.json entry has no matching file: ${entry.id}`);
      }
    }
  }

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

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
};
