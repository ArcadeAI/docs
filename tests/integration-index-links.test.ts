import { existsSync, readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { beforeAll, describe, expect, test } from "vitest";
import { getToolkitsWithDocsLinks } from "@/app/_lib/integration-catalog";
import {
  type ResolvedIndexToolkit,
  resolveIndexToolkits,
  toIntegrationLink,
} from "@/app/_lib/integration-index";
import { INTEGRATION_CATEGORIES } from "@/app/_lib/toolkit-category";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import {
  getToolkitSlug,
  type ToolkitWithDocsLink,
} from "@/app/_lib/toolkit-slug";
import {
  getToolkitCanonicalPath,
  listToolkitRoutes,
  listValidIntegrationLinks,
} from "@/app/_lib/toolkit-static-params";

const TIMEOUT = 30_000;
const ROOT = process.cwd();
const INTEGRATIONS = "/en/resources/integrations";

/**
 * Guards the regression class MARTECH-19 fixed: the integrations index (a TSX
 * component) and the toolkit breadcrumb produced internal links to pages that
 * don't exist. tests/broken-link-check.test.ts only scans MDX, so it can't see
 * component-generated links or dynamic [toolkitId] slugs.
 *
 * Assertions are kept deliberately general — the unit tests use placeholder
 * toolkits, and the live-data tests derive their cases from the catalog + route
 * data — so adding/removing real toolkits (or giving one its own page) never
 * requires editing this file unless behavior actually regresses.
 */

// Minimal catalog entry for the unit tests. resolveIndexToolkits only reads
// `id`, `category`, `docsLink`, and `isHidden`.
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
  // A fixed set of "real" pages and placeholder toolkits, independent of the
  // repo's toolkit data. Names are deliberately fake.
  const validLinks = new Set([
    `${INTEGRATIONS}/development/alpha-api`, // stands in for a generated route
    `${INTEGRATIONS}/search/gamma`, // stands in for an authored static page
  ]);
  const catalog: ToolkitWithDocsLink[] = [
    makeToolkit("AlphaApi", "development", "alpha-api"), // real page
    makeToolkit("Alpha", "development", "alpha"), // bare, no page, has "-api" sibling -> drop
    makeToolkit("Beta", "social", "beta"), // no page, no "-api" sibling -> non-clickable
    makeToolkit("Gamma", "search", "gamma"), // page exists -> clickable
    makeToolkit("Delta", "productivity", "delta"), // duplicate A (no page)
    makeToolkit("DeltaPrime", "productivity", "delta"), // duplicate B, same link -> collapse
    makeToolkit("Zeta", "social", "zeta", true), // hidden -> excluded
  ];
  const resolved = resolveIndexToolkits(catalog, validLinks);
  const byId = (id: string) => resolved.find((toolkit) => toolkit.id === id);
  const links = resolved.map(toIntegrationLink);

  test("drops a bare entry when its '-api' sibling owns the page", () => {
    expect(resolved.some((toolkit) => toolkit.id === "Alpha")).toBe(false);
    expect(byId("AlphaApi")?.hasPage).toBe(true);
  });

  test("keeps a toolkit without a page, but marks it non-clickable", () => {
    expect(byId("Beta")?.hasPage).toBe(false);
  });

  test("keeps a toolkit whose page exists clickable", () => {
    expect(byId("Gamma")?.hasPage).toBe(true);
  });

  test("excludes hidden toolkits entirely", () => {
    expect(resolved.some((toolkit) => toolkit.id === "Zeta")).toBe(false);
  });

  test("normalizes unknown categories to others so cards match routes", () => {
    const link = toIntegrationLink(
      makeToolkit("Mystery", "not-a-real-category", "mystery")
    );
    expect(link).toBe(`${INTEGRATIONS}/others/mystery`);
  });

  test("treats empty-string category as others", () => {
    const link = toIntegrationLink(makeToolkit("BlankCat", "", "blank-cat"));
    expect(link).toBe(`${INTEGRATIONS}/others/blank-cat`);
  });

  test("collapses entries that resolve to the same link", () => {
    expect(
      links.filter((link) => link === `${INTEGRATIONS}/productivity/delta`)
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

  test("the index renders cards and at least one links to a real page", () => {
    // Guards total breakage (empty catalog, or a validLinks computation that
    // matches nothing so every card is non-clickable).
    expect(resolved.length).toBeGreaterThan(0);
    expect(resolved.some((toolkit) => toolkit.hasPage)).toBe(true);
  });

  test("authored static integration pages are recognized as valid links", () => {
    // listValidIntegrationLinks must include authored static category pages
    // (e.g. partner pages), not only generated [toolkitId] routes. Discovered
    // from disk so it covers whatever static pages exist now or later.
    for (const link of listStaticCategoryPageLinks()) {
      expect(validLinks.has(link), `${link} should be a valid link`).toBe(true);
    }
  });
});

// Independently enumerate authored static pages under each integration category
// (a `<category>/<slug>/page.{mdx,tsx}` that isn't the dynamic [toolkitId] route).
const listStaticCategoryPageLinks = (): string[] => {
  const links: string[] = [];
  for (const category of INTEGRATION_CATEGORIES) {
    const categoryDir = join(
      ROOT,
      "app",
      "en",
      "resources",
      "integrations",
      category
    );
    if (!existsSync(categoryDir)) {
      continue;
    }
    for (const entry of readdirSync(categoryDir, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name.startsWith("[")) {
        continue;
      }
      const pageDir = join(categoryDir, entry.name);
      if (
        existsSync(join(pageDir, "page.mdx")) ||
        existsSync(join(pageDir, "page.tsx"))
      ) {
        links.push(`${INTEGRATIONS}/${category}/${entry.name}`);
      }
    }
  }
  return links;
};

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

// ---------------------------------------------------------------------------
// Toolkit page canonical hygiene
//
// docs' only page-level <link rel="canonical"> comes from the generated toolkit
// pages (toolkit-docs-page.tsx → generateMetadata, which emits
// `/en/resources/integrations/<category>/<getToolkitSlug(data)>`). This guards
// that canonical class — the docs analog of the www canonical guard, and
// specifically the "Duplicate pages without canonical" finding MARTECH-19 fixed
// (notion): every toolkit page's canonical points at its own URL, canonicals are
// unique (no two pages share one), and none points at a redirect source or a
// non-generated route. We re-derive the canonical with the same pure helpers the
// page uses (listToolkitRoutes + readToolkitData + getToolkitSlug) rather than
// importing the page module, which pulls in browser-only render code.
//
// (The docs sitemap — app/sitemap.ts, static MDX pages only — is guarded in
// tests/sitemap.test.ts: no redirect-source URLs, no duplicates.)
// ---------------------------------------------------------------------------

describe("toolkit page canonical hygiene", () => {
  let canonicals: Array<{ page: string; canonical: string }>;
  let validLinks: Set<string>;
  let redirectSources: Set<string>;

  beforeAll(async () => {
    [validLinks, redirectSources] = await Promise.all([
      listValidIntegrationLinks(),
      readRedirectSources(),
    ]);
    canonicals = [];
    // Fetch the route list ONCE. getToolkitStaticParamsForCategory() recomputes
    // listToolkitRoutes() (toolkit index + every data file) internally, so
    // looping it over all categories re-read the whole catalog once per category.
    // listToolkitRoutes() already yields both category and toolkitId.
    for (const { category, toolkitId } of await listToolkitRoutes()) {
      const data = await readToolkitData(toolkitId);
      const canonical = data
        ? `${INTEGRATIONS}/${category}/${getToolkitSlug({
            id: data.id,
            docsLink: data.metadata?.docsLink,
          })}`
        : "";
      canonicals.push({
        page: `${INTEGRATIONS}/${category}/${toolkitId}`,
        canonical,
      });
    }
  }, TIMEOUT);

  test("every generated toolkit page emits a canonical", () => {
    expect(canonicals.length).toBeGreaterThan(0);
    expect(canonicals.filter((c) => !c.canonical).map((c) => c.page)).toEqual(
      []
    );
  });

  test("each toolkit canonical points at the page's own URL", () => {
    const mismatched = canonicals
      .filter((c) => c.canonical && c.canonical !== c.page)
      .map((c) => `${c.page} → ${c.canonical}`);
    expect(mismatched).toEqual([]);
  });

  test("toolkit canonicals are unique (no duplicate-canonical pages)", () => {
    const byCanonical = new Map<string, string>();
    const duplicates: string[] = [];
    for (const { page, canonical } of canonicals) {
      if (!canonical) {
        continue;
      }
      const prior = byCanonical.get(canonical);
      if (prior) {
        duplicates.push(`${canonical} ← ${prior} + ${page}`);
      } else {
        byCanonical.set(canonical, page);
      }
    }
    expect(duplicates).toEqual([]);
  });

  test("no toolkit canonical points at a redirect or a missing route", () => {
    const offenders: string[] = [];
    for (const { canonical } of canonicals) {
      if (!canonical) {
        continue;
      }
      if (redirectSources.has(toLocaleParam(canonical))) {
        offenders.push(`${canonical}: redirect source`);
      } else if (!validLinks.has(withEnLocale(canonical))) {
        offenders.push(`${canonical}: not a generated route`);
      }
    }
    expect(offenders).toEqual([]);
  });

  // MARTECH-17: the dynamic [toolkitId] route accepts ANY category segment, so a
  // toolkit is reachable at wrong-category aliases (a docsLink/category mismatch
  // produced development/pagerduty-api). generateMetadata canonicalizes every
  // such page to getToolkitCanonicalPath(data) — the toolkit's own category +
  // slug — which must be a real, index-linked route, or the alias self-canonicals
  // into an orphan ("Canonical URL has no incoming internal links"). Derived over
  // ALL data files, not just static routes. Hidden toolkits are noindex (excluded).
  test(
    "every non-hidden toolkit canonicalizes to a linked route (no orphan canonicals)",
    async () => {
      const dataDir = join(ROOT, "toolkit-docs-generator", "data", "toolkits");
      const files = readdirSync(dataDir).filter(
        (file) => file.endsWith(".json") && file !== "index.json"
      );
      const orphans: string[] = [];
      for (const file of files) {
        const parsed = JSON.parse(
          await readFile(join(dataDir, file), "utf-8")
        ) as {
          id?: string;
          metadata?: {
            category?: string;
            docsLink?: string;
            isHidden?: boolean;
          };
        };
        if (!parsed.id || parsed.metadata?.isHidden) {
          continue;
        }
        const canonical = getToolkitCanonicalPath({
          id: parsed.id,
          category: parsed.metadata?.category,
          docsLink: parsed.metadata?.docsLink,
        });
        if (!validLinks.has(canonical)) {
          orphans.push(`${file} → ${canonical}`);
        }
      }
      expect(orphans).toEqual([]);
    },
    TIMEOUT
  );
});
