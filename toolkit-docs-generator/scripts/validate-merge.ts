#!/usr/bin/env tsx

/**
 * Validate Merged Custom Sections
 *
 * This script validates that custom sections were properly merged into toolkit JSON files.
 * It checks for the presence of expected fields and provides a summary.
 *
 * Usage:
 *   tsx scripts/validate-merge.ts
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORKSPACE_ROOT = join(__dirname, "..");
const DATA_DIR = join(WORKSPACE_ROOT, "data", "toolkits");

type ToolkitJson = {
  id: string;
  label: string;
  documentationChunks?: Record<string, unknown>[];
  customImports?: string[];
  subPages?: Record<string, unknown>[];
};

export type ToolkitValidationDetail = {
  file: string;
  label: string;
  hasDocChunks: boolean;
  hasImports: boolean;
  hasSubPages: boolean;
  docChunksCount: number;
  importsCount: number;
  subPagesCount: number;
};

export type MergeValidationResult = {
  totalToolkits: number;
  withDocChunks: number;
  withCustomImports: number;
  withSubPages: number;
  detailedResults: ToolkitValidationDetail[];
  errors: string[];
};

function getToolkitFiles(dataDir: string): string[] {
  return readdirSync(dataDir).filter(
    (fileName) => fileName.endsWith(".json") && fileName !== "index.json"
  );
}

function getToolkitCounts(json: ToolkitJson) {
  const docChunksCount = json.documentationChunks?.length ?? 0;
  const importsCount = json.customImports?.length ?? 0;
  const subPagesCount = json.subPages?.length ?? 0;

  return {
    docChunksCount,
    importsCount,
    subPagesCount,
    hasDocChunks: docChunksCount > 0,
    hasImports: importsCount > 0,
    hasSubPages: subPagesCount > 0,
  };
}

function buildDetail(
  file: string,
  json: ToolkitJson,
  counts: ReturnType<typeof getToolkitCounts>
): ToolkitValidationDetail | null {
  if (!(counts.hasDocChunks || counts.hasImports || counts.hasSubPages)) {
    return null;
  }

  return {
    file,
    label: json.label || json.id,
    hasDocChunks: counts.hasDocChunks,
    hasImports: counts.hasImports,
    hasSubPages: counts.hasSubPages,
    docChunksCount: counts.docChunksCount,
    importsCount: counts.importsCount,
    subPagesCount: counts.subPagesCount,
  };
}

export function validateMergedCustomSections(
  dataDir: string = DATA_DIR
): MergeValidationResult {
  if (!existsSync(dataDir)) {
    throw new Error(`Data directory not found: ${dataDir}`);
  }

  const files = getToolkitFiles(dataDir);
  const result: MergeValidationResult = {
    totalToolkits: 0,
    withDocChunks: 0,
    withCustomImports: 0,
    withSubPages: 0,
    detailedResults: [],
    errors: [],
  };

  for (const file of files) {
    try {
      const content = readFileSync(join(dataDir, file), "utf-8");
      const json = JSON.parse(content) as ToolkitJson;
      const counts = getToolkitCounts(json);

      result.totalToolkits += 1;
      if (counts.hasDocChunks) {
        result.withDocChunks += 1;
      }
      if (counts.hasImports) {
        result.withCustomImports += 1;
      }
      if (counts.hasSubPages) {
        result.withSubPages += 1;
      }

      const detail = buildDetail(file, json, counts);
      if (detail) {
        result.detailedResults.push(detail);
      }
    } catch (error) {
      result.errors.push(`⚠️  Error reading ${file}: ${String(error)}`);
    }
  }

  return result;
}

function buildBadges(detail: ToolkitValidationDetail): string[] {
  const badges: string[] = [];
  if (detail.hasDocChunks) {
    badges.push(`📄 ${detail.docChunksCount} doc chunks`);
  }
  if (detail.hasImports) {
    badges.push(`📦 ${detail.importsCount} imports`);
  }
  if (detail.hasSubPages) {
    badges.push(`📑 ${detail.subPagesCount} sub-pages`);
  }
  return badges;
}

export function buildValidationOutputLines(
  result: MergeValidationResult
): string[] {
  const lines: string[] = [
    "=".repeat(60),
    "📊 Summary",
    "=".repeat(60),
    `Total toolkit JSON files: ${result.totalToolkits}`,
    `With documentation chunks: ${result.withDocChunks}`,
    `With custom imports: ${result.withCustomImports}`,
    `With sub-pages: ${result.withSubPages}`,
    `Total with custom sections: ${result.detailedResults.length}`,
    "=".repeat(60),
  ];

  if (result.detailedResults.length > 0) {
    lines.push("", "📝 Toolkits with Custom Sections:", "");

    const sortedDetails = [...result.detailedResults].sort((a, b) =>
      a.label.localeCompare(b.label)
    );
    for (const detail of sortedDetails) {
      lines.push(`   ${detail.label}`);
      lines.push(`      ${buildBadges(detail).join(" | ")}`);
    }
  } else {
    lines.push(
      "",
      "⚠️  No toolkits found with custom sections.",
      "   Did you run the merge script? Run:",
      "   npm run merge-custom-sections"
    );
  }

  if (result.errors.length > 0) {
    lines.push(
      "",
      "⚠️  Files with errors:",
      ...result.errors.map((e) => `   ${e}`)
    );
  }

  return lines;
}

export function main(): void {
  console.log("🔍 Validating Merged Custom Sections\n");

  try {
    const result = validateMergedCustomSections();
    const lines = buildValidationOutputLines(result);
    for (const line of lines) {
      console.log(line);
    }
    console.log("\n✅ Validation complete!");
  } catch (error) {
    console.error("❌ Data directory not found:", DATA_DIR);
    console.error(error);
    process.exit(1);
  }
}

const currentFile = fileURLToPath(import.meta.url);
const entryFile = process.argv[1];
if (entryFile && resolve(entryFile) === resolve(currentFile)) {
  main();
}
