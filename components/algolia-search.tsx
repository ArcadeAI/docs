"use client";

import { type LiteClient, liteClient } from "algoliasearch/lite";
import type { SortedResult } from "fumadocs-core/search";
import { type SearchClient, useDocsSearch } from "fumadocs-core/search/client";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogListItem,
  SearchDialogOverlay,
  type SearchItemType,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { type ReactNode, useMemo } from "react";

/**
 * Docs search: Fumadocs' search dialog on top of the Algolia DocSearch index
 * built by the crawler (algolia/crawler-config.js).
 *
 * Results are grouped by page, like Fumadocs' own Algolia client does, but
 * read from DocSearch records: a short snippet of the matching text, and the
 * section path of each hit. The text is shown as plain text with the matches
 * highlighted, so code samples in the index are not rendered as Markdown.
 */

type DocSearchLevel = "lvl0" | "lvl1" | "lvl2" | "lvl3" | "lvl4" | "lvl5";

type Highlighted = { value: string };

type DocSearchHit = {
  _highlightResult?: {
    hierarchy?: Partial<Record<DocSearchLevel, Highlighted>>;
  };
  _snippetResult?: { content?: Highlighted };
  anchor: string | null;
  hierarchy: Partial<Record<DocSearchLevel, string | null>>;
  objectID: string;
  type?: DocSearchLevel | "content";
  url: string;
};

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? "";

/** True when every Algolia env var is present (inlined at build time). */
export const isSearchConfigured = Boolean(appId && searchKey && indexName);

// Created only when configured: the Algolia client throws without an app ID.
const algolia = isSearchConfigured
  ? liteClient(appId ?? "", searchKey ?? "")
  : null;

const MARK = "mark";
/** Heading levels below the page title (`lvl0` is the page's H1). */
const SECTION_LEVELS: DocSearchLevel[] = [
  "lvl1",
  "lvl2",
  "lvl3",
  "lvl4",
  "lvl5",
];
const MARK_SPLIT = /(<mark>[\s\S]*?<\/mark>)/g;
const MARK_TAGS = /<\/?mark>/g;
// Algolia HTML-escapes `& < > " '` in highlighted and snippeted text.
const ENTITY = /&(?:amp|lt|gt|quot|#39|#x27);/g;
const ENTITIES: Record<string, string> = {
  "&#39;": "'",
  "&#x27;": "'",
  "&amp;": "&",
  "&gt;": ">",
  "&lt;": "<",
  "&quot;": '"',
};

/** Same-site path of a DocSearch URL, so results navigate without a reload. */
function sitePath(url: string): string {
  try {
    return new URL(url, "https://docs.arcade.dev").pathname;
  } catch {
    return "/";
  }
}

function highlighted(hit: DocSearchHit, level: DocSearchLevel): string {
  return (
    hit._highlightResult?.hierarchy?.[level]?.value ??
    hit.hierarchy[level] ??
    ""
  );
}

/** The deepest heading of a heading hit, with its highlight tags. */
function heading(hit: DocSearchHit): string {
  const level = [...SECTION_LEVELS].reverse().find((l) => hit.hierarchy[l]);
  return level ? highlighted(hit, level) : "";
}

/** Section headings above the hit, without the highlight tags. */
function sectionPath(hit: DocSearchHit): string[] {
  const path = SECTION_LEVELS.map((level) => hit.hierarchy[level]).filter(
    (title): title is string => Boolean(title)
  );
  // A heading hit is its own row: its path ends at its parent.
  return hit.type === "content" ? path : path.slice(0, -1);
}

function toResults(hits: DocSearchHit[]): SortedResult[] {
  const results: SortedResult[] = [];
  const pages = new Set<string>();
  for (const hit of hits) {
    const page = sitePath(hit.url);
    if (!pages.has(page)) {
      pages.add(page);
      results.push({
        content: highlighted(hit, "lvl0") || page,
        id: page,
        type: "page",
        url: page,
      });
    }
    if (hit.type === "lvl0") {
      continue;
    }
    const isText = hit.type === "content";
    results.push({
      breadcrumbs: sectionPath(hit),
      content: isText
        ? (hit._snippetResult?.content?.value ?? "")
        : heading(hit),
      id: hit.objectID,
      type: isText ? "text" : "heading",
      url: hit.anchor ? `${page}#${hit.anchor}` : page,
    });
  }
  return results;
}

function docSearchClient(client: LiteClient): SearchClient {
  return {
    deps: [client],
    async search(query) {
      if (query.trim().length === 0) {
        return [];
      }
      const response = await client.searchForHits<DocSearchHit>({
        requests: [
          {
            attributesToSnippet: ["content:20"],
            distinct: true,
            highlightPostTag: `</${MARK}>`,
            highlightPreTag: `<${MARK}>`,
            hitsPerPage: 15,
            indexName,
            query,
            snippetEllipsisText: "…",
          },
        ],
      });
      return toResults(response.results[0]?.hits ?? []);
    },
  };
}

function decodeEntities(text: string): string {
  return text.replace(ENTITY, (entity) => ENTITIES[entity] ?? entity);
}

/** Plain text with the `<mark>` spans Algolia added around the matches. */
function withMarks(text: string): ReactNode {
  let offset = 0;
  return text.split(MARK_SPLIT).map((part) => {
    const start = offset;
    offset += part.length;
    return part.startsWith(`<${MARK}>`) ? (
      <mark key={start}>{decodeEntities(part.replace(MARK_TAGS, ""))}</mark>
    ) : (
      decodeEntities(part)
    );
  });
}

function SearchItem(props: { item: SearchItemType; onClick: () => void }) {
  return <SearchDialogListItem {...props} renderMarkdown={withMarks} />;
}

function DocSearchDialog({
  client,
  ...props
}: SharedProps & { client: LiteClient }) {
  const searchClient = useMemo(() => docSearchClient(client), [client]);
  const { search, setSearch, query } = useDocsSearch({ client: searchClient });
  return (
    <SearchDialog
      isLoading={query.isLoading}
      onSearchChange={setSearch}
      search={search}
      {...props}
    >
      <SearchDialogOverlay />
      {/* `data-search-dialog`: the brand highlight in app/global.css. */}
      <SearchDialogContent data-search-dialog="">
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          Item={SearchItem}
          items={query.data === "empty" ? null : query.data}
        />
      </SearchDialogContent>
    </SearchDialog>
  );
}

export function AlgoliaSearch(props: SharedProps) {
  return algolia ? <DocSearchDialog {...props} client={algolia} /> : null;
}
