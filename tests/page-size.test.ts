import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";
import { toToolkitSummary } from "@/app/_lib/toolkit-data";

/**
 * MARTECH-17: auto-generated toolkit reference pages exceeded Googlebot's 2 MB
 * uncompressed-HTML crawl limit. The fix ships only a per-tool *summary* in the
 * initial document (`toToolkitSummary`) and lazy-loads detail on expand. This
 * guards that the summary — the dominant part of the initial Flight payload —
 * stays small and never regains the heavy fields, without a full `next build`.
 */
const DATA_DIR = join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);

// Well under the 2 MB live limit: the rendered DOM + Flight framing add overhead
// on top of the serialized summary, so leave headroom.
const SUMMARY_BUDGET_BYTES = 1.5 * 1024 * 1024;

// The heavy per-tool fields that must be fetched lazily, never in the summary.
const HEAVY_FIELDS = ["parameters", "output", "codeExample"] as const;

const toolkitFiles = readdirSync(DATA_DIR).filter(
  (file) => file.endsWith(".json") && file !== "index.json"
);

describe("toolkit summary page-size budget", () => {
  test("there are toolkit data files to check", () => {
    expect(toolkitFiles.length).toBeGreaterThan(0);
  });

  test.each(toolkitFiles)(
    "%s: summary stays under budget and strips heavy fields",
    (file) => {
      const data = JSON.parse(
        readFileSync(join(DATA_DIR, file), "utf-8")
      ) as ToolkitData;
      const summary = toToolkitSummary(data);

      const bytes = Buffer.byteLength(JSON.stringify(summary), "utf-8");
      expect(
        bytes,
        `${file} summary is ${(bytes / 1024 / 1024).toFixed(2)} MB`
      ).toBeLessThan(SUMMARY_BUDGET_BYTES);

      for (const tool of summary.tools) {
        for (const field of HEAVY_FIELDS) {
          expect(
            field in tool,
            `${file}: ${tool.qualifiedName} still carries "${field}"`
          ).toBe(false);
        }
      }
    }
  );
});
