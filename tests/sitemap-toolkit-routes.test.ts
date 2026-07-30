import { expect, test, vi } from "vitest";

const { listValidIntegrationLinks } = vi.hoisted(() => ({
  listValidIntegrationLinks: vi.fn(),
}));

vi.mock("../app/_lib/toolkit-static-params", () => ({
  listValidIntegrationLinks,
}));

test("sitemap reuses valid integration links and excludes others", async () => {
  const previousSiteUrl = process.env.SITE_URL;
  process.env.SITE_URL = "https://example.test";
  listValidIntegrationLinks.mockResolvedValue(
    new Set([
      "/en/resources/integrations/development/github",
      "/en/resources/integrations/others/unknown-toolkit",
      "/en/resources/integrations/search/tavily",
    ])
  );

  try {
    const { default: sitemap } = await import("../app/sitemap");
    const urls = (await sitemap()).map((entry) => entry.url);

    expect(urls).toContain(
      "https://example.test/en/resources/integrations/development/github"
    );
    expect(urls).toContain(
      "https://example.test/en/resources/integrations/search/tavily"
    );
    expect(urls).not.toContain(
      "https://example.test/en/resources/integrations/others/unknown-toolkit"
    );
  } finally {
    if (previousSiteUrl === undefined) {
      process.env.SITE_URL = undefined;
    } else {
      process.env.SITE_URL = previousSiteUrl;
    }
  }
});
