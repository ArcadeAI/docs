/**
 * Data Merger
 *
 * Combines data from Engine API, Design System, and Custom Sections
 * into the final MergedToolkit format.
 */

import type {
  OverviewGenerationInput,
  ToolkitOverviewGenerator,
  ToolkitOverviewInstructions,
} from "../overview/types.js";
import { createEmptyOverviewInstructionsSource } from "../sources/in-memory.js";
import type {
  ICustomSectionsSource,
  IOverviewInstructionsSource,
} from "../sources/interfaces.js";
import type {
  IToolkitDataSource,
  ToolkitData,
} from "../sources/toolkit-data-source.js";
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
import {
  detectMetadataChanges,
  formatFreshnessWarnings,
} from "./metadata-freshness.js";

// ============================================================================
// Merger Configuration
// ============================================================================

export interface DataMergerConfig {
  toolkitDataSource: IToolkitDataSource;
  customSectionsSource: ICustomSectionsSource;
  overviewInstructionsSource?: IOverviewInstructionsSource;
  overviewGenerator?: ToolkitOverviewGenerator;
  skipOverview?: boolean;
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
  /** Fallback resolver: toolkit ID → OAuth provider ID (design system) */
  resolveProviderId?: ((toolkitId: string) => string | null) | undefined;
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
  overviewGenerator?: ToolkitOverviewGenerator;
  overviewInstructions?: ToolkitOverviewInstructions | null;
  skipOverview?: boolean;
  /** Fallback resolver: toolkit ID → OAuth provider ID (design system) */
  resolveProviderId?: (toolkitId: string) => string | null;
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
const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]/g;
const TOOLKIT_ID_ACRONYM_BOUNDARY = /([A-Z]+)([A-Z][a-z])/g;
const TOOLKIT_ID_WORD_BOUNDARY = /([a-z0-9])([A-Z])/g;
const TOOLKIT_DESCRIPTION_LABEL_PREFIX = "Arcade.dev LLM tools for ";

const normalizeToolkitId = (toolkitId: string): string =>
  toolkitId.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");

const humanizeToolkitId = (toolkitId: string): string =>
  toolkitId
    .replace(TOOLKIT_ID_ACRONYM_BOUNDARY, "$1 $2")
    .replace(TOOLKIT_ID_WORD_BOUNDARY, "$1 $2")
    .replace(/\bApi\b/g, "API")
    .trim();

const extractLabelFromDescription = (
  description: string | null
): string | null => {
  if (!description) {
    return null;
  }

  const trimmed = description.trim();
  if (!trimmed.startsWith(TOOLKIT_DESCRIPTION_LABEL_PREFIX)) {
    return null;
  }

  const suffix = trimmed.slice(TOOLKIT_DESCRIPTION_LABEL_PREFIX.length).trim();
  if (suffix.length === 0) {
    return null;
  }

  const periodIndex = suffix.indexOf(".");
  const candidate = (
    periodIndex >= 0 ? suffix.slice(0, periodIndex) : suffix
  ).trim();

  return candidate.length > 0 ? candidate : null;
};

const resolveToolkitLabel = (options: {
  toolkitId: string;
  metadata: ToolkitMetadata | null;
  description: string | null;
}): string =>
  options.metadata?.label ??
  extractLabelFromDescription(options.description) ??
  humanizeToolkitId(options.toolkitId);

const isStarterToolkitId = (toolkitId: string): boolean =>
  normalizeToolkitId(toolkitId).endsWith("api");

const getDefaultIconId = (toolkitId: string): string => {
  const normalized = normalizeToolkitId(toolkitId);
  // Prefer provider icons for "*Api" toolkits when possible.
  return normalized.endsWith("api") ? normalized.slice(0, -3) : normalized;
};

const getDefaultDocsSlug = (toolkitId: string): string => {
  const normalized = normalizeToolkitId(toolkitId);
  // Prefer "github-api" style slugs for "*Api" toolkits.
  return normalized.endsWith("api")
    ? `${normalized.slice(0, -3)}-api`
    : normalized;
};

