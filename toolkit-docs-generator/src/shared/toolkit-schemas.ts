/**
 * Zod schemas for the merged toolkit JSON contract, shared by the Next.js
 * docs app (lib/ and components/toolkit-docs) and
 * toolkit-docs-generator. The generator validates its own output against
 * these schemas on write (see src/generator/json-generator.ts); the app
 * validates on read (see lib/toolkit-data.ts) so a file that doesn't
 * match this shape is rejected instead of crashing mid-render.
 *
 * This lives under toolkit-docs-generator/src/ (not lib/ or a repo-root
 * shared/ directory) because the generator's tsconfig pins `rootDir` to its
 * own `src/`, so a shared module outside that directory fails the
 * generator's build (`TS6059: File '...' is not under 'rootDir'`). The app
 * reaches it via the `@/` alias, same as toolkit-primitives.ts next to this
 * file.
 *
 * CLI-only input schemas (ProviderVersion, GenerateInput) and the raw,
 * pre-merge Engine/Design-System schemas (ToolDefinition, ToolkitMetadata)
 * stay in toolkit-docs-generator/src/types/index.ts: the app never sees
 * that shape, only the merged output defined here.
 */
import { z } from "zod";
import { INTEGRATION_CATEGORIES } from "./toolkit-primitives";

// ============================================================================
// Tool Parameter Schema
// ============================================================================

