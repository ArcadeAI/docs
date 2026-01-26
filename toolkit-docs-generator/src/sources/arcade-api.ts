/**
 * Arcade Production API Source
 *
 * Fetches tool data from the Arcade production API endpoint: /v1/tools
 * This endpoint has a different schema from the Engine API's /v1/tool_metadata.
 */

import type {
  ToolAuth,
  ToolDefinition,
  ToolOutput,
  ToolParameter,
} from "../types/index.js";
import {
  type ArcadeTool,
  parseArcadeErrorResponse,
  parseArcadeToolsResponse,
} from "./arcade-api-types.js";
import type { FetchOptions, IToolDataSource } from "./internal.js";

// ============================================================================
// Configuration
// ============================================================================

export interface ArcadeApiSourceConfig {
  /** Base URL for Arcade API (e.g., https://api.arcade.dev) */
  readonly baseUrl: string;
  /** Arcade API key (Bearer token) */
  readonly apiKey: string;
  /** Optional fetch implementation for testing */
  readonly fetchFn?: typeof fetch;
  /** Page size for pagination (default: 100, max: 100) */
  readonly pageSize?: number;
  /** Optional progress callback for pagination */
  readonly onProgress?: ((fetched: number, total: number) => void) | undefined;
}

// ============================================================================
// Constants
// ============================================================================

const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 100;
const DEFAULT_BASE_URL = "https://api.arcade.dev";

// ============================================================================
// Utility Functions
// ============================================================================

const normalizePageSize = (value?: number): number => {
  if (!value || Number.isNaN(value) || value <= 0) {
    return DEFAULT_PAGE_SIZE;
  }
  return Math.min(value, MAX_PAGE_SIZE);
};

const normalizeBaseUrl = (baseUrl: string): string =>
  baseUrl.replace(/\/+$/, "");

const buildEndpointUrl = (baseUrl: string): string => {
  const normalized = normalizeBaseUrl(baseUrl);
  if (normalized.endsWith("/v1")) {
    return `${normalized}/tools`;
  }
  return `${normalized}/v1/tools`;
};

// ============================================================================
// Response Transformation
// ============================================================================

/**
 * Map Arcade API value type to internal type string
 */
const mapValueType = (valType: string | undefined): string => {
  if (!valType) return "string";

  const typeMap: Record<string, string> = {
    string: "string",
    integer: "integer",
    number: "number",
    boolean: "boolean",
    array: "array",
    object: "object",
    json: "json",
  };

  return typeMap[valType.toLowerCase()] ?? valType;
};

/**
 * Transform Arcade API tool to internal ToolDefinition format
 */
const transformArcadeTool = (arcadeTool: ArcadeTool): ToolDefinition => {
  // Transform parameters - handle null/undefined parameters array
  const rawParams = arcadeTool.input?.parameters;
  const parameters: ToolParameter[] = (rawParams ?? []).map((param) => ({
    name: param.name,
    type: mapValueType(param.value_schema?.val_type),
    innerType: param.value_schema?.inner_val_type ?? undefined,
    required: param.required,
    description: param.description ?? null,
    enum: param.value_schema?.enum ?? null,
    inferrable: param.inferrable ?? true,
  }));

  // Transform auth - handle null/undefined authorization
  let auth: ToolAuth | null = null;
  const authReq = arcadeTool.requirements?.authorization;
  if (authReq?.provider_type) {
    auth = {
      providerId: authReq.provider_id ?? null,
      providerType: authReq.provider_type,
      scopes: authReq.oauth2?.scopes ?? [],
    };
  }

  // Transform secrets - handle null/undefined secrets array
  const rawSecrets = arcadeTool.requirements?.secrets;
  const secrets: string[] = (rawSecrets ?? []).map((s) => s.key);

  // Transform output - handle null/undefined output
  let output: ToolOutput | null = null;
  if (arcadeTool.output) {
    output = {
      type: mapValueType(arcadeTool.output.value_schema?.val_type),
      description: arcadeTool.output.description ?? null,
    };
  }

  return {
    name: arcadeTool.name,
    qualifiedName: arcadeTool.qualified_name,
    fullyQualifiedName: arcadeTool.fully_qualified_name,
    description: arcadeTool.description ?? null,
    toolkitDescription: arcadeTool.toolkit.description ?? null,
    parameters,
    auth,
    secrets,
    output,
  };
};

/**
 * Extract toolkit ID from qualified name (e.g., "GoogleCalendar.CreateEvent" -> "GoogleCalendar")
 */
const extractToolkitId = (qualifiedName: string): string => {
  const parts = qualifiedName.split(".");
  return parts[0] ?? qualifiedName;
};

