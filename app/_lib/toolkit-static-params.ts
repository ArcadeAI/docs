import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system";
import { readToolkitData, readToolkitIndex } from "./toolkit-data";
import { getToolkitSlug, normalizeToolkitId } from "./toolkit-slug";

export const INTEGRATION_CATEGORIES = [
  "productivity",
  "social",
  "entertainment",
  "development",
  "payments",
  "search",
  "sales",
  "databases",
  "customer-support",
  "others",
] as const;

export type IntegrationCategory = (typeof INTEGRATION_CATEGORIES)[number];

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

function normalizeCategory(
  value: string | null | undefined
): IntegrationCategory {
  if (!value) {
    return "others";
  }

  return INTEGRATION_CATEGORIES.includes(value as IntegrationCategory)
    ? (value as IntegrationCategory)
    : "others";
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
      const category = normalizeCategory(parsed.metadata?.category);
      unique.set(slug, { toolkitId: slug, category });
    } catch {
      // Ignore malformed toolkit data files.
    }
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
