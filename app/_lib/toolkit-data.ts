import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";

export type ToolkitIndexEntry = {
  id: string;
  label: string;
  version: string;
  category: string;
  type?: string;
  toolCount: number;
  authType: string;
};

export type ToolkitIndex = {
  generatedAt: string;
  version: string;
  toolkits: ToolkitIndexEntry[];
};

type ToolkitDataOptions = {
  dataDir?: string;
};

const DEFAULT_DATA_DIR = join(process.cwd(), "data", "toolkits");

const resolveDataDir = (options?: ToolkitDataOptions): string =>
  options?.dataDir ?? process.env.TOOLKIT_DATA_DIR ?? DEFAULT_DATA_DIR;

export const readToolkitData = async (
  toolkitId: string,
  options?: ToolkitDataOptions
): Promise<ToolkitData | null> => {
  // Normalize the toolkit ID to lowercase alphanumeric
  const normalizedId = toolkitId.toLowerCase().replace(/[^a-z0-9]+/g, "");

  // Guard against empty normalized ID (e.g., input was only special characters)
  if (!normalizedId) {
    return null;
  }

  const fileName = `${normalizedId}.json`;
  const filePath = join(resolveDataDir(options), fileName);

  try {
    const content = await readFile(filePath, "utf-8");
    const parsed: unknown = JSON.parse(content);

    // Basic runtime validation - ensure it's an object with required fields
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("id" in parsed) ||
      !("label" in parsed || "name" in parsed)
    ) {
      return null;
    }

    return parsed as ToolkitData;
  } catch {
    return null;
  }
};

export const readToolkitIndex = async (
  options?: ToolkitDataOptions
): Promise<ToolkitIndex | null> => {
  const filePath = join(resolveDataDir(options), "index.json");

  try {
    const content = await readFile(filePath, "utf-8");
    const parsed: unknown = JSON.parse(content);

    // Basic runtime validation - ensure it's an object with required fields
    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("toolkits" in parsed) ||
      !Array.isArray((parsed as { toolkits: unknown }).toolkits)
    ) {
      return null;
    }

    return parsed as ToolkitIndex;
  } catch {
    return null;
  }
};
