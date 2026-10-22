import type { ToolkitSummaryGenerator } from "../merger/data-merger";
import {
  ARCADE_AUTH_PROVIDERS_BASE_URL,
  ARCADE_SECRETS_DASHBOARD_URL,
  ARCADE_SECRETS_DOC_URL,
} from "../merger/secret-coherence";
import { hasAuthProviderPage } from "../shared/auth-provider-pages";
import type { MergedTool, MergedToolkit, SecretType } from "../types/index";
import type { LlmClient } from "./client";

export interface LlmToolkitSummaryGeneratorConfig {
  readonly client: LlmClient;
  readonly model: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly systemPrompt?: string;
}

const defaultSystemPrompt =
  "Return only the summary Markdown. No preamble, no closing remarks, and no code fence around the whole response.";

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

  const provider = toolkit.auth.providerId ?? "unknown";

  // Scopes are intentionally omitted from the prompt: the summary should
  // not re-list them — it points readers at the per-provider Arcade docs
  // page where scopes live and stay in sync with the source of truth.
  return `${toolkit.auth.type}; provider: ${provider}`;
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

/**
 * Only point the summary at a provider page that exists. Without this the
 * model builds the URL from the provider ID and links to a 404 for providers
 * such as `box`.
 */
const formatOAuthRequirement = (toolkit: MergedToolkit): string => {
  const providerId = toolkit.auth?.providerId;
  if (providerId && hasAuthProviderPage(providerId)) {
    return `- If auth type is oauth2 or mixed, add an **OAuth** section that names the provider and links to the Arcade provider docs at ${ARCADE_AUTH_PROVIDERS_BASE_URL}/${providerId.toLowerCase()}. Do NOT list scopes — the provider page already documents them and repeating scopes here drifts.`;
  }
  return "- If auth type is oauth2 or mixed, add an **OAuth** section that names the provider. Arcade has no docs page for this provider, so do not link to one. Do NOT list scopes.";
};

const buildPrompt = (toolkit: MergedToolkit): string => {
  const secrets = collectSecrets(toolkit.tools);
  const hasSecrets = secrets.names.length > 0;

  return [
    "Write a summary for Arcade toolkit docs.",
    "Return the summary as Markdown. The whole response is used as the summary verbatim.",
    "",
    "Goals: compact but complete. No fixed word limit — use as many words as needed to cover every current capability and every current secret, and no more. Prefer scannable structure over prose padding.",
    "",
    "Requirements:",
    "- Start with 1 to 2 sentences that explain the provider and what the toolkit enables.",
    "- Add a **Capabilities** section with 3 to 6 bullets summarizing shared capabilities (group tools by theme; do not list tools one by one).",
    formatOAuthRequirement(toolkit),
    "- If auth type is api_key or mixed, mention API key usage under **OAuth** or a dedicated heading.",
    `- If any secrets exist, add a **Secrets** section. List every secret by its exact name in backticks. For each secret, give a factual explanation of what it is and how a developer obtains it from the provider — use as much detail as the secret actually needs (a short URL override may be one line; a scoped API key may need several sentences naming the provider dashboard page, required scopes/permissions, and any account tier). When possible include an inline markdown link to the provider's own documentation page that tells the reader how to create/retrieve that specific secret. If you do not know the provider's docs URL, omit the link rather than inventing one. End the section with the Arcade config docs link: ${ARCADE_SECRETS_DOC_URL} (and optionally mention ${ARCADE_SECRETS_DASHBOARD_URL}).`,
    "- Use Markdown. Developer-focused. Say 'Arcade' (never 'Arcade AI'). Do not use h1 headings (no `# Title` lines); use h2 (`##`) or lower for any section headings.",
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

// Matches only a fence that wraps the entire response, so code blocks inside
// the summary survive.
const WRAPPING_FENCE = /^```(?:markdown|md)?[ \t]*\n([\s\S]*?)\n```$/;

const unwrapMarkdown = (text: string): string => {
  const trimmed = text.trim();
  const fenced = trimmed.match(WRAPPING_FENCE);
  return (fenced?.[1] ?? trimmed).trim();
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

    const summary = unwrapMarkdown(response);

    if (summary.length === 0) {
      throw new Error("LLM response missing summary");
    }

    return summary;
  }
}
