#!/usr/bin/env npx ts-node
/**
 * Script to merge custom sections into existing toolkit JSON files.
 *
 * Usage: npx ts-node scripts/merge-custom-sections.ts \
 *   --custom-sections ../data/custom_sections_for_merge.json \
 *   --toolkits-dir ../data/toolkits
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

async function main() {
  const args = process.argv.slice(2);

  let customSectionsPath = "../data/custom_sections_for_merge.json";
  let toolkitsDir = "../data/toolkits";
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

  console.log("🔧 Custom Sections Merger\n");
  console.log(`📖 Loading custom sections: ${customSectionsPath}`);

  // Load custom sections
  const customSectionsContent = await readFile(customSectionsPath, "utf-8");
  const customSections: Record<string, CustomSections> = JSON.parse(
    customSectionsContent
  );
  const customSectionsCount = Object.keys(customSections).length;
  console.log(
    `   Found ${customSectionsCount} toolkit(s) with custom sections\n`
  );

  // Create normalized lookup
  const normalizedCustomSections = new Map<string, CustomSections>();
  for (const [id, sections] of Object.entries(customSections)) {
    normalizedCustomSections.set(normalizeId(id), sections);
  }

  // List toolkit files
  console.log(`📂 Reading toolkits from: ${toolkitsDir}`);
  const entries = await readdir(toolkitsDir);
  const jsonFiles = entries.filter(
    (f) => f.endsWith(".json") && f !== "index.json"
  );
  console.log(`   Found ${jsonFiles.length} toolkit file(s)\n`);

  // Merge
  let mergedCount = 0;
  let skippedCount = 0;
  const errors: string[] = [];

  console.log("🔄 Merging custom sections...\n");

  for (const fileName of jsonFiles) {
    const filePath = join(toolkitsDir, fileName);

    try {
      const content = await readFile(filePath, "utf-8");
      const toolkit: MergedToolkit = JSON.parse(content);

      // Find matching custom sections
      const normalizedToolkitId = normalizeId(toolkit.id);
      const sections = normalizedCustomSections.get(normalizedToolkitId);

      if (!sections) {
        skippedCount++;
        continue;
      }

      // Check if there's anything to merge
      const hasChunks =
        sections.documentationChunks && sections.documentationChunks.length > 0;
      const hasImports =
        sections.customImports && sections.customImports.length > 0;
      const hasSubPages = sections.subPages && sections.subPages.length > 0;

      if (!(hasChunks || hasImports || hasSubPages)) {
        skippedCount++;
        continue;
      }

      // Merge
      if (
        sections.documentationChunks &&
        sections.documentationChunks.length > 0
      ) {
        toolkit.documentationChunks = sections.documentationChunks;
      }
      if (sections.customImports && sections.customImports.length > 0) {
        toolkit.customImports = sections.customImports;
      }
      if (sections.subPages && sections.subPages.length > 0) {
        toolkit.subPages = sections.subPages;
      }

      // Write back
      await writeFile(
        filePath,
        `${JSON.stringify(toolkit, null, JSON_PRETTY_PRINT_INDENT)}\n`,
        "utf-8"
      );

      mergedCount++;
      if (verbose) {
        const chunkCount = sections.documentationChunks?.length ?? 0;
        const subPageCount = sections.subPages?.length ?? 0;
        console.log(
          `  ✅ ${toolkit.id}: ${chunkCount} chunks, ${subPageCount} subpages`
        );
      }
    } catch (error) {
      errors.push(`${fileName}: ${error}`);
    }
  }

  // Summary
  const separator = "=".repeat(SUMMARY_SEPARATOR_LENGTH);
  console.log(`\n${separator}`);
  console.log("📊 Merge Summary");
  console.log(separator);
  console.log(`  Toolkits merged:  ${mergedCount}`);
  console.log(`  Toolkits skipped: ${skippedCount} (no custom sections)`);
  console.log(`  Errors:           ${errors.length}`);

  if (errors.length > 0) {
    console.log("\n⚠️  Errors:");
    for (const error of errors.slice(0, ERROR_PREVIEW_LIMIT)) {
      console.log(`  - ${error}`);
    }
    if (errors.length > ERROR_PREVIEW_LIMIT) {
      console.log(`  ... and ${errors.length - ERROR_PREVIEW_LIMIT} more`);
    }
  }

  console.log("\n✅ Done!\n");
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
