#!/usr/bin/env npx ts-node
/**
 * Script to merge custom sections into existing toolkit JSON files.
 *
 * Usage: npx ts-node scripts/merge-custom-sections.ts \
 *   --custom-sections ../data/custom_sections_for_merge.json \
 *   --toolkits-dir data/toolkits
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const JSON_PRETTY_PRINT_INDENT = 2;
const ERROR_PREVIEW_LIMIT = 10;
const SUMMARY_SEPARATOR_LENGTH = 50;

type DocumentationChunk = {
  type: string;
  location: string;
  position: string;
  content: string;
  header?: string;
  contentBlocks?: unknown[];
};

type CustomSections = {
  documentationChunks?: DocumentationChunk[];
  customImports?: string[];
  subPages?: unknown[];
  toolChunks?: Record<string, DocumentationChunk[]>;
};

type MergedToolkit = {
  id: string;
  documentationChunks: DocumentationChunk[];
  customImports: string[];
  subPages: unknown[];
  [key: string]: unknown;
};

const normalizeId = (id: string): string =>
  id.toLowerCase().replace(/[^a-z0-9]/g, "");

type MergeOptions = {
  customSectionsPath: string;
  toolkitsDir: string;
  verbose: boolean;
};

type MergeOutcome = {
  mergedCount: number;
  skippedCount: number;
  errors: string[];
};

const parseArgs = (args: string[]): MergeOptions => {
  let customSectionsPath = "../data/custom_sections_for_merge.json";
  let toolkitsDir = "data/toolkits";
  let verbose = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--custom-sections" && args[i + 1]) {
      customSectionsPath = args[i + 1];
      i++;
    } else if (args[i] === "--toolkits-dir" && args[i + 1]) {
      toolkitsDir = args[i + 1];
      i++;
    } else if (args[i] === "--verbose" || args[i] === "-v") {
      verbose = true;
    }
  }

  return { customSectionsPath, toolkitsDir, verbose };
};

const loadCustomSections = async (
  customSectionsPath: string
): Promise<Record<string, CustomSections>> => {
  const customSectionsContent = await readFile(customSectionsPath, "utf-8");
  return JSON.parse(customSectionsContent) as Record<string, CustomSections>;
};

const normalizeCustomSections = (
  customSections: Record<string, CustomSections>
): Map<string, CustomSections> => {
  const normalizedCustomSections = new Map<string, CustomSections>();
  for (const [id, sections] of Object.entries(customSections)) {
    normalizedCustomSections.set(normalizeId(id), sections);
  }
  return normalizedCustomSections;
};

const listToolkitFiles = async (toolkitsDir: string): Promise<string[]> => {
  const entries = await readdir(toolkitsDir);
  return entries.filter((f) => f.endsWith(".json") && f !== "index.json");
};

const hasMergeableSections = (sections: CustomSections): boolean => {
  const hasChunks =
    sections.documentationChunks && sections.documentationChunks.length > 0;
  const hasImports =
    sections.customImports && sections.customImports.length > 0;
  const hasSubPages = sections.subPages && sections.subPages.length > 0;
  return Boolean(hasChunks || hasImports || hasSubPages);
};

const applyMergeSections = (
  toolkit: MergedToolkit,
  sections: CustomSections
): void => {
  if (sections.documentationChunks && sections.documentationChunks.length > 0) {
    toolkit.documentationChunks = sections.documentationChunks;
  }
  if (sections.customImports && sections.customImports.length > 0) {
    toolkit.customImports = sections.customImports;
  }
  if (sections.subPages && sections.subPages.length > 0) {
    toolkit.subPages = sections.subPages;
  }
};

const logVerboseMerge = (
  toolkit: MergedToolkit,
  sections: CustomSections
): void => {
  const chunkCount = sections.documentationChunks?.length ?? 0;
  const subPageCount = sections.subPages?.length ?? 0;
  console.log(
    `  ✅ ${toolkit.id}: ${chunkCount} chunks, ${subPageCount} subpages`
  );
};

const mergeToolkitFile = async (
  fileName: string,
  toolkitsDir: string,
  normalizedCustomSections: Map<string, CustomSections>,
  verbose: boolean
): Promise<{ merged: boolean; skipped: boolean; error?: string }> => {
  const filePath = join(toolkitsDir, fileName);
  try {
    const content = await readFile(filePath, "utf-8");
    const toolkit: MergedToolkit = JSON.parse(content);
    const normalizedToolkitId = normalizeId(toolkit.id);
    const sections = normalizedCustomSections.get(normalizedToolkitId);

    if (!sections) {
      return { merged: false, skipped: true };
    }

    if (!hasMergeableSections(sections)) {
      return { merged: false, skipped: true };
    }

    applyMergeSections(toolkit, sections);

    await writeFile(
      filePath,
      `${JSON.stringify(toolkit, null, JSON_PRETTY_PRINT_INDENT)}\n`,
      "utf-8"
    );

    if (verbose) {
      logVerboseMerge(toolkit, sections);
    }

    return { merged: true, skipped: false };
  } catch (error) {
    return { merged: false, skipped: false, error: String(error) };
  }
};

const logSummary = (outcome: MergeOutcome): void => {
  const separator = "=".repeat(SUMMARY_SEPARATOR_LENGTH);
  console.log(`\n${separator}`);
  console.log("📊 Merge Summary");
  console.log(separator);
  console.log(`  Toolkits merged:  ${outcome.mergedCount}`);
  console.log(
    `  Toolkits skipped: ${outcome.skippedCount} (no custom sections)`
  );
  console.log(`  Errors:           ${outcome.errors.length}`);

  if (outcome.errors.length > 0) {
    console.log("\n⚠️  Errors:");
    for (const error of outcome.errors.slice(0, ERROR_PREVIEW_LIMIT)) {
      console.log(`  - ${error}`);
    }
    if (outcome.errors.length > ERROR_PREVIEW_LIMIT) {
      console.log(
        `  ... and ${outcome.errors.length - ERROR_PREVIEW_LIMIT} more`
      );
    }
  }

  console.log("\n✅ Done!\n");
};

async function main() {
  const args = process.argv.slice(2);
  const { customSectionsPath, toolkitsDir, verbose } = parseArgs(args);

  console.log("🔧 Custom Sections Merger\n");
  console.log(`📖 Loading custom sections: ${customSectionsPath}`);

  // Load custom sections
  const customSections = await loadCustomSections(customSectionsPath);
  const customSectionsCount = Object.keys(customSections).length;
  console.log(
    `   Found ${customSectionsCount} toolkit(s) with custom sections\n`
  );

  // Create normalized lookup
  const normalizedCustomSections = normalizeCustomSections(customSections);

  // List toolkit files
  console.log(`📂 Reading toolkits from: ${toolkitsDir}`);
  const jsonFiles = await listToolkitFiles(toolkitsDir);
  console.log(`   Found ${jsonFiles.length} toolkit file(s)\n`);

  // Merge
  let mergedCount = 0;
  let skippedCount = 0;
  const errors: string[] = [];

  console.log("🔄 Merging custom sections...\n");

  for (const fileName of jsonFiles) {
    const result = await mergeToolkitFile(
      fileName,
      toolkitsDir,
      normalizedCustomSections,
      verbose
    );
    if (result.error) {
      errors.push(`${fileName}: ${result.error}`);
      continue;
    }
    if (result.merged) {
      mergedCount++;
      continue;
    }
    if (result.skipped) {
      skippedCount++;
    }
  }

  logSummary({ mergedCount, skippedCount, errors });
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
