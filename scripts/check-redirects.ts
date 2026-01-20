#!/usr/bin/env npx tsx

/**
 * Check that deleted/renamed markdown files have corresponding redirects in next.config.ts
 *
 * Usage:
 *   pnpm check-redirects [--auto-fix] [--staged-only] [base_branch]
 *
 * Features:
 * - Detects deleted AND renamed markdown files without redirects
 * - Auto-fix mode: automatically inserts redirect entries into next.config.ts
 * - Validates existing redirects for circular references and invalid destinations
 * - Collapses redirect chains automatically
 * - --staged-only: Only check staged changes (for pre-commit hook)
 */

import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

// Colors for terminal output
const colors = {
  red: (s: string) => `\x1b[0;31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[0;32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[1;33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[0;34m${s}\x1b[0m`,
};

// Parse command line arguments
const args = process.argv.slice(2);
const autoFix = args.includes("--auto-fix");
const stagedOnly = args.includes("--staged-only");
const baseBranch = args.find((arg) => !arg.startsWith("--")) || "main";

const CONFIG_FILE = "next.config.ts";

// Magic number constant for "return [" offset
const RETURN_BRACKET_LENGTH = 8;

// Top-level regex patterns for performance
const APP_LOCALE_PREFIX_REGEX = /^app\/[a-z]{2}\//;
const PAGE_FILE_SUFFIX_REGEX = /\/?page\.mdx?$/;
const LOCALE_PREFIX_REGEX = /^\/:locale\/?/;
const PAGE_FILE_MATCH_REGEX = /page\.mdx?$/;
const LOCALE_PATH_PREFIX_REGEX = /^\/:locale\//;
const WILDCARD_PATH_REGEX = /\/:path\*.*$/;
const MDX_EXTENSION_REGEX = /\.mdx$/;
const SPECIAL_REGEX_CHARS_REGEX = /[.*+?^${}()|[\]\\]/g;
const REDIRECT_REGEX =
  /\{\s*source:\s*["']([^"']+)["']\s*,\s*destination:\s*["']([^"']+)["']/g;
const REVERSED_REDIRECT_REGEX =
  /\{\s*destination:\s*["']([^"']+)["']\s*,\s*source:\s*["']([^"']+)["']/g;

type Redirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

type RedirectChain = {
  source: string;
  oldDest: string;
  newDest: string;
};

/**
 * Convert file path to URL path
 * e.g., app/en/guides/foo/page.mdx -> /:locale/guides/foo
 */
function fileToUrl(filePath: string): string {
  const urlPath = filePath
    .replace(APP_LOCALE_PREFIX_REGEX, "")
    .replace(PAGE_FILE_SUFFIX_REGEX, "");

  return urlPath ? `/:locale/${urlPath}` : "/:locale";
}

/**
 * Convert URL path to file path
 * e.g., /:locale/guides/foo -> app/en/guides/foo/page.mdx
 */
function urlToFile(urlPath: string): string {
  const pathWithoutLocale = urlPath.replace(LOCALE_PREFIX_REGEX, "");
  return pathWithoutLocale
    ? `app/en/${pathWithoutLocale}/page.mdx`
    : "app/en/page.mdx";
}

/**
 * Check if a page exists on disk
 */
function pageExists(urlPath: string): boolean {
  if (urlPath.includes(":path*") || urlPath.includes(":path")) {
    return true;
  }

  const filePath = urlToFile(urlPath);
  if (existsSync(filePath)) {
    return true;
  }

  const mdPath = filePath.replace(MDX_EXTENSION_REGEX, ".md");
  if (existsSync(mdPath)) {
    return true;
  }

  return false;
}

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
 * Parse git diff output for deleted and renamed files
 */
function parseGitDiffOutput(
  output: string,
  deletedFiles: string[],
  renamedFromFiles: string[]
): void {
  for (const line of output.split("\n")) {
    if (!line) {
      continue;
    }
    const parts = line.split("\t");
    const status = parts[0];
    const filePath = parts[1];

    if (status === "D" && filePath && PAGE_FILE_MATCH_REGEX.test(filePath)) {
      deletedFiles.push(filePath);
    } else if (
      status?.startsWith("R") &&
      filePath &&
      PAGE_FILE_MATCH_REGEX.test(filePath)
    ) {
      renamedFromFiles.push(filePath);
    }
  }
}

/**
 * Ensure base branch exists locally
 */
function ensureBranchExists(branch: string): void {
  try {
    execSync(`git rev-parse --verify ${branch}`, { encoding: "utf-8" });
  } catch {
    console.log(`Fetching ${branch} branch...`);
    try {
      execSync(`git fetch origin ${branch}:${branch}`, { encoding: "utf-8" });
    } catch {
      console.error(
        colors.red(`ERROR: Could not fetch base branch '${branch}'`)
      );
      process.exit(1);
    }
  }
}

/**
 * Get deleted and renamed files by comparing branches
 * @param branch - Base branch to compare against
 * @param checkStagedOnly - If true, only check staged changes (for pre-commit hook)
 */
function getDeletedAndRenamedFiles(
  branch: string,
  checkStagedOnly: boolean
): {
  deleted: string[];
  renamedFrom: string[];
} {
  const deletedFiles: string[] = [];
  const renamedFromFiles: string[] = [];

  if (checkStagedOnly) {
    // Only check staged changes (for pre-commit hook)
    try {
      const stagedChanges = execSync("git diff --cached --name-status", {
        encoding: "utf-8",
      });
      parseGitDiffOutput(stagedChanges, deletedFiles, renamedFromFiles);
    } catch {
      // Ignore errors from diff
    }
  } else {
    // Check committed changes against base branch
    ensureBranchExists(branch);

    try {
      const committedChanges = execSync(
        `git diff --name-status ${branch}...HEAD`,
        {
          encoding: "utf-8",
        }
      );
      parseGitDiffOutput(committedChanges, deletedFiles, renamedFromFiles);
    } catch {
      // Ignore errors from diff
    }

    // Also check uncommitted changes (both staged and unstaged)
    try {
      const uncommittedChanges = execSync("git diff --name-status HEAD", {
        encoding: "utf-8",
      });
      parseGitDiffOutput(uncommittedChanges, deletedFiles, renamedFromFiles);
    } catch {
      // Ignore errors from diff
    }
  }

  return {
    deleted: [...new Set(deletedFiles)],
    renamedFrom: [...new Set(renamedFromFiles)],
  };
}

/**
 * Check if a wildcard redirect covers a path
 */
function checkWildcardMatch(path: string, redirectList: Redirect[]): boolean {
  const pathWithoutLocale = path.replace(LOCALE_PATH_PREFIX_REGEX, "");

  for (const redirect of redirectList) {
    if (redirect.source.includes(":path*")) {
      const prefix = redirect.source
        .replace(WILDCARD_PATH_REGEX, "")
        .replace(LOCALE_PATH_PREFIX_REGEX, "");

      if (
        pathWithoutLocale.startsWith(`${prefix}/`) ||
        pathWithoutLocale === prefix
      ) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Find the final destination in a redirect chain (follows all hops)
 * Returns null if the path doesn't redirect anywhere
 */
function findFinalRedirectDestination(
  path: string,
  redirectList: Redirect[]
): string | null {
  const visited = new Set<string>();
  let current = path;

  while (true) {
    // Prevent infinite loops from circular redirects
    if (visited.has(current)) {
      return null;
    }
    visited.add(current);

    const redirect = redirectList.find((r) => r.source === current);
    if (!redirect) {
      // No redirect found - if we've moved at all, return current destination
      return current === path ? null : current;
    }

    current = redirect.destination;
  }
}

/**
 * Insert redirect entries into next.config.ts
 */
function insertRedirects(entries: string[]): void {
  const content = readFileSync(CONFIG_FILE, "utf-8");

  const insertPoint = content.indexOf("return [");
  if (insertPoint === -1) {
    console.error(colors.red("ERROR: Could not find 'return [' in config"));
    process.exit(1);
  }

  const beforeReturn = content.substring(
    0,
    insertPoint + RETURN_BRACKET_LENGTH
  );
  const afterReturn = content.substring(insertPoint + RETURN_BRACKET_LENGTH);

  const newContent = `${beforeReturn}\n        // Auto-added redirects for deleted pages\n${entries.join("\n")}${afterReturn}`;

  writeFileSync(CONFIG_FILE, newContent);
}

/**
 * Update a redirect destination in the config
 */
function updateRedirectDestination(
  oldDest: string,
  newDest: string,
  content: string
): string {
  const escaped = oldDest.replace(SPECIAL_REGEX_CHARS_REGEX, "\\$&");
  const regex = new RegExp(`destination:\\s*["']${escaped}["']`, "g");
  return content.replace(regex, `destination: "${newDest}"`);
}

// ============================================================
// Main script
// ============================================================

console.log("Checking for deleted markdown files without redirects...");
console.log(`Comparing current branch to: ${baseBranch}`);
console.log("");

const configContent = readFileSync(CONFIG_FILE, "utf-8");
const redirects = parseRedirects(configContent);

let exitCode = 0;
const invalidRedirects: string[] = [];
const chains: RedirectChain[] = [];

// ============================================================
// PART 1: Validate existing redirects
// ============================================================
console.log(colors.blue(`Validating existing redirects in ${CONFIG_FILE}...`));
console.log("");

for (const redirect of redirects) {
  const { source, destination } = redirect;

  if (
    destination.includes("REPLACE_WITH") ||
    destination.includes("TODO") ||
    destination.includes("FIXME")
  ) {
    console.log(colors.red(`✗ Invalid redirect: ${source}`));
    console.log(
      colors.yellow(`  Destination contains placeholder text: ${destination}`)
    );
    invalidRedirects.push(`${source} -> ${destination} (placeholder text)`);
    exitCode = 1;
  } else if (source === destination) {
    console.log(colors.red(`✗ Circular redirect: ${source}`));
    console.log(colors.yellow("  Source and destination are the same!"));
    invalidRedirects.push(`${source} -> ${destination} (circular)`);
    exitCode = 1;
  } else if (!destination.includes(":path")) {
    const destWithoutLocale = destination.replace(LOCALE_PATH_PREFIX_REGEX, "");
    if (!(destWithoutLocale.includes(":") || pageExists(destination))) {
      const finalDest = findFinalRedirectDestination(destination, redirects);
      if (finalDest) {
        console.log(colors.yellow(`⚠ Redirect chain detected: ${source}`));
        console.log(colors.blue(`  ${source} → ${destination} → ${finalDest}`));
        chains.push({ source, oldDest: destination, newDest: finalDest });
      } else {
        console.log(colors.red(`✗ Invalid redirect: ${source}`));
        console.log(
          colors.yellow(`  Destination does not exist: ${destination}`)
        );
        invalidRedirects.push(
          `${source} -> ${destination} (destination not found)`
        );
        exitCode = 1;
      }
    }
  }
}

if (invalidRedirects.length === 0 && chains.length === 0) {
  console.log(colors.green("✓ All existing redirects are valid."));
}
console.log("");

// ============================================================
// PART 1b: Auto-fix redirect chains
// ============================================================
if (chains.length > 0) {
  if (autoFix) {
    console.log(
      colors.blue(`Collapsing ${chains.length} redirect chain(s)...`)
    );
    console.log("");

    let updatedConfig = configContent;
    for (const chain of chains) {
      console.log(`${colors.green("  ✓")} ${chain.source}`);
      console.log(`    was: ${chain.oldDest}`);
      console.log(`    now: ${chain.newDest}`);

      updatedConfig = updateRedirectDestination(
        chain.oldDest,
        chain.newDest,
        updatedConfig
      );
    }

    writeFileSync(CONFIG_FILE, updatedConfig);
    console.log("");
    console.log(colors.green(`✓ Redirect chains collapsed in ${CONFIG_FILE}`));
    console.log("");
  } else {
    console.log(
      colors.yellow(
        `Found ${chains.length} redirect chain(s) that need collapsing.`
      )
    );
    console.log("Run with --auto-fix to collapse them automatically.");
    console.log("");
    exitCode = 1;
  }
}

// ============================================================
// PART 2: Check for deleted/renamed files without redirects
// ============================================================
const { deleted, renamedFrom } = getDeletedAndRenamedFiles(
  baseBranch,
  stagedOnly
);
const allDeletedOrRenamed = [...deleted, ...renamedFrom].filter((f) =>
  f.startsWith("app/")
);

if (allDeletedOrRenamed.length === 0) {
  console.log(colors.green("✓ No deleted or renamed markdown files found."));
  process.exit(exitCode);
}

console.log("Found deleted/renamed markdown files:");
for (const file of allDeletedOrRenamed) {
  console.log(`  ${file}`);
}
console.log("");

const missingRedirects: string[] = [];
const suggestedEntries: string[] = [];

const latestRedirects = parseRedirects(readFileSync(CONFIG_FILE, "utf-8"));

for (const file of allDeletedOrRenamed) {
  const urlPath = fileToUrl(file);

  const hasExactRedirect = latestRedirects.some((r) => r.source === urlPath);
  const hasWildcardRedirect = checkWildcardMatch(urlPath, latestRedirects);

  if (hasExactRedirect) {
    console.log(colors.green(`✓ Redirect exists for: ${urlPath}`));
  } else if (hasWildcardRedirect) {
    console.log(
      colors.green(`✓ Redirect exists for: ${urlPath} (via wildcard)`)
    );
  } else {
    console.log(colors.red(`✗ Missing redirect for: ${urlPath}`));
    missingRedirects.push(urlPath);

    suggestedEntries.push(`        {
          source: "${urlPath}",
          destination: "/:locale/REPLACE_WITH_NEW_PATH",
          permanent: true,
        },`);

    exitCode = 1;
  }
}

console.log("");

// ============================================================
// PART 3: Report results and optionally auto-fix
// ============================================================
if (missingRedirects.length > 0) {
  if (autoFix) {
    console.log(
      colors.blue(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log(
      colors.blue(
        `Auto-fixing: Adding ${missingRedirects.length} redirect(s) to ${CONFIG_FILE}`
      )
    );
    console.log(
      colors.blue(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log("");

    insertRedirects(suggestedEntries);

    console.log(colors.green(`✓ Added redirect entries to ${CONFIG_FILE}`));
    console.log("");
    console.log(
      colors.red(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log(
      colors.red("ACTION REQUIRED: Update placeholder destinations!")
    );
    console.log(
      colors.red(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log("");
    console.log("Redirect entries were added with placeholder destinations.");
    console.log(
      "You MUST update 'REPLACE_WITH_NEW_PATH' with actual paths before committing."
    );
    console.log("");
    console.log(colors.yellow("Redirects needing destinations:"));
    for (const p of missingRedirects) {
      console.log(`  - ${p} -> /:locale/REPLACE_WITH_NEW_PATH`);
    }
    console.log("");
    console.log(
      `Open ${CONFIG_FILE} and search for 'REPLACE_WITH_NEW_PATH' to find them.`
    );
    console.log("");

    exitCode = 1;
  } else {
    console.log(
      colors.red(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log(
      colors.red(
        `ERROR: Found ${missingRedirects.length} deleted file(s) without redirects!`
      )
    );
    console.log(
      colors.red(
        "══════════════════════════════════════════════════════════════"
      )
    );
    console.log("");
    console.log(
      "When you delete a markdown file, you must add a redirect in next.config.ts"
    );
    console.log(
      "to prevent broken links for users who have bookmarked the old URL."
    );
    console.log("");
    console.log(colors.yellow("Missing redirects for:"));
    for (const p of missingRedirects) {
      console.log(`  - ${p}`);
    }
    console.log("");
    console.log(
      colors.yellow(
        "Add the following to the redirects array in next.config.ts:"
      )
    );
    console.log("");
    for (const entry of suggestedEntries) {
      console.log(entry);
    }
    console.log("");
  }
}

if (invalidRedirects.length > 0) {
  console.log("");
  console.log(
    colors.red("══════════════════════════════════════════════════════════════")
  );
  console.log(
    colors.red(
      `ERROR: Found ${invalidRedirects.length} invalid redirect(s) in config!`
    )
  );
  console.log(
    colors.red("══════════════════════════════════════════════════════════════")
  );
  console.log("");
  for (const invalid of invalidRedirects) {
    console.log(`  - ${invalid}`);
  }
  console.log("");
  console.log(colors.yellow("How to fix:"));
  console.log("  1. Open next.config.ts");
  console.log("  2. Find the redirect(s) listed above");
  console.log("  3. Update the destination to a valid page path");
  console.log("     (Check that the path exists under app/en/)");
}

if (exitCode === 0) {
  console.log(
    colors.green(
      "══════════════════════════════════════════════════════════════"
    )
  );
  console.log(colors.green("SUCCESS: All redirects are valid!"));
  console.log(
    colors.green(
      "══════════════════════════════════════════════════════════════"
    )
  );
}

process.exit(exitCode);
