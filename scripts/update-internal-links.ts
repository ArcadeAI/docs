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

// Top-level regex patterns
const LOCALE_PREFIX_REGEX = /^\/:locale/;
const SPECIAL_REGEX_CHARS_REGEX = /[.*+?^${}()|[\]\\]/g;
const REDIRECT_REGEX =
  /\{\s*source:\s*["']([^"']+)["']\s*,\s*destination:\s*["']([^"']+)["']/g;
const REVERSED_REDIRECT_REGEX =
  /\{\s*destination:\s*["']([^"']+)["']\s*,\s*source:\s*["']([^"']+)["']/g;

type Redirect = {
  source: string;
  destination: string;
};

/**
 * Execute regex and collect all matches (avoids assignment in expression)
 */
function collectRegexMatches(
  regex: RegExp,
  content: string,
  sourceIndex: number,
  destIndex: number
): Array<{ source: string; destination: string }> {
  const results: Array<{ source: string; destination: string }> = [];
  regex.lastIndex = 0;

  let match = regex.exec(content);
  while (match !== null) {
    results.push({
      source: match[sourceIndex],
      destination: match[destIndex],
    });
    match = regex.exec(content);
  }

  return results;
}

/**
 * Parse redirects from next.config.ts
 */
function parseRedirects(content: string): Redirect[] {
  const results: Redirect[] = [];

  // Collect standard format: { source: "...", destination: "..." }
  const standardMatches = collectRegexMatches(REDIRECT_REGEX, content, 1, 2);
  for (const m of standardMatches) {
    results.push(m);
  }

  // Collect reversed format: { destination: "...", source: "..." }
  const reversedMatches = collectRegexMatches(
    REVERSED_REDIRECT_REGEX,
    content,
    2,
    1
  );
  for (const m of reversedMatches) {
    results.push(m);
  }

  return results;
}

/**
 * Filter redirects to only those that can be auto-updated
 */
function getUpdatableRedirects(redirectList: Redirect[]): Redirect[] {
  return redirectList.filter((r) => {
    if (r.source.includes(":path*") || r.destination.includes(":path*")) {
      return false;
    }

    const sourceWithoutLocale = r.source.replace(LOCALE_PREFIX_REGEX, "");
    const destWithoutLocale = r.destination.replace(LOCALE_PREFIX_REGEX, "");

    if (sourceWithoutLocale.includes(":") || destWithoutLocale.includes(":")) {
      return false;
    }

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
    oldPath: redirect.source.replace(LOCALE_PREFIX_REGEX, ""),
    newPath: redirect.destination.replace(LOCALE_PREFIX_REGEX, ""),
  };
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(SPECIAL_REGEX_CHARS_REGEX, "\\$&");
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
  // Using replacer function to avoid special replacement pattern interpretation
  // (e.g., $1, $2, $& in newPath would be incorrectly expanded if using string)
  const markdownLinkRegex = new RegExp(
    `(\\]\\()${escapeRegex(oldPath)}([)"#\\s])`,
    "g"
  );
  updated = updated.replace(
    markdownLinkRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // JSX href with double quotes: href="/old-path"
  const jsxDoubleQuoteRegex = new RegExp(
    `(href=")${escapeRegex(oldPath)}(["#])`,
    "g"
  );
  updated = updated.replace(
    jsxDoubleQuoteRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // JSX href with single quotes: href='/old-path'
  const jsxSingleQuoteRegex = new RegExp(
    `(href=')${escapeRegex(oldPath)}(['#])`,
    "g"
  );
  updated = updated.replace(
    jsxSingleQuoteRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // Paths in backticks (code blocks showing links)
  const backtickRegex = new RegExp(`(\`)${escapeRegex(oldPath)}(\`|[#])`, "g");
  updated = updated.replace(
    backtickRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  return updated;
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

  for (const redirect of redirects) {
    const { oldPath, newPath } = redirectToLinkPatterns(redirect);

    if (updatedContent.includes(oldPath)) {
      updatedContent = updateLinksInContent(updatedContent, oldPath, newPath);
    }
  }

  if (updatedContent !== originalContent) {
    if (dryRun) {
      console.log(`${colors.yellow("Would update:")} ${file}`);

      const lines = originalContent.split("\n");
      const newLines = updatedContent.split("\n");
      for (let i = 0; i < lines.length; i += 1) {
        if (lines[i] !== newLines[i]) {
          console.log(colors.red(`  - ${lines[i].trim()}`));
          console.log(colors.green(`  + ${newLines[i].trim()}`));
        }
      }
      console.log("");
    } else {
      writeFileSync(file, updatedContent);
      console.log(`${colors.green("Updated:")} ${file}`);
    }
    updatedCount += 1;
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
