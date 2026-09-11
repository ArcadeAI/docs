"use client";

import { Search } from "lucide-react";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { createBm25Index } from "@/app/_lib/search/bm25";
import { highlightQuery } from "@/app/_lib/search/highlight";
import type { SearchDocument, SearchHit } from "@/app/_lib/search/types";

const HIT_LIMIT = 15;

let documentsPromise: Promise<SearchDocument[]> | null = null;

function fetchSearchDocuments(): Promise<SearchDocument[]> {
  if (!documentsPromise) {
    documentsPromise = fetch("/api/search-index")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Search index request failed");
        }
        return response.json() as Promise<{ documents: SearchDocument[] }>;
      })
      .then((payload) => payload.documents)
      .catch((error: unknown) => {
        documentsPromise = null;
        throw error;
      });
  }
  return documentsPromise;
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const parts = highlightQuery(text, query);
  return (
    <>
      {parts.map((part, index) =>
        part.match ? (
          <mark className="docs-search-highlight" key={`${part.text}-${index}`}>
            {part.text}
          </mark>
        ) : (
          <span key={`${part.text}-${index}`}>{part.text}</span>
        )
      )}
    </>
  );
}

function SearchHitLink({
  hit,
  query,
  active,
  onSelect,
}: {
  hit: SearchHit;
  query: string;
  active: boolean;
  onSelect: () => void;
}) {
  const sectionLevels = hit.heading ? [hit.heading] : [];

  return (
    <a
      aria-selected={active}
      className={`block rounded-lg px-4 py-3 hover:bg-neutral-100 dark:hover:bg-white/5 ${
        active ? "bg-neutral-100 dark:bg-white/5" : ""
      }`}
      href={hit.url}
      onClick={onSelect}
      role="option"
    >
      <div className="truncate text-sm font-medium text-foreground">
        <HighlightedText query={query} text={hit.title} />
      </div>
      {sectionLevels.length > 0 && (
        <div className="mt-0.5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          {sectionLevels.map((heading) => (
            <span className="truncate" key={heading}>
              <HighlightedText query={query} text={heading} />
            </span>
          ))}
        </div>
      )}
      {hit.content && (
        <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
          <HighlightedText query={query} text={hit.content} />
        </div>
      )}
    </a>
  );
}

export function DocsSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [documents, setDocuments] = useState<SearchDocument[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  useEffect(() => {
    fetchSearchDocuments()
      .then((loaded) => {
        setDocuments(loaded);
        setLoadError(false);
      })
      .catch(() => {
        setLoadError(true);
      });
  }, []);

  useEffect(() => {
    const handler = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen((previous) => !previous);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  const searchIndex = useMemo(
    () => (documents ? createBm25Index(documents) : null),
    [documents]
  );

  const hits = useMemo(
    () =>
      searchIndex && query.trim() ? searchIndex.search(query, HIT_LIMIT) : [],
    [searchIndex, query]
  );

  const close = () => {
    setIsOpen(false);
  };

  const onQueryKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" && hits.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => Math.min(current + 1, hits.length - 1));
      return;
    }
    if (event.key === "ArrowUp" && hits.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
      return;
    }
    if (event.key === "Enter" && hits[activeIndex]) {
      event.preventDefault();
      window.location.assign(hits[activeIndex].url);
      close();
    }
  };

  return (
    <>
      <button
        aria-label="Search docs"
        className="docs-search-button flex w-56 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
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
            onClick={close}
            type="button"
          />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
            <div className="flex items-center border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                aria-autocomplete="list"
                aria-controls={listId}
                className="w-full bg-transparent px-3 py-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={onQueryKeyDown}
                placeholder="Search docs…"
                ref={inputRef}
                type="search"
                value={query}
              />
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {loadError && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Search is unavailable right now. Refresh the page and try
                  again.
                </p>
              )}
              {!(loadError || documents) && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Loading search…
                </p>
              )}
              {!loadError && documents && !query.trim() && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Start typing to search the docs…
                </p>
              )}
              {!loadError && documents && query.trim() && hits.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No results for{" "}
                  <strong className="text-foreground">"{query}"</strong>
                </p>
              )}
              {hits.length > 0 && (
                <div className="space-y-0.5" id={listId} role="listbox">
                  {hits.map((hit, hitIndex) => (
                    <SearchHitLink
                      active={hitIndex === activeIndex}
                      hit={hit}
                      key={hit.id}
                      onSelect={close}
                      query={query}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
