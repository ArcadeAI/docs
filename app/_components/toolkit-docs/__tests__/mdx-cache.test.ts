import { describe, expect, it } from "vitest";

import { createMdxCache } from "../components/mdx-cache";

describe("createMdxCache", () => {
  it("evicts the oldest entry when the cache exceeds max size", () => {
    const cache = createMdxCache<number>(2);

    cache.set("a", 1);
    cache.set("b", 2);
    cache.set("c", 3);

    expect(cache.has("a")).toBe(false);
    expect(cache.has("b")).toBe(true);
    expect(cache.has("c")).toBe(true);
    expect(cache.size()).toBe(2);
  });

  it("updates recency on get so recently used entries stay", () => {
    const cache = createMdxCache<number>(2);

    cache.set("a", 1);
    cache.set("b", 2);

    expect(cache.get("a")).toBe(1);
    cache.set("c", 3);

    expect(cache.has("a")).toBe(true);
    expect(cache.has("b")).toBe(false);
    expect(cache.has("c")).toBe(true);
  });

  it("keeps size stable when overwriting an existing key", () => {
    const cache = createMdxCache<number>(2);

    cache.set("a", 1);
    cache.set("b", 2);
    cache.set("a", 3);

    expect(cache.get("a")).toBe(3);
    expect(cache.size()).toBe(2);
  });

  it("treats non-positive max size as a size of 1", () => {
    const cache = createMdxCache<number>(0);

    cache.set("a", 1);
    cache.set("b", 2);

    expect(cache.has("a")).toBe(false);
    expect(cache.has("b")).toBe(true);
    expect(cache.size()).toBe(1);
  });
});
