/**
 * Custom Sections File Source
 *
 * Loads custom documentation sections from a JSON file.
 * This file is produced by the one-time MDX extraction script.
 */
import { access, readFile } from "fs/promises";
import { z } from "zod";
import type { CustomSections } from "../types/index.js";
import { DocumentationChunkSchema } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { ICustomSectionsSource } from "./interfaces.js";

// ============================================================================
// File Schema
// ============================================================================

const CustomSectionsFileSchema = z.record(
  z.string(),
  z.object({
    documentationChunks: z.array(DocumentationChunkSchema).default([]),
    customImports: z.array(z.string()).default([]),
    subPages: z.array(z.string()).default([]),
    toolChunks: z
      .record(z.string(), z.array(DocumentationChunkSchema))
      .default({}),
  })
);

type CustomSectionsFile = z.infer<typeof CustomSectionsFileSchema>;

// ============================================================================
// Custom Sections File Source
// ============================================================================

export interface CustomSectionsFileConfig {
  filePath: string;
}

/**
 * Source that loads custom documentation sections from a JSON file
 */
export class CustomSectionsFileSource implements ICustomSectionsSource {
  private readonly filePath: string;
  private cachedData: CustomSectionsFile | null = null;

  constructor(config: CustomSectionsFileConfig) {
    this.filePath = config.filePath;
  }

  private async loadFile(): Promise<CustomSectionsFile> {
    if (this.cachedData !== null) {
      return this.cachedData;
    }

    try {
      await access(this.filePath);
      const content = await readFile(this.filePath, "utf-8");
      const json = JSON.parse(content);
      this.cachedData = CustomSectionsFileSchema.parse(json);
      return this.cachedData;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        // File doesn't exist - return empty data
        this.cachedData = {};
        return this.cachedData;
      }
      throw error;
    }
  }

  async getCustomSections(toolkitId: string): Promise<CustomSections | null> {
    const data = await this.loadFile();

    // Try exact match
    if (data[toolkitId]) {
      return data[toolkitId] as CustomSections;
    }

    // Try normalized match
    const normalizedId = normalizeId(toolkitId);
    const entry = Object.entries(data).find(
      ([key]) => normalizeId(key) === normalizedId
    );

    return entry ? (entry[1] as CustomSections) : null;
  }

  async getAllCustomSections(): Promise<
    Readonly<Record<string, CustomSections>>
  > {
    const data = await this.loadFile();
    return data as Record<string, CustomSections>;
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createCustomSectionsFileSource = (
  filePath: string
): ICustomSectionsSource => new CustomSectionsFileSource({ filePath });
