import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { listValidIntegrationLinks } from "./_lib/toolkit-static-params";

const SITE_URL = process.env.SITE_URL ?? "https://docs.arcade.dev";
const NORMALIZED_SITE_URL = SITE_URL.replace(/\/+$/, "");
const APP_DIR = path.join(process.cwd(), "app");
const SKIP_DIRS = new Set(["_meta", "_api", "_redirects", "api"]);
const INDEX_SUFFIX_REGEX = /\/index$/;
let cachedRoutes: Promise<MetadataRoute.Sitemap> | null = null;

async function collectRoutes(dir: string): Promise<MetadataRoute.Sitemap> {
  const dirs = await fs.readdir(dir, { withFileTypes: true });
  const entries: MetadataRoute.Sitemap = [];

  for (const entry of dirs) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name) || entry.name.includes("[")) {
        continue;
      }
      const childRoutes = await collectRoutes(path.join(dir, entry.name));
      entries.push(...childRoutes);
      continue;
    }

    if (entry.isFile() && entry.name === "page.mdx") {
      const filePath = path.join(dir, entry.name);
      const stats = await fs.stat(filePath);

      const relativeDir = path
        .relative(APP_DIR, dir)
        .replace(/\\/g, "/")
        .replace(INDEX_SUFFIX_REGEX, "");

      const routePath = relativeDir ? `/${relativeDir}` : "/";
      entries.push({
        url: `${NORMALIZED_SITE_URL}${routePath}`,
        lastModified: stats.mtime,
      });
    }
  }

  return entries;
}

/**
 * `[toolkitId]` directories are skipped above because they aren't literal
 * URLs — but `listValidIntegrationLinks()` (the same enumeration the
 * integrations index page uses) already resolves every toolkit that dynamic
 * route serves, plus a handful of authored static partner pages living
 * alongside it. Skip any link the directory walk already found (the static
 * ones) so it isn't listed twice.
 */
async function collectToolkitRoutes(
  existingPaths: Set<string>
): Promise<MetadataRoute.Sitemap> {
  const links = await listValidIntegrationLinks();
  const entries: MetadataRoute.Sitemap = [];
  const categoryPageMtime = new Map<string, Date>();

  for (const link of links) {
    if (existingPaths.has(link)) {
      continue;
    }

    const category = link.split("/").at(-2) ?? "";
    let mtime = categoryPageMtime.get(category);
    if (!mtime) {
      const pageFile = path.join(
        APP_DIR,
        "en",
        "resources",
        "integrations",
        category,
        "[toolkitId]",
        "page.mdx"
      );
      mtime = (await fs.stat(pageFile)).mtime;
      categoryPageMtime.set(category, mtime);
    }

    entries.push({
      url: `${NORMALIZED_SITE_URL}${link}`,
      lastModified: mtime,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!cachedRoutes) {
    cachedRoutes = (async () => {
      const routes = await collectRoutes(APP_DIR);
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
