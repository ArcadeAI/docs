import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import {
  getToolkitSlug,
  INTEGRATION_CATEGORIES,
  type IntegrationCategory,
  normalizeToolkitId,
} from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import {
  loadAllToolkitData,
  readToolkitData,
  readToolkitIndex,
} from "./toolkit-data";

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
 * Normalize a category value read from toolkit data into a routable
 * category, or `null` when there is nothing to route by.
 *
 * `undefined`/`null`/empty string means no category information was
 * available at all — typically a fallback source (the design-system catalog
 * used only when a toolkit's own JSON file is absent) that simply doesn't
 * carry one. That's a quiet "nothing to go on," not corruption: callers skip
 * the toolkit rather than invent a page for it.
 *
 * A non-empty string that isn't one of `INTEGRATION_CATEGORIES`, though, is
 * a real value someone set — most likely a new category introduced upstream
 * (the Engine / design-system catalog) that this docs site doesn't have a
 * route for yet. There is no "others" catch-all to silently absorb it (see
 * INTEGRATION_CATEGORIES's doc comment): every toolkit in an unrecognized
 * category would otherwise render as a clickable catalog card pointing at a
 * route that 404s, with nothing failing the build to surface it. So this
 * throws instead.
 */
export function normalizeCategory(
  value: string | null | undefined
): IntegrationCategory | null {
  if (!value) {
    return null;
  }

  if (INTEGRATION_CATEGORIES.includes(value as IntegrationCategory)) {
    return value as IntegrationCategory;
  }

  throw new Error(
    `Unrecognized integration category "${value}". Expected one of: ${INTEGRATION_CATEGORIES.join(", ")}. ` +
      "A new category needs a matching app/en/resources/integrations/<category>/[toolkitId] route directory before toolkits can use it."
  );
}

/**
 * The canonical docs path for a toolkit: `/en/resources/integrations/<category>/
 * <slug>`. Category comes from the toolkit's own data (its true, linked
 * category) — NOT the URL it was reached through. The dynamic `[toolkitId]`
 * route accepts any category segment, so a page reached at a wrong-category
 * alias (e.g. `development/pagerduty-api` when its category is `customer-support`)
 * must canonicalize to the one generated, index-linked page instead of
 * orphaning itself. Mirrors the slug + category logic in `listToolkitRoutes`.
 *
 * Only called for a toolkit that already has a generated page (it's building
 * that page's own canonical tag), so a `null` category here means the page
 * exists but its routing information doesn't — an internal inconsistency,
 * not a toolkit to quietly skip. That throws too.
 */
export function getToolkitCanonicalPath(toolkit: {
  id: string;
  category?: string | null;
  docsLink?: string | null;
}): string {
  const category = normalizeCategory(toolkit.category);
  if (!category) {
    throw new Error(
      `Cannot build a canonical path for toolkit "${toolkit.id}": it has no integration category.`
    );
  }
  const slug = getToolkitSlug({ id: toolkit.id, docsLink: toolkit.docsLink });
  return `/en/resources/integrations/${category}/${slug}`;
}

const resolveDataDir = (dataDir?: string): string =>
  resolveToolkitDataDir(dataDir);

const listToolkitRoutesFromDataDir = async (options?: {
  dataDir?: string;
}): Promise<ToolkitRouteEntry[]> => {
  const dataDir = resolveDataDir(options?.dataDir);

  // loadAllToolkitData validates every file against MergedToolkitSchema and
  // throws on a corrupt one (see app/_lib/toolkit-data.ts) — a malformed file
  // in this directory listing is never legitimately "absent", so it should
  // fail the build rather than be skipped here.
  const { byNormalizedId } = await loadAllToolkitData(dataDir);

  const unique = new Map<string, ToolkitRouteEntry>();

  for (const data of byNormalizedId.values()) {
    if (data.metadata?.isHidden) {
      continue;
    }

    const slug = getToolkitSlug({
      id: data.id,
      docsLink: data.metadata?.docsLink,
    });
    const category = normalizeCategory(data.metadata?.category);
    if (!category) {
      continue;
    }
    unique.set(slug, { toolkitId: slug, category });
  }

  return [...unique.values()];
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
  // JSON file is the source of truth for category. The generator is responsible
  // for writing the correct value; the design system catalog and index.json are
  // only used as a last resort when the JSON is missing.
  const category = normalizeCategory(
    data?.metadata?.category ?? catalogEntry?.category ?? toolkit.category
  );
  // No category info anywhere for this toolkit: nothing to route it under.
  // Skip it quietly (same treatment as a hidden toolkit) rather than
  // fabricate a page under a category that doesn't exist.
  if (!category) {
    return null;
  }
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

  return [...unique.values()];
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
