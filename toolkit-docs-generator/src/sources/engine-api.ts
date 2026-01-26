import type { ToolDefinition } from "../types/index.js";
import type { FetchOptions, IToolDataSource } from "./internal.js";
import {
  parseToolMetadataError,
  parseToolMetadataResponse,
} from "./tool-metadata-schema.js";

export interface EngineApiSourceConfig {
  /** Base URL for Engine (e.g., https://api.arcade.dev) */
  readonly baseUrl: string;
  /** Engine API key (Bearer token) */
  readonly apiKey: string;
  /** Optional fetch implementation for testing */
  readonly fetchFn?: typeof fetch;
  /** Page size for pagination */
  readonly pageSize?: number;
  /** Include all versions in results (required for version filtering) */
  readonly includeAllVersions?: boolean;
}

type ToolMetadataPage = {
  items: ToolDefinition[];
  totalCount: number;
};

const DEFAULT_PAGE_SIZE = 100;
const MAX_PAGE_SIZE = 100;

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
    return `${normalized}/tool_metadata`;
  }
  return `${normalized}/v1/tool_metadata`;
};

export class EngineApiSource implements IToolDataSource {
  private readonly endpoint: string;
  private readonly apiKey: string;
  private readonly fetchFn: typeof fetch;
  private readonly pageSize: number;
  private readonly includeAllVersions: boolean;

  constructor(config: EngineApiSourceConfig) {
    this.endpoint = buildEndpointUrl(config.baseUrl);
    this.apiKey = config.apiKey;
    this.fetchFn = config.fetchFn ?? fetch;
    this.pageSize = normalizePageSize(config.pageSize);
    this.includeAllVersions = config.includeAllVersions ?? false;
  }

  private async fetchPage(
    options: FetchOptions | undefined,
    offset: number
  ): Promise<ToolMetadataPage> {
    const url = new URL(this.endpoint);
    url.searchParams.set("limit", String(this.pageSize));
    url.searchParams.set("offset", String(offset));
    const includeAllVersions = options?.version
      ? true
      : this.includeAllVersions;
    if (includeAllVersions) {
      url.searchParams.set("include_all_versions", "true");
    }

    if (options?.toolkitId) {
      url.searchParams.set("toolkit", options.toolkitId);
    }
    if (options?.version) {
      url.searchParams.set("version", options.version);
    }
    if (options?.providerId) {
      url.searchParams.set("provider_id", options.providerId);
    }

    const response = await this.fetchFn(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorDetail = await this.getErrorDetail(response);
      throw new Error(
        `Engine API error ${response.status}: ${errorDetail ?? response.statusText}`
      );
    }

    const payload = (await response.json()) as unknown;
    const parsed = parseToolMetadataResponse(payload);
    return {
      items: parsed.items,
      totalCount: parsed.totalCount,
    };
  }

  async fetchToolsByToolkit(
    toolkitId: string
  ): Promise<readonly ToolDefinition[]> {
    return this.fetchAllTools({ toolkitId });
  }

  async fetchAllTools(
    options?: FetchOptions
  ): Promise<readonly ToolDefinition[]> {
    const tools: ToolDefinition[] = [];
    let offset = 0;
    let totalCount = 0;

    while (true) {
      const page = await this.fetchPage(options, offset);
      if (offset === 0) {
        totalCount = page.totalCount;
      }
      tools.push(...page.items);

      if (page.items.length === 0) {
        break;
      }

      offset += page.items.length;
      if (offset >= totalCount) {
        break;
      }
    }

    return tools;
  }

  async isAvailable(): Promise<boolean> {
    try {
      await this.fetchPage(undefined, 0);
      return true;
    } catch {
      return false;
    }
  }

  private async getErrorDetail(response: Response): Promise<string | null> {
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return null;
    }

    try {
      const payload = (await response.json()) as unknown;
      const parsed = parseToolMetadataError(payload);
      if (parsed) {
        return `${parsed.name}: ${parsed.message}`;
      }
    } catch {
      return null;
    }

    return null;
  }
}

export const createEngineApiSource = (
  config: EngineApiSourceConfig
): IToolDataSource => new EngineApiSource(config);
