/**
 * Unified Toolkit Data Source
 *
 * This abstraction combines tool definitions and metadata into a single interface.
 * This allows us to swap implementations easily when the data comes from a single source
 * in the future (e.g., when Engine API includes metadata).
 */

import { join } from "path";
import type { ToolDefinition, ToolkitMetadata } from "../types/index.js";
import {
  type ArcadeApiSourceConfig,
  createArcadeApiSource,
} from "./arcade-api.js";
import {
  createEngineApiSource,
  type EngineApiSourceConfig,
} from "./engine-api.js";
import type { IMetadataSource, IToolDataSource } from "./internal.js";
import { createMockEngineApiSource } from "./mock-engine-api.js";
import { createMockMetadataSource } from "./mock-metadata.js";

// ============================================================================
// Unified Toolkit Data Interface
// ============================================================================

/**
 * Combined toolkit data containing both tools and metadata
 */
export interface ToolkitData {
  /** Tool definitions from Engine API */
  readonly tools: readonly ToolDefinition[];
  /** Metadata from Design System */
  readonly metadata: ToolkitMetadata | null;
}

// ============================================================================
// Unified Toolkit Data Source Interface
// ============================================================================

/**
 * Interface for fetching combined toolkit data (tools + metadata)
 *
 * This abstraction allows us to:
 * 1. Currently combine separate Engine API and Design System sources
 * 2. Future: Use a single unified source when Engine API includes metadata
 *
 * Implementations:
 * - CombinedToolkitDataSource: Combines IToolDataSource + IMetadataSource
 * - UnifiedToolkitDataSource: Single source (future implementation)
 */
export interface IToolkitDataSource {
  /**
   * Fetch combined data for a specific toolkit
   * @param toolkitId - The toolkit identifier (e.g., "Github", "Slack")
   * @param version - Optional version filter
   */
  readonly fetchToolkitData: (
    toolkitId: string,
    version?: string
  ) => Promise<ToolkitData>;

  /**
   * Fetch combined data for all toolkits
   */
  readonly fetchAllToolkitsData: () => Promise<
    ReadonlyMap<string, ToolkitData>
  >;

  /**
   * Check if the data source is available
   */
  readonly isAvailable: () => Promise<boolean>;
}

// ============================================================================
// Combined Implementation (Current: Separate Sources)
// ============================================================================

/**
 * Configuration for combined toolkit data source
 */
export interface CombinedToolkitDataSourceConfig {
  /** Source for tool definitions */
  readonly toolSource: IToolDataSource;
  /** Source for toolkit metadata */
  readonly metadataSource: IMetadataSource;
}

/**
 * Combined implementation that merges separate tool and metadata sources
 *
 * This is the current implementation that combines:
 * - Engine API (via IToolDataSource)
 * - Design System (via IMetadataSource)
 *
 * In the future, this can be replaced with UnifiedToolkitDataSource
 * when Engine API includes metadata.
 */
export class CombinedToolkitDataSource implements IToolkitDataSource {
  private readonly toolSource: IToolDataSource;
  private readonly metadataSource: IMetadataSource;

  constructor(config: CombinedToolkitDataSourceConfig) {
    this.toolSource = config.toolSource;
    this.metadataSource = config.metadataSource;
  }

  async fetchToolkitData(
    toolkitId: string,
    version?: string
  ): Promise<ToolkitData> {
    // Fetch tools and metadata in parallel
    const [tools, metadata] = await Promise.all([
      this.toolSource.fetchToolsByToolkit(toolkitId),
      this.metadataSource.getToolkitMetadata(toolkitId),
    ]);

    // Filter tools by version if specified
    const filteredTools = version
      ? tools.filter((tool) => {
          const toolVersion = tool.fullyQualifiedName.split("@")[1];
          return toolVersion === version;
        })
      : tools;

    return {
      tools: filteredTools,
      metadata,
    };
  }

