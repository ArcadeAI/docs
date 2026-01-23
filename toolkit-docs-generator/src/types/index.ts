/**
 * Core type definitions for the toolkit docs generator
 */
import { z } from "zod";

// ============================================================================
// CLI Input Types
// ============================================================================

/**
 * Input format for specifying which providers/toolkits to process
 * Format: "Provider:version" e.g., "Github:1.0.0"
 */
export const ProviderVersionSchema = z.object({
  provider: z.string().min(1),
  version: z.string().optional(), // If not provided, use latest
});

export type ProviderVersion = z.infer<typeof ProviderVersionSchema>;

export const GenerateInputSchema = z.object({
  providers: z.array(ProviderVersionSchema).min(1),
  outputDir: z.string().default("./output"),
  skipExamples: z.boolean().default(false),
  skipSummary: z.boolean().default(false),
  customSectionsFile: z.string().optional(),
});

export type GenerateInput = z.infer<typeof GenerateInputSchema>;

// ============================================================================
// Tool Parameter Schema
// ============================================================================

export const ToolParameterSchema = z.object({
  name: z.string(),
  type: z.string(),
  innerType: z.string().optional(),
  required: z.boolean(),
  description: z.string().nullable(),
  enum: z.array(z.string()).nullable(),
  inferrable: z.boolean().default(true),
});

export type ToolParameter = z.infer<typeof ToolParameterSchema>;

// ============================================================================
// Tool Auth Schema
// ============================================================================

export const ToolAuthSchema = z.object({
  providerId: z.string().nullable(),
  providerType: z.string(),
  scopes: z.array(z.string()),
});

export type ToolAuth = z.infer<typeof ToolAuthSchema>;

// ============================================================================
// Tool Output Schema
// ============================================================================

export const ToolOutputSchema = z.object({
  type: z.string(),
  description: z.string().nullable(),
});

export type ToolOutput = z.infer<typeof ToolOutputSchema>;

// ============================================================================
// Tool Secrets Schema
// ============================================================================

export const SecretTypeSchema = z.enum([
  "api_key",
  "token",
  "client_secret",
  "webhook_secret",
  "private_key",
  "password",
  "unknown",
]);

export type SecretType = z.infer<typeof SecretTypeSchema>;

export const ToolSecretSchema = z.object({
  name: z.string(),
  type: SecretTypeSchema,
});

export type ToolSecret = z.infer<typeof ToolSecretSchema>;

// ============================================================================
// Tool Definition Schema (from Engine API)
// ============================================================================

export const ToolDefinitionSchema = z.object({
  name: z.string(),
  qualifiedName: z.string(),
  fullyQualifiedName: z.string(),
  description: z.string().nullable(),
  toolkitDescription: z.string().nullable().optional(),
  parameters: z.array(ToolParameterSchema),
  auth: ToolAuthSchema.nullable(),
  secrets: z.array(z.string()),
  output: ToolOutputSchema.nullable(),
});

export type ToolDefinition = z.infer<typeof ToolDefinitionSchema>;

// ============================================================================
// Toolkit Metadata Schema (from Design System)
// ============================================================================

export const ToolkitCategorySchema = z.enum([
  "productivity",
  "social",
  "development",
  "entertainment",
  "search",
  "payments",
  "sales",
  "databases",
  "customer-support",
]);

export type ToolkitCategory = z.infer<typeof ToolkitCategorySchema>;

export const ToolkitTypeSchema = z.enum([
  "arcade",
  "arcade_starter",
  "verified",
  "community",
  "auth",
]);

export type ToolkitType = z.infer<typeof ToolkitTypeSchema>;

export const ToolkitMetadataSchema = z.object({
  id: z.string(),
  label: z.string(),
  category: ToolkitCategorySchema,
  iconUrl: z.string(),
  isBYOC: z.boolean(),
  isPro: z.boolean(),
  type: ToolkitTypeSchema,
  docsLink: z.string(),
  isComingSoon: z.boolean(),
  isHidden: z.boolean(),
});

export type ToolkitMetadata = z.infer<typeof ToolkitMetadataSchema>;

// ============================================================================
// Documentation Chunk Schema (for custom content injection)
// ============================================================================

/**
 * Type of documentation chunk content
 * - callout: Warning, info, or tip box
 * - markdown: Raw markdown content
 * - code: Code block with language
 * - warning: Highlighted warning message
 * - info: Informational note
 * - tip: Helpful tip
 */
export const DocumentationChunkTypeSchema = z.enum([
  "callout",
  "markdown",
  "code",
  "warning",
  "info",
  "tip",
]);

export type DocumentationChunkType = z.infer<
  typeof DocumentationChunkTypeSchema
>;

/**
 * Location where the chunk should be injected
 * - header: After the toolkit header, before tools list
 * - description: Around the tool description
 * - parameters: Around the parameters section
 * - auth: Around the auth/scopes section
 * - secrets: Around the secrets section
 * - output: Around the output section
 * - footer: After all tools, before the footer
 */
export const DocumentationChunkLocationSchema = z.enum([
  "header",
  "description",
  "parameters",
  "auth",
  "secrets",
  "output",
  "footer",
]);

export type DocumentationChunkLocation = z.infer<
  typeof DocumentationChunkLocationSchema
>;

/**
 * Position relative to the location
 */
export const DocumentationChunkPositionSchema = z.enum([
  "before",
  "after",
  "replace",
]);

export type DocumentationChunkPosition = z.infer<
  typeof DocumentationChunkPositionSchema
>;

/**
 * A documentation chunk represents custom content to inject into docs
 */
