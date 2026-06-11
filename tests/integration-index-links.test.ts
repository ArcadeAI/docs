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
import { listValidIntegrationLinks } from "@/app/_lib/toolkit-static-params";

const TIMEOUT = 30_000;
const ROOT = process.cwd();

/**
 * Guards the regression class MARTECH-19 fixed: the integrations index (a TSX
 * component) and the toolkit breadcrumb produced internal links to pages that
 * don't exist. tests/broken-link-check.test.ts only scans MDX, so it can't see
 * component-generated links or dynamic [toolkitId] slugs.
 */
describe("integrations index links", () => {
  let resolved: ResolvedIndexToolkit[];
  let validLinks: Set<string>;
  let byLink: Map<string, ResolvedIndexToolkit[]>;

  beforeAll(async () => {
    const [toolkits, links] = await Promise.all([
      getToolkitsWithDocsLinks(),
      listValidIntegrationLinks(),
    ]);
    validLinks = links;
    resolved = resolveIndexToolkits(toolkits, validLinks);
    byLink = new Map();
    for (const toolkit of resolved) {
      const link = toIntegrationLink(toolkit);
      const bucket = byLink.get(link) ?? [];
      bucket.push(toolkit);
      byLink.set(link, bucket);
    }
  }, TIMEOUT);

  test("no clickable card links to a page that does not exist", () => {
    const brokenClickable = resolved
      .filter((toolkit) => toolkit.hasPage)
      .map((toolkit) => toIntegrationLink(toolkit))
      .filter((link) => !validLinks.has(link));

    expect(brokenClickable).toEqual([]);
  });

  test("doc-less catalog toolkits stay visible but are non-clickable", () => {
    // "Discord" is in the design-system catalog but has no docs page and no
    // "-api" sibling — it must be rendered, but not as a link to a 404.
    const discord = byLink.get("/en/resources/integrations/social/discord");
    expect(discord, "discord card is present").toBeDefined();
    expect(discord?.every((toolkit) => toolkit.hasPage === false)).toBe(true);
  });

  test("bare '-api' duplicates are dropped in favor of the real card", () => {
    // The catalog carries both "Datadog" (bare, no page) and "DatadogApi".
    expect(byLink.has("/en/resources/integrations/development/datadog")).toBe(
      false
    );
    const datadogApi = byLink.get(
      "/en/resources/integrations/development/datadog-api"
    );
    expect(datadogApi?.[0]?.hasPage).toBe(true);
  });

  test("partner toolkits with authored static pages stay clickable", () => {
    // Tavily is a partner toolkit; its page is an authored static MDX file, not
    // a generated [toolkitId] route.
    const tavily = byLink.get("/en/resources/integrations/search/tavily");
    expect(tavily?.[0]?.hasPage).toBe(true);
  });

  test("duplicate catalog entries collapse to a single card", () => {
    // "Notion" and "NotionToolkit" both resolve to /productivity/notion.
    const notion = byLink.get("/en/resources/integrations/productivity/notion");
    expect(notion).toHaveLength(1);
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
