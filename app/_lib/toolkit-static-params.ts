import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system";
import { getToolkitSlug, normalizeToolkitId } from "./toolkit-slug";
import { readToolkitIndex } from "./toolkit-data";

export { normalizeToolkitId } from "./toolkit-slug";

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

export async function listToolkitRoutes(options?: {
  dataDir?: string;
  toolkitsCatalog?: ToolkitCatalogEntry[];
}): Promise<ToolkitRouteEntry[]> {
  const index = await readToolkitIndex(
    options?.dataDir ? { dataDir: options.dataDir } : undefined
  );

  if (!index) {
    return [];
  }

  const toolkitsCatalog = options?.toolkitsCatalog ?? DESIGN_SYSTEM_TOOLKITS;
  const catalogByNormalizedId = new Map(
    toolkitsCatalog.map((toolkit) => [normalizeToolkitId(toolkit.id), toolkit])
  );

  const unique = new Map<string, ToolkitRouteEntry>();
  for (const toolkit of index.toolkits) {
    const normalizedId = normalizeToolkitId(toolkit.id);
    const catalogEntry = catalogByNormalizedId.get(normalizedId);

    if (catalogEntry?.isHidden) {
      continue;
    }

    const slug = getToolkitSlug({
      id: catalogEntry?.id ?? toolkit.id,
      docsLink: catalogEntry?.docsLink,
    });
    const category = normalizeCategory(
      catalogEntry?.category ?? toolkit.category
    );
    unique.set(slug, { toolkitId: slug, category });
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