export const DocumentationChunkSchema = z.object({
  /** Type of content */
  type: DocumentationChunkTypeSchema,
  /** Where to inject the content */
  location: DocumentationChunkLocationSchema,
  /** Position relative to location (before, after, replace) */
  position: DocumentationChunkPositionSchema,
  /** The actual content (markdown string) */
  content: z.string(),
  /** Optional title for callouts */
  title: z.string().optional(),
  /** Optional variant for styling (e.g., "destructive" for warnings) */
  variant: z
    .enum(["default", "destructive", "warning", "info", "success"])
    .optional(),
});

export type DocumentationChunk = z.infer<typeof DocumentationChunkSchema>;

// ============================================================================
// Tool Code Example Schema (for generating example code)
// ============================================================================

/**
 * Parameter value with type information for code generation
 */
export const ExampleParameterValueSchema = z.object({
  /** The example value to use in code */
  value: z.unknown(),
  /** Parameter type */
  type: z.enum(["string", "integer", "boolean", "array", "object"]),
  /** Whether this parameter is required */
  required: z.boolean(),
});

export type ExampleParameterValue = z.infer<typeof ExampleParameterValueSchema>;

/**
 * Tool code example configuration
 * Used to generate Python/JavaScript example code
 */
export const ToolCodeExampleSchema = z.object({
  /** Full tool name (e.g., "Github.SetStarred") */
  toolName: z.string(),
  /** Parameter values with type info */
  parameters: z.record(z.string(), ExampleParameterValueSchema),
  /** Whether this tool requires user authorization */
  requiresAuth: z.boolean(),
  /** Auth provider ID if auth is required */
  authProvider: z.string().optional(),
  /** Optional tab label for the code example */
  tabLabel: z.string().optional(),
});

export type ToolCodeExample = z.infer<typeof ToolCodeExampleSchema>;

// ============================================================================
// Custom Sections Schema (extracted from MDX)
// ============================================================================

export const CustomSectionsSchema = z.object({
  /** Toolkit-level documentation chunks */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  /** Custom imports needed for the MDX file */
  customImports: z.array(z.string()).default([]),
  /** Sub-pages that exist for this toolkit */
  subPages: z.array(z.string()).default([]),
  /** Per-tool documentation chunks (keyed by tool name) */
  toolChunks: z
    .record(z.string(), z.array(DocumentationChunkSchema))
    .default({}),
});

export type CustomSections = z.infer<typeof CustomSectionsSchema>;

// ============================================================================
// Merged Tool Schema (output format)
// ============================================================================

export const MergedToolSchema = z.object({
  name: z.string(),
  qualifiedName: z.string(),
  fullyQualifiedName: z.string(),
  description: z.string().nullable(),
  parameters: z.array(ToolParameterSchema),
  auth: ToolAuthSchema.nullable(),
  secrets: z.array(z.string()),
  secretsInfo: z.array(ToolSecretSchema).default([]),
  output: ToolOutputSchema.nullable(),
  /** Custom documentation chunks for this tool */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  /** Generated code example configuration */
  codeExample: ToolCodeExampleSchema.optional(),
});

export type MergedTool = z.infer<typeof MergedToolSchema>;

// ============================================================================
// Merged Toolkit Schema (output format)
// ============================================================================

export const ToolkitAuthTypeSchema = z.enum([
  "oauth2",
  "api_key",
  "mixed",
  "none",
]);

export type ToolkitAuthType = z.infer<typeof ToolkitAuthTypeSchema>;

export const MergedToolkitMetadataSchema = z.object({
  category: ToolkitCategorySchema,
  iconUrl: z.string(),
  isBYOC: z.boolean(),
  isPro: z.boolean(),
  type: ToolkitTypeSchema,
  docsLink: z.string(),
  isComingSoon: z.boolean(),
  isHidden: z.boolean(),
});

export type MergedToolkitMetadata = z.infer<typeof MergedToolkitMetadataSchema>;

export const MergedToolkitAuthSchema = z.object({
  type: ToolkitAuthTypeSchema,
  providerId: z.string().nullable(),
  allScopes: z.array(z.string()),
});

export type MergedToolkitAuth = z.infer<typeof MergedToolkitAuthSchema>;

export const MergedToolkitSchema = z.object({
  /** Unique toolkit ID (e.g., "Github") */
  id: z.string(),
  /** Human-readable label (e.g., "GitHub") */
  label: z.string(),
  /** Toolkit version (e.g., "1.0.0") */
  version: z.string(),
  /** Toolkit description */
  description: z.string().nullable(),
  /** LLM-generated summary (optional) */
  summary: z.string().optional(),
  /** Metadata from Design System */
  metadata: MergedToolkitMetadataSchema,
  /** Authentication requirements */
  auth: MergedToolkitAuthSchema.nullable(),
  /** All tools in this toolkit */
  tools: z.array(MergedToolSchema),
  /** Toolkit-level documentation chunks */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  /** Custom imports for MDX */
  customImports: z.array(z.string()).default([]),
  /** Sub-pages that exist for this toolkit */
  subPages: z.array(z.string()).default([]),
  /** Generation metadata */
  generatedAt: z.string().optional(),
});

export type MergedToolkit = z.infer<typeof MergedToolkitSchema>;

// ============================================================================
// Index Output Schema
// ============================================================================

export const ToolkitIndexEntrySchema = z.object({
  id: z.string(),
  label: z.string(),
  version: z.string(),
  category: ToolkitCategorySchema,
  toolCount: z.number(),
  authType: ToolkitAuthTypeSchema,
});

export type ToolkitIndexEntry = z.infer<typeof ToolkitIndexEntrySchema>;

export const ToolkitIndexSchema = z.object({
  generatedAt: z.string(),
  version: z.string(),
  toolkits: z.array(ToolkitIndexEntrySchema),
});

export type ToolkitIndex = z.infer<typeof ToolkitIndexSchema>;
