/**
 * Secret coherence scanners
 *
 * Deterministic checks that keep the rendered toolkit docs consistent with
 * the toolkit's current secret set. Two classes of problem:
 *
 *  - Stale reference: a secret name appears in summary or documentation
 *    chunks but is no longer declared by any tool in the toolkit (typically
 *    because the tool that required it was removed upstream).
 *  - Coverage gap: a current secret is not documented in the summary, or
 *    secrets are mentioned without a link to the Arcade config docs.
 *
 * These scanners return structured issues. Remediation (LLM-driven edits or
 * warnings) is performed by callers in the merger pipeline.
 */
import type { DocumentationChunk, MergedToolkit } from "../types/index.js";

export const ARCADE_SECRETS_DOC_URL =
  "https://docs.arcade.dev/en/guides/create-tools/tool-basics/create-tool-secrets";
export const ARCADE_SECRETS_DASHBOARD_URL =
  "https://api.arcade.dev/dashboard/auth/secrets";

/**
 * Base URL for Arcade's per-provider OAuth docs. Specific provider pages
 * live at `${base}/<providerId>` — e.g. `/github`, `/google`, `/atlassian`.
 * Used by the summary prompt so OAuth sections can link out instead of
 * repeating scope lists that would drift from the provider page.
 */
export const ARCADE_AUTH_PROVIDERS_BASE_URL =
  "https://docs.arcade.dev/en/references/auth-providers";

const SECRET_REFERENCE_URLS: readonly string[] = [
  ARCADE_SECRETS_DOC_URL,
  ARCADE_SECRETS_DASHBOARD_URL,
  // Tolerate language-path variants or bare domains that still link somewhere
  // useful on docs.arcade.dev/dashboard.
  "docs.arcade.dev/en/guides/create-tools/tool-basics/create-tool-secrets",
  "arcade.dev/dashboard/auth/secrets",
];

export type StaleSecretLocation =
  | { kind: "summary" }
  | { kind: "toolkit_chunk"; chunkIndex: number }
  | { kind: "tool_chunk"; toolQualifiedName: string; chunkIndex: number };

export type StaleSecretReference = {
  removedSecret: string;
  location: StaleSecretLocation;
  content: string;
};

export type SecretCoverageGap =
  | { kind: "missing_secret_in_summary"; secretName: string }
  | { kind: "missing_secret_config_link" };

export type SecretCoherenceIssues = {
  staleReferences: StaleSecretReference[];
  coverageGaps: SecretCoverageGap[];
};

export const collectToolkitSecrets = (toolkit: MergedToolkit): Set<string> => {
  const names = new Set<string>();
  for (const tool of toolkit.tools) {
    for (const secret of tool.secrets) {
      names.add(secret);
    }
    for (const info of tool.secretsInfo ?? []) {
      names.add(info.name);
    }
  }
  return names;
};

const toolkitChunks = (toolkit: MergedToolkit): readonly DocumentationChunk[] =>
  toolkit.documentationChunks ?? [];

/**
 * Exact-substring test. Secret names are ALLCAPS_WITH_UNDER and distinctive
 * enough that we don't need word-boundary regex; a plain substring match
 * avoids false negatives around punctuation, backticks, and table pipes.
 */
const contentMentionsSecret = (content: string, secret: string): boolean =>
  content.includes(secret);

const findSummaryStaleRefs = (
  toolkit: MergedToolkit,
  removedSecrets: readonly string[]
): StaleSecretReference[] => {
  const summary = toolkit.summary;
  if (!summary) {
    return [];
  }

  const refs: StaleSecretReference[] = [];
  for (const removedSecret of removedSecrets) {
    if (contentMentionsSecret(summary, removedSecret)) {
      refs.push({
        removedSecret,
        location: { kind: "summary" },
        content: summary,
      });
    }
  }
  return refs;
};

const findToolkitChunkStaleRefs = (
  toolkit: MergedToolkit,
  removedSecrets: readonly string[]
): StaleSecretReference[] => {
  const refs: StaleSecretReference[] = [];
  const chunks = toolkitChunks(toolkit);
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex += 1) {
    const chunk = chunks[chunkIndex];
    if (!chunk) continue;
    for (const removedSecret of removedSecrets) {
      if (contentMentionsSecret(chunk.content, removedSecret)) {
        refs.push({
          removedSecret,
          location: { kind: "toolkit_chunk", chunkIndex },
          content: chunk.content,
        });
      }
    }
  }
  return refs;
};

const findToolChunkStaleRefs = (
  toolkit: MergedToolkit,
  removedSecrets: readonly string[]
): StaleSecretReference[] => {
  const refs: StaleSecretReference[] = [];
  for (const tool of toolkit.tools) {
    const chunks = tool.documentationChunks ?? [];
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex += 1) {
      const chunk = chunks[chunkIndex];
      if (!chunk) continue;
      for (const removedSecret of removedSecrets) {
        if (contentMentionsSecret(chunk.content, removedSecret)) {
          refs.push({
            removedSecret,
            location: {
              kind: "tool_chunk",
              toolQualifiedName: tool.qualifiedName,
              chunkIndex,
            },
            content: chunk.content,
          });
        }
      }
    }
  }
  return refs;
};

