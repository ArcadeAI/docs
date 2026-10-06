/**
 * Internal source interfaces
 *
 * These interfaces are used only inside the toolkit data source implementations.
 * Do not export them from the public sources index.
 */
import type { ToolDefinition, ToolkitMetadata } from "../types/index";

// ============================================================================
// Fetch Options
// ============================================================================

export interface FetchOptions {
  /** Filter by auth provider ID */
  readonly providerId?: string;
  /** Filter by toolkit ID */
  readonly toolkitId?: string;
  /** Filter by toolkit version */
  readonly version?: string;
}

// ============================================================================
// Tool Data Source Interface (internal)
// ============================================================================

export interface ToolDataSource {
  /** Fetch all tools from the source */
  readonly fetchAllTools: (
    options?: FetchOptions
  ) => Promise<readonly ToolDefinition[]>;
  /** Fetch tools for a specific toolkit */
  readonly fetchToolsByToolkit: (
    toolkitId: string
  ) => Promise<readonly ToolDefinition[]>;
  /** Check if the data source is available */
  readonly isAvailable: () => Promise<boolean>;
}

// ============================================================================
// Metadata Source Interface (internal)
// ============================================================================

export interface MetadataSource {
  /** Get all toolkit metadata */
  readonly getAllToolkitsMetadata: () => Promise<readonly ToolkitMetadata[]>;
  /** Get metadata for a specific toolkit */
  readonly getToolkitMetadata: (
    toolkitId: string
  ) => Promise<ToolkitMetadata | null>;
  /** List all available toolkit IDs */
  readonly listToolkitIds: () => Promise<readonly string[]>;
}
