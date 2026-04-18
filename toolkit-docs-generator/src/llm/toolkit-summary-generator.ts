import type { ToolkitSummaryGenerator } from "../merger/data-merger.js";
import {
  ARCADE_SECRETS_DASHBOARD_URL,
  ARCADE_SECRETS_DOC_URL,
} from "../merger/secret-coherence.js";
import type { MergedTool, MergedToolkit, SecretType } from "../types/index.js";
import type { LlmClient } from "./client.js";

export interface LlmToolkitSummaryGeneratorConfig {
  readonly client: LlmClient;
  readonly model: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly systemPrompt?: string;
}

const defaultSystemPrompt =
  "Return only valid JSON. No markdown, no extra text.";

const formatToolLines = (tools: MergedTool[]): string => {
  if (tools.length === 0) {
    return "None";
  }

  return tools
    .map(
      (tool) =>
        `- ${tool.qualifiedName}: ${tool.description ?? "No description"}`
    )
    .join("\n");
};

const formatAuth = (toolkit: MergedToolkit): string => {
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

const collectSecrets = (tools: MergedTool[]) => {
  const secretNames = new Set<string>();
  const secretTypes = new Set<SecretType>();

  for (const tool of tools) {
    for (const name of tool.secrets) {
      secretNames.add(name);
    }
    for (const secret of tool.secretsInfo) {
      secretTypes.add(secret.type);
    }
  }

  return {
    names: Array.from(secretNames),
    types: Array.from(secretTypes),
  };
};

const buildPrompt = (toolkit: MergedToolkit): string => {
  const secrets = collectSecrets(toolkit.tools);
  const hasSecrets = secrets.names.length > 0;

  return [
    "Write a summary for Arcade toolkit docs.",
    'Return JSON: {"summary": "<markdown>"}',
    "",
    "Goals: compact but complete. No fixed word limit — use as many words as needed to cover every current capability and every current secret, and no more. Prefer scannable structure over prose padding.",
    "",
    "Requirements:",
    "- Start with 1 to 2 sentences that explain the provider and what the toolkit enables.",
    "- Add a **Capabilities** section with 3 to 6 bullets summarizing shared capabilities (group tools by theme; do not list tools one by one).",
    "- If auth type is oauth2 or mixed, add an **OAuth** section with provider and representative scopes.",
    "- If auth type is api_key or mixed, mention API key usage under **OAuth** or a dedicated heading.",
    `- If any secrets exist, add a **Secrets** section. List every secret by its exact name in backticks. Give each secret one short factual line covering what it is and how a developer obtains it from the provider; if you do not know, stay with a one-line purpose rather than inventing steps. End the section with the Arcade config docs link: ${ARCADE_SECRETS_DOC_URL} (and optionally mention ${ARCADE_SECRETS_DASHBOARD_URL}).`,
    "- Use Markdown. Developer-focused. Say 'Arcade' (never 'Arcade AI').",
    "- Do not add marketing copy, repetition, or filler.",
    "",
    `Toolkit: ${toolkit.label} (${toolkit.id})`,
    `Description: ${toolkit.description ?? "No description"}`,
    `Auth: ${formatAuth(toolkit)}`,
    `Secrets required: ${hasSecrets ? "Yes" : "None"}`,
    `Secret types: ${secrets.types.length > 0 ? secrets.types.join(", ") : "None"}`,
    `Secret names: ${hasSecrets ? secrets.names.join(", ") : "None"}`,
    `Tools (${toolkit.tools.length}):`,
    formatToolLines(toolkit.tools),
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

export class LlmToolkitSummaryGenerator implements ToolkitSummaryGenerator {
  private readonly client: LlmClient;
  private readonly model: string;
  private readonly temperature: number | undefined;
  private readonly maxTokens: number | undefined;
  private readonly systemPrompt: string;

  constructor(config: LlmToolkitSummaryGeneratorConfig) {
    this.client = config.client;
    this.model = config.model;
    this.temperature = config.temperature;
    this.maxTokens = config.maxTokens;
    this.systemPrompt = config.systemPrompt ?? defaultSystemPrompt;
  }

  async generate(toolkit: MergedToolkit): Promise<string> {
    const prompt = buildPrompt(toolkit);
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
    const summary = payload.summary;

    if (typeof summary !== "string" || summary.trim().length === 0) {
      throw new Error("LLM response missing summary");
    }

    return summary.trim();
  }
}
