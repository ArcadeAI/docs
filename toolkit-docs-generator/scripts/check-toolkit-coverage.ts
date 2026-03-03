#!/usr/bin/env node
/**
 * Toolkit coverage check
 *
 * Warns when toolkits in the Arcade Engine API are missing from:
 *   1. data/toolkits/<id>.json
 *   2. app/en/resources/integrations/<category>/_meta.tsx sidebar entries
 *
 * Also warns about JSON files that have no matching API toolkit (orphaned files).
 *
 * Never exits non-zero. Use for CI awareness, not CI gating.
 *
 * Usage:
 *   ENGINE_API_URL=https://api.arcade.dev ENGINE_API_KEY=arc_... \
 *     npx tsx toolkit-docs-generator/scripts/check-toolkit-coverage.ts
 *
 *   # Local only (skip API call):
 *   npx tsx toolkit-docs-generator/scripts/check-toolkit-coverage.ts --skip-api
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "..", "..");

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ToolkitSummaryEntry {
  name: string;
  version: string;
  toolCount: number;
}

export interface CoverageReport {
  /** API toolkits with no matching JSON data file */
  missingJson: ToolkitSummaryEntry[];
  /** JSON data files with no matching API toolkit (orphaned) */
  missingFromApi: string[];
  /** API toolkits present in JSON but absent from any sidebar _meta.tsx */
  missingFromSidebar: ToolkitSummaryEntry[];
  /**
   * index.json entries whose individual JSON file does not exist.
   * Indicates index.json was not updated after a file was deleted.
   */
  indexOrphans: string[];
  /**
   * Individual JSON files with no entry in index.json.
   * Indicates index.json was not updated after a file was generated.
   */
  missingFromIndex: string[];
}

// ── Name normalisation ────────────────────────────────────────────────────────

/**
 * Convert any toolkit identifier to a canonical lowercase slug for comparison.
 *
 * Handles the three naming conventions seen across the codebase:
 *   - API names:    "GoogleCalendar"  → "googlecalendar"
 *   - File stems:   "googlecalendar"  → "googlecalendar"
 *   - Sidebar keys: "google-calendar" → "googlecalendar"
 */
export function normalizeId(id: string): string {
  return id.toLowerCase().replace(/-/g, "");
}

// ── Core logic (pure, testable) ───────────────────────────────────────────────

/**
 * Cross-reference all four data sources and return a coverage report.
 *
 * Matching uses {@link normalizeId} so "GoogleCalendar", "googlecalendar",
 * and "google-calendar" all resolve to the same canonical key.
 *
 * @param apiToolkits    Toolkit list from the API summary endpoint
 * @param jsonFileStems  Basenames (without .json) of files in data/toolkits/
 * @param sidebarEntries All sidebar keys collected from every _meta.tsx file
 * @param indexIds       Toolkit IDs listed in index.json
 */
export function checkCoverage(
  apiToolkits: ToolkitSummaryEntry[],
  jsonFileStems: string[],
  sidebarEntries: Set<string>,
  indexIds: string[] = []
): CoverageReport {
  const jsonSet = new Set(jsonFileStems.map(normalizeId));
  const sidebarSet = new Set([...sidebarEntries].map(normalizeId));
  const indexSet = new Set(indexIds.map(normalizeId));

  const missingJson: ToolkitSummaryEntry[] = [];
  const missingFromSidebar: ToolkitSummaryEntry[] = [];

  for (const toolkit of apiToolkits) {
    const key = normalizeId(toolkit.name);
    if (!jsonSet.has(key)) {
      missingJson.push(toolkit);
    } else if (!sidebarSet.has(key)) {
      // Only flag sidebar-missing for toolkits that DO have a JSON file.
      // Toolkits already in missingJson are not double-counted here.
      missingFromSidebar.push(toolkit);
    }
  }

  const apiKeys = new Set(apiToolkits.map((t) => normalizeId(t.name)));
  const missingFromApi = jsonFileStems.filter(
    (stem) => !apiKeys.has(normalizeId(stem))
  );

  // index.json drift: entries in index with no individual file
  const indexOrphans = indexIds.filter((id) => !jsonSet.has(normalizeId(id)));

  // index.json drift: individual files with no index entry
  const missingFromIndex = jsonFileStems.filter(
    (stem) => !indexSet.has(normalizeId(stem))
  );

  return {
    missingJson,
    missingFromApi,
    missingFromSidebar,
    indexOrphans,
    missingFromIndex,
  };
}

