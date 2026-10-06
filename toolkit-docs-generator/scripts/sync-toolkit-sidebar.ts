#!/usr/bin/env bun
/**
 * Script to synchronize toolkit sidebar navigation with available JSON data files.
 *
 * This script:
 * 1. Reads all toolkit JSON files from data/toolkits/
 * 2. Maps each toolkit to its category from the design system
 * 3. Adds the partner integrations from data/partner-toolkits.ts, which
 *    have hand-authored pages and no JSON file of their own
 * 4. Creates/updates the Fumadocs `meta.json` file for each category under
 *    content/docs/resources/integrations/<category>/
 * 5. Skips toolkits without a recognized category
 * 6. Checks that the main integrations `meta.json` (owned by the content
 *    authors, never rewritten here) lists every active category
 *
 * Usage:
 *   bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts
 *   bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run
 *   bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --verbose
 *   bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --remove-empty-sections
 *   bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --remove-empty-sections=false
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import {
  PARTNER_TOOLKITS,
  type PartnerToolkit,
} from "../../data/partner-toolkits";
import { resolveToolkitDataDir } from "../src/shared/toolkit-data-dir";
import {
  getToolkitSlug,
  INTEGRATION_CATEGORIES,
  isApiSuffixedToolkitId,
} from "../src/shared/toolkit-primitives";
import type {
  MergedToolkit,
  MergedToolkitMetadata,
} from "../src/shared/toolkit-schemas";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import design system toolkits
type DesignSystemToolkit = {
  id: string;
  label: string;
  category?: string;
  isHidden?: boolean;
};
let TOOLKITS: DesignSystemToolkit[] =
  DESIGN_SYSTEM_TOOLKITS as DesignSystemToolkit[];

export function setToolkitsForTesting(toolkits: DesignSystemToolkit[]): void {
  TOOLKITS = toolkits;
}

// Get project root (two levels up from toolkit-docs-generator/scripts)
const PROJECT_ROOT = resolve(__dirname, "..", "..");

// Configuration
const CONFIG = {
  dataDir: resolveToolkitDataDir(),
  integrationsBasePath: "/en/resources/integrations",
  integrationsDir: join(PROJECT_ROOT, "content/docs/resources/integrations"),
};

/** File name Fumadocs reads folder navigation from. */
export const META_FILE_NAME = "meta.json";

// Known categories with display names
export const CATEGORY_NAMES: Record<string, string> = {
  "customer-support": "Customer Support",
  databases: "Databases",
  development: "Developer Tools",
  entertainment: "Entertainment",
  payments: "Payments & Finance",
  productivity: "Productivity & Docs",
  sales: "Sales",
  search: "Search Tools",
  social: "Social & Communication",
};

const CAPITAL_LETTER_REGEX = /([A-Z])/g;
const FIRST_CHARACTER_REGEX = /^./;
const JSON_INDENT = 2;
const EXTRACT_PREFIX_REGEX = /^\.\.\./;
const EXCLUDE_PREFIX_REGEX = /^!/;

/**
 * This script only reads a handful of fields off each toolkit JSON file (it
 * doesn't validate the whole document), so it declares the subset it needs
 * as a `Pick` off the real generator schema types rather than re-describing
 * the shape by hand.
 */
type ToolkitJson = Partial<Pick<MergedToolkit, "id" | "label">> & {
  name?: string;
  metadata?: Partial<
    Pick<MergedToolkitMetadata, "category" | "docsLink" | "isHidden" | "type">
  >;
};

export type ToolkitInfo = {
  id: string;
  slug: string;
  label: string;
  category: string;
  navGroup: "optimized" | "starter" | "partner";
};

export type CategoryData = {
  category: string;
  displayName: string;
  toolkits: ToolkitInfo[];
};

/**
 * The shape of a Fumadocs `meta.json` this script writes. `pages` holds, in
 * order: `---Title---` separators, `[Label](href)` link entries for generated
 * toolkit pages, and bare slugs for authored MDX pages (partners) that live in
 * the same folder.
 */
export type CategoryMeta = {
  title: string;
  pages: string[];
};

