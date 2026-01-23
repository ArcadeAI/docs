/**
 * Type definitions for toolkit documentation MDX components
 *
 * These types are designed for React component props and are compatible
 * with the JSON data structure from toolkit-docs-generator.
 */

// ============================================================================
// Documentation Chunk Types
// ============================================================================

/**
 * Type of documentation chunk content
 */
export type DocumentationChunkType =
  | "callout"
  | "markdown"
  | "code"
  | "warning"
  | "info"
  | "tip";

/**
 * Location where the chunk should be injected
 */
export type DocumentationChunkLocation =
  | "header"
  | "description"
  | "parameters"
  | "auth"
  | "secrets"
  | "output"
  | "footer";

/**
 * Position relative to the location
 */
export type DocumentationChunkPosition = "before" | "after" | "replace";

/**
 * Callout variant for styling
 */
export type DocumentationChunkVariant =
  | "default"
  | "destructive"
  | "warning"
  | "info"
  | "success";

/**
 * A documentation chunk represents custom content to inject into docs
 */
export interface DocumentationChunk {
  /** Type of content */
  type: DocumentationChunkType;
  /** Where to inject the content */
  location: DocumentationChunkLocation;
  /** Position relative to location */
  position: DocumentationChunkPosition;
  /** The actual content (markdown string) */
  content: string;
  /** Optional title for callouts */
  title?: string;
  /** Optional variant for styling */
  variant?: DocumentationChunkVariant;
}

// ============================================================================
// Tool Parameter Types
// ============================================================================

/**
 * Tool parameter definition
 */
export interface ToolParameter {
  /** Parameter name */
  name: string;
  /** Parameter type (string, integer, boolean, array, object) */
  type: string;
  /** For array types, the inner element type */
  innerType?: string;
  /** Whether the parameter is required */
  required: boolean;
  /** Parameter description */
  description: string | null;
  /** Enum values if this is an enum parameter */
  enum: string[] | null;
  /** Whether the parameter can be inferred by an LLM */
  inferrable?: boolean;
  /** Default value if not provided */
  default?: unknown;
}

// ============================================================================
// Tool Auth Types
// ============================================================================

/**
 * Tool-level authentication requirements
 */
export interface ToolAuth {
  /** Auth provider ID (e.g., "github", "google") */
  providerId: string | null;
  /** Provider type (e.g., "oauth2", "api_key") */
  providerType: string;
  /** Required OAuth scopes for this specific tool */
  scopes: string[];
}

// ============================================================================
// Tool Output Types
// ============================================================================

/**
 * Tool output schema
 */
export interface ToolOutput {
  /** Output type (object, array, string, etc.) */
  type: string;
  /** Output description */
  description: string | null;
}

// ============================================================================
// Tool Secrets Types
// ============================================================================

export type SecretType =
  | "api_key"
  | "token"
  | "client_secret"
  | "webhook_secret"
  | "private_key"
  | "password"
  | "unknown";

export interface ToolSecret {
  /** Secret name */
  name: string;
  /** Secret type classification */
  type: SecretType;
}

// ============================================================================
// Code Example Types
// ============================================================================

/**
 * Parameter value with type information for code generation
 */
export interface ExampleParameterValue {
  /** The example value to use in generated code */
  value: unknown;
  /** Parameter type for proper serialization */
  type: "string" | "integer" | "boolean" | "array" | "object";
  /** Whether this parameter is required */
  required: boolean;
}

/**
 * Tool code example configuration
 * Used to generate Python/JavaScript example code
 */
export interface ToolCodeExample {
  /** Full tool name (e.g., "Github.SetStarred") */
  toolName: string;
  /** Parameter values with type info */
  parameters: Record<string, ExampleParameterValue>;
  /** Whether this tool requires user authorization */
  requiresAuth: boolean;
  /** Auth provider ID if auth is required */
  authProvider?: string;
  /** Optional tab label for the code example */
  tabLabel?: string;
}

// ============================================================================
// Tool Definition Types
// ============================================================================

/**
 * Complete tool definition with all documentation data
 */
export interface ToolDefinition {
  /** Tool name (e.g., "CreateIssue") */
  name: string;
  /** Qualified name (e.g., "Github.CreateIssue") */
  qualifiedName: string;
  /** Fully qualified name with version (e.g., "Github.CreateIssue@1.0.0") */
  fullyQualifiedName: string;
  /** Tool description */
  description: string | null;
  /** Tool parameters */
  parameters: ToolParameter[];
  /** Tool authentication requirements */
  auth: ToolAuth | null;
  /** Required secrets */
  secrets: string[];
  /** Classified secrets (LLM-generated) */
  secretsInfo?: ToolSecret[];
  /** Tool output schema */
  output: ToolOutput | null;
  /** Custom documentation chunks for this tool */
  documentationChunks: DocumentationChunk[];
  /** Generated code example configuration */
  codeExample?: ToolCodeExample;
}

// ============================================================================
// Toolkit Metadata Types
// ============================================================================

/**
 * Toolkit category for navigation grouping
 */
export type ToolkitCategory =
  | "productivity"
  | "social"
  | "development"
  | "entertainment"
  | "search"
  | "payments"
  | "sales"
  | "databases"
  | "customer-support";

/**
 * Toolkit type classification
 */
