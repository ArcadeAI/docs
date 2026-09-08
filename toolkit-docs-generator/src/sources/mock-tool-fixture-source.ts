/**
 * Mock tool fixture source
 *
 * Loads tool definitions from JSON fixtures for local development and tests.
 */
import { readFile } from "fs/promises";
import type { ToolDefinition } from "../types/index";
import { normalizeId } from "../utils/fp";
import type { FetchOptions, ToolDataSource } from "./internal";
import { parseToolMetadataResponse } from "./tool-metadata-schema";

export interface MockToolFixtureSourceConfig {
  /** Path to the JSON fixture file */
  fixtureFilePath: string;
}

export class MockToolFixtureSource implements ToolDataSource {
  private readonly fixtureFilePath: string;
  private cachedData: ToolDefinition[] | null = null;

  constructor(config: MockToolFixtureSourceConfig) {
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

export const createMockToolFixtureSource = (
  fixtureFilePath: string
): ToolDataSource => new MockToolFixtureSource({ fixtureFilePath });
