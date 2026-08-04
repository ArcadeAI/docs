import { beforeEach, expect, test, vi } from "vitest";

const listValidIntegrationLinks = vi.fn();

vi.mock("../app/_lib/toolkit-static-params", () => ({
  listValidIntegrationLinks,
}));

beforeEach(() => {
  process.env.SITE_URL = "https://example.test";
  listValidIntegrationLinks.mockRejectedValue(new Error("invalid toolkit"));
});

test("keeps static sitemap routes when toolkit enumeration fails", async () => {
  const { default: sitemap } = await import("../app/sitemap");
  const entries = await sitemap();
  const urls = entries.map((entry) => entry.url);

  expect(urls).toContain("https://example.test/en/references/changelog");
  expect(urls).not.toContain(
    "https://example.test/en/resources/integrations/development/github"
  );
});
