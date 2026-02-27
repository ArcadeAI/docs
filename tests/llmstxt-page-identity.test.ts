import { describe, expect, it } from "vitest";
import { toCanonicalSourcePath } from "../scripts/generate-llmstxt";

describe("llms.txt page identity", () => {
  it("maps clean markdown and raw MDX paths to the same canonical source path", () => {
    const fromCleanMarkdown = toCanonicalSourcePath(
      "public/_markdown/en/guides/foo.md"
    );
    const fromRawMdx = toCanonicalSourcePath("app/en/guides/foo/page.mdx");

    expect(fromCleanMarkdown).toBe("app/en/guides/foo/page.mdx");
    expect(fromRawMdx).toBe("app/en/guides/foo/page.mdx");
    expect(fromCleanMarkdown).toBe(fromRawMdx);
  });

  it("normalizes non-page MDX paths to canonical page identity", () => {
    expect(toCanonicalSourcePath("app/en/guides/foo.mdx")).toBe(
      "app/en/guides/foo/page.mdx"
    );
  });
});
