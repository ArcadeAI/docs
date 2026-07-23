import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import {
  INTEGRATION_CATEGORIES,
  type IntegrationCategory,
  normalizeCategory,
} from "./toolkit-category";
import { readToolkitData, readToolkitIndex } from "./toolkit-data";
import { getToolkitSlug, normalizeToolkitId } from "./toolkit-slug";

export type ToolkitCatalogEntry = {
  id: string;
  category?: string;
  isHidden?: boolean;
  docsLink?: string;
};

export type ToolkitRouteEntry = {
  toolkitId: string; // docs slug (e.g. "github-api") or normalized id
  category: IntegrationCategory;
};

const sortToolkitRoutes = (routes: ToolkitRouteEntry[]): ToolkitRouteEntry[] =>
  routes.sort(
    (left, right) =>
      left.category.localeCompare(right.category) ||
      left.toolkitId.localeCompare(right.toolkitId)
  );

const DESIGN_SYSTEM_TOOLKITS_FOR_ROUTES: ToolkitCatalogEntry[] =
  DESIGN_SYSTEM_TOOLKITS.map((toolkit) => ({
    id: toolkit.id,
    category: toolkit.category,
    isHidden: toolkit.isHidden,
    docsLink: toolkit.docsLink,
  }));

const loadDesignSystemToolkits = async (): Promise<ToolkitCatalogEntry[]> =>
  DESIGN_SYSTEM_TOOLKITS_FOR_ROUTES;

/**
 * The canonical docs path for a toolkit: `/en/resources/integrations/<category>/
 * <slug>`. Category comes from the toolkit's own data (its true, linked
 * category) — NOT the URL it was reached through. The dynamic `[toolkitId]`
 * route accepts any category segment, so a page reached at a wrong-category
 * alias (e.g. `development/pagerduty-api` when its category is `customer-support`)
 * must canonicalize to the one generated, index-linked page instead of
 * orphaning itself. Mirrors the slug + category logic in `listToolkitRoutes`.
 */
export function getToolkitCanonicalPath(toolkit: {
  id: string;
  category?: string | null;
  docsLink?: string | null;
}): string | null {
  const category = normalizeCategory(toolkit.category);
  const slug = getToolkitSlug({ id: toolkit.id, docsLink: toolkit.docsLink });
  if (!slug) {
    return null;
  }
  return `/en/resources/integrations/${category}/${slug}`;
}

const DEFAULT_DATA_DIR = join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);

const resolveDataDir = (dataDir?: string): string =>
  dataDir ?? process.env.TOOLKIT_DATA_DIR ?? DEFAULT_DATA_DIR;

const listToolkitRoutesFromDataDir = async (options?: {
  dataDir?: string;
}): Promise<ToolkitRouteEntry[]> => {
  const dataDir = resolveDataDir(options?.dataDir);
  const entries = await readdir(dataDir);
  const unique = new Map<string, ToolkitRouteEntry>();

  for (const entry of entries) {
    if (!entry.endsWith(".json") || entry === "index.json") {
      continue;
    }

    try {
      const content = await readFile(join(dataDir, entry), "utf-8");
      const parsed = JSON.parse(content) as {
        id?: string;
        metadata?: {
          category?: string;
          docsLink?: string;
          isHidden?: boolean;
        };
      };

      if (!parsed?.id) {
        continue;
      }

      if (parsed.metadata?.isHidden) {
        continue;
      }

      const slug = getToolkitSlug({
        id: parsed.id,
        docsLink: parsed.metadata?.docsLink,
      });
      if (!slug) {
        continue;
      }
      const category = normalizeCategory(parsed.metadata?.category);
      unique.set(slug, { toolkitId: slug, category });
    } catch {
      // Ignore malformed toolkit data files.
    }
  }

  return sortToolkitRoutes([...unique.values()]);
};

