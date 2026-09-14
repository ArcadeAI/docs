import { existsSync, readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import type { NextConfig } from "next";
import { describe, expect, test } from "vitest";
import { stripMarkdownFromSwcPageExtensions } from "../lib/swc-page-extensions";

type WebpackContext = Parameters<NonNullable<NextConfig["webpack"]>>[1];

/**
 * Regression coverage for the Next 16.2 SWC app-entry check that broke every
 * MDX page (https://github.com/shuding/nextra/issues/5003).
 *
 * Next 16.2 builds the "is this a page/layout/route?" regex inside the SWC
 * react-server-components transform out of `nextConfig.pageExtensions`. Because
 * Nextra puts "md"/"mdx" in there so its pages route, `page.mdx` started
 * reaching a validator that rejects the `export const metadata` Nextra emits,
 * and the whole site failed to compile. lib/swc-page-extensions.ts keeps the
 * markdown extensions out of the copy handed to next-swc-loader.
 *
 * These tests pin both halves of that trade: markdown still routes, and the
 * generated pages still carry server-resolved metadata.
 */

const APP_DIR = join(process.cwd(), "app", "en");
const BUILD_DIR = join(process.cwd(), ".next", "server", "app");

const SWC_LOADER = "/next/dist/build/webpack/loaders/next-swc-loader.js";
const NON_SWC_LOADER = "/next/dist/build/webpack/loaders/next-flight-loader.js";

const FRONTMATTER_TITLE_RE = /^title:\s*["']?(.+?)["']?\s*$/m;
const HTML_TITLE_RE = /<title>([^<]*)<\/title>/;
const FRONTMATTER_DESCRIPTION_RE = /^description:\s*\S/m;
const PAGE_MDX_SUFFIX_RE = /\/page\.mdx$/;
const CSS_TEST_RE = /\.css$/;

function makeSwcRule(pageExtensions: string[]) {
  return {
    loader: SWC_LOADER,
    options: { nextConfig: { pageExtensions: [...pageExtensions] } },
  };
}

function pageExtensionsOf(rule: {
  options: { nextConfig: { pageExtensions: string[] } };
}) {
  return rule.options.nextConfig.pageExtensions;
}

async function findPageFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const found: string[] = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await findPageFiles(full)));
    } else if (entry.name === "page.mdx") {
      found.push(full);
    }
  }
  return found;
}

/** `app/en/build/arcade-deploy/page.mdx` -> `.next/server/app/en/build/arcade-deploy.html` */
function prerenderedHtmlFor(pageFile: string): string {
  const route = relative(join(process.cwd(), "app"), pageFile).replace(
    PAGE_MDX_SUFFIX_RE,
    ""
  );
  return join(BUILD_DIR, `${route}.html`);
}

describe("stripMarkdownFromSwcPageExtensions", () => {
  test("drops markdown extensions from next-swc-loader options", () => {
    const rule = makeSwcRule(["js", "jsx", "ts", "tsx", "md", "mdx"]);

    stripMarkdownFromSwcPageExtensions([rule]);

    expect(pageExtensionsOf(rule)).toEqual(["js", "jsx", "ts", "tsx"]);
  });

  test("leaves loaders other than next-swc-loader alone", () => {
    const rule = {
      loader: NON_SWC_LOADER,
      options: { nextConfig: { pageExtensions: ["ts", "mdx"] } },
    };

    stripMarkdownFromSwcPageExtensions([rule]);

    expect(pageExtensionsOf(rule)).toEqual(["ts", "mdx"]);
  });

  test("reaches loaders nested under use, oneOf, and rules", () => {
    const inUse = makeSwcRule(["ts", "mdx"]);
    const inOneOf = makeSwcRule(["ts", "md"]);
    const inRules = makeSwcRule(["ts", "mdx"]);

    stripMarkdownFromSwcPageExtensions([
      { use: [inUse] },
      { oneOf: [{ use: [inOneOf] }] },
      { rules: [inRules] },
    ]);

    expect(pageExtensionsOf(inUse)).toEqual(["ts"]);
    expect(pageExtensionsOf(inOneOf)).toEqual(["ts"]);
    expect(pageExtensionsOf(inRules)).toEqual(["ts"]);
  });

  test("replaces the nextConfig object instead of mutating the shared one", () => {
    // Next hands the same nextConfig object to every loader entry, and routing
    // still reads its markdown extensions. Mutating it in place would unroute
    // every MDX page.
    const shared = { pageExtensions: ["ts", "mdx"] };
    const rule = { loader: SWC_LOADER, options: { nextConfig: shared } };

    stripMarkdownFromSwcPageExtensions([rule]);

    expect(shared.pageExtensions).toEqual(["ts", "mdx"]);
    expect(rule.options.nextConfig).not.toBe(shared);
    expect(rule.options.nextConfig.pageExtensions).toEqual(["ts"]);
  });

  test("ignores rules with no pageExtensions to strip", () => {
    const rules = [
      { loader: SWC_LOADER },
      { test: CSS_TEST_RE },
      null,
      "string",
    ];

    expect(() => stripMarkdownFromSwcPageExtensions(rules)).not.toThrow();
  });
});