  async fetchAllToolkitsData(): Promise<ReadonlyMap<string, ToolkitData>> {
    // Fetch all tools and metadata in parallel
    const [allTools, allMetadata] = await Promise.all([
      this.toolSource.fetchAllTools(),
      this.metadataSource.getAllToolkitsMetadata(),
    ]);

    // Group tools by toolkit ID
    const toolkitGroups = new Map<string, ToolDefinition[]>();
    for (const tool of allTools) {
      const toolkitId = tool.qualifiedName.split(".")[0];
      if (toolkitId) {
        const existing = toolkitGroups.get(toolkitId) ?? [];
        toolkitGroups.set(toolkitId, [...existing, tool]);
      }
    }

    // Create metadata lookup map
    const metadataMap = new Map<string, ToolkitMetadata>();
    for (const metadata of allMetadata) {
      metadataMap.set(metadata.id, metadata);
    }

    // Combine into ToolkitData map
    const result = new Map<string, ToolkitData>();
    for (const [toolkitId, tools] of toolkitGroups) {
      result.set(toolkitId, {
        tools,
        metadata: metadataMap.get(toolkitId) ?? null,
      });
    }

    return result;
  }

  async isAvailable(): Promise<boolean> {
    const [toolAvailable, metadataAvailable] = await Promise.all([
      this.toolSource.isAvailable(),
      Promise.resolve(true), // Metadata source is always available (returns null if not found)
    ]);
    return toolAvailable && metadataAvailable;
  }
}

// ============================================================================
// Factory
// ============================================================================

/**
 * Create a combined toolkit data source from separate sources
 */
export const createCombinedToolkitDataSource = (
  config: CombinedToolkitDataSourceConfig
): IToolkitDataSource => new CombinedToolkitDataSource(config);

// ============================================================================
// Engine Toolkit Data Source
// ============================================================================

export interface EngineToolkitDataSourceConfig {
  /** Engine API configuration */
  readonly engine: EngineApiSourceConfig;
  /** Source for toolkit metadata */
  readonly metadataSource: IMetadataSource;
}

export const createEngineToolkitDataSource = (
  config: EngineToolkitDataSourceConfig
): IToolkitDataSource =>
  createCombinedToolkitDataSource({
    toolSource: createEngineApiSource(config.engine),
    metadataSource: config.metadataSource,
  });

// ============================================================================
// Arcade API Toolkit Data Source
// ============================================================================

export interface ArcadeToolkitDataSourceConfig {
  /** Arcade API configuration */
  readonly arcade: ArcadeApiSourceConfig;
  /** Source for toolkit metadata */
  readonly metadataSource: IMetadataSource;
}

/**
 * Create a toolkit data source using the Arcade Production API (/v1/tools)
 */
export const createArcadeToolkitDataSource = (
  config: ArcadeToolkitDataSourceConfig
): IToolkitDataSource =>
  createCombinedToolkitDataSource({
    toolSource: createArcadeApiSource(config.arcade),
    metadataSource: config.metadataSource,
  });

// ============================================================================
// Mock Toolkit Data Source (Current: JSON fixtures)
// ============================================================================

/**
 * Configuration for mock toolkit data source
 */
export interface MockToolkitDataSourceConfig {
  /** Directory containing mock data fixtures */
  readonly dataDir: string;
}

/**
 * Create a mock toolkit data source using JSON fixtures.
 *
 * This hides the fact that tools and metadata come from separate sources,
 * while keeping a single abstraction for the rest of the system.
 */
export const createMockToolkitDataSource = (
  config: MockToolkitDataSourceConfig
): IToolkitDataSource => {
  const toolFixturePath = join(config.dataDir, "engine-api-response.json");
  const metadataFixturePath = join(config.dataDir, "metadata.json");

  return createCombinedToolkitDataSource({
    toolSource: createMockEngineApiSource(toolFixturePath),
    metadataSource: createMockMetadataSource(metadataFixturePath),
  });
};