/**
 * Compare current toolkit secrets against the previous snapshot to identify
 * secrets that were removed, then scan summary and documentation chunks for
 * any lingering references. Returns at most one entry per
 * (location, removedSecret) pair so callers can drive an LLM edit for each.
 */
export const detectStaleSecretReferences = (
  toolkit: MergedToolkit,
  previousToolkit?: MergedToolkit
): StaleSecretReference[] => {
  if (!previousToolkit) {
    return [];
  }

  const currentSecrets = collectToolkitSecrets(toolkit);
  const previousSecrets = collectToolkitSecrets(previousToolkit);
  const removedSecrets: string[] = [];
  for (const name of previousSecrets) {
    if (!currentSecrets.has(name)) {
      removedSecrets.push(name);
    }
  }

  if (removedSecrets.length === 0) {
    return [];
  }

  return [
    ...findSummaryStaleRefs(toolkit, removedSecrets),
    ...findToolkitChunkStaleRefs(toolkit, removedSecrets),
    ...findToolChunkStaleRefs(toolkit, removedSecrets),
  ];
};

const summaryHasConfigLink = (summary: string): boolean =>
  SECRET_REFERENCE_URLS.some((url) => summary.includes(url));

/**
 * Gaps in the summary's coverage of the toolkit's current secrets:
 *  - Any current secret name that is not mentioned by exact substring.
 *  - If at least one secret exists, a missing link to the Arcade config docs.
 *
 * Only runs when a summary is present; toolkits without a summary are a
 * separate concern handled by the summary generator itself.
 */
export const detectSecretCoverageGaps = (
  toolkit: MergedToolkit
): SecretCoverageGap[] => {
  const summary = toolkit.summary;
  if (!summary) {
    return [];
  }

  const currentSecrets = collectToolkitSecrets(toolkit);
  if (currentSecrets.size === 0) {
    return [];
  }

  const gaps: SecretCoverageGap[] = [];
  for (const secretName of currentSecrets) {
    if (!summary.includes(secretName)) {
      gaps.push({ kind: "missing_secret_in_summary", secretName });
    }
  }
  if (!summaryHasConfigLink(summary)) {
    gaps.push({ kind: "missing_secret_config_link" });
  }
  return gaps;
};

export const detectSecretCoherenceIssues = (
  toolkit: MergedToolkit,
  previousToolkit?: MergedToolkit
): SecretCoherenceIssues => ({
  staleReferences: detectStaleSecretReferences(toolkit, previousToolkit),
  coverageGaps: detectSecretCoverageGaps(toolkit),
});

export const hasCoherenceIssues = (issues: SecretCoherenceIssues): boolean =>
  issues.staleReferences.length > 0 || issues.coverageGaps.length > 0;

/**
 * Group stale references by the artifact they live in so an LLM editor can
 * be asked to edit each artifact exactly once, even when multiple removed
 * secrets appear in the same chunk or summary.
 */
export type StaleSecretEditTarget =
  | { kind: "summary"; removedSecrets: string[]; content: string }
  | {
      kind: "toolkit_chunk";
      chunkIndex: number;
      removedSecrets: string[];
      content: string;
    }
  | {
      kind: "tool_chunk";
      toolQualifiedName: string;
      chunkIndex: number;
      removedSecrets: string[];
      content: string;
    };

const locationKey = (ref: StaleSecretReference): string => {
  const location = ref.location;
  switch (location.kind) {
    case "summary":
      return "summary";
    case "toolkit_chunk":
      return `toolkit_chunk:${location.chunkIndex}`;
    case "tool_chunk":
      return `tool_chunk:${location.toolQualifiedName}:${location.chunkIndex}`;
    default:
      return "";
  }
};

export const groupStaleRefsByTarget = (
  refs: readonly StaleSecretReference[]
): StaleSecretEditTarget[] => {
  const byKey = new Map<
    string,
    { ref: StaleSecretReference; removedSecrets: Set<string> }
  >();

  for (const ref of refs) {
    const key = locationKey(ref);
    const existing = byKey.get(key);
    if (existing) {
      existing.removedSecrets.add(ref.removedSecret);
    } else {
      byKey.set(key, {
        ref,
        removedSecrets: new Set<string>([ref.removedSecret]),
      });
    }
  }

  return Array.from(byKey.values()).map(({ ref, removedSecrets }) => {
    const location = ref.location;
    const sortedRemovedSecrets = Array.from(removedSecrets).sort();
    switch (location.kind) {
      case "summary":
        return {
          kind: "summary",
          removedSecrets: sortedRemovedSecrets,
          content: ref.content,
        };
      case "toolkit_chunk":
        return {
          kind: "toolkit_chunk",
          chunkIndex: location.chunkIndex,
          removedSecrets: sortedRemovedSecrets,
          content: ref.content,
        };
      case "tool_chunk":
        return {
          kind: "tool_chunk",
          toolQualifiedName: location.toolQualifiedName,
          chunkIndex: location.chunkIndex,
          removedSecrets: sortedRemovedSecrets,
          content: ref.content,
        };
      default:
        throw new Error("Unknown stale secret location kind");
    }
  });
};
