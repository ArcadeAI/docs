import { z } from "zod";
import type { ToolDefinition, ToolParameter } from "../types/index";

const ToolMetadataValueSchema = z.object({
  enum: z.array(z.string()).nullable().optional(),
  inner_val_type: z.string().nullable().optional(),
  val_type: z.string(),
});

const ToolMetadataParameterSchema = z.object({
  description: z.string().nullable(),
  inferrable: z.boolean().default(true),
  name: z.string(),
  required: z.boolean(),
  value_schema: ToolMetadataValueSchema,
});

const ToolMetadataToolkitSchema = z.object({
  description: z.string().nullable(),
  name: z.string(),
  version: z.string(),
});

const ToolMetadataInputSchema = z.object({
  parameters: z.array(ToolMetadataParameterSchema),
});

const ToolMetadataOutputSchema = z
  .object({
    description: z.string().nullable().optional(),
    value_schema: ToolMetadataValueSchema.nullable().optional(),
  })
  .nullable()
  .optional();

const ToolMetadataAuthorizationSchema = z
  .object({
    id: z.string().nullable().optional(),
    provider_id: z.string().nullable().optional(),
    provider_type: z.string().nullable().optional(),
    scopes: z.array(z.string()),
  })
  .nullable();

const ToolMetadataSecretSchema = z.union([
  z.object({ key: z.string() }),
  z.string(),
]);

const ToolMetadataRequirementsSchema = z
  .object({
    authorization: z
      .array(ToolMetadataAuthorizationSchema)
      .nullable()
      .optional(),
    secrets: z.array(ToolMetadataSecretSchema).nullable().optional(),
  })
  .nullable()
  .optional();

const ToolItemMetadataClassificationSchema = z.object({
  service_domains: z.array(z.string()).default([]),
});

const ToolItemMetadataBehaviorSchema = z.object({
  destructive: z.boolean().optional(),
  idempotent: z.boolean().optional(),
  open_world: z.boolean().optional(),
  operations: z.array(z.string()).default([]),
  read_only: z.boolean().optional(),
});

const ToolItemMetadataSchema = z
  .object({
    behavior: ToolItemMetadataBehaviorSchema.optional().nullable(),
    classification: ToolItemMetadataClassificationSchema.optional().nullable(),
    extras: z.record(z.string(), z.unknown()).optional().nullable(),
  })
  .optional()
  .nullable();

export const ToolMetadataItemSchema = z.object({
  description: z.string().nullable(),
  fully_qualified_name: z.string(),
  input: ToolMetadataInputSchema,
  metadata: ToolItemMetadataSchema,
  name: z.string(),
  output: ToolMetadataOutputSchema,
  qualified_name: z.string(),
  requirements: ToolMetadataRequirementsSchema,
  toolkit: ToolMetadataToolkitSchema,
});

export const ToolMetadataResponseSchema = z.object({
  items: z.array(ToolMetadataItemSchema),
  limit: z.number().optional(),
  offset: z.number().optional(),
  page_count: z.number().optional(),
  total_count: z.number(),
});

const ToolMetadataToolkitSummarySchema = z.object({
  name: z.string(),
  requires_oauth: z.boolean(),
  requires_secrets: z.boolean(),
  tool_count: z.number(),
  version: z.string(),
});

export const ToolMetadataSummaryResponseSchema = z.object({
  starter_toolkits: z.number(),
  toolkits: z.array(ToolMetadataToolkitSummarySchema),
  total_toolkits: z.number(),
  total_tools: z.number(),
});

const ToolMetadataErrorSchema = z.object({
  message: z.string(),
  name: z.string(),
});

type ToolMetadataItem = z.infer<typeof ToolMetadataItemSchema>;
type ToolMetadataToolkitSummary = z.infer<
  typeof ToolMetadataToolkitSummarySchema
>;

export type ToolMetadataSummary = {
  totalTools: number;
  totalToolkits: number;
  starterToolkits: number;
  toolkits: Array<{
    name: string;
    version: string;
    toolCount: number;
    requiresSecrets: boolean;
    requiresOauth: boolean;
  }>;
};

const normalizeEnum = (values: string[] | null | undefined): string[] | null =>
  values && values.length > 0 ? values : null;

