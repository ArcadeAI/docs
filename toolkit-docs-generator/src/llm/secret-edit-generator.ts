/**
 * LLM editor for secret-coherence fixes.
 *
 * Unlike toolkit-summary-generator (which rewrites a summary from scratch),
 * this editor is asked to preserve the source text as-is and only change the
 * passages that mention a removed secret — or, for coverage-gap fixes, to
 * minimally weave in missing secret information without re-styling the rest.
 *
 * Keeping edits local prevents the "oversimplification on rerun" behavior
 * users observed when the regenerator reprocessed richer hand-refined text.
 */
import {
  ARCADE_SECRETS_DASHBOARD_URL,
  ARCADE_SECRETS_DOC_URL,
} from "../merger/secret-coherence.js";
import type { LlmClient } from "./client.js";

export interface SecretEditGeneratorConfig {
  readonly client: LlmClient;
  readonly model: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly systemPrompt?: string;
}

export interface SecretCleanupEditInput {
  readonly kind: "summary" | "documentation_chunk";
  readonly content: string;
  readonly removedSecrets: readonly string[];
  readonly currentSecrets: readonly string[];
  readonly toolkitLabel: string;
}

export interface SecretCoverageEditInput {
  readonly content: string;
  readonly missingSecretNames: readonly string[];
  readonly currentSecrets: readonly string[];
  readonly toolkitLabel: string;
  readonly requireConfigLink: boolean;
}

export interface ISecretEditGenerator {
  /**
   * Edit the provided content to remove all references to `removedSecrets`
   * while preserving every other sentence, bullet, table row, heading, and
   * example unchanged. Returns the edited content.
   */
  cleanupStaleReferences: (input: SecretCleanupEditInput) => Promise<string>;

  /**
   * Edit the provided summary to add any missing secret mentions (one
   * short, factual line per missing secret) and, if required, a link to
   * the Arcade config doc. Must not alter existing content, ordering, or
   * voice; new lines append to or minimally extend the **Secrets** section.
   */
  fillCoverageGaps: (input: SecretCoverageEditInput) => Promise<string>;
}

const DEFAULT_SYSTEM_PROMPT =
  "You are a careful documentation editor for the Arcade MCP toolkit docs. " +
  "You make the smallest possible change that satisfies the request. " +
  "Never re-summarize, shorten unrelated content, rewrite headings, or " +
  "reorder existing sections. Preserve markdown syntax, backticks, tables, " +
  "and code exactly.";

// Anchored to the start/end of the full string and uses a greedy capture so
// that inner fenced code blocks inside an edited documentation chunk are
// preserved. A non-greedy capture would stop at the first inner ``` and
// silently truncate the rest of the content.
const FENCE_PATTERN = /^\s*```(?:markdown|md|text)?\s*([\s\S]*)```\s*$/;

const stripOptionalFence = (text: string): string => {
  const match = text.match(FENCE_PATTERN);
  if (match?.[1]) {
    return match[1].trim();
  }
  return text.trim();
};

const formatList = (values: readonly string[]): string =>
  values.length > 0 ? values.join(", ") : "None";

const buildCleanupPrompt = (input: SecretCleanupEditInput): string => {
  const removedList = formatList(input.removedSecrets);
  const currentList = formatList(input.currentSecrets);
  const artifact =
    input.kind === "summary"
      ? "toolkit summary (markdown prose, roughly one screen)"
      : "toolkit documentation chunk (markdown, may contain callouts, tables, and code blocks)";

  return [
    `You are editing an Arcade MCP toolkit ${artifact} for ${input.toolkitLabel}.`,
    "",
    `Secrets that were REMOVED from this toolkit and must no longer appear: ${removedList}.`,
    `Secrets that are STILL present and must be preserved: ${currentList}.`,
    "",
    "Rules:",
    "- Delete any sentence, bullet, table row, or note whose ONLY topic is a removed secret.",
    "- If a sentence or bullet mentions a removed secret alongside other content, rewrite that single sentence as minimally as possible to drop the removed-secret reference; do not paraphrase unrelated parts.",
    "- Do not add new information. Do not rewrite unrelated content. Do not change headings, ordering, tone, or code blocks.",
    "- If a whole section (for example an `## Authentication` or a setup table) becomes redundant because its only content referred to the removed secrets, remove that section cleanly (including its heading).",
    "- Keep the result valid markdown. Preserve surrounding blank lines.",
    "",
    "Return ONLY the edited content, with no commentary, no explanation, and no code fences around the whole document.",
    "",
    "Content:",
    "<<<",
    input.content,
    ">>>",
  ].join("\n");
};