export type SyncResult = {
  categoriesUpdated: string[];
  categoriesCreated: string[];
  categoriesRemoved: string[];
  toolkitCount: number;
  partnerCount: number;
  errors: string[];
};

type SyncOptions = {
  dryRun?: boolean;
  verbose?: boolean;
  /** Preferred flag name (default: false) */
  removeEmptySections?: boolean;
  /** Backward-compatible alias for removeEmptySections */
  prune?: boolean;
};

export const resolveRemoveEmptySections = (options: SyncOptions): boolean =>
  options.removeEmptySections ?? options.prune ?? false;

export const parseBooleanCliFlag = (
  args: readonly string[],
  flagName: string
): boolean | undefined => {
  const valueArg = args.find((arg) => arg.startsWith(`${flagName}=`));
  if (valueArg) {
    const rawValue = valueArg.slice(flagName.length + 1).toLowerCase();
    if (rawValue === "true") {
      return true;
    }
    if (rawValue === "false") {
      return false;
    }
  }

  return args.includes(flagName) ? true : undefined;
};

/**
 * Get list of toolkit JSON files (excluding index.json)
 */
export function getToolkitFiles(dataDir: string): string[] {
  if (!existsSync(dataDir)) {
    return [];
  }

  return readdirSync(dataDir)
    .filter((f) => f.endsWith(".json") && f !== "index.json")
    .map((f) => f.replace(".json", "").toLowerCase());
}

/**
 * Get category for a toolkit ID from design system
 */
export function getToolkitCategory(toolkitId: string): string | null {
  const toolkit = TOOLKITS.find(
    (t) => t.id.toLowerCase() === toolkitId.toLowerCase()
  );

  if (toolkit && !toolkit.isHidden) {
    return toolkit.category || null;
  }

  return null;
}

/**
 * Get label for a toolkit ID from design system
 */
export function getToolkitLabel(toolkitId: string): string {
  const toolkit = TOOLKITS.find(
    (t) => t.id.toLowerCase() === toolkitId.toLowerCase()
  );

  if (toolkit) {
    return toolkit.label;
  }

  // Fallback: Convert ID to readable label
  return toolkitId
    .replace(CAPITAL_LETTER_REGEX, " $1")
    .replace(FIRST_CHARACTER_REGEX, (str) => str.toUpperCase())
    .trim();
}

function readToolkitJson(dataDir: string, slug: string): ToolkitJson | null {
  const filePath = join(dataDir, `${slug}.json`);

  try {
    if (existsSync(filePath)) {
      return JSON.parse(readFileSync(filePath, "utf-8")) as ToolkitJson;
    }
  } catch {
    // Ignore parse errors.
  }

  return null;
}

/**
 * Read toolkit JSON and extract label if available
 */
export function getToolkitLabelFromJson(
  dataDir: string,
  slug: string
): string | null {
  const data = readToolkitJson(dataDir, slug);
  return data?.label ?? data?.name ?? null;
}

export function getToolkitTypeFromJson(
  dataDir: string,
  slug: string
): string | null {
  const data = readToolkitJson(dataDir, slug);
  return data?.metadata?.type ?? null;
}

export function inferNavGroup(
  toolkitIdOrSlug: string,
  typeFromJson?: string | null
) {
  // Prefer explicit type when available.
  if (typeFromJson === "arcade_starter") {
    return "starter" as const;
  }

  // Heuristic fallback: "*Api" toolkits are starter.
  return isApiSuffixedToolkitId(toolkitIdOrSlug)
    ? ("starter" as const)
    : ("optimized" as const);
}

/**
 * Build toolkit info from available JSON files
 */
type ToolkitInfoEntry = {
  info: ToolkitInfo;
  priority: number;
};

