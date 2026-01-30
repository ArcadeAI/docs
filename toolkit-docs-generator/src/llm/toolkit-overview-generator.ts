import type {
  OverviewGenerationInput,
  OverviewGenerationResult,
  ToolkitOverviewGenerator,
} from "../overview/types.js";
import type { DocumentationChunk, SecretType } from "../types/index.js";
import type { LlmClient } from "./client.js";

export interface LlmToolkitOverviewGeneratorConfig {
  readonly client: LlmClient;
  readonly model: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly systemPrompt?: string;
}

const defaultSystemPrompt =
  "Return only valid JSON. No markdown fences, no extra text.";

const collectSecrets = (tools: OverviewGenerationInput["toolkit"]["tools"]) => {
  const secretNames = new Set<string>();
  const secretTypes = new Set<SecretType>();

  for (const tool of tools) {
    for (const name of tool.secrets) {
      secretNames.add(name);
    }
    for (const secret of tool.secretsInfo ?? []) {
      secretTypes.add(secret.type);
    }
  }

  return {
    names: Array.from(secretNames),
    types: Array.from(secretTypes),
  };
};

const formatToolLines = (
  tools: OverviewGenerationInput["toolkit"]["tools"]
): string => {
  if (tools.length === 0) {
    return "None";
  }

  const sampled = tools.slice(0, 12);
  return sampled
    .map(
      (tool) =>
        `- ${tool.qualifiedName}: ${tool.description ?? "No description"}`
    )
    .join("\n");
};

const formatAuth = (toolkit: OverviewGenerationInput["toolkit"]): string => {
  if (!toolkit.auth) {
    return "none";
  }
  const scopes =
    toolkit.auth.allScopes.length > 0
      ? toolkit.auth.allScopes.join(", ")
      : "None";
  const provider = toolkit.auth.providerId ?? "unknown";
  return `${toolkit.auth.type}; provider: ${provider}; scopes: ${scopes}`;
};

const buildPrompt = (input: OverviewGenerationInput): string => {
  const { toolkit, instructions, previousOverview, mode } = input;
  const secrets = collectSecrets(toolkit.tools);
  const sources = instructions?.sources ?? [];

  const base = [
    "Write an overview section for Arcade toolkit docs.",
    'Return JSON: {"shouldWrite": boolean, "overview": "<markdown>", "reason": "<short>"}',
    "",
    "Formatting requirements:",
    "- Start with a '## Overview' heading.",
    "- 1 short paragraph explaining what the toolkit enables.",
    "- Add a **Capabilities** list with 3 to 5 bullet points.",
    "- If auth type is oauth2 or mixed, add an **OAuth** section with provider and scopes.",
    "- If auth type is api_key or mixed, mention API key usage in **OAuth**.",
    "- If secrets exist, add a **Secrets** section describing secret types and examples.",
    "- Use concise developer-focused language.",
    "",
  ];

  const modeGuidance =
    mode === "auto"
      ? [
          "Decision rule:",
          '- If you are not confident you can write an accurate overview from the provided data, set shouldWrite=false and overview="".',
          "- Only use provided data and general public knowledge. Do not invent product-specific claims.",
          "",
        ]
      : [
          "Follow the toolkit-specific instructions below.",
          "Use the previous overview as context if provided.",
          "Set shouldWrite=true when you can comply with the instructions.",
          "",
        ];

  const instructionsBlock = [
    "Toolkit:",
    `Name: ${toolkit.label} (${toolkit.id})`,
    `Description: ${toolkit.description ?? "No description"}`,
    `Auth: ${formatAuth(toolkit)}`,
    `Secret types: ${secrets.types.length > 0 ? secrets.types.join(", ") : "None"}`,
    `Secret names: ${secrets.names.length > 0 ? secrets.names.join(", ") : "None"}`,
    `Tools (${toolkit.tools.length}, sample):`,
    formatToolLines(toolkit.tools),
    "",
  ];

  const referencesBlock =
    sources.length > 0
      ? ["References:", ...sources.map((source) => `- ${source}`), ""]
      : [];

  const customInstructions = instructions?.instructions
    ? ["Instructions:", instructions.instructions, ""]
    : [];

  const previousBlock = previousOverview
    ? ["Previous overview:", previousOverview, ""]
    : [];

  return [
    ...base,
    ...modeGuidance,
    ...instructionsBlock,
    ...referencesBlock,
    ...customInstructions,
    ...previousBlock,
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

const normalizeOverviewContent = (content: string): string => {
  const trimmed = content.trim();
  if (trimmed.toLowerCase().startsWith("## overview")) {
    return trimmed;
  }
  return `## Overview\n\n${trimmed}`;
};

const buildOverviewChunk = (content: string): DocumentationChunk => ({
  type: "markdown",
  location: "header",
  position: "before",
  content,
});

export class LlmToolkitOverviewGenerator implements ToolkitOverviewGenerator {
  private readonly client: LlmClient;
  private readonly model: string;
  private readonly temperature: number | undefined;
  private readonly maxTokens: number | undefined;
  private readonly systemPrompt: string;

  constructor(config: LlmToolkitOverviewGeneratorConfig) {
    this.client = config.client;
    this.model = config.model;
    this.temperature = config.temperature;
    this.maxTokens = config.maxTokens;
    this.systemPrompt = config.systemPrompt ?? defaultSystemPrompt;
  }

  async generate(
    input: OverviewGenerationInput
  ): Promise<OverviewGenerationResult | null> {
    const prompt = buildPrompt(input);
    const response = await this.client.generateText({
      model: this.model,
      prompt,
      system: this.systemPrompt,
      ...(this.temperature !== undefined
        ? { temperature: this.temperature }
        : {}),
      ...(this.maxTokens !== undefined ? { maxTokens: this.maxTokens } : {}),
    });

    const payload = parseJsonObject(response);
    const shouldWrite = (() => {
      const value = payload.shouldWrite;
      if (value === undefined) {
        return true;
      }
      if (typeof value === "boolean") {
        return value;
      }
      if (typeof value === "string") {
        return value.toLowerCase() === "true";
      }
      return Boolean(value);
    })();
    const overview = payload.overview;
    const reason =
      typeof payload.reason === "string" ? payload.reason : undefined;

    if (input.mode === "auto" && !shouldWrite) {
      return null;
    }

    if (typeof overview !== "string" || overview.trim().length === 0) {
      return null;
    }

    const content = normalizeOverviewContent(overview);
    return { chunk: buildOverviewChunk(content), reason };
  }
}