const buildCoveragePrompt = (input: SecretCoverageEditInput): string => {
  const missingList = formatList(input.missingSecretNames);
  const currentList = formatList(input.currentSecrets);
  const linkInstruction = input.requireConfigLink
    ? `- The **Secrets** section must include a link to the Arcade config docs. Use this exact URL: ${ARCADE_SECRETS_DOC_URL}. If a short mention of the Arcade Dashboard secrets page is useful, ${ARCADE_SECRETS_DASHBOARD_URL} is acceptable as an additional reference.`
    : "- Do not add any new links.";

  return [
    `You are editing an Arcade MCP toolkit summary for ${input.toolkitLabel}.`,
    "",
    `Secrets currently required by the toolkit: ${currentList}.`,
    `Secrets missing from the summary that MUST be added: ${missingList}.`,
    "",
    "Rules:",
    "- Ensure every current secret is mentioned by its exact name (inside backticks).",
    "- For each missing secret, add a factual explanation of what it is and how a developer obtains it from the provider. Use as much detail as the secret actually needs — a short URL override may be a single line; a scoped API key may need several sentences naming the provider dashboard page, the required scopes or permissions, and any account tier constraints.",
    "- When possible include an inline markdown link to the provider's own documentation page that tells the reader how to create or retrieve that specific secret. If you do not know the provider's docs URL, omit the link rather than inventing one.",
    "- Prefer appending to or lightly extending an existing `**Secrets**` section. Only create a `**Secrets**` section if none exists.",
    "- Do not rewrite unrelated content. Do not change headings, ordering, tone, or other sections.",
    linkInstruction,
    "- Keep phrasing factual, developer-focused, and free of marketing copy.",
    "",
    "Return ONLY the edited summary, with no commentary, no explanation, and no code fences around the whole document.",
    "",
    "Summary:",
    "<<<",
    input.content,
    ">>>",
  ].join("\n");
};

export class LlmSecretEditGenerator implements ISecretEditGenerator {
  private readonly client: LlmClient;
  private readonly model: string;
  private readonly temperature: number | undefined;
  private readonly maxTokens: number | undefined;
  private readonly systemPrompt: string;

  constructor(config: SecretEditGeneratorConfig) {
    this.client = config.client;
    this.model = config.model;
    this.temperature = config.temperature;
    this.maxTokens = config.maxTokens;
    this.systemPrompt = config.systemPrompt ?? DEFAULT_SYSTEM_PROMPT;
  }

  private async generate(prompt: string): Promise<string> {
    const response = await this.client.generateText({
      model: this.model,
      prompt,
      system: this.systemPrompt,
      ...(this.temperature !== undefined
        ? { temperature: this.temperature }
        : {}),
      ...(this.maxTokens !== undefined ? { maxTokens: this.maxTokens } : {}),
    });
    const trimmed = stripOptionalFence(response);
    if (trimmed.length === 0) {
      throw new Error("Secret edit LLM response was empty");
    }
    return trimmed;
  }

  cleanupStaleReferences(input: SecretCleanupEditInput): Promise<string> {
    if (input.removedSecrets.length === 0) {
      return Promise.resolve(input.content);
    }
    return this.generate(buildCleanupPrompt(input));
  }

  fillCoverageGaps(input: SecretCoverageEditInput): Promise<string> {
    const hasMissing = input.missingSecretNames.length > 0;
    const needsLink = input.requireConfigLink;
    if (!(hasMissing || needsLink)) {
      return Promise.resolve(input.content);
    }
    return this.generate(buildCoveragePrompt(input));
  }
}
