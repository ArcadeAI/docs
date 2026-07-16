import { afterEach, describe, expect, test, vi } from "vitest";
import {
  ALGOLIA_SEARCH_CONFIG,
  ALGOLIA_SEARCH_DEBOUNCE_MS,
  getSearchErrorMessage,
  scheduleSearch,
  searchErrorIsCurrent,
  searchResultsAreCurrent,
} from "../app/_components/algolia-search";

describe("Algolia search configuration", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("uses the highlight markers expected by React InstantSearch", () => {
    expect(ALGOLIA_SEARCH_CONFIG.highlightPreTag).toBe("__ais-highlight__");
    expect(ALGOLIA_SEARCH_CONFIG.highlightPostTag).toBe("__/ais-highlight__");
  });

  test("debounces search requests while typing", () => {
    vi.useFakeTimers();
    const search = vi.fn();
    const setDispatchedQuery = vi.fn();
    const setTypedQuery = vi.fn();
    let timer = scheduleSearch({
      query: "g",
      search,
      setDispatchedQuery,
      setTypedQuery,
      currentTimer: null,
    });
    timer = scheduleSearch({
      query: "github",
      search,
      setDispatchedQuery,
      setTypedQuery,
      currentTimer: timer,
    });

    expect(setTypedQuery).toHaveBeenLastCalledWith("github");
    expect(search).not.toHaveBeenCalled();
    vi.advanceTimersByTime(ALGOLIA_SEARCH_DEBOUNCE_MS);
    expect(search).toHaveBeenCalledOnce();
    expect(search).toHaveBeenCalledWith("github");
    expect(setDispatchedQuery).toHaveBeenCalledWith("github");

    scheduleSearch({
      query: "",
      search,
      setDispatchedQuery,
      setTypedQuery,
      currentTimer: timer,
    });
    expect(search).toHaveBeenLastCalledWith("");
  });

  test("does not render stale results while a new query is pending", () => {
    expect(searchResultsAreCurrent("slack", "github", "idle")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "loading")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "stalled")).toBe(false);
    expect(searchResultsAreCurrent("slack", "slack", "idle")).toBe(true);
  });

  test("surfaces failed searches instead of leaving a loading state", () => {
    expect(getSearchErrorMessage("error")).toBe(
      "Search failed. Check your connection and try again."
    );
    expect(getSearchErrorMessage("loading")).toBeNull();
  });

  test("does not show an old error for a newly typed query", () => {
    expect(searchErrorIsCurrent("slack", "github", "error")).toBe(false);
    expect(searchErrorIsCurrent("slack", "slack", "error")).toBe(true);
  });
});
