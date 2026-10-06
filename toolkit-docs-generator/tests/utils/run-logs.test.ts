import { mkdtemp, readFile, rm } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";

import {
  readFailedToolsReport,
  writeFailedToolsReport,
} from "../../src/utils/run-logs";

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-logs-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { force: true, recursive: true });
  }
};

describe("run-logs", () => {
  it("writes and reads failed tools report", async () => {
    await withTempDir(async (dir) => {
      const filePath = join(dir, "failed-tools.json");
      const report = {
        failedToolkits: ["Slack"],
        generatedAt: "2026-01-26T00:00:00.000Z",
        toolkits: ["Github"],
        tools: [
          {
            qualifiedName: "Github.CreateIssue",
            reason: "LLM error",
            toolkitId: "Github",
            toolName: "CreateIssue",
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
