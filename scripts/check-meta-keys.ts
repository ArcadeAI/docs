#!/usr/bin/env npx tsx

/**
 * Validate that _meta.tsx keys match existing filesystem entries
 *
 * Usage:
 *   pnpm check-meta [--staged-only]
 *
 * Features:
 * - Scans all _meta.tsx files in app/en/
 * - Validates that each key corresponds to a sibling directory or page file
 * - Skips special keys like "*", "index", "---", and external links
 * - --staged-only: Only check staged _meta.tsx files (for pre-commit hook)
 */

import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname } from "node:path";
import fg from "fast-glob";

// Colors for terminal output
const colors = {
  red: (s: string) => `\x1b[0;31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[0;32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[1;33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[0;34m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
};

// Parse command line arguments
const args = process.argv.slice(2);
const stagedOnly = args.includes("--staged-only");

// Special keys that don't need filesystem entries
const SPECIAL_KEYS = new Set(["*", "index", "---"]);

// Nested property names that should never be treated as page keys
const NESTED_PROPERTIES = new Set([
  "theme",
  "title",
  "display",
  "href",
  "newWindow",
  "breadcrumb",
  "toc",
  "layout",
  "copyPage",
  "type",
]);

// Top-level regex patterns
const META_OBJECT_REGEX =
  /(?:const|export\s+const)\s+meta\s*(?::\s*\w+)?\s*=\s*\{/;
const KEY_CHAR_REGEX = /[a-zA-Z0-9_-]/;
const MDX_EXTENSION_REGEX = /\.mdx?$/;

// Constants
const LOOK_BEHIND_LENGTH = 15;

type MetaError = {
  file: string;
  key: string;
  message: string;
};

type ParserState = {
  keys: string[];
  depth: number;
  index: number;
  inString: boolean;
  stringChar: string;
  currentKey: string;
  collectingKey: boolean;
};

/**
 * Get list of staged _meta.tsx files
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
      .filter((f) => f.endsWith("_meta.tsx") && f.startsWith("app/"));
  } catch {
    return [];
  }
}

/**
 * Get all _meta.tsx files in app/en/
 */
function getAllMetaFiles(): string[] {
  return fg.sync("app/en/**/_meta.tsx", { onlyFiles: true });
}

/**
 * Simple key extractor - finds keys at depth 1 of the meta object
 */
function extractMetaKeys(content: string): string[] {
  const match = META_OBJECT_REGEX.exec(content);
  if (!match) {
    return [];
  }

  const startIndex = (match.index ?? 0) + match[0].length;
  const state: ParserState = {
    keys: [],
    depth: 1,
    index: startIndex,
    inString: false,
    stringChar: "",
    currentKey: "",
    collectingKey: false,
  };

  while (state.index < content.length && state.depth > 0) {
    parseNextChar(content, state);
  }

  return state.keys;
}

/**
 * Parse the next character in the content
 */
function parseNextChar(content: string, state: ParserState): void {
  const char = content[state.index];
  const prevChar = state.index > 0 ? content[state.index - 1] : "";

  if (handleStringBoundary(char, prevChar, state)) {
    return;
  }

  if (state.inString) {
    handleStringContent(char, state);
    return;
  }

  if (char === "`") {
    state.index = skipTemplateLiteral(content, state.index);
    return;
  }

  if (handleBraceDepth(char, state)) {
    return;
  }

  handleKeyParsing(content, char, state);
  state.index += 1;
}

/**
 * Handle string boundary (quote characters)
 */
function handleStringBoundary(
  char: string,
  prevChar: string,
  state: ParserState
): boolean {
  if ((char !== '"' && char !== "'") || prevChar === "\\") {
    return false;
  }

  if (!state.inString) {
    state.inString = true;
    state.stringChar = char;
    if (state.depth === 1) {
      state.collectingKey = true;
      state.currentKey = "";
    }
  } else if (char === state.stringChar) {
    state.inString = false;
    state.collectingKey = false;
  }
  state.index += 1;
  return true;
}

/**
 * Handle content inside a string
 */
function handleStringContent(char: string, state: ParserState): void {
  if (state.collectingKey) {
    state.currentKey += char;
  }
  state.index += 1;
}

/**
 * Handle brace depth tracking
 */
function handleBraceDepth(char: string, state: ParserState): boolean {
  if (char === "{") {
    state.depth += 1;
    state.index += 1;
    return true;
  }

  if (char === "}") {
    state.depth -= 1;
    state.index += 1;
    return true;
  }

  return false;
}

/**
 * Handle key parsing logic
 */
function handleKeyParsing(
  content: string,
  char: string,
  state: ParserState
): void {
  // Start collecting unquoted key
  if (state.depth === 1 && KEY_CHAR_REGEX.test(char) && !state.collectingKey) {
    const start = Math.max(0, state.index - LOOK_BEHIND_LENGTH);
    const lookBehind = content.slice(start, state.index).trim();
    if (isKeyStart(lookBehind)) {
      state.collectingKey = true;
      state.currentKey = char;
    }
    return;
  }

  // Continue collecting unquoted key
  if (state.collectingKey && KEY_CHAR_REGEX.test(char)) {
    state.currentKey += char;
    return;
  }

  // Key ends at colon
  if (char === ":" && state.depth === 1 && state.currentKey) {
    addKeyIfValid(state.keys, state.currentKey);
    state.currentKey = "";
    state.collectingKey = false;
  }

  // Reset on comma
  if (char === "," && state.depth === 1) {
    state.currentKey = "";
    state.collectingKey = false;
  }
}

