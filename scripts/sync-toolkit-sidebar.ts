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
 *   npx tsx scripts/sync-toolkit-sidebar.ts
 *   npx tsx scripts/sync-toolkit-sidebar.ts --dry-run
 *   npx tsx scripts/sync-toolkit-sidebar.ts --verbose
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import design system toolkits
let TOOLKITS: Array<{
  id: string;
  label: string;
  category?: string;
  isHidden?: boolean;
}> = [];

try {
  const designSystem = await import("@arcadeai/design-system");
  TOOLKITS = designSystem.TOOLKITS || [];
} catch {
  console.warn(
    "Warning: @arcadeai/design-system not found, using fallback category detection"
  );
}

// Get project root (one level up from scripts/)
const PROJECT_ROOT = path.resolve(__dirname, "..");

// Configuration
const CONFIG = {
  dataDir: path.join(PROJECT_ROOT, "data/toolkits"),
  integrationsDir: path.join(PROJECT_ROOT, "app/en/resources/integrations"),
  previewBasePath: "/en/resources/integrations/preview",
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

export interface ToolkitInfo {
  id: string;
  slug: string;
  label: string;
  category: string;
}

export interface CategoryData {
  category: string;
  displayName: string;
  toolkits: ToolkitInfo[];
}

export interface SyncResult {
  categoriesUpdated: string[];
  categoriesCreated: string[];
  categoriesRemoved: string[];
  toolkitCount: number;
  errors: string[];
}

/**
 * Get list of toolkit JSON files (excluding index.json)
 */
export function getToolkitFiles(dataDir: string): string[] {
  if (!fs.existsSync(dataDir)) {
    return [];
  }

  return fs
    .readdirSync(dataDir)
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
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

/**
 * Read toolkit JSON and extract label if available
 */
export function getToolkitLabelFromJson(
  dataDir: string,
  slug: string
): string | null {
  const filePath = path.join(dataDir, `${slug}.json`);

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return data.label || data.name || null;
    }
  } catch {
    // Ignore parse errors
  }

  return null;
}

/**
 * Build toolkit info from available JSON files
 */
export function buildToolkitInfoList(dataDir: string): ToolkitInfo[] {
  const files = getToolkitFiles(dataDir);
  const toolkits: ToolkitInfo[] = [];

  for (const slug of files) {
    const category = getToolkitCategory(slug) || "others";
    const labelFromJson = getToolkitLabelFromJson(dataDir, slug);
    const labelFromDesignSystem = getToolkitLabel(slug);

    toolkits.push({
      id: slug,
      slug,
      label: labelFromJson || labelFromDesignSystem,
      category,
    });
  }

  return toolkits;
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
    grouped.get(category)!.push(toolkit);
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
  previewBasePath: string
): string {
  const entries = toolkits
    .map((t) => {
      // Escape any quotes in the label
      const escapedLabel = t.label.replace(/"/g, '\\"');
      return `  "${t.slug}": {
    title: "${escapedLabel}",
    href: "${previewBasePath}/${t.slug}",
  }`;
    })
    .join(",\n");

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
  const sortedCategories = activeCategories.sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const categoryEntries = sortedCategories
    .map((cat) => {
      const displayName = CATEGORY_NAMES[cat] || cat;
      return `  "${cat}": {
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
  preview: {
    title: "All Toolkits",
    display: "hidden",
  },
};

export default meta;
`;
}

/**
 * Sync toolkit sidebar with available JSON files
 */
export function syncToolkitSidebar(
  options: { dryRun?: boolean; verbose?: boolean } = {}
): SyncResult {
  const { dryRun = false, verbose = false } = options;

  const result: SyncResult = {
    categoriesUpdated: [],
    categoriesCreated: [],
    categoriesRemoved: [],
    toolkitCount: 0,
    errors: [],
  };

  const log = (msg: string) => {
    if (verbose) console.log(msg);
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
    const existingDirs = fs.existsSync(CONFIG.integrationsDir)
      ? fs
          .readdirSync(CONFIG.integrationsDir, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .filter(
            (d) =>
              !["components", "contribute-a-server", "preview"].includes(d.name)
          )
          .map((d) => d.name)
      : [];

    // Create/update category directories
    for (const [category, categoryToolkits] of grouped) {
      const categoryDir = path.join(CONFIG.integrationsDir, category);
      const metaPath = path.join(categoryDir, "_meta.tsx");
      const metaContent = generateCategoryMeta(
        categoryToolkits,
        CONFIG.previewBasePath
      );

      const dirExists = fs.existsSync(categoryDir);
      const metaExists = fs.existsSync(metaPath);

      if (!dirExists) {
        log(`Creating category directory: ${category}`);
        if (!dryRun) {
          fs.mkdirSync(categoryDir, { recursive: true });
        }
        result.categoriesCreated.push(category);
      }

      // Check if content changed
      let contentChanged = true;
      if (metaExists) {
        const existingContent = fs.readFileSync(metaPath, "utf-8");
        contentChanged = existingContent !== metaContent;
      }

      if (contentChanged) {
        log(
          `Updating _meta.tsx for: ${category} (${categoryToolkits.length} toolkits)`
        );
        if (!dryRun) {
          fs.writeFileSync(metaPath, metaContent);
        }
        if (!result.categoriesCreated.includes(category)) {
          result.categoriesUpdated.push(category);
        }
      } else {
        log(`No changes for: ${category}`);
      }
    }

    // Remove empty categories
    for (const existingDir of existingDirs) {
      if (!activeCategories.includes(existingDir)) {
        const categoryDir = path.join(CONFIG.integrationsDir, existingDir);
        log(`Removing empty category: ${existingDir}`);
        if (!dryRun) {
          fs.rmSync(categoryDir, { recursive: true });
        }
        result.categoriesRemoved.push(existingDir);
      }
    }

    // Update main _meta.tsx
    const mainMetaPath = path.join(CONFIG.integrationsDir, "_meta.tsx");
    const mainMetaContent = generateMainMeta(activeCategories);

    if (fs.existsSync(mainMetaPath)) {
      const existingMainMeta = fs.readFileSync(mainMetaPath, "utf-8");
      if (existingMainMeta !== mainMetaContent) {
        log("Updating main _meta.tsx");
        if (!dryRun) {
          fs.writeFileSync(mainMetaPath, mainMetaContent);
        }
      }
    } else {
      log("Creating main _meta.tsx");
      if (!dryRun) {
        fs.writeFileSync(mainMetaPath, mainMetaContent);
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
    result.categoriesCreated.forEach((c) => console.log(`  + ${c}`));
  }

  if (result.categoriesUpdated.length > 0) {
    console.log(`\nCategories updated (${result.categoriesUpdated.length}):`);
    result.categoriesUpdated.forEach((c) => console.log(`  ~ ${c}`));
  }

  if (result.categoriesRemoved.length > 0) {
    console.log(`\nCategories removed (${result.categoriesRemoved.length}):`);
    result.categoriesRemoved.forEach((c) => console.log(`  - ${c}`));
  }

  if (result.errors.length > 0) {
    console.log(`\nErrors (${result.errors.length}):`);
    result.errors.forEach((e) => console.log(`  ! ${e}`));
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

  if (dryRun) {
    console.log("Running in dry-run mode (no changes will be made)\n");
  }

  const result = syncToolkitSidebar({ dryRun, verbose });
  printResults(result);

  if (result.errors.length > 0) {
    process.exit(1);
  }
}
