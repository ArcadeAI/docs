import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { discoverPages, hasLlmsBodyChanged } from "../scripts/generate-llmstxt";

describe("llms.txt page discovery", () => {
  test("expands generated toolkit routes instead of template URLs", async () => {
    const pages = await discoverPages();
    const urls = pages.map(({ url }) => url);

    expect(urls.some((url) => url.includes("[toolkitId]"))).toBe(false);
    expect(urls).toContain(
      "https://docs.arcade.dev/en/resources/integrations/productivity/gmail"
    );
  });

  test("ignores metadata-only changes that would cause commit loops", () => {
    const first =
      "<!-- git-sha: first generation-date: 2026-01-01T00:00:00Z -->\n\n# Arcade\n";
    const second =
      "<!-- git-sha: second generation-date: 2026-01-02T00:00:00Z -->\n\n# Arcade\n";

    expect(hasLlmsBodyChanged(first, second)).toBe(false);
    expect(hasLlmsBodyChanged(first, `${second}\nNew page`)).toBe(true);
  });

  test("workflow fetches history and skips write-capability checks on forks", () => {
    const workflow = readFileSync(
      join(process.cwd(), ".github/workflows/llmstxt.yml"),
      "utf-8"
    );

    expect(workflow).toContain("fetch-depth: 0");
    expect(workflow).toContain(
      "github.event.pull_request.head.repo.full_name == github.repository"
    );
  });
});
