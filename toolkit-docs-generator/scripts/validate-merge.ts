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
import { dirname, join } from "node:path";
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

function main(): void {
  console.log("🔍 Validating Merged Custom Sections\n");

  if (!existsSync(DATA_DIR)) {
    console.error("❌ Data directory not found:", DATA_DIR);
    process.exit(1);
  }

  const files = readdirSync(DATA_DIR).filter(
    (f) => f.endsWith(".json") && f !== "index.json"
  );

  let totalToolkits = 0;
  let withDocChunks = 0;
  let withCustomImports = 0;
  let withSubPages = 0;
  const detailedResults: Array<{
    file: string;
    label: string;
    hasDocChunks: boolean;
    hasImports: boolean;
    hasSubPages: boolean;
    docChunksCount: number;
    importsCount: number;
    subPagesCount: number;
  }> = [];

  for (const file of files) {
    try {
      const content = readFileSync(join(DATA_DIR, file), "utf-8");
      const json = JSON.parse(content) as ToolkitJson;
      totalToolkits++;

      const hasDocChunks = (json.documentationChunks?.length ?? 0) > 0;
      const hasImports = (json.customImports?.length ?? 0) > 0;
      const hasSubPages = (json.subPages?.length ?? 0) > 0;

      if (hasDocChunks) withDocChunks++;
      if (hasImports) withCustomImports++;
      if (hasSubPages) withSubPages++;

      if (hasDocChunks || hasImports || hasSubPages) {
        detailedResults.push({
          file,
          label: json.label || json.id,
          hasDocChunks,
          hasImports,
          hasSubPages,
          docChunksCount: json.documentationChunks?.length ?? 0,
          importsCount: json.customImports?.length ?? 0,
          subPagesCount: json.subPages?.length ?? 0,
        });
      }
    } catch (error) {
      console.error(`⚠️  Error reading ${file}:`, error);
    }
  }

  // Summary
  console.log("=".repeat(60));
  console.log("📊 Summary");
  console.log("=".repeat(60));
  console.log(`Total toolkit JSON files: ${totalToolkits}`);
  console.log(`With documentation chunks: ${withDocChunks}`);
  console.log(`With custom imports: ${withCustomImports}`);
  console.log(`With sub-pages: ${withSubPages}`);
  console.log(`Total with custom sections: ${detailedResults.length}`);
  console.log("=".repeat(60));

  if (detailedResults.length > 0) {
    console.log("\n📝 Toolkits with Custom Sections:\n");

    for (const result of detailedResults.sort((a, b) =>
      a.label.localeCompare(b.label)
    )) {
      const badges: string[] = [];
      if (result.hasDocChunks)
        badges.push(`📄 ${result.docChunksCount} doc chunks`);
      if (result.hasImports) badges.push(`📦 ${result.importsCount} imports`);
      if (result.hasSubPages)
        badges.push(`📑 ${result.subPagesCount} sub-pages`);

      console.log(`   ${result.label}`);
      console.log(`      ${badges.join(" | ")}`);
    }
  } else {
    console.log("\n⚠️  No toolkits found with custom sections.");
    console.log("   Did you run the merge script? Run:");
    console.log("   npm run merge-custom-sections");
  }

  console.log("\n✅ Validation complete!");
}

main();