function resolveToolkitInfo(
  dataDir: string,
  slug: string
): ToolkitInfoEntry | null {
  const jsonData = readToolkitJson(dataDir, slug);
  const toolkitId = jsonData?.id ?? slug;
  const docsSlug = getToolkitSlug({
    docsLink: jsonData?.metadata?.docsLink ?? null,
    id: toolkitId,
  });
  const designSystemToolkit = TOOLKITS.find(
    (t) => t.id.toLowerCase() === toolkitId.toLowerCase()
  );
  const isHidden = jsonData?.metadata?.isHidden ?? false;
  if (designSystemToolkit?.isHidden || isHidden) {
    return null;
  }

  // Keep sidebar routes aligned with static params: toolkit JSON is source of
  // truth for category, with design system as fallback when JSON is missing.
  const category =
    jsonData?.metadata?.category ?? designSystemToolkit?.category;
  if (!category) {
    return null;
  }
  if (!(INTEGRATION_CATEGORIES as readonly string[]).includes(category)) {
    throw new Error(
      `Unrecognized integration category "${category}" for toolkit "${toolkitId}".`
    );
  }
  const labelFromDesignSystem = designSystemToolkit?.label ?? null;
  const labelFromJson = jsonData?.label ?? jsonData?.name ?? null;
  const typeFromJson = jsonData?.metadata?.type ?? null;

  const info: ToolkitInfo = {
    category,
    id: toolkitId,
    // Prefer the Design System label (has correct spacing/casing), but fall back
    // to JSON label for toolkits not present in the design system.
    label: labelFromDesignSystem ?? labelFromJson ?? getToolkitLabel(toolkitId),
    navGroup: inferNavGroup(toolkitId, typeFromJson),
    slug: docsSlug,
  };

  const priority = designSystemToolkit ? 2 : 0;
  return { info, priority };
}

export function buildToolkitInfoList(dataDir: string): ToolkitInfo[] {
  const files = getToolkitFiles(dataDir);
  const toolkitsBySlug = new Map<string, ToolkitInfoEntry>();

  for (const slug of files) {
    const entry = resolveToolkitInfo(dataDir, slug);
    if (!entry) {
      continue;
    }

    const existing = toolkitsBySlug.get(entry.info.slug);
    if (!existing || entry.priority > existing.priority) {
      toolkitsBySlug.set(entry.info.slug, entry);
    }
  }

  return Array.from(toolkitsBySlug.values()).map((entry) => entry.info);
}

/**
 * The fields a partner needs to become a sidebar entry. Narrower than
 * `PartnerToolkit` so tests can hand in plain objects instead of casting a
 * full catalog entry into existence.
 */
export type PartnerNavSource = Pick<
  PartnerToolkit,
  "id" | "label" | "category" | "relativeDocsLink"
>;

/**
 * Sidebar entries for the partner integrations (remote MCP Servers offered by
 * Arcade partners).
 *
 * Partner pages are hand-authored MDX files in the category folder and have no
 * JSON file in the data directory, so `buildToolkitInfoList` can't see them.
 * This script rewrites every category's `meta.json` from scratch, so an entry
 * typed into that file by hand disappears on the next run. Deriving the entries
 * from `PARTNER_TOOLKITS` — the same list the integrations catalog renders its
 * cards from — keeps the sidebar and the catalog agreeing, and makes adding a
 * partner a one-line change in one file. tests/partner-integration-nav.test.ts
 * holds the two together.
 */
export function buildPartnerToolkitInfoList(
  partners: readonly PartnerNavSource[] = PARTNER_TOOLKITS
): ToolkitInfo[] {
  return partners.map((partner) => {
    const { category } = partner;
    if (!(INTEGRATION_CATEGORIES as readonly string[]).includes(category)) {
      throw new Error(
        `Unrecognized integration category "${category}" for partner "${partner.id}".`
      );
    }

    return {
      category,
      id: partner.id,
      label: partner.label,
      navGroup: "partner" as const,
      slug: getToolkitSlug({
        docsLink: partner.relativeDocsLink,
        id: partner.id,
      }),
    };
  });
}

/**
 * A partner and a JSON-backed toolkit that resolve to the same slug in the same
 * category would claim one URL for two pages. Fail here, naming both, rather
 * than write a sidebar whose link and MDX entry point at the same path.
 */
export function mergeToolkitAndPartnerInfo(
  toolkits: ToolkitInfo[],
  partners: ToolkitInfo[]
): ToolkitInfo[] {
  const toolkitKeys = new Map(
    toolkits.map((toolkit) => [
      `${toolkit.category}/${toolkit.slug}`,
      toolkit.id,
    ])
  );

  for (const partner of partners) {
    const key = `${partner.category}/${partner.slug}`;
    const toolkitId = toolkitKeys.get(key);
    if (toolkitId) {
      throw new Error(
        `Partner "${partner.id}" and toolkit "${toolkitId}" both resolve to ${key}. ` +
          "Give one of them a different slug, or drop the partner from data/partner-toolkits.ts."
      );
    }
  }

  return [...toolkits, ...partners];
}

