/**
 * Type definitions for toolkit documentation MDX components
 *
 * The data-shape types below (everything through `ToolkitData`) are
 * `z.infer` types derived from the Zod schemas in
 * toolkit-docs-generator/src/shared/toolkit-schemas.ts — the same schemas
 * the generator validates its JSON output against. Only `import type` is
 * used here: this file is imported by client components, and a runtime
 * import of the Zod schemas would ship the Zod library to the browser for
 * no benefit (the client only needs the types, never runs `.parse()`).
 *
 * Everything below `ToolkitData` (ToolSummary, ToolkitSummary, and the
 * component prop types) is app-specific shaping of that data for React
 * props and has no generator equivalent.
 */
import type { z } from "zod";
import type {
  DocumentationChunkSchema,
  ExampleParameterValueSchema,
  MergedToolkitAuthSchema,
  MergedToolkitMetadataSchema,
  MergedToolkitSchema,
  MergedToolSchema,
  SecretTypeSchema,
  ToolAuthSchema,
  ToolCodeExampleSchema,
  ToolkitAuthTypeSchema,
  ToolkitCategorySchema,
  ToolkitTypeSchema,
  ToolMetadataBehaviorSchema,
  ToolMetadataClassificationSchema,
  ToolMetadataSchema,
  ToolOutputSchema,
  ToolParameterSchema,
  ToolSecretSchema,
} from "@/toolkit-docs-generator/src/shared/toolkit-schemas";

// ============================================================================
// Documentation Chunk Types
// ============================================================================

export type DocumentationChunk = z.infer<typeof DocumentationChunkSchema>;
export type DocumentationChunkType = DocumentationChunk["type"];
export type DocumentationChunkLocation = DocumentationChunk["location"];
export type DocumentationChunkPosition = DocumentationChunk["position"];
export type DocumentationChunkVariant = NonNullable<
  DocumentationChunk["variant"]
>;

// ============================================================================
// Tool Parameter Types
// ============================================================================

export type ToolParameter = z.infer<typeof ToolParameterSchema>;

// ============================================================================
// Tool Auth Types
// ============================================================================

export type ToolAuth = z.infer<typeof ToolAuthSchema>;

// ============================================================================
// Tool Output Types
// ============================================================================

export type ToolOutput = z.infer<typeof ToolOutputSchema>;

// ============================================================================
// Tool Secrets Types
// ============================================================================

export type SecretType = z.infer<typeof SecretTypeSchema>;
export type ToolSecret = z.infer<typeof ToolSecretSchema>;

// ============================================================================
// Code Example Types
// ============================================================================

export type ExampleParameterValue = z.infer<typeof ExampleParameterValueSchema>;
export type ToolCodeExample = z.infer<typeof ToolCodeExampleSchema>;

// ============================================================================
// Tool Metadata Types
// ============================================================================

export type ToolMetadataClassification = z.infer<
  typeof ToolMetadataClassificationSchema
>;
export type ToolMetadataBehavior = z.infer<typeof ToolMetadataBehaviorSchema>;

/** UI-only helper: the boolean behavior flags, excluding `operations`. */
export type BehaviorFlagKey = Exclude<keyof ToolMetadataBehavior, "operations">;

export type ToolMetadata = z.infer<typeof ToolMetadataSchema>;

// ============================================================================
// Tool Definition Types
// ============================================================================

/**
 * Complete tool definition with all documentation data
 */
export type ToolDefinition = z.infer<typeof MergedToolSchema>;

/**
 * A tool with its heavy detail fields stripped — everything needed to render the
 * Available Tools table, the sidebar, and a collapsed tool section. The detail
 * (parameters/output/codeExample) is fetched on expand as a full ToolDefinition.
 */
export type ToolSummary = Omit<
  ToolDefinition,
  "parameters" | "output" | "codeExample"
>;

// ============================================================================
// Toolkit Metadata Types
// ============================================================================

export type ToolkitCategory = z.infer<typeof ToolkitCategorySchema>;
export type ToolkitType = z.infer<typeof ToolkitTypeSchema>;
export type ToolkitMetadata = z.infer<typeof MergedToolkitMetadataSchema>;

// ============================================================================
// Toolkit Auth Types
// ============================================================================

export type ToolkitAuthType = z.infer<typeof ToolkitAuthTypeSchema>;
export type ToolkitAuth = z.infer<typeof MergedToolkitAuthSchema>;

