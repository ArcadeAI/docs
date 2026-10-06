/**
 * Tests for the LLM tool example generator
 */
import { describe, expect, it } from "vitest";
import type { LlmClient } from "../../src/llm/client";
import { LlmToolExampleGenerator } from "../../src/llm/tool-example-generator";
import type { ToolDefinition } from "../../src/types/index";

const createTool = (
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  auth: {
    providerId: "github",
    providerType: "oauth2",
    scopes: ["repo"],
  },
  description: "Create an issue",
  fullyQualifiedName: "Github.CreateIssue@1.0.0",
  name: "CreateIssue",
  output: null,
  parameters: [
    {
      description: "Repository owner",
      enum: null,
      inferrable: true,
      name: "owner",
      required: true,
      type: "string",
    },
    {
      description: "Repository name",
      enum: null,
      inferrable: true,
      name: "repo",
      required: true,
      type: "string",
    },
  ],
  qualifiedName: "Github.CreateIssue",
  secrets: ["API_KEY"],
  ...overrides,
});

describe("LlmToolExampleGenerator", () => {
  it("should map LLM JSON output to parameter values", async () => {
    const fakeClient: LlmClient = {
      generateText: async () =>
        JSON.stringify({
          parameters: { owner: "arcadeai", repo: "docs" },
          secrets: { API_KEY: "api_key" },
        }),
      provider: "openai",
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
      generateText: async () =>
        JSON.stringify({
          parameters: { owner: "arcadeai", per_page: "30", repo: "docs" },
          secrets: { API_KEY: "api_key" },
        }),
      provider: "openai",
    };
    const generator = new LlmToolExampleGenerator({
      client: fakeClient,
      model: "gpt-4.1-mini",
    });

    const tool = createTool({
      parameters: [
        ...createTool().parameters,
        {
          description: null,
          enum: null,
          inferrable: true,
          name: "per_page",
          required: false,
          type: "integer",
        },
      ],
    });

    const result = await generator.generate(tool);

    expect(result.codeExample.parameters.per_page?.value).toBe(30);
  });

  it("should accept JSON wrapped in code fences", async () => {
    const fakeClient: LlmClient = {
      generateText: async () =>
        '```json\n{"parameters":{"owner":"arcadeai","repo":"toolkit"},"secrets":{"API_KEY":"api_key"}}\n```',
      provider: "openai",
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

  it("should coerce boolean strings for boolean parameters", async () => {
    const fakeClient: LlmClient = {
      generateText: async () =>
        JSON.stringify({
          parameters: { archived: "true", owner: "arcadeai", repo: "docs" },
          secrets: { API_KEY: "api_key" },
        }),
      provider: "openai",
    };
    const generator = new LlmToolExampleGenerator({
      client: fakeClient,
      model: "gpt-4.1-mini",
    });

    const tool = createTool({
      parameters: [
        ...createTool().parameters,
        {
          description: null,
          enum: null,
          inferrable: true,
          name: "archived",
          required: false,
          type: "boolean",
        },
      ],
    });

    const result = await generator.generate(tool);

    expect(result.codeExample.parameters.archived?.value).toBe(true);
  });
});
