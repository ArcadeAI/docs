import { describe, expect, test } from "vitest";
import {
  ALGOLIA_SEARCH_CONFIG,
  searchResultsAreCurrent,
} from "../app/_components/algolia-search";

describe("Algolia search configuration", () => {
  test("uses the highlight markers expected by React InstantSearch", () => {
    expect(ALGOLIA_SEARCH_CONFIG.highlightPreTag).toBe("__ais-highlight__");
    expect(ALGOLIA_SEARCH_CONFIG.highlightPostTag).toBe("__/ais-highlight__");
  });

  test("does not render stale results while a new query is pending", () => {
    expect(searchResultsAreCurrent("slack", "github", "idle")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "loading")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "stalled")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "idle")).toBe(true);
  });
});