// ============================================================================
// Arcade API Source Implementation
// ============================================================================

export class ArcadeApiSource implements IToolDataSource {
  private readonly endpoint: string;
  private readonly apiKey: string;
  private readonly fetchFn: typeof fetch;
  private readonly pageSize: number;
  private readonly onProgress:
    | ((fetched: number, total: number) => void)
    | undefined;

  constructor(config: ArcadeApiSourceConfig) {
    this.endpoint = buildEndpointUrl(config.baseUrl);
    this.apiKey = config.apiKey;
    this.fetchFn = config.fetchFn ?? fetch;
    this.pageSize = normalizePageSize(config.pageSize);
    this.onProgress = config.onProgress;
  }

  /**
   * Fetch a single page of tools from the API
   */
  private async fetchPage(
    _options: FetchOptions | undefined,
    offset: number
  ): Promise<{ items: ToolDefinition[]; totalCount: number }> {
    const url = new URL(this.endpoint);
    url.searchParams.set("limit", String(this.pageSize));
    url.searchParams.set("offset", String(offset));

    // Note: The Arcade API /v1/tools endpoint does not support server-side toolkit filtering.
    // All filtering is done client-side in fetchAllTools().

    const response = await this.fetchFn(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorDetail = await this.getErrorDetail(response);
      throw new Error(
        `Arcade API error ${response.status}: ${errorDetail ?? response.statusText}`
      );
    }

    const payload = (await response.json()) as unknown;
    const parsed = parseArcadeToolsResponse(payload);

    // Transform Arcade tools to internal format
    const items = parsed.items.map(transformArcadeTool);

    return {
      items,
      totalCount: parsed.total_count,
    };
  }

  /**
   * Fetch all tools, handling pagination
   */
  async fetchAllTools(
    options?: FetchOptions
  ): Promise<readonly ToolDefinition[]> {
    const allTools: ToolDefinition[] = [];
    let offset = 0;
    let totalCount = 0;

    while (true) {
      const page = await this.fetchPage(options, offset);

      if (offset === 0) {
        totalCount = page.totalCount;
        this.onProgress?.(0, totalCount);
      }

      allTools.push(...page.items);

      // Report progress
      this.onProgress?.(allTools.length, totalCount);

      if (page.items.length === 0) {
        break;
      }

      offset += page.items.length;

      if (offset >= totalCount) {
        break;
      }
    }

    // Client-side filtering by toolkit if specified
    if (options?.toolkitId) {
      const toolkitIdLower = options.toolkitId.toLowerCase();
      return allTools.filter((tool) => {
        const toolToolkitId = extractToolkitId(tool.qualifiedName);
        return toolToolkitId.toLowerCase() === toolkitIdLower;
      });
    }

    // Client-side filtering by version if specified
    if (options?.version) {
      return allTools.filter((tool) => {
        // fullyQualifiedName format: "Toolkit.Tool@version"
        return tool.fullyQualifiedName.endsWith(`@${options.version}`);
      });
    }

    return allTools;
  }

  /**
   * Fetch tools for a specific toolkit
   */
  async fetchToolsByToolkit(
    toolkitId: string
  ): Promise<readonly ToolDefinition[]> {
    return this.fetchAllTools({ toolkitId });
  }

  /**
   * Check if the API is available
   */
  async isAvailable(): Promise<boolean> {
    try {
      const url = new URL(this.endpoint);
      url.searchParams.set("limit", "1");
      url.searchParams.set("offset", "0");

      const response = await this.fetchFn(url.toString(), {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Accept: "application/json",
        },
      });

      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Extract error detail from API response
   */
  private async getErrorDetail(response: Response): Promise<string | null> {
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return null;
    }

    try {
      const payload = (await response.json()) as unknown;
      const parsed = parseArcadeErrorResponse(payload);
      if (parsed) {
        return parsed.detail ?? parsed.message ?? parsed.error ?? null;
      }
    } catch {
      return null;
    }

    return null;
  }
}

// ============================================================================
// Factory Function
// ============================================================================

/**
 * Create an Arcade API source
 */
export const createArcadeApiSource = (
  config: ArcadeApiSourceConfig
): IToolDataSource => new ArcadeApiSource(config);

/**
 * Create an Arcade API source with default production URL
 */
export const createProductionArcadeApiSource = (
  apiKey: string,
  options?: Partial<Omit<ArcadeApiSourceConfig, "apiKey" | "baseUrl">>
): IToolDataSource =>
  new ArcadeApiSource({
    baseUrl: DEFAULT_BASE_URL,
    apiKey,
    ...options,
  });
