import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import {
  readFailedToolsReport,
  writeFailedToolsReport,
} from "../../src/utils/run-logs.js";

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-logs-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

describe("run-logs", () => {
  it("writes and reads failed tools report", async () => {
    await withTempDir(async (dir) => {
      const filePath = join(dir, "failed-tools.json");
      const report = {
        generatedAt: "2026-01-26T00:00:00.000Z",
        toolkits: ["Github"],
        failedToolkits: ["Slack"],
        tools: [
          {
            toolkitId: "Github",
            toolName: "CreateIssue",
            qualifiedName: "Github.CreateIssue",
            reason: "LLM error",
          },
        ],
      };

      await writeFailedToolsReport(filePath, report);

      const raw = await readFile(filePath, "utf-8");
      expect(raw).toContain("Github.CreateIssue");

      const parsed = await readFailedToolsReport(filePath);
      expect(parsed.toolkits).toEqual(["Github"]);
      expect(parsed.failedToolkits).toEqual(["Slack"]);
      expect(parsed.tools).toHaveLength(1);
      expect(parsed.tools[0]?.qualifiedName).toBe("Github.CreateIssue");
    });
  });
});