const transformParameter = (
  apiParam: z.infer<typeof ToolMetadataParameterSchema>
): ToolParameter => ({
  description: apiParam.description,
  enum: normalizeEnum(apiParam.value_schema.enum),
  inferrable: apiParam.inferrable,
  innerType: apiParam.value_schema.inner_val_type ?? undefined,
  name: apiParam.name,
  required: apiParam.required,
  type: apiParam.value_schema.val_type,
});

const normalizeSecrets = (
  secrets: z.infer<typeof ToolMetadataSecretSchema>[] | null | undefined
): string[] => {
  if (!secrets || secrets.length === 0) {
    return [];
  }

  return secrets
    .map((secret) => (typeof secret === "string" ? secret : secret.key))
    .filter((secret) => secret.length > 0);
};

type RawBehavior = z.infer<typeof ToolItemMetadataBehaviorSchema>;

import type { ToolMetadataBehavior } from "../types/index";

const transformBehavior = (
  raw: RawBehavior | null | undefined
): ToolMetadataBehavior => {
  const behavior: ToolMetadataBehavior = { operations: raw?.operations ?? [] };
  if (raw?.read_only !== undefined) behavior.readOnly = raw.read_only;
  if (raw?.destructive !== undefined) behavior.destructive = raw.destructive;
  if (raw?.idempotent !== undefined) behavior.idempotent = raw.idempotent;
  if (raw?.open_world !== undefined) behavior.openWorld = raw.open_world;
  return behavior;
};

const transformItemMetadata = (
  raw: z.infer<typeof ToolItemMetadataSchema>
): ToolDefinition["metadata"] => {
  if (raw === null || raw === undefined) return null;
  return {
    behavior: transformBehavior(raw.behavior),
    classification: {
      serviceDomains: raw.classification?.service_domains ?? [],
    },
    extras: raw.extras ?? null,
  };
};

export const transformToolMetadataItem = (
  apiTool: ToolMetadataItem
): ToolDefinition => {
  // authorization is now an array; pick the first entry (most tools have 0 or 1)
  const authEntry = apiTool.requirements?.authorization?.[0] ?? null;
  const providerType = authEntry?.provider_type ?? null;
  const metadata = transformItemMetadata(apiTool.metadata);

  return {
    auth:
      authEntry && providerType
        ? {
            providerId: authEntry.provider_id ?? null,
            providerType,
            scopes: authEntry.scopes ?? [],
          }
        : null,
    description: apiTool.description,
    fullyQualifiedName: apiTool.fully_qualified_name,
    metadata,
    name: apiTool.name,
    output: apiTool.output
      ? {
          description: apiTool.output.description ?? null,
          // Keep parity with /v1/tools normalization for source-agnostic diffs.
          type: apiTool.output.value_schema?.val_type ?? "string",
        }
      : null,
    parameters: apiTool.input.parameters.map(transformParameter),
    qualifiedName: apiTool.qualified_name,
    secrets: normalizeSecrets(apiTool.requirements?.secrets),
    toolkitDescription: apiTool.toolkit.description,
  };
};

export const parseToolMetadataResponse = (
  payload: unknown
): { items: ToolDefinition[]; totalCount: number } => {
  const parsed = ToolMetadataResponseSchema.parse(payload);
  return {
    items: parsed.items.map(transformToolMetadataItem),
    totalCount: parsed.total_count,
  };
};

export const parseToolMetadataSummaryResponse = (
  payload: unknown
): ToolMetadataSummary => {
  const parsed = ToolMetadataSummaryResponseSchema.parse(payload);
  return {
    starterToolkits: parsed.starter_toolkits,
    toolkits: parsed.toolkits.map((toolkit: ToolMetadataToolkitSummary) => ({
      name: toolkit.name,
      requiresOauth: toolkit.requires_oauth,
      requiresSecrets: toolkit.requires_secrets,
      toolCount: toolkit.tool_count,
      version: toolkit.version,
    })),
    totalToolkits: parsed.total_toolkits,
    totalTools: parsed.total_tools,
  };
};

export const parseToolMetadataError = (
  payload: unknown
): { name: string; message: string } | null => {
  const parsed = ToolMetadataErrorSchema.safeParse(payload);
  return parsed.success ? parsed.data : null;
};