const applyToolkitTypeOverrides = (
  toolkitId: string,
  metadata: MergedToolkitMetadata
): MergedToolkitMetadata => {
  if (isStarterToolkitId(toolkitId) && metadata.type === "arcade") {
    return { ...metadata, type: "arcade_starter" };
  }
  return metadata;
};

const getDefaultMetadata = (toolkitId: string): MergedToolkitMetadata =>
  applyToolkitTypeOverrides(toolkitId, {
    category: "development",
    iconUrl: `https://design-system.arcade.dev/icons/${getDefaultIconId(toolkitId)}.svg`,
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: `https://docs.arcade.dev/en/mcp-servers/development/${getDefaultDocsSlug(toolkitId)}`,
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

const isOverviewChunk = (chunk: DocumentationChunk): boolean =>
  chunk.location === "header" &&
  chunk.position === "before" &&
  chunk.type === "markdown" &&
  chunk.content.trim().toLowerCase().startsWith("## overview");

const getPreviousOverview = (toolkit?: MergedToolkit): string | null => {
  if (!toolkit) {
    return null;
  }
  const overviewChunk = toolkit.documentationChunks.find(isOverviewChunk);
  return overviewChunk?.content ?? null;
};

const applyOverviewChunk = (
  chunks: DocumentationChunk[],
  chunk: DocumentationChunk
): DocumentationChunk[] => {
  const filtered = chunks.filter((item) => !isOverviewChunk(item));
  return [chunk, ...filtered];
};

const shouldAttemptOverview = (
  hasInstructions: boolean,
  isNewToolkit: boolean
): boolean => hasInstructions || isNewToolkit;

const buildOverviewInput = (
  toolkit: MergedToolkit,
  instructions: ToolkitOverviewInstructions | null,
  previousOverview: string | null,
  mode: OverviewGenerationInput["mode"]
): OverviewGenerationInput => ({
  toolkit,
  instructions,
  previousOverview,
  mode,
});

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

const appendMergeWarnings = (
  warnings: string[],
  toolkitId: string,
  tools: readonly ToolDefinition[],
  metadata: ToolkitMetadata | null
): void => {
  if (tools.length === 0) {
    warnings.push(`No tools found for toolkit: ${toolkitId}`);
  }

  if (!metadata) {
    warnings.push(
      `No metadata found for toolkit: ${toolkitId} - using defaults`
    );
  }
};

const getToolkitVersion = (tools: readonly ToolDefinition[]): string => {
  const firstTool = tools[0];
  return firstTool ? extractVersion(firstTool.fullyQualifiedName) : "0.0.0";
};

const getToolkitDescription = (
  tools: readonly ToolDefinition[]
): string | null => {
  const firstTool = tools[0];
  return firstTool?.toolkitDescription ?? firstTool?.description ?? null;
};

const buildToolkitAuth = (
  tools: readonly ToolDefinition[]
): MergedToolkitAuth | null => {
  const authType = determineAuthType(tools);
  if (authType === "none") {
    return null;
  }

  return {
    type: authType,
    providerId: getProviderId(tools),
    allScopes: computeAllScopes(tools),
  };
};

const buildPreviousToolMap = (
  toolkit?: MergedToolkit
): Map<string, MergedTool> => {
  const previousToolByQualifiedName = new Map<string, MergedTool>();
  if (!toolkit) {
    return previousToolByQualifiedName;
  }

  for (const tool of toolkit.tools) {
    previousToolByQualifiedName.set(tool.qualifiedName, tool);
  }
  return previousToolByQualifiedName;
};

const buildMergedTools = async (options: {
  tools: readonly ToolDefinition[];
  toolChunks: { [key: string]: DocumentationChunk[] };
  toolExampleGenerator: ToolExampleGenerator | undefined;
  warnings: string[];
  failedTools: FailedTool[];
  previousToolByQualifiedName: ReadonlyMap<string, MergedTool>;
  llmConcurrency: number;
}): Promise<MergedTool[]> =>
  mapWithConcurrency(
    options.tools,
    (tool) =>
      transformTool(
        tool,
        options.toolChunks,
        options.toolExampleGenerator,
        options.warnings,
        options.failedTools,
        options.previousToolByQualifiedName.get(tool.qualifiedName)
      ),
    options.llmConcurrency
  );

const buildMergedToolkit = (options: {
  toolkitId: string;
  metadata: ToolkitMetadata | null;
  version: string;
  description: string | null;
  auth: MergedToolkitAuth | null;
  tools: MergedTool[];
  customSections: CustomSections | null;
  previousToolkit: MergedToolkit | undefined;
}): MergedToolkit => {
  const mergedMetadata = applyToolkitTypeOverrides(
    options.toolkitId,
    options.metadata
      ? transformMetadata(options.metadata)
      : getDefaultMetadata(options.toolkitId)
  );

  return {
    id: options.toolkitId,
    label: resolveToolkitLabel({
      toolkitId: options.toolkitId,
      metadata: options.metadata,
      description: options.description,
    }),
    version: options.version,
    description: options.description,
    metadata: mergedMetadata,
    auth: options.auth,
    tools: options.tools,
    documentationChunks: mergeCustomSectionsArrays(
      options.customSections?.documentationChunks,
      options.previousToolkit?.documentationChunks
    ),
    customImports: mergeCustomSectionsArrays(
      options.customSections?.customImports,
      options.previousToolkit?.customImports
    ),
    subPages: mergeCustomSectionsArrays(
      options.customSections?.subPages,
      options.previousToolkit?.subPages
    ),
    generatedAt: new Date().toISOString(),
  };
};

const applyOverviewIfNeeded = async (options: {
  toolkit: MergedToolkit;
  toolkitId: string;
  mergeOptions: MergeToolkitOptions;
  warnings: string[];
}): Promise<void> => {
  const { toolkit, toolkitId, mergeOptions, warnings } = options;
  const isNewToolkit = !mergeOptions.previousToolkit;
  const hasInstructions = Boolean(mergeOptions.overviewInstructions);

  if (
    mergeOptions.skipOverview ||
    !shouldAttemptOverview(hasInstructions, isNewToolkit)
  ) {
    return;
  }

  if (!mergeOptions.overviewGenerator) {
    if (hasInstructions) {
      warnings.push(
        `Overview generation skipped for ${toolkitId}: missing LLM configuration`
      );
    }
    return;
  }

  const previousOverview = getPreviousOverview(mergeOptions.previousToolkit);
  const mode: OverviewGenerationInput["mode"] = hasInstructions
    ? "file"
    : "auto";
  try {
    const overviewResult = await mergeOptions.overviewGenerator.generate(
      buildOverviewInput(
        toolkit,
        mergeOptions.overviewInstructions ?? null,
        previousOverview,
        mode
      )
    );
    if (overviewResult?.chunk) {
      toolkit.documentationChunks = applyOverviewChunk(
        toolkit.documentationChunks,
        overviewResult.chunk
      );
      return;
    }
    if (hasInstructions) {
      warnings.push(
        `Overview generation skipped for ${toolkitId}: no overview produced`
      );
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    warnings.push(`Overview generation failed for ${toolkitId}: ${message}`);
  }
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

  appendMergeWarnings(warnings, toolkitId, tools, metadata);

  const version = getToolkitVersion(tools);

  const description = getToolkitDescription(tools);

  // Fallback: resolve OAuth provider IDs from the design system when Engine API returns null.
  // We apply this at the tool level (so examples/signatures stay consistent) and then at the
  // toolkit level (as a final guard).
  const resolvedProviderId =
    options.resolveProviderId &&
    tools.some(
      (tool) =>
        tool.auth?.providerType === "oauth2" && tool.auth.providerId == null
    )
      ? options.resolveProviderId(toolkitId)
      : null;

  const toolsWithResolvedProviderId =
    resolvedProviderId !== null
      ? tools.map((tool) => {
          if (
            tool.auth?.providerType === "oauth2" &&
            tool.auth.providerId == null
          ) {
            return {
              ...tool,
              auth: { ...tool.auth, providerId: resolvedProviderId },
            };
          }
          return tool;
        })
      : tools;

  let auth = buildToolkitAuth(toolsWithResolvedProviderId);

  // Fallback: resolve provider ID from design system when Engine API returns null
  if (auth && !auth.providerId && resolvedProviderId) {
    auth = { ...auth, providerId: resolvedProviderId };
  }

  const toolChunks = (customSections?.toolChunks ?? {}) as {
    [key: string]: DocumentationChunk[];
  };
  const llmConcurrency = options.llmConcurrency ?? 5;
  const previousToolByQualifiedName = buildPreviousToolMap(
    options.previousToolkit
  );
  const mergedTools = await buildMergedTools({
    tools: toolsWithResolvedProviderId,
    toolChunks,
    toolExampleGenerator,
    warnings,
    failedTools,
    previousToolByQualifiedName,
    llmConcurrency,
  });

  const toolkit = buildMergedToolkit({
    toolkitId,
    metadata,
    version,
    description,
    auth,
    tools: mergedTools,
    customSections,
    previousToolkit: options.previousToolkit,
  });

  // Modular step: detect design system metadata drifts
  const freshnessResult = detectMetadataChanges(
    toolkitId,
    toolkit.metadata,
    toolkit.label,
    options.previousToolkit
  );
  if (freshnessResult) {
    warnings.push(...formatFreshnessWarnings(freshnessResult));
  }

  await applyOverviewIfNeeded({
    toolkit,
    toolkitId,
    mergeOptions: options,
    warnings,
  });

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
  private readonly overviewInstructionsSource: IOverviewInstructionsSource;
  private readonly overviewGenerator: ToolkitOverviewGenerator | undefined;
  private readonly skipOverview: boolean;
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
  private readonly resolveProviderId:
    | ((toolkitId: string) => string | null)
    | undefined;

  constructor(config: DataMergerConfig) {
    this.toolkitDataSource = config.toolkitDataSource;
    this.customSectionsSource = config.customSectionsSource;
    this.overviewInstructionsSource =
      config.overviewInstructionsSource ??
      createEmptyOverviewInstructionsSource();
    this.overviewGenerator = config.overviewGenerator;
    this.skipOverview = config.skipOverview ?? false;
    this.toolExampleGenerator = config.toolExampleGenerator;
    this.toolkitSummaryGenerator = config.toolkitSummaryGenerator;
    this.previousToolkits = config.previousToolkits;
    this.llmConcurrency = config.llmConcurrency ?? 5;
    this.toolkitConcurrency = config.toolkitConcurrency ?? 3;
    this.onToolkitProgress = config.onToolkitProgress;
    this.onToolkitComplete = config.onToolkitComplete;
    this.skipToolkitIds = config.skipToolkitIds ?? new Set();
    this.resolveProviderId = config.resolveProviderId;
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

  private buildMergeErrorResult(
    toolkitId: string,
    message: string
  ): MergeResult {
    return {
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
          type: isStarterToolkitId(toolkitId) ? "arcade_starter" : "arcade",
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
  }

  private async mergeToolkitEntry(
    toolkitId: string,
    toolkitData: ToolkitData
  ): Promise<MergeResult> {
    try {
      const customSections =
        await this.customSectionsSource.getCustomSections(toolkitId);
      const overviewInstructions =
        await this.overviewInstructionsSource.getOverviewInstructions(
          toolkitId
        );

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
          ...(this.overviewGenerator
            ? { overviewGenerator: this.overviewGenerator }
            : {}),
          overviewInstructions,
          skipOverview: this.skipOverview,
          ...(this.resolveProviderId
            ? { resolveProviderId: this.resolveProviderId }
            : {}),
        }
      );
      await this.maybeGenerateSummary(result, previousToolkit);

      // Write immediately if callback provided (incremental mode)
      if (this.onToolkitComplete) {
        await this.onToolkitComplete(result);
      }

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return this.buildMergeErrorResult(toolkitId, message);
    }
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
    const overviewInstructions =
      await this.overviewInstructionsSource.getOverviewInstructions(toolkitId);

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
        ...(this.overviewGenerator
          ? { overviewGenerator: this.overviewGenerator }
          : {}),
        overviewInstructions,
        skipOverview: this.skipOverview,
        ...(this.resolveProviderId
          ? { resolveProviderId: this.resolveProviderId }
          : {}),
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

        const result = await this.mergeToolkitEntry(toolkitId, toolkitData);

        this.onToolkitProgress?.(
          toolkitId,
          "done",
          result.toolkit.tools.length
        );

        return result;
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
