import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import { describe, expect, test } from "vitest";

const TIMEOUT = 30_000;
const MARKDOWN_DIR = "public/_markdown";

// Regex patterns at module level for performance
const CODE_BLOCK_PATTERN = /```[\s\S]*?```/g;
const APP_PREFIX_PATTERN = /^app\//;
const PAGE_MDX_SUFFIX_PATTERN = /\/page\.mdx$/;
const MARKDOWN_HEADING_PATTERN = /^#{1,6}\s+/;
const FENCE_PREFIX = "```";
const MARKDOWN_CLOSING_FENCE_PATTERN = /^```\s*$/;

const LEGACY_SHELL_HEADING_PATTERNS = [
  /^(#{2,6})\s+Bash\s*$/,
  /^(#{2,6})\s+PowerShell\s*$/,
  /^(#{2,6})\s+Zsh\/Bash\s*$/,
];

const SHELL_HEADING_TO_LANG = {
  "### Bash/Zsh (macOS/Linux)": new Set(["bash", "sh", "shell"]),
  "### PowerShell (Windows)": new Set(["powershell", "pwsh"]),
} as const;

/**
 * Strips fenced code blocks from markdown content
 * so we don't match patterns inside code examples
 */
function stripCodeBlocks(content: string): string {
  return content.replace(CODE_BLOCK_PATTERN, "");
}

/**
 * Converts an MDX file path to its corresponding clean markdown path
 * e.g., app/en/home/page.mdx -> en/home
 */
function mdxPathToRelativePath(mdxFile: string): string {
  return mdxFile
    .replace(APP_PREFIX_PATTERN, "")
    .replace(PAGE_MDX_SUFFIX_PATTERN, "");
}

/**
 * Finds the language of each fenced code block after a heading,
 * stopping at the next heading.
 */
function fenceLanguagesAfterHeading(
  lines: string[],
  headingLineIndex: number
): Array<{ language: string; line: number }> {
  const fenceLanguages: Array<{ language: string; line: number }> = [];
  let insideCodeFence = false;

  for (let i = headingLineIndex + 1; i < lines.length; i += 1) {
    const trimmed = lines[i].trim();
    if (MARKDOWN_HEADING_PATTERN.test(trimmed)) {
      break;
    }
    if (!trimmed.startsWith(FENCE_PREFIX)) {
      continue;
    }

    if (insideCodeFence) {
      if (MARKDOWN_CLOSING_FENCE_PATTERN.test(trimmed)) {
        insideCodeFence = false;
      }
      continue;
    }

    fenceLanguages.push({
      language: trimmed.slice(FENCE_PREFIX.length).trim().toLowerCase(),
      line: i + 1,
    });
    insideCodeFence = true;
  }
  return fenceLanguages;
}

// Patterns that indicate raw MDX syntax leaked into clean markdown
// These are checked OUTSIDE of code blocks only
const MDX_PATTERNS = [
  { pattern: /^import\s+/m, name: "import statement" },
  { pattern: /<Steps>|<\/Steps>/g, name: "<Steps> component" },
  { pattern: /<Tabs[\s>]/g, name: "<Tabs> component" },
  { pattern: /<Callout[\s>]/g, name: "<Callout> component" },
  { pattern: /<GuideOverview[\s>]/g, name: "<GuideOverview> component" },
  { pattern: /<Card[\s>]/g, name: "<Card> component" },
  { pattern: /<Cards[\s>]/g, name: "<Cards> component" },
];

// HTML elements that should be cleaned from markdown
const HTML_PATTERNS = [
  { pattern: /<script[\s>]/gi, name: "<script>" },
  { pattern: /<style[\s>]/gi, name: "<style>" },
  { pattern: /<svg[\s>]/gi, name: "<svg>" },
  { pattern: /<nav[\s>]/gi, name: "<nav>" },
  { pattern: /<footer[\s>]/gi, name: "<footer>" },
  { pattern: /<aside[\s>]/gi, name: "<aside>" },
];

describe("Clean Markdown Files", () => {
  test(
    "every MDX page has a corresponding clean markdown file",
    async () => {
      const mdxFiles = await fg("app/**/page.mdx", {
        ignore: [
          "app/_*/**",
          // Skip dynamic toolkit routes — they render from JSON, not MDX
          "app/**/\\[toolkitId\\]/**",
        ],
      });

      const missing: string[] = [];

      for (const mdxFile of mdxFiles) {
        // Convert app/en/home/page.mdx -> public/_markdown/en/home.md
        const relativePath = mdxPathToRelativePath(mdxFile);
        const markdownPath = path.join(MARKDOWN_DIR, `${relativePath}.md`);

        if (!existsSync(markdownPath)) {
          missing.push(`${mdxFile} -> ${markdownPath}`);
        }
      }

      if (missing.length > 0) {
        console.error("\nMissing clean markdown files:");
        for (const file of missing) {
          console.error(`  - ${file}`);
        }
        console.error(
          "\nRun 'pnpm generate:markdown' to regenerate clean markdown files."
        );
      }

      expect(
        missing.length,
        `${missing.length} MDX files are missing corresponding clean markdown files`
      ).toBe(0);
    },
    TIMEOUT
  );

  test(
    "clean markdown files do not contain raw MDX syntax",
    async () => {
      const markdownFiles = await fg(`${MARKDOWN_DIR}/**/*.md`);
      const errors: Array<{ file: string; issue: string }> = [];

      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");
        // Strip code blocks so we don't match patterns in code examples
        const contentWithoutCode = stripCodeBlocks(content);

        for (const { pattern, name } of MDX_PATTERNS) {
          if (pattern.test(contentWithoutCode)) {
            errors.push({ file, issue: `contains ${name}` });
          }
        }
      }

      if (errors.length > 0) {
        console.error("\nClean markdown files with raw MDX syntax:");
        for (const { file, issue } of errors) {
          console.error(`  - ${file}: ${issue}`);
        }
      }

      expect(
        errors.length,
        `${errors.length} clean markdown files contain raw MDX syntax`
      ).toBe(0);
    },
    TIMEOUT
  );

  test(
    "clean markdown files do not contain unwanted HTML elements",
    async () => {
      const markdownFiles = await fg(`${MARKDOWN_DIR}/**/*.md`);
      const errors: Array<{ file: string; issue: string }> = [];

      for (const file of markdownFiles) {
        const content = readFileSync(file, "utf-8");

        for (const { pattern, name } of HTML_PATTERNS) {
          if (pattern.test(content)) {
            errors.push({ file, issue: `contains ${name}` });
          }
        }
      }

      if (errors.length > 0) {
        console.error("\nClean markdown files with unwanted HTML:");
        for (const { file, issue } of errors) {
          console.error(`  - ${file}: ${issue}`);
        }
      }

      expect(
        errors.length,
        `${errors.length} clean markdown files contain unwanted HTML elements`
      ).toBe(0);
    },
    TIMEOUT
  );

  test(
    "clean markdown files are not stale (modified after source MDX)",
    async () => {
      const mdxFiles = await fg("app/**/page.mdx", {
        ignore: ["app/_*/**"],
      });

      const stale: Array<{ mdx: string; md: string }> = [];

      for (const mdxFile of mdxFiles) {
        const relativePath = mdxPathToRelativePath(mdxFile);
        const markdownPath = path.join(MARKDOWN_DIR, `${relativePath}.md`);

        if (existsSync(markdownPath)) {
          const mdxStat = statSync(mdxFile);
          const mdStat = statSync(markdownPath);

          // If MDX was modified after the markdown, it's stale
          if (mdxStat.mtime > mdStat.mtime) {
            stale.push({ mdx: mdxFile, md: markdownPath });
          }
        }
      }

      if (stale.length > 0) {
        console.error("\nStale clean markdown files (source MDX is newer):");
        for (const { mdx, md } of stale) {
          console.error(`  - ${mdx} is newer than ${md}`);
        }
        console.error(
          "\nRun 'pnpm generate:markdown' to regenerate clean markdown files."
        );
      }

      expect(
        stale.length,
        `${stale.length} clean markdown files are stale and need regeneration`
      ).toBe(0);
    },
    TIMEOUT
  );

  test(
    "clean markdown files use explicit shell headings",
    async () => {
      const markdownFiles = await fg(`${MARKDOWN_DIR}/**/*.md`);
      const errors: Array<{ file: string; line: number; heading: string }> = [];

      for (const file of markdownFiles) {
        const lines = readFileSync(file, "utf-8").split("\n");
        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i].trim();
          for (const pattern of LEGACY_SHELL_HEADING_PATTERNS) {
            if (pattern.test(line)) {
              errors.push({ file, line: i + 1, heading: line });
            }
          }
        }
      }

      if (errors.length > 0) {
        console.error("\nClean markdown files with legacy shell headings:");
        for (const { file, line, heading } of errors) {
          console.error(`  - ${file}:${line} -> ${heading}`);
        }
      }

      expect(
        errors.length,
        `${errors.length} clean markdown headings still use legacy shell labels`
      ).toBe(0);
    },
    TIMEOUT
  );

  test(
    "explicit shell headings map to matching code fence languages",
    async () => {
      const markdownFiles = await fg(`${MARKDOWN_DIR}/**/*.md`);
      const errors: Array<{
        file: string;
        line: number;
        heading: string;
        actual: string | null;
      }> = [];

      for (const file of markdownFiles) {
        const lines = readFileSync(file, "utf-8").split("\n");

        for (let i = 0; i < lines.length; i += 1) {
          const heading = lines[i].trim() as keyof typeof SHELL_HEADING_TO_LANG;
          const expected = SHELL_HEADING_TO_LANG[heading];
          if (!expected) {
            continue;
          }

          const fences = fenceLanguagesAfterHeading(lines, i);

          if (fences.length === 0) {
            errors.push({
              file,
              line: i + 1,
              heading,
              actual: null,
            });
            continue;
          }

          for (const { language, line } of fences) {
            if (!expected.has(language)) {
              errors.push({
                file,
                line,
                heading,
                actual: language,
              });
            }
          }
        }
      }

      if (errors.length > 0) {
        console.error(
          "\nClean markdown files with shell heading/code fence mismatches:"
        );
        for (const { file, line, heading, actual } of errors) {
          console.error(
            `  - ${file}:${line} -> ${heading} expected matching fence, found: ${actual ?? "none"}`
          );
        }
      }

      expect(
        errors.length,
        `${errors.length} shell heading sections have mismatched fence languages`
      ).toBe(0);
    },
    TIMEOUT
  );
});
