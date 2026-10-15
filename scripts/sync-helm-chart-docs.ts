#!/usr/bin/env npx tsx

/**
 * Sync the generated Helm values reference for a released chart version.
 *
 * Usage:
 *   pnpm exec tsx scripts/sync-helm-chart-docs.ts --chart-dir <dir> --version <x.y.z>
 *
 * <dir> is the unpacked chart (`helm pull ... --untar`). Writes the values
 * reference page and raw copies under app/en/operate/deploy/helm.
 */

import { parseArgs } from "node:util";
import { syncHelmChartDocs } from "./lib/helm-chart-docs";

const DOCS_DIR = "app/en/operate/deploy/helm";

const { values } = parseArgs({
  options: {
    "chart-dir": { type: "string" },
    version: { type: "string" },
  },
});

const chartDir = values["chart-dir"];
const version = values.version;
if (!(chartDir && version)) {
  console.error("::error::Usage: --chart-dir <dir> --version <x.y.z>");
  process.exit(1);
}

try {
  const { exampleCount } = syncHelmChartDocs({
    chartDir,
    docsDir: DOCS_DIR,
    version,
  });
  if (exampleCount === 0) {
    console.log(`::notice::Chart ${version} ships no examples/*.yaml`);
  }
  console.log(`Synced Helm chart ${version} (${exampleCount} examples)`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`::error::${message}`);
  process.exit(1);
}
