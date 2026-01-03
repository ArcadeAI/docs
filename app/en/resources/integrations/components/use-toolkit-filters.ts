import {
  TOOLKITS,
  type Toolkit,
  type ToolkitType,
} from "@arcadeai/design-system";
import { useDebounce } from "@uidotdev/usehooks";
import { useMemo } from "react";
import { create } from "zustand";

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
  arcade_starter: "Arcade Starter",
  verified: "Verified",
  community: "Community",
  auth: "Auth Provider",
};

const getTypePriority = (type: string): number =>
  TYPE_PRIORITY[type as ToolkitType] ?? DEFAULT_PRIORITY;

const compareToolkits = (a: Toolkit, b: Toolkit): number => {
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

type FilterState = {
  selectedCategory: string;
  selectedType: ToolkitType | "all";
  filterByPro: boolean;
  filterByByoc: boolean;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSelectedType: (type: ToolkitType | "all") => void;
  setFilterByPro: (value: boolean) => void;
  setFilterByByoc: (value: boolean) => void;
  setSearchQuery: (query: string) => void;
  clearAllFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  selectedCategory: "all",
  selectedType: "all",
  filterByPro: false,
  filterByByoc: false,
  searchQuery: "",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedType: (type) => set({ selectedType: type }),
  setFilterByPro: (value) => set({ filterByPro: value }),
  setFilterByByoc: (value) => set({ filterByByoc: value }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearAllFilters: () =>
    set({
      selectedCategory: "all",
      selectedType: "all",
      filterByPro: false,
      filterByByoc: false,
      searchQuery: "",
    }),
}));

export function useToolkitFilters() {
  const {
    selectedCategory,
    selectedType,
    filterByPro,
    filterByByoc,
    searchQuery,
  } = useFilterStore();

  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  const filteredToolkits = useMemo(() => {
    const searchLower = debouncedSearchQuery.toLowerCase();

    return TOOLKITS.filter((toolkit) => {
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
    }).sort(compareToolkits);
  }, [
    selectedCategory,
    selectedType,
    filterByPro,
    filterByByoc,
    debouncedSearchQuery,
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
