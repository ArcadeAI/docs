import { z } from "zod";
import type { ToolDefinition, ToolParameter } from "../types/index.js";

const ToolMetadataValueSchema = z.object({
  val_type: z.string(),
  inner_val_type: z.string().nullable().optional(),
  enum: z.array(z.string()).nullable().optional(),
});

const ToolMetadataParameterSchema = z.object({
  name: z.string(),
  required: z.boolean(),
  description: z.string().nullable(),
  value_schema: ToolMetadataValueSchema,
  inferrable: z.boolean().default(true),
});

const ToolMetadataToolkitSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().nullable(),
});

const ToolMetadataInputSchema = z.object({
  parameters: z.array(ToolMetadataParameterSchema),
});

const ToolMetadataOutputSchema = z
  .object({
    description: z.string().nullable(),
    value_schema: ToolMetadataValueSchema.nullable(),
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
    authorization: ToolMetadataAuthorizationSchema.optional(),
    secrets: z.array(ToolMetadataSecretSchema).nullable().optional(),
  })
  .nullable()
  .optional();

const ToolMetadataItemSchema = z.object({
  fully_qualified_name: z.string(),
  qualified_name: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  toolkit: ToolMetadataToolkitSchema,
  input: ToolMetadataInputSchema,
  output: ToolMetadataOutputSchema,
  requirements: ToolMetadataRequirementsSchema,
});

export const ToolMetadataResponseSchema = z.object({
  items: z.array(ToolMetadataItemSchema),
  total_count: z.number(),
});

const ToolMetadataToolkitSummarySchema = z.object({
  name: z.string(),
  version: z.string(),
  tool_count: z.number(),
  requires_secrets: z.boolean(),
  requires_oauth: z.boolean(),
});

export const ToolMetadataSummaryResponseSchema = z.object({
  total_tools: z.number(),
  total_toolkits: z.number(),
  starter_toolkits: z.number(),
  toolkits: z.array(ToolMetadataToolkitSummarySchema),
});

const ToolMetadataErrorSchema = z.object({
  name: z.string(),
  message: z.string(),
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

const transformParameter = (
  apiParam: z.infer<typeof ToolMetadataParameterSchema>
): ToolParameter => ({
  name: apiParam.name,
  type: apiParam.value_schema.val_type,
  innerType: apiParam.value_schema.inner_val_type ?? undefined,
  required: apiParam.required,
  description: apiParam.description,
  enum: apiParam.value_schema.enum ?? null,
  inferrable: apiParam.inferrable,
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

export const transformToolMetadataItem = (
  apiTool: ToolMetadataItem
): ToolDefinition => ({
  name: apiTool.name,
  qualifiedName: apiTool.qualified_name,
  fullyQualifiedName: apiTool.fully_qualified_name,
  description: apiTool.description,
  toolkitDescription: apiTool.toolkit.description,
  parameters: apiTool.input.parameters.map(transformParameter),
  auth: apiTool.requirements?.authorization
    ? {
        providerId: apiTool.requirements.authorization.provider_id ?? null,
        providerType:
          apiTool.requirements.authorization.provider_type ?? "unknown",
        scopes: apiTool.requirements.authorization.scopes ?? [],
      }
    : null,
  secrets: normalizeSecrets(apiTool.requirements?.secrets),
  output: apiTool.output
    ? {
        type: apiTool.output.value_schema?.val_type ?? "unknown",
        description: apiTool.output.description ?? null,
      }
    : null,
});

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
    totalTools: parsed.total_tools,
    totalToolkits: parsed.total_toolkits,
    starterToolkits: parsed.starter_toolkits,
    toolkits: parsed.toolkits.map((toolkit: ToolMetadataToolkitSummary) => ({
      name: toolkit.name,
      version: toolkit.version,
      toolCount: toolkit.tool_count,
      requiresSecrets: toolkit.requires_secrets,
      requiresOauth: toolkit.requires_oauth,
    })),
  };
};

export const parseToolMetadataError = (
  payload: unknown
): { name: string; message: string } | null => {
  const parsed = ToolMetadataErrorSchema.safeParse(payload);
  return parsed.success ? parsed.data : null;
};
