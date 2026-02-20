#!/usr/bin/env node
/**
 * Script to synchronize toolkit sidebar navigation with available JSON data files.
 *
 * This script:
 * 1. Reads all toolkit JSON files from data/toolkits/
 * 2. Maps each toolkit to its category from the design system
 * 3. Creates/updates _meta.tsx files for each category
 * 4. Handles an "others" category for toolkits without a recognized category
 * 5. Updates the main integrations _meta.tsx if needed
 *
 * Usage:
 *   npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts
 *   npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run
 *   npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --verbose
 *   npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --remove-empty-sections
 *   npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --remove-empty-sections=false
 */

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import design system toolkits
type DesignSystemToolkit = {
  id: string;
  label: string;
  category?: string;
  isHidden?: boolean;
};

let TOOLKITS: DesignSystemToolkit[] = [];
const require = createRequire(import.meta.url);

try {
  const designSystemEntry = require.resolve("@arcadeai/design-system");
  const designSystem = (await import(
    pathToFileURL(designSystemEntry).href
  )) as {
    TOOLKITS?: DesignSystemToolkit[];
  };
  TOOLKITS = designSystem.TOOLKITS || [];
} catch {
  if (!process.env.VITEST) {
    console.warn(
      "Warning: @arcadeai/design-system not found, using fallback category detection"
    );
  }
}

export function setToolkitsForTesting(toolkits: DesignSystemToolkit[]): void {
  TOOLKITS = toolkits;
}

// Get project root (two levels up from toolkit-docs-generator/scripts)
const PROJECT_ROOT = resolve(__dirname, "..", "..");

// Configuration
const CONFIG = {
  dataDir: join(PROJECT_ROOT, "toolkit-docs-generator/data/toolkits"),
  integrationsDir: join(PROJECT_ROOT, "app/en/resources/integrations"),
  integrationsBasePath: "/en/resources/integrations",
};

// Known categories with display names
const CATEGORY_NAMES: Record<string, string> = {
  productivity: "Productivity & Docs",
  development: "Developer Tools",
  social: "Social & Communication",
  databases: "Databases",
  "customer-support": "Customer Support",
  search: "Search Tools",
  sales: "Sales",
  entertainment: "Entertainment",
  payments: "Payments & Finance",
  others: "Others",
};

// Category order for main _meta.tsx
const CATEGORY_ORDER = [
  "productivity",
  "social",
  "entertainment",
  "development",
  "payments",
  "search",
  "sales",
  "databases",
  "customer-support",
  "others",
];

const CAPITAL_LETTER_REGEX = /([A-Z])/g;
const FIRST_CHARACTER_REGEX = /^./;
const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;

const IDENTIFIER_KEY_REGEX = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/**
 * Convert a CamelCase string to kebab-case.
 * Must stay in sync with toKebabCase in app/_lib/toolkit-slug.ts.
 */
function toKebabCase(value: string): string {
  return value.replace(CAMEL_BOUNDARY, "$1-$2").toLowerCase();
}

type ToolkitJson = {
  id?: string;
  label?: string;
  name?: string;
  metadata?: {
    category?: string;
    docsLink?: string;
    isHidden?: boolean;
    type?: string;
  };
};

