/**
 * Unified Toolkit Data Source
 *
 * This abstraction combines tool definitions and metadata into a single interface.
 */

import { join } from "path";
import { isApiSuffixedToolkitId } from "../shared/toolkit-primitives";
import type { ToolDefinition, ToolkitMetadata } from "../types/index";
import { filterToolsByHighestVersion } from "../utils/version-coherence";
import type { MetadataSource, ToolDataSource } from "./internal";
import { createMockMetadataSource } from "./mock-metadata";
import { createMockToolFixtureSource } from "./mock-tool-fixture-source";
import {
  createPublicCatalogApiSource,
  type PublicCatalogApiSourceConfig,
} from "./public-catalog-api";

// ============================================================================
// Unified Toolkit Data Interface
// ============================================================================

/**
 * Combined toolkit data containing both tools and metadata
 */
export interface ToolkitData {
  /** Metadata from Design System */
  readonly metadata: ToolkitMetadata | null;
  /** Tool definitions from the public catalog API */
  readonly tools: readonly ToolDefinition[];
}

// ============================================================================
// Unified Toolkit Data Source Interface
// ============================================================================

/**
 * Interface for fetching combined toolkit data (tools + metadata)
 */
export interface ToolkitDataSource {
  readonly fetchAllToolkitsData: () => Promise<
    ReadonlyMap<string, ToolkitData>
  >;
  readonly fetchToolkitData: (
    toolkitId: string,
    version?: string
  ) => Promise<ToolkitData>;

  readonly isAvailable: () => Promise<boolean>;
}

/**
 * Reuse one all-toolkit snapshot for the lifetime of a generation run.
 */
export const createCachedToolkitDataSource = (
  source: ToolkitDataSource
): ToolkitDataSource => {
  let allToolkitsSnapshot:
    | Promise<ReadonlyMap<string, ToolkitData>>
    | undefined;

  return {
    fetchAllToolkitsData: () => {
      allToolkitsSnapshot ??= source.fetchAllToolkitsData();
      return allToolkitsSnapshot;
    },
    fetchToolkitData: (toolkitId, version) =>
      source.fetchToolkitData(toolkitId, version),
    isAvailable: () => source.isAvailable(),
  };
};

// ============================================================================
// Combined Implementation
// ============================================================================

export interface CombinedToolkitDataSourceConfig {
  readonly metadataSource: MetadataSource;
  readonly toolSource: ToolDataSource;
}

export class CombinedToolkitDataSource implements ToolkitDataSource {
  private readonly toolSource: ToolDataSource;
  private readonly metadataSource: MetadataSource;

  constructor(config: CombinedToolkitDataSourceConfig) {
    this.toolSource = config.toolSource;
    this.metadataSource = config.metadataSource;
  }

  private async resolveProviderMetadata(
    toolkitId: string,
    tools: readonly ToolDefinition[],
    directMetadata: ToolkitMetadata | null
  ): Promise<ToolkitMetadata | null> {
    if (directMetadata || !isApiSuffixedToolkitId(toolkitId)) {
      return directMetadata;
    }

    const providerId = tools.find((t) => t.auth?.providerId)?.auth?.providerId;
    if (!providerId) {
      return null;
    }

    return (
      (await this.metadataSource.getToolkitMetadata(`${providerId}Api`)) ??
      (await this.metadataSource.getToolkitMetadata(providerId))
    );
  }

  async fetchToolkitData(
    toolkitId: string,
    version?: string
  ): Promise<ToolkitData> {
    const [tools, directMetadata] = await Promise.all([
      this.toolSource.fetchToolsByToolkit(toolkitId),
      this.metadataSource.getToolkitMetadata(toolkitId),
    ]);
    const metadata = await this.resolveProviderMetadata(
      toolkitId,
      tools,
      directMetadata
    );

    const filteredTools = version
      ? tools.filter((tool) => {
          const [, toolVersion] = tool.fullyQualifiedName.split("@");
          return toolVersion === version;
        })
      : filterToolsByHighestVersion(tools);

    return {
      metadata,
      tools: filteredTools,
    };
  }

  async fetchAllToolkitsData(): Promise<ReadonlyMap<string, ToolkitData>> {
    const [allTools, allMetadata] = await Promise.all([
      this.toolSource.fetchAllTools(),
      this.metadataSource.getAllToolkitsMetadata(),
    ]);

    const toolkitGroups = new Map<string, ToolDefinition[]>();
    for (const tool of allTools) {
      const [toolkitId] = tool.qualifiedName.split(".");
      if (toolkitId) {
        const existing = toolkitGroups.get(toolkitId) ?? [];
        toolkitGroups.set(toolkitId, [...existing, tool]);
      }
    }

    const metadataMap = new Map<string, ToolkitMetadata>();
    for (const metadata of allMetadata) {
      metadataMap.set(metadata.id, metadata);
    }

    for (const [toolkitId, tools] of toolkitGroups) {
      const filtered = filterToolsByHighestVersion(tools);
      if (filtered !== tools) {
        toolkitGroups.set(toolkitId, filtered as ToolDefinition[]);
      }
    }

    const result = new Map<string, ToolkitData>();
    for (const [toolkitId, tools] of toolkitGroups) {
      const directMetadata =
        metadataMap.get(toolkitId) ??
        (await this.metadataSource.getToolkitMetadata(toolkitId));
      const metadata = await this.resolveProviderMetadata(
        toolkitId,
        tools,
        directMetadata
      );
      result.set(toolkitId, { metadata, tools });
    }

    return result;
  }

  async isAvailable(): Promise<boolean> {
    const [toolAvailable, metadataAvailable] = await Promise.all([
      this.toolSource.isAvailable(),
      Promise.resolve(true),
    ]);
    return toolAvailable && metadataAvailable;
  }
}

export const createCombinedToolkitDataSource = (
  config: CombinedToolkitDataSourceConfig
): ToolkitDataSource => new CombinedToolkitDataSource(config);

// ============================================================================
// Public Catalog Toolkit Data Source
// ============================================================================

export interface PublicCatalogSources {
  /**
   * The same catalog read exposed as a metadata source, for the CLI steps
   * that resolve toolkit names before any tools are fetched.
   */
  readonly metadataSource: MetadataSource;
  /** Tools plus branding, both from the public catalog */
  readonly toolkitDataSource: ToolkitDataSource;
}

/**
 * Build both sources off a single catalog read.
 *
 * The experience API returns branding alongside each toolkit, so tools and
 * metadata come from one snapshot and cannot disagree with each other the way
 * a separate design-system read could.
 */
export const createPublicCatalogSources = (
  config: PublicCatalogApiSourceConfig
): PublicCatalogSources => {
  const source = createPublicCatalogApiSource(config);

  return {
    metadataSource: source,
    toolkitDataSource: createCombinedToolkitDataSource({
      metadataSource: source,
      toolSource: source,
    }),
  };
};

export const createPublicCatalogToolkitDataSource = (
  config: PublicCatalogApiSourceConfig
): ToolkitDataSource => createPublicCatalogSources(config).toolkitDataSource;

export interface MockToolkitDataSourceConfig {
  readonly dataDir: string;
}

export const createMockToolkitDataSource = (
  config: MockToolkitDataSourceConfig
): ToolkitDataSource => {
  const toolFixturePath = join(config.dataDir, "engine-api-response.json");
  const metadataFixturePath = join(config.dataDir, "metadata.json");

  return createCombinedToolkitDataSource({
    metadataSource: createMockMetadataSource(metadataFixturePath),
    toolSource: createMockToolFixtureSource(toolFixturePath),
  });
};
