import { z } from "zod";
import type { ToolAuth, ToolDefinition, ToolkitMetadata } from "../types/index";
import { ToolkitMetadataSchema } from "../types/index";
import {
  ToolMetadataItemSchema,
  transformToolMetadataItem,
} from "./tool-metadata-schema";

const PublicCatalogAuthorizationItemSchema = z.object({
  provider_id: z.string().nullable().optional(),
  provider_type: z.string().nullable().optional(),
  scopes: z.array(z.string()).optional(),
});

const PublicCatalogRequirementsSchema = z
  .object({
    authorization: z
      .object({
        items: z
          .record(z.string(), PublicCatalogAuthorizationItemSchema)
          .nullable()
          .optional(),
      })
      .nullable()
      .optional(),
    secrets: z
      .object({
        items: z.record(z.string(), z.unknown()).nullable().optional(),
      })
      .nullable()
      .optional(),
  })
  .nullable()
  .optional();

/**
 * Toolkit branding the experience API merges in from the design system.
 *
 * Kept loose on purpose: the design system can add fields or ship a category
 * this generator doesn't know yet without breaking the parse of the whole
 * catalog page. `transformPublicToolkitMetadata` validates the mapped shape
 * and returns null when it doesn't fit, which the merger already handles.
 */
const PublicCatalogToolkitMetadataSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    category: z.string(),
    type: z.string(),
    docsLink: z.string(),
    publicIconUrl: z.string().optional(),
    iconUrl: z.string().optional(),
    isBYOC: z.boolean(),
    isPro: z.boolean(),
    isComingSoon: z.boolean(),
    isHidden: z.boolean(),
  })
  .nullable()
  .optional();

export const PublicCatalogToolkitSchema = z.object({
  name: z.string(),
  description: z.string(),
  version: z.string(),
  tool_count: z.number(),
  requirements: PublicCatalogRequirementsSchema,
  metadata: PublicCatalogToolkitMetadataSchema,
});

export const PublicCatalogToolkitResponseSchema = z.object({
  items: z.array(PublicCatalogToolkitSchema),
  limit: z.number().optional(),
  offset: z.number().optional(),
  page_count: z.number().optional(),
  total_count: z.number(),
});

export const PublicCatalogToolResponseSchema = z.object({
  items: z.array(ToolMetadataItemSchema),
  limit: z.number().optional(),
  offset: z.number().optional(),
  page_count: z.number().optional(),
  total_count: z.number(),
});

export type PublicCatalogToolkit = z.infer<typeof PublicCatalogToolkitSchema>;

/**
 * Map a catalog entry's branding block onto the generator's ToolkitMetadata.
 *
 * `id` comes from the catalog entry name rather than `metadata.id` because the
 * two disagree on casing for a dozen toolkits ("Clickup" vs "ClickUp"), and
 * everything downstream — tool namespaces, output filenames, provider
 * resolution — keys off the catalog name.
 *
 * Returns null when the branding block is missing (the experience API sets it
 * to null when its design-system read fails) or when it doesn't fit the
 * generator's schema. The merger substitutes defaults and flags the toolkit.
 */
export const transformPublicToolkitMetadata = (
  toolkit: PublicCatalogToolkit
): ToolkitMetadata | null => {
  const metadata = toolkit.metadata;
  if (!metadata) {
    return null;
  }

  const iconUrl = metadata.publicIconUrl ?? metadata.iconUrl;
  if (!iconUrl) {
    return null;
  }

  const parsed = ToolkitMetadataSchema.safeParse({
    id: toolkit.name,
    label: metadata.label,
    category: metadata.category,
    iconUrl,
    isBYOC: metadata.isBYOC,
    isPro: metadata.isPro,
    type: metadata.type,
    docsLink: metadata.docsLink,
    isComingSoon: metadata.isComingSoon,
    isHidden: metadata.isHidden,
  });

  return parsed.success ? parsed.data : null;
};

const ARCADE_PROVIDER_PREFIX = /^arcade-/;

/**
 * Drop the `arcade-` prefix the catalog puts on Arcade-hosted providers.
 *
 * The generated `providerId` becomes the auth provider docs slug
 * (`/en/references/auth-providers/<providerId>`), and those pages are named
 * `github`, `airtable`, `microsoft-powerbi` — never `arcade-github`. Providers
 * that arrive unprefixed (`salesforce`, `zendesk`, and the rest of the BYOC
 * set) already match their page and pass through untouched.
 */
const toDocsProviderId = (providerId: string): string =>
  providerId.replace(ARCADE_PROVIDER_PREFIX, "");

/**
 * Map one public tool onto the generator's ToolDefinition using the
 * requirements that tool itself publishes.
 *
 * The catalog entry's `requirements` must not be used here: it is a rollup that
 * unions every provider and scope across the toolkit's tools, so copying it onto
 * each tool documents a tool like `Daytona.DeleteSandbox` as needing GitHub
 * OAuth because another tool in the toolkit does.
 */
export const transformPublicToolItem = (
  apiTool: z.infer<typeof ToolMetadataItemSchema>
): ToolDefinition => {
  const tool = transformToolMetadataItem(apiTool);
  if (!tool.auth?.providerId) {
    return tool;
  }

  const auth: ToolAuth = {
    ...tool.auth,
    providerId: toDocsProviderId(tool.auth.providerId),
  };
  return { ...tool, auth };
};

export const groupToolsByToolkit = <T extends { toolkit?: { name?: string } }>(
  items: readonly T[]
): Map<string, T[]> => {
  const byToolkit = new Map<string, T[]>();

  for (const item of items) {
    const toolkitName = item.toolkit?.name;
    if (!toolkitName) {
      continue;
    }

    const existing = byToolkit.get(toolkitName);
    if (existing) {
      existing.push(item);
    } else {
      byToolkit.set(toolkitName, [item]);
    }
  }

  return byToolkit;
};

export const parsePublicCatalogResponse = (
  payload: unknown
): PublicCatalogToolkit[] =>
  PublicCatalogToolkitResponseSchema.parse(payload).items;

export const parsePublicCatalogItems = (
  items: unknown[]
): PublicCatalogToolkit[] =>
  items.map((item) => PublicCatalogToolkitSchema.parse(item));

export const parsePublicToolsResponse = (
  items: unknown[]
): z.infer<typeof ToolMetadataItemSchema>[] =>
  items.map((item) => ToolMetadataItemSchema.parse(item));
