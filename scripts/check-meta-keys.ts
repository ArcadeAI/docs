#!/usr/bin/env bun

/**
 * Validate that meta.json `pages` entries match existing filesystem entries
 *
 * Usage:
 *   bun run check-meta [--staged-only]
 *
 * Features:
 * - Scans all meta.json files in content/docs/
 * - Validates that each bare slug in `pages` corresponds to a sibling
 *   `<slug>.mdx`, `<slug>/index.mdx`, or `<slug>/` directory
 * - Validates that every sibling page/folder is listed, unless the file
 *   declares a rest entry (`...` or `z...a`)
 * - Skips separators (`---Title---`), links (`[Title](href)`), rest entries
 *   (`...`), and exclusions (`!slug`)
 * - --staged-only: Only check staged meta.json files (for pre-commit hook)
 */

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import fg from "fast-glob";

// Colors for terminal output
const colors = {
  blue: (s: string) => `\x1b[0;34m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
  green: (s: string) => `\x1b[0;32m${s}\x1b[0m`,
  red: (s: string) => `\x1b[0;31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[1;33m${s}\x1b[0m`,
};

// Parse command line arguments
const args = process.argv.slice(2);
const stagedOnly = args.includes("--staged-only");

const CONTENT_ROOT = "content/docs";
const META_FILE_NAME = "meta.json";

// Entry forms that never map to a sibling page
const SEPARATOR_REGEX = /^---.*---$/;
const LINK_REGEX = /^\[.*\]\(.*\)$/;
const REST_REGEX = /^(\.\.\.|z\.\.\.a)$/;
const EXCLUDE_PREFIX = "!";
const MDX_EXTENSION_REGEX = /\.mdx?$/;
const NON_SLUG_CHARS_REGEX = /[-_]/g;

interface MetaError {
  file: string;
  key: string;
  message: string;
}

interface ParsedMeta {
  excluded: Set<string>;
  hasRest: boolean;
  pages: string[];
}

/**
 * Get list of staged meta.json files under content/docs
 */
function getStagedMetaFiles(): string[] {
  try {
    const output = execSync(
      "git diff --cached --name-only --diff-filter=ACMR",
      {
        encoding: "utf-8",
      }
    );
    return output
      .split("\n")
      .filter(
        (f) =>
          f.endsWith(`/${META_FILE_NAME}`) && f.startsWith(`${CONTENT_ROOT}/`)
      );
  } catch {
    return [];
  }
}

/**
 * Get all meta.json files in content/docs/
 */
function getAllMetaFiles(): string[] {
  return fg.sync(`${CONTENT_ROOT}/**/${META_FILE_NAME}`, { onlyFiles: true });
}

/**
 * Parse a meta.json file and extract its `pages` entries.
 * Returns an error when the file is not valid JSON or `pages` is malformed.
 */
function parseMetaFile(
  filePath: string
): { meta: ParsedMeta } | { error: MetaError } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(filePath, "utf-8"));
  } catch (error) {
    return {
      error: {
        file: filePath,
        key: "",
        message: `Invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
      },
    };
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return {
      error: {
        file: filePath,
        key: "",
        message: "meta.json must be a JSON object",
      },
    };
  }

  const pagesValue = (parsed as { pages?: unknown }).pages;
  if (pagesValue === undefined) {
    return { meta: { excluded: new Set(), hasRest: true, pages: [] } };
  }

  if (
    !Array.isArray(pagesValue) ||
    pagesValue.some((entry) => typeof entry !== "string")
  ) {
    return {
      error: {
        file: filePath,
        key: "pages",
        message: '"pages" must be an array of strings',
      },
    };
  }

  const pages = pagesValue as string[];
  const excluded = new Set(
    pages
      .filter((entry) => entry.startsWith(EXCLUDE_PREFIX))
      .map((entry) => entry.slice(EXCLUDE_PREFIX.length))
  );

  return {
    meta: {
      excluded,
      hasRest: pages.some((entry) => REST_REGEX.test(entry)),
      pages,
    },
  };
}

/**
 * True when the entry is a separator, link, rest marker, or exclusion —
 * none of which must match a sibling page.
 */
function isSpecialEntry(entry: string): boolean {
  return (
    SEPARATOR_REGEX.test(entry) ||
    LINK_REGEX.test(entry) ||
    REST_REGEX.test(entry) ||
    entry.startsWith(EXCLUDE_PREFIX)
  );
}

/**
 * Get valid sibling names for a meta.json file: every `<name>.mdx`/`.md` file
 * (including `index`) and every directory next to it.
 */
function getValidSiblings(metaFilePath: string): Set<string> {
  const dir = dirname(metaFilePath);
  const siblings = new Set<string>();

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name === META_FILE_NAME || entry.name.startsWith(".")) {
        continue;
      }

      if (entry.isDirectory()) {
        siblings.add(entry.name);
        continue;
      }

      if (MDX_EXTENSION_REGEX.test(entry.name)) {
        siblings.add(entry.name.replace(MDX_EXTENSION_REGEX, ""));
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }

  return siblings;
}

/**
 * Resolve a path-like entry (containing "/") relative to the meta.json dir.
 * Fumadocs accepts `folder/page` and `../other/page` forms.
 */
function pathEntryExists(metaFilePath: string, entry: string): boolean {
  const base = join(dirname(metaFilePath), entry);
  if (existsSync(`${base}.mdx`) || existsSync(`${base}.md`)) {
    return true;
  }
  if (existsSync(base)) {
    try {
      return statSync(base).isDirectory();
    } catch {
      return false;
    }
  }
  return false;
}

/**
 * Validate one bare or path-like `pages` entry against the siblings on disk.
 * Returns the error to report, or null when the entry resolves.
 */
function validateEntry(
  filePath: string,
  entry: string,
  validSiblings: Set<string>
): MetaError | null {
  if (entry.includes("/")) {
    if (pathEntryExists(filePath, entry)) {
      return null;
    }
    return {
      file: filePath,
      key: entry,
      message: `Entry "${entry}" does not resolve to a page or folder relative to ${dirname(filePath)}`,
    };
  }

  if (validSiblings.has(entry)) {
    return null;
  }

  const suggestions = findSimilarSiblings(entry, validSiblings);
  let message = `Entry "${entry}" does not match any sibling page or folder`;
  if (suggestions.length > 0) {
    message += `. Did you mean: ${suggestions.map((s) => `"${s}"`).join(", ")}?`;
  }
  return { file: filePath, key: entry, message };
}

/**
 * Report every sibling page/folder that `pages` neither lists nor excludes.
 * `index` is the folder's own page; Fumadocs attaches it to the folder node,
 * so it does not need to be listed.
 */
function findUnlistedSiblings(
  filePath: string,
  validSiblings: Set<string>,
  listed: Set<string>,
  excluded: Set<string>
): MetaError[] {
  return [...validSiblings]
    .filter(
      (sibling) =>
        sibling !== "index" && !(listed.has(sibling) || excluded.has(sibling))
    )
    .map((sibling) => ({
      file: filePath,
      key: sibling,
      message: `Sibling "${sibling}" is not listed in "pages" (add it, exclude it with "!${sibling}", or add "..." to include the rest)`,
    }));
}

/**
 * Validate a single meta.json file
 */
function validateMetaFile(filePath: string): MetaError[] {
  if (!existsSync(filePath)) {
    return [];
  }

  const result = parseMetaFile(filePath);
  if ("error" in result) {
    return [result.error];
  }

  const { pages, hasRest, excluded } = result.meta;
  const validSiblings = getValidSiblings(filePath);
  const errors: MetaError[] = [];
  const listed = new Set<string>();

  for (const entry of pages) {
    if (isSpecialEntry(entry)) {
      continue;
    }
    if (!entry.includes("/")) {
      listed.add(entry);
    }
    const error = validateEntry(filePath, entry, validSiblings);
    if (error) {
      errors.push(error);
    }
  }

  if (!hasRest) {
    errors.push(
      ...findUnlistedSiblings(filePath, validSiblings, listed, excluded)
    );
  }

  return errors;
}

/**
 * Find siblings with similar names (e.g., copilot-studio vs copilot_studio)
 */
function findSimilarSiblings(
  key: string,
  validSiblings: Set<string>
): string[] {
  const normalizedKey = key.replace(NON_SLUG_CHARS_REGEX, "").toLowerCase();
  return [...validSiblings].filter((s) => {
    const normalizedSibling = s.replace(NON_SLUG_CHARS_REGEX, "").toLowerCase();
    return normalizedKey === normalizedSibling;
  });
}

/**
 * Main function
 */
function main(): void {
  console.log(colors.blue("🔍 Checking meta.json pages...\n"));

  const metaFiles = stagedOnly ? getStagedMetaFiles() : getAllMetaFiles();

  if (metaFiles.length === 0) {
    if (stagedOnly) {
      console.log(colors.dim("No staged meta.json files to check"));
    } else {
      console.log(colors.yellow("No meta.json files found"));
    }
    process.exit(0);
  }

  console.log(
    colors.dim(`Checking ${metaFiles.length} meta.json file(s)...\n`)
  );

  const allErrors: MetaError[] = [];

  for (const file of metaFiles) {
    const errors = validateMetaFile(file);
    allErrors.push(...errors);
  }

  if (allErrors.length === 0) {
    console.log(colors.green("✅ All meta.json entries are valid\n"));
    process.exit(0);
  }

  console.log(colors.red(`❌ Found ${allErrors.length} problem(s):\n`));

  for (const error of allErrors) {
    console.log(colors.yellow(`  ${error.file}:`));
    console.log(`    ${error.message}\n`);
  }

  console.log(
    colors.dim(
      "Bare entries in `pages` must match a sibling `<slug>.mdx`, `<slug>/index.mdx`, or `<slug>/` folder,"
    )
  );
  console.log(
    colors.dim(
      "and every sibling must be listed unless the file contains a `...` rest entry."
    )
  );
  console.log(
    colors.dim(
      "Separators (`---Title---`), links (`[Title](href)`), and exclusions (`!slug`) are allowed.\n"
    )
  );

  process.exit(1);
}

main();
