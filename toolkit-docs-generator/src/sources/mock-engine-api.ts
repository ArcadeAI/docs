/**
 * Mock Engine API Source
 *
 * This source loads tool definitions from JSON fixtures, simulating
 * what the real Engine API will return. Replace with EngineApiSource
 * when the API endpoint is ready.
 */
import { readFile } from "fs/promises";
import { z } from "zod";
import type { ToolDefinition, ToolParameter } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { FetchOptions, IToolDataSource } from "./internal.js";

// ============================================================================
// Engine API Response Schemas (matches planningdoc.md spec)
// ============================================================================

const ApiValueSchemaSchema = z.object({
  val_type: z.string(),
  inner_val_type: z.string().nullable(),
  enum: z.array(z.string()).nullable(),
});

const ApiParameterSchema = z.object({
  name: z.string(),
  required: z.boolean(),
  description: z.string().nullable(),
  value_schema: ApiValueSchemaSchema,
  inferrable: z.boolean().default(true),
});

const ApiToolkitInfoSchema = z.object({
  name: z.string(),
  version: z.string(),
  description: z.string().nullable(),
});

const ApiInputSchema = z.object({
  parameters: z.array(ApiParameterSchema),
});

const ApiOutputSchema = z
  .object({
    available_modes: z.array(z.string()).optional(),
    description: z.string().nullable(),
    value_schema: ApiValueSchemaSchema.nullable(),
  })
  .nullable();

const ApiAuthRequirementSchema = z
  .object({
    id: z.string(),
    provider_id: z.string().nullable(),
    provider_type: z.string(),
    scopes: z.array(z.string()).nullable(),
  })
  .nullable();

const ApiRequirementsSchema = z
  .object({
    authorization: ApiAuthRequirementSchema,
    secrets: z.array(z.string()).nullable(),
  })
  .nullable();

const ApiToolSchema = z.object({
  fully_qualified_name: z.string(),
  qualified_name: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  toolkit: ApiToolkitInfoSchema,
  input: ApiInputSchema,
  output: ApiOutputSchema,
  requirements: ApiRequirementsSchema,
});

const ApiResponseSchema = z.object({
  items: z.array(ApiToolSchema),
  total_count: z.number(),
});

type ApiTool = z.infer<typeof ApiToolSchema>;

// ============================================================================
// Transform API response to internal types
// ============================================================================

const transformParameter = (
  apiParam: z.infer<typeof ApiParameterSchema>
): ToolParameter => ({
  name: apiParam.name,
  type: apiParam.value_schema.val_type,
  innerType: apiParam.value_schema.inner_val_type ?? undefined,
  required: apiParam.required,
  description: apiParam.description,
  enum: apiParam.value_schema.enum,
  inferrable: apiParam.inferrable,
});

const transformTool = (apiTool: ApiTool): ToolDefinition => ({
  name: apiTool.name,
  qualifiedName: apiTool.qualified_name,
  fullyQualifiedName: apiTool.fully_qualified_name,
  description: apiTool.description,
  parameters: apiTool.input.parameters.map(transformParameter),
  auth: apiTool.requirements?.authorization
    ? {
        providerId: apiTool.requirements.authorization.provider_id,
        providerType: apiTool.requirements.authorization.provider_type,
        scopes: apiTool.requirements.authorization.scopes ?? [],
      }
    : null,
  secrets: apiTool.requirements?.secrets ?? [],
  output: apiTool.output
    ? {
        type: apiTool.output.value_schema?.val_type ?? "unknown",
        description: apiTool.output.description,
      }
    : null,
});

// ============================================================================
// Mock Engine API Source
// ============================================================================

export interface MockEngineApiConfig {
  /** Path to the JSON fixture file */
  fixtureFilePath: string;
}

/**
 * Mock implementation of IToolDataSource that loads from JSON fixtures
 *
 * Use this until the real Engine API endpoint is available.
 * The fixture format matches the expected API response schema.
 */
export class MockEngineApiSource implements IToolDataSource {
  private readonly fixtureFilePath: string;
  private cachedData: ToolDefinition[] | null = null;

  constructor(config: MockEngineApiConfig) {
    this.fixtureFilePath = config.fixtureFilePath;
  }

  private async loadFixture(): Promise<ToolDefinition[]> {
    if (this.cachedData !== null) {
      return this.cachedData;
    }

    const content = await readFile(this.fixtureFilePath, "utf-8");
    const json = JSON.parse(content);
    const parsed = ApiResponseSchema.parse(json);
    this.cachedData = parsed.items.map(transformTool);
    return this.cachedData;
  }

  async fetchToolsByToolkit(
    toolkitId: string
  ): Promise<readonly ToolDefinition[]> {
    const tools = await this.loadFixture();
    const normalizedId = normalizeId(toolkitId);

    return tools.filter((tool) => {
      const toolToolkitId = tool.qualifiedName.split(".")[0];
      return toolToolkitId && normalizeId(toolToolkitId) === normalizedId;
    });
  }

  async fetchAllTools(
    options?: FetchOptions
  ): Promise<readonly ToolDefinition[]> {
    let tools = await this.loadFixture();

    if (options?.toolkitId) {
      const normalizedId = normalizeId(options.toolkitId);
      tools = tools.filter((tool) => {
        const toolToolkitId = tool.qualifiedName.split(".")[0];
        return toolToolkitId && normalizeId(toolToolkitId) === normalizedId;
      });
    }

    if (options?.version) {
      tools = tools.filter((tool) => {
        const version = tool.fullyQualifiedName.split("@")[1];
        return version === options.version;
      });
    }

    if (options?.providerId) {
      tools = tools.filter(
        (tool) => tool.auth?.providerId === options.providerId
      );
    }

    return tools;
  }

  async isAvailable(): Promise<boolean> {
    try {
      await this.loadFixture();
      return true;
    } catch {
      return false;
    }
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createMockEngineApiSource = (
  fixtureFilePath: string
): IToolDataSource => new MockEngineApiSource({ fixtureFilePath });
