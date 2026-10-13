#!/usr/bin/env bun

/**
 * Update internal links to use redirect destinations instead of old paths
 *
 * Usage:
 *   bun run update-links [--dry-run]
 *
 * This script reads redirects from redirects.ts and updates any internal links
 * in content (MDX) and component/route (TSX) files that point to redirected paths.
 */

import { readFileSync, writeFileSync } from "node:fs";
import fg from "fast-glob";
import { redirects as configuredRedirects } from "../redirects";
import {
  getUpdatableRedirects,
  redirectToLinkPatterns,
  updateLinksInContent,
} from "./lib/update-links-utils";

// Colors for terminal output
const colors = {
  blue: (s: string) => `\x1b[0;34m${s}\x1b[0m`,
  green: (s: string) => `\x1b[0;32m${s}\x1b[0m`,
  red: (s: string) => `\x1b[0;31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[1;33m${s}\x1b[0m`,
};

// Parse command line arguments
const dryRun = process.argv.includes("--dry-run");

// ============================================================
// Main script
// ============================================================

if (dryRun) {
  console.log(
    colors.blue("Running in dry-run mode - no files will be modified")
  );
  console.log("");
}

console.log(colors.blue("Parsing redirects from redirects.ts..."));

const redirects = getUpdatableRedirects(configuredRedirects);

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

// Content pages plus the TS/TSX modules that render hardcoded internal links.
// Keep in sync with the `update-links` globs in .husky/pre-commit.
export const LINK_FILE_GLOBS = [
  "content/docs/**/*.mdx",
  "content/docs/**/*.md",
  "components/**/*.tsx",
  "app/**/*.tsx",
  "lib/**/*.ts",
  "lib/**/*.tsx",
  "data/**/*.ts",
];

const files = fg.sync(LINK_FILE_GLOBS, {
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
