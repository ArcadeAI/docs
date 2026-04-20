#!/usr/bin/env node
/**
 * CLI script to report tool metadata coverage and distinct enum values.
 * Resolves data directory relative to this script, so it works regardless of cwd.
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { collectToolMetadataStats } from "../src/utils/tool-metadata-audit.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data", "toolkits");

async function main(): Promise<void> {
  const stats = await collectToolMetadataStats({ dataDir: DATA_DIR });

  console.log("Tool metadata report");
  console.log("===================");
  console.log(`Total tools: ${stats.coverage.totalTools}`);
  console.log(`With metadata: ${stats.coverage.withMetadata}`);
  console.log(
    `Distinct operations: ${stats.distinct.operations.join(", ") || "none"}`
  );
  console.log(
    `Distinct service domains: ${stats.distinct.serviceDomains.join(", ") || "none"}`
  );
  console.log(`Tools with extras: ${stats.extras.toolsWithExtras}`);
  if (stats.extras.distinctKeys.length > 0) {
    console.log(`Extras keys: ${stats.extras.distinctKeys.join(", ")}`);
  }
}

main().catch((err) => {
  console.error("metadata-report failed:", err);
  process.exit(1);
});
