import { describe, expect, it } from "vitest";
import { config as proxyConfig } from "@/proxy";
import { redirects } from "@/redirects";

const LOCALE_ROOT_SOURCE = /^\/:locale(\([^)]*\))?$/;
const SCOPED_LOCALE_ROOT = /^\/:locale\(en\|es\|pt-BR\)$/;

/**
 * Root-level files (`/llms.txt`, `/robots.txt`, `/sitemap.xml`) must never be
 * caught by the locale redirect or the locale proxy. A bare
 * `/:locale` redirect source matched every single-segment path and sent
 * `/llms.txt` to `/llms.txt/home`.
 */
describe("root files stay reachable", () => {
  it("any locale-root redirect only matches real locales", () => {
    // The locale root itself is redirected by proxy.ts, as in production.
    const localeRoot = redirects.filter((r) =>
      LOCALE_ROOT_SOURCE.test(r.source)
    );
    for (const r of localeRoot) {
      expect(r.source).toMatch(SCOPED_LOCALE_ROOT);
    }
  });

  it("the proxy matcher excludes text files", () => {
    const matcher = proxyConfig.matcher.join(" ");
    for (const ext of ["txt", "xml", "json"]) {
      expect(matcher).toContain(`\\.${ext}$`);
    }
  });
});
