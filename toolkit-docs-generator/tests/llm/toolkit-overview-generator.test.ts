import { describe, expect, it } from "vitest";
import type { LlmClient } from "../../src/llm/client.js";
import { LlmToolkitOverviewGenerator } from "../../src/llm/toolkit-overview-generator.js";
import type { MergedToolkit } from "../../src/types/index.js";

const createToolkit = (): MergedToolkit => ({
  id: "TestKit",
  label: "Test Kit",
  version: "1.0.0",
  description: "Test toolkit description",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com",
    isComingSoon: false,
    isHidden: false,
  },
  auth: {
    type: "oauth2",
    providerId: "test",
    allScopes: ["read"],
  },
  tools: [
    {
      name: "TestTool",
      qualifiedName: "TestKit.TestTool",
      fullyQualifiedName: "TestKit.TestTool@1.0.0",
      description: "A tool.",
      parameters: [],
      auth: {
        providerId: "test",
        providerType: "oauth2",
        scopes: ["read"],
      },
      secrets: [],
      secretsInfo: [],
      output: null,
      documentationChunks: [],
    },
  ],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
});

const createClient = (payload: string): LlmClient => ({
  provider: "openai",
  generateText: async () => payload,
});

describe("LlmToolkitOverviewGenerator", () => {
  it("skips overview when auto mode says no", async () => {
    const client = createClient(
      JSON.stringify({ shouldWrite: false, overview: "", reason: "unknown" })
    );
    const generator = new LlmToolkitOverviewGenerator({
      client,
      model: "test-model",
    });

    const result = await generator.generate({
      toolkit: createToolkit(),
      instructions: null,
      previousOverview: null,
      mode: "auto",
    });

    expect(result).toBeNull();
  });

  it("builds a header overview chunk when present", async () => {
    const client = createClient(
      JSON.stringify({ shouldWrite: true, overview: "## Overview\n\nHello." })
    );
    const generator = new LlmToolkitOverviewGenerator({
      client,
      model: "test-model",
    });

    const result = await generator.generate({
      toolkit: createToolkit(),
      instructions: null,
      previousOverview: null,
      mode: "auto",
    });

    expect(result?.chunk.location).toBe("header");
    expect(result?.chunk.position).toBe("before");
    expect(result?.chunk.content.startsWith("## Overview")).toBe(true);
  });

  it("adds an Overview heading when missing", async () => {
    const client = createClient(
      JSON.stringify({ shouldWrite: true, overview: "Short overview." })
    );
    const generator = new LlmToolkitOverviewGenerator({
      client,
      model: "test-model",
    });

    const result = await generator.generate({
      toolkit: createToolkit(),
      instructions: null,
      previousOverview: null,
      mode: "file",
    });

    expect(result?.chunk.content.startsWith("## Overview")).toBe(true);
  });
});