/**
 * Group toolkits by category
 */
export function groupByCategory(
  toolkits: ToolkitInfo[]
): Map<string, ToolkitInfo[]> {
  const grouped = new Map<string, ToolkitInfo[]>();

  for (const toolkit of toolkits) {
    const { category } = toolkit;
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    const list = grouped.get(category);
    if (list) {
      list.push(toolkit);
    } else {
      grouped.set(category, [toolkit]);
    }
  }

  // Sort toolkits within each category by label
  for (const [, items] of grouped) {
    items.sort((a, b) => a.label.localeCompare(b.label));
  }

  return grouped;
}

/** Fumadocs separator entry: `---Title---`. */
export const renderSeparatorEntry = (title: string): string => `---${title}---`;

/**
 * Fumadocs link entry: `[Label](href)`. The parser reads the label up to the
 * first `]`, so a label containing one cannot round-trip; fail loudly instead
 * of writing an entry Fumadocs would silently drop.
 */
export const renderLinkEntry = (label: string, href: string): string => {
  if (label.includes("]")) {
    throw new Error(
      `Sidebar label "${label}" contains "]", which Fumadocs link entries cannot encode.`
    );
  }
  return `[${label}](${href})`;
};

/**
 * Build the Fumadocs `meta.json` object for a category.
 *
 * Generated toolkit pages are not MDX files in the folder, so they are listed
 * as `[Label](href)` links. Partner pages are authored MDX files in the same
 * folder, so they are listed by bare slug and Fumadocs reads their title from
 * the page's frontmatter.
 */
export function buildCategoryMeta(
  toolkits: ToolkitInfo[],
  category: string,
  integrationsBasePath: string
): CategoryMeta {
  const byLabel = (a: ToolkitInfo, b: ToolkitInfo) =>
    a.label.localeCompare(b.label);

  const optimized = toolkits
    .filter((t) => t.navGroup === "optimized")
    .sort(byLabel);
  const starter = toolkits
    .filter((t) => t.navGroup === "starter")
    .sort(byLabel);
  const partners = toolkits
    .filter((t) => t.navGroup === "partner")
    .sort(byLabel);

  const renderLink = (t: ToolkitInfo) =>
    renderLinkEntry(t.label, `${integrationsBasePath}/${category}/${t.slug}`);

  const pages: string[] = [];
  if (optimized.length > 0) {
    pages.push(renderSeparatorEntry("Optimized"));
    pages.push(...optimized.map(renderLink));
  }
  if (starter.length > 0) {
    pages.push(renderSeparatorEntry("Starter"));
    pages.push(...starter.map(renderLink));
  }
  if (partners.length > 0) {
    pages.push(renderSeparatorEntry("Partners"));
    pages.push(...partners.map((t) => t.slug));
  }

  return { pages, title: CATEGORY_NAMES[category] ?? category };
}

/**
 * Generate `meta.json` content for a category
 */
export function generateCategoryMeta(
  toolkits: ToolkitInfo[],
  category: string,
  integrationsBasePath: string
): string {
  const meta = buildCategoryMeta(toolkits, category, integrationsBasePath);
  return `${JSON.stringify(meta, null, JSON_INDENT)}\n`;
}

/**
 * The main integrations `meta.json` is authored by hand (it also carries the
 * overview page and the feedback section), so this script never rewrites it.
 * It does check that every active category is reachable from it: a category
 * folder that the parent `pages` list omits renders no sidebar entries at all,
 * which is exactly the silent 404 class of bug the sync exists to prevent.
 *
 * Returns the active categories missing from `pages`. A `pages` list that
 * contains the `...` rest marker includes every folder, so nothing is missing.
 */
