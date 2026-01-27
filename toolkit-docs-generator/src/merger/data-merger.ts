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
import { mapWithConcurrency } from "../utils/concurrency.js";

// ============================================================================
// Merger Configuration
// ============================================================================

export interface DataMergerConfig {
  toolkitDataSource: IToolkitDataSource;
  customSectionsSource: ICustomSectionsSource;
  toolExampleGenerator?: ToolExampleGenerator;
  toolkitSummaryGenerator?: ToolkitSummaryGenerator;
  previousToolkits?: ReadonlyMap<string, MergedToolkit>;
  /** Maximum concurrent LLM calls for tool examples (default: 5) */
  llmConcurrency?: number;
  /** Maximum concurrent toolkit processing (default: 3) */
  toolkitConcurrency?: number;
  /** Progress callback for toolkit processing (extended with tool count) */
  onToolkitProgress?:
    | ((
        toolkitId: string,
        status: "start" | "done",
        toolCount?: number
      ) => void)
    | undefined;
  /** Callback when a toolkit is completed - for incremental writes */
  onToolkitComplete?: ((result: MergeResult) => Promise<void>) | undefined;
  /** Set of toolkit IDs to skip (for resume support) */
  skipToolkitIds?: ReadonlySet<string> | undefined;
}

export interface FailedTool {
  readonly toolkitId: string;
  readonly toolName: string;
  readonly qualifiedName: string;
  readonly reason: string;
}

export interface MergeResult {
  toolkit: MergedToolkit;
  warnings: string[];
  failedTools: FailedTool[];
}

export interface ToolExampleResult {
  codeExample: ToolCodeExample;
  secretsInfo: MergedTool["secretsInfo"];
}

export interface ToolExampleGenerator {
  generate: (tool: ToolDefinition) => Promise<ToolExampleResult>;
}

export interface ToolkitSummaryGenerator {
  generate: (toolkit: MergedToolkit) => Promise<string>;
}

interface MergeToolkitOptions {
  previousToolkit?: MergedToolkit;
  /** Maximum concurrent LLM calls for tool examples (default: 5) */
  llmConcurrency?: number;
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

export const normalizeList = (values: readonly string[]): string[] =>
  Array.from(values).sort();

export const stableStringify = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).sort(
      ([keyA], [keyB]) => keyA.localeCompare(keyB)
    );
    return `{${entries
      .map(
        ([key, entryValue]) =>
          `${JSON.stringify(key)}:${stableStringify(entryValue)}`
      )
      .join(",")}}`;
  }

  return JSON.stringify(value);
};

export const buildToolSignatureInput = (
  tool: ToolDefinition | MergedTool
): Record<string, unknown> => ({
  name: tool.name,
  qualifiedName: tool.qualifiedName,
  description: tool.description ?? null,
  parameters: tool.parameters
    .map((param) => ({
      name: param.name,
      type: param.type,
      innerType: param.innerType ?? null,
      required: param.required,
      description: param.description ?? null,
      enum: param.enum ? normalizeList(param.enum) : null,
      inferrable: param.inferrable ?? true,
    }))
    .sort((left, right) => left.name.localeCompare(right.name)),
  auth: tool.auth
    ? {
        providerId: tool.auth.providerId ?? null,
        providerType: tool.auth.providerType,
        scopes: normalizeList(tool.auth.scopes),
      }
    : null,
  secrets: normalizeList(tool.secrets),
  output: tool.output
    ? {
        type: tool.output.type,
        description: tool.output.description ?? null,
      }
    : null,
});

export const buildToolSignature = (tool: ToolDefinition | MergedTool): string =>
  stableStringify(buildToolSignatureInput(tool));

export const buildToolkitSummarySignature = (toolkit: MergedToolkit): string =>
  stableStringify({
    id: toolkit.id,
    label: toolkit.label,
    description: toolkit.description ?? null,
    auth: toolkit.auth
      ? {
          type: toolkit.auth.type,
          providerId: toolkit.auth.providerId ?? null,
          allScopes: normalizeList(toolkit.auth.allScopes),
        }
      : null,
    tools: toolkit.tools
      .map((tool) => ({
        qualifiedName: tool.qualifiedName,
        signature: buildToolSignature(tool),
      }))
      .sort((left, right) =>
        left.qualifiedName.localeCompare(right.qualifiedName)
      ),
  });