// ── Sidebar parser ────────────────────────────────────────────────────────────

/**
 * Parse sidebar entry keys from a _meta.tsx file's raw text content.
 *
 * Supports two formats:
 *
 * Old (static object literal):
 *   github: { ...
 *   "google-calendar": { ...
 *
 * New (createCategoryMeta helper):
 *   createCategoryMeta([{ slug: "github", ... }])
 *
 * Skips separator entries whose keys start with "--".
 */
export function parseSidebarEntries(content: string): string[] {
  const entries: string[] = [];

  // Old format: direct object-literal keys
  const keyPattern = /^\s+(?:"([^"]+)"|([A-Za-z_$][A-Za-z0-9_$-]*))\s*:/gm;
  for (const match of content.matchAll(keyPattern)) {
    const key = match[1] ?? match[2] ?? "";
    if (key && !key.startsWith("--")) {
      entries.push(key);
    }
  }

  // New format: createCategoryMeta([{ slug: "toolkit-id", ... }])
  const slugPattern = /^\s+slug:\s+"([^"]+)"/gm;
  for (const match of content.matchAll(slugPattern)) {
    const slug = match[1];
    if (slug) entries.push(slug);
  }

  return entries;
}

// ── File readers ──────────────────────────────────────────────────────────────

/**
 * Return the basenames (without .json) of every toolkit data file,
 * excluding the aggregate index.json.
 */
export function readJsonFileStems(dataDir: string): string[] {
  if (!existsSync(dataDir)) return [];
  return readdirSync(dataDir)
    .filter((f) => f.endsWith(".json") && f !== "index.json")
    .map((f) => f.slice(0, -5));
}

/**
 * Walk every category directory under integrationsDir and collect all
 * sidebar entry keys found in _meta.tsx files.
 */
export function readSidebarEntries(integrationsDir: string): Set<string> {
  const all = new Set<string>();
  if (!existsSync(integrationsDir)) return all;

  for (const category of readdirSync(integrationsDir)) {
    const metaPath = join(integrationsDir, category, "_meta.tsx");
    if (!existsSync(metaPath)) continue;
    const content = readFileSync(metaPath, "utf-8");
    for (const key of parseSidebarEntries(content)) {
      all.add(key);
    }
  }
  return all;
}

/**
 * Read toolkit IDs from index.json.
 * Returns an empty array if the file is absent or malformed.
 */
export function readIndexIds(dataDir: string): string[] {
  const indexPath = join(dataDir, "index.json");
  if (!existsSync(indexPath)) return [];
  try {
    const raw = JSON.parse(readFileSync(indexPath, "utf-8")) as unknown;
    // Supports both a bare array and the { toolkits: [...] } wrapper format
    const items: unknown[] = Array.isArray(raw)
      ? raw
      : Array.isArray((raw as Record<string, unknown>)?.toolkits)
        ? ((raw as Record<string, unknown>).toolkits as unknown[])
        : [];
    return items
      .filter(
        (item): item is { id: string } =>
          typeof item === "object" &&
          item !== null &&
          typeof (item as Record<string, unknown>).id === "string"
      )
      .map((item) => item.id);
  } catch {
    return [];
  }
}

// ── API fetch ─────────────────────────────────────────────────────────────────

type ApiSummaryResponse = {
  toolkits?: Array<{ name: string; version: string; tool_count: number }>;
};

async function fetchApiToolkits(
  baseUrl: string,
  apiKey: string
): Promise<ToolkitSummaryEntry[]> {
  const url = `${baseUrl.replace(/\/+$/, "")}/v1/tool_metadata_summary`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!res.ok) {
    throw new Error(`API returned ${res.status} for ${url}`);
  }
  const data = (await res.json()) as ApiSummaryResponse;
  return (data.toolkits ?? []).map((t) => ({
    name: t.name,
    version: t.version,
    toolCount: t.tool_count,
  }));
}

