/**
 * Algolia Crawler configuration — source of truth for the docs search index.
 *
 * The live crawler config is edited in the Algolia dashboard
 * (Data Sources -> Crawler -> Editor). This file mirrors it so changes are
 * reviewable in git instead of only living in the dashboard.
 *
 * To apply a change to the live crawler, edit this file — merging it to main
 * runs `.github/workflows/sync-crawler-config.yml`, which pushes it via the
 * Crawler API and triggers a reindex (`pnpm sync-crawler-config`). To apply it
 * by hand instead, wrap the object below in `new Crawler({ ...crawlerConfig,
 * apiKey })` in the dashboard editor and run a crawl.
 *
 * The crawler API key is intentionally NOT stored here — it lives only in the
 * Algolia dashboard and in CI secrets (see .github/workflows/algolia-reindex.yml).
 *
 * App ID:     BJB8PBSQ9T
 * Index:      docs_arcade_dev_bjb8pbsq9t_docsearch
 * Crawler ID: fe95aa31-abbb-40ea-a31b-04a9ccd176b4
 */
export const crawlerConfig = {
  appId: "BJB8PBSQ9T",
  indexPrefix: "",
  rateLimit: 8,
  maxUrls: null,
  // Weekly backstop only — freshness is driven by reindex-on-publish
  // (.github/workflows/algolia-reindex.yml).
  schedule: "every 1 week",
  startUrls: ["https://docs.arcade.dev"],
  sitemaps: ["https://docs.arcade.dev/sitemap.xml"],
  saveBackup: false,
  ignoreQueryParams: ["source", "utm_*"],
  exclusionPatterns: ["**/cdn-cgi/**"],
  actions: [
    {
      indexName: "docs_arcade_dev_bjb8pbsq9t_docsearch",
      pathsToMatch: ["https://docs.arcade.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        // Strip site chrome so nav/sidebar/toc are not indexed as content.
        $(
          "nav, header, footer, aside, .nextra-navbar, .nextra-sidebar, .nextra-toc, .nextra-banner, .nextra-mobile-nav, .nextra-skip-nav"
        ).remove();

        return helpers.docsearch({
          recordProps: {
            lvl0: { selectors: "article h1", defaultValue: "Arcade Docs" },
            lvl1: "article h2",
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            content: "article p, article li, article td",
          },
          indexHeadings: true,
          aggregateContent: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    docs_arcade_dev_bjb8pbsq9t_docsearch: {
      distinct: true,
      attributeForDistinct: "url_without_anchor",
      searchableAttributes: [
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy.lvl5)",
        "content",
      ],
      customRanking: ["asc(anchor)"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      attributesForFaceting: ["type", "lang"],
    },
  },
};
