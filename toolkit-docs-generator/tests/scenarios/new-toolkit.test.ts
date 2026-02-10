/**
 * Scenario Test: New toolkit is added
 *
 * Verifies that when a new toolkit appears in the API:
 * - A new toolkit JSON file is created
 * - The toolkit appears in index.json
 * - Default metadata is used if not provided
 */
import { mkdtemp, rm } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";

import { createJsonGenerator } from "../../src/generator/index.js";
import { createDataMerger } from "../../src/merger/data-merger.js";
import {
  EmptyCustomSectionsSource,
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory.js";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source.js";
import type { ToolDefinition, ToolkitMetadata } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "NewKit.TestTool",
  fullyQualifiedName: "NewKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "A new toolkit",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "new-toolkit-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

describe("Scenario: New toolkit is added", () => {
  it("creates toolkit JSON and adds to index", async () => {
    await withTempDir(async (outputDir) => {
      const newTool = createTool();
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([newTool]),
        metadataSource: new InMemoryMetadataSource([]),
      });

      const merger = createDataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
      });

      const generator = createJsonGenerator({
        outputDir,
        prettyPrint: true,
        generateIndex: true,
      });

      const results = await merger.mergeAllToolkits();
      const genResult = await generator.generateAll(
        results.map((r) => r.toolkit)
      );

      expect(genResult.errors).toHaveLength(0);
      expect(genResult.filesWritten.length).toBeGreaterThan(0);
      expect(
        genResult.filesWritten.some((f) => f.includes("newkit.json"))
      ).toBe(true);
      expect(genResult.filesWritten.some((f) => f.includes("index.json"))).toBe(
        true
      );

      const toolkitFile = genResult.filesWritten.find((f) =>
        f.includes("newkit.json")
      );
      expect(toolkitFile).toBeDefined();

      const indexFile = genResult.filesWritten.find((f) =>
        f.includes("index.json")
      );
      expect(indexFile).toBeDefined();
    });
  });

  it("uses default metadata when not provided", async () => {
    await withTempDir(async (_outputDir) => {
      const newTool = createTool();
      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([newTool]),
        metadataSource: new InMemoryMetadataSource([]),
      });

      const merger = createDataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
      });

      const results = await merger.mergeAllToolkits();

      expect(results[0]?.toolkit.metadata.category).toBe("development");
      expect(results[0]?.toolkit.metadata.type).toBe("arcade");
      expect(
        results[0]?.warnings.some((w) => w.includes("No metadata found"))
      ).toBe(true);
    });
  });

  it("uses provided metadata when available", async () => {
    await withTempDir(async (_outputDir) => {
      const newTool = createTool();
      const metadata: ToolkitMetadata = {
        id: "NewKit",
        label: "New Kit",
        category: "productivity",
        iconUrl: "https://example.com/icon.svg",
        isBYOC: false,
        isPro: false,
        type: "arcade",
        docsLink: "https://docs.example.com",
        isComingSoon: false,
        isHidden: false,
      };

      const toolkitDataSource = createCombinedToolkitDataSource({
        toolSource: new InMemoryToolDataSource([newTool]),
        metadataSource: new InMemoryMetadataSource([metadata]),
      });

      const merger = createDataMerger({
        toolkitDataSource,
        customSectionsSource: new EmptyCustomSectionsSource(),
      });

      const results = await merger.mergeAllToolkits();

      expect(results[0]?.toolkit.metadata.category).toBe("productivity");
      expect(results[0]?.toolkit.label).toBe("New Kit");
      expect(
        results[0]?.warnings.some((w) => w.includes("No metadata found"))
      ).toBe(false);
    });
  });
});
