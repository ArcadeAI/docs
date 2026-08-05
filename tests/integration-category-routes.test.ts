import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { INTEGRATION_CATEGORIES } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

const INTEGRATIONS_APP_DIR = join(
  process.cwd(),
  "app",
  "en",
  "resources",
  "integrations"
);

/**
 * normalizeCategory (app/_lib/toolkit-static-params.ts) trusts that every
 * value in INTEGRATION_CATEGORIES has a real `[toolkitId]` route directory
 * to route toolkits into. If a category is ever added to that list without
 * the matching directory (or a directory is removed/renamed), toolkits in
 * that category become clickable catalog cards pointing at a route that
 * 404s — the same class of bug the "others" catch-all used to hide, since
 * tests/integration-index-links.test.ts derives its notion of "valid link"
 * from the same normalizeCategory output and can't see this gap.
 */
const missingCategoryDirs = (baseDir: string): string[] =>
  INTEGRATION_CATEGORIES.filter(
    (category) => !existsSync(join(baseDir, category, "[toolkitId]"))
  );

describe("integration category route directories", () => {
  test("every INTEGRATION_CATEGORIES value has a matching [toolkitId] route directory", () => {
    expect(missingCategoryDirs(INTEGRATIONS_APP_DIR)).toEqual([]);
  });

  test("the check fails when a category's route directory is missing", () => {
    // Proves the check above actually catches drift, without touching any
    // tracked directory: build a scratch tree with every category present,
    // then remove one and confirm it's flagged.
    const scratchDir = mkdtempSync(join(tmpdir(), "integration-categories-"));
    try {
      for (const category of INTEGRATION_CATEGORIES) {
        mkdirSync(join(scratchDir, category, "[toolkitId]"), {
          recursive: true,
        });
      }

      const removedCategory = INTEGRATION_CATEGORIES[0];
      rmSync(join(scratchDir, removedCategory, "[toolkitId]"), {
        recursive: true,
        force: true,
      });

      expect(missingCategoryDirs(scratchDir)).toEqual([removedCategory]);
    } finally {
      rmSync(scratchDir, { recursive: true, force: true });
    }
  });
});
