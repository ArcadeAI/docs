import { describe, expect, it, vi } from "vitest";
import {
  fileToUrl,
  urlToFile,
  dynamicFileToUrlPattern,
  dynamicRouteExists,
  pageExists,
  parseDynamicRouteMoves,
  isMoveCoveredByRedirect,
  parseRedirects,
  checkWildcardMatch,
  type DynamicRouteMove,
  type Redirect,
} from "../check-redirects-utils";

describe("fileToUrl", () => {
  it("converts file path to URL path", () => {
    expect(fileToUrl("app/en/guides/foo/page.mdx")).toBe("/:locale/guides/foo");
  });

  it("handles nested paths", () => {
    expect(
      fileToUrl("app/en/resources/integrations/productivity/gmail/page.mdx")
    ).toBe("/:locale/resources/integrations/productivity/gmail");
  });

  it("handles root page", () => {
    expect(fileToUrl("app/en/page.mdx")).toBe("/:locale");
  });

  it("handles .md extension", () => {
    expect(fileToUrl("app/en/guides/foo/page.md")).toBe("/:locale/guides/foo");
  });

  it("handles different locales", () => {
    expect(fileToUrl("app/pt/guides/foo/page.mdx")).toBe("/:locale/guides/foo");
  });
});

describe("urlToFile", () => {
  it("converts URL path to file path", () => {
    expect(urlToFile("/:locale/guides/foo")).toBe("app/en/guides/foo/page.mdx");
  });

  it("handles nested paths", () => {
    expect(urlToFile("/:locale/resources/integrations/productivity/gmail")).toBe(
      "app/en/resources/integrations/productivity/gmail/page.mdx"
    );
  });

  it("handles root URL", () => {
    expect(urlToFile("/:locale")).toBe("app/en/page.mdx");
    expect(urlToFile("/:locale/")).toBe("app/en/page.mdx");
  });
});

describe("dynamicFileToUrlPattern", () => {
  it("converts dynamic route to URL pattern", () => {
    expect(
      dynamicFileToUrlPattern(
        "app/en/resources/integrations/productivity/[toolkitId]/page.mdx"
      )
    ).toBe("/:locale/resources/integrations/productivity/:toolkitId");
  });

  it("handles catch-all routes", () => {
    expect(dynamicFileToUrlPattern("app/en/docs/[...slug]/page.mdx")).toBe(
      "/:locale/docs/:slug*"
    );
  });

  it("handles multiple dynamic segments", () => {
    expect(
      dynamicFileToUrlPattern("app/en/[category]/[id]/page.mdx")
    ).toBe("/:locale/:category/:id");
  });

  it("handles static paths", () => {
    expect(dynamicFileToUrlPattern("app/en/about/page.mdx")).toBe(
      "/:locale/about"
    );
  });

  it("handles root with dynamic segment", () => {
    expect(dynamicFileToUrlPattern("app/en/[slug]/page.mdx")).toBe(
      "/:locale/:slug"
    );
  });
});

describe("dynamicRouteExists", () => {
  it("returns true when dynamic route exists", () => {
    const mockExists = vi.fn((path: string) => {
      return path === "app/en/resources/integrations/productivity/[toolkitId]/page.mdx";
    });

    expect(
      dynamicRouteExists(
        "/:locale/resources/integrations/productivity/gmail",
        mockExists
      )
    ).toBe(true);
  });

  it("returns false when no dynamic route exists", () => {
    const mockExists = vi.fn(() => false);

    expect(
      dynamicRouteExists("/:locale/some/nonexistent/path", mockExists)
    ).toBe(false);
  });

  it("checks multiple dynamic patterns", () => {
    const checkedPaths: string[] = [];
    const mockExists = vi.fn((path: string) => {
      checkedPaths.push(path);
      return false;
    });

    dynamicRouteExists("/:locale/docs/page", mockExists);

    // Should check [toolkitId], [slug], [id], [...slug] for each segment
    expect(checkedPaths).toContain("app/en/docs/[toolkitId]/page.mdx");
    expect(checkedPaths).toContain("app/en/docs/[slug]/page.mdx");
    expect(checkedPaths).toContain("app/en/[toolkitId]/page/page.mdx");
  });

  it("also checks .md extension", () => {
    const mockExists = vi.fn((path: string) => {
      return path === "app/en/docs/[slug]/page.md";
    });

    expect(dynamicRouteExists("/:locale/docs/intro", mockExists)).toBe(true);
  });

  it("returns true when nested dynamic route exists", () => {
    const mockExists = vi.fn((path: string) => {
      // The function checks [toolkitId], [slug], [id], [...slug] patterns
      return path === "app/en/[slug]/test/page.mdx";
    });

    // It should check multiple positions, including replacing the first segment
    expect(dynamicRouteExists("/:locale/guides/test", mockExists)).toBe(true);
  });
});

