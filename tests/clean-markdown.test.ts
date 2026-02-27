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
const MARKDOWN_PREFIX_PATTERN = /^public\/_markdown\//;
const MARKDOWN_FILE_SUFFIX_PATTERN = /\.md$/;
const CI_ENV = process.env.CI === "true";

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

async function getExpectedMarkdownTargets(): Promise<string[]> {
  const mdxFiles = await fg("app/**/page.mdx", {
    ignore: [
      "app/_*/**",
      // Skip dynamic toolkit routes — they render from JSON, not MDX
      "app/**/\\[toolkitId\\]/**",
    ],
  });

  return mdxFiles.map((mdxFile) =>
    path.join(MARKDOWN_DIR, `${mdxPathToRelativePath(mdxFile)}.md`)
  );
}

function getGeneratedMarkdownFiles(): Promise<string[]> {
  return fg(`${MARKDOWN_DIR}/**/*.md`);
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
      const expectedMarkdownTargets = await getExpectedMarkdownTargets();
      const generatedMarkdownFiles = await getGeneratedMarkdownFiles();

      if (generatedMarkdownFiles.length === 0) {
        if (CI_ENV) {
          throw new Error(
            "No generated clean markdown files found in CI. Ensure markdown generation runs before tests."
          );
        }

        expect(expectedMarkdownTargets.length).toBeGreaterThan(0);
        return;
      }

      const missing = expectedMarkdownTargets.filter(
        (targetPath) => !existsSync(targetPath)
      );

      if (missing.length > 0) {
        console.error("\nMissing clean markdown files:");
        for (const markdownPath of missing) {
          const mdxPath = markdownPath
            .replace(MARKDOWN_PREFIX_PATTERN, "app/")
            .replace(MARKDOWN_FILE_SUFFIX_PATTERN, "/page.mdx");
          console.error(`  - ${mdxPath} -> ${markdownPath}`);
        }
        console.error(
          "\nRun 'pnpm generate:markdown' to regenerate clean markdown files."
        );

        if (!CI_ENV) {
          return;
        }
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
      const markdownFiles = await getGeneratedMarkdownFiles();
      if (markdownFiles.length === 0) {
        if (CI_ENV) {
          throw new Error(
            "No generated clean markdown files found in CI. Ensure markdown generation runs before tests."
          );
        }
        return;
      }
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
      const markdownFiles = await getGeneratedMarkdownFiles();
      if (markdownFiles.length === 0) {
        if (CI_ENV) {
          throw new Error(
            "No generated clean markdown files found in CI. Ensure markdown generation runs before tests."
          );
        }
        return;
      }
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
      const markdownFiles = await getGeneratedMarkdownFiles();
      if (markdownFiles.length === 0) {
        if (CI_ENV) {
          throw new Error(
            "No generated clean markdown files found in CI. Ensure markdown generation runs before tests."
          );
        }
        return;
      }

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
});
