/**
 * Unit tests for scripts/lib/check-redirects-utils.ts.
 *
 * These cover the pure path/URL helpers behind `bun run check-redirects`, so
 * the mapping between `content/docs/**` files and `/:locale/...` URLs is
 * pinned down without shelling out to git or touching the real filesystem.
 */

import { describe, expect, it, vi } from "vitest";
import {
  CONTENT_FILE_REGEX,
  checkWildcardMatch,
  dynamicFileToUrlPattern,
  dynamicRouteExists,
  fileToUrl,
  isMoveCoveredByRedirect,
  pageExists,
  parseDynamicRouteMoves,
  TOOLKIT_ROUTE_MODULE,
  urlToFile,
  urlToFileCandidates,
} from "../../scripts/lib/check-redirects-utils";

describe("CONTENT_FILE_REGEX", () => {
  it("matches content/docs markdown files only", () => {
    expect(CONTENT_FILE_REGEX.test("content/docs/guides/foo.mdx")).toBe(true);
    expect(CONTENT_FILE_REGEX.test("content/docs/guides/foo/index.mdx")).toBe(
      true
    );
    expect(CONTENT_FILE_REGEX.test("content/docs/guides/foo.md")).toBe(true);
    expect(CONTENT_FILE_REGEX.test("content/docs/guides/meta.json")).toBe(
      false
    );
    expect(CONTENT_FILE_REGEX.test("components/foo.tsx")).toBe(false);
    expect(CONTENT_FILE_REGEX.test("README.md")).toBe(false);
  });
});

describe("fileToUrl", () => {
  it("converts a flat content file to a locale URL", () => {
    expect(fileToUrl("content/docs/guides/foo.mdx")).toBe(
      "/:locale/guides/foo"
    );
  });

  it("converts a folder index file to the folder URL", () => {
    expect(fileToUrl("content/docs/guides/foo/index.mdx")).toBe(
      "/:locale/guides/foo"
    );
  });

  it("handles nested paths", () => {
    expect(
      fileToUrl("content/docs/resources/integrations/productivity/gmail.mdx")
    ).toBe("/:locale/resources/integrations/productivity/gmail");
  });

  it("maps the root index page to the bare locale", () => {
    expect(fileToUrl("content/docs/index.mdx")).toBe("/:locale");
  });

  it("handles .md files", () => {
    expect(fileToUrl("content/docs/guides/foo.md")).toBe("/:locale/guides/foo");
  });

  it("does not treat a page named index-like as the index", () => {
    expect(fileToUrl("content/docs/guides/index-page.mdx")).toBe(
      "/:locale/guides/index-page"
    );
  });
});

describe("urlToFile / urlToFileCandidates", () => {
  it("prefers the flat <path>.mdx form", () => {
    expect(urlToFile("/:locale/guides/foo")).toBe(
      "content/docs/guides/foo.mdx"
    );
  });

  it("lists the flat file, the folder index, and their .md variants", () => {
    expect(urlToFileCandidates("/:locale/guides/foo")).toEqual([
      "content/docs/guides/foo.mdx",
      "content/docs/guides/foo/index.mdx",
      "content/docs/guides/foo.md",
      "content/docs/guides/foo/index.md",
    ]);
  });

  it("handles nested paths", () => {
    expect(
      urlToFile("/:locale/resources/integrations/productivity/gmail")
    ).toBe("content/docs/resources/integrations/productivity/gmail.mdx");
  });

  it("maps the bare locale to the root index page", () => {
    expect(urlToFile("/:locale")).toBe("content/docs/index.mdx");
    expect(urlToFile("/:locale/")).toBe("content/docs/index.mdx");
  });
});

describe("dynamicFileToUrlPattern", () => {
  it("converts [param] to :param", () => {
    expect(
      dynamicFileToUrlPattern(
        "content/docs/resources/integrations/productivity/[toolkitId].mdx"
      )
    ).toBe("/:locale/resources/integrations/productivity/:toolkitId");
  });

  it("converts [...param] to :param*", () => {
    expect(
      dynamicFileToUrlPattern("content/docs/docs/[...slug]/index.mdx")
    ).toBe("/:locale/docs/:slug*");
  });

  it("handles multiple dynamic segments", () => {
    expect(
      dynamicFileToUrlPattern("content/docs/[category]/[id]/index.mdx")
    ).toBe("/:locale/:category/:id");
  });

  it("returns a plain URL when there are no dynamic segments", () => {
    expect(dynamicFileToUrlPattern("content/docs/about.mdx")).toBe(
      "/:locale/about"
    );
  });
});

describe("dynamicRouteExists", () => {
  it("recognizes a toolkit URL when the toolkit route module exists", () => {
    const mockExists = vi.fn((path: string) => path === TOOLKIT_ROUTE_MODULE);

    expect(
      dynamicRouteExists(
        "/:locale/resources/integrations/productivity/gmail",
        mockExists
      )
    ).toBe(true);
    expect(mockExists).toHaveBeenCalledWith("lib/toolkit-route.tsx");
  });

  it("returns false for a toolkit URL when the route module is missing", () => {
    expect(
      dynamicRouteExists(
        "/:locale/resources/integrations/productivity/gmail",
        () => false
      )
    ).toBe(false);
  });

  it("returns false for URLs outside resources/integrations/<category>/<id>", () => {
    const always = () => true;
    expect(dynamicRouteExists("/:locale/guides/foo", always)).toBe(false);
    expect(
      dynamicRouteExists("/:locale/resources/integrations/productivity", always)
    ).toBe(false);
    expect(
      dynamicRouteExists(
        "/:locale/resources/integrations/productivity/gmail/extra",
        always
      )
    ).toBe(false);
  });
});

