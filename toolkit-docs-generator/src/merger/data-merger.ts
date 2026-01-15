/**
 * Data Merger
 *
 * Combines data from Engine API, Design System, and Custom Sections
 * into the final MergedToolkit format.
 */

import type { ICustomSectionsSource } from "../sources/interfaces.js";
import type { IToolkitDataSource } from "../sources/toolkit-data-source.js";
import type {
  CustomSections,
  DocumentationChunk,
  MergedTool,
  MergedToolkit,
  MergedToolkitAuth,
  MergedToolkitMetadata,
  ToolCodeExample,
  ToolDefinition,
  ToolkitAuthType,
  ToolkitMetadata,
} from "../types/index.js";

// ============================================================================
// Merger Configuration
// ============================================================================

export interface DataMergerConfig {
  toolkitDataSource: IToolkitDataSource;
  customSectionsSource: ICustomSectionsSource;
  toolExampleGenerator: ToolExampleGenerator;
}

export interface MergeResult {
  toolkit: MergedToolkit;
  warnings: string[];
}

export interface ToolExampleResult {
  codeExample: ToolCodeExample;
  secretsInfo: MergedTool["secretsInfo"];
}

export interface ToolExampleGenerator {
  generate: (tool: ToolDefinition) => Promise<ToolExampleResult>;
}

// ============================================================================
// Pure Functions for Data Transformation
// ============================================================================

/**
 * Group tools by their toolkit name (first part of qualified name)
 */
export const groupToolsByToolkit = (
  tools: readonly ToolDefinition[]
): ReadonlyMap<string, readonly ToolDefinition[]> => {
  const groups = new Map<string, ToolDefinition[]>();

  for (const tool of tools) {
    const toolkitName = tool.qualifiedName.split(".")[0];
    if (!toolkitName) continue;

    const existing = groups.get(toolkitName) ?? [];
    groups.set(toolkitName, [...existing, tool]);
  }

  return groups;
};
/**
 * Compute the union of all scopes from tools
 */
export const computeAllScopes = (
  tools: readonly ToolDefinition[]
): string[] => {
  const scopeSet = new Set<string>();

  for (const tool of tools) {
    if (tool.auth?.scopes) {
      for (const scope of tool.auth.scopes) {
        scopeSet.add(scope);
      }
    }
  }

  return Array.from(scopeSet).sort();
};

/**
 * Determine the auth type from tools
 */
export const determineAuthType = (
  tools: readonly ToolDefinition[]
): ToolkitAuthType => {
  const hasOAuth = tools.some((tool) => tool.auth?.providerType === "oauth2");
  const hasApiKey = tools.some(
    (tool) => tool.auth && tool.auth.providerType !== "oauth2"
  );

  if (hasOAuth && hasApiKey) {
    return "mixed";
  }

  if (hasOAuth) {
    return "oauth2";
  }

  if (hasApiKey) {
    return "api_key";
  }

  return "none";
};

/**
 * Get the provider ID from tools
 */
export const getProviderId = (
  tools: readonly ToolDefinition[]
): string | null => {
  const toolWithAuth = tools.find((t) => t.auth?.providerId);
  return toolWithAuth?.auth?.providerId ?? null;
};

/**
 * Extract version from fully qualified name
 */
export const extractVersion = (fullyQualifiedName: string): string => {
  const parts = fullyQualifiedName.split("@");
  return parts[1] ?? "0.0.0";
};
/**
 * Create default metadata for toolkits not found in Design System
 */
const getDefaultMetadata = (toolkitId: string): MergedToolkitMetadata => ({
  category: "development",
  iconUrl: `https://design-system.arcade.dev/icons/${toolkitId.toLowerCase()}.svg`,
  isBYOC: false,
  isPro: false,
  type: "arcade",
  docsLink: `https://docs.arcade.dev/en/mcp-servers/development/${toolkitId.toLowerCase()}`,
  isComingSoon: false,
  isHidden: false,
});

/**
 * Transform ToolkitMetadata to MergedToolkitMetadata (without id/label)
 */
const transformMetadata = (
  metadata: ToolkitMetadata
): MergedToolkitMetadata => ({
  category: metadata.category,
  iconUrl: metadata.iconUrl,
  isBYOC: metadata.isBYOC,
  isPro: metadata.isPro,
  type: metadata.type,
  docsLink: metadata.docsLink,
  isComingSoon: metadata.isComingSoon,
  isHidden: metadata.isHidden,
});

/**
 * Transform a tool definition into a merged tool
 */
