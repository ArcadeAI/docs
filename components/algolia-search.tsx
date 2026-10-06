"use client";

/**
 * Algolia DocSearch dialog for the Fumadocs search provider.
 *
 * Search defaults to Orama (app/api/search/route.ts). When the
 * `NEXT_PUBLIC_ALGOLIA_APP_ID`, `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` and
 * `NEXT_PUBLIC_ALGOLIA_INDEX_NAME` environment variables are set,
 * components/root-provider.tsx swaps this dialog in. The index is produced by
 * the Algolia crawler config in `algolia/` (DocSearch record format).
 */
import { liteClient } from "algoliasearch/lite";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";
import AlgoliaSearchDialog from "fumadocs-ui/components/dialog/search-algolia";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

/** True when every Algolia env var is present (inlined at build time). */
export const isAlgoliaConfigured = Boolean(appId && searchKey && indexName);

const client = appId && searchKey ? liteClient(appId, searchKey) : null;

export function AlgoliaSearch(props: SharedProps) {
  if (!(client && indexName)) {
    return null;
  }
  return (
    <AlgoliaSearchDialog
      {...props}
      searchOptions={{ client, indexName }}
      showAlgolia
    />
  );
}
