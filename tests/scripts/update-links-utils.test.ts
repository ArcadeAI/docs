import { describe, expect, it } from "vitest";
import {
  getUpdatableRedirects,
  updateLinksInContent,
} from "@/scripts/lib/update-links-utils";

describe("getUpdatableRedirects", () => {
  it("keeps plain page redirects", () => {
    const result = getUpdatableRedirects([
      { destination: "/:locale/new", source: "/:locale/old" },
    ]);
    expect(result).toHaveLength(1);
  });

  it("skips wildcard, parameterised and placeholder redirects", () => {
    const result = getUpdatableRedirects([
      {
        destination: "/:locale/b/:path*",
        source: "/:locale/a/:path*",
      },
      {
        destination: "/:locale/b/:id",
        source: "/:locale/a/:id",
      },
      {
        destination: "REPLACE_WITH_NEW_PATH",
        source: "/:locale/a",
      },
    ]);
    expect(result).toHaveLength(0);
  });

  it("skips locale-root redirects, whose empty path would match every link and backtick pair", () => {
    const result = getUpdatableRedirects([
      { destination: "/:locale/home", source: "/:locale" },
      { destination: "/:locale/home", source: "/:locale/" },
    ]);
    expect(result).toHaveLength(0);
  });
});

describe("updateLinksInContent", () => {
  it("rewrites markdown, JSX and backtick references to the old path", () => {
    const input = [
      "See [guide](/old-path) and [section](/old-path#intro).",
      '<Link href="/old-path">x</Link>',
      "<a href='/old-path#x'>y</a>",
      "Visit `/old-path` for details.",
    ].join("\n");
    const output = updateLinksInContent(input, "/old-path", "/new-path");
    expect(output).toBe(
      [
        "See [guide](/new-path) and [section](/new-path#intro).",
        '<Link href="/new-path">x</Link>',
        "<a href='/new-path#x'>y</a>",
        "Visit `/new-path` for details.",
      ].join("\n")
    );
  });

  it("leaves code fences and same-page anchors alone", () => {
    const input = "```bash\nls\n```\n\n[top](#top)\n";
    expect(updateLinksInContent(input, "/old-path", "/new-path")).toBe(input);
  });
});
