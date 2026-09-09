import { z } from "zod";
import type { ToolAuth, ToolDefinition } from "../types/index";
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

export const PublicCatalogToolkitSchema = z.object({
  name: z.string(),
  description: z.string(),
  version: z.string(),
  tool_count: z.number(),
  requirements: PublicCatalogRequirementsSchema,
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
export type PublicCatalogRequirements = z.infer<
  typeof PublicCatalogRequirementsSchema
>;

const DEFAULT_OAUTH_PROVIDER_TYPE = "oauth2";

export const extractToolkitRequirements = (
  requirements: PublicCatalogRequirements | null | undefined
): { auth: ToolAuth | null; secrets: string[] } => {
  const authItems = requirements?.authorization?.items ?? {};
  const authEntries = Object.values(authItems);
  const secrets = Object.keys(requirements?.secrets?.items ?? {});

  if (authEntries.length === 0) {
    return { auth: null, secrets };
  }

  const providerId =
    authEntries.find((entry) => entry.provider_id)?.provider_id ?? null;
  const providerType =
    authEntries.find((entry) => entry.provider_type)?.provider_type ??
    DEFAULT_OAUTH_PROVIDER_TYPE;
  const scopes = [
    ...new Set(authEntries.flatMap((entry) => entry.scopes ?? [])),
  ];

  return {
    auth: {
      providerId,
      providerType,
      scopes,
    },
    secrets,
  };
};

export const transformPublicToolItem = (
  apiTool: z.infer<typeof ToolMetadataItemSchema>,
  toolkitRequirements: PublicCatalogRequirements | null | undefined
): ToolDefinition => {
  const { auth, secrets } = extractToolkitRequirements(toolkitRequirements);

  return transformToolMetadataItem({
    ...apiTool,
    requirements: {
      authorization: auth
        ? [
            {
              provider_id: auth.providerId,
              provider_type: auth.providerType,
              scopes: auth.scopes,
            },
          ]
        : null,
      secrets: secrets.length > 0 ? secrets.map((key) => ({ key })) : null,
    },
  });
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

export const parsePublicToolsResponse = (
  items: unknown[]
): z.infer<typeof ToolMetadataItemSchema>[] =>
  items.map((item) => ToolMetadataItemSchema.parse(item));
