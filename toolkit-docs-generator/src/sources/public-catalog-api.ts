import { normalizeToolkitId } from "../shared/toolkit-primitives";
import type { ToolDefinition, ToolkitMetadata } from "../types/index";
import type { FetchOptions, MetadataSource, ToolDataSource } from "./internal";
import { fetchAllPages } from "./public-catalog-pagination";
import {
  type PublicCatalogToolkit,
  parsePublicCatalogItems,
  parsePublicToolsResponse,
  transformPublicToolItem,
  transformPublicToolkitMetadata,
} from "./public-catalog-schema";

export interface PublicCatalogApiSourceConfig {
  /**
   * Base URL the public catalog paths hang off, including any prefix
   * (e.g. https://experience.arcade.dev/api).
   */
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

const buildEndpointUrl = (baseUrl: string, path: string): string =>
  `${baseUrl.replace(/\/+$/, "")}/${path}`;

type CatalogSnapshot = {
  toolkits: readonly PublicCatalogToolkit[];
  tools: readonly ToolDefinition[];
  metadataByToolkit: ReadonlyMap<string, ToolkitMetadata>;
};

/**
 * Build the metadata lookup for a snapshot.
 *
 * Indexed under the catalog name, the branding block's own id, and the label
 * so callers can look a toolkit up by any of the three spellings users and
 * upstream data actually use ("Clickup", "ClickUp", "ClickUp API").
 */
const indexMetadata = (
  toolkits: readonly PublicCatalogToolkit[]
): Map<string, ToolkitMetadata> => {
  const index = new Map<string, ToolkitMetadata>();

  for (const toolkit of toolkits) {
    const metadata = transformPublicToolkitMetadata(toolkit);
    if (!metadata) {
      continue;
    }

    index.set(normalizeToolkitId(toolkit.name), metadata);
    if (toolkit.metadata) {
      index.set(normalizeToolkitId(toolkit.metadata.id), metadata);
      index.set(normalizeToolkitId(toolkit.metadata.label), metadata);
    }
  }

  return index;
};

export class PublicCatalogApiSource implements ToolDataSource, MetadataSource {
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
    const [catalogPages, toolItems] = await Promise.all([
      fetchAllPages(this.catalogEndpoint, this.fetchFn, this.catalogPageSize),
      fetchAllPages(this.toolsEndpoint, this.fetchFn, this.toolsPageSize),
    ]);

    const catalogItems = parsePublicCatalogItems(catalogPages);
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
      metadataByToolkit: indexMetadata(catalogItems),
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

  async getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null> {
    const { metadataByToolkit } = await this.getSnapshot();
    return metadataByToolkit.get(normalizeToolkitId(toolkitId)) ?? null;
  }

  async getAllToolkitsMetadata(): Promise<readonly ToolkitMetadata[]> {
    const { toolkits, metadataByToolkit } = await this.getSnapshot();

    // Walk the catalog rather than the index so each toolkit appears once,
    // in catalog order — the index holds several keys per toolkit.
    return toolkits
      .map((toolkit) => metadataByToolkit.get(normalizeToolkitId(toolkit.name)))
      .filter(
        (metadata): metadata is ToolkitMetadata => metadata !== undefined
      );
  }

  async listToolkitIds(): Promise<readonly string[]> {
    const { toolkits } = await this.getSnapshot();
    return toolkits.map((toolkit) => toolkit.name);
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
): ToolDataSource & MetadataSource => new PublicCatalogApiSource(config);
