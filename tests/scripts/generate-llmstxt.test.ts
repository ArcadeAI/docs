import { afterEach, describe, expect, it, vi } from "vitest";

const { create } = vi.hoisted(() => ({
  create: vi.fn().mockRejectedValue(new Error("Claude unavailable")),
}));

vi.mock("@anthropic-ai/sdk", () => ({
  default: class {
    messages = { create };
  },
}));

const { hasSameBody, summarizePagesInBatches } = await import(
  "../../scripts/generate-llmstxt"
);

const WARNING_REGEX = /^::warning::1 of 1 page summaries fell back/;

const PAGE_URL = "https://docs.arcade.dev/en/get-started/quickstart";

const llmsTxt = (header: string, description: string) =>
  `${header}\n\n# Arcade\n\n## Get Started\n\n- [Quickstart](${PAGE_URL}): ${description}\n`;

const EXISTING = llmsTxt(
  "<!-- git-sha: aaaaaaa generation-date: 2026-10-01T00:00:00.000Z -->",
  "Documentation page"
);

describe("placeholder retry that fails again", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("emits the warning and leaves llms.txt unchanged", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {
      // silence script output
    });
    const log = vi.spyOn(console, "log").mockImplementation(() => {
      // silence script output
    });

    const [retried] = await summarizePagesInBatches(
      [
        {
          path: "app/en/get-started/quickstart/page.mdx",
          url: PAGE_URL,
          content: "# Quickstart\n\nGet going.",
        },
      ],
      []
    );

    expect(create).toHaveBeenCalledTimes(1);
    expect(log).toHaveBeenCalledWith(expect.stringMatching(WARNING_REGEX));

    const regenerated = llmsTxt(
      "<!-- git-sha: bbbbbbb generation-date: 2026-10-08T00:00:00.000Z -->",
      retried.description
    );
    expect(hasSameBody(EXISTING, regenerated)).toBe(true);
  });

  it("still rewrites llms.txt when a description changes", () => {
    const regenerated = llmsTxt(
      "<!-- git-sha: bbbbbbb generation-date: 2026-10-08T00:00:00.000Z -->",
      "Walks through calling your first tool."
    );
    expect(hasSameBody(EXISTING, regenerated)).toBe(false);
  });
});
