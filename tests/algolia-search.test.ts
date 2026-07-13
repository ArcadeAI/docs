import { describe, expect, test } from "vitest";
import {
  ALGOLIA_SEARCH_CONFIG,
  ALGOLIA_SEARCH_DEBOUNCE_MS,
  searchResultsAreCurrent,
} from "../app/_components/algolia-search";

describe("Algolia search configuration", () => {
  test("uses the highlight markers expected by React InstantSearch", () => {
    expect(ALGOLIA_SEARCH_CONFIG.highlightPreTag).toBe("__ais-highlight__");
    expect(ALGOLIA_SEARCH_CONFIG.highlightPostTag).toBe("__/ais-highlight__");
  });

  test("debounces search requests while typing", () => {
    expect(ALGOLIA_SEARCH_DEBOUNCE_MS).toBe(150);
  });

  test("does not render stale results while a new query is pending", () => {
    expect(searchResultsAreCurrent("slack", "github", "idle")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "loading")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "stalled")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "idle")).toBe(true);
  });
});
