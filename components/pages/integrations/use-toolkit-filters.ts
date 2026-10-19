import type { Toolkit, ToolkitType } from "@arcadeai/design-system";
import { useDebounce } from "@uidotdev/usehooks";
import { useMemo } from "react";
import { useFilters } from "./use-filters";

const DEFAULT_PRIORITY = 5;
const DEBOUNCE_TIME = 300;

const TYPE_PRIORITY: Record<ToolkitType, number> = {
  arcade: 0,
  arcade_starter: 1,
  verified: 2,
  community: 3,
  auth: 4,
};

const TYPE_LABELS: Record<ToolkitType, string> = {
  arcade: "Arcade Optimized",
  arcade_starter: "Arcade Unoptimized",
  verified: "Verified",
  community: "Community",
  auth: "Auth Provider",
};

const getTypePriority = (type: string): number =>
  TYPE_PRIORITY[type as ToolkitType] ?? DEFAULT_PRIORITY;

const compareToolkits = <T extends Toolkit>(a: T, b: T): number => {
  // First prioritize available toolkits over coming soon toolkits
  if (a.isComingSoon !== b.isComingSoon) {
    return a.isComingSoon ? 1 : -1;
  }

  // Within each availability group, prioritize by type
  if (!(a.isComingSoon || b.isComingSoon)) {
    const aPriority = getTypePriority(a.type);
    const bPriority = getTypePriority(b.type);

    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }
  }

  // Finally sort alphabetically within each group
  return a.label.localeCompare(b.label);
};

export function useToolkitFilters<T extends Toolkit>(toolkits: T[]) {
  const {
    selectedCategory,
    selectedType,
    filterByPro,
    filterByByoc,
    searchQuery,
  } = useFilters();

  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  const filteredToolkits = useMemo<T[]>(() => {
    const searchLower = debouncedSearchQuery.toLowerCase();

    return toolkits
      .filter((toolkit) => {
        if (toolkit.isHidden) {
          return false;
        }

        const haystack = `${toolkit.label} ${toolkit.category} ${
          TYPE_LABELS[toolkit.type as ToolkitType] ?? ""
        }`.toLowerCase();

        const conditions = [
          selectedCategory === "all" || toolkit.category === selectedCategory,
          selectedType === "all" || toolkit.type === selectedType,
          !filterByPro || toolkit.isPro,
          !filterByByoc || toolkit.isBYOC,
          searchLower === "" || haystack.includes(searchLower),
        ];

        return conditions.every(Boolean);
      })
      .sort(compareToolkits);
  }, [
    selectedCategory,
    selectedType,
    filterByPro,
    filterByByoc,
    debouncedSearchQuery,
    toolkits,
  ]);

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedType !== "all" ||
    filterByPro ||
    filterByByoc ||
    searchQuery !== "";

  return {
    hasActiveFilters,
    filteredToolkits,
    resultsCount: filteredToolkits.length,
  };
}
