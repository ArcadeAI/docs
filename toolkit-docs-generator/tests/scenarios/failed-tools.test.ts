/**
 * Scenario Test: Tool example generation fails
 *
 * Verifies that when tool example generation fails:
 * - The toolkit is still processed
 * - Failed tools are recorded
 * - Warnings are logged
 * - The tool has no codeExample in output
 */
import { describe, expect, it } from "vitest";

import {
  createDataMerger,
  type ToolExampleGenerator,
} from "../../src/merger/data-merger.js";
import {
  EmptyCustomSectionsSource,
  InMemoryMetadataSource,
  InMemoryToolDataSource,
} from "../../src/sources/in-memory.js";
import { createCombinedToolkitDataSource } from "../../src/sources/toolkit-data-source.js";
import type { ToolDefinition } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "Test toolkit",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

describe("Scenario: Failed tool example generation", () => {
  it("records failed tools and continues processing", async () => {
    const tools = [
      createTool({ name: "GoodTool", qualifiedName: "TestKit.GoodTool" }),
      createTool({ name: "FailTool", qualifiedName: "TestKit.FailTool" }),
      createTool({
        name: "AnotherGoodTool",
        qualifiedName: "TestKit.AnotherGoodTool",
      }),
    ];

    const failingGenerator: ToolExampleGenerator = {
      generate: async (tool) => {
        if (tool.name === "FailTool") {
          throw new Error("LLM API timeout");
        }
        return {
          codeExample: {
            toolName: tool.qualifiedName,
            parameters: {},
            requiresAuth: false,
          },
          secretsInfo: [],
        };
      },
    };

    const toolkitDataSource = createCombinedToolkitDataSource({
      toolSource: new InMemoryToolDataSource(tools),
      metadataSource: new InMemoryMetadataSource([]),
    });

    const merger = createDataMerger({
      toolkitDataSource,
      customSectionsSource: new EmptyCustomSectionsSource(),
      toolExampleGenerator: failingGenerator,
    });

    const results = await merger.mergeAllToolkits();

    expect(results).toHaveLength(1);
    const result = results[0];

    expect(result?.toolkit.tools).toHaveLength(3);
    expect(result?.failedTools).toHaveLength(1);
    expect(result?.failedTools[0]?.toolName).toBe("FailTool");
    expect(result?.failedTools[0]?.reason).toContain("LLM API timeout");
    expect(result?.warnings.some((w) => w.includes("LLM API timeout"))).toBe(
      true
    );

    const failedTool = result?.toolkit.tools.find((t) => t.name === "FailTool");
    expect(failedTool?.codeExample).toBeUndefined();

    const goodTool = result?.toolkit.tools.find((t) => t.name === "GoodTool");
    expect(goodTool?.codeExample).toBeDefined();
  });

  it("allows rerun for specific failed toolkits", async () => {
    const tools = [
      createTool({ name: "FailTool", qualifiedName: "Github.FailTool" }),
    ];

    const failingGenerator: ToolExampleGenerator = {
      generate: async () => {
        throw new Error("API error");
      },
    };

    const toolkitDataSource = createCombinedToolkitDataSource({
      toolSource: new InMemoryToolDataSource(tools),
      metadataSource: new InMemoryMetadataSource([]),
    });

    const merger = createDataMerger({
      toolkitDataSource,
      customSectionsSource: new EmptyCustomSectionsSource(),
      toolExampleGenerator: failingGenerator,
    });

    const results = await merger.mergeAllToolkits();

    expect(results[0]?.failedTools).toHaveLength(1);
    expect(results[0]?.failedTools[0]?.toolkitId).toBe("Github");
  });
});
