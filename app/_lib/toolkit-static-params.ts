import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system";
import { readToolkitIndex } from "./toolkit-data";

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;

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
};

export type ToolkitRouteEntry = {
  toolkitId: string; // normalized slug (e.g. "githubapi")
  category: IntegrationCategory;
};

export function normalizeToolkitId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

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
  const catalogBySlug = new Map(
    toolkitsCatalog.map((toolkit) => [normalizeToolkitId(toolkit.id), toolkit])
  );

  const unique = new Map<string, ToolkitRouteEntry>();
  for (const toolkit of index.toolkits) {
    const slug = normalizeToolkitId(toolkit.id);
    const catalogEntry = catalogBySlug.get(slug);

    if (catalogEntry?.isHidden) {
      continue;
    }

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
