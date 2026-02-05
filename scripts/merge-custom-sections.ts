#!/usr/bin/env tsx

/**
 * Merge Custom Sections into Toolkit JSON Files
 *
 * This script:
 * 1. Creates a backup of data/toolkits to data/toolkits.backup
 * 2. Reads custom sections from extract-custom-sections/custom_sections.json
 * 3. Merges custom sections into the corresponding toolkit JSON files
 * 4. Writes updated JSON files back to data/toolkits
 *
 * Usage:
 *   npm run merge-custom-sections
 *   # or
 *   tsx scripts/merge-custom-sections.ts
 *
 * Options:
 *   --dry-run    Show what would be merged without writing files
 *   --restore    Restore from backup (data/toolkits.backup -> data/toolkits)
 */

import {
  cpSync,
  existsSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// =============================================================================
// Types
// =============================================================================

type DocumentationChunk = {
  type: string;
  location: string;
  position: string;
  content: string;
  header?: string;
};

type SubPage = {
  type: string;
  content: string;
  relativePath: string;
};

type CustomSection = {
  toolkitId: string;
  category: string;
  customImports: string[];
  documentationChunks: DocumentationChunk[];
  subPages: SubPage[];
};

type CustomSectionsData = {
  toolkits: Record<string, CustomSection>;
};

type ToolkitJson = {
  id: string;
  label: string;
  version: string;
  description?: string;
  summary?: string;
  metadata: Record<string, unknown>;
  auth?: Record<string, unknown>;
  tools: Array<Record<string, unknown>>;
  documentationChunks?: DocumentationChunk[];
  customImports?: string[];
  subPages?: SubPage[];
  [key: string]: unknown;
};

// =============================================================================
// Configuration
// =============================================================================

const WORKSPACE_ROOT = join(__dirname, "..");
const DATA_DIR = join(WORKSPACE_ROOT, "data", "toolkits");
const BACKUP_DIR = join(WORKSPACE_ROOT, "data", "toolkits.backup");
const CUSTOM_SECTIONS_FILE = join(
  WORKSPACE_ROOT,
  "extract-custom-sections",
  "custom_sections.json"
);

// =============================================================================
// Utilities
// =============================================================================

function normalizeToolkitName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\(.*?\)/g, "") // Remove parentheses content
    .replace(/[^a-z0-9]/g, "");
}

function findToolkitJsonFile(
  toolkitLabel: string,
  toolkitId: string
): string | null {
  const files = readdirSync(DATA_DIR).filter(
    (f) => f.endsWith(".json") && f !== "index.json"
  );

  // Try exact match with toolkitId first
  const normalizedId = normalizeToolkitName(toolkitId);
  const exactMatch = files.find(
    (f) => normalizeToolkitName(f.replace(".json", "")) === normalizedId
  );
  if (exactMatch) {
    return exactMatch;
  }

  // Try matching with label
  const normalizedLabel = normalizeToolkitName(toolkitLabel);
  const labelMatch = files.find(
    (f) => normalizeToolkitName(f.replace(".json", "")) === normalizedLabel
  );
  if (labelMatch) {
    return labelMatch;
  }

  // Try reading each file and checking the id or label
  for (const file of files) {
    try {
      const content = readFileSync(join(DATA_DIR, file), "utf-8");
      const json = JSON.parse(content) as ToolkitJson;
      if (
        normalizeToolkitName(json.id) === normalizedId ||
        normalizeToolkitName(json.id) === normalizedLabel ||
        (json.label && normalizeToolkitName(json.label) === normalizedLabel)
      ) {
        return file;
      }
    } catch (error) {}
  }

  return null;
}

function createBackup(dryRun: boolean): void {
  if (dryRun) {
    console.log(`[DRY RUN] Would create backup: ${BACKUP_DIR}`);
    return;
  }

  if (existsSync(BACKUP_DIR)) {
    console.log(`⚠️  Backup already exists at: ${BACKUP_DIR}`);
    console.log("   Removing old backup...");
    rmSync(BACKUP_DIR, { recursive: true, force: true });
  }

  console.log(`📦 Creating backup: ${BACKUP_DIR}`);
  cpSync(DATA_DIR, BACKUP_DIR, { recursive: true });
  console.log("✅ Backup created successfully\n");
}

function restoreFromBackup(): void {
  if (!existsSync(BACKUP_DIR)) {
    console.error("❌ No backup found at:", BACKUP_DIR);
    process.exit(1);
  }

  console.log(`♻️  Restoring from backup: ${BACKUP_DIR}`);

  // Remove current data dir
  if (existsSync(DATA_DIR)) {
    rmSync(DATA_DIR, { recursive: true, force: true });
  }

  // Copy backup to data dir
  cpSync(BACKUP_DIR, DATA_DIR, { recursive: true });
  console.log("✅ Restored successfully from backup\n");
}

