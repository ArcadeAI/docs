import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { createOverviewInstructionsFileSource } from "../../src/sources/overview-instructions-file.js";

const createTempDir = async (): Promise<string> =>
  mkdtemp(join(tmpdir(), "overview-input-"));

describe("OverviewInstructionsFileSource", () => {
  let tempDir: string | null = null;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
      tempDir = null;
    }
  });

  it("returns null when directory is missing", async () => {
    const source = createOverviewInstructionsFileSource({
      dirPath: join(tmpdir(), "does-not-exist"),
      allowMissing: true,
    });

    const result = await source.getOverviewInstructions("Github");
    expect(result).toBeNull();
  });

  it("loads instructions from directory files", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "github.json");
    await writeFile(
      filePath,
      JSON.stringify(
        {
          toolkitId: "Github",
          label: "GitHub",
          sources: ["https://docs.github.com"],
          instructions: "Write an overview.",
        },
        null,
        2
      )
    );

    const source = createOverviewInstructionsFileSource({
      dirPath: tempDir,
      allowMissing: true,
    });

    const result = await source.getOverviewInstructions("github");
    expect(result?.toolkitId).toBe("Github");
    expect(result?.label).toBe("GitHub");
    expect(result?.sources).toEqual(["https://docs.github.com"]);
  });

  it("uses filename as fallback toolkitId", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "slack.json");
    await writeFile(
      filePath,
      JSON.stringify(
        {
          label: "Slack",
          instructions: "Write an overview for Slack.",
        },
        null,
        2
      )
    );

    const source = createOverviewInstructionsFileSource({
      dirPath: tempDir,
      allowMissing: true,
    });

    const result = await source.getOverviewInstructions("Slack");
    expect(result?.toolkitId).toBe("slack");
    expect(result?.label).toBe("Slack");
  });

  it("reads instructions from toolkits map files", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "toolkits.json");
    await writeFile(
      filePath,
      JSON.stringify(
        {
          toolkits: {
            Github: {
              toolkitId: "Github",
              label: "GitHub",
              sources: ["https://docs.github.com"],
              instructions: "Write an overview.",
            },
          },
        },
        null,
        2
      )
    );

    const source = createOverviewInstructionsFileSource({
      dirPath: tempDir,
      allowMissing: true,
    });

    const result = await source.getOverviewInstructions("Github");
    expect(result?.toolkitId).toBe("Github");
    expect(result?.label).toBe("GitHub");
  });
});
