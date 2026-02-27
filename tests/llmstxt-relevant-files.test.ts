import { describe, expect, it } from "vitest";
import { determinePagesToSummarize } from "../scripts/generate-llmstxt";

function createPage(slug: string) {
  return {
    path: `public/_markdown/en/${slug}.md`,
    sourcePath: `app/en/${slug}/page.mdx`,
    urlKey: `https://docs.arcade.dev/en/${slug}.md`,
    url: `https://docs.arcade.dev/en/${slug}.md`,
    content: `# ${slug}`,
  };
}

describe("llms.txt relevant changed-file selection", () => {
  it("re-summarizes only pages affected by relevant doc changes", () => {
    const fooPage = createPage("guides/foo");
    const barPage = createPage("guides/bar");
    const existingSummaries = new Map([
      [fooPage.urlKey, { title: "Foo", description: "Foo description" }],
      [barPage.urlKey, { title: "Bar", description: "Bar description" }],
    ]);

    const result = determinePagesToSummarize(
      [fooPage, barPage],
      { gitSha: "abc123", generationDate: "2026-01-01T00:00:00.000Z" },
      existingSummaries,
      {
        changedFiles: new Set([
          "README.md",
          "package.json",
          "app/en/guides/foo/page.mdx",
        ]),
      }
    );

    expect(result.pagesToSummarize.map((page) => page.sourcePath)).toEqual([
      "app/en/guides/foo/page.mdx",
    ]);
    expect(result.pagesToKeep.map((page) => page.sourcePath)).toEqual([
      "app/en/guides/bar/page.mdx",
    ]);
    expect(result.hasChanges).toBe(true);
  });

  it("preserves URL-based deletion handling when previous URLs disappear", () => {
    const fooPage = createPage("guides/foo");
    const existingSummaries = new Map([
      [fooPage.urlKey, { title: "Foo", description: "Foo description" }],
      [
        "https://docs.arcade.dev/en/guides/removed.md",
        { title: "Removed", description: "Removed description" },
      ],
    ]);

    const result = determinePagesToSummarize(
      [fooPage],
      { gitSha: "abc123", generationDate: "2026-01-01T00:00:00.000Z" },
      existingSummaries,
      {
        changedFiles: new Set(["README.md"]),
      }
    );

    expect(result.pagesToSummarize).toHaveLength(0);
    expect(result.pagesToKeep).toHaveLength(1);
    expect(result.hasChanges).toBe(true);
  });
});
