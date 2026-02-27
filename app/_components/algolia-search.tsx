"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch";

type HitRecord = {
  objectID: string;
  title?: string;
  description?: string;
  url?: string;
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
  if (url.startsWith("/") || url.startsWith("https://")) {
    return url;
  }
  return "/";
}

function SearchHit({ hit }: { hit: HitRecord }) {
  return (
    <a
      className="block rounded-lg px-4 py-3 hover:bg-neutral-100 dark:hover:bg-white/5"
      href={safeHref(hit.url)}
    >
      <div className="truncate text-sm font-medium text-neutral-900 dark:text-white">
        <Highlight
          attribute="title"
          hit={hit as Parameters<typeof Highlight>[0]["hit"]}
        />
      </div>
      {hit.description && (
        <div className="mt-0.5 truncate text-xs text-neutral-500 dark:text-neutral-400">
          <Highlight
            attribute="description"
            hit={hit as Parameters<typeof Highlight>[0]["hit"]}
          />
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
    <p className="px-4 py-8 text-center text-sm text-neutral-400 dark:text-neutral-500">
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
    <p className="px-4 py-8 text-center text-sm text-neutral-400 dark:text-neutral-500">
      No results for{" "}
      <strong className="text-neutral-900 dark:text-white">
        "{results.query}"
      </strong>
    </p>
  );
}

function SearchUnavailable() {
  return (
    <p className="px-4 py-8 text-center text-sm text-neutral-400 dark:text-neutral-500">
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
        className="algolia-search-button flex w-56 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:bg-white/10"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Search className="size-3.5 shrink-0" />
        <span className="flex-1 text-left">Search</span>
        <kbd className="flex items-center gap-0.5 rounded border border-neutral-300 px-1 text-xs text-neutral-400 dark:border-white/10 dark:text-neutral-500">
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
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl dark:border-white/10 dark:bg-neutral-900">
            {searchClient && indexName ? (
              <InstantSearch indexName={indexName} searchClient={searchClient}>
                <div className="flex items-center border-b border-neutral-200 px-4 dark:border-white/10">
                  <Search className="size-4 shrink-0 text-neutral-400 dark:text-neutral-500" />
                  <SearchBox
                    autoFocus
                    classNames={{
                      form: "flex flex-1",
                      input:
                        "w-full bg-transparent px-3 py-4 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none dark:text-white dark:placeholder:text-neutral-500",
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
                      <SearchHit hit={hit as unknown as HitRecord} />
                    )}
                  />
                </div>
                <div className="flex justify-end border-t border-neutral-200 px-4 py-2 dark:border-white/10">
                  <span className="text-xs text-neutral-400 dark:text-neutral-600">
                    Search by Algolia
                  </span>
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
