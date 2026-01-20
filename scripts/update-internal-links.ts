#!/usr/bin/env npx tsx

/**
 * Update internal links to use redirect destinations instead of old paths
 *
 * Usage:
 *   pnpm update-links [--dry-run]
 *
 * This script reads redirects from next.config.ts and updates any internal links
 * in MDX/TSX files that point to redirected paths.
 */

import { readFileSync, writeFileSync } from "node:fs";
import fg from "fast-glob";

// Colors for terminal output
const colors = {
  red: (s: string) => `\x1b[0;31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[0;32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[1;33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[0;34m${s}\x1b[0m`,
};

// Parse command line arguments
const dryRun = process.argv.includes("--dry-run");

const CONFIG_FILE = "next.config.ts";

interface Redirect {
  source: string;
  destination: string;
}

/**
 * Parse redirects from next.config.ts
 */
function parseRedirects(configContent: string): Redirect[] {
  const redirects: Redirect[] = [];

  // Match redirect objects with source and destination
  const redirectRegex =
    /\{\s*source:\s*["']([^"']+)["']\s*,\s*destination:\s*["']([^"']+)["']/g;
  let match;

  while ((match = redirectRegex.exec(configContent)) !== null) {
    redirects.push({
      source: match[1],
      destination: match[2],
    });
  }

  // Also try reversed order (destination before source)
  const reversedRegex =
    /\{\s*destination:\s*["']([^"']+)["']\s*,\s*source:\s*["']([^"']+)["']/g;
  while ((match = reversedRegex.exec(configContent)) !== null) {
    redirects.push({
      source: match[2],
      destination: match[1],
    });
  }

  return redirects;
}

/**
 * Filter redirects to only those that can be auto-updated
 */
function getUpdatableRedirects(redirects: Redirect[]): Redirect[] {
  return redirects.filter((r) => {
    // Skip wildcard redirects
    if (r.source.includes(":path*") || r.destination.includes(":path*")) {
      return false;
    }

    // Skip redirects with dynamic segments (except :locale)
    const sourceWithoutLocale = r.source.replace(/^\/:locale/, "");
    const destWithoutLocale = r.destination.replace(/^\/:locale/, "");

    if (sourceWithoutLocale.includes(":") || destWithoutLocale.includes(":")) {
      return false;
    }

    // Skip placeholder destinations
    if (
      r.destination.includes("REPLACE_WITH") ||
      r.destination.includes("TODO")
    ) {
      return false;
    }

    return true;
  });
}

/**
 * Convert redirect to link patterns (without :locale prefix)
 */
function redirectToLinkPatterns(redirect: Redirect): {
  oldPath: string;
  newPath: string;
} {
  return {
    oldPath: redirect.source.replace(/^\/:locale/, ""),
    newPath: redirect.destination.replace(/^\/:locale/, ""),
  };
}

/**
 * Update links in file content
 */
function updateLinksInContent(
  content: string,
  oldPath: string,
  newPath: string
): string {
  let updated = content;

  // Markdown links: [text](/old-path) -> [text](/new-path)
  // Also handles anchors: [text](/old-path#section)
  // And titles: [text](/old-path "title")
  const markdownLinkRegex = new RegExp(
    `(\\]\\()${escapeRegex(oldPath)}([)"#\\s])`,
    "g"
  );
  updated = updated.replace(markdownLinkRegex, `$1${newPath}$2`);

  // JSX href with double quotes: href="/old-path"
  const jsxDoubleQuoteRegex = new RegExp(
    `(href=")${escapeRegex(oldPath)}(["#])`,
    "g"
  );
  updated = updated.replace(jsxDoubleQuoteRegex, `$1${newPath}$2`);

  // JSX href with single quotes: href='/old-path'
  const jsxSingleQuoteRegex = new RegExp(
    `(href=')${escapeRegex(oldPath)}(['#])`,
    "g"
  );
  updated = updated.replace(jsxSingleQuoteRegex, `$1${newPath}$2`);

  // Also handle paths in backticks (code blocks showing links)
  const backtickRegex = new RegExp(`(\`)${escapeRegex(oldPath)}(\`|[#])`, "g");
  updated = updated.replace(backtickRegex, `$1${newPath}$2`);

  return updated;
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ============================================================
// Main script
// ============================================================

if (dryRun) {
  console.log(
    colors.blue("Running in dry-run mode - no files will be modified")
  );
  console.log("");
}

console.log(colors.blue(`Parsing redirects from ${CONFIG_FILE}...`));

const configContent = readFileSync(CONFIG_FILE, "utf-8");
const allRedirects = parseRedirects(configContent);
const redirects = getUpdatableRedirects(allRedirects);

console.log(
  `Found ${colors.green(String(redirects.length))} non-wildcard redirects to check`
);
console.log("");

if (redirects.length === 0) {
  console.log(colors.green("No redirects to process."));
  process.exit(0);
}

console.log(colors.blue("Scanning files for internal links to update..."));
console.log("");

// Find all MDX, MD, and TSX files in app directory
const files = fg.sync(["app/**/*.mdx", "app/**/*.md", "app/**/*.tsx"], {
  ignore: ["**/node_modules/**"],
});

let updatedCount = 0;

for (const file of files) {
  const originalContent = readFileSync(file, "utf-8");
  let updatedContent = originalContent;

  // Apply each redirect transformation
  for (const redirect of redirects) {
    const { oldPath, newPath } = redirectToLinkPatterns(redirect);

    // Quick check if this file might contain the old path
    if (updatedContent.includes(oldPath)) {
      updatedContent = updateLinksInContent(updatedContent, oldPath, newPath);
    }
  }

  // Check if file was modified
  if (updatedContent !== originalContent) {
    if (dryRun) {
      console.log(colors.yellow("Would update:") + ` ${file}`);

      // Show a preview of changes
      const lines = originalContent.split("\n");
      const newLines = updatedContent.split("\n");
      for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== newLines[i]) {
          console.log(colors.red(`  - ${lines[i].trim()}`));
          console.log(colors.green(`  + ${newLines[i].trim()}`));
        }
      }
      console.log("");
    } else {
      writeFileSync(file, updatedContent);
      console.log(colors.green("Updated:") + ` ${file}`);
    }
    updatedCount++;
  }
}

console.log("");
console.log(
  colors.blue("========================================================")
);

if (dryRun) {
  console.log(
    colors.yellow(`Dry run complete: ${updatedCount} file(s) would be updated`)
  );
  console.log("Run without --dry-run to apply changes.");
} else if (updatedCount > 0) {
  console.log(
    colors.green(`Updated ${updatedCount} file(s) with new link paths`)
  );
} else {
  console.log(colors.green("All internal links are up to date!"));
}

console.log(
  colors.blue("========================================================")
);
