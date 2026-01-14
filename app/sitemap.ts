import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";

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

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!cachedRoutes) {
    cachedRoutes = collectRoutes(APP_DIR).then((routes) => {
      routes.sort((a, b) => a.url.localeCompare(b.url));
      return routes;
    });
  }

  return cachedRoutes;
}
