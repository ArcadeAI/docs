import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { listToolkitRoutes } from "./_lib/toolkit-static-params";

const SITE_URL = process.env.SITE_URL ?? "https://docs.arcade.dev";
const NORMALIZED_SITE_URL = SITE_URL.replace(/\/+$/, "");
const APP_DIR = path.join(process.cwd(), "app");
const TOOLKIT_DATA_DIR = path.join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);
const SKIP_DIRS = new Set(["_meta", "_api", "_redirects", "api"]);
const INDEX_SUFFIX_REGEX = /\/index$/;
// Toolkit pages live at /en/resources/integrations/{category}/{toolkitId}.
// `others` is not a real on-disk category — it's a catch-all bucket used by
// listToolkitRoutes for uncategorized toolkits, and it redirects to the
// integrations index via next.config.ts — so we never emit those URLs.
const TOOLKIT_URL_LOCALE = "en";
const TOOLKIT_URL_PREFIX = "/resources/integrations";
const EXCLUDED_TOOLKIT_CATEGORIES = new Set(["others"]);
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

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;
const normalizeToolkitKey = (value: string) =>
  value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");

// listToolkitRoutes returns URL slugs (e.g. "google-calendar"), but the data
// files on disk are keyed by the raw toolkit id (e.g. "GoogleCalendar"). Build
// a lookup from normalized key → filename once per sitemap build so we can
// attach accurate lastmod timestamps without a quadratic readdir scan.
async function loadToolkitDataIndex(): Promise<Map<string, string>> {
  const index = new Map<string, string>();
  try {
    const entries = await fs.readdir(TOOLKIT_DATA_DIR);
    for (const entry of entries) {
      if (!entry.endsWith(".json") || entry === "index.json") {
        continue;
      }
      const stem = entry.slice(0, -".json".length);
      index.set(normalizeToolkitKey(stem), entry);
    }
  } catch {
    // Empty index is fine — we fall back to the current build time.
  }
  return index;
}

async function collectToolkitRoutes(): Promise<MetadataRoute.Sitemap> {
  let routes: Awaited<ReturnType<typeof listToolkitRoutes>>;
  try {
    routes = await listToolkitRoutes();
  } catch {
    // If the toolkit data dir is unavailable (e.g. in a minimal test env),
    // fall back gracefully rather than breaking the whole sitemap build.
    return [];
  }

  const dataIndex = await loadToolkitDataIndex();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  for (const route of routes) {
    if (EXCLUDED_TOOLKIT_CATEGORIES.has(route.category)) {
      continue;
    }

    const url = `${NORMALIZED_SITE_URL}/${TOOLKIT_URL_LOCALE}${TOOLKIT_URL_PREFIX}/${route.category}/${route.toolkitId}`;
    if (seen.has(url)) {
      continue;
    }
    seen.add(url);

    const dataFile = dataIndex.get(normalizeToolkitKey(route.toolkitId));
    let lastModified: Date = now;
    if (dataFile) {
      try {
        const stats = await fs.stat(path.join(TOOLKIT_DATA_DIR, dataFile));
        lastModified = stats.mtime;
      } catch {
        // Keep `now` as the fallback lastmod.
      }
    }
    entries.push({ url, lastModified });
  }

  return entries;
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!cachedRoutes) {
    cachedRoutes = Promise.all([
      collectRoutes(APP_DIR),
      collectToolkitRoutes(),
    ]).then(([mdxRoutes, toolkitRoutes]) => {
      const seen = new Set<string>();
      const combined: MetadataRoute.Sitemap = [];
      for (const entry of [...mdxRoutes, ...toolkitRoutes]) {
        if (seen.has(entry.url)) {
          continue;
        }
        seen.add(entry.url);
        combined.push(entry);
      }
      combined.sort((a, b) => a.url.localeCompare(b.url));
      return combined;
    });
  }

  return cachedRoutes;
}