function renderObjectKey(key: string): string {
  if (IDENTIFIER_KEY_REGEX.test(key)) {
    return key;
  }
  const escaped = key.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"${escaped}"`;
}

export type ToolkitInfo = {
  id: string;
  slug: string;
  label: string;
  category: string;
  navGroup: "optimized" | "starter";
};

export type CategoryData = {
  category: string;
  displayName: string;
  toolkits: ToolkitInfo[];
};

export type SyncResult = {
  categoriesUpdated: string[];
  categoriesCreated: string[];
  categoriesRemoved: string[];
  toolkitCount: number;
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

function getDocsSlugFromLink(docsLink?: string | null): string | null {
  if (!docsLink) {
    return null;
  }

  try {
    const url = new URL(docsLink);
    const segments = url.pathname.split("/").filter(Boolean);
    return segments.at(-1) ?? null;
  } catch {
    const segments = docsLink.split("/").filter(Boolean);
    return segments.at(-1) ?? null;
  }
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
  return toolkitIdOrSlug.toLowerCase().endsWith("api")
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
  const docsSlug =
    getDocsSlugFromLink(jsonData?.metadata?.docsLink) ?? toKebabCase(toolkitId);
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
    jsonData?.metadata?.category ?? designSystemToolkit?.category ?? "others";
  const labelFromDesignSystem = designSystemToolkit?.label ?? null;
  const labelFromJson = jsonData?.label ?? jsonData?.name ?? null;
  const typeFromJson = jsonData?.metadata?.type ?? null;

  const info: ToolkitInfo = {
    id: toolkitId,
    slug: docsSlug,
    // Prefer the Design System label (has correct spacing/casing), but fall back
    // to JSON label for toolkits not present in the design system.
    label: labelFromDesignSystem ?? labelFromJson ?? getToolkitLabel(toolkitId),
    category,
    navGroup: inferNavGroup(toolkitId, typeFromJson),
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
 * Group toolkits by category
 */
export function groupByCategory(
  toolkits: ToolkitInfo[]
): Map<string, ToolkitInfo[]> {
  const grouped = new Map<string, ToolkitInfo[]>();

  for (const toolkit of toolkits) {
    const category = toolkit.category;
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

/**
 * Generate _meta.tsx content for a category
 */
export function generateCategoryMeta(
  toolkits: ToolkitInfo[],
  category: string,
  integrationsBasePath: string
): string {
  const byLabel = (a: ToolkitInfo, b: ToolkitInfo) =>
    a.label.localeCompare(b.label);

  const optimized = toolkits
    .filter((t) => t.navGroup === "optimized")
    .sort(byLabel);
  const starter = toolkits
    .filter((t) => t.navGroup === "starter")
    .sort(byLabel);

  const renderEntry = (t: ToolkitInfo) => {
    // Escape any quotes in the label
    const escapedLabel = t.label.replace(/"/g, '\\"');
    return `  ${renderObjectKey(t.slug)}: {
    title: "${escapedLabel}",
    href: "${integrationsBasePath}/${category}/${t.slug}",
  }`;
  };

  const renderSeparator = (title: string) => {
    const key = `-- ${title}`;
    return `  ${renderObjectKey(key)}: {
    type: "separator",
    title: "${title}",
  }`;
  };

  const sections: string[] = [];
  if (optimized.length > 0 && starter.length > 0) {
    sections.push(renderSeparator("Optimized"));
    sections.push(...optimized.map(renderEntry));
    sections.push(renderSeparator("Starter"));
    sections.push(...starter.map(renderEntry));
  } else {
    const sortedToolkits = [...toolkits].sort(byLabel);
    sections.push(...sortedToolkits.map(renderEntry));
  }

  const entries = sections.join(",\n");

  return `import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
${entries},
};

export default meta;
`;
}

/**
 * Generate main integrations _meta.tsx content
 */
export function generateMainMeta(activeCategories: string[]): string {
  // Sort categories by defined order
  const sortedCategories = [...activeCategories].sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);
    if (indexA === -1 && indexB === -1) {
      return a.localeCompare(b);
    }
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    return indexA - indexB;
  });

  const categoryEntries = sortedCategories
    .map((cat) => {
      const displayName = CATEGORY_NAMES[cat] || cat;
      return `  ${renderObjectKey(cat)}: {
    title: "${displayName}",
  }`;
    })
    .join(",\n");

  return `import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      toc: true,
      copyPage: true,
    },
  },
  index: {
    title: "Overview",
    theme: {
      toc: false,
      copyPage: false,
    },
  },
${categoryEntries},
  "-- Submit your Server": {
    type: "separator",
    title: "Submit your server",
  },
  "contribute-a-server": {
    title: "Contribute a Server",
  },
};

