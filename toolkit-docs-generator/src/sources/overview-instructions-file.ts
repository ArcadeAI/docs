/**
 * Overview Instructions File Source
 *
 * Loads overview instruction files from a directory or a single file.
 */
import { access, readdir, readFile } from "fs/promises";
import { basename, extname, join } from "path";
import { z } from "zod";
import type { ToolkitOverviewInstructions } from "../overview/types.js";
import { normalizeId } from "../utils/fp.js";
import type { IOverviewInstructionsSource } from "./interfaces.js";

const OverviewInstructionsSchema = z.object({
  toolkitId: z.string().min(1).optional(),
  label: z.string().optional(),
  sources: z.array(z.string()).optional().default([]),
  instructions: z.string().optional().default(""),
});

const ToolkitsMapSchema = z.object({
  toolkits: z.record(z.string(), OverviewInstructionsSchema),
});

type OverviewFilePayload =
  | z.infer<typeof OverviewInstructionsSchema>
  | z.infer<typeof ToolkitsMapSchema>;

export interface OverviewInstructionsFileConfig {
  dirPath?: string;
  filePath?: string;
  allowMissing?: boolean;
}

const buildToolkitIdFromFile = (filePath: string): string =>
  basename(filePath, extname(filePath));

const toInstructions = (
  raw: OverviewFilePayload,
  fallbackToolkitId?: string
): ToolkitOverviewInstructions[] => {
  if ("toolkits" in raw) {
    return Object.entries(raw.toolkits).map(([key, value]) => ({
      ...value,
      toolkitId: value.toolkitId || key,
    }));
  }

  return [
    {
      ...raw,
      toolkitId: raw.toolkitId || fallbackToolkitId || raw.label || "unknown",
    },
  ];
};

export class OverviewInstructionsFileSource
  implements IOverviewInstructionsSource
{
  private readonly dirPath?: string;
  private readonly filePath?: string;
  private readonly allowMissing: boolean;
  private cachedData: Record<string, ToolkitOverviewInstructions> | null = null;

  constructor(config: OverviewInstructionsFileConfig) {
    this.dirPath = config.dirPath;
    this.filePath = config.filePath;
    this.allowMissing = config.allowMissing ?? true;
  }

  private isMissingAllowed(error: unknown): boolean {
    return (
      (error as NodeJS.ErrnoException).code === "ENOENT" && this.allowMissing
    );
  }

  private async resolveFiles(): Promise<string[]> {
    if (this.filePath) {
      return [this.filePath];
    }

    if (!this.dirPath) {
      return [];
    }
    const dirPath = this.dirPath;

    try {
      await access(this.dirPath);
    } catch (error) {
      if (this.isMissingAllowed(error)) {
        return [];
      }
      throw error;
    }

    const entries = await readdir(dirPath);
    return entries
      .filter((entry) => extname(entry).toLowerCase() === ".json")
      .map((entry) => join(dirPath, entry));
  }

  private async readInstructionsFromFiles(
    files: readonly string[]
  ): Promise<Record<string, ToolkitOverviewInstructions>> {
    const result: Record<string, ToolkitOverviewInstructions> = {};

    for (const filePath of files) {
      try {
        const payload = await this.readFileContent(filePath);
        const fallbackToolkitId = buildToolkitIdFromFile(filePath);
        const instructionsList = toInstructions(payload, fallbackToolkitId);
        for (const instruction of instructionsList) {
          const key = instruction.toolkitId;
          result[key] = instruction;
        }
      } catch (error) {
        if (this.isMissingAllowed(error)) {
          continue;
        }
        throw error;
      }
    }

    return result;
  }

  private async readFileContent(
    filePath: string
  ): Promise<OverviewFilePayload> {
    const content = await readFile(filePath, "utf-8");
    const parsed = JSON.parse(content) as unknown;

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      "toolkits" in parsed
    ) {
      return ToolkitsMapSchema.parse(parsed);
    }

    return OverviewInstructionsSchema.parse(parsed);
  }

  private async loadFiles(): Promise<
    Record<string, ToolkitOverviewInstructions>
  > {
    if (this.cachedData) {
      return this.cachedData;
    }

    const files = await this.resolveFiles();
    if (files.length === 0) {
      this.cachedData = {};
      return this.cachedData;
    }
    const result = await this.readInstructionsFromFiles(files);
    this.cachedData = result;
    return this.cachedData;
  }

  async getOverviewInstructions(
    toolkitId: string
  ): Promise<ToolkitOverviewInstructions | null> {
    const data = await this.loadFiles();
    if (data[toolkitId]) {
      return data[toolkitId];
    }

    const normalizedId = normalizeId(toolkitId);
    const entry = Object.entries(data).find(
      ([key]) => normalizeId(key) === normalizedId
    );

    return entry ? entry[1] : null;
  }

  async getAllOverviewInstructions(): Promise<
    Readonly<Record<string, ToolkitOverviewInstructions>>
  > {
    const data = await this.loadFiles();
    return data;
  }
}

export const createOverviewInstructionsFileSource = (
  config: OverviewInstructionsFileConfig
): IOverviewInstructionsSource => new OverviewInstructionsFileSource(config);
