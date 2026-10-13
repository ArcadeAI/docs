import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import { listValidIntegrationLinks } from "@/lib/toolkit-static-params";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";

const SITE_URL = process.env.SITE_URL ?? "https://docs.arcade.dev";
const NORMALIZED_SITE_URL = SITE_URL.replace(/\/+$/, "");
const CONTENT_DIR = path.join(process.cwd(), "content", "docs");
const TOOLKIT_DATA_DIR = resolveToolkitDataDir();
let cachedRoutes: Promise<MetadataRoute.Sitemap> | null = null;

/**
 * Path segments the old `app/en/**` directory walk never descended into.
 * "api" was there to keep route handlers out, but it also matched the page at
 * /en/references/api, so the published sitemap has never listed that page.
 * The same rule is applied to page slugs here so the URL set stays identical;
 * remove "api" from this set to start listing the page.
 */
const SKIPPED_SEGMENTS = new Set(["_meta", "_api", "_redirects", "api"]);

/**
 * One entry per MDX page known to the Fumadocs source. `lastModified` comes
 * from the file's mtime, like the old `app/en/**` directory walk did; when the
 * file cannot be stat-ed (for example a virtual page) the entry is emitted
 * without a date rather than dropped.
 */
async function collectRoutes(): Promise<MetadataRoute.Sitemap> {
  const pages = source
    .getPages()
    .filter(
      (page) => !page.slugs.some((segment) => SKIPPED_SEGMENTS.has(segment))
    );

  return await Promise.all(
    pages.map(async (page) => {
      const entry: MetadataRoute.Sitemap[number] = {
        url: `${NORMALIZED_SITE_URL}${page.url}`,
      };
      try {
        const stats = await fs.stat(path.join(CONTENT_DIR, page.path));
        entry.lastModified = stats.mtime;
      } catch {
        // No file on disk for this page; leave lastModified unset.
      }
      return entry;
    })
  );
}

/**
 * Toolkit pages are rendered from JSON, not MDX, so the Fumadocs source never
 * sees them — but `listValidIntegrationLinks()` (the same enumeration the
 * integrations index page uses) resolves every toolkit the catch-all route
 * serves, plus a handful of authored static partner pages living alongside
 * them. Skip any link the MDX walk already found (the static ones) so it isn't
 * listed twice.
 */
async function collectToolkitRoutes(
  existingPaths: Set<string>
): Promise<MetadataRoute.Sitemap> {
  let links: Set<string>;
  try {
    links = await listValidIntegrationLinks();
  } catch (error) {
    // The sitemap is an auxiliary artifact. Keep static pages available if a
    // malformed toolkit prevents the generated catalog from being enumerated;
    // the normal page/static-param validation still fails the build loudly.
    // biome-ignore lint/suspicious/noConsole: surface a best-effort sitemap degradation
    console.warn("Unable to enumerate generated toolkit sitemap routes", error);
    return [];
  }

  const toolkitDataMtime = await getToolkitDataMtime();
  const entries: MetadataRoute.Sitemap = [];

  for (const link of links) {
    if (existingPaths.has(link)) {
      continue;
    }

    entries.push({
      url: `${NORMALIZED_SITE_URL}${link}`,
      lastModified: toolkitDataMtime,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}

async function getToolkitDataMtime(): Promise<Date> {
  const entries = await fs.readdir(TOOLKIT_DATA_DIR, { withFileTypes: true });
  const mtimes = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map(
        async (entry) =>
          (await fs.stat(path.join(TOOLKIT_DATA_DIR, entry.name))).mtime
      )
  );

  return mtimes.reduce(
    (latest, mtime) => (mtime > latest ? mtime : latest),
    new Date(0)
  );
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!cachedRoutes) {
    cachedRoutes = (async () => {
      const routes = await collectRoutes();
      const existingPaths = new Set(
        routes.map((route) => route.url.slice(NORMALIZED_SITE_URL.length))
      );
      const toolkitRoutes = await collectToolkitRoutes(existingPaths);

      const allRoutes = [...routes, ...toolkitRoutes];
      allRoutes.sort((a, b) => a.url.localeCompare(b.url));
      return allRoutes;
    })();
  }

  return cachedRoutes;
}
