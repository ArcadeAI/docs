const MARKDOWN_PAGE_EXTENSIONS = new Set(["md", "mdx"]);

const NESTED_RULE_KEYS = ["use", "oneOf", "rules"] as const;

type SwcLoaderOptions = {
  nextConfig?: { pageExtensions?: string[] };
};

/**
 * Next 16.2 started building the App Router "is this a page/layout/route?"
 * check inside the SWC react-server-components transform out of
 * `nextConfig.pageExtensions`. Next 16.1 and earlier hard-coded that check as
 * `/(page|layout|route)\.(ts|js)x?$/`, so a `page.mdx` never matched it.
 *
 * Nextra adds "md" and "mdx" to `pageExtensions` so its MDX files route, which
 * means every `page.mdx` now reaches a validator that had never seen one. On
 * the client layer that validator treats any app entry as a client entry and
 * rejects the `export const metadata` Nextra generates on every page, so the
 * whole site fails to compile.
 *
 * Inside SWC, `pageExtensions` feeds nothing but that regex, and it gets there
 * only through next-swc-loader. Dropping the markdown extensions from the copy
 * handed to the loader therefore restores the 16.1 behavior for MDX pages and
 * leaves routing — which reads the real `nextConfig.pageExtensions` — alone.
 * The metadata still resolves on the server; see tests/mdx-page-metadata.test.ts.
 *
 * Remove once https://github.com/shuding/nextra/issues/5003 is fixed upstream.
 */
export function stripMarkdownFromSwcPageExtensions(rules: unknown): void {
  if (Array.isArray(rules)) {
    for (const rule of rules) {
      stripMarkdownFromSwcPageExtensions(rule);
    }
    return;
  }
  if (!rules || typeof rules !== "object") {
    return;
  }

  const rule = rules as Record<string, unknown>;
  const loader = rule.loader;
  const options = rule.options as SwcLoaderOptions | undefined;

  if (
    typeof loader === "string" &&
    loader.includes("next-swc-loader") &&
    options?.nextConfig?.pageExtensions
  ) {
    // Replace rather than splice: the same nextConfig object is shared across
    // every loader entry, and routing still needs its markdown extensions.
    options.nextConfig = {
      ...options.nextConfig,
      pageExtensions: options.nextConfig.pageExtensions.filter(
        (extension) => !MARKDOWN_PAGE_EXTENSIONS.has(extension)
      ),
    };
  }

  for (const key of NESTED_RULE_KEYS) {
    if (rule[key]) {
      stripMarkdownFromSwcPageExtensions(rule[key]);
    }
  }
}
