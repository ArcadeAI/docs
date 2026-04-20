#!/usr/bin/env tsx

/**
 * Check stale summaries
 *
 * Scans toolkit-docs-generator/data/toolkits/*.json and reports any toolkit
 * whose summary was carried forward from a previous run (summaryStale: true)
 * because regeneration was skipped or failed. Exits 1 if any are found so
 * the script can gate CI or a local sanity check.
 *
 * Usage:
 *   pnpm dlx tsx toolkit-docs-generator/scripts/check-stale-summaries.ts
 */

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const TOOLKITS_DIR = join(here, "..", "data", "toolkits");

type ToolkitShape = {
  id?: unknown;
  summary?: unknown;
  summaryStale?: unknown;
  summaryStaleReason?: unknown;
};

const listToolkitFiles = (): string[] => {
  try {
    return readdirSync(TOOLKITS_DIR).filter(
      (name) => name.endsWith(".json") && name !== "index.json"
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(
      `✗ Cannot read toolkit directory ${TOOLKITS_DIR}: ${message}`
    );
    process.exit(1);
  }
};

const main = (): number => {
  const stale: Array<{ file: string; id: string; reason: string }> = [];
  for (const file of listToolkitFiles()) {
    let toolkit: ToolkitShape;
    try {
      const raw = readFileSync(join(TOOLKITS_DIR, file), "utf8");
      toolkit = JSON.parse(raw) as ToolkitShape;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`✗ Cannot parse ${file}: ${message}`);
      return 1;
    }
    if (toolkit.summaryStale === true) {
      stale.push({
        file,
        id: typeof toolkit.id === "string" ? toolkit.id : file,
        reason:
          typeof toolkit.summaryStaleReason === "string"
            ? toolkit.summaryStaleReason
            : "unknown",
      });
    }
  }

  if (stale.length === 0) {
    console.log(`✓ No stale summaries in ${TOOLKITS_DIR}`);
    return 0;
  }

  console.error(`✗ ${stale.length} toolkit(s) have a stale summary:\n`);
  for (const finding of stale) {
    console.error(`  - ${finding.id} (${finding.file}): ${finding.reason}`);
  }
  console.error(
    "\nRe-run the generator with a working LLM, or refresh the summary by hand and clear the `summaryStale` / `summaryStaleReason` fields."
  );
  return 1;
};

process.exit(main());
