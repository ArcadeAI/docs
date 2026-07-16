# Docs search (Algolia)

Search on `docs.arcade.dev` is powered by an Algolia Crawler that indexes the
live site. This directory holds the crawler configuration as the **source of
truth**, so search behavior is versioned, reviewed, and changed through git.

## Edit the config here, never in the Algolia dashboard

`crawler-config.js` is the real configuration. Treat the Algolia dashboard
editor as generated output, not a place to make changes.

> **Do not edit the crawler config in the Algolia UI.** Dashboard edits are not
> tracked in git, get overwritten by the next sync, and cause the live crawler
> to drift from this file. Change `crawler-config.js` and open a PR instead.

The dashboard is still useful for **read-only** work: the URL Tester (to preview
what a config change would extract) and Monitoring (to see crawl status and
which URLs succeeded or were ignored).

## How search stays up to date

Two GitHub Actions workflows keep the index fresh. They never overlap.

| When | Workflow | What happens |
| --- | --- | --- |
| Docs content is published (production deploy) | `algolia-reindex.yml` | Triggers a reindex, but only when the deploy touched `app/en/**` or `toolkit-docs-generator/data/toolkits/**` |
| `crawler-config.js` changes on `main` | `sync-crawler-config.yml` | Pushes the config to the Crawler API, then triggers a reindex |

The crawler also runs on a weekly schedule as a backstop.

## Change search behavior

1. Edit `crawler-config.js` (extraction selectors, ranking, searchable
   attributes, crawl scope, and so on).
2. Optional but recommended: paste the change into the dashboard URL Tester on a
   representative page to confirm it extracts what you expect.
3. Open a PR. On merge, `sync-crawler-config.yml` applies it and reindexes.

To apply the config without a merge, run the sync workflow manually from the
Actions tab (`workflow_dispatch`), or run `pnpm sync-crawler-config` locally with
the crawler credentials set as environment variables.

## Configuration and secrets

The crawler API key is never stored in this repo. It lives in the Algolia
dashboard and in CI secrets. The workflows need:

| Name | Type | Source |
| --- | --- | --- |
| `ALGOLIA_CRAWLER_ID` | Variable | Crawler dashboard URL |
| `ALGOLIA_CRAWLER_USER_ID` | Secret | Crawler → API credentials |
| `ALGOLIA_CRAWLER_API_KEY` | Secret | Crawler → API credentials |

The public search credentials used by the frontend widget
(`app/_components/algolia-search.tsx`) are separate `NEXT_PUBLIC_ALGOLIA_*`
environment variables.

## Troubleshooting

- **A crawl is blocked with `SafeReindexingError`.** The new crawl produced far
  fewer records than the live index (a safety guard against a broken extractor).
  Check Monitoring and the URL Tester to confirm the extraction is correct. If
  the smaller result is legitimate, use "Replace production index" in the
  dashboard to accept the new baseline. If it is a regression, fix the selectors
  in `crawler-config.js` first.
- **A new page is missing from search.** Confirm the production deploy touched a
  watched path (otherwise `algolia-reindex.yml` skips the crawl), and check that
  the page appears in `sitemap.xml`.
