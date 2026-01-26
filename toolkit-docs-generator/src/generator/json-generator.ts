/**
 * JSON Generator
 *
 * Outputs merged toolkit data as JSON files.
 */
import { mkdir, readFile, stat, writeFile } from "fs/promises";
import { dirname, join } from "path";
import type {
  MergedToolkit,
  ToolkitIndex,
  ToolkitIndexEntry,
} from "../types/index.js";
import { MergedToolkitSchema } from "../types/index.js";
import { readToolkitsFromDir } from "./output-verifier.js";

// ============================================================================
// Generator Configuration
// ============================================================================

export interface JsonGeneratorConfig {
  /** Output directory path */
  outputDir: string;
  /** Whether to pretty-print JSON (default: true) */
  prettyPrint?: boolean;
  /** Whether to generate an index file (default: true) */
  generateIndex?: boolean;
  /** Where to source toolkits for the index file */
  indexSource?: "current" | "output";
  /** Whether to validate output with Zod (default: true) */
  validateOutput?: boolean;
}

export interface GeneratorResult {
  /** List of files that were written */
  filesWritten: string[];
  /** List of errors that occurred */
  errors: string[];
}

// ============================================================================
// JSON Generator
// ============================================================================

/**
 * Generator that outputs merged toolkit data as JSON files
 */
export class JsonGenerator {
  private readonly outputDir: string;
  private readonly prettyPrint: boolean;
  private readonly generateIndex: boolean;
  private readonly indexSource: "current" | "output";
  private readonly validateOutput: boolean;

  constructor(config: JsonGeneratorConfig) {
    this.outputDir = config.outputDir;
    this.prettyPrint = config.prettyPrint ?? true;
    this.generateIndex = config.generateIndex ?? true;
    this.indexSource = config.indexSource ?? "current";
    this.validateOutput = config.validateOutput ?? true;
  }

  /**
   * Generate JSON file for a single toolkit
   */
  async generateToolkitFile(toolkit: MergedToolkit): Promise<string> {
    // Validate if enabled
    if (this.validateOutput) {
      const result = MergedToolkitSchema.safeParse(toolkit);
      if (!result.success) {
        throw new Error(
          `Validation failed for ${toolkit.id}: ${result.error.message}`
        );
      }
    }

    const fileName = `${toolkit.id.toLowerCase()}.json`;
    const filePath = join(this.outputDir, fileName);

    // Ensure directory exists
    await mkdir(dirname(filePath), { recursive: true });

    // Write file
    const content = this.prettyPrint
      ? JSON.stringify(toolkit, null, 2)
      : JSON.stringify(toolkit);

    await writeFile(filePath, content, "utf-8");
    return filePath;
  }

  /**
   * Check if a toolkit file already exists in the output directory
   */
  async hasToolkitFile(toolkitId: string): Promise<boolean> {
    const fileName = `${toolkitId.toLowerCase()}.json`;
    const filePath = join(this.outputDir, fileName);
    try {
      const stats = await stat(filePath);
      return stats.isFile();
    } catch {
      return false;
    }
  }

  /**
   * Get set of toolkit IDs that already have output files
   */
  async getCompletedToolkitIds(): Promise<Set<string>> {
    const completedIds = new Set<string>();
    try {
      const result = await readToolkitsFromDir(this.outputDir);
      for (const toolkit of result.toolkits) {
        completedIds.add(toolkit.id.toLowerCase());
      }
    } catch {
      // Directory doesn't exist or is empty - that's fine
    }
    return completedIds;
  }

  /**
   * Load an existing toolkit file
   */
  async loadToolkitFile(toolkitId: string): Promise<MergedToolkit | null> {
    const fileName = `${toolkitId.toLowerCase()}.json`;
    const filePath = join(this.outputDir, fileName);
    try {
      const content = await readFile(filePath, "utf-8");
      const parsed = JSON.parse(content) as unknown;
      const result = MergedToolkitSchema.safeParse(parsed);
      if (result.success) {
        return result.data;
      }
      return null;
    } catch {
      return null;
    }
  }

  /**
   * Generate JSON files for multiple toolkits
   */
  async generateAll(
    toolkits: readonly MergedToolkit[]
  ): Promise<GeneratorResult> {
    const filesWritten: string[] = [];
    const errors: string[] = [];

    // Generate per-toolkit files
    for (const toolkit of toolkits) {
      try {
        const filePath = await this.generateToolkitFile(toolkit);
        filesWritten.push(filePath);
      } catch (error) {
        errors.push(`Failed to write ${toolkit.id}: ${error}`);
      }
    }

    // Generate index file
    if (this.generateIndex && toolkits.length > 0) {
      try {
        const indexToolkits =
          this.indexSource === "output"
            ? await this.getToolkitsFromOutputDir(errors)
            : toolkits;
        const indexPath = await this.generateIndexFile(indexToolkits);
        filesWritten.push(indexPath);
      } catch (error) {
        errors.push(`Failed to write index: ${error}`);
      }
    }

    return { filesWritten, errors };
  }

  /**
   * Generate index file with toolkit summaries
   */
  private async generateIndexFile(
    toolkits: readonly MergedToolkit[]
  ): Promise<string> {
    const entries: ToolkitIndexEntry[] = toolkits.map((t) => ({
      id: t.id,
      label: t.label,
      version: t.version,
      category: t.metadata.category,
      toolCount: t.tools.length,
      authType: t.auth?.type ?? "none",
    }));

    const index: ToolkitIndex = {
      generatedAt: new Date().toISOString(),
      version: "1.0.0",
      toolkits: entries,
    };

    const filePath = join(this.outputDir, "index.json");

    await mkdir(dirname(filePath), { recursive: true });

    const content = this.prettyPrint
      ? JSON.stringify(index, null, 2)
      : JSON.stringify(index);

    await writeFile(filePath, content, "utf-8");
    return filePath;
  }

  private async getToolkitsFromOutputDir(
    errors: string[]
  ): Promise<MergedToolkit[]> {
    const readResult = await readToolkitsFromDir(this.outputDir);
    if (readResult.errors.length > 0) {
      errors.push(...readResult.errors);
    }
    return readResult.toolkits;
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createJsonGenerator = (
  config: JsonGeneratorConfig
): JsonGenerator => new JsonGenerator(config);
