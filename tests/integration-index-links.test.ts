import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { beforeAll, describe, expect, test } from "vitest";
import { getToolkitsWithDocsLinks } from "@/app/_lib/integration-catalog";
import {
  type ResolvedIndexToolkit,
  resolveIndexToolkits,
  toIntegrationLink,
} from "@/app/_lib/integration-index";
import type { ToolkitWithDocsLink } from "@/app/_lib/toolkit-slug";
import { listValidIntegrationLinks } from "@/app/_lib/toolkit-static-params";

const TIMEOUT = 30_000;
const ROOT = process.cwd();

/**
 * Guards the regression class MARTECH-19 fixed: the integrations index (a TSX
 * component) and the toolkit breadcrumb produced internal links to pages that
 * don't exist. tests/broken-link-check.test.ts only scans MDX, so it can't see
 * component-generated links or dynamic [toolkitId] slugs.
 *
 * These tests derive their cases from the live catalog + route data rather than
 * hard-coding toolkit names, so they don't break when a toolkit gains or loses
 * its own docs page (which is exactly what happened in CI: `main` shipped real
 * pages for several toolkits this PR treated as doc-less).
 */

const INTEGRATIONS = "/en/resources/integrations";

// Build a minimal catalog entry for the unit tests. resolveIndexToolkits only
// reads `id`, `category`, `docsLink`, and `isHidden`.
const makeToolkit = (
  id: string,
  category: string,
  slug: string,
  isHidden = false
): ToolkitWithDocsLink =>
  ({
    id,
    label: id,
    type: "arcade",
    category,
    isHidden,
    isComingSoon: false,
    isBYOC: false,
    isPro: false,
    docsLink: `https://docs.arcade.dev${INTEGRATIONS}/${category}/${slug}`,
  }) as unknown as ToolkitWithDocsLink;

describe("resolveIndexToolkits (logic)", () => {
  // A fixed set of "real" pages, independent of the repo's toolkit data.
  const validLinks = new Set([
    `${INTEGRATIONS}/development/datadog-api`, // a generated [toolkitId] route
    `${INTEGRATIONS}/search/tavily`, // an authored static page
  ]);
  const catalog: ToolkitWithDocsLink[] = [
    makeToolkit("DatadogApi", "development", "datadog-api"), // real page
    makeToolkit("Datadog", "development", "datadog"), // bare, no page, has -api sibling -> drop
    makeToolkit("Discord", "social", "discord"), // no page, no -api sibling -> non-clickable
    makeToolkit("Tavily", "search", "tavily"), // static page -> clickable
    makeToolkit("Notion", "productivity", "notion"), // duplicate A (no page)
    makeToolkit("NotionToolkit", "productivity", "notion"), // duplicate B, same link -> collapse
    makeToolkit("Hidden", "social", "hidden", true), // hidden -> excluded
  ];
  const resolved = resolveIndexToolkits(catalog, validLinks);
  const byId = (id: string) => resolved.find((toolkit) => toolkit.id === id);
  const links = resolved.map(toIntegrationLink);

  test("drops a bare entry when its '-api' sibling owns the page", () => {
    expect(resolved.some((toolkit) => toolkit.id === "Datadog")).toBe(false);
    expect(byId("DatadogApi")?.hasPage).toBe(true);
  });

  test("keeps doc-less toolkits but marks them non-clickable", () => {
    expect(byId("Discord")?.hasPage).toBe(false);
  });

  test("keeps toolkits backed by an authored static page clickable", () => {
    expect(byId("Tavily")?.hasPage).toBe(true);
  });

  test("excludes hidden toolkits entirely", () => {
    expect(resolved.some((toolkit) => toolkit.id === "Hidden")).toBe(false);
  });

  test("collapses entries that resolve to the same link", () => {
    expect(
      links.filter((link) => link === `${INTEGRATIONS}/productivity/notion`)
    ).toHaveLength(1);
    expect(links.length).toBe(new Set(links).size);
  });
});