const shouldReuseExample = (
  tool: ToolDefinition,
  previousTool: MergedTool
): boolean => {
  if (!previousTool.codeExample) {
    return false;
  }

  return buildToolSignature(tool) === buildToolSignature(previousTool);
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
 * Get documentation chunks for a tool, preserving from previous output if source is empty
 */
const getToolDocumentationChunks = (
  toolName: string,
  toolChunks: { [key: string]: DocumentationChunk[] },
  previousTool?: MergedTool
): DocumentationChunk[] => {
  const fromSource = toolChunks[toolName] ?? [];
  const fromPrevious = previousTool?.documentationChunks ?? [];

  // If source has chunks, use source (it's authoritative)
  // If source is empty but previous has chunks, preserve previous
  if (fromSource.length > 0) {
    return fromSource;
  }
  return fromPrevious;
};

/**
 * Transform a tool definition into a merged tool
 */
const transformTool = async (
  tool: ToolDefinition,
  toolChunks: { [key: string]: DocumentationChunk[] },
  toolExampleGenerator: ToolExampleGenerator | undefined,
  warnings: string[],
  failedTools: FailedTool[],
  previousTool?: MergedTool
): Promise<MergedTool> => {
  const documentationChunks = getToolDocumentationChunks(
    tool.name,
    toolChunks,
    previousTool
  );

  if (previousTool && shouldReuseExample(tool, previousTool)) {
    return {
      name: tool.name,
      qualifiedName: tool.qualifiedName,
      fullyQualifiedName: tool.fullyQualifiedName,
      description: tool.description,
      parameters: tool.parameters,
      auth: tool.auth,
      secrets: tool.secrets,
      secretsInfo: previousTool.secretsInfo ?? [],
      output: tool.output,
      documentationChunks,
      codeExample: previousTool.codeExample,
    };
  }

  if (!toolExampleGenerator) {
    return {
      name: tool.name,
      qualifiedName: tool.qualifiedName,
      fullyQualifiedName: tool.fullyQualifiedName,
      description: tool.description,
      parameters: tool.parameters,
      auth: tool.auth,
      secrets: tool.secrets,
      secretsInfo: [],
      output: tool.output,
      documentationChunks,
    };
  }

  try {
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
      documentationChunks,
      codeExample: exampleResult.codeExample,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    warnings.push(
      `Example generation failed for ${tool.qualifiedName}: ${message}`
    );
    failedTools.push({
      toolkitId: tool.qualifiedName.split(".")[0] ?? tool.qualifiedName,
      toolName: tool.name,
      qualifiedName: tool.qualifiedName,
      reason: message,
    });

    return {
      name: tool.name,
      qualifiedName: tool.qualifiedName,
      fullyQualifiedName: tool.fullyQualifiedName,
      description: tool.description,
      parameters: tool.parameters,
      auth: tool.auth,
      secrets: tool.secrets,
      secretsInfo: previousTool?.secretsInfo ?? [],
      output: tool.output,
      documentationChunks,
    };
  }
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
  toolExampleGenerator: ToolExampleGenerator | undefined,
  options: MergeToolkitOptions = {}
): Promise<MergeResult> => {
  const warnings: string[] = [];
  const failedTools: FailedTool[] = [];

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

  // Prefer toolkit-level description when available
  const description =
    firstTool?.toolkitDescription ?? firstTool?.description ?? null;

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
  const previousToolByQualifiedName = new Map<string, MergedTool>();
  if (options.previousToolkit) {
    for (const tool of options.previousToolkit.tools) {
      previousToolByQualifiedName.set(tool.qualifiedName, tool);
    }
  }

  const llmConcurrency = options.llmConcurrency ?? 5;
  const mergedTools = await mapWithConcurrency(
    tools,
    (tool) =>
      transformTool(
        tool,
        toolChunks,
        toolExampleGenerator,
        warnings,
        failedTools,
        previousToolByQualifiedName.get(tool.qualifiedName)
      ),
    llmConcurrency
  );

  // Merge custom sections from source file with previous output
  // This preserves manually-added custom sections that aren't in the source file
  const mergeCustomSectionsArrays = <T>(
    fromSource: readonly T[] | undefined,
    fromPrevious: readonly T[] | undefined
  ): T[] => {
    const sourceItems = fromSource ?? [];
    const previousItems = fromPrevious ?? [];

    // If source has items, use source (it's the authoritative source)
    // If source is empty but previous has items, preserve previous
    if (sourceItems.length > 0) {
      return [...sourceItems];
    }
    return [...previousItems];
  };

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
    documentationChunks: mergeCustomSectionsArrays(
      customSections?.documentationChunks,
      options.previousToolkit?.documentationChunks
    ),
    customImports: mergeCustomSectionsArrays(
      customSections?.customImports,
      options.previousToolkit?.customImports
    ),
    subPages: mergeCustomSectionsArrays(
      customSections?.subPages,
      options.previousToolkit?.subPages
    ),
    generatedAt: new Date().toISOString(),
  };

  return { toolkit, warnings, failedTools };
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
  private readonly toolExampleGenerator: ToolExampleGenerator | undefined;
  private readonly toolkitSummaryGenerator: ToolkitSummaryGenerator | undefined;
  private readonly previousToolkits:
    | ReadonlyMap<string, MergedToolkit>
    | undefined;
  private readonly llmConcurrency: number;
  private readonly toolkitConcurrency: number;
  private readonly onToolkitProgress:
    | ((
        toolkitId: string,
        status: "start" | "done",
        toolCount?: number
      ) => void)
    | undefined;
  private readonly onToolkitComplete:
    | ((result: MergeResult) => Promise<void>)
    | undefined;
  private readonly skipToolkitIds: ReadonlySet<string>;

  constructor(config: DataMergerConfig) {
    this.toolkitDataSource = config.toolkitDataSource;
    this.customSectionsSource = config.customSectionsSource;
    this.toolExampleGenerator = config.toolExampleGenerator;
    this.toolkitSummaryGenerator = config.toolkitSummaryGenerator;
    this.previousToolkits = config.previousToolkits;
    this.llmConcurrency = config.llmConcurrency ?? 5;
    this.toolkitConcurrency = config.toolkitConcurrency ?? 3;
    this.onToolkitProgress = config.onToolkitProgress;
    this.onToolkitComplete = config.onToolkitComplete;
    this.skipToolkitIds = config.skipToolkitIds ?? new Set();
  }

  private getPreviousToolkit(toolkitId: string): MergedToolkit | undefined {
    if (!this.previousToolkits) {
      return;
    }

    return (
      this.previousToolkits.get(toolkitId.toLowerCase()) ??
      this.previousToolkits.get(toolkitId)
    );
  }

  private async maybeGenerateSummary(
    result: MergeResult,
    previousToolkit?: MergedToolkit
  ): Promise<void> {
    if (previousToolkit?.summary) {
      const currentSignature = buildToolkitSummarySignature(result.toolkit);
      const previousSignature = buildToolkitSummarySignature(previousToolkit);
      if (currentSignature === previousSignature) {
        result.toolkit.summary = previousToolkit.summary;
        return;
      }
    }

    if (!this.toolkitSummaryGenerator) {
      return;
    }

    if (result.toolkit.summary) {
      return;
    }

    try {
      const summary = await this.toolkitSummaryGenerator.generate(
        result.toolkit
      );
      result.toolkit.summary = summary;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      result.warnings.push(
        `Summary generation failed for ${result.toolkit.id}: ${message}`
      );
    }
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

    const previousToolkit = this.getPreviousToolkit(toolkitId);
    const result = await mergeToolkit(
      toolkitId,
      toolkitData.tools,
      toolkitData.metadata,
      customSections,
      this.toolExampleGenerator,
      {
        ...(previousToolkit ? { previousToolkit } : {}),
        llmConcurrency: this.llmConcurrency,
      }
    );
    await this.maybeGenerateSummary(result, previousToolkit);

    return result;
  }

  /**
   * Merge data for all toolkits
   */
  async mergeAllToolkits(): Promise<MergeResult[]> {
    const allToolkitsData = await this.toolkitDataSource.fetchAllToolkitsData();

    const toolkitEntries = Array.from(allToolkitsData.entries());

    // Filter out toolkits that should be skipped (for resume support)
    const filteredEntries = toolkitEntries.filter(
      ([toolkitId]) => !this.skipToolkitIds.has(toolkitId.toLowerCase())
    );

    const results = await mapWithConcurrency(
      filteredEntries,
      async ([toolkitId, toolkitData]) => {
        this.onToolkitProgress?.(toolkitId, "start");

        try {
          const customSections =
            await this.customSectionsSource.getCustomSections(toolkitId);

          const previousToolkit = this.getPreviousToolkit(toolkitId);
          const result = await mergeToolkit(
            toolkitId,
            toolkitData.tools,
            toolkitData.metadata,
            customSections,
            this.toolExampleGenerator,
            {
              ...(previousToolkit ? { previousToolkit } : {}),
              llmConcurrency: this.llmConcurrency,
            }
          );
          await this.maybeGenerateSummary(result, previousToolkit);

          // Write immediately if callback provided (incremental mode)
          if (this.onToolkitComplete) {
            await this.onToolkitComplete(result);
          }

          this.onToolkitProgress?.(
            toolkitId,
            "done",
            result.toolkit.tools.length
          );

          return result;
        } catch (error) {
          // Report error but don't stop processing other toolkits
          const message =
            error instanceof Error ? error.message : String(error);
          const errorResult: MergeResult = {
            toolkit: {
              id: toolkitId,
              label: toolkitId,
              version: "0.0.0",
              description: null,
              metadata: {
                category: "development",
                iconUrl: "",
                isBYOC: false,
                isPro: false,
                type: "arcade",
                docsLink: "",
                isComingSoon: false,
                isHidden: false,
              },
              auth: null,
              tools: [],
              documentationChunks: [],
              customImports: [],
              subPages: [],
              generatedAt: new Date().toISOString(),
            },
            warnings: [`Error processing toolkit: ${message}`],
            failedTools: [],
          };

          this.onToolkitProgress?.(toolkitId, "done", 0);

          return errorResult;
        }
      },
      this.toolkitConcurrency
    );

    return results;
  }

  /**
   * Get the count of toolkits that will be processed (excluding skipped ones)
   */
  async getToolkitCount(): Promise<{
    total: number;
    toProcess: number;
    skipped: number;
  }> {
    const allToolkitsData = await this.toolkitDataSource.fetchAllToolkitsData();
    const total = allToolkitsData.size;
    const skipped = Array.from(allToolkitsData.keys()).filter((id) =>
      this.skipToolkitIds.has(id.toLowerCase())
    ).length;
    return {
      total,
      toProcess: total - skipped,
      skipped,
    };
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createDataMerger = (config: DataMergerConfig): DataMerger =>
  new DataMerger(config);
