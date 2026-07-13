import { readFileSync } from "node:fs";
import { join } from "node:path";
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

    const { listToolkitRoutes } = await import(
      "../app/_lib/toolkit-static-params"
    );
    const toolkitUrls = (await listToolkitRoutes()).map(
      ({ category, toolkitId }) =>
        `https://example.test/en/resources/integrations/${category}/${toolkitId}`
    );
    expect(toolkitUrls.length).toBeGreaterThan(0);
    for (const toolkitUrl of toolkitUrls) {
      expect(urls).toContain(toolkitUrl);
    }

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

test("sitemap contains no URL that we redirect away", async () => {
  const previousSiteUrl = process.env.SITE_URL;
  process.env.SITE_URL = "https://example.test";

  try {
    const { default: sitemap } = await import("../app/sitemap");
    const entries = await sitemap();
    const paths = entries.map((entry) =>
      entry.url.replace("https://example.test", "")
    );

    // Every redirect `source` in next.config.ts is a path we 3xx away, so a live
    // page must never sit there — otherwise the sitemap ships a redirecting URL
    // (Ahrefs flags "3XX redirect in sitemap"). Guards against pages left behind
    // after a rename.
    const config = readFileSync(join(process.cwd(), "next.config.ts"), "utf-8");
    const exactSources = new Set<string>();
    const prefixSources: string[] = [];

    for (const match of config.matchAll(/source:\s*"([^"]+)"/g)) {
      const normalized = match[1]
        .replace(/:locale\([^)]*\)/g, "en")
        .replace(/:locale/g, "en");

      if (normalized.includes("/:")) {
        // Wildcard source (e.g. ".../:path*"): match by its static prefix, but
        // skip any that collapse to just the locale to avoid matching everything.
        const prefix = normalized.slice(0, normalized.indexOf("/:"));
        if (prefix.split("/").filter(Boolean).length >= 2) {
          prefixSources.push(prefix);
        }
      } else {
        exactSources.add(normalized);
      }
    }

    const offenders = paths.filter(
      (path) =>
        exactSources.has(path) ||
        prefixSources.some(
          (prefix) => path === prefix || path.startsWith(`${prefix}/`)
        )
    );

    for (const offender of offenders) {
      console.error(
        `Sitemap includes ${offender}, which matches a redirect source in next.config.ts. ` +
          "Delete the stale page (or remove the redirect) so the sitemap ships no 3XX URLs."
      );
    }

    expect(offenders).toEqual([]);
  } finally {
    if (previousSiteUrl === undefined) {
      process.env.SITE_URL = undefined;
    } else {
      process.env.SITE_URL = previousSiteUrl;
    }
  }
});

test("robots.txt references the sitemap", () => {
  const robotsPath = join(process.cwd(), "public", "robots.txt");
  const robotsContent = readFileSync(robotsPath, "utf-8");

  expect(robotsContent).toContain(
    "Sitemap: https://docs.arcade.dev/sitemap.xml"
  );
});

test("robots.txt references llms.txt", () => {
  const robotsPath = join(process.cwd(), "public", "robots.txt");
  const robotsContent = readFileSync(robotsPath, "utf-8");

  expect(robotsContent).toContain("# https://docs.arcade.dev/llms.txt");
});
