import { describe, expect, test } from "vitest";
import {
  parseFiltersFromParams,
  type SerializableFilterState,
  serializeFiltersToParams,
} from "../app/en/resources/integrations/components/use-url-filter-sync";

const DEFAULT_STATE: SerializableFilterState = {
  selectedCategory: "all",
  selectedType: "all",
  filterByPro: false,
  filterByByoc: false,
  searchQuery: "",
};

describe("parseFiltersFromParams", () => {
  test("returns empty object for no params", () => {
    expect(parseFiltersFromParams("")).toEqual({});
  });

  test("parses pro filter", () => {
    expect(parseFiltersFromParams("?pro=1")).toEqual({ filterByPro: true });
  });

  test("parses byoc filter", () => {
    expect(parseFiltersFromParams("?byoc=1")).toEqual({ filterByByoc: true });
  });

  test("parses pro + byoc together", () => {
    expect(parseFiltersFromParams("?pro=1&byoc=1")).toEqual({
      filterByPro: true,
      filterByByoc: true,
    });
  });

  test("parses category", () => {
    expect(parseFiltersFromParams("?category=development")).toEqual({
      selectedCategory: "development",
    });
  });

  test("parses type", () => {
    expect(parseFiltersFromParams("?type=arcade")).toEqual({
      selectedType: "arcade",
    });
  });

  test("parses search query", () => {
    expect(parseFiltersFromParams("?q=gmail")).toEqual({
      searchQuery: "gmail",
    });
  });

  test("parses all params at once", () => {
    expect(
      parseFiltersFromParams(
        "?category=productivity&type=verified&pro=1&byoc=1&q=slack"
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
    expect(parseFiltersFromParams("?type=bogus")).toEqual({});
  });

  test("ignores falsy pro values", () => {
    expect(parseFiltersFromParams("?pro=0")).toEqual({});
    expect(parseFiltersFromParams("?pro=false")).toEqual({});
    expect(parseFiltersFromParams("?pro=")).toEqual({});
  });

  test("ignores category=all", () => {
    expect(parseFiltersFromParams("?category=all")).toEqual({});
  });

  test("ignores unknown params gracefully", () => {
    expect(parseFiltersFromParams("?foo=bar&baz=1")).toEqual({});
  });
});

describe("serializeFiltersToParams", () => {
  test("returns empty string for default state", () => {
    expect(serializeFiltersToParams(DEFAULT_STATE)).toBe("");
  });

  test("serializes pro filter", () => {
    expect(
      serializeFiltersToParams({ ...DEFAULT_STATE, filterByPro: true })
    ).toBe("pro=1");
  });

  test("serializes byoc filter", () => {
    expect(
      serializeFiltersToParams({ ...DEFAULT_STATE, filterByByoc: true })
    ).toBe("byoc=1");
  });

  test("serializes category", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_STATE,
        selectedCategory: "development",
      })
    ).toBe("category=development");
  });

  test("serializes type", () => {
    expect(
      serializeFiltersToParams({
        ...DEFAULT_STATE,
        selectedType: "arcade",
      })
    ).toBe("type=arcade");
  });

  test("serializes search query", () => {
    expect(
      serializeFiltersToParams({ ...DEFAULT_STATE, searchQuery: "gmail" })
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
    expect(params.get("pro")).toBe("1");
    expect(params.get("byoc")).toBe("1");
    expect(params.get("q")).toBe("slack");
  });
});

describe("round-trip", () => {
  test("serialize then parse produces equivalent filters", () => {
    const state: SerializableFilterState = {
      selectedCategory: "social",
      selectedType: "community",
      filterByPro: true,
      filterByByoc: false,
      searchQuery: "twitter",
    };
    const qs = serializeFiltersToParams(state);
    const parsed = parseFiltersFromParams(`?${qs}`);
    expect(parsed).toEqual({
      selectedCategory: "social",
      selectedType: "community",
      filterByPro: true,
      searchQuery: "twitter",
    });
  });

  test("default state round-trips to empty", () => {
    const qs = serializeFiltersToParams(DEFAULT_STATE);
    expect(qs).toBe("");
    const parsed = parseFiltersFromParams(qs);
    expect(parsed).toEqual({});
  });
});