export type ToolkitType =
  | "arcade"
  | "arcade_starter"
  | "verified"
  | "community"
  | "auth";

/**
 * Toolkit metadata from Design System
 */
export interface ToolkitMetadata {
  /** Category for navigation grouping */
  category: ToolkitCategory;
  /** Icon URL */
  iconUrl: string;
  /** Whether this toolkit requires BYOC (Bring Your Own Credentials) */
  isBYOC: boolean;
  /** Whether this is a Pro feature */
  isPro: boolean;
  /** Toolkit type classification */
  type: ToolkitType;
  /** Link to documentation */
  docsLink: string;
  /** Whether this toolkit is coming soon */
  isComingSoon?: boolean;
  /** Whether this toolkit is hidden */
  isHidden?: boolean;
}

// ============================================================================
// Toolkit Auth Types
// ============================================================================

/**
 * Toolkit-level authentication type
 */
export type ToolkitAuthType = "oauth2" | "api_key" | "mixed" | "none";

/**
 * Toolkit-level authentication summary
 */
export interface ToolkitAuth {
  /** Auth type */
  type: ToolkitAuthType;
  /** Auth provider ID */
  providerId: string | null;
  /** Union of all scopes required by tools in this toolkit */
  allScopes: string[];
}

// ============================================================================
// Complete Toolkit Data Type
// ============================================================================

/**
 * Complete toolkit data structure for rendering documentation
 * This is the main type consumed by the ToolkitPage component
 */
export interface ToolkitData {
  /** Unique toolkit ID (e.g., "Github") */
  id: string;
  /** Human-readable label (e.g., "GitHub") */
  label: string;
  /** Toolkit version (e.g., "1.0.0") */
  version: string;
  /** Toolkit description */
  description: string | null;
  /** LLM-generated summary */
  summary?: string;
  /** Metadata from Design System */
  metadata: ToolkitMetadata;
  /** Authentication requirements */
  auth: ToolkitAuth | null;
  /** All tools in this toolkit */
  tools: ToolDefinition[];
  /** Toolkit-level documentation chunks */
  documentationChunks: DocumentationChunk[];
  /** Custom imports for MDX */
  customImports: string[];
  /** Sub-pages that exist for this toolkit */
  subPages: string[];
  /** Optional pip package name override */
  pipPackageName?: string;
  /** Generation timestamp */
  generatedAt?: string;
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Props for DocumentationChunkRenderer component
 */
export interface DocumentationChunkRendererProps {
  /** Array of documentation chunks to filter and render */
  chunks: DocumentationChunk[];
  /** Filter by location */
  location: DocumentationChunkLocation;
  /** Filter by position */
  position: DocumentationChunkPosition;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Props for ToolkitHeader component
 */
export interface ToolkitHeaderProps {
  /** Toolkit ID for icon lookup */
  id: string;
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
}

/**
 * Props for ParametersTable component
 */
export interface ParametersTableProps {
  /** Array of parameters to render */
  parameters: ToolParameter[];
  /** Base URL for enum references (optional) */
  enumBaseUrl?: string;
}

/**
 * Props for ScopesDisplay component
 */
export interface ScopesDisplayProps {
  /** Array of OAuth scopes */
  scopes: string[];
  /** Display variant */
  variant?: "inline" | "callout";
  /** Optional title for the callout */
  title?: string;
}

/**
 * Props for DynamicCodeBlock component
 */
export interface DynamicCodeBlockProps {
  /** Code example configuration */
  codeExample: ToolCodeExample;
  /** Languages to generate (defaults to both) */
  languages?: ("python" | "javascript")[];
  /** Tab label override */
  tabLabel?: string;
}

/**
 * Props for ToolSection component
 */
export interface ToolSectionProps {
  /** Tool definition */
  tool: ToolDefinition;
  /** Toolkit ID (for generating anchors) */
  toolkitId: string;
  /** Whether the tool is selected in the selected tools panel */
  isSelected?: boolean;
  /** Show selection checkbox */
  showSelection?: boolean;
  /** Toggle selection handler */
  onToggleSelection?: (toolName: string) => void;
}

/**
 * Props for AvailableToolsTable component
 */
export interface AvailableToolsTableProps {
  /** Tools to display in the table */
  tools: Array<{
    name: string;
    qualifiedName: string;
    description: string | null;
    secrets?: string[];
    secretsInfo?: ToolSecret[];
    scopes?: string[];
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
  /** Enable scope filter chips */
  enableScopeFilter?: boolean;
  /** Search input placeholder */
  searchPlaceholder?: string;
  /** Filter label */
  filterLabel?: string;
  /** Scope filter label */
  scopeFilterLabel?: string;
  /** Scope filter helper text */
  scopeFilterDescription?: string;
  /** Default filter selection */
  defaultFilter?: "all" | "has_scopes" | "no_scopes" | "has_secrets" | "no_secrets";
  /** Currently selected tool names */
  selectedTools?: Set<string>;
  /** Handler for toggling tool selection */
  onToggleSelection?: (toolName: string) => void;
  /** Whether to show selection checkboxes */
  showSelection?: boolean;
}

/**
 * Props for ToolkitPage component
 */
export interface ToolkitPageProps {
  /** Complete toolkit data */
  data: ToolkitData;
}