function mergeCustomSections(
  toolkit: ToolkitJson,
  customSection: CustomSection
): ToolkitJson {
  const merged = { ...toolkit };

  // Merge documentationChunks
  if (
    customSection.documentationChunks &&
    customSection.documentationChunks.length > 0
  ) {
    merged.documentationChunks = [
      ...(merged.documentationChunks || []),
      ...customSection.documentationChunks,
    ];
  }

  // Merge customImports
  if (customSection.customImports && customSection.customImports.length > 0) {
    merged.customImports = [
      ...(merged.customImports || []),
      ...customSection.customImports,
    ];
  }

  // Merge subPages
  if (customSection.subPages && customSection.subPages.length > 0) {
    merged.subPages = [...(merged.subPages || []), ...customSection.subPages];
  }

  return merged;
}

function formatJson(data: unknown): string {
  return JSON.stringify(data, null, 2) + "\n";
}

// =============================================================================
// Main
// =============================================================================

function main(): void {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const restore = args.includes("--restore");

  console.log("🔧 Merge Custom Sections Script\n");
  console.log(`Working directory: ${WORKSPACE_ROOT}`);
  console.log(`Data directory: ${DATA_DIR}`);
  console.log(`Backup directory: ${BACKUP_DIR}`);
  console.log(`Custom sections: ${CUSTOM_SECTIONS_FILE}\n`);

  // Handle restore mode
  if (restore) {
    restoreFromBackup();
    return;
  }

  // Verify directories exist
  if (!existsSync(DATA_DIR)) {
    console.error("❌ Data directory not found:", DATA_DIR);
    process.exit(1);
  }

  if (!existsSync(CUSTOM_SECTIONS_FILE)) {
    console.error("❌ Custom sections file not found:", CUSTOM_SECTIONS_FILE);
    process.exit(1);
  }

  // Create backup
  createBackup(dryRun);

  // Read custom sections
  console.log("📖 Reading custom sections...");
  const customSectionsContent = readFileSync(CUSTOM_SECTIONS_FILE, "utf-8");
  const customSectionsData = JSON.parse(
    customSectionsContent
  ) as CustomSectionsData;
  const toolkitCount = Object.keys(customSectionsData.toolkits).length;
  console.log(`   Found ${toolkitCount} toolkits with custom sections\n`);

  // Process each toolkit
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const [toolkitLabel, customSection] of Object.entries(
    customSectionsData.toolkits
  )) {
    console.log(
      `\n📝 Processing: ${toolkitLabel} (ID: ${customSection.toolkitId})`
    );

    // Find the corresponding JSON file
    const jsonFile = findToolkitJsonFile(toolkitLabel, customSection.toolkitId);
    if (!jsonFile) {
      console.log("   ⚠️  No matching JSON file found - SKIPPED");
      skippedCount++;
      continue;
    }

    console.log(`   Found file: ${jsonFile}`);

    try {
      // Read the toolkit JSON
      const toolkitPath = join(DATA_DIR, jsonFile);
      const toolkitContent = readFileSync(toolkitPath, "utf-8");
      const toolkitJson = JSON.parse(toolkitContent) as ToolkitJson;

      // Check if there's anything to merge
      const hasDocChunks = customSection.documentationChunks?.length > 0;
      const hasImports = customSection.customImports?.length > 0;
      const hasSubPages = customSection.subPages?.length > 0;

      if (!(hasDocChunks || hasImports || hasSubPages)) {
        console.log("   ℹ️  No custom sections to merge - SKIPPED");
        skippedCount++;
        continue;
      }

      console.log("   Merging:");
      if (hasDocChunks) {
        console.log(
          `      - ${customSection.documentationChunks.length} documentation chunks`
        );
      }
      if (hasImports) {
        console.log(
          `      - ${customSection.customImports.length} custom imports`
        );
      }
      if (hasSubPages) {
        console.log(`      - ${customSection.subPages.length} sub-pages`);
      }

      // Merge the custom sections
      const mergedToolkit = mergeCustomSections(toolkitJson, customSection);

      // Write the merged JSON
      if (dryRun) {
        console.log("   [DRY RUN] Would write merged JSON");
      } else {
        writeFileSync(toolkitPath, formatJson(mergedToolkit));
        console.log("   ✅ Merged successfully");
      }

      processedCount++;
    } catch (error) {
      console.error("   ❌ Error processing toolkit:", error);
      errorCount++;
    }
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 Summary");
  console.log("=".repeat(60));
  console.log(`Total toolkits in custom_sections.json: ${toolkitCount}`);
  console.log(`✅ Successfully processed: ${processedCount}`);
  console.log(`⚠️  Skipped (no match or no content): ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log("=".repeat(60));

  if (dryRun) {
    console.log("\n⚠️  DRY RUN MODE - No files were modified");
    console.log("   Run without --dry-run to apply changes");
  } else {
    console.log("\n✅ Custom sections merged successfully!");
    console.log(`   Backup available at: ${BACKUP_DIR}`);
    console.log(
      "   To restore backup: npm run merge-custom-sections -- --restore"
    );
  }
}

// Run the script
main();
