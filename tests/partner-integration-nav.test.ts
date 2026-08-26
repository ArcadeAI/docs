import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MetaRecord } from "nextra";
import { describe, expect, test } from "vitest";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import {
  getToolkitSlug,
  INTEGRATION_CATEGORIES,
} from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

/**
 * Partner integrations are hand-authored pages that no toolkit JSON file backs,
 * so they are invisible to the docs generator's own data. `PARTNER_TOOLKITS`
 * is what both the catalog cards and the category sidebar are built from, and
 * these assertions are what keeps that list honest: adding a partner there
 * without writing the page, or writing a page whose slug doesn't match, fails
 * here instead of shipping a sidebar link to a 404.
 *
 * The sidebar entries themselves are generated (see
 * toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts), so a missing entry
 * below means someone hand-edited a `_meta.tsx` and skipped the sync, or the
 * sync ran against a partner list the committed nav predates.
 */

const INTEGRATIONS_DIR = join(process.cwd(), "app/en/resources/integrations");
const INTEGRATIONS_BASE_PATH = "/en/resources/integrations";
const PAGE_FILE_NAMES = ["page.mdx", "page.tsx"];

const partnerCases = PARTNER_TOOLKITS.map((partner) => ({
  partner,
  slug: getToolkitSlug({
    id: partner.id,
    docsLink: partner.relativeDocsLink ?? partner.docsLink ?? null,
  }),
}));

const loadCategoryMeta = async (category: string): Promise<MetaRecord> => {
  const meta = await import(join(INTEGRATIONS_DIR, category, "_meta.tsx"));
  return meta.default as MetaRecord;
};

describe("partner integrations", () => {
  test("there is at least one partner to check", () => {
    expect(partnerCases.length).toBeGreaterThan(0);
  });

  test.each(partnerCases)(
    "$partner.id has a routable category",
    ({ partner }) => {
      expect(INTEGRATION_CATEGORIES).toContain(partner.category);
    }
  );

  test.each(partnerCases)(
    "$partner.id has a page on disk",
    ({ partner, slug }) => {
      const pageDir = join(INTEGRATIONS_DIR, partner.category, slug);
      const hasPage = PAGE_FILE_NAMES.some((fileName) =>
        existsSync(join(pageDir, fileName))
      );

      expect(
        hasPage,
        `Expected a page for partner "${partner.id}" at ${pageDir}/page.mdx`
      ).toBe(true);
    }
  );

  test.each(partnerCases)(
    "$partner.id has a sidebar entry pointing at its page",
    async ({ partner, slug }) => {
      const meta = await loadCategoryMeta(partner.category);
      const entry = meta[slug];

      expect(
        entry,
        `Expected a "${slug}" key in app/en/resources/integrations/${partner.category}/_meta.tsx. ` +
          "Run `npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts` to regenerate it."
      ).toBeDefined();
      expect(entry).toMatchObject({
        title: partner.label,
        href: `${INTEGRATIONS_BASE_PATH}/${partner.category}/${slug}`,
      });
    }
  );

  test.each(partnerCases)(
    "$partner.id has a sidebar Partners section",
    async ({ partner }) => {
      const meta = await loadCategoryMeta(partner.category);

      expect(meta["-- Partners"]).toMatchObject({
        type: "separator",
        title: "Partners",
      });
    }
  );

  test.each(partnerCases)(
    "$partner.id docs links agree with its page path",
    ({ partner, slug }) => {
      const path = `${INTEGRATIONS_BASE_PATH}/${partner.category}/${slug}`;

      expect(partner.relativeDocsLink).toBe(path);
      expect(partner.docsLink).toBe(`https://docs.arcade.dev${path}`);
    }
  );
});
