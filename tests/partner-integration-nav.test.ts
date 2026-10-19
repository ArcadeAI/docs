import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { PARTNER_TOOLKITS } from "@/data/partner-toolkits";
import { getToolkitSlug } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import {
  CONTENT_ROOT,
  contentPageExists,
  parseLinkEntry,
  parseSeparatorEntry,
  readFrontmatterValue,
  readMetaPages,
  resolveContentFile,
} from "./helpers/content-paths";

/**
 * Partner integrations are hand-authored pages that no toolkit JSON file backs,
 * so they are invisible to the docs generator's own data. `PARTNER_TOOLKITS`
 * is what both the catalog cards and the category sidebar are built from, and
 * these assertions are what keeps that list honest: adding a partner there
 * without writing the page, or writing a page whose slug doesn't match, fails
 * here instead of shipping a sidebar link to a 404.
 *
 * The sidebar entries themselves are generated (see
 * toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts, which emits
 * content/docs/resources/integrations/<category>/meta.json), so a missing
 * entry below means someone hand-edited a `meta.json` and skipped the sync, or
 * the sync ran against a partner list the committed nav predates.
 */

const INTEGRATIONS_DIR = join(CONTENT_ROOT, "resources", "integrations");
const INTEGRATIONS_BASE_PATH = "/en/resources/integrations";

const partnerCases = PARTNER_TOOLKITS.map((partner) => ({
  partner,
  slug: getToolkitSlug({
    id: partner.id,
    docsLink: partner.relativeDocsLink,
  }),
}));

const loadCategoryPages = (category: string): string[] =>
  readMetaPages(join(INTEGRATIONS_DIR, category));

/**
 * The label a meta.json entry renders for a partner page. Generated toolkit
 * entries are `[Label](href)` links; partner pages are real MDX files, so the
 * sync emits their bare slug and Fumadocs reads the label from the page's
 * frontmatter (`sidebarTitle`, else `title`).
 */
const sidebarLabelFor = (
  pages: string[],
  slug: string,
  href: string
): string | undefined => {
  if (pages.includes(slug)) {
    const file = resolveContentFile(href);
    if (!file) {
      return;
    }
    const content = readFileSync(file, "utf-8");
    return (
      readFrontmatterValue(content, "sidebarTitle") ??
      readFrontmatterValue(content, "title") ??
      undefined
    );
  }
  return pages
    .map(parseLinkEntry)
    .find((entry) => entry !== null && entry.href === href)?.title;
};

describe("partner integrations", () => {
  test("there is at least one partner to check", () => {
    expect(partnerCases.length).toBeGreaterThan(0);
  });

  test.each(partnerCases)(
    "$partner.id has a page on disk",
    ({ partner, slug }) => {
      const url = `${INTEGRATIONS_BASE_PATH}/${partner.category}/${slug}`;

      expect(
        contentPageExists(url),
        `Expected a page for partner "${partner.id}" at content/docs/resources/integrations/${partner.category}/${slug}.mdx (or ${slug}/index.mdx)`
      ).toBe(true);
    }
  );

  test.each(partnerCases)(
    "$partner.id has a sidebar entry pointing at its page",
    ({ partner, slug }) => {
      const pages = loadCategoryPages(partner.category);
      const href = `${INTEGRATIONS_BASE_PATH}/${partner.category}/${slug}`;
      const label = sidebarLabelFor(pages, slug, href);

      expect(
        label,
        `Expected a "${slug}" (or "[${partner.label}](${href})") entry in content/docs/resources/integrations/${partner.category}/meta.json. ` +
          "Run `bun run sync-toolkit-sidebar` to regenerate it."
      ).toBeDefined();
      expect(label).toBe(partner.label);

      const separators = pages
        .map(parseSeparatorEntry)
        .filter((separator) => separator !== null)
        .map((separator) => separator.title);
      expect(separators).toContain("Partners");
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
