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
});
