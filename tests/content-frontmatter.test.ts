import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";
import {
  listContentFiles,
  readFrontmatterValue,
  stripFrontmatter,
} from "./helpers/content-paths";

/**
 * Fumadocs renders the frontmatter `title` as the page heading (<DocsTitle>)
 * and uses it for the sidebar label and <title>. A page without one renders an
 * empty heading and an unnamed sidebar entry, and a body that still opens with
 * a `# Title` H1 renders the heading twice. Nextra pages used to carry the H1
 * in the body; the migration moved it into frontmatter.
 */

const IMPORT_LINE_REGEX = /^import\s[^\n]*$/;
const H1_REGEX = /^#\s+(.+?)\s*#*\s*$/;
const INLINE_CODE_REGEX = /`/g;
const WHITESPACE_REGEX = /\s+/g;

const normalizeHeading = (value: string): string =>
  value
    .replace(INLINE_CODE_REGEX, "")
    .replace(WHITESPACE_REGEX, " ")
    .trim()
    .toLowerCase();

/** First non-empty, non-import line of the MDX body. */
const firstBodyLine = (content: string): string | null => {
  for (const line of stripFrontmatter(content).split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || IMPORT_LINE_REGEX.test(trimmed)) {
      continue;
    }
    return trimmed;
  }
  return null;
};

describe("content/docs frontmatter", () => {
  test("every page declares a non-empty title", async () => {
    const files = await listContentFiles();
    expect(files.length).toBeGreaterThan(0);

    const missing = files.filter((file) => {
      const title = readFrontmatterValue(readFileSync(file, "utf-8"), "title");
      return !title;
    });

    for (const file of missing) {
      console.error(`${file}: missing frontmatter "title"`);
    }
    expect(missing).toEqual([]);
  });

  test("no page body opens with an H1 that duplicates its title", async () => {
    const files = await listContentFiles();

    const duplicates = files.filter((file) => {
      const content = readFileSync(file, "utf-8");
      const title = readFrontmatterValue(content, "title");
      const first = firstBodyLine(content);
      if (!(title && first)) {
        return false;
      }
      const h1 = H1_REGEX.exec(first)?.[1];
      return (
        h1 !== undefined && normalizeHeading(h1) === normalizeHeading(title)
      );
    });

    for (const file of duplicates) {
      console.error(
        `${file}: body starts with an H1 equal to the frontmatter title; Fumadocs already renders the title, so remove the H1`
      );
    }
    expect(duplicates).toEqual([]);
  });
});
