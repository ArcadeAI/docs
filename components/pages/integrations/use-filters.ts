"use client";

import type { ToolkitCategory, ToolkitType } from "@arcadeai/design-system";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import {
  DEFAULT_FILTER_STATE,
  type FilterState,
  parseFiltersFromParams,
  serializeFiltersToParams,
} from "./filter-params";

type HistoryMethod = "push" | "replace";

/**
 * Two-way binding between filter UI and URL query params, with the URL as the
 * single source of truth.
 *
 * - Read: `useSearchParams()` re-renders this hook whenever the URL changes
 *   (including back/forward and `pushState`/`replaceState` calls), so the UI
 *   always reflects the current URL.
 * - Write: setters compute the next state, serialize to a query string, and
 *   call `window.history.pushState` (or `replaceState` for the search input,
 *   to avoid one history entry per keystroke). Next.js picks up the change
 *   and re-renders subscribers automatically.
 */
export function useFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const state = useMemo<FilterState>(
    () => parseFiltersFromParams(searchParams?.toString() ?? ""),
    [searchParams]
  );

  const writeState = useCallback(
    (next: FilterState, method: HistoryMethod = "push") => {
      const qs = serializeFiltersToParams(next);
      const url = qs ? `${pathname}?${qs}` : pathname;
      const currentQs = searchParams?.toString() ?? "";
      const current = currentQs ? `${pathname}?${currentQs}` : pathname;

      if (url === current) {
        return;
      }

      if (method === "replace") {
        window.history.replaceState(null, "", url);
      } else {
        window.history.pushState(null, "", url);
      }
    },
    [pathname, searchParams]
  );

  const setSelectedCategory = useCallback(
    (category: ToolkitCategory) => {
      writeState({ ...state, selectedCategory: category });
    },
    [state, writeState]
  );

  const setSelectedType = useCallback(
    (type: ToolkitType | "all") => {
      writeState({ ...state, selectedType: type });
    },
    [state, writeState]
  );

  const setFilterByPro = useCallback(
    (value: boolean) => {
      writeState({ ...state, filterByPro: value });
    },
    [state, writeState]
  );

  const setFilterByByoc = useCallback(
    (value: boolean) => {
      writeState({ ...state, filterByByoc: value });
    },
    [state, writeState]
  );

  // Search-query updates use replaceState to avoid one history entry per
  // keystroke. Discrete filter changes above use pushState so back/forward
  // steps through them.
  const setSearchQuery = useCallback(
    (query: string) => {
      writeState({ ...state, searchQuery: query }, "replace");
    },
    [state, writeState]
  );

  const clearAllFilters = useCallback(() => {
    writeState(DEFAULT_FILTER_STATE);
  }, [writeState]);

  return {
    ...state,
    setSelectedCategory,
    setSelectedType,
    setFilterByPro,
    setFilterByByoc,
    setSearchQuery,
    clearAllFilters,
  };
}