export default meta;
`;
}

/**
 * Sync toolkit sidebar with available JSON files
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Main orchestration function requires multiple steps
export function syncToolkitSidebar(options: SyncOptions = {}): SyncResult {
  const { dryRun = false, verbose = false } = options;
  const removeEmptySections = resolveRemoveEmptySections(options);

  const result: SyncResult = {
    categoriesUpdated: [],
    categoriesCreated: [],
    categoriesRemoved: [],
    toolkitCount: 0,
    errors: [],
  };

  const log = (msg: string) => {
    if (verbose) {
      console.log(msg);
    }
  };

  try {
    // Build toolkit info from JSON files
    const toolkits = buildToolkitInfoList(CONFIG.dataDir);
    result.toolkitCount = toolkits.length;
    log(`Found ${toolkits.length} toolkit JSON files`);

    // Group by category
    const grouped = groupByCategory(toolkits);
    const activeCategories = Array.from(grouped.keys());
    log(`Active categories: ${activeCategories.join(", ")}`);

    // Get existing category directories
    const existingDirs = existsSync(CONFIG.integrationsDir)
      ? readdirSync(CONFIG.integrationsDir, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .filter(
            (d) =>
              !["components", "contribute-a-server", "_lib"].includes(d.name)
          )
          .map((d) => d.name)
      : [];

    // Create/update category directories
    for (const [category, categoryToolkits] of grouped) {
      const categoryDir = join(CONFIG.integrationsDir, category);
      const metaPath = join(categoryDir, "_meta.tsx");
      const metaContent = generateCategoryMeta(
        categoryToolkits,
        category,
        CONFIG.integrationsBasePath
      );

      const dirExists = existsSync(categoryDir);
      const metaExists = existsSync(metaPath);

      if (!dirExists) {
        log(`Creating category directory: ${category}`);
        if (!dryRun) {
          mkdirSync(categoryDir, { recursive: true });
        }
        result.categoriesCreated.push(category);
      }

      // Check if content changed
      let contentChanged = true;
      if (metaExists) {
        const existingContent = readFileSync(metaPath, "utf-8");
        contentChanged = existingContent !== metaContent;
      }

      if (contentChanged) {
        log(
          `Updating _meta.tsx for: ${category} (${categoryToolkits.length} toolkits)`
        );
        if (!dryRun) {
          writeFileSync(metaPath, metaContent);
        }
        if (!result.categoriesCreated.includes(category)) {
          result.categoriesUpdated.push(category);
        }
      } else {
        log(`No changes for: ${category}`);
      }
    }

    // Remove category directories only when explicitly enabled.
    // This prevents automatic route removals during regular sync runs.
    if (removeEmptySections) {
      for (const existingDir of existingDirs) {
        if (!activeCategories.includes(existingDir)) {
          const categoryDir = join(CONFIG.integrationsDir, existingDir);
          log(`Removing empty category: ${existingDir}`);
          if (!dryRun) {
            rmSync(categoryDir, { recursive: true });
          }
          result.categoriesRemoved.push(existingDir);
        }
      }
    } else {
      log("Skipping empty category removal (--remove-empty-sections=false)");
    }

    // Update main _meta.tsx
    const mainMetaPath = join(CONFIG.integrationsDir, "_meta.tsx");
    const mainMetaContent = generateMainMeta(activeCategories);

    if (existsSync(mainMetaPath)) {
      const existingMainMeta = readFileSync(mainMetaPath, "utf-8");
      if (existingMainMeta !== mainMetaContent) {
        log("Updating main _meta.tsx");
        if (!dryRun) {
          writeFileSync(mainMetaPath, mainMetaContent);
        }
      }
    } else {
      log("Creating main _meta.tsx");
      if (!dryRun) {
        writeFileSync(mainMetaPath, mainMetaContent);
      }
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

  const result = syncToolkitSidebar({ dryRun, verbose, removeEmptySections });
  printResults(result);

  if (result.errors.length > 0) {
    process.exit(1);
  }
}
