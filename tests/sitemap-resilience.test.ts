import { beforeEach, expect, test, vi } from "vitest";

const listValidIntegrationLinks = vi.fn();

// app/sitemap.ts reads the page list from lib/source.ts, whose generated
// `.source` module imports every MDX page (and its components) into the test
// process. Build the same loader from the files on disk instead; see
// tests/helpers/fs-source.ts.
vi.mock("@/lib/source", async () => {
  const { createFsSource } = await import("./helpers/fs-source");
  return { source: createFsSource() };
});

vi.mock("../lib/toolkit-static-params", () => ({
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
