/**
 * Tests for the LLM tool example generator
 */
import { describe, expect, it } from "vitest";
import type { LlmClient } from "../../src/llm/client.js";
import { LlmToolExampleGenerator } from "../../src/llm/tool-example-generator.js";
import type { ToolDefinition } from "../../src/types/index.js";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: "CreateIssue",
  qualifiedName: "Github.CreateIssue",
  fullyQualifiedName: "Github.CreateIssue@1.0.0",
  description: "Create an issue",
  parameters: [
    {
      name: "owner",
      type: "string",
      required: true,
      description: "Repository owner",
      enum: null,
      inferrable: true,
    },
    {
      name: "repo",
      type: "string",
      required: true,
      description: "Repository name",
      enum: null,
      inferrable: true,
    },
  ],
  auth: {
    providerId: "github",
    providerType: "oauth2",
    scopes: ["repo"],
  },
  secrets: ["API_KEY"],
  output: null,
  ...overrides,
});

describe("LlmToolExampleGenerator", () => {
  it("should map LLM JSON output to parameter values", async () => {
    const fakeClient: LlmClient = {
      provider: "openai",
      generateText: async () =>
        JSON.stringify({
          parameters: { owner: "arcadeai", repo: "docs" },
          secrets: { API_KEY: "api_key" },
        }),
    };
    const generator = new LlmToolExampleGenerator({
      client: fakeClient,
      model: "gpt-4.1-mini",
    });

    const result = await generator.generate(createTool());

    expect(result.codeExample.parameters.owner?.value).toBe("arcadeai");
    expect(result.codeExample.parameters.repo?.value).toBe("docs");
    expect(result.secretsInfo).toEqual([{ name: "API_KEY", type: "api_key" }]);
  });

  it("should coerce numeric strings for integer parameters", async () => {
    const fakeClient: LlmClient = {
      provider: "openai",
      generateText: async () =>
        JSON.stringify({
          parameters: { owner: "arcadeai", repo: "docs", per_page: "30" },
          secrets: { API_KEY: "api_key" },
        }),
    };
    const generator = new LlmToolExampleGenerator({
      client: fakeClient,
      model: "gpt-4.1-mini",
    });

    const tool = createTool({
      parameters: [
        ...createTool().parameters,
        {
          name: "per_page",
          type: "integer",
          required: false,
          description: null,
          enum: null,
          inferrable: true,
        },
      ],
    });

    const result = await generator.generate(tool);

    expect(result.codeExample.parameters.per_page?.value).toBe(30);
  });

  it("should accept JSON wrapped in code fences", async () => {
    const fakeClient: LlmClient = {
      provider: "openai",
      generateText: async () =>
        '```json\n{"parameters":{"owner":"arcadeai","repo":"toolkit"},"secrets":{"API_KEY":"api_key"}}\n```',
    };
    const generator = new LlmToolExampleGenerator({
      client: fakeClient,
      model: "gpt-4.1-mini",
    });

    const result = await generator.generate(createTool());

    expect(result.codeExample.parameters.owner?.value).toBe("arcadeai");
    expect(result.codeExample.parameters.repo?.value).toBe("toolkit");
    expect(result.secretsInfo).toEqual([{ name: "API_KEY", type: "api_key" }]);
  });
});
