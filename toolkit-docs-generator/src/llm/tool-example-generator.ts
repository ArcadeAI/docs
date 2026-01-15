import type {
  ToolExampleGenerator,
  ToolExampleResult,
} from "../merger/data-merger.js";
import {
  type ExampleParameterValue,
  type SecretType,
  SecretTypeSchema,
  type ToolDefinition,
  type ToolSecret,
} from "../types/index.js";
import type { LlmClient } from "./client.js";

export interface LlmToolExampleGeneratorConfig {
  readonly client: LlmClient;
  readonly model: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly systemPrompt?: string;
}

const defaultSystemPrompt =
  "Return only valid JSON. No markdown, no extra text.";

const buildPrompt = (tool: ToolDefinition): string => {
  const parameterLines = tool.parameters.map((param) => {
    const description = param.description ?? "No description";
    return `- ${param.name} (${param.type}, required: ${param.required}): ${description}`;
  });
  const secrets = tool.secrets.length > 0 ? tool.secrets.join(", ") : "None";

  return [
    "Generate example values for the tool parameters below.",
    "Return a JSON object with this shape:",
    '{ "parameters": { "<param>": "<value>" }, "secrets": { "<secret>": "<type>" } }',
    "Secret types must be one of: api_key, token, client_secret, webhook_secret, private_key, password, unknown.",
    "",
    `Tool: ${tool.qualifiedName}`,
    `Description: ${tool.description ?? "No description"}`,
    "Parameters:",
    ...parameterLines,
    `Secrets: ${secrets}`,
  ].join("\n");
};

const extractJson = (text: string): string => {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced?.[1]) {
    return fenced[1].trim();
  }
  return text.trim();
};

const parseJsonObject = (text: string): Record<string, unknown> => {
  const jsonText = extractJson(text);
  const parsed = JSON.parse(jsonText) as unknown;

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error("LLM response is not a JSON object");
  }

  return parsed as Record<string, unknown>;
};

const mapParamType = (
  type: string
): "string" | "integer" | "boolean" | "array" | "object" => {
  switch (type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "integer";
    case "boolean":
      return "boolean";
    case "array":
      return "array";
    case "object":
      return "object";
    default:
      return "string";
  }
};

const normalizeExampleValue = (paramType: string, value: unknown): unknown => {
  if (value === null || value === undefined) {
    return null;
  }

  const mappedType = mapParamType(paramType);

  if (mappedType === "integer") {
    if (typeof value === "string") {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : value;
    }
    return value;
  }

  if (mappedType === "boolean") {
    if (typeof value === "string") {
      const lowered = value.toLowerCase();
      if (lowered === "true") {
        return true;
      }
      if (lowered === "false") {
        return false;
      }
    }
    return value;
  }

  return value;
};

export class LlmToolExampleGenerator implements ToolExampleGenerator {
  private readonly client: LlmClient;
  private readonly model: string;
  private readonly temperature: number | undefined;
  private readonly maxTokens: number | undefined;
  private readonly systemPrompt: string;

  constructor(config: LlmToolExampleGeneratorConfig) {
    this.client = config.client;
    this.model = config.model;
    this.temperature = config.temperature;
    this.maxTokens = config.maxTokens;
    this.systemPrompt = config.systemPrompt ?? defaultSystemPrompt;
  }

  async generate(tool: ToolDefinition): Promise<ToolExampleResult> {
    const prompt = buildPrompt(tool);
    const request = {
      model: this.model,
      prompt,
      system: this.systemPrompt,
    } as const;

    const response = await this.client.generateText({
      ...request,
      ...(this.temperature !== undefined
        ? { temperature: this.temperature }
        : {}),
      ...(this.maxTokens !== undefined ? { maxTokens: this.maxTokens } : {}),
    });

    const payload = parseJsonObject(response);
    const rawParameters =
      (payload.parameters as Record<string, unknown> | undefined) ?? {};
    const rawSecrets =
      (payload.secrets as Record<string, unknown> | undefined) ?? {};
    const parameters: Record<string, ExampleParameterValue> = {};

    for (const param of tool.parameters) {
      const rawValue = rawParameters[param.name];
      parameters[param.name] = {
        value: normalizeExampleValue(param.type, rawValue),
        type: mapParamType(param.type),
        required: param.required,
      };
    }

    const normalizedSecrets = new Map<string, SecretType>();
    for (const [key, value] of Object.entries(rawSecrets)) {
      if (typeof value === "string") {
        const parsed = SecretTypeSchema.safeParse(value);
        normalizedSecrets.set(
          key.toLowerCase(),
          parsed.success ? parsed.data : "unknown"
        );
      }
    }

    const secretsInfo: ToolSecret[] = tool.secrets.map((secret) => ({
      name: secret,
      type: normalizedSecrets.get(secret.toLowerCase()) ?? "unknown",
    }));

    return {
      codeExample: {
        toolName: tool.qualifiedName,
        parameters,
        requiresAuth: tool.auth !== null,
        authProvider: tool.auth?.providerId ?? undefined,
        tabLabel: tool.auth
          ? "Call the Tool with User Authorization"
          : "Call the Tool",
      },
      secretsInfo,
    };
  }
}
