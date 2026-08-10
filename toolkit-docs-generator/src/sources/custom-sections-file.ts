/**
 * Custom Sections File Source
 *
 * Loads hand-authored documentation sections that have no upstream source
 * (documentation chunks, custom imports, sub-pages). Two layouts are
 * supported:
 *
 * - A directory (e.g. `curation/`) of per-toolkit files, one file per
 *   toolkit named `<toolkitId>.json`, each holding a single
 *   `CustomSections` object. This is the layout the generator reads today;
 *   one file per toolkit keeps prose edits to reviewable, single-toolkit
 *   diffs. An empty file (`{}`) means the toolkit has no hand-authored
 *   prose — the merger clears any carry-forward from a previous artifact.
 * - A single JSON file that maps toolkit id to `CustomSections`. This is the
 *   legacy shape produced by the one-time MDX extraction.
 */
import { access, readdir, readFile, stat } from "fs/promises";
import { basename, join } from "path";
import { z } from "zod";
import type { CustomSections } from "../types/index.js";
import { CustomSectionsSchema } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { ICustomSectionsSource } from "./interfaces.js";

// ============================================================================
// File Schema
// ============================================================================

/** A single JSON file mapping toolkit id -> custom sections (legacy layout). */
const CustomSectionsFileSchema = z.record(z.string(), CustomSectionsSchema);

type CustomSectionsData = Record<string, CustomSections>;

// ============================================================================
// Custom Sections File Source
// ============================================================================

export interface CustomSectionsFileConfig {
  /** Path to either a directory of per-toolkit files or a single JSON file. */
  filePath: string;
}

const parseJsonWithSchema = <T>(
  content: string,
  filePath: string,
  schema: z.ZodType<T>
): T => {
  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(content) as unknown;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Custom sections file is not valid JSON (${filePath}): ${message}`
    );
  }

  const parsed = schema.safeParse(parsedJson);
  if (!parsed.success) {
    throw new Error(
      `Custom sections file has invalid schema (${filePath}): ${parsed.error.message}`
    );
  }

  return parsed.data;
};

/**
 * Source that loads custom documentation sections from disk.
 */
export class CustomSectionsFileSource implements ICustomSectionsSource {
  private readonly filePath: string;
  private cachedData: CustomSectionsData | null = null;

  constructor(config: CustomSectionsFileConfig) {
    this.filePath = config.filePath;
  }

  private async loadDirectory(dirPath: string): Promise<CustomSectionsData> {
    const entries = (await readdir(dirPath)).filter((name) =>
      name.endsWith(".json")
    );

    const data: CustomSectionsData = {};
    for (const entry of entries) {
      const entryPath = join(dirPath, entry);
      const content = await readFile(entryPath, "utf-8");
      const toolkitId = basename(entry, ".json");
      data[toolkitId] = parseJsonWithSchema(
        content,
        entryPath,
        CustomSectionsSchema
      );
    }
    return data;
  }

  private async loadData(): Promise<CustomSectionsData> {
    if (this.cachedData !== null) {
      return this.cachedData;
    }

    try {
      await access(this.filePath);
      const stats = await stat(this.filePath);
      this.cachedData = stats.isDirectory()
        ? await this.loadDirectory(this.filePath)
        : parseJsonWithSchema(
            await readFile(this.filePath, "utf-8"),
            this.filePath,
            CustomSectionsFileSchema
          );
      return this.cachedData;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        // Path doesn't exist - return empty data
        this.cachedData = {};
        return this.cachedData;
      }
      throw error;
    }
  }

  async getCustomSections(toolkitId: string): Promise<CustomSections | null> {
    const data = await this.loadData();

    // Try exact match
    if (data[toolkitId]) {
      return data[toolkitId];
    }

    // Try normalized match
    const normalizedId = normalizeId(toolkitId);
    const entry = Object.entries(data).find(
      ([key]) => normalizeId(key) === normalizedId
    );

    return entry ? entry[1] : null;
  }

  async getAllCustomSections(): Promise<
    Readonly<Record<string, CustomSections>>
  > {
    return this.loadData();
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createCustomSectionsFileSource = (
  filePath: string
): ICustomSectionsSource => new CustomSectionsFileSource({ filePath });
