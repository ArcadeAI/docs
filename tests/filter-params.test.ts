import { describe, expect, test } from "vitest";
import {
  DEFAULT_FILTER_STATE,
  type FilterState,
  hasActiveFilters,
  isLabel,
  isToolkitCategory,
  isToolkitType,
  parseFiltersFromParams,
  serializeFiltersToParams,
} from "../app/en/resources/integrations/components/filter-params";

describe("isToolkitType", () => {
  test("accepts known toolkit types", () => {
    expect(isToolkitType("arcade")).toBe(true);
    expect(isToolkitType("arcade_starter")).toBe(true);
    expect(isToolkitType("verified")).toBe(true);
    expect(isToolkitType("community")).toBe(true);
    expect(isToolkitType("auth")).toBe(true);
  });

  test("rejects unknown values", () => {
    expect(isToolkitType("bogus")).toBe(false);
    expect(isToolkitType("ARCADE")).toBe(false);
    expect(isToolkitType("")).toBe(false);
  });
});

describe("isToolkitCategory", () => {
  test("accepts known categories", () => {
    expect(isToolkitCategory("all")).toBe(true);
    expect(isToolkitCategory("productivity")).toBe(true);
    expect(isToolkitCategory("social")).toBe(true);
    expect(isToolkitCategory("development")).toBe(true);
    expect(isToolkitCategory("customer-support")).toBe(true);
  });

  test("rejects unknown values", () => {
    expect(isToolkitCategory("bogus")).toBe(false);
    expect(isToolkitCategory("Productivity")).toBe(false);
    expect(isToolkitCategory("")).toBe(false);
  });
});

describe("isLabel", () => {
  test("accepts known labels", () => {
    expect(isLabel("pro")).toBe(true);
    expect(isLabel("byoc")).toBe(true);
  });

  test("rejects unknown values", () => {
    expect(isLabel("PRO")).toBe(false);
    expect(isLabel("bogus")).toBe(false);
    expect(isLabel("")).toBe(false);
    expect(isLabel("1")).toBe(false);
  });
});

describe("parseFiltersFromParams", () => {
  test("returns defaults for no params", () => {
    expect(parseFiltersFromParams("")).toEqual(DEFAULT_FILTER_STATE);
    expect(parseFiltersFromParams(null)).toEqual(DEFAULT_FILTER_STATE);
    expect(parseFiltersFromParams(undefined)).toEqual(DEFAULT_FILTER_STATE);
  });

  test("parses pro label", () => {
    expect(parseFiltersFromParams("?label=pro")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
    });
  });

  test("parses byoc label", () => {
    expect(parseFiltersFromParams("?label=byoc")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByByoc: true,
    });
  });

  test("parses pro + byoc together (repeated key)", () => {
    expect(parseFiltersFromParams("?label=pro&label=byoc")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
      filterByByoc: true,
    });
  });

  test("label order does not matter", () => {
    expect(parseFiltersFromParams("?label=byoc&label=pro")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
      filterByByoc: true,
    });
  });

  test("parses category", () => {
    expect(parseFiltersFromParams("?category=development")).toEqual({
      ...DEFAULT_FILTER_STATE,
      selectedCategory: "development",
    });
  });

  test("parses type", () => {
    expect(parseFiltersFromParams("?type=arcade")).toEqual({
      ...DEFAULT_FILTER_STATE,
      selectedType: "arcade",
    });
  });

  test("parses search query", () => {
    expect(parseFiltersFromParams("?q=gmail")).toEqual({
      ...DEFAULT_FILTER_STATE,
      searchQuery: "gmail",
    });
  });

  test("parses all params at once", () => {
    expect(
      parseFiltersFromParams(
        "?category=productivity&type=verified&label=pro&label=byoc&q=slack"
      )
    ).toEqual({
      selectedCategory: "productivity",
      selectedType: "verified",
      filterByPro: true,
      filterByByoc: true,
      searchQuery: "slack",
    });
  });

  test("ignores invalid type values", () => {
    expect(parseFiltersFromParams("?type=bogus")).toEqual(DEFAULT_FILTER_STATE);
  });

  test("ignores invalid category values", () => {
    expect(parseFiltersFromParams("?category=bogus")).toEqual(
      DEFAULT_FILTER_STATE
    );
    expect(parseFiltersFromParams("?category=Productivity")).toEqual(
      DEFAULT_FILTER_STATE
    );
  });

  test("ignores category=all (already the default)", () => {
    expect(parseFiltersFromParams("?category=all")).toEqual(
      DEFAULT_FILTER_STATE
    );
  });

  test("ignores unknown label values", () => {
    expect(parseFiltersFromParams("?label=bogus")).toEqual(
      DEFAULT_FILTER_STATE
    );
    expect(parseFiltersFromParams("?label=PRO")).toEqual(DEFAULT_FILTER_STATE);
    expect(parseFiltersFromParams("?label=")).toEqual(DEFAULT_FILTER_STATE);
  });

  test("applies known labels and ignores unknown ones in the same URL", () => {
    expect(parseFiltersFromParams("?label=pro&label=bogus")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
    });
  });

  test("ignores duplicate label values", () => {
    expect(parseFiltersFromParams("?label=pro&label=pro")).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
    });
  });

  test("ignores unknown params gracefully", () => {
    expect(parseFiltersFromParams("?foo=bar&baz=1")).toEqual(
      DEFAULT_FILTER_STATE
    );
  });

  test("does not treat legacy ?pro=1 as truthy", () => {
    // The old URL shape (`?pro=1&byoc=1`) has been retired; only `?label=...`
    // is recognized. Legacy URLs degrade to defaults rather than throwing.
    expect(parseFiltersFromParams("?pro=1&byoc=1")).toEqual(
      DEFAULT_FILTER_STATE
    );
  });

  test("accepts URLSearchParams instance", () => {
    const params = new URLSearchParams();
    params.append("label", "pro");
    params.set("q", "gmail");
    expect(parseFiltersFromParams(params)).toEqual({
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
      searchQuery: "gmail",
    });
  });
});

