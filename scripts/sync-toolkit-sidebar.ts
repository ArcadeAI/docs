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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
const PROJECT_ROOT = resolve(__dirname, "..");

// Configuration
const CONFIG = {
  dataDir: join(PROJECT_ROOT, "data/toolkits"),
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

const IDENTIFIER_KEY_REGEX = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

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

/**
 * Read toolkit JSON and extract label if available
 */
export function getToolkitLabelFromJson(
  dataDir: string,
  slug: string
): string | null {
  const filePath = join(dataDir, `${slug}.json`);

  try {
    if (existsSync(filePath)) {
      const data = JSON.parse(readFileSync(filePath, "utf-8"));
      return data.label || data.name || null;
    }
  } catch {
    // Ignore parse errors
  }

  return null;
}

export function getToolkitTypeFromJson(
  dataDir: string,
  slug: string
): string | null {
  const filePath = join(dataDir, `${slug}.json`);

  try {
    if (existsSync(filePath)) {
      const data = JSON.parse(readFileSync(filePath, "utf-8"));
      return data?.metadata?.type ?? null;
    }
  } catch {
    // Ignore parse errors
  }

  return null;
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
export function buildToolkitInfoList(dataDir: string): ToolkitInfo[] {
  const files = getToolkitFiles(dataDir);
  const toolkits: ToolkitInfo[] = [];

  for (const slug of files) {
    const designSystemToolkit = TOOLKITS.find(
      (t) => t.id.toLowerCase() === slug.toLowerCase()
    );
    if (designSystemToolkit?.isHidden) {
      continue;
    }

    const category = designSystemToolkit?.category ?? "others";
    const labelFromDesignSystem = designSystemToolkit?.label ?? null;
    const labelFromJson = getToolkitLabelFromJson(dataDir, slug);
    const typeFromJson = getToolkitTypeFromJson(dataDir, slug);

    toolkits.push({
      id: slug,
      slug,
      // Prefer the Design System label (has correct spacing/casing), but fall back
      // to JSON label for toolkits not present in the design system.
      label: labelFromDesignSystem ?? labelFromJson ?? getToolkitLabel(slug),
      category,
      navGroup: inferNavGroup(slug, typeFromJson),
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
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
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
  options: { dryRun?: boolean; verbose?: boolean; prune?: boolean } = {}
): SyncResult {
  const { dryRun = false, verbose = false, prune = false } = options;

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
    const existingDirs = existsSync(CONFIG.integrationsDir)
      ? readdirSync(CONFIG.integrationsDir, { withFileTypes: true })
          .filter((d) => d.isDirectory())
          .filter(
            (d) =>
              !["components", "contribute-a-server", "preview"].includes(d.name)
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

    // Remove empty categories (optional; off by default for safety).
    if (prune) {
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
  const prune = args.includes("--prune");

  if (dryRun) {
    console.log("Running in dry-run mode (no changes will be made)\n");
  }

  const result = syncToolkitSidebar({ dryRun, verbose, prune });
  printResults(result);

  if (result.errors.length > 0) {
    process.exit(1);
  }
}