describe("integrations index links (live data)", () => {
  let validLinks: Set<string>;
  let resolved: ResolvedIndexToolkit[];

  beforeAll(async () => {
    const [toolkits, links] = await Promise.all([
      getToolkitsWithDocsLinks(),
      listValidIntegrationLinks(),
    ]);
    validLinks = links;
    resolved = resolveIndexToolkits(toolkits, validLinks);
  }, TIMEOUT);

  test("no clickable card links to a page that does not exist", () => {
    const brokenClickable = resolved
      .filter((toolkit) => toolkit.hasPage)
      .map((toolkit) => toIntegrationLink(toolkit))
      .filter((link) => !validLinks.has(link));

    expect(brokenClickable).toEqual([]);
  });

  test("every rendered card resolves to a unique link (duplicates collapse)", () => {
    const links = resolved.map((toolkit) => toIntegrationLink(toolkit));
    expect(links.length).toBe(new Set(links).size);
  });

  test("the index mixes real (clickable) and placeholder (non-clickable) cards", () => {
    // Guards against a regression that makes everything clickable (re-introducing
    // broken links) or everything non-clickable.
    expect(resolved.some((toolkit) => toolkit.hasPage)).toBe(true);
    expect(resolved.some((toolkit) => !toolkit.hasPage)).toBe(true);
  });

  test("authored static pages are recognized as valid links", () => {
    // listValidIntegrationLinks must include authored static pages (e.g. the
    // Tavily partner page), not only generated [toolkitId] routes. Guarded so it
    // only asserts while that page exists in the tree.
    const tavilyLink = `${INTEGRATIONS}/search/tavily`;
    const tavilyPage = join(
      ROOT,
      "app/en/resources/integrations/search/tavily/page.mdx"
    );
    if (existsSync(tavilyPage)) {
      expect(validLinks.has(tavilyLink)).toBe(true);
      const tavily = resolved.find(
        (toolkit) => toIntegrationLink(toolkit) === tavilyLink
      );
      expect(tavily?.hasPage).toBe(true);
    }
  });
});

const LOCALE_PREFIX = /^\/(en|es|pt-BR)(?=\/|$)/;
const HREF_LITERAL = /href="(\/[^"#]+)"/g;

const withEnLocale = (path: string): string =>
  LOCALE_PREFIX.test(path) ? path : `/en${path}`;

const toLocaleParam = (path: string): string =>
  withEnLocale(path).replace(LOCALE_PREFIX, "/:locale");

const pageFileExists = (path: string): boolean => {
  // withEnLocale guarantees a leading "/en"; drop the leading slash to get an
  // app-relative path like "en/resources/integrations".
  const rel = withEnLocale(path).slice(1);
  const base = join(ROOT, "app", rel);
  return (
    existsSync(join(base, "page.mdx")) ||
    existsSync(join(base, "page.tsx")) ||
    existsSync(`${base}.mdx`)
  );
};

const readRedirectSources = async (): Promise<Set<string>> => {
  const config = await readFile(join(ROOT, "next.config.ts"), "utf-8");
  const sources = [...config.matchAll(/source:\s*"([^"]+)"/g)].map(
    (match) => match[1]
  );
  return new Set(sources);
};

const extractInternalHrefs = async (relPath: string): Promise<string[]> => {
  const content = await readFile(join(ROOT, relPath), "utf-8");
  const hrefs = [...content.matchAll(HREF_LITERAL)].map((match) => match[1]);
  // Internal app links only (skip protocol-relative // and external).
  return [...new Set(hrefs.filter((href) => !href.startsWith("//")))];
};

// Component files whose hardcoded internal links are not covered by the
// MDX-only broken-link scan.
const COMPONENT_FILES = [
  "app/_components/toolkit-docs/components/toolkit-page.tsx",
  "app/en/resources/integrations/components/toolkits-client.tsx",
];

describe("hardcoded internal links in toolkit components resolve", () => {
  let validLinks: Set<string>;
  let redirectSources: Set<string>;

  beforeAll(async () => {
    [validLinks, redirectSources] = await Promise.all([
      listValidIntegrationLinks(),
      readRedirectSources(),
    ]);
  }, TIMEOUT);

  test(
    "every hardcoded href points at a real page, route, or redirect",
    async () => {
      const broken: string[] = [];

      for (const file of COMPONENT_FILES) {
        for (const href of await extractInternalHrefs(file)) {
          const resolvesToPageOrRoute =
            pageFileExists(href) || validLinks.has(withEnLocale(href));
          const resolvesToRedirect = redirectSources.has(toLocaleParam(href));
          if (!(resolvesToPageOrRoute || resolvesToRedirect)) {
            broken.push(`${file} -> ${href}`);
          }
        }
      }

      expect(broken).toEqual([]);
    },
    TIMEOUT
  );
});