const transformTool = async (
  tool: ToolDefinition,
  toolChunks: { [key: string]: DocumentationChunk[] },
  toolExampleGenerator: ToolExampleGenerator
): Promise<MergedTool> => {
  const exampleResult = await toolExampleGenerator.generate(tool);

  return {
    name: tool.name,
    qualifiedName: tool.qualifiedName,
    fullyQualifiedName: tool.fullyQualifiedName,
    description: tool.description,
    parameters: tool.parameters,
    auth: tool.auth,
    secrets: tool.secrets,
    secretsInfo: exampleResult.secretsInfo,
    output: tool.output,
    documentationChunks: toolChunks[tool.name] ?? [],
    codeExample: exampleResult.codeExample,
  };
};

// ============================================================================
// Main Merger Function
// ============================================================================

/**
 * Merge data from all sources for a single toolkit
 */
export const mergeToolkit = async (
  toolkitId: string,
  tools: readonly ToolDefinition[],
  metadata: ToolkitMetadata | null,
  customSections: CustomSections | null,
  toolExampleGenerator: ToolExampleGenerator
): Promise<MergeResult> => {
  const warnings: string[] = [];

  if (tools.length === 0) {
    warnings.push(`No tools found for toolkit: ${toolkitId}`);
  }

  if (!metadata) {
    warnings.push(
      `No metadata found for toolkit: ${toolkitId} - using defaults`
    );
  }

  // Get version from first tool
  const firstTool = tools[0];
  const version = firstTool
    ? extractVersion(firstTool.fullyQualifiedName)
    : "0.0.0";

  // Get toolkit description from first tool's toolkit info
  const description = firstTool?.description ?? null;

  // Build auth info
  const authType = determineAuthType(tools);
  const providerId = getProviderId(tools);
  const allScopes = computeAllScopes(tools);

  const auth: MergedToolkitAuth | null =
    authType !== "none"
      ? {
          type: authType,
          providerId,
          allScopes,
        }
      : null;

  // Transform tools
  const toolChunks = (customSections?.toolChunks ?? {}) as {
    [key: string]: DocumentationChunk[];
  };
  const mergedTools = await Promise.all(
    tools.map((tool) => transformTool(tool, toolChunks, toolExampleGenerator))
  );

  // Build final toolkit
  const toolkit: MergedToolkit = {
    id: toolkitId,
    label: metadata?.label ?? toolkitId,
    version,
    description,
    metadata: metadata
      ? transformMetadata(metadata)
      : getDefaultMetadata(toolkitId),
    auth,
    tools: mergedTools,
    documentationChunks: customSections?.documentationChunks ?? [],
    customImports: customSections?.customImports ?? [],
    subPages: customSections?.subPages ?? [],
    generatedAt: new Date().toISOString(),
  };

  return { toolkit, warnings };
};

// ============================================================================
// Data Merger Class
// ============================================================================

/**
 * Data merger that combines all sources
 */
export class DataMerger {
  private readonly toolkitDataSource: IToolkitDataSource;
  private readonly customSectionsSource: ICustomSectionsSource;
  private readonly toolExampleGenerator: ToolExampleGenerator;

  constructor(config: DataMergerConfig) {
    this.toolkitDataSource = config.toolkitDataSource;
    this.customSectionsSource = config.customSectionsSource;
    this.toolExampleGenerator = config.toolExampleGenerator;
  }

  /**
   * Merge data for a single toolkit
   */
  async mergeToolkit(
    toolkitId: string,
    version?: string
  ): Promise<MergeResult> {
    const toolkitData = await this.toolkitDataSource.fetchToolkitData(
      toolkitId,
      version
    );

    // Fetch custom sections
    const customSections =
      await this.customSectionsSource.getCustomSections(toolkitId);

    return mergeToolkit(
      toolkitId,
      toolkitData.tools,
      toolkitData.metadata,
      customSections,
      this.toolExampleGenerator
    );
  }

  /**
   * Merge data for all toolkits
   */
  async mergeAllToolkits(): Promise<MergeResult[]> {
    const results: MergeResult[] = [];

    const allToolkitsData = await this.toolkitDataSource.fetchAllToolkitsData();

    for (const [toolkitId, toolkitData] of allToolkitsData) {
      const customSections =
        await this.customSectionsSource.getCustomSections(toolkitId);

      const result = await mergeToolkit(
        toolkitId,
        toolkitData.tools,
        toolkitData.metadata,
        customSections,
        this.toolExampleGenerator
      );
      results.push(result);
    }

    return results;
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createDataMerger = (config: DataMergerConfig): DataMerger =>
  new DataMerger(config);
