import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { TOOLKITS as DESIGN_SYSTEM_TOOLKITS } from "@arcadeai/design-system";
import { readToolkitData, readToolkitIndex } from "./toolkit-data";
import { getToolkitSlug, normalizeToolkitId } from "./toolkit-slug";

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

const DEFAULT_DATA_DIR = join(process.cwd(), "data", "toolkits");

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
    } catch {}
  }

  return [...unique.values()];
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

  const toolkitsCatalog = options?.toolkitsCatalog ?? DESIGN_SYSTEM_TOOLKITS;
  const catalogByNormalizedId = new Map(
    toolkitsCatalog.map((toolkit) => [normalizeToolkitId(toolkit.id), toolkit])
  );

  const unique = new Map<string, ToolkitRouteEntry>();
  for (const toolkit of index.toolkits) {
    const normalizedId = normalizeToolkitId(toolkit.id);
    const catalogEntry = catalogByNormalizedId.get(normalizedId);
    const data =
      catalogEntry?.docsLink || catalogEntry?.category
        ? null
        : await readToolkitData(
            toolkit.id,
            options?.dataDir ? { dataDir: options.dataDir } : undefined
          );

    const isHidden =
      catalogEntry?.isHidden ?? data?.metadata?.isHidden ?? false;
    if (isHidden) {
      continue;
    }

    const slug = getToolkitSlug({
      id: catalogEntry?.id ?? toolkit.id,
      docsLink: catalogEntry?.docsLink ?? data?.metadata?.docsLink,
    });
    const category = normalizeCategory(
      catalogEntry?.category ?? toolkit.category ?? data?.metadata?.category
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
