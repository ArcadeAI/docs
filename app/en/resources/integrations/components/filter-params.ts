import type { ToolkitCategory, ToolkitType } from "@arcadeai/design-system";

const TOOLKIT_TYPES: readonly ToolkitType[] = [
  "arcade",
  "arcade_starter",
  "verified",
  "community",
  "auth",
];

const TOOLKIT_CATEGORIES: readonly ToolkitCategory[] = [
  "all",
  "productivity",
  "social",
  "development",
  "entertainment",
  "search",
  "payments",
  "sales",
  "databases",
  "customer-support",
];

export const PARAM_CATEGORY = "category";
export const PARAM_TYPE = "type";
export const PARAM_LABEL = "label";
export const PARAM_SEARCH = "q";

// Tool labels are multi-value: a tool can carry zero, one, or both labels.
// Encoded in the URL as repeated `label=...` keys, e.g. `?label=pro&label=byoc`.
export type Label = "pro" | "byoc";
const LABELS: readonly Label[] = ["pro", "byoc"];

export function isLabel(value: string): value is Label {
  return (LABELS as readonly string[]).includes(value);
}

export type FilterState = {
  selectedCategory: ToolkitCategory;
  selectedType: ToolkitType | "all";
  filterByPro: boolean;
  filterByByoc: boolean;
  searchQuery: string;
};

export const DEFAULT_FILTER_STATE: FilterState = {
  selectedCategory: "all",
  selectedType: "all",
  filterByPro: false,
  filterByByoc: false,
  searchQuery: "",
};

export function isToolkitType(value: string): value is ToolkitType {
  return (TOOLKIT_TYPES as readonly string[]).includes(value);
}

export function isToolkitCategory(value: string): value is ToolkitCategory {
  return (TOOLKIT_CATEGORIES as readonly string[]).includes(value);
}

type ParamsInput = string | URLSearchParams | null | undefined;

function toSearchParams(input: ParamsInput): URLSearchParams {
  if (input instanceof URLSearchParams) {
    return input;
  }
  return new URLSearchParams(input ?? "");
}

export function parseFiltersFromParams(input: ParamsInput): FilterState {
  const params = toSearchParams(input);
  const state: FilterState = { ...DEFAULT_FILTER_STATE };

  const category = params.get(PARAM_CATEGORY);
  if (category && isToolkitCategory(category)) {
    state.selectedCategory = category;
  }

  const type = params.get(PARAM_TYPE);
  if (type && isToolkitType(type)) {
    state.selectedType = type;
  }

  // Unknown labels (e.g. `?label=bogus`) are silently ignored.
  for (const label of params.getAll(PARAM_LABEL)) {
    if (!isLabel(label)) {
      continue;
    }
    if (label === "pro") {
      state.filterByPro = true;
    } else if (label === "byoc") {
      state.filterByByoc = true;
    }
  }

  const q = params.get(PARAM_SEARCH);
  if (q) {
    state.searchQuery = q;
  }

  return state;
}

export function serializeFiltersToParams(state: FilterState): string {
  const params = new URLSearchParams();

  if (state.selectedCategory !== "all") {
    params.set(PARAM_CATEGORY, state.selectedCategory);
  }
  if (state.selectedType !== "all") {
    params.set(PARAM_TYPE, state.selectedType);
  }
  // `append` (not `set`) so multiple labels round-trip as repeated keys.
  if (state.filterByPro) {
    params.append(PARAM_LABEL, "pro");
  }
  if (state.filterByByoc) {
    params.append(PARAM_LABEL, "byoc");
  }
  if (state.searchQuery) {
    params.set(PARAM_SEARCH, state.searchQuery);
  }

  return params.toString();
}

export function hasActiveFilters(state: FilterState): boolean {
  return (
    state.selectedCategory !== "all" ||
    state.selectedType !== "all" ||
    state.filterByPro ||
    state.filterByByoc ||
    state.searchQuery !== ""
  );
}
