import { expect, test, vi } from "vitest";

const { listToolkitRoutes } = vi.hoisted(() => ({
  listToolkitRoutes: vi.fn(),
}));

vi.mock("../app/_lib/toolkit-static-params", () => ({
  listToolkitRoutes,
}));

test("sitemap excludes toolkit routes that redirect to the integrations index", async () => {
  const previousSiteUrl = process.env.SITE_URL;
  process.env.SITE_URL = "https://example.test";
  listToolkitRoutes.mockResolvedValue([
    { category: "development", toolkitId: "github" },
    { category: "others", toolkitId: "unknown-toolkit" },
  ]);

  try {
    const { default: sitemap } = await import("../app/sitemap");
    const urls = (await sitemap()).map((entry) => entry.url);

    expect(urls).toContain(
      "https://example.test/en/resources/integrations/development/github"
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
