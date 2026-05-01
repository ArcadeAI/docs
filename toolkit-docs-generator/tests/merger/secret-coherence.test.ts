import { describe, expect, it } from "vitest";
import {
  ARCADE_SECRETS_DOC_URL,
  detectSecretCoherenceIssues,
  detectSecretCoverageGaps,
  detectStaleSecretReferences,
  groupStaleRefsByTarget,
  hasCoherenceIssues,
} from "../../src/merger/secret-coherence.js";
import type {
  DocumentationChunk,
  MergedTool,
  MergedToolkit,
} from "../../src/types/index.js";

const chunk = (
  overrides: Partial<DocumentationChunk> = {}
): DocumentationChunk => ({
  type: "markdown",
  location: "header",
  position: "before",
  content: "",
  ...overrides,
});

const tool = (overrides: Partial<MergedTool> = {}): MergedTool => ({
  name: "Example",
  qualifiedName: "Github.Example",
  fullyQualifiedName: "Github.Example@1.0.0",
  description: "desc",
  parameters: [],
  auth: null,
  secrets: [],
  secretsInfo: [],
  output: null,
  documentationChunks: [],
  ...overrides,
});

const toolkit = (overrides: Partial<MergedToolkit> = {}): MergedToolkit => ({
  id: "github",
  label: "GitHub",
  version: "1.0.0",
  description: null,
  metadata: {
    category: "development",
    iconUrl: "",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  ...overrides,
});

describe("detectStaleSecretReferences", () => {
  it("returns nothing when there is no previous toolkit", () => {
    const result = detectStaleSecretReferences(toolkit());
    expect(result).toEqual([]);
  });

  it("returns nothing when no secrets were removed", () => {
    const previous = toolkit({
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    const current = toolkit({
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    expect(detectStaleSecretReferences(current, previous)).toEqual([]);
  });

  it("finds a removed secret still mentioned in the summary", () => {
    const previous = toolkit({
      tools: [
        tool({
          secrets: [
            "GITHUB_SERVER_URL",
            "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN",
          ],
        }),
      ],
    });
    const current = toolkit({
      summary:
        "GitHub toolkit. Set `GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN` to use notifications.",
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    const result = detectStaleSecretReferences(current, previous);
    expect(result).toHaveLength(1);
    expect(result[0]?.removedSecret).toBe(
      "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN"
    );
    expect(result[0]?.location).toEqual({ kind: "summary" });
  });

  it("finds a removed secret still mentioned in a toolkit documentation chunk", () => {
    const previous = toolkit({
      tools: [
        tool({
          secrets: [
            "GITHUB_SERVER_URL",
            "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN",
          ],
        }),
      ],
    });
    const current = toolkit({
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
      documentationChunks: [
        chunk({
          location: "before_available_tools",
          content:
            "| Secret | Required |\n| `GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN` | Notifications |",
        }),
      ],
    });
    const result = detectStaleSecretReferences(current, previous);
    expect(result).toHaveLength(1);
    expect(result[0]?.location).toEqual({
      kind: "toolkit_chunk",
      chunkIndex: 0,
    });
  });

  it("finds a removed secret in a per-tool documentation chunk", () => {
    const previous = toolkit({
      tools: [
        tool({
          qualifiedName: "Github.GetNotificationSummary",
          secrets: [
            "GITHUB_SERVER_URL",
            "GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN",
          ],
        }),
      ],
    });
    const current = toolkit({
      tools: [
        tool({
          qualifiedName: "Github.GetNotificationSummary",
          secrets: ["GITHUB_SERVER_URL"],
          documentationChunks: [
            chunk({
              content:
                "Requires GITHUB_CLASSIC_PERSONAL_ACCESS_TOKEN for notifications.",
            }),
          ],
        }),
      ],
    });
    const result = detectStaleSecretReferences(current, previous);
    expect(result).toHaveLength(1);
    expect(result[0]?.location).toEqual({
      kind: "tool_chunk",
      toolQualifiedName: "Github.GetNotificationSummary",
      chunkIndex: 0,
    });
  });
});

describe("detectSecretCoverageGaps", () => {
  it("returns nothing when the toolkit has no summary", () => {
    const current = toolkit({
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    expect(detectSecretCoverageGaps(current)).toEqual([]);
  });

  it("returns nothing when the toolkit has no secrets", () => {
    const current = toolkit({ summary: "No secrets here." });
    expect(detectSecretCoverageGaps(current)).toEqual([]);
  });

  it("flags secrets that are missing from the summary", () => {
    const current = toolkit({
      summary: `Toolkit info. See ${ARCADE_SECRETS_DOC_URL} to configure.`,
      tools: [
        tool({
          secrets: ["GITHUB_SERVER_URL", "GITHUB_WEBHOOK_SECRET"],
        }),
      ],
    });
    const gaps = detectSecretCoverageGaps(current);
    const missing = gaps.filter(
      (gap) => gap.kind === "missing_secret_in_summary"
    );
    expect(missing).toHaveLength(2);
  });

  it("flags a missing Arcade config link when secrets exist", () => {
    const current = toolkit({
      summary:
        "Toolkit info. Uses `GITHUB_SERVER_URL` but no configuration link.",
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    const gaps = detectSecretCoverageGaps(current);
    expect(gaps.some((gap) => gap.kind === "missing_secret_config_link")).toBe(
      true
    );
  });

  it("does not flag the link when the dashboard URL is present", () => {
    const current = toolkit({
      summary:
        "Toolkit info. Set `GITHUB_SERVER_URL` in the Arcade Dashboard: https://api.arcade.dev/dashboard/auth/secrets.",
      tools: [tool({ secrets: ["GITHUB_SERVER_URL"] })],
    });
    const gaps = detectSecretCoverageGaps(current);
    expect(gaps.some((gap) => gap.kind === "missing_secret_config_link")).toBe(
      false
    );
  });
});

describe("groupStaleRefsByTarget", () => {
  it("groups multiple removed secrets hitting the same artifact into one edit target", () => {
    const previous = toolkit({
      tools: [
        tool({
          secrets: ["A_SECRET", "B_SECRET", "KEEP_SECRET"],
        }),
      ],
    });
    const current = toolkit({
      summary: "Mentions A_SECRET and B_SECRET together.",
      tools: [tool({ secrets: ["KEEP_SECRET"] })],
    });
    const refs = detectStaleSecretReferences(current, previous);
    const targets = groupStaleRefsByTarget(refs);
    expect(targets).toHaveLength(1);
    expect(targets[0]?.kind).toBe("summary");
    expect(targets[0]?.removedSecrets).toEqual(["A_SECRET", "B_SECRET"]);
  });
});

describe("hasCoherenceIssues", () => {
  it("is true when either stale refs or coverage gaps exist", () => {
    const previous = toolkit({
      tools: [tool({ secrets: ["OLD_SECRET", "KEEP"] })],
    });
    const current = toolkit({
      summary: "Still says OLD_SECRET here.",
      tools: [tool({ secrets: ["KEEP"] })],
    });
    const issues = detectSecretCoherenceIssues(current, previous);
    expect(hasCoherenceIssues(issues)).toBe(true);
  });

  it("is false when the toolkit is coherent", () => {
    const current = toolkit({
      summary: `Uses \`SECRET_A\`. Configure via ${ARCADE_SECRETS_DOC_URL}.`,
      tools: [tool({ secrets: ["SECRET_A"] })],
    });
    const issues = detectSecretCoherenceIssues(current);
    expect(hasCoherenceIssues(issues)).toBe(false);
  });
});