describe("pageExists", () => {
  it("returns true for paths with :path* wildcard", () => {
    const mockExists = vi.fn(() => false);
    expect(pageExists("/:locale/api/:path*", mockExists)).toBe(true);
    expect(mockExists).not.toHaveBeenCalled();
  });

  it("returns true for paths with :path parameter", () => {
    const mockExists = vi.fn(() => false);
    expect(pageExists("/:locale/docs/:path", mockExists)).toBe(true);
  });

  it("returns true when static page exists", () => {
    const mockExists = vi.fn((path: string) => {
      return path === "app/en/about/page.mdx";
    });

    expect(pageExists("/:locale/about", mockExists)).toBe(true);
  });

  it("returns true when .md page exists", () => {
    const mockExists = vi.fn((path: string) => {
      return path === "app/en/about/page.md";
    });

    expect(pageExists("/:locale/about", mockExists)).toBe(true);
  });

  it("returns true when dynamic route serves the path", () => {
    const mockExists = vi.fn((path: string) => {
      return path === "app/en/resources/[toolkitId]/page.mdx";
    });

    expect(pageExists("/:locale/resources/gmail", mockExists)).toBe(true);
  });

  it("returns false when no page serves the path", () => {
    const mockExists = vi.fn(() => false);
    expect(pageExists("/:locale/nonexistent", mockExists)).toBe(false);
  });
});

describe("parseDynamicRouteMoves", () => {
  it("detects renamed dynamic route files", () => {
    const gitDiff = `R100\tapp/en/old/[toolkitId]/page.mdx\tapp/en/new/[toolkitId]/page.mdx`;

    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(1);
    expect(moves[0]).toEqual({
      oldPath: "app/en/old/[toolkitId]/page.mdx",
      newPath: "app/en/new/[toolkitId]/page.mdx",
      oldUrl: "/:locale/old/:toolkitId",
      newUrl: "/:locale/new/:toolkitId",
    });
  });

  it("ignores moves where URL pattern stays the same", () => {
    // Renaming [id] to [toolkitId] in same location doesn't change URL
    const gitDiff = `R100\tapp/en/resources/[id]/page.mdx\tapp/en/resources/[toolkitId]/page.mdx`;

    const moves = parseDynamicRouteMoves(gitDiff);

    // Both result in /:locale/resources/:id and /:locale/resources/:toolkitId
    // These are different, so it should be detected
    expect(moves).toHaveLength(1);
  });

  it("ignores non-page files", () => {
    const gitDiff = `R100\tapp/en/old/[toolkitId]/index.ts\tapp/en/new/[toolkitId]/index.ts`;

    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(0);
  });

  it("ignores deleted files (D status)", () => {
    const gitDiff = `D\tapp/en/old/[toolkitId]/page.mdx`;

    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(0);
  });

  it("handles multiple moves", () => {
    const gitDiff = [
      `R100\tapp/en/old1/[id]/page.mdx\tapp/en/new1/[id]/page.mdx`,
      `R095\tapp/en/old2/[slug]/page.mdx\tapp/en/new2/[slug]/page.mdx`,
    ].join("\n");

    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(2);
  });

  it("handles empty output", () => {
    expect(parseDynamicRouteMoves("")).toHaveLength(0);
  });

  it("detects when static page moves to dynamic route location", () => {
    const gitDiff = `R100\tapp/en/tools/gmail/page.mdx\tapp/en/tools/[toolkitId]/page.mdx`;

    const moves = parseDynamicRouteMoves(gitDiff);

    expect(moves).toHaveLength(1);
    expect(moves[0].oldUrl).toBe("/:locale/tools/gmail");
    expect(moves[0].newUrl).toBe("/:locale/tools/:toolkitId");
  });
});

