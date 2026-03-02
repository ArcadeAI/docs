"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  Snippet,
  useInstantSearch,
} from "react-instantsearch";

type DocSearchHierarchy = {
  lvl0: string | null;
  lvl1: string | null;
  lvl2: string | null;
  lvl3: string | null;
  lvl4: string | null;
  lvl5: string | null;
  lvl6: string | null;
};

type DocSearchRecord = {
  objectID: string;
  type:
    | "lvl0"
    | "lvl1"
    | "lvl2"
    | "lvl3"
    | "lvl4"
    | "lvl5"
    | "lvl6"
    | "content";
  hierarchy: DocSearchHierarchy;
  content: string | null;
  url: string;
  anchor: string | null;
  // Legacy flat fields from non-docsearch indexes
  title?: string;
  description?: string;
};

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const searchClient =
  appId && searchKey ? algoliasearch(appId, searchKey) : null;

function safeHref(url: string | undefined): string {
  if (!url) {
    return "/";
  }
  if (
    url.startsWith("https://") ||
    (url.startsWith("/") && !url.startsWith("//"))
  ) {
    return url;
  }
  return "/";
}

function getHitUrl(hit: DocSearchRecord): string {
  // DocSearch records include full URLs; make them relative for same-site nav
  if (hit.url) {
    try {
      const parsed = new URL(hit.url);
      return safeHref(parsed.pathname + parsed.hash);
    } catch {
      return safeHref(hit.url);
    }
  }
  return "/";
}

function Breadcrumb({ hit }: { hit: DocSearchRecord }) {
  if (!hit.hierarchy) {
    return null;
  }

  const levels = [
    hit.hierarchy.lvl0,
    hit.hierarchy.lvl1,
    hit.hierarchy.lvl2,
    hit.hierarchy.lvl3,
    hit.hierarchy.lvl4,
    hit.hierarchy.lvl5,
  ].filter(Boolean) as string[];

  // For content-type hits, show full breadcrumb. For heading hits, show parent levels only.
  const breadcrumbLevels =
    hit.type === "content" ? levels : levels.slice(0, -1);

  if (breadcrumbLevels.length === 0) {
    return null;
  }

  return (
    <div className="mb-0.5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
      {breadcrumbLevels.map((level, i) => (
        <span className="flex items-center gap-1" key={level}>
          {i > 0 && (
            <span aria-hidden="true" className="text-muted-foreground/50">
              ›
            </span>
          )}
          <span className="truncate">{level}</span>
        </span>
      ))}
    </div>
  );
}

function HitTitle({ hit }: { hit: DocSearchRecord }) {
  const castHit = hit as unknown as Parameters<typeof Highlight>[0]["hit"];

  // For content-type records, the "title" is the nearest heading
  if (hit.type === "content") {
    // Find the deepest non-null heading level
    const headingAttr = (
      [
        "hierarchy.lvl5",
        "hierarchy.lvl4",
        "hierarchy.lvl3",
        "hierarchy.lvl2",
        "hierarchy.lvl1",
        "hierarchy.lvl0",
      ] as const
    ).find((attr) => {
      const key = attr.split(".")[1] as keyof DocSearchHierarchy;
      return hit.hierarchy?.[key];
    });

    if (headingAttr) {
      return <Highlight attribute={headingAttr.split(".")} hit={castHit} />;
    }
  }

  // For heading-type records, highlight the heading itself
  if (hit.type?.startsWith("lvl") && hit.hierarchy) {
    return <Highlight attribute={["hierarchy", hit.type]} hit={castHit} />;
  }

  // Fallback for legacy flat records
  if (hit.title) {
    return <Highlight attribute="title" hit={castHit} />;
  }

  return <span>{hit.hierarchy?.lvl0 ?? "Untitled"}</span>;
}

function SearchHit({ hit }: { hit: DocSearchRecord }) {
  const castHit = hit as unknown as Parameters<typeof Snippet>[0]["hit"];
  const isContentHit = hit.type === "content";

  return (
    <a
      className="block rounded-lg px-4 py-3 hover:bg-neutral-100 dark:hover:bg-white/5"
      href={getHitUrl(hit)}
    >
      <Breadcrumb hit={hit} />
      <div className="truncate text-sm font-medium text-foreground">
        <HitTitle hit={hit} />
      </div>
      {isContentHit && hit.content && (
        <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
          <Snippet attribute="content" hit={castHit} />
        </div>
      )}
      {!isContentHit && hit.description && (
        <div className="mt-0.5 truncate text-xs text-muted-foreground">
          <Highlight attribute="description" hit={castHit} />
        </div>
      )}
    </a>
  );
}

function EmptyQuery() {
  const { indexUiState } = useInstantSearch();
  if (indexUiState.query) {
    return null;
  }
  return (
    <p className="px-4 py-8 text-center text-sm text-muted-foreground">
      Start typing to search the docs…
    </p>
  );
}

function NoResults() {
  const { results } = useInstantSearch();
  if (!results?.query || results.nbHits > 0) {
    return null;
  }
  return (
    <p className="px-4 py-8 text-center text-sm text-muted-foreground">
      No results for{" "}
      <strong className="text-foreground">"{results.query}"</strong>
    </p>
  );
}

function SearchUnavailable() {
  return (
    <p className="px-4 py-8 text-center text-sm text-muted-foreground">
      Add <code className="text-xs">NEXT_PUBLIC_ALGOLIA_APP_ID</code>,{" "}
      <code className="text-xs">NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY</code>, and{" "}
      <code className="text-xs">NEXT_PUBLIC_ALGOLIA_INDEX_NAME</code> to your
      environment to enable search.
    </p>
  );
}

export function AlgoliaSearch() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        aria-label="Search docs"
        className="algolia-search-button flex w-56 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Search className="size-3.5 shrink-0" />
        <span className="flex-1 text-left">Search</span>
        <kbd className="flex items-center gap-0.5 rounded border border-border px-1 text-xs text-muted-foreground">
          <span>⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div
          aria-label="Search"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh]"
          role="dialog"
        >
          <button
            aria-label="Close search"
            className="fixed inset-0 bg-black/30 backdrop-blur-sm dark:bg-black/50"
            onClick={() => setIsOpen(false)}
            type="button"
          />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
            {searchClient && indexName ? (
              <InstantSearch indexName={indexName} searchClient={searchClient}>
                <Configure
                  attributesToSnippet={["content:20"]}
                  distinct
                  hitsPerPage={15}
                  snippetEllipsisText="…"
                />
                <div className="flex items-center border-b border-border px-4">
                  <Search className="size-4 shrink-0 text-muted-foreground" />
                  <SearchBox
                    autoFocus
                    classNames={{
                      form: "flex flex-1",
                      input:
                        "w-full bg-transparent px-3 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none",
                      loadingIndicator: "hidden",
                      reset: "hidden",
                      root: "flex-1",
                      submit: "hidden",
                    }}
                    placeholder="Search docs…"
                  />
                </div>
                <div className="max-h-[60vh] overflow-y-auto p-2">
                  <EmptyQuery />
                  <NoResults />
                  <Hits
                    classNames={{ item: "", list: "space-y-0.5", root: "" }}
                    hitComponent={({ hit }) => (
                      <SearchHit hit={hit as unknown as DocSearchRecord} />
                    )}
                  />
                </div>
              </InstantSearch>
            ) : (
              <SearchUnavailable />
            )}
          </div>
        </div>
      )}
    </>
  );
}
