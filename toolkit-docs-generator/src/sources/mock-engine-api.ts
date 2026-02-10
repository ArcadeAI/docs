/**
 * Mock Engine API Source
 *
 * This source loads tool definitions from JSON fixtures, simulating
 * what the real Engine API will return. Replace with EngineApiSource
 * when the API endpoint is ready.
 */
import { readFile } from "fs/promises";
import type { ToolDefinition } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { FetchOptions, IToolDataSource } from "./internal.js";
import { parseToolMetadataResponse } from "./tool-metadata-schema.js";

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
    const parsed = parseToolMetadataResponse(json);
    this.cachedData = parsed.items;
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