describe("isMoveCoveredByRedirect", () => {
  const move: DynamicRouteMove = {
    oldPath: "app/en/old/[toolkitId]/page.mdx",
    newPath: "app/en/new/[toolkitId]/page.mdx",
    oldUrl: "/:locale/old/:toolkitId",
    newUrl: "/:locale/new/:toolkitId",
  };

  it("returns true for exact match", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/old/:toolkitId", destination: "/:locale/new/:toolkitId" },
    ];

    expect(isMoveCoveredByRedirect(move, redirects)).toBe(true);
  });

  it("returns true when wildcard covers the path", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/old/:path*", destination: "/:locale/new/:path*" },
    ];

    expect(isMoveCoveredByRedirect(move, redirects)).toBe(true);
  });

  it("returns false when no redirect covers the move", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/other/:path*", destination: "/:locale/somewhere/:path*" },
    ];

    expect(isMoveCoveredByRedirect(move, redirects)).toBe(false);
  });

  it("returns false for empty redirects", () => {
    expect(isMoveCoveredByRedirect(move, [])).toBe(false);
  });

  it("handles multiple redirects", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/unrelated", destination: "/:locale/other" },
      { source: "/:locale/old/:toolkitId", destination: "/:locale/new/:toolkitId" },
    ];

    expect(isMoveCoveredByRedirect(move, redirects)).toBe(true);
  });
});

describe("parseRedirects", () => {
  it("parses standard format redirects", () => {
    const content = `
      {
        source: "/:locale/old",
        destination: "/:locale/new",
        permanent: true,
      },
    `;

    const redirects = parseRedirects(content);

    expect(redirects).toHaveLength(1);
    expect(redirects[0]).toEqual({
      source: "/:locale/old",
      destination: "/:locale/new",
    });
  });

  it("parses reversed format redirects", () => {
    const content = `
      {
        destination: "/:locale/new",
        source: "/:locale/old",
        permanent: true,
      },
    `;

    const redirects = parseRedirects(content);

    expect(redirects).toHaveLength(1);
    expect(redirects[0]).toEqual({
      source: "/:locale/old",
      destination: "/:locale/new",
    });
  });

  it("parses multiple redirects", () => {
    const content = `
      {
        source: "/:locale/a",
        destination: "/:locale/b",
      },
      {
        source: "/:locale/c",
        destination: "/:locale/d",
      },
    `;

    const redirects = parseRedirects(content);

    expect(redirects).toHaveLength(2);
  });

  it("handles single quotes", () => {
    const content = `
      {
        source: '/:locale/old',
        destination: '/:locale/new',
      },
    `;

    const redirects = parseRedirects(content);

    expect(redirects).toHaveLength(1);
    expect(redirects[0].source).toBe("/:locale/old");
  });

  it("handles empty content", () => {
    expect(parseRedirects("")).toHaveLength(0);
  });
});

describe("checkWildcardMatch", () => {
  it("returns true when wildcard prefix matches", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/old/:path*", destination: "/:locale/new/:path*" },
    ];

    expect(checkWildcardMatch("/:locale/old/foo/bar", redirects)).toBe(true);
  });

  it("returns true for exact prefix match", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/old/:path*", destination: "/:locale/new/:path*" },
    ];

    expect(checkWildcardMatch("/:locale/old", redirects)).toBe(true);
  });

  it("returns false when no wildcard matches", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/other/:path*", destination: "/:locale/new/:path*" },
    ];

    expect(checkWildcardMatch("/:locale/old/foo", redirects)).toBe(false);
  });

  it("ignores non-wildcard redirects", () => {
    const redirects: Redirect[] = [
      { source: "/:locale/old", destination: "/:locale/new" },
    ];

    expect(checkWildcardMatch("/:locale/old/foo", redirects)).toBe(false);
  });

  it("returns false for empty redirects", () => {
    expect(checkWildcardMatch("/:locale/anything", [])).toBe(false);
  });
});