export const ToolParameterSchema = z.object({
  description: z.string().nullable(),
  enum: z.array(z.string()).nullable(),
  inferrable: z.boolean().default(true),
  innerType: z.string().optional(),
  name: z.string(),
  required: z.boolean(),
  type: z.string(),
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
  description: z.string().nullable(),
  type: z.string(),
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
// Tool Metadata Schema (per-tool metadata from Engine API)
// ============================================================================

export const ToolMetadataClassificationSchema = z.object({
  serviceDomains: z.array(z.string()).default([]),
});
export type ToolMetadataClassification = z.infer<
  typeof ToolMetadataClassificationSchema
>;

export const ToolMetadataBehaviorSchema = z.object({
  destructive: z.boolean().optional(),
  idempotent: z.boolean().optional(),
  openWorld: z.boolean().optional(),
  operations: z.array(z.string()).default([]),
  readOnly: z.boolean().optional(),
});
export type ToolMetadataBehavior = z.infer<typeof ToolMetadataBehaviorSchema>;

export const ToolMetadataSchema = z.object({
  behavior: ToolMetadataBehaviorSchema,
  classification: ToolMetadataClassificationSchema,
  extras: z.record(z.string(), z.unknown()).optional().nullable(),
});
export type ToolMetadata = z.infer<typeof ToolMetadataSchema>;

// ============================================================================
// Toolkit Category / Type Schemas (from Design System)
// ============================================================================

// Built from INTEGRATION_CATEGORIES (toolkit-primitives.ts) rather than a
// hand-copied list of the same values, so the generator's output contract
// and the docs app's route set can never drift apart — see that constant's
// doc comment for why there's no "others" member.
export const ToolkitCategorySchema = z.enum(INTEGRATION_CATEGORIES);

export type ToolkitCategory = z.infer<typeof ToolkitCategorySchema>;

export const ToolkitTypeSchema = z.enum([
  "arcade",
  "arcade_starter",
  "verified",
  "community",
  "auth",
]);

export type ToolkitType = z.infer<typeof ToolkitTypeSchema>;

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
  "section",
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
 * - before_available_tools: Before the available tools section (toolkit-level)
 * - after_available_tools: After the available tools section (toolkit-level)
 * - custom_section: Standalone custom section outside the tools list
 */
export const DocumentationChunkLocationSchema = z.enum([
  "header",
  "description",
  "parameters",
  "auth",
  "secrets",
  "output",
  "footer",
  "before_available_tools",
  "after_available_tools",
  "custom_section",
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
  /** The actual content (markdown string) */
  content: z.string(),
  /** Optional section header for sidebar navigation (e.g., "## Auth Setup") */
  header: z.string().optional(),
  /** Where to inject the content */
  location: DocumentationChunkLocationSchema,
  /** Position relative to location (before, after, replace) */
  position: DocumentationChunkPositionSchema,
  /** Optional priority for ordering (lower = earlier, default = 100) */
  priority: z.number().optional(),
  /** Optional title for callouts */
  title: z.string().optional(),
  /** Type of content */
  type: DocumentationChunkTypeSchema,
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
  /** Whether this parameter is required */
  required: z.boolean(),
  /** Parameter type */
  type: z.enum(["string", "integer", "boolean", "array", "object"]),
  /** The example value to use in code */
  value: z.unknown(),
});

export type ExampleParameterValue = z.infer<typeof ExampleParameterValueSchema>;

/**
 * Tool code example configuration
 * Used to generate Python/JavaScript example code
 */
export const ToolCodeExampleSchema = z.object({
  /** Auth provider ID if auth is required */
  authProvider: z.string().optional(),
  /** Parameter values with type info */
  parameters: z.record(z.string(), ExampleParameterValueSchema),
  /** Whether this tool requires user authorization */
  requiresAuth: z.boolean(),
  /** Optional tab label for the code example */
  tabLabel: z.string().optional(),
  /** Full tool name (e.g., "Github.SetStarred") */
  toolName: z.string(),
});

export type ToolCodeExample = z.infer<typeof ToolCodeExampleSchema>;

// ============================================================================
// Toolkit Sub-Page Schema
// ============================================================================

/**
 * A sub-page for a toolkit: either a string (legacy slug) or a rich object
 * with { type, content, relativePath } for inline MDX sub-page content.
 */
export const ToolkitSubPageSchema = z.union([
  z.string(),
  z.object({
    content: z.string(),
    relativePath: z.string().min(1),
    type: z.string().min(1),
  }),
]);

export type ToolkitSubPage = z.infer<typeof ToolkitSubPageSchema>;

// ============================================================================
// Merged Tool Schema (output format)
// ============================================================================

export const MergedToolSchema = z.object({
  auth: ToolAuthSchema.nullable(),
  /** Generated code example configuration */
  codeExample: ToolCodeExampleSchema.optional(),
  description: z.string().nullable(),
  /** Custom documentation chunks for this tool */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  fullyQualifiedName: z.string(),
  metadata: ToolMetadataSchema.nullable().optional(),
  name: z.string(),
  output: ToolOutputSchema.nullable(),
  parameters: z.array(ToolParameterSchema),
  qualifiedName: z.string(),
  secrets: z.array(z.string()),
  secretsInfo: z.array(ToolSecretSchema).default([]),
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
  docsLink: z.string(),
  iconUrl: z.string(),
  isBYOC: z.boolean(),
  isComingSoon: z.boolean(),
  isHidden: z.boolean(),
  isPro: z.boolean(),
  type: ToolkitTypeSchema,
});

export type MergedToolkitMetadata = z.infer<typeof MergedToolkitMetadataSchema>;

export const MergedToolkitAuthSchema = z.object({
  allScopes: z.array(z.string()),
  providerId: z.string().nullable(),
  type: ToolkitAuthTypeSchema,
});

export type MergedToolkitAuth = z.infer<typeof MergedToolkitAuthSchema>;

export const MergedToolkitSchema = z.object({
  /** Authentication requirements */
  auth: MergedToolkitAuthSchema.nullable(),
  /**
   * SHA-256 fingerprint of hand-authored curation before generated
   * post-processing edits. Used only for incremental generation.
   */
  curationSourceHash: z.string().optional(),
  /** Custom imports for MDX */
  customImports: z.array(z.string()).default([]),
  /** Toolkit description */
  description: z.string().nullable(),
  /** Toolkit-level documentation chunks */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  /** Generation metadata */
  generatedAt: z.string().optional(),
  /** Unique toolkit ID (e.g., "Github") */
  id: z.string(),
  /** Human-readable label (e.g., "GitHub") */
  label: z.string(),
  /** Metadata from Design System */
  metadata: MergedToolkitMetadataSchema,
  /**
   * Optional override for the pip package name shown in the install
   * snippet. Not currently emitted by the generator (toolkits derive it
   * from `id` via `buildPipPackageName`), but the docs app has always
   * accepted an explicit override here, so it stays part of the contract.
   */
  pipPackageName: z.string().optional(),
  /**
   * Sub-pages that exist for this toolkit.
   * Each entry is either a string (legacy slug) or a rich object with
   * { type, content, relativePath } for inline MDX sub-page content.
   */
  subPages: z.array(ToolkitSubPageSchema).default([]),
  /** LLM-generated summary (optional) */
  summary: z.string().optional(),
  /**
   * True when the current `summary` is known to be out of date with the
   * toolkit's current tools (the signature changed but regeneration was
   * skipped or failed, so the previous summary was carried forward as a
   * fallback). Cleared whenever a fresh summary is successfully generated
   * or when the summary is verified against an unchanged signature.
   */
  summaryStale: z.boolean().optional(),
  /**
   * Machine-readable reason the summary is stale (e.g.
   * "llm_generator_unavailable", "llm_generation_failed"). Always set
   * together with `summaryStale: true`. Cleared together with it.
   */
  summaryStaleReason: z.string().optional(),
  /** All tools in this toolkit */
  tools: z.array(MergedToolSchema),
  /** Toolkit version (e.g., "1.0.0") */
  version: z.string(),
});

export type MergedToolkit = z.infer<typeof MergedToolkitSchema>;

// ============================================================================
// Index Output Schema
// ============================================================================

export const ToolkitIndexEntrySchema = z.object({
  authType: ToolkitAuthTypeSchema,
  category: ToolkitCategorySchema,
  id: z.string(),
  label: z.string(),
  toolCount: z.number(),
  type: ToolkitTypeSchema,
  version: z.string(),
});

export type ToolkitIndexEntry = z.infer<typeof ToolkitIndexEntrySchema>;

export const ToolkitIndexSchema = z.object({
  generatedAt: z.string(),
  toolkits: z.array(ToolkitIndexEntrySchema),
  version: z.string(),
});

export type ToolkitIndex = z.infer<typeof ToolkitIndexSchema>;
