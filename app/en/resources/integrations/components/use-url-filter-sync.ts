"use client";

import type { ToolkitType } from "@arcadeai/design-system";
import { useEffect, useRef } from "react";
import { useFilterStore } from "./use-toolkit-filters";

const VALID_TYPES = new Set<string>([
  "arcade",
  "arcade_starter",
  "verified",
  "community",
  "auth",
]);

const PARAM_CATEGORY = "category";
const PARAM_TYPE = "type";
const PARAM_PRO = "pro";
const PARAM_BYOC = "byoc";
const PARAM_SEARCH = "q";

function isTruthy(value: string | null): boolean {
  return value !== null && value !== "" && value !== "0" && value !== "false";
}

export type ParsedFilters = Partial<{
  selectedCategory: string;
  selectedType: ToolkitType | "all";
  filterByPro: boolean;
  filterByByoc: boolean;
  searchQuery: string;
}>;

export function parseFiltersFromParams(search: string): ParsedFilters {
  const params = new URLSearchParams(search);
  const result: ParsedFilters = {};

  const category = params.get(PARAM_CATEGORY);
  if (category && category !== "all") {
    result.selectedCategory = category;
  }

  const type = params.get(PARAM_TYPE);
  if (type && VALID_TYPES.has(type)) {
    result.selectedType = type as ToolkitType;
  }

  if (params.has(PARAM_PRO) && isTruthy(params.get(PARAM_PRO))) {
    result.filterByPro = true;
  }

  if (params.has(PARAM_BYOC) && isTruthy(params.get(PARAM_BYOC))) {
    result.filterByByoc = true;
  }

  const q = params.get(PARAM_SEARCH);
  if (q) {
    result.searchQuery = q;
  }

  return result;
}

export type SerializableFilterState = {
  selectedCategory: string;
  selectedType: string;
  filterByPro: boolean;
  filterByByoc: boolean;
  searchQuery: string;
};

export function serializeFiltersToParams(
  state: SerializableFilterState
): string {
  const params = new URLSearchParams();

  if (state.selectedCategory !== "all") {
    params.set(PARAM_CATEGORY, state.selectedCategory);
  }
  if (state.selectedType !== "all") {
    params.set(PARAM_TYPE, state.selectedType);
  }
  if (state.filterByPro) {
    params.set(PARAM_PRO, "1");
  }
  if (state.filterByByoc) {
    params.set(PARAM_BYOC, "1");
  }
  if (state.searchQuery) {
    params.set(PARAM_SEARCH, state.searchQuery);
  }

  return params.toString();
}

function writeFiltersToUrl(state: SerializableFilterState): void {
  const qs = serializeFiltersToParams(state);
  const newUrl = qs
    ? `${window.location.pathname}?${qs}`
    : window.location.pathname;

  if (newUrl !== `${window.location.pathname}${window.location.search}`) {
    window.history.replaceState(null, "", newUrl);
  }
}

/**
 * Two-way sync between the Zustand filter store and URL query params.
 *
 * - Mount: URL → store (so shared/bookmarked links work)
 * - Filter change: store → URL (via replaceState, no navigation)
 * - Back/forward: URL → store (via popstate listener)
 */
export function useUrlFilterSync(): void {
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      const fromUrl = parseFiltersFromParams(window.location.search);
      if (Object.keys(fromUrl).length > 0) {
        useFilterStore.setState(fromUrl);
      }
    }

    const unsubscribe = useFilterStore.subscribe((state) => {
      writeFiltersToUrl(state);
    });

    const handlePopState = () => {
      const defaults = {
        selectedCategory: "all",
        selectedType: "all" as const,
        filterByPro: false,
        filterByByoc: false,
        searchQuery: "",
      };
      const fromUrl = parseFiltersFromParams(window.location.search);
      useFilterStore.setState({ ...defaults, ...fromUrl });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      unsubscribe();
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
}
