/**
 * Internal source interfaces
 *
 * These interfaces are used only inside the toolkit data source implementations.
 * Do not export them from the public sources index.
 */
import type { ToolDefinition, ToolkitMetadata } from "../types/index.js";

// ============================================================================
// Fetch Options
// ============================================================================

export interface FetchOptions {
  /** Filter by toolkit ID */
  readonly toolkitId?: string;
  /** Filter by toolkit version */
  readonly version?: string;
  /** Filter by auth provider ID */
  readonly providerId?: string;
}

// ============================================================================
// Tool Data Source Interface (internal)
// ============================================================================

export interface IToolDataSource {
  /** Fetch tools for a specific toolkit */
  readonly fetchToolsByToolkit: (
    toolkitId: string
  ) => Promise<readonly ToolDefinition[]>;
  /** Fetch all tools from the source */
  readonly fetchAllTools: (
    options?: FetchOptions
  ) => Promise<readonly ToolDefinition[]>;
  /** Check if the data source is available */
  readonly isAvailable: () => Promise<boolean>;
}

// ============================================================================
// Metadata Source Interface (internal)
// ============================================================================

export interface IMetadataSource {
  /** Get metadata for a specific toolkit */
  readonly getToolkitMetadata: (
    toolkitId: string
  ) => Promise<ToolkitMetadata | null>;
  /** Get all toolkit metadata */
  readonly getAllToolkitsMetadata: () => Promise<readonly ToolkitMetadata[]>;
  /** List all available toolkit IDs */
  readonly listToolkitIds: () => Promise<readonly string[]>;
}
