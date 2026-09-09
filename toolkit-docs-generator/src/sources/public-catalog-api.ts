import type { ToolDefinition } from "../types/index";
import type { FetchOptions, ToolDataSource } from "./internal";
import { fetchAllPages } from "./public-catalog-pagination";
import {
  type PublicCatalogToolkit,
  parsePublicToolsResponse,
  transformPublicToolItem,
} from "./public-catalog-schema";

export interface PublicCatalogApiSourceConfig {
  /** Base URL for Engine (e.g., https://api.arcade.dev) */
  readonly baseUrl: string;
  /** Optional fetch implementation for testing */
  readonly fetchFn?: typeof fetch;
  /** Page size for toolkit catalog pagination */
  readonly catalogPageSize?: number;
  /** Page size for the flat tools read */
  readonly toolsPageSize?: number;
}

const DEFAULT_CATALOG_PAGE_SIZE = 100;
const DEFAULT_TOOLS_PAGE_SIZE = 25_000;

const normalizeBaseUrl = (baseUrl: string): string =>
  baseUrl.replace(/\/+$/, "");

const buildEndpointUrl = (baseUrl: string, path: string): string => {
  const normalized = normalizeBaseUrl(baseUrl);
  if (normalized.endsWith("/v1")) {
    return `${normalized}/${path}`;
  }
  return `${normalized}/v1/${path}`;
};

type CatalogSnapshot = {
  toolkits: readonly PublicCatalogToolkit[];
  tools: readonly ToolDefinition[];
};

export class PublicCatalogApiSource implements ToolDataSource {
  private readonly catalogEndpoint: string;
  private readonly toolsEndpoint: string;
  private readonly fetchFn: typeof fetch;
  private readonly catalogPageSize: number;
  private readonly toolsPageSize: number;
  private snapshot: Promise<CatalogSnapshot> | undefined;

  constructor(config: PublicCatalogApiSourceConfig) {
    this.catalogEndpoint = buildEndpointUrl(
      config.baseUrl,
      "public/tool_catalog"
    );
    this.toolsEndpoint = buildEndpointUrl(config.baseUrl, "public/tools");
    this.fetchFn = config.fetchFn ?? fetch;
    this.catalogPageSize = config.catalogPageSize ?? DEFAULT_CATALOG_PAGE_SIZE;
    this.toolsPageSize = config.toolsPageSize ?? DEFAULT_TOOLS_PAGE_SIZE;
  }

  private async loadSnapshot(): Promise<CatalogSnapshot> {
    const [catalogItems, toolItems] = await Promise.all([
      fetchAllPages<PublicCatalogToolkit>(
        this.catalogEndpoint,
        this.fetchFn,
        this.catalogPageSize
      ),
      fetchAllPages(this.toolsEndpoint, this.fetchFn, this.toolsPageSize),
    ]);

    const parsedTools = parsePublicToolsResponse(toolItems);
    const requirementsByToolkit = new Map(
      catalogItems.map((toolkit) => [toolkit.name, toolkit.requirements])
    );

    const tools = parsedTools.map((tool) => {
      const toolkitName = tool.toolkit.name;
      return transformPublicToolItem(
        tool,
        requirementsByToolkit.get(toolkitName) ?? null
      );
    });

    return {
      toolkits: catalogItems,
      tools,
    };
  }

  private getSnapshot(): Promise<CatalogSnapshot> {
    this.snapshot ??= this.loadSnapshot();
    return this.snapshot;
  }

  async fetchToolsByToolkit(
    toolkitId: string
  ): Promise<readonly ToolDefinition[]> {
    const { tools } = await this.getSnapshot();
    return tools.filter(
      (tool) => tool.qualifiedName.split(".")[0] === toolkitId
    );
  }

  async fetchAllTools(
    options?: FetchOptions
  ): Promise<readonly ToolDefinition[]> {
    const { tools } = await this.getSnapshot();

    return tools.filter((tool) => {
      const toolkitId = tool.qualifiedName.split(".")[0];
      if (options?.toolkitId && toolkitId !== options.toolkitId) {
        return false;
      }

      if (options?.version) {
        const toolVersion = tool.fullyQualifiedName.split("@")[1];
        if (toolVersion !== options.version) {
          return false;
        }
      }

      if (options?.providerId) {
        if (tool.auth?.providerId !== options.providerId) {
          return false;
        }
      }

      return true;
    });
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await this.fetchFn(
        `${this.catalogEndpoint}?limit=1&offset=0`
      );
      return response.ok;
    } catch {
      return false;
    }
  }
}

export const createPublicCatalogApiSource = (
  config: PublicCatalogApiSourceConfig
): ToolDataSource => new PublicCatalogApiSource(config);