// ============================================================================
// Complete Toolkit Data Type
// ============================================================================

/**
 * Complete toolkit data structure for rendering documentation
 * This is the main type consumed by the ToolkitPage component
 */
export type ToolkitData = z.infer<typeof MergedToolkitSchema>;

/**
 * Toolkit data with each tool's heavy detail fields stripped. This is what the
 * client `ToolkitPage` receives, keeping the initial HTML/Flight payload small.
 */
export type ToolkitSummary = Omit<ToolkitData, "tools"> & {
  tools: ToolSummary[];
};

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Props for DocumentationChunkRenderer component
 */
export type DocumentationChunkRendererProps = {
  /** Array of documentation chunks to filter and render */
  chunks?: DocumentationChunk[] | null;
  /** Filter by location */
  location: DocumentationChunkLocation;
  /** Filter by position */
  position: DocumentationChunkPosition;
  /** Optional className for the wrapper */
  className?: string;
};

/**
 * Props for ToolkitHeader component
 */
export type ToolkitHeaderProps = {
  /** Display label */
  label: string;
  /** Toolkit description */
  description: string | null;
  /** Summary text (optional) */
  summary?: string;
  /** Toolkit metadata */
  metadata: ToolkitMetadata;
  /** Authentication info */
  auth: ToolkitAuth | null;
  /** Toolkit version */
  version?: string;
  /** Author name (defaults to "Arcade") */
  author?: string;
  /** Tool statistics */
  toolStats?: {
    total: number;
    withScopes: number;
    withSecrets: number;
  };
};

/**
 * Props for ParametersTable component
 */
export type ParametersTableProps = {
  /** Array of parameters to render */
  parameters: ToolParameter[];
  /** Base URL for enum references (optional) */
  enumBaseUrl?: string;
};

/**
 * Props for ScopesDisplay component
 */
export type ScopesDisplayProps = {
  /** Array of OAuth scopes */
  scopes: string[];
  /** Display variant */
  variant?: "inline" | "callout";
  /** Optional title for the callout */
  title?: string;
};

/**
 * Props for DynamicCodeBlock component
 */
export type DynamicCodeBlockProps = {
  /** Code example configuration */
  codeExample: ToolCodeExample;
  /** Languages to generate (defaults to both) */
  languages?: ("python" | "javascript")[];
};

/**
 * Props for ToolSection component
 */
export type ToolSectionProps = {
  /** Tool summary (heavy detail fetched lazily on expand) */
  tool: ToolSummary;
  /** Toolkit id, used to lazily fetch this tool's detail */
  toolkitId: string;
  /** Whether the tool is selected in the selected tools panel */
  isSelected?: boolean;
  /** Show selection checkbox */
  showSelection?: boolean;
  /** Toggle selection handler */
  onToggleSelection?: (toolName: string) => void;
  /** Expand on mount and keep expanded (e.g. when the URL hash targets it) */
  forceExpanded?: boolean;
};

/**
 * Props for AvailableToolsTable component
 */
export type AvailableToolsTableProps = {
  /** Tools to display in the table */
  tools: Array<{
    name: string;
    qualifiedName: string;
    description: string | null;
    secrets?: string[];
    secretsInfo?: ToolSecret[];
    scopes?: string[];
    metadata?: ToolMetadata | null;
  }>;
  /** Optional label for the secrets column */
  secretsColumnLabel?: string;
  /** How to summarize secrets in the table */
  secretsDisplay?: "summary" | "names" | "types";
  /** Override labels for secret types */
  secretTypeLabels?: Partial<Record<SecretType, string>>;
  /** Base URL for linking secret type docs */
  secretTypeDocsBaseUrl?: string;
  /** Enable search input */
  enableSearch?: boolean;
  /** Enable filters */
  enableFilters?: boolean;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Filter label */
  filterLabel?: string;
  /** Default filter selection */
  defaultFilter?:
    | "all"
    | "has_scopes"
    | "no_scopes"
    | "has_secrets"
    | "no_secrets";
  /** Currently selected tool names */
  selectedTools?: Set<string>;
  /** Handler for toggling tool selection */
  onToggleSelection?: (toolName: string) => void;
  /** Whether to show selection checkboxes */
  showSelection?: boolean;
};

/**
 * Props for ToolkitPage component
 */
export type ToolkitPageProps = {
  /** Toolkit data with per-tool detail stripped (fetched lazily on expand) */
  data: ToolkitSummary;
};
