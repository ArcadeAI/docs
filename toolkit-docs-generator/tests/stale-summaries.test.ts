import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * CI gate for stale summaries.
 *
 * When the generator carries a previous summary forward because
 * regeneration was skipped (no LLM configured) or failed (LLM error),
 * it marks the toolkit JSON with `summaryStale: true`. That is deliberate
 * — a slightly stale overview is better than a blank one — but it must
 * be fixed before the change merges.
 *
 * This test reads the committed `data/toolkits/*.json` files and fails
 * if any toolkit is flagged stale. The auto-generated `[AUTO] Adding MCP
 * Servers docs update` PR will still open on schedule, but its CI run
 * will fail here, which is the intended signal for a reviewer to
 * either rerun generation with a working LLM or manually refresh the
 * affected summary.
 */
// Resolve from the test file's own location so the test works whether
// vitest is invoked from the repo root or from inside
// toolkit-docs-generator/. Falls back to process.cwd() only if
// import.meta.url is unavailable (it is in the vitest esm runtime).
const here = dirname(fileURLToPath(import.meta.url));
const TOOLKITS_DIR = join(here, "..", "data", "toolkits");

type ToolkitSummaryShape = {
  id?: unknown;
  summary?: unknown;
  summaryStale?: unknown;
  summaryStaleReason?: unknown;
};

const readToolkit = (fileName: string): ToolkitSummaryShape => {
  const raw = readFileSync(join(TOOLKITS_DIR, fileName), "utf8");
  return JSON.parse(raw) as ToolkitSummaryShape;
};

const listToolkitFiles = (): string[] =>
  readdirSync(TOOLKITS_DIR).filter(
    (name) => name.endsWith(".json") && name !== "index.json"
  );

describe("Stale summary CI gate", () => {
  it("no committed toolkit JSON has summaryStale: true", () => {
    const staleFindings: Array<{
      file: string;
      id: string;
      reason: string;
    }> = [];

    for (const file of listToolkitFiles()) {
      const toolkit = readToolkit(file);
      if (toolkit.summaryStale === true) {
        staleFindings.push({
          file,
          id: typeof toolkit.id === "string" ? toolkit.id : file,
          reason:
            typeof toolkit.summaryStaleReason === "string"
              ? toolkit.summaryStaleReason
              : "unknown",
        });
      }
    }

    if (staleFindings.length > 0) {
      const report = staleFindings
        .map(
          (finding) => `  - ${finding.id} (${finding.file}): ${finding.reason}`
        )
        .join("\n");
      throw new Error(
        `${staleFindings.length} toolkit(s) have a stale summary that must be regenerated before merge:\n${report}\n\n` +
          "Re-run `toolkit-docs-generator generate` with a working --llm-provider/--llm-model, or refresh the summary by hand and clear the `summaryStale` / `summaryStaleReason` fields in the JSON."
      );
    }
    expect(staleFindings).toEqual([]);
  });
});
