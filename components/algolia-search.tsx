"use client";

import { type LiteClient, liteClient } from "algoliasearch/lite";
import type { SharedProps } from "fumadocs-ui/components/dialog/search";
import AlgoliaSearchDialog from "fumadocs-ui/components/dialog/search-algolia";

/**
 * Docs search: Fumadocs' search dialog on top of the Algolia DocSearch index
 * built by the crawler (algolia/crawler-config.js). The index uses DocSearch records,
 * so each hit is reshaped into the record Fumadocs' Algolia client expects.
 */

type DocSearchLevel = "lvl0" | "lvl1" | "lvl2" | "lvl3" | "lvl4" | "lvl5";

type DocSearchRecord = {
  anchor: string | null;
  content: string | null;
  hierarchy: Partial<Record<DocSearchLevel, string | null>>;
  objectID: string;
  type?: DocSearchLevel | "content";
  url: string;
};

/** The record shape read by `algoliaClient` (fumadocs-core/search/client). */
type FumadocsRecord = {
  breadcrumbs?: string[];
  content: string;
  objectID: string;
  page_id: string;
  section?: string;
  section_id?: string;
  title: string;
  url: string;
};

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? "";

/** True when every Algolia env var is present (inlined at build time). */
export const isSearchConfigured = Boolean(appId && searchKey && indexName);

// Created only when configured: the Algolia client throws without an app ID.
const client = isSearchConfigured
  ? liteClient(appId ?? "", searchKey ?? "")
  : null;

/** Heading levels below the page title (`lvl0` is the page's H1). */
const SECTION_LEVELS: DocSearchLevel[] = [
  "lvl5",
  "lvl4",
  "lvl3",
  "lvl2",
  "lvl1",
];

/** Same-site path of a DocSearch URL, so results navigate without a reload. */
function sitePath(url: string): string {
  try {
    const parsed = new URL(url, "https://docs.arcade.dev");
    return parsed.pathname;
  } catch {
    return "/";
  }
}

function toFumadocsRecord(hit: DocSearchRecord): FumadocsRecord {
  const page = sitePath(hit.url);
  const title = hit.hierarchy.lvl0 ?? page;
  const section =
    SECTION_LEVELS.map((level) => hit.hierarchy[level]).find(Boolean) ??
    undefined;
  const isHeading = hit.type !== "content";
  return {
    // A heading hit has no text of its own: Fumadocs lists it as a heading
    // when its content is the section title.
    content: isHeading ? (section ?? title) : (hit.content ?? ""),
    objectID: hit.objectID,
    page_id: page,
    section: section ?? (isHeading ? title : undefined),
    section_id: hit.anchor ?? undefined,
    title,
    url: page,
  };
}

async function searchDocs(searchClient: LiteClient, query: string) {
  const response = await searchClient.searchForHits<DocSearchRecord>({
    requests: [{ distinct: true, hitsPerPage: 15, indexName, query }],
  });
  return {
    results: response.results.map((result) => ({
      ...result,
      hits: result.hits.map(toFumadocsRecord),
    })),
  };
}

export function AlgoliaSearch(props: SharedProps) {
  if (!client) {
    return null;
  }
  return (
    <AlgoliaSearchDialog
      {...props}
      searchOptions={{
        client,
        indexName,
        onSearch: (query) => searchDocs(client, query),
      }}
      showAlgolia
    />
  );
}
