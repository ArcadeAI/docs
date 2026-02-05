/**
 * Mock Metadata Source
 *
 * This source loads toolkit metadata from a JSON fixture file,
 * simulating what the Design System package provides.
 * Use this until the Design System package is properly installed.
 */
import { access, readFile } from "fs/promises";
import { z } from "zod";
import type { ToolkitMetadata } from "../types/index.js";
import { ToolkitMetadataSchema } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { IMetadataSource } from "./internal.js";

// ============================================================================
// File Schema
// ============================================================================

const MetadataFileSchema = z.record(z.string(), ToolkitMetadataSchema);

type MetadataFile = z.infer<typeof MetadataFileSchema>;

// ============================================================================
// Mock Metadata Source
// ============================================================================

export interface MockMetadataConfig {
  /** Path to the JSON fixture file */
  fixtureFilePath: string;
}

/**
 * Mock implementation of IMetadataSource that loads from JSON fixtures
 */
export class MockMetadataSource implements IMetadataSource {
  private readonly fixtureFilePath: string;
  private cachedData: MetadataFile | null = null;
  private normalizedIndex: Map<string, ToolkitMetadata> | null = null;

  constructor(config: MockMetadataConfig) {
    this.fixtureFilePath = config.fixtureFilePath;
  }

  private async loadFixture(): Promise<MetadataFile> {
    if (this.cachedData !== null) {
      return this.cachedData;
    }

    try {
      await access(this.fixtureFilePath);
      const content = await readFile(this.fixtureFilePath, "utf-8");
      const json = JSON.parse(content);
      this.cachedData = MetadataFileSchema.parse(json);
      this.normalizedIndex = this.buildNormalizedIndex(this.cachedData);
      return this.cachedData;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        this.cachedData = {};
        this.normalizedIndex = new Map();
        return this.cachedData;
      }
      throw error;
    }
  }

  private buildNormalizedIndex(
    data: MetadataFile
  ): Map<string, ToolkitMetadata> {
    const index = new Map<string, ToolkitMetadata>();
    for (const [_, metadata] of Object.entries(data)) {
      const normalized = normalizeId(metadata.id);
      index.set(normalized, metadata);
    }
    return index;
  }

  async getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null> {
    const data = await this.loadFixture();

    // Try exact match first
    const exact = data[toolkitId];
    if (exact) {
      return exact;
    }

    // Try normalized match
    if (this.normalizedIndex) {
      const normalized = this.normalizedIndex.get(normalizeId(toolkitId));
      if (normalized) {
        return normalized;
      }
    }

    return null;
  }

  async getAllToolkitsMetadata(): Promise<readonly ToolkitMetadata[]> {
    const data = await this.loadFixture();
    return Object.values(data) as ToolkitMetadata[];
  }

  async listToolkitIds(): Promise<readonly string[]> {
    const data = await this.loadFixture();
    return Object.keys(data);
  }
}

// ============================================================================
// Factory
// ============================================================================

export const createMockMetadataSource = (
  fixtureFilePath: string
): IMetadataSource => new MockMetadataSource({ fixtureFilePath });
