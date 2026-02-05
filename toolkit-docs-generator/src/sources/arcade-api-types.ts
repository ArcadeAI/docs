/**
 * Type definitions for the Arcade Production API (/v1/tools endpoint)
 *
 * This API has a different response schema from the Engine API's /v1/tool_metadata endpoint.
 */

import { z } from "zod";

// ============================================================================
// Arcade API Response Types
// ============================================================================

/**
 * Value schema for parameters
 */
export const ArcadeValueSchemaSchema = z.object({
  val_type: z.string(),
  inner_val_type: z.string().nullish(),
  enum: z.array(z.string()).nullish(),
});

export type ArcadeValueSchema = z.infer<typeof ArcadeValueSchemaSchema>;

/**
 * Tool parameter from Arcade API
 */
export const ArcadeParameterSchema = z.object({
  name: z.string(),
  required: z.boolean(),
  description: z.string().nullish(),
  value_schema: ArcadeValueSchemaSchema.nullish(),
  inferrable: z.boolean().nullish(),
});

export type ArcadeParameter = z.infer<typeof ArcadeParameterSchema>;

/**
 * Tool input from Arcade API
 */
export const ArcadeInputSchema = z.object({
  parameters: z.array(ArcadeParameterSchema).nullish(),
});

export type ArcadeInput = z.infer<typeof ArcadeInputSchema>;

/**
 * Tool output from Arcade API
 */
export const ArcadeOutputSchema = z.object({
  available_modes: z.array(z.string()).nullish(),
  description: z.string().nullish(),
  value_schema: ArcadeValueSchemaSchema.nullish(),
});

export type ArcadeOutput = z.infer<typeof ArcadeOutputSchema>;

/**
 * OAuth2 requirements
 */
export const ArcadeOAuth2Schema = z.object({
  scopes: z.array(z.string()).nullish(),
});

export type ArcadeOAuth2 = z.infer<typeof ArcadeOAuth2Schema>;

/**
 * Authorization requirements
 */
export const ArcadeAuthorizationSchema = z.object({
  id: z.string().nullish(),
  provider_id: z.string().nullish(),
  provider_type: z.string().nullish(),
  oauth2: ArcadeOAuth2Schema.nullish(),
  status: z.string().nullish(),
  status_reason: z.string().nullish(),
  token_status: z.string().nullish(),
});

export type ArcadeAuthorization = z.infer<typeof ArcadeAuthorizationSchema>;

/**
 * Secret requirement
 */
export const ArcadeSecretSchema = z.object({
  key: z.string(),
  met: z.boolean().nullish(),
  status_reason: z.string().nullish(),
});

export type ArcadeSecret = z.infer<typeof ArcadeSecretSchema>;

/**
 * Tool requirements
 */
export const ArcadeRequirementsSchema = z.object({
  met: z.boolean().nullish(),
  authorization: ArcadeAuthorizationSchema.nullish(),
  secrets: z.array(ArcadeSecretSchema).nullish(),
});

export type ArcadeRequirements = z.infer<typeof ArcadeRequirementsSchema>;

/**
 * Toolkit info embedded in tool response
 */
export const ArcadeToolkitInfoSchema = z.object({
  name: z.string(),
  description: z.string().nullish(),
  version: z.string().nullish(),
});

export type ArcadeToolkitInfo = z.infer<typeof ArcadeToolkitInfoSchema>;

/**
 * Single tool from Arcade API
 */
export const ArcadeToolSchema = z.object({
  fully_qualified_name: z.string(),
  qualified_name: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  toolkit: ArcadeToolkitInfoSchema,
  input: ArcadeInputSchema.nullish(),
  output: ArcadeOutputSchema.nullish(),
  requirements: ArcadeRequirementsSchema.nullish(),
});

export type ArcadeTool = z.infer<typeof ArcadeToolSchema>;

/**
 * Paginated response from /v1/tools
 */
export const ArcadeToolsResponseSchema = z.object({
  items: z.array(ArcadeToolSchema),
  limit: z.number(),
  offset: z.number(),
  page_count: z.number().optional(),
  total_count: z.number(),
});

export type ArcadeToolsResponse = z.infer<typeof ArcadeToolsResponseSchema>;

/**
 * Error response from Arcade API
 */
export const ArcadeErrorResponseSchema = z.object({
  detail: z.string().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
});

export type ArcadeErrorResponse = z.infer<typeof ArcadeErrorResponseSchema>;

// ============================================================================
// Parse Functions
// ============================================================================

/**
 * Parse Arcade API tools response
 */
export const parseArcadeToolsResponse = (
  payload: unknown
): ArcadeToolsResponse => {
  const result = ArcadeToolsResponseSchema.safeParse(payload);
  if (!result.success) {
    throw new Error(`Invalid Arcade API response: ${result.error.message}`);
  }
  return result.data;
};

/**
 * Parse Arcade API error response
 */
export const parseArcadeErrorResponse = (
  payload: unknown
): ArcadeErrorResponse | null => {
  const result = ArcadeErrorResponseSchema.safeParse(payload);
  if (!result.success) {
    return null;
  }
  return result.data;
};
