/**
 * Smoke test for lib/toolkit-route.tsx, the catch-all route's fallback for
 * toolkit pages rendered from toolkit-docs-generator/data/toolkits.
 *
 * Run with: bunx vitest run toolkit-docs-generator/tests/scripts/toolkit-route.test.ts
 */

import { describe, expect, it, vi } from "vitest";

// The route module renders the client-only toolkit UI (design-system
// components need a DOM) inside Fumadocs page chrome. The pure routing,
// param and metadata logic under test does not, so stub both boundaries.
vi.mock("../../../components/toolkit-docs", () => ({
  ToolkitPage: () => null,
}));
vi.mock("fumadocs-ui/layouts/docs/page", () => ({
  DocsPage: () => null,
}));
// The Fumadocs source imports compiled MDX, which Vitest cannot load without
// the fumadocs-mdx plugin; the route only asks it whether an MDX page already
// owns a slug, and no authored page collides with a generated toolkit.
vi.mock("../../../lib/source", () => ({
  source: { getPage: () => undefined },
}));

import {
  generateToolkitParams,
  matchToolkitRoute,
  toolkitRouteMetadata,
} from "../../../lib/toolkit-route";
import { listToolkitRoutes } from "../../../lib/toolkit-static-params";
import { INTEGRATION_CATEGORIES } from "../../src/shared/toolkit-primitives";

describe("matchToolkitRoute", () => {
  it("matches resources/integrations/<category>/<toolkitId>", () => {
    expect(
      matchToolkitRoute(["resources", "integrations", "productivity", "gmail"])
    ).toEqual({ category: "productivity", toolkitId: "gmail" });
  });

  it("rejects other slugs", () => {
    expect(matchToolkitRoute(undefined)).toBeNull();
    expect(matchToolkitRoute([])).toBeNull();
    expect(matchToolkitRoute(["resources", "integrations"])).toBeNull();
    expect(
      matchToolkitRoute(["resources", "integrations", "productivity"])
    ).toBeNull();
    expect(
      matchToolkitRoute(["guides", "integrations", "productivity", "gmail"])
    ).toBeNull();
    expect(
      matchToolkitRoute(["resources", "integrations", "a", "b", "c"])
    ).toBeNull();
  });
});

describe("generateToolkitParams", () => {
  it("emits one four-segment slug per generated toolkit route", async () => {
    const [params, routes] = await Promise.all([
      generateToolkitParams(),
      listToolkitRoutes(),
    ]);

    expect(routes.length).toBeGreaterThan(0);
    expect(params).toHaveLength(routes.length);
    for (const { slug } of params) {
      expect(slug).toHaveLength(4);
      expect(slug.slice(0, 2)).toEqual(["resources", "integrations"]);
      expect(INTEGRATION_CATEGORIES).toContain(slug[2]);
    }
    // Partner pages are authored MDX, never generated params.
    expect(params.map(({ slug }) => slug.join("/"))).not.toContain(
      "resources/integrations/search/tavily"
    );
  });
});

describe("toolkitRouteMetadata", () => {
  it("returns null for an unknown toolkit", async () => {
    expect(
      await toolkitRouteMetadata({
        category: "productivity",
        toolkitId: "does-not-exist",
      })
    ).toBeNull();
  });

  it("canonicalizes to the toolkit's own category", async () => {
    const [route] = await listToolkitRoutes();
    if (!route) {
      throw new Error("Expected at least one generated toolkit route");
    }
    const wrongCategory = INTEGRATION_CATEGORIES.find(
      (category) => category !== route.category
    );

    const metadata = await toolkitRouteMetadata({
      category: wrongCategory ?? route.category,
      toolkitId: route.toolkitId,
    });

    expect(metadata).not.toBeNull();
    expect(metadata?.title).toBeTruthy();
    expect(metadata?.alternates?.canonical).toBe(
      `/en/resources/integrations/${route.category}/${route.toolkitId}`
    );
  });
});