export function findMissingMainMetaCategories(
  mainMeta: { pages?: unknown } | null,
  activeCategories: readonly string[]
): string[] {
  const pages = Array.isArray(mainMeta?.pages)
    ? mainMeta.pages.filter(
        (entry): entry is string => typeof entry === "string"
      )
    : [];

  if (pages.includes("...") || pages.includes("z...a")) {
    return [];
  }

  const listed = new Set(
    pages.map((entry) =>
      entry.replace(EXTRACT_PREFIX_REGEX, "").replace(EXCLUDE_PREFIX_REGEX, "")
    )
  );
  return activeCategories.filter(
    (category) =>
      (INTEGRATION_CATEGORIES as readonly string[]).includes(category) &&
      !listed.has(category)
  );
}

function readMainMeta(metaPath: string): { pages?: unknown } | null {
  if (!existsSync(metaPath)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(metaPath, "utf-8")) as { pages?: unknown };
  } catch (error) {
    throw new Error(
      `Main integrations ${META_FILE_NAME} at ${metaPath} is not valid JSON: ${String(error)}`,
      { cause: error }
    );
  }
}

type SyncContext = {
  dryRun: boolean;
  log: (msg: string) => void;
  result: SyncResult;
};

function writeCategoryMeta(
  category: string,
  categoryToolkits: ToolkitInfo[],
  { dryRun, log, result }: SyncContext
): void {
  const categoryDir = join(CONFIG.integrationsDir, category);
  const metaPath = join(categoryDir, META_FILE_NAME);
  const metaContent = generateCategoryMeta(
    categoryToolkits,
    category,
    CONFIG.integrationsBasePath
  );

  if (!existsSync(categoryDir)) {
    log(`Creating category directory: ${category}`);
    if (!dryRun) {
      mkdirSync(categoryDir, { recursive: true });
    }
    result.categoriesCreated.push(category);
  }

  // Check if content changed
  const contentChanged = existsSync(metaPath)
    ? readFileSync(metaPath, "utf-8") !== metaContent
    : true;

  if (!contentChanged) {
    log(`No changes for: ${category}`);
    return;
  }

  log(
    `Updating ${META_FILE_NAME} for: ${category} (${categoryToolkits.length} toolkits)`
  );
  if (!dryRun) {
    writeFileSync(metaPath, metaContent);
  }
  if (!result.categoriesCreated.includes(category)) {
    result.categoriesUpdated.push(category);
  }
}

/**
 * Category directories under the integrations folder: every directory whose
 * name is an integration category (current or former — a stale `others/`
 * folder is still a category directory this script once wrote).
 */
