import { expect, test } from "vitest";

test("sitemap lists expected URLs", async () => {
  const previousSiteUrl = process.env.SITE_URL;
  process.env.SITE_URL = "https://example.test";

  try {
    const { default: sitemap } = await import("../app/sitemap");
    const entries = await sitemap();

    expect(entries.length).toBeGreaterThan(0);

    const urls = entries.map((entry) => entry.url);

    // All URLs should be absolute and use the configured SITE_URL
    expect(urls.every((url) => url.startsWith("https://example.test/"))).toBe(
      true
    );

    // Known page should be present
    expect(urls).toContain("https://example.test/en/references/changelog");

    // No duplicates
    const duplicates = urls.filter(
      (url, index, arr) => arr.indexOf(url) !== index
    );
    expect(duplicates).toHaveLength(0);
  } finally {
    if (previousSiteUrl === undefined) {
      process.env.SITE_URL = undefined;
    } else {
      process.env.SITE_URL = previousSiteUrl;
    }
  }
});