describe("pageExists", () => {
  it("returns true for wildcard paths", () => {
    expect(pageExists("/:locale/guides/:path*", () => false)).toBe(true);
    expect(pageExists("/:locale/guides/:path", () => false)).toBe(true);
  });

  it("returns true when the flat .mdx file exists", () => {
    const mockExists = vi.fn(
      (path: string) => path === "content/docs/about.mdx"
    );
    expect(pageExists("/:locale/about", mockExists)).toBe(true);
  });

  it("returns true when the folder index.mdx exists", () => {
    const mockExists = vi.fn(
      (path: string) => path === "content/docs/about/index.mdx"
    );
    expect(pageExists("/:locale/about", mockExists)).toBe(true);
  });

  it("returns true when the .md file exists", () => {
    const mockExists = vi.fn(
      (path: string) => path === "content/docs/about.md"
    );
    expect(pageExists("/:locale/about", mockExists)).toBe(true);
  });

  it("falls back to the toolkit route for toolkit URLs", () => {
    const mockExists = vi.fn((path: string) => path === TOOLKIT_ROUTE_MODULE);
    expect(
      pageExists(
        "/:locale/resources/integrations/development/github",
        mockExists
      )
    ).toBe(true);
  });

  it("returns false when nothing matches", () => {
    expect(pageExists("/:locale/nonexistent", () => false)).toBe(false);
  });
});

describe("parseDynamicRouteMoves", () => {
  it("detects a renamed dynamic route content file", () => {
    const gitDiff =
      "R100\tcontent/docs/old/[toolkitId].mdx\tcontent/docs/new/[toolkitId].mdx";
    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(1);
    expect(moves[0]).toEqual({
      newPath: "content/docs/new/[toolkitId].mdx",
      newUrl: "/:locale/new/:toolkitId",
      oldPath: "content/docs/old/[toolkitId].mdx",
      oldUrl: "/:locale/old/:toolkitId",
    });
  });

  it("detects a changed parameter name", () => {
    const gitDiff =
      "R100\tcontent/docs/resources/[id].mdx\tcontent/docs/resources/[toolkitId].mdx";
    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(1);
    expect(moves[0].oldUrl).toBe("/:locale/resources/:id");
    expect(moves[0].newUrl).toBe("/:locale/resources/:toolkitId");
  });

  it("ignores non-content renames", () => {
    const gitDiff =
      "R100\tcomponents/old/[toolkitId]/index.ts\tcomponents/new/[toolkitId]/index.ts";
    expect(parseDynamicRouteMoves(gitDiff)).toHaveLength(0);
  });

  it("ignores deletions", () => {
    const gitDiff = "D\tcontent/docs/old/[toolkitId].mdx";
    expect(parseDynamicRouteMoves(gitDiff)).toHaveLength(0);
  });

  it("handles multiple renames", () => {
    const gitDiff = [
      "R100\tcontent/docs/old1/[id].mdx\tcontent/docs/new1/[id].mdx",
      "R095\tcontent/docs/old2/[slug].mdx\tcontent/docs/new2/[slug].mdx",
      "M\tcontent/docs/other.mdx",
    ].join("\n");
    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(2);
    expect(moves[0].oldUrl).toBe("/:locale/old1/:id");
    expect(moves[1].oldUrl).toBe("/:locale/old2/:slug");
  });

  it("detects a static page moving under a dynamic route", () => {
    const gitDiff =
      "R100\tcontent/docs/tools/gmail.mdx\tcontent/docs/tools/[toolkitId].mdx";
    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(1);
    expect(moves[0].oldUrl).toBe("/:locale/tools/gmail");
    expect(moves[0].newUrl).toBe("/:locale/tools/:toolkitId");
  });
});

describe("isMoveCoveredByRedirect", () => {
  const move = {
    newPath: "content/docs/new/[toolkitId].mdx",
    newUrl: "/:locale/new/:toolkitId",
    oldPath: "content/docs/old/[toolkitId].mdx",
    oldUrl: "/:locale/old/:toolkitId",
  };

  it("matches an exact source", () => {
    expect(
      isMoveCoveredByRedirect(move, [
        { destination: "/:locale/new", source: "/:locale/old/:toolkitId" },
      ])
    ).toBe(true);
  });

  it("matches a wildcard covering the old path", () => {
    expect(
      isMoveCoveredByRedirect(move, [
        { destination: "/:locale/new/:path*", source: "/:locale/old/:path*" },
      ])
    ).toBe(true);
  });

  it("returns false when no redirect covers the move", () => {
    expect(
      isMoveCoveredByRedirect(move, [
        { destination: "/:locale/x/:path*", source: "/:locale/other/:path*" },
      ])
    ).toBe(false);
  });
});

describe("checkWildcardMatch", () => {
  const redirects = [
    { destination: "/:locale/build/:path*", source: "/:locale/guides/:path*" },
    { destination: "/:locale/other", source: "/:locale/exact" },
  ];

  it("matches a path under a wildcard prefix", () => {
    expect(checkWildcardMatch("/:locale/guides/foo/bar", redirects)).toBe(true);
  });

  it("matches the wildcard prefix itself", () => {
    expect(checkWildcardMatch("/:locale/guides", redirects)).toBe(true);
  });

  it("does not match exact (non-wildcard) redirects", () => {
    expect(checkWildcardMatch("/:locale/exact", redirects)).toBe(false);
  });

  it("does not match a sibling prefix", () => {
    expect(checkWildcardMatch("/:locale/guides-old/foo", redirects)).toBe(
      false
    );
  });
});
