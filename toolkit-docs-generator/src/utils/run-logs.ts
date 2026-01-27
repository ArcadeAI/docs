/**
 * Run log utilities for CLI workflows
 */

import { appendFile, mkdir, readFile, writeFile } from "fs/promises";
import { dirname } from "path";

export interface LogFilePaths {
  readonly runLogPath: string;
  readonly changeLogPath: string;
}

export interface LogEntry {
  readonly title: string;
  readonly details: readonly string[];
}

export interface FailedToolEntry {
  readonly toolkitId: string;
  readonly toolName: string;
  readonly qualifiedName: string;
  readonly reason: string;
}

export interface FailedToolsReport {
  readonly generatedAt: string;
  readonly toolkits: readonly string[];
  readonly failedToolkits: readonly string[];
  readonly tools: readonly FailedToolEntry[];
}

const ensureLogDir = async (filePath: string): Promise<void> => {
  await mkdir(dirname(filePath), { recursive: true });
};

const formatEntry = (entry: LogEntry): string[] => {
  const timestamp = new Date().toISOString();
  const lines = [`${timestamp} ${entry.title}`];
  for (const detail of entry.details) {
    lines.push(`  - ${detail}`);
  }
  lines.push("");
  return lines;
};

export const appendLogEntry = async (
  filePath: string,
  entry: LogEntry
): Promise<void> => {
  await ensureLogDir(filePath);
  const lines = formatEntry(entry);
  await appendFile(filePath, `${lines.join("\n")}\n`, "utf-8");
};

export const writeFailedToolsReport = async (
  filePath: string,
  report: FailedToolsReport
): Promise<void> => {
  await ensureLogDir(filePath);
  const content = JSON.stringify(report, null, 2);
  await writeFile(filePath, content, "utf-8");
};

export const readFailedToolsReport = async (
  filePath: string
): Promise<FailedToolsReport> => {
  const content = await readFile(filePath, "utf-8");
  const parsed = JSON.parse(content) as FailedToolsReport;
  if (!parsed || !Array.isArray(parsed.toolkits) || !Array.isArray(parsed.tools)) {
    throw new Error("Invalid failed tools report format.");
  }
  return parsed;
};
