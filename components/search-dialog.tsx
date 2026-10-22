"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import { fetchClient } from "fumadocs-core/search/client/fetch";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SearchItemType,
} from "fumadocs-ui/components/dialog/search";
import type { SearchLink, SharedProps } from "fumadocs-ui/contexts/search";
import posthog from "posthog-js";
import { useEffect, useMemo, useRef, useState } from "react";

// A query counts as "searched" once the user has paused this long on it, so
// typing "gmail" logs one event rather than one per keystroke.
const SETTLE_MS = 1000;
const MIN_TRACKED_QUERY_LENGTH = 2;
const MAX_TRACKED_QUERY_LENGTH = 200;

type SeenResults = { query: string; count: number };

type DocsSearchDialogProps = SharedProps & { links?: SearchLink[] };

/**
 * Fumadocs' default search dialog (fumadocs-ui/components/dialog/search-default)
 * with PostHog events added, as the Fumadocs docs suggest for customizing it:
 *
 * - "Docs search": a query the user paused on, with how many results it got.
 *   Queries with no results show where the docs or the index have gaps.
 * - "Docs search result selected": which page the user opened for that query.
 *
 * `links` are the suggestions shown while the input is empty.
 */
export default function DocsSearchDialog({
  links = [],
  onOpenChange,
  ...props
}: DocsSearchDialogProps) {
  const [seen, setSeen] = useState<SeenResults | null>(null);
  const lastTracked = useRef("");

  // Wrap the fetch client to learn how many results each query returned.
  const client = useMemo(() => {
    const base = fetchClient();
    return {
      deps: base.deps,
      async search(text: string) {
        const results = await base.search(text);
        setSeen({ query: text, count: results.length });
        return results;
      },
    };
  }, []);

  const { search, setSearch, query } = useDocsSearch({ client });

  const defaultItems = useMemo(
    () =>
      links.length === 0
        ? null
        : links.map(([name, url]) => ({
            type: "page" as const,
            id: name,
            content: name,
            url,
          })),
    [links]
  );

  useEffect(() => {
    const term = search.trim();
    if (term.length < MIN_TRACKED_QUERY_LENGTH) {
      return;
    }
    const timer = setTimeout(() => {
      if (seen?.query.trim() !== term || lastTracked.current === term) {
        return;
      }
      lastTracked.current = term;
      posthog.capture("Docs search", {
        query: term.slice(0, MAX_TRACKED_QUERY_LENGTH),
        result_count: seen.count,
        has_results: seen.count > 0,
      });
    }, SETTLE_MS);
    return () => clearTimeout(timer);
  }, [search, seen]);

  const handleSelect = (item: SearchItemType) => {
    if (item.type === "action") {
      return;
    }
    posthog.capture("Docs search result selected", {
      query: search.trim().slice(0, MAX_TRACKED_QUERY_LENGTH),
      url: item.url,
    });
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      lastTracked.current = "";
    }
    onOpenChange(open);
  };

  return (
    <SearchDialog
      {...props}
      isLoading={query.isLoading}
      onOpenChange={handleOpenChange}
      onSearchChange={setSearch}
      onSelect={handleSelect}
      search={search}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          items={query.data === "empty" ? defaultItems : query.data}
        />
      </SearchDialogContent>
    </SearchDialog>
  );
}