// ── Report printer ────────────────────────────────────────────────────────────

function printSection(
  items: readonly string[],
  header: string,
  footer: string
): void {
  if (items.length === 0) return;
  console.warn(header);
  for (const item of items) {
    console.warn(`    ${item}`);
  }
  console.warn(footer);
}

export function printReport(report: CoverageReport): void {
  const hasIssues =
    report.missingJson.length > 0 ||
    report.missingFromApi.length > 0 ||
    report.missingFromSidebar.length > 0 ||
    report.indexOrphans.length > 0 ||
    report.missingFromIndex.length > 0;

  if (!hasIssues) {
    console.log(
      "✅  Toolkit coverage OK — all API toolkits have JSON + sidebar entries."
    );
    return;
  }

  console.warn(`\n⚠️  Toolkit coverage warnings\n${"─".repeat(50)}`);

  printSection(
    report.missingJson.map(
      (t) => `${t.name}@${t.version}  (${t.toolCount} tools)`
    ),
    `\n📁  In API but missing JSON data file (${report.missingJson.length}):`,
    "    → Run the toolkit docs generator to create these files."
  );

  printSection(
    report.missingFromApi.map((stem) => `${stem}.json`),
    `\n🗑️   JSON files with no matching API toolkit — possibly stale (${report.missingFromApi.length}):`,
    "    → Delete these files or verify the toolkit is still published."
  );

  printSection(
    report.missingFromSidebar.map((t) => `${t.name}@${t.version}`),
    `\n🗂️   In API + JSON but missing from sidebar (${report.missingFromSidebar.length}):`,
    "    → Run: npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts"
  );

  printSection(
    report.indexOrphans,
    `\n📋  index.json entries with no matching JSON file — index is stale (${report.indexOrphans.length}):`,
    "    → Remove these entries from index.json or restore their data files."
  );

  printSection(
    report.missingFromIndex.map((stem) => `${stem}.json`),
    `\n📋  JSON files not listed in index.json — index is incomplete (${report.missingFromIndex.length}):`,
    "    → Add these toolkits to index.json or regenerate it with the toolkit docs generator."
  );

  console.warn(`\n${"─".repeat(50)}`);
  console.warn(
    "ℹ️  These are warnings only — build is not blocked by coverage gaps."
  );
}

// ── Entry point ───────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const skipApi = process.argv.includes("--skip-api");
  const dataDir = join(PROJECT_ROOT, "toolkit-docs-generator/data/toolkits");
  const integrationsDir = join(PROJECT_ROOT, "app/en/resources/integrations");

  const jsonStems = readJsonFileStems(dataDir);
  const sidebarEntries = readSidebarEntries(integrationsDir);
  const indexIds = readIndexIds(dataDir);

  let apiToolkits: ToolkitSummaryEntry[] = [];

  if (skipApi) {
    console.log("ℹ️  --skip-api: checking local files only.");
  } else {
    const engineUrl = process.env.ENGINE_API_URL;
    const engineKey = process.env.ENGINE_API_KEY;

    if (engineUrl && engineKey) {
      try {
        apiToolkits = await fetchApiToolkits(engineUrl, engineKey);
        console.log(`ℹ️  Fetched ${apiToolkits.length} toolkits from API.`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.warn(`⚠️  Could not fetch API toolkits: ${msg}`);
        console.warn("   Continuing with local file checks only.");
      }
    } else {
      console.warn(
        "⚠️  ENGINE_API_URL or ENGINE_API_KEY not set — skipping API check.\n" +
          "   Set both env vars to enable full toolkit coverage checking."
      );
    }
  }

  const report = checkCoverage(
    apiToolkits,
    jsonStems,
    sidebarEntries,
    indexIds
  );
  printReport(report);
}

main().catch((err) => {
  // Always exit 0 — this is a warning tool, never a CI blocker
  console.error("Unexpected error in coverage check:", err);
  process.exit(0);
});
