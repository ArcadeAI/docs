import { existsSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import { describe, expect, test } from "vitest";

const TIMEOUT = 30_000;

// Regex patterns at top level for performance
const APP_PREFIX_REGEX = /^app/;
const PAGE_MDX_SUFFIX_REGEX = /\/page\.mdx$/;
const PAGE_MD_SUFFIX_REGEX = /\/page\.md$/;
const MD_SUFFIX_REGEX = /\.md$/;
const MDX_SUFFIX_REGEX = /\.mdx$/;
const LOCALE_REGEX = /^app\/([a-z]{2}(?:-[A-Z]{2})?)\//;

/**
 * Converts a URL pathname to the expected markdown alternate path.
 * This mirrors the logic in app/layout.tsx
 */
function getMarkdownAlternatePath(pathname: string): string {
  if (pathname === "/" || pathname === "") {
    return "/index.md";
  }
  const cleanPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return `${cleanPath}.md`;
}

/**
 * Converts a page.mdx file path to its URL pathname.
 * e.g., "app/en/guides/quickstart/page.mdx" -> "/en/guides/quickstart"
 */
function filePathToUrlPath(filePath: string): string {
  return filePath
    .replace(APP_PREFIX_REGEX, "")
    .replace(PAGE_MDX_SUFFIX_REGEX, "")
    .replace(PAGE_MD_SUFFIX_REGEX, "");
}

/**
 * Converts a markdown alternate URL to the expected page file path.
 * e.g., "/en/guides/quickstart.md" -> "app/en/guides/quickstart/page.mdx"
 */
function markdownUrlToFilePath(mdUrl: string): string {
  const pathWithoutMd = mdUrl.replace(MD_SUFFIX_REGEX, "");
  return `app${pathWithoutMd}/page.mdx`;
}

describe("Markdown alternate link", () => {
  test(
    "getMarkdownAlternatePath generates correct paths",
    () => {
      // Test root path
      expect(getMarkdownAlternatePath("/")).toBe("/index.md");
      expect(getMarkdownAlternatePath("")).toBe("/index.md");

      // Test normal paths
      expect(getMarkdownAlternatePath("/en/home")).toBe("/en/home.md");
      expect(getMarkdownAlternatePath("/en/guides/quickstart")).toBe(
        "/en/guides/quickstart.md"
      );

      // Test paths with trailing slash
      expect(getMarkdownAlternatePath("/en/home/")).toBe("/en/home.md");

      // Test deep nested paths
      expect(
        getMarkdownAlternatePath(
          "/en/guides/tool-calling/call-third-party-apis"
        )
      ).toBe("/en/guides/tool-calling/call-third-party-apis.md");
    },
    TIMEOUT
  );

  test(
    "every page has a valid markdown alternate path that maps to a real page",
    async () => {
      // Find all page files
      const pageFiles = await fg("app/**/page.{md,mdx}");
      const errors: Array<{ urlPath: string; mdPath: string; reason: string }> =
        [];

      for (const file of pageFiles) {
        const urlPath = filePathToUrlPath(file);
        const mdAlternatePath = getMarkdownAlternatePath(urlPath);
        const expectedPageFile = markdownUrlToFilePath(mdAlternatePath);

        // Verify the page file exists
        if (!existsSync(join(process.cwd(), expectedPageFile))) {
          // Also check for .md extension instead of .mdx
          const mdPageFile = expectedPageFile.replace(MDX_SUFFIX_REGEX, ".md");
          if (!existsSync(join(process.cwd(), mdPageFile))) {
            errors.push({
              urlPath,
              mdPath: mdAlternatePath,
              reason: `Expected page file not found: ${expectedPageFile}`,
            });
          }
        }
      }

      for (const error of errors) {
        console.error(
          `Invalid markdown alternate: ${error.urlPath} -> ${error.mdPath} (${error.reason})`
        );
      }

      expect(errors.length).toBe(0);
    },
    TIMEOUT
  );

  test(
    "markdown alternate paths are correctly formed for all locales",
    async () => {
      // Find all page files and group by locale
      const pageFiles = await fg("app/**/page.{md,mdx}");
      const locales = new Set<string>();

      for (const file of pageFiles) {
        const match = file.match(LOCALE_REGEX);
        if (match) {
          locales.add(match[1]);
        }
      }

      // Verify each locale has pages and they all get .md extensions
      expect(locales.size).toBeGreaterThan(0);

      for (const locale of locales) {
        const localePages = pageFiles.filter((f) =>
          f.startsWith(`app/${locale}/`)
        );
        expect(localePages.length).toBeGreaterThan(0);

        // Verify all pages in this locale get correct .md paths
        for (const page of localePages) {
          const urlPath = filePathToUrlPath(page);
          const mdPath = getMarkdownAlternatePath(urlPath);

          expect(mdPath).toMatch(MD_SUFFIX_REGEX);
          expect(mdPath).toContain(`/${locale}/`);
        }
      }
    },
    TIMEOUT
  );
});