const resolveToolkitRoute = async (
  toolkit: { id: string; category?: string },
  catalogByNormalizedId: Map<string, ToolkitCatalogEntry>,
  dataDir?: string
): Promise<ToolkitRouteEntry | null> => {
  const normalizedId = normalizeToolkitId(toolkit.id);
  const catalogEntry = catalogByNormalizedId.get(normalizedId);
  // Always read the JSON file — it is the source of truth for category, docsLink,
  // and isHidden. The design system catalog is only used as a fallback for
  // visibility when the JSON file is absent.
  const data = await readToolkitData(
    toolkit.id,
    dataDir ? { dataDir } : undefined
  );

  const isHidden = data?.metadata?.isHidden ?? catalogEntry?.isHidden ?? false;
  if (isHidden) {
    return null;
  }

  const slug = getToolkitSlug({
    id: toolkit.id,
    docsLink: data?.metadata?.docsLink ?? catalogEntry?.docsLink,
  });
  if (!slug) {
    return null;
  }
  // JSON file is the source of truth for category. The generator is responsible
  // for writing the correct value; the design system catalog and index.json are
  // only used as a last resort when the JSON is missing.
  const category = normalizeCategory(
    data?.metadata?.category ?? catalogEntry?.category ?? toolkit.category
  );
  return { toolkitId: slug, category };
};

export async function listToolkitRoutes(options?: {
  dataDir?: string;
  toolkitsCatalog?: ToolkitCatalogEntry[];
}): Promise<ToolkitRouteEntry[]> {
  const index = await readToolkitIndex(
    options?.dataDir ? { dataDir: options.dataDir } : undefined
  );

  if (!index || index.toolkits.length === 0) {
    return await listToolkitRoutesFromDataDir(options);
  }

  const toolkitsCatalog =
    options?.toolkitsCatalog ?? (await loadDesignSystemToolkits());
  const catalogByNormalizedId = new Map(
    toolkitsCatalog.map((toolkit) => [normalizeToolkitId(toolkit.id), toolkit])
  );

  const unique = new Map<string, ToolkitRouteEntry>();
  for (const toolkit of index.toolkits) {
    const route = await resolveToolkitRoute(
      toolkit,
      catalogByNormalizedId,
      options?.dataDir
    );
    if (!route) {
      continue;
    }
    unique.set(route.toolkitId, route);
  }

  return sortToolkitRoutes([...unique.values()]);
}

export async function getToolkitStaticParamsForCategory(
  category: IntegrationCategory,
  options?: { dataDir?: string; toolkitsCatalog?: ToolkitCatalogEntry[] }
): Promise<Array<{ toolkitId: string }>> {
  const routes = await listToolkitRoutes(options);

  return routes
    .filter((route) => route.category === category)
    .map((route) => ({ toolkitId: route.toolkitId }));
}

const INTEGRATIONS_APP_DIR = join(
  process.cwd(),
  "app",
  "en",
  "resources",
  "integrations"
);

const PAGE_FILE_NAMES = new Set(["page.mdx", "page.tsx"]);

/**
 * Authored static integration pages (e.g. partner pages like `search/tavily`
 * and `tool-feedback`) live next to the dynamic `[toolkitId]` routes. They are
 * real pages but are not part of `listToolkitRoutes`, so enumerate them from
 * disk under the known integration categories.
 */
const listStaticIntegrationLinks = async (): Promise<string[]> => {
  const links: string[] = [];

  for (const category of INTEGRATION_CATEGORIES) {
    const categoryDir = join(INTEGRATIONS_APP_DIR, category);
    try {
      const slugs = await readdir(categoryDir, { withFileTypes: true });
      for (const slug of slugs) {
        if (!slug.isDirectory() || slug.name.startsWith("[")) {
          continue;
        }
        const files = await readdir(join(categoryDir, slug.name));
        if (files.some((file) => PAGE_FILE_NAMES.has(file))) {
          links.push(`/en/resources/integrations/${category}/${slug.name}`);
        }
      }
    } catch {
      // Category dir missing or unreadable — skip it.
    }
  }

  return links;
};

/**
 * The full set of links the integrations index may point at and that actually
 * resolve: dynamic toolkit routes plus authored static pages. Used to decide
 * whether a catalog card should be clickable.
 */
export async function listValidIntegrationLinks(options?: {
  dataDir?: string;
  toolkitsCatalog?: ToolkitCatalogEntry[];
}): Promise<Set<string>> {
  const routes = await listToolkitRoutes(options);
  const links = new Set<string>(
    routes.map(
      (route) =>
        `/en/resources/integrations/${route.category}/${route.toolkitId}`
    )
  );

  for (const staticLink of await listStaticIntegrationLinks()) {
    links.add(staticLink);
  }

  return links;
}