function listExistingCategoryDirs(): string[] {
  if (!existsSync(CONFIG.integrationsDir)) {
    return [];
  }
  return readdirSync(CONFIG.integrationsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter(
      (name) =>
        name in CATEGORY_NAMES ||
        (INTEGRATION_CATEGORIES as readonly string[]).includes(name)
    );
}

/**
 * Remove a category folder that no longer has toolkits. Only a folder holding
 * nothing but the generated `meta.json` is deleted: authored MDX next to it is
 * someone's content, so that folder is left alone and reported instead.
 */
function removeEmptyCategoryDirs(
  existingDirs: string[],
  activeCategories: string[],
  { dryRun, log, result }: SyncContext
): void {
  for (const existingDir of existingDirs) {
    if (activeCategories.includes(existingDir)) {
      continue;
    }
    const categoryDir = join(CONFIG.integrationsDir, existingDir);
    const leftovers = readdirSync(categoryDir).filter(
      (name) => name !== META_FILE_NAME
    );
    if (leftovers.length > 0) {
      result.errors.push(
        `Category "${existingDir}" has no toolkits but still contains authored files (${leftovers.join(", ")}); not removing it.`
      );
      continue;
    }
    log(`Removing empty category: ${existingDir}`);
    if (!dryRun) {
      rmSync(categoryDir, { recursive: true });
    }
    result.categoriesRemoved.push(existingDir);
  }
}

/**
 * Sync toolkit sidebar with available JSON files
 */
export function syncToolkitSidebar(options: SyncOptions = {}): SyncResult {
  const { dryRun = false, verbose = false } = options;
  const removeEmptySections = resolveRemoveEmptySections(options);

  const result: SyncResult = {
    categoriesCreated: [],
    categoriesRemoved: [],
    categoriesUpdated: [],
    errors: [],
    partnerCount: 0,
    toolkitCount: 0,
  };

  const log = (msg: string) => {
    if (verbose) {
      console.log(msg);
    }
  };
  const context: SyncContext = { dryRun, log, result };

  try {
    // Build toolkit info from JSON files
    const toolkits = buildToolkitInfoList(CONFIG.dataDir);
    result.toolkitCount = toolkits.length;
    log(`Found ${toolkits.length} toolkit JSON files`);

    const partners = buildPartnerToolkitInfoList();
    result.partnerCount = partners.length;
    log(`Found ${partners.length} partner integrations`);

    // Group by category
    const grouped = groupByCategory(
      mergeToolkitAndPartnerInfo(toolkits, partners)
    );
    const activeCategories = Array.from(grouped.keys());
    log(`Active categories: ${activeCategories.join(", ")}`);

    // Snapshot existing category directories before writing new ones
    const existingDirs = listExistingCategoryDirs();

    // Create/update category meta.json files
    for (const [category, categoryToolkits] of grouped) {
      writeCategoryMeta(category, categoryToolkits, context);
    }

    // Remove category directories only when explicitly enabled.
    // This prevents automatic route removals during regular sync runs.
    if (removeEmptySections) {
      removeEmptyCategoryDirs(existingDirs, activeCategories, context);
    } else {
      log("Skipping empty category removal (--remove-empty-sections=false)");
    }

    // Check the hand-authored main meta.json lists every active category
    const mainMetaPath = join(CONFIG.integrationsDir, META_FILE_NAME);
    const mainMeta = readMainMeta(mainMetaPath);
    if (mainMeta) {
      const missing = findMissingMainMetaCategories(mainMeta, activeCategories);
      if (missing.length > 0) {
        result.errors.push(
          `Main integrations ${META_FILE_NAME} (${mainMetaPath}) does not list: ${missing.join(", ")}. ` +
            "Add each category to its `pages` array so the sidebar can reach it."
        );
      }
    } else {
      log(`No main ${META_FILE_NAME} at ${mainMetaPath}; skipping check`);
    }
  } catch (error) {
    result.errors.push(String(error));
  }

  return result;
}

/**
 * Print sync results
 */
export function printResults(result: SyncResult): void {
  console.log("\n=== Toolkit Sidebar Sync Results ===\n");
  console.log(`Total toolkits: ${result.toolkitCount}`);
  console.log(`Partner integrations: ${result.partnerCount}`);

  if (result.categoriesCreated.length > 0) {
    console.log(`\nCategories created (${result.categoriesCreated.length}):`);
    for (const category of result.categoriesCreated) {
      console.log(`  + ${category}`);
    }
  }

  if (result.categoriesUpdated.length > 0) {
    console.log(`\nCategories updated (${result.categoriesUpdated.length}):`);
    for (const category of result.categoriesUpdated) {
      console.log(`  ~ ${category}`);
    }
  }

  if (result.categoriesRemoved.length > 0) {
    console.log(`\nCategories removed (${result.categoriesRemoved.length}):`);
    for (const category of result.categoriesRemoved) {
      console.log(`  - ${category}`);
    }
  }

  if (result.errors.length > 0) {
    console.log(`\nErrors (${result.errors.length}):`);
    for (const error of result.errors) {
      console.log(`  ! ${error}`);
    }
  }

  console.log("\n====================================\n");
}

// CLI execution
const isMainModule =
  import.meta.url === `file://${process.argv[1]}` ||
  process.argv[1]?.endsWith("sync-toolkit-sidebar.ts");

if (isMainModule) {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const verbose = args.includes("--verbose") || args.includes("-v");
  const removeEmptySections =
    parseBooleanCliFlag(args, "--remove-empty-sections") ??
    parseBooleanCliFlag(args, "--prune") ??
    false;

  if (dryRun) {
    console.log("Running in dry-run mode (no changes will be made)\n");
  }

  const result = syncToolkitSidebar({ dryRun, removeEmptySections, verbose });
  printResults(result);

  if (result.errors.length > 0) {
    process.exit(1);
  }
}