/**
 * Skip over a template literal starting at index i
 */
function skipTemplateLiteral(content: string, startIndex: number): number {
  let i = startIndex + 1;
  while (i < content.length && content[i] !== "`") {
    if (content[i] === "\\" && i + 1 < content.length) {
      i += 1;
    }
    i += 1;
  }
  return i + 1;
}

/**
 * Check if the lookBehind indicates start of a new key
 */
function isKeyStart(lookBehind: string): boolean {
  return (
    lookBehind.endsWith("{") ||
    lookBehind.endsWith(",") ||
    lookBehind.endsWith("\n")
  );
}

/**
 * Add key to list if it's valid (not special or nested property)
 */
function addKeyIfValid(keys: string[], key: string): void {
  if (!(SPECIAL_KEYS.has(key) || NESTED_PROPERTIES.has(key))) {
    keys.push(key);
  }
}

/**
 * Check if a key has an href property (making it an external link)
 */
function keyHasHref(content: string, key: string): boolean {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `["']?${escapedKey}["']?\\s*:\\s*\\{[^}]*href\\s*:`,
    "s"
  );
  return pattern.test(content);
}

/**
 * Check if a key is a separator (type: "separator" or starts with --)
 */
function keyIsSeparator(content: string, key: string): boolean {
  if (key.startsWith("--")) {
    return true;
  }

  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `["']?${escapedKey}["']?\\s*:\\s*\\{[^}]*type\\s*:\\s*["']separator["']`,
    "s"
  );
  return pattern.test(content);
}

/**
 * Get valid sibling names for a _meta.tsx file
 */
function getValidSiblings(metaFilePath: string): Set<string> {
  const dir = dirname(metaFilePath);
  const siblings = new Set<string>();

  try {
    const entries = readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name === "_meta.tsx") {
        continue;
      }

      if (entry.isDirectory()) {
        siblings.add(entry.name);
        continue;
      }

      const isMarkdown =
        entry.name.endsWith(".mdx") || entry.name.endsWith(".md");
      const isPage = entry.name === "page.mdx" || entry.name === "page.md";

      if (isMarkdown && !isPage) {
        siblings.add(entry.name.replace(MDX_EXTENSION_REGEX, ""));
      }
    }
  } catch {
    // Directory doesn't exist or can't be read
  }

  return siblings;
}

/**
 * Validate a single _meta.tsx file
 */
function validateMetaFile(filePath: string): MetaError[] {
  const errors: MetaError[] = [];

  if (!existsSync(filePath)) {
    return errors;
  }

  const content = readFileSync(filePath, "utf-8");
  const keys = extractMetaKeys(content);
  const validSiblings = getValidSiblings(filePath);

  for (const key of keys) {
    if (keyHasHref(content, key) || keyIsSeparator(content, key)) {
      continue;
    }

    if (!validSiblings.has(key)) {
      const suggestions = findSimilarSiblings(key, validSiblings);
      let message = `Key "${key}" does not match any sibling directory or file`;
      if (suggestions.length > 0) {
        message += `. Did you mean: ${suggestions.map((s) => `"${s}"`).join(", ")}?`;
      }
      errors.push({ file: filePath, key, message });
    }
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
  const normalizedKey = key.replace(/[-_]/g, "");
  return [...validSiblings].filter((s) => {
    const normalizedSibling = s.replace(/[-_]/g, "");
    return normalizedKey === normalizedSibling;
  });
}

/**
 * Main function
 */
function main(): void {
  console.log(colors.blue("🔍 Checking _meta.tsx keys...\n"));

  const metaFiles = stagedOnly ? getStagedMetaFiles() : getAllMetaFiles();

  if (metaFiles.length === 0) {
    if (stagedOnly) {
      console.log(colors.dim("No staged _meta.tsx files to check"));
    } else {
      console.log(colors.yellow("No _meta.tsx files found"));
    }
    process.exit(0);
  }

  console.log(
    colors.dim(`Checking ${metaFiles.length} _meta.tsx file(s)...\n`)
  );

  const allErrors: MetaError[] = [];

  for (const file of metaFiles) {
    const errors = validateMetaFile(file);
    allErrors.push(...errors);
  }

  if (allErrors.length === 0) {
    console.log(colors.green("✅ All _meta.tsx keys are valid\n"));
    process.exit(0);
  }

  console.log(colors.red(`❌ Found ${allErrors.length} invalid key(s):\n`));

  for (const error of allErrors) {
    console.log(colors.yellow(`  ${error.file}:`));
    console.log(`    ${error.message}\n`);
  }

  console.log(
    colors.dim(
      "Meta keys must match sibling directories or page files (without extension)."
    )
  );
  console.log(colors.dim("Special keys like *, index, and --- are allowed.\n"));

  process.exit(1);
}

main();