describe("next.config.ts", () => {
  test("still routes .md and .mdx pages", async () => {
    const { default: nextConfig } = await import("../next.config");

    expect(nextConfig.pageExtensions).toContain("md");
    expect(nextConfig.pageExtensions).toContain("mdx");
  });

  test("webpack hook strips markdown from what next-swc-loader sees", async () => {
    const { default: nextConfig } = await import("../next.config");
    const swcRule = makeSwcRule(nextConfig.pageExtensions ?? []);
    // Only the fields Nextra's and our own webpack hooks actually touch.
    const webpackConfig = {
      watchOptions: {},
      resolve: { alias: {}, extensionAlias: {} },
      module: { rules: [swcRule] as unknown[] },
      plugins: [],
    };
    const context: WebpackContext = {
      dir: process.cwd(),
      dev: false,
      isServer: true,
      buildId: "test",
      config: nextConfig as WebpackContext["config"],
      defaultLoaders: { babel: {} },
      totalPages: 0,
      webpack: {},
    };

    nextConfig.webpack?.(webpackConfig, context);

    expect(pageExtensionsOf(swcRule)).not.toContain("md");
    expect(pageExtensionsOf(swcRule)).not.toContain("mdx");
    expect(pageExtensionsOf(swcRule)).toContain("tsx");
    // Routing must keep them.
    expect(nextConfig.pageExtensions).toContain("mdx");
  });
});

describe("MDX pages", () => {
  test("every page.mdx that declares a frontmatter title declares a description too", async () => {
    const pages = await findPageFiles(APP_DIR);

    expect(pages.length).toBeGreaterThan(0);

    const missing = pages.filter((page) => {
      const source = readFileSync(page, "utf8");
      if (!FRONTMATTER_TITLE_RE.test(source)) {
        return false;
      }
      return !FRONTMATTER_DESCRIPTION_RE.test(source);
    });

    expect(missing.map((page) => relative(process.cwd(), page))).toEqual([]);
  });

  // Only meaningful against a real build; `pnpm build` populates .next/server/app.
  describe.skipIf(!existsSync(BUILD_DIR))("prerendered output", () => {
    test("renders a title for every MDX page", async () => {
      const pages = await findPageFiles(APP_DIR);
      const built = pages
        .map((page) => ({ page, html: prerenderedHtmlFor(page) }))
        .filter(({ html }) => existsSync(html));

      expect(built.length).toBeGreaterThan(0);

      const untitled = built.filter(({ html }) => {
        const title = readFileSync(html, "utf8").match(HTML_TITLE_RE)?.[1];
        return !title?.trim();
      });

      expect(untitled.map(({ page }) => relative(process.cwd(), page))).toEqual(
        []
      );
    });

    test("resolves frontmatter metadata on the server", async () => {
      // The Next 16.2 validator claimed these pages were client components,
      // which would have dropped `metadata` entirely. Prove it survives into
      // the prerendered HTML.
      const pages = await findPageFiles(APP_DIR);
      const mismatches: string[] = [];

      for (const page of pages) {
        const html = prerenderedHtmlFor(page);
        if (!existsSync(html)) {
          continue;
        }
        const frontmatterTitle = readFileSync(page, "utf8").match(
          FRONTMATTER_TITLE_RE
        )?.[1];
        if (!frontmatterTitle) {
          continue;
        }
        const renderedTitle =
          readFileSync(html, "utf8").match(HTML_TITLE_RE)?.[1] ?? "";
        if (!renderedTitle.includes(frontmatterTitle)) {
          mismatches.push(
            `${relative(process.cwd(), page)}: expected "${frontmatterTitle}" in "${renderedTitle}"`
          );
        }
      }

      expect(mismatches).toEqual([]);
    });
  });
});