describe("serializeFiltersToParams", () => {
  test("returns empty string for default state", () => {
    expect(serializeFiltersToParams(DEFAULT_FILTER_STATE)).toBe("");
  });

  test("serializes pro label", () => {
    expect(
      serializeFiltersToParams({ ...DEFAULT_FILTER_STATE, filterByPro: true })
    ).toBe("label=pro");
  });

  test("serializes byoc label", () => {
    expect(
      serializeFiltersToParams({ ...DEFAULT_FILTER_STATE, filterByByoc: true })
    ).toBe("label=byoc");
  });

  test("serializes both labels as repeated keys", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_FILTER_STATE,
        filterByPro: true,
        filterByByoc: true,
      })
    ).toBe("label=pro&label=byoc");
  });

  test("serializes category", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_FILTER_STATE,
        selectedCategory: "development",
      })
    ).toBe("category=development");
  });

  test("serializes type", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_FILTER_STATE,
        selectedType: "arcade",
      })
    ).toBe("type=arcade");
  });

  test("serializes search query", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_FILTER_STATE,
        searchQuery: "gmail",
      })
    ).toBe("q=gmail");
  });

  test("serializes all filters at once", () => {
    const qs = serializeFiltersToParams({
      selectedCategory: "productivity",
      selectedType: "verified",
      filterByPro: true,
      filterByByoc: true,
      searchQuery: "slack",
    });
    const params = new URLSearchParams(qs);
    expect(params.get("category")).toBe("productivity");
    expect(params.get("type")).toBe("verified");
    expect(params.getAll("label")).toEqual(["pro", "byoc"]);
    expect(params.get("q")).toBe("slack");
  });
});

describe("round-trip", () => {
  test("serialize then parse produces equivalent filters", () => {
    const state: FilterState = {
      selectedCategory: "social",
      selectedType: "community",
      filterByPro: true,
      filterByByoc: false,
      searchQuery: "twitter",
    };
    const qs = serializeFiltersToParams(state);
    expect(parseFiltersFromParams(`?${qs}`)).toEqual(state);
  });

  test("both labels round-trip", () => {
    const state: FilterState = {
      ...DEFAULT_FILTER_STATE,
      filterByPro: true,
      filterByByoc: true,
    };
    const qs = serializeFiltersToParams(state);
    expect(qs).toBe("label=pro&label=byoc");
    expect(parseFiltersFromParams(`?${qs}`)).toEqual(state);
  });

  test("default state round-trips to empty query string", () => {
    const qs = serializeFiltersToParams(DEFAULT_FILTER_STATE);
    expect(qs).toBe("");
    expect(parseFiltersFromParams(qs)).toEqual(DEFAULT_FILTER_STATE);
  });
});

describe("hasActiveFilters", () => {
  test("returns false for default state", () => {
    expect(hasActiveFilters(DEFAULT_FILTER_STATE)).toBe(false);
  });

  test("returns true when any filter is active", () => {
    expect(
      hasActiveFilters({ ...DEFAULT_FILTER_STATE, filterByPro: true })
    ).toBe(true);
    expect(
      hasActiveFilters({ ...DEFAULT_FILTER_STATE, selectedCategory: "social" })
    ).toBe(true);
    expect(
      hasActiveFilters({ ...DEFAULT_FILTER_STATE, searchQuery: "x" })
    ).toBe(true);
  });
});
