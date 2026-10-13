/**
 * Core type definitions for the toolkit docs generator
 *
 * The merged/output schemas (MergedToolkit, ToolkitIndex, and everything
 * they're built from) live in ../shared/toolkit-schemas.ts because the
 * Next.js docs app imports them too — see that file's header comment for
 * why the shared module has to live under this package's `src/`. Everything
 * below is either CLI-only or describes a pre-merge shape the app never
 * sees (raw Engine API / Design System data, extracted MDX custom
 * sections), so it stays generator-local and re-exports the shared pieces
 * it depends on.
 */
import { z } from "zod";
import {
  DocumentationChunkSchema,
  ToolAuthSchema,
  ToolkitCategorySchema,
  ToolkitSubPageSchema,
  ToolkitTypeSchema,
  ToolMetadataSchema,
  ToolOutputSchema,
  ToolParameterSchema,
} from "../shared/toolkit-schemas";

export * from "../shared/toolkit-schemas";

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
// Tool Definition Schema (raw, from Engine API, pre-merge)
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
  metadata: ToolMetadataSchema.nullable().optional(),
});

export type ToolDefinition = z.infer<typeof ToolDefinitionSchema>;

// ============================================================================
// Toolkit Metadata Schema (raw, from Design System, pre-merge)
// ============================================================================

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
// Custom Sections Schema (extracted from MDX, pre-merge)
// ============================================================================

export const CustomSectionsSchema = z.object({
  /** Toolkit-level documentation chunks */
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  /** Custom imports needed for the MDX file */
  customImports: z.array(z.string()).default([]),
  /** Sub-pages that exist for this toolkit */
  subPages: z.array(ToolkitSubPageSchema).default([]),
  /** Per-tool documentation chunks (keyed by tool name) */
  toolChunks: z
    .record(z.string(), z.array(DocumentationChunkSchema))
    .default({}),
});

export type CustomSections = z.infer<typeof CustomSectionsSchema>;
