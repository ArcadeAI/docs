import { describe, expect, it } from "vitest";
import type { LlmClient } from "../../src/llm/client";
import { LlmToolkitSummaryGenerator } from "../../src/llm/toolkit-summary-generator";
import type { MergedToolkit } from "../../src/types/index";

const createToolkit = (
  overrides: Partial<MergedToolkit> = {}
): MergedToolkit => ({
  auth: {
    allScopes: ["repo"],
    providerId: "github",
    type: "oauth2",
  },
  customImports: [],
  description: "Tools for GitHub automation.",
  documentationChunks: [],
  generatedAt: "2026-01-15T00:00:00.000Z",
  id: "Github",
  label: "GitHub",
  metadata: {
    category: "development",
    docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
    iconUrl: "https://design-system.arcade.dev/icons/github.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [
    {
      auth: {
        providerId: "github",
        providerType: "oauth2",
        scopes: ["repo"],
      },
      description: "Create issues in a repository.",
      documentationChunks: [],
      fullyQualifiedName: "Github.CreateIssue@1.0.0",
      name: "CreateIssue",
      output: null,
      parameters: [],
      qualifiedName: "Github.CreateIssue",
      secrets: ["GITHUB_API_KEY"],
      secretsInfo: [{ name: "GITHUB_API_KEY", type: "api_key" }],
    },
  ],
  version: "1.0.0",
  ...overrides,
});

describe("LlmToolkitSummaryGenerator", () => {
  it("parses summary from a JSON response", async () => {
    const client: LlmClient = {
      generateText: async () => '```json\n{"summary":"Concise summary."}\n```',
      provider: "openai",
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
      provider: "openai",
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

  const capturePrompt = async (toolkit: MergedToolkit): Promise<string> => {
    let capturedPrompt = "";
    const client: LlmClient = {
      generateText: async ({ prompt }) => {
        capturedPrompt = prompt;
        return '{"summary":"OK"}';
      },
      provider: "openai",
    };
    const generator = new LlmToolkitSummaryGenerator({
      client,
      model: "test-model",
    });
    await generator.generate(toolkit);
    return capturedPrompt;
  };

  it("links the OAuth section to the provider page when one exists", async () => {
    const prompt = await capturePrompt(createToolkit());

    expect(prompt).toContain(
      "https://docs.arcade.dev/en/references/auth-providers/github"
    );
  });

  it("does not link to a provider page that does not exist", async () => {
    const prompt = await capturePrompt(
      createToolkit({
        auth: { allScopes: [], providerId: "box", type: "oauth2" },
      })
    );

    expect(prompt).not.toContain("references/auth-providers");
    expect(prompt).toContain("do not link to one");
  });
});
