import { describe, expect, it } from "vitest";
import type { LlmClient } from "../../src/llm/client.js";
import { LlmToolkitSummaryGenerator } from "../../src/llm/toolkit-summary-generator.js";
import type { MergedToolkit } from "../../src/types/index.js";

const createToolkit = (
  overrides: Partial<MergedToolkit> = {}
): MergedToolkit => ({
  id: "Github",
  label: "GitHub",
  version: "1.0.0",
  description: "Tools for GitHub automation.",
  metadata: {
    category: "development",
    iconUrl: "https://design-system.arcade.dev/icons/github.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
    isComingSoon: false,
    isHidden: false,
  },
  auth: {
    type: "oauth2",
    providerId: "github",
    allScopes: ["repo"],
  },
  tools: [
    {
      name: "CreateIssue",
      qualifiedName: "Github.CreateIssue",
      fullyQualifiedName: "Github.CreateIssue@1.0.0",
      description: "Create issues in a repository.",
      parameters: [],
      auth: {
        providerId: "github",
        providerType: "oauth2",
        scopes: ["repo"],
      },
      secrets: ["GITHUB_API_KEY"],
      secretsInfo: [{ name: "GITHUB_API_KEY", type: "api_key" }],
      output: null,
      documentationChunks: [],
    },
  ],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: "2026-01-15T00:00:00.000Z",
  ...overrides,
});

describe("LlmToolkitSummaryGenerator", () => {
  it("parses summary from a JSON response", async () => {
    const client: LlmClient = {
      generateText: async () => '```json\n{"summary":"Concise summary."}\n```',
    };
    const generator = new LlmToolkitSummaryGenerator({
      client,
      model: "test-model",
    });

    const summary = await generator.generate(createToolkit());

    expect(summary).toBe("Concise summary.");
  });

  it("includes tool descriptions and auth info in the prompt", async () => {
    let capturedPrompt = "";
    const client: LlmClient = {
      generateText: async ({ prompt }) => {
        capturedPrompt = prompt;
        return '{"summary":"OK"}';
      },
    };
    const generator = new LlmToolkitSummaryGenerator({
      client,
      model: "test-model",
    });

    await generator.generate(createToolkit());

    expect(capturedPrompt).toContain("Github.CreateIssue");
    expect(capturedPrompt).toContain("Create issues in a repository.");
    expect(capturedPrompt).toContain("Auth:");
    expect(capturedPrompt).toContain("Secret types:");
    expect(capturedPrompt).toContain("Secret names:");
  });
});
