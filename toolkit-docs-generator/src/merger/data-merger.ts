/**
 * Data Merger
 *
 * Combines data from Engine API, Design System, and Custom Sections
 * into the final MergedToolkit format.
 */

import { createHash } from "node:crypto";
import type { ISecretEditGenerator } from "../llm/secret-edit-generator";
import {
  isApiSuffixedToolkitId,
  normalizeToolkitId,
} from "../shared/toolkit-primitives";
import type { ICustomSectionsSource } from "../sources/interfaces";
import type {
  IToolkitDataSource,
  ToolkitData,
} from "../sources/toolkit-data-source";
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
} from "../types/index";
import { mapWithConcurrency } from "../utils/concurrency";
import { extractVersion } from "../utils/fp";
import {
  detectMetadataChanges,
  formatFreshnessWarnings,
} from "./metadata-freshness";
import {
  collectToolkitSecrets,
  detectSecretCoherenceIssues,
  groupStaleRefsByTarget,
  hasCoherenceIssues,
  type SecretCoherenceIssues,
  type StaleSecretEditTarget,
} from "./secret-coherence";

// ============================================================================
// Merger Configuration
// ============================================================================

export interface DataMergerConfig {
  toolkitDataSource: IToolkitDataSource;
  customSectionsSource: ICustomSectionsSource;
  toolExampleGenerator?: ToolExampleGenerator;
  toolkitSummaryGenerator?: ToolkitSummaryGenerator;
  /**
   * Optional editor used to repair stale secret references and fill
   * coverage gaps in summary / documentation chunks. When omitted the
   * scanners still run and emit warnings, but no content is rewritten.
   */
  secretEditGenerator?: ISecretEditGenerator;
  /**
   * When true, the secret-coherence step is disabled entirely — neither
   * the scan nor the LLM edit runs, and no warnings are emitted. Wired
   * from the CLI's `--skip-secret-coherence` flag.
   */
  skipSecretCoherence?: boolean;
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
  /** When true, only process toolkits with metadata and tools */
  requireCompleteData?: boolean;
  /** Preserve previous output for a broken toolkit instead of failing the run. */
  preserveLastKnownGood?: boolean;
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
  error?: string;
  /** A recoverable failure retained prior output or omitted a new toolkit. */
  recovery?: "preserved" | "omitted";
  /**
   * True when the design system had no metadata for this toolkit and
   * `getDefaultMetadata`'s placeholder (category, icon, docsLink, and
   * `isHidden: true`) was used instead. Also true for the last-known-good
   * placeholder in `buildMergeErrorResult`, for the same reason. Callers
   * use this to log which toolkits are running on fabricated metadata,
   * since that's easy to miss in a warnings list read only on failure.
   */
  usedDefaultMetadata: boolean;
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

/**
 * Under `--require-complete`, every toolkit must have design-system metadata.
 * Fails the run with every affected toolkit named in one error.
 */
export const assertRequireCompleteMetadata = (
  toolkitEntries: ReadonlyArray<readonly [string, ToolkitData]>
): void => {
  const missing = toolkitEntries
    .filter(([, toolkitData]) => toolkitData.metadata === null)
    .map(([toolkitId]) => toolkitId);

  if (missing.length > 0) {
    throw new Error(
      `--require-complete: missing design-system metadata for ${missing.length} toolkit(s): ${missing.join(", ")}. ` +
        "Add the toolkit to the design system catalog, or drop --require-complete to continue with a hidden placeholder record."
    );
  }
};

interface MergeToolkitOptions {
  previousToolkit?: MergedToolkit | undefined;
  /** Maximum concurrent LLM calls for tool examples (default: 5) */
  llmConcurrency?: number;
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

export const getCustomSectionsSourceHash = (
  customSections: CustomSections
): string =>
  createHash("sha256").update(stableStringify(customSections)).digest("hex");

export type ToolSignatureInput = {
  name: string;
  qualifiedName: string;
  description: string | null;
  parameters: Array<{
    name: string;
    type: string;
    innerType: string | null;
    required: boolean;
    description: string | null;
    enum: string[] | null;
    inferrable: boolean;
  }>;
  auth: {
    providerId: string | null;
    providerType: string;
    scopes: string[];
  } | null;
  secrets: string[];
  output: {
    type: string;
    description: string | null;
  } | null;
};

export const buildToolSignatureInput = (
  tool: ToolDefinition | MergedTool
): ToolSignatureInput => ({
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

const normalizeOutputTypeForComparison = (value: string): string =>
  value === "unknown" ? "string" : value;

export const buildComparableToolSignatureInput = (
  tool: ToolDefinition | MergedTool
): Record<string, unknown> => {
  const signatureInput = buildToolSignatureInput(tool);
  const parameters = signatureInput.parameters.map((parameter) => ({
    ...parameter,
    // Descriptions can vary by API source and should not force regeneration.
    description: null,
    // Treat [] and null as equivalent enum representations.
    enum: parameter.enum && parameter.enum.length > 0 ? parameter.enum : null,
  }));
  const auth = signatureInput.auth
    ? {
        ...signatureInput.auth,
        // OAuth provider IDs can vary by endpoint shape.
        providerId:
          signatureInput.auth.providerType === "oauth2"
            ? null
            : signatureInput.auth.providerId,
      }
    : null;
  const output = signatureInput.output
    ? {
        ...signatureInput.output,
        type: normalizeOutputTypeForComparison(signatureInput.output.type),
        // Output descriptions vary by source and should not force regeneration.
        description: null,
      }
    : null;

  return {
    ...signatureInput,
    // Tool descriptions are metadata and should not force regeneration.
    description: null,
    parameters,
    auth,
    output,
  };
};

export const buildComparableToolSignature = (
  tool: ToolDefinition | MergedTool
): string => stableStringify(buildComparableToolSignatureInput(tool));

const buildToolReuseSignature = (tool: ToolDefinition | MergedTool): string =>
  buildComparableToolSignature(tool);

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

  return (
    buildToolReuseSignature(tool) === buildToolReuseSignature(previousTool)
  );
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
 * Create default metadata for toolkits not found in Design System
 */
const TOOLKIT_ID_ACRONYM_BOUNDARY = /([A-Z]+)([A-Z][a-z])/g;
const TOOLKIT_ID_WORD_BOUNDARY = /([a-z0-9])([A-Z])/g;
const TOOLKIT_DESCRIPTION_LABEL_PREFIX = "Arcade.dev LLM tools for ";

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
  if (isApiSuffixedToolkitId(toolkitId) && metadata.type === "arcade") {
    return { ...metadata, type: "arcade_starter" };
  }
  return metadata;
};

/**
 * Category assigned to a toolkit when the design system has no metadata for
 * it at all. `MergedToolkitMetadata.category` is a closed enum
 * (`INTEGRATION_CATEGORIES`) with no catch-all value, so this placeholder
 * has to be one of the real categories — there is nothing else the schema
 * will accept. "development" is picked arbitrarily; it is almost certainly
 * wrong for any given toolkit, which is exactly why `getDefaultMetadata`
 * also forces `isHidden: true` below instead of trusting this value enough
 * to publish a page under it.
 */
const DEFAULT_METADATA_CATEGORY: MergedToolkitMetadata["category"] =
  "development";

/**
 * Metadata used when the design system has no entry for a toolkit at all.
 *
 * Every field here is a guess, not a fact: none of it came from the design
 * system, so none of it should be trusted enough to route or display. The
 * category in particular can't be flagged as "unknown" — the schema is a
 * closed enum with no catch-all — so a wrong-but-valid category would
 * otherwise file the toolkit under the wrong sidebar section with a
 * canonical URL nobody chose. `isHidden: true` is what actually neutralizes
 * that: `app/_lib/toolkit-static-params.ts` drops hidden toolkits from
 * routing entirely, so this placeholder record can exist on disk (and keep
 * CI green when metadata truly is optional) without ever rendering under
 * the wrong category. Real metadata — pulled in the next successful design
 * system sync — clears the flag automatically, since `metadata` will no
 * longer be null and this function won't run for that toolkit again.
 *
 * `DataMerger` only takes this path when `requireCompleteData` is false;
 * under `--require-complete` (CI's mode) a missing design-system entry
 * fails the run instead, naming the toolkit, before this function is ever
 * called. See `DataMerger.assertNoMissingMetadata`.
 */
const getDefaultMetadata = (toolkitId: string): MergedToolkitMetadata =>
  applyToolkitTypeOverrides(toolkitId, {
    category: DEFAULT_METADATA_CATEGORY,
    iconUrl: `https://design-system.arcade.dev/icons/${getDefaultIconId(toolkitId)}.svg`,
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: `https://docs.arcade.dev/en/resources/integrations/${DEFAULT_METADATA_CATEGORY}/${getDefaultDocsSlug(toolkitId)}`,
    isComingSoon: false,
    isHidden: true,
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
  previousTool: MergedTool | undefined,
  customSectionsAuthoritative: boolean
): DocumentationChunk[] => {
  const fromSource = toolChunks[toolName];

  if (customSectionsAuthoritative) {
    return fromSource ?? [];
  }

  const fromPrevious = previousTool?.documentationChunks ?? [];
  const sourceItems = fromSource ?? [];

  // If source has chunks, use source (it's authoritative)
  // If source is empty but previous has chunks, preserve previous
  if (sourceItems.length > 0) {
    return sourceItems;
  }
  return fromPrevious;
};

const describeLocation = (
  location:
    | { kind: "summary" }
    | { kind: "toolkit_chunk"; chunkIndex: number }
    | {
        kind: "tool_chunk";
        toolQualifiedName: string;
        chunkIndex: number;
      }
): string => {
  switch (location.kind) {
    case "summary":
      return "summary";
    case "toolkit_chunk":
      return `toolkit documentation chunk #${location.chunkIndex}`;
    case "tool_chunk":
      return `tool chunk #${location.chunkIndex} of ${location.toolQualifiedName}`;
    default:
      return "unknown location";
  }
};

const applyEditedContent = (
  toolkit: MergedToolkit,
  target: StaleSecretEditTarget,
  edited: string
): void => {
  switch (target.kind) {
    case "summary":
      toolkit.summary = edited;
      return;
    case "toolkit_chunk": {
      const chunk = toolkit.documentationChunks[target.chunkIndex];
      if (chunk) {
        toolkit.documentationChunks[target.chunkIndex] = {
          ...chunk,
          content: edited,
        };
      }
      return;
    }
    case "tool_chunk": {
      const tool = toolkit.tools.find(
        (candidate) => candidate.qualifiedName === target.toolQualifiedName
      );
      if (!tool) return;
      const chunk = tool.documentationChunks[target.chunkIndex];
      if (chunk) {
        tool.documentationChunks[target.chunkIndex] = {
          ...chunk,
          content: edited,
        };
      }
      return;
    }
    default:
      return;
  }
};

/**
 * Mark the toolkit's summary as stale — the summary is being carried forward
 * from a previous run even though the toolkit signature changed (regen was
 * skipped or failed). The CI check in tests/stale-summaries.test.ts surfaces
 * these toolkits so a human rerun or fix can follow.
 */
export const STALE_SUMMARY_WARNING_PREFIX = "Summary is stale for";

const markSummaryStale = (
  toolkit: MergedToolkit,
  reason: string,
  warnings: string[]
): void => {
  toolkit.summaryStale = true;
  toolkit.summaryStaleReason = reason;
  warnings.push(
    `${STALE_SUMMARY_WARNING_PREFIX} ${toolkit.id}: ${reason}. Previous summary carried forward.`
  );
};

const clearStaleSummaryFlags = (toolkit: MergedToolkit): void => {
  toolkit.summaryStale = undefined;
  toolkit.summaryStaleReason = undefined;
};

const isOverviewChunk = (chunk: DocumentationChunk): boolean =>
  chunk.location === "header" &&
  chunk.position === "before" &&
  chunk.type === "markdown" &&
  chunk.content.trim().toLowerCase().startsWith("## overview");

const hasToolkitOverviewChunk = (toolkit: MergedToolkit): boolean =>
  toolkit.documentationChunks.some(isOverviewChunk);

const mergeCustomSectionsArrays = <T>(
  fromSource: readonly T[] | undefined,
  fromPrevious: readonly T[] | undefined,
  authoritative: boolean
): T[] => {
  if (authoritative) {
    return [...(fromSource ?? [])];
  }

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
  customSectionsAuthoritative: boolean;
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
        options.previousToolByQualifiedName.get(tool.qualifiedName),
        options.customSectionsAuthoritative
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
  const customSectionsAuthoritative = options.customSections !== null;
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
      options.previousToolkit?.documentationChunks,
      customSectionsAuthoritative
    ),
    customImports: mergeCustomSectionsArrays(
      options.customSections?.customImports,
      options.previousToolkit?.customImports,
      customSectionsAuthoritative
    ),
    subPages: mergeCustomSectionsArrays(
      options.customSections?.subPages,
      options.previousToolkit?.subPages,
      customSectionsAuthoritative
    ),
    ...(options.customSections
      ? {
          curationSourceHash: getCustomSectionsSourceHash(
            options.customSections
          ),
        }
      : {}),
    generatedAt: new Date().toISOString(),
  };
};

const assertKnownToolChunkTargets = (
  tools: readonly Pick<MergedTool, "name">[],
  customSections: CustomSections | null
): void => {
  if (customSections === null) {
    return;
  }

  const knownToolNames = new Set(tools.map((tool) => tool.name));
  const unknownToolNames = Object.keys(customSections.toolChunks)
    .filter((toolName) => !knownToolNames.has(toolName))
    .sort();
  if (unknownToolNames.length > 0) {
    throw new Error(
      `Curation targets unknown tool(s): ${unknownToolNames.join(", ")}`
    );
  }
};

/** Overlay current authored curation without disturbing generated enrichment. */
export const applyCustomSectionsToToolkit = (
  toolkit: MergedToolkit,
  customSections: CustomSections | null,
  options: { ignoreUnknownToolChunks?: boolean } = {}
): MergedToolkit => {
  if (customSections === null) {
    return toolkit;
  }
  if (!options.ignoreUnknownToolChunks) {
    assertKnownToolChunkTargets(toolkit.tools, customSections);
  }

  return {
    ...toolkit,
    documentationChunks: customSections.documentationChunks,
    customImports: customSections.customImports,
    subPages: customSections.subPages,
    curationSourceHash: getCustomSectionsSourceHash(customSections),
    tools: toolkit.tools.map((tool) => ({
      ...tool,
      documentationChunks: customSections.toolChunks[tool.name] ?? [],
    })),
  };
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
  previousTool: MergedTool | undefined,
  customSectionsAuthoritative: boolean
): Promise<MergedTool> => {
  const documentationChunks = getToolDocumentationChunks(
    tool.name,
    toolChunks,
    previousTool,
    customSectionsAuthoritative
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
      metadata: tool.metadata ?? null,
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
      metadata: tool.metadata ?? null,
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
      metadata: tool.metadata ?? null,
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
      metadata: tool.metadata ?? null,
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

  assertKnownToolChunkTargets(tools, customSections);

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

  const customSectionsAuthoritative = customSections !== null;
  const toolChunks = (customSections?.toolChunks ?? {}) as {
    [key: string]: DocumentationChunk[];
  };
  const llmConcurrency = options.llmConcurrency ?? 10;
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
    customSectionsAuthoritative,
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

  return {
    toolkit,
    warnings,
    failedTools,
    usedDefaultMetadata: metadata === null,
  };
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
  private readonly secretEditGenerator: ISecretEditGenerator | undefined;
  private readonly skipSecretCoherence: boolean;
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
  private readonly requireCompleteData: boolean;
  private readonly preserveLastKnownGood: boolean;
  private readonly resolveProviderId:
    | ((toolkitId: string) => string | null)
    | undefined;

  constructor(config: DataMergerConfig) {
    this.toolkitDataSource = config.toolkitDataSource;
    this.customSectionsSource = config.customSectionsSource;
    this.toolExampleGenerator = config.toolExampleGenerator;
    this.toolkitSummaryGenerator = config.toolkitSummaryGenerator;
    this.secretEditGenerator = config.secretEditGenerator;
    this.skipSecretCoherence = config.skipSecretCoherence ?? false;
    this.previousToolkits = config.previousToolkits;
    this.llmConcurrency = config.llmConcurrency ?? 10;
    this.toolkitConcurrency = config.toolkitConcurrency ?? 5;
    this.onToolkitProgress = config.onToolkitProgress;
    this.onToolkitComplete = config.onToolkitComplete;
    this.skipToolkitIds = config.skipToolkitIds ?? new Set();
    this.requireCompleteData = config.requireCompleteData ?? false;
    this.preserveLastKnownGood = config.preserveLastKnownGood ?? false;
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
    message: string,
    previousToolkit: MergedToolkit | undefined,
    customSections: CustomSections | null
  ): MergeResult {
    if (previousToolkit) {
      return {
        toolkit: applyCustomSectionsToToolkit(previousToolkit, customSections, {
          // A previous artifact can legitimately predate a newly curated tool.
          // Preserve it while applying the curation that still has a target.
          ignoreUnknownToolChunks: true,
        }),
        warnings: [`Error processing toolkit: ${message}`],
        failedTools: [],
        error: message,
        recovery: "preserved",
        usedDefaultMetadata: false,
      };
    }

    // No previous toolkit to fall back on: this is a first-time toolkit
    // whose merge threw before metadata even entered the picture. The
    // placeholder below reuses the same "unhidden" category and forced
    // `isHidden: true` as `getDefaultMetadata` and for the same reason —
    // it's a guess, not a fact, so it must not be routable.
    return {
      toolkit: {
        id: toolkitId,
        label: toolkitId,
        version: "0.0.0",
        description: null,
        metadata: {
          category: DEFAULT_METADATA_CATEGORY,
          iconUrl: "",
          isBYOC: false,
          isPro: false,
          type: isApiSuffixedToolkitId(toolkitId) ? "arcade_starter" : "arcade",
          docsLink: "",
          isComingSoon: false,
          isHidden: true,
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
      error: message,
      recovery: "omitted",
      usedDefaultMetadata: true,
    };
  }

  private async recoverMissingMetadata(
    toolkitId: string,
    toolkitData: ToolkitData,
    customSections: CustomSections | null
  ): Promise<MergeResult | undefined> {
    if (!this.preserveLastKnownGood || toolkitData.metadata !== null) {
      return;
    }

    const previousToolkit = this.getPreviousToolkit(toolkitId);
    const result = this.buildMergeErrorResult(
      toolkitId,
      "missing design-system metadata",
      previousToolkit,
      customSections
    );
    if (this.onToolkitComplete && previousToolkit) {
      await this.onToolkitComplete(result);
    }
    return result;
  }

  private async mergeToolkitEntry(
    toolkitId: string,
    toolkitData: ToolkitData
  ): Promise<MergeResult> {
    // Curation is configuration. Parse it outside the recoverable merge path
    // so invalid source cannot silently preserve stale generated prose.
    const customSections =
      await this.customSectionsSource.getCustomSections(toolkitId);
    try {
      const recovered = await this.recoverMissingMetadata(
        toolkitId,
        toolkitData,
        customSections
      );
      if (recovered) {
        return recovered;
      }

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
          ...(this.resolveProviderId
            ? { resolveProviderId: this.resolveProviderId }
            : {}),
        }
      );
      await this.maybeGenerateSummary(result, previousToolkit);
      await this.enforceSecretCoherence(
        result,
        previousToolkit,
        customSections !== null
      );

      // Write immediately if callback provided (incremental mode)
      if (this.onToolkitComplete) {
        await this.onToolkitComplete(result);
      }

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (this.requireCompleteData) {
        throw new Error(`Failed to process ${toolkitId}: ${message}`, {
          cause: error,
        });
      }
      const previousToolkit = this.getPreviousToolkit(toolkitId);
      const result = this.buildMergeErrorResult(
        toolkitId,
        message,
        previousToolkit,
        customSections
      );
      if (this.onToolkitComplete && previousToolkit) {
        await this.onToolkitComplete(result);
      }
      return result;
    }
  }

  private async maybeGenerateSummary(
    result: MergeResult,
    previousToolkit?: MergedToolkit
  ): Promise<void> {
    if (hasToolkitOverviewChunk(result.toolkit)) {
      // Keep overview as the canonical toolkit-level narrative.
      result.toolkit.summary = undefined;
      clearStaleSummaryFlags(result.toolkit);
      return;
    }

    // Defensive guard: if something upstream already set a summary on
    // `result.toolkit`, respect it. buildMergedToolkit does not set one
    // today, but we don't want the reuse / fallback paths below to
    // silently replace a pre-populated value.
    if (result.toolkit.summary) {
      clearStaleSummaryFlags(result.toolkit);
      return;
    }

    if (previousToolkit?.summary) {
      const currentSignature = buildToolkitSummarySignature(result.toolkit);
      const previousSignature = buildToolkitSummarySignature(previousToolkit);
      // Signature-match reuse is only safe when the PREVIOUS summary itself
      // was fresh. If the previous run already flagged the summary stale,
      // a matching signature does not prove freshness — the stale summary
      // was carried forward from an even earlier toolset and will stay
      // wrong until an LLM actually regenerates it.
      if (
        currentSignature === previousSignature &&
        !previousToolkit.summaryStale
      ) {
        result.toolkit.summary = previousToolkit.summary;
        clearStaleSummaryFlags(result.toolkit);
        return;
      }
    }

    if (!this.toolkitSummaryGenerator) {
      // Preserve previous summary when no LLM is available to regenerate.
      // A slightly stale summary is better than silently wiping hand-authored
      // or previously generated content on every run that disables the LLM.
      if (previousToolkit?.summary) {
        result.toolkit.summary = previousToolkit.summary;
        markSummaryStale(
          result.toolkit,
          "llm_generator_unavailable",
          result.warnings
        );
      }
      return;
    }

    try {
      const summary = await this.toolkitSummaryGenerator.generate(
        result.toolkit
      );
      result.toolkit.summary = summary;
      clearStaleSummaryFlags(result.toolkit);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      result.warnings.push(
        `Summary generation failed for ${result.toolkit.id}: ${message}`
      );
      // Preserve previous summary on LLM failure. Losing the summary on a
      // transient API error would require waiting for another run — and if
      // the failure is persistent we keep showing the last known-good text
      // instead of a blank overview.
      if (previousToolkit?.summary) {
        result.toolkit.summary = previousToolkit.summary;
        markSummaryStale(
          result.toolkit,
          "llm_generation_failed",
          result.warnings
        );
      }
    }
  }

  private async enforceSecretCoherence(
    result: MergeResult,
    previousToolkit: MergedToolkit | undefined,
    customSectionsAuthoritative: boolean
  ): Promise<void> {
    if (this.skipSecretCoherence) {
      // --skip-secret-coherence disables the entire step: no scan, no
      // warnings, no edits. Callers who want warnings without edits
      // should leave the flag off and simply not configure a
      // secretEditGenerator.
      return;
    }
    const issues = detectSecretCoherenceIssues(result.toolkit, previousToolkit);
    if (!hasCoherenceIssues(issues)) {
      return;
    }

    this.appendCoherenceWarnings(result, issues);

    if (!this.secretEditGenerator) {
      return;
    }

    // Order matters: stale cleanup runs first, then coverage gaps are
    // re-detected against the edited summary. If cleanup accidentally
    // dropped a passage that incidentally mentioned a current secret,
    // the fresh scan notices and the editor restores it.
    await this.applyStaleRefCleanup(
      result,
      issues,
      customSectionsAuthoritative
    );
    const postCleanupIssues = detectSecretCoherenceIssues(
      result.toolkit,
      previousToolkit
    );
    await this.applyCoverageFill(result, postCleanupIssues);
  }

  private appendCoherenceWarnings(
    result: MergeResult,
    issues: SecretCoherenceIssues
  ): void {
    for (const stale of issues.staleReferences) {
      const where = describeLocation(stale.location);
      result.warnings.push(
        `Stale secret reference in ${where}: ${stale.removedSecret} (removed from toolkit ${result.toolkit.id})`
      );
    }
    for (const gap of issues.coverageGaps) {
      if (gap.kind === "missing_secret_in_summary") {
        result.warnings.push(
          `Summary does not mention current secret: ${gap.secretName} (toolkit ${result.toolkit.id})`
        );
      } else {
        result.warnings.push(
          `Summary is missing a link to the Arcade secret config docs (toolkit ${result.toolkit.id})`
        );
      }
    }
  }

  private async applyStaleRefCleanup(
    result: MergeResult,
    issues: SecretCoherenceIssues,
    customSectionsAuthoritative: boolean
  ): Promise<void> {
    const editor = this.secretEditGenerator;
    if (!editor) {
      return;
    }
    const targets = groupStaleRefsByTarget(issues.staleReferences).filter(
      (target) => !customSectionsAuthoritative || target.kind === "summary"
    );
    if (targets.length === 0) {
      return;
    }
    const currentSecrets = Array.from(collectToolkitSecrets(result.toolkit))
      .sort()
      .map((name) => name);
    for (const target of targets) {
      try {
        const edited = await editor.cleanupStaleReferences({
          kind: target.kind === "summary" ? "summary" : "documentation_chunk",
          content: target.content,
          removedSecrets: target.removedSecrets,
          currentSecrets,
          toolkitLabel: result.toolkit.label,
        });
        applyEditedContent(result.toolkit, target, edited);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        result.warnings.push(
          `Secret cleanup edit failed for ${result.toolkit.id} (${target.kind}): ${message}`
        );
      }
    }
  }

  private async applyCoverageFill(
    result: MergeResult,
    issues: SecretCoherenceIssues
  ): Promise<void> {
    const editor = this.secretEditGenerator;
    if (!editor) {
      return;
    }
    const summary = result.toolkit.summary;
    if (!summary) {
      return;
    }
    const missing = issues.coverageGaps
      .filter((gap) => gap.kind === "missing_secret_in_summary")
      .map((gap) => gap.secretName as string);
    const needsLink = issues.coverageGaps.some(
      (gap) => gap.kind === "missing_secret_config_link"
    );
    if (missing.length === 0 && !needsLink) {
      return;
    }
    const currentSecrets = Array.from(collectToolkitSecrets(result.toolkit))
      .sort()
      .map((name) => name);
    try {
      const edited = await editor.fillCoverageGaps({
        content: summary,
        missingSecretNames: missing,
        currentSecrets,
        toolkitLabel: result.toolkit.label,
        requireConfigLink: needsLink,
      });
      result.toolkit.summary = edited;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      result.warnings.push(
        `Secret coverage edit failed for ${result.toolkit.id}: ${message}`
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

    const customSections =
      await this.customSectionsSource.getCustomSections(toolkitId);
    const recovered = await this.recoverMissingMetadata(
      toolkitId,
      toolkitData,
      customSections
    );
    if (recovered) {
      return recovered;
    }

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
        ...(this.resolveProviderId
          ? { resolveProviderId: this.resolveProviderId }
          : {}),
      }
    );
    await this.maybeGenerateSummary(result, previousToolkit);
    await this.enforceSecretCoherence(
      result,
      previousToolkit,
      customSections !== null
    );

    return result;
  }

  /**
   * Under `--require-complete`, a toolkit with no design-system metadata
   * must fail the run instead of silently falling back to
   * `getDefaultMetadata`'s guessed category/docsLink/icon. Silently
   * dropping the toolkit (the old behavior) is just as bad as fabricating
   * data for it — either way nobody finds out until a human notices a
   * toolkit is missing or mis-filed. Naming every affected toolkit in one
   * error, before any concurrent processing starts, keeps CI logs
   * unambiguous about exactly what to fix upstream.
   */
  private assertNoMissingMetadata(
    toolkitEntries: ReadonlyArray<readonly [string, ToolkitData]>
  ): void {
    if (!this.requireCompleteData) {
      return;
    }

    assertRequireCompleteMetadata(toolkitEntries);
  }

  /**
   * Merge data for all toolkits
   */
  async mergeAllToolkits(): Promise<MergeResult[]> {
    const allToolkitsData = await this.toolkitDataSource.fetchAllToolkitsData();
    const toolkitEntries = Array.from(allToolkitsData.entries());

    this.assertNoMissingMetadata(toolkitEntries);

    // Filter out toolkits that should be skipped (for resume support) and,
    // under --require-complete, toolkits with no tools. Missing metadata is
    // no longer filtered here — assertNoMissingMetadata above already threw
    // if any slipped through.
    const filteredEntries = toolkitEntries.filter(
      ([toolkitId, toolkitData]) =>
        !this.skipToolkitIds.has(toolkitId.toLowerCase()) &&
        (!this.requireCompleteData || toolkitData.tools.length > 0)
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
    const toolkitEntries = Array.from(allToolkitsData.entries());

    this.assertNoMissingMetadata(toolkitEntries);

    const total = allToolkitsData.size;
    const skipped = toolkitEntries.filter(
      ([id, toolkitData]) =>
        this.skipToolkitIds.has(id.toLowerCase()) ||
        (this.requireCompleteData && toolkitData.tools.length === 0)
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
