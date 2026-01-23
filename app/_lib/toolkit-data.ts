import { readFile } from "fs/promises";
import { join } from "path";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";

export type ToolkitIndexEntry = {
  id: string;
  label: string;
  version: string;
  category: string;
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
  const fileName = `${toolkitId.toLowerCase()}.json`;
  const filePath = join(resolveDataDir(options), fileName);

  try {
    const content = await readFile(filePath, "utf-8");
    return JSON.parse(content) as ToolkitData;
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
    return JSON.parse(content) as ToolkitIndex;
  } catch {
    return null;
  }
};
