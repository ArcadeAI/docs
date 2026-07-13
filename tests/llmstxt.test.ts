import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { discoverPages } from "../scripts/generate-llmstxt";

describe("llms.txt page discovery", () => {
  test("expands generated toolkit routes instead of template URLs", async () => {
    const pages = await discoverPages();
    const urls = pages.map(({ url }) => url);

    expect(urls.some((url) => url.includes("[toolkitId]"))).toBe(false);
    expect(urls).toContain(
      "https://docs.arcade.dev/en/resources/integrations/productivity/gmail"
    );
  });

  test("workflow cannot retrigger itself after committing llms.txt", () => {
    const workflow = readFileSync(
      join(process.cwd(), ".github/workflows/llmstxt.yml"),
      "utf-8"
    );

    expect(workflow).toContain("github.actor != 'github-actions[bot]'");
    expect(workflow).toContain("fetch-depth: 0");
  });
});
