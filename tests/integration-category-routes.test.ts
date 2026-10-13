import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test, vi } from "vitest";
import { matchToolkitRoute } from "@/lib/toolkit-route";
import { INTEGRATION_CATEGORIES } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import { CONTENT_ROOT } from "./helpers/content-paths";

// lib/toolkit-route.tsx also exports the page renderer, which pulls the
// toolkit UI (browser-only at module scope) and the fumadocs source into the
// module graph. Only the pure `matchToolkitRoute` is under test here.
vi.mock("@/components/toolkit-docs", () => ({ ToolkitPage: () => null }));
vi.mock("@/lib/source", () => ({ source: { getPage: () => undefined } }));

const INTEGRATIONS_CONTENT_DIR = join(
  CONTENT_ROOT,
  "resources",
  "integrations"
);

/**
 * normalizeCategory (lib/toolkit-static-params.ts) trusts that every value in
 * INTEGRATION_CATEGORIES is a real category: the toolkit route
 * (lib/toolkit-route.tsx) must accept it, and the sidebar must have a
 * generated `content/docs/resources/integrations/<category>/meta.json` (from
 * toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts) so the category's
 * toolkits are reachable from navigation. If a category is ever added to that
 * list without the matching nav file (or a file is removed/renamed), toolkits
 * in that category become clickable catalog cards pointing at a route no
 * sidebar links to — the same class of bug the "others" catch-all used to
 * hide, since tests/integration-index-links.test.ts derives its notion of
 * "valid link" from the same normalizeCategory output and can't see this gap.
 */
const missingCategoryMeta = (baseDir: string): string[] =>
  INTEGRATION_CATEGORIES.filter(
    (category) => !existsSync(join(baseDir, category, "meta.json"))
  );

describe("integration category routes", () => {
  test("every INTEGRATION_CATEGORIES value is accepted by the toolkit route", () => {
    for (const category of INTEGRATION_CATEGORIES) {
      expect(
        matchToolkitRoute(["resources", "integrations", category, "example"])
      ).toEqual({ category, toolkitId: "example" });
    }
  });

  test("the toolkit route ignores non-toolkit slugs", () => {
    expect(matchToolkitRoute(undefined)).toBeNull();
    expect(matchToolkitRoute(["resources", "integrations"])).toBeNull();
    expect(matchToolkitRoute(["build", "tools", "x", "y"])).toBeNull();
  });

  test("every INTEGRATION_CATEGORIES value has a generated sidebar meta.json", () => {
    expect(missingCategoryMeta(INTEGRATIONS_CONTENT_DIR)).toEqual([]);
  });

  test("the check fails when a category's meta.json is missing", () => {
    // Proves the check above actually catches drift, without touching any
    // tracked directory: build a scratch tree with every category present,
    // then remove one and confirm it's flagged.
    const scratchDir = mkdtempSync(join(tmpdir(), "integration-categories-"));
    try {
      for (const category of INTEGRATION_CATEGORIES) {
        mkdirSync(join(scratchDir, category), { recursive: true });
        writeFileSync(
          join(scratchDir, category, "meta.json"),
          JSON.stringify({ pages: [] })
        );
      }

      const [removedCategory] = INTEGRATION_CATEGORIES;
      rmSync(join(scratchDir, removedCategory, "meta.json"), { force: true });

      expect(missingCategoryMeta(scratchDir)).toEqual([removedCategory]);
    } finally {
      rmSync(scratchDir, { force: true, recursive: true });
    }
  });
});
