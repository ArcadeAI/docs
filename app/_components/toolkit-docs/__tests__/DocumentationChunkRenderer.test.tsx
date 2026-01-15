import { describe, expect, it } from "vitest";

import type { DocumentationChunk } from "../types";
import { hasChunksAt } from "../components/DocumentationChunkRenderer";

/**
 * Unit tests for DocumentationChunkRenderer utility functions
 *
 * Note: Component rendering tests require additional dependencies
 * (@testing-library/react). These tests focus on the pure utility functions.
 */

describe("hasChunksAt", () => {
  const createChunk = (
    overrides: Partial<DocumentationChunk> = {}
  ): DocumentationChunk => ({
    type: "callout",
    location: "description",
    position: "before",
    content: "Test content",
    ...overrides,
  });

  it("returns true when chunks exist at location and position", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ location: "header", position: "after" }),
    ];

    expect(hasChunksAt(chunks, "header", "after")).toBe(true);
  });

  it("returns false when no chunks at location", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ location: "header", position: "after" }),
    ];

    expect(hasChunksAt(chunks, "parameters", "after")).toBe(false);
  });

  it("returns false when no chunks at position", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ location: "header", position: "after" }),
    ];

    expect(hasChunksAt(chunks, "header", "before")).toBe(false);
  });

  it("returns false for empty array", () => {
    expect(hasChunksAt([], "header", "after")).toBe(false);
  });

  it("returns true when multiple chunks match", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ location: "description", position: "before" }),
      createChunk({ location: "description", position: "before" }),
      createChunk({ location: "description", position: "after" }),
    ];

    expect(hasChunksAt(chunks, "description", "before")).toBe(true);
  });

  it("works with all location types", () => {
    const locations: DocumentationChunk["location"][] = [
      "header",
      "description",
      "parameters",
      "auth",
      "secrets",
      "output",
      "footer",
    ];

    for (const location of locations) {
      const chunks: DocumentationChunk[] = [
        createChunk({ location, position: "after" }),
      ];
      expect(hasChunksAt(chunks, location, "after")).toBe(true);
    }
  });

  it("works with all position types", () => {
    const positions: DocumentationChunk["position"][] = [
      "before",
      "after",
      "replace",
    ];

    for (const position of positions) {
      const chunks: DocumentationChunk[] = [
        createChunk({ location: "header", position }),
      ];
      expect(hasChunksAt(chunks, "header", position)).toBe(true);
    }
  });
});

describe("DocumentationChunk type validation", () => {
  it("validates chunk type property", () => {
    const validTypes: DocumentationChunk["type"][] = [
      "callout",
      "markdown",
      "code",
      "warning",
      "info",
      "tip",
    ];

    for (const type of validTypes) {
      const chunk: DocumentationChunk = {
        type,
        location: "header",
        position: "after",
        content: "test",
      };
      expect(chunk.type).toBe(type);
    }
  });

  it("validates optional title property", () => {
    const chunkWithTitle: DocumentationChunk = {
      type: "callout",
      location: "header",
      position: "after",
      content: "test",
      title: "My Title",
    };

    const chunkWithoutTitle: DocumentationChunk = {
      type: "callout",
      location: "header",
      position: "after",
      content: "test",
    };

    expect(chunkWithTitle.title).toBe("My Title");
    expect(chunkWithoutTitle.title).toBeUndefined();
  });

  it("validates optional variant property", () => {
    const validVariants: DocumentationChunk["variant"][] = [
      "default",
      "destructive",
      "warning",
      "info",
      "success",
      undefined,
    ];

    for (const variant of validVariants) {
      const chunk: DocumentationChunk = {
        type: "callout",
        location: "header",
        position: "after",
        content: "test",
        variant,
      };
      expect(chunk.variant).toBe(variant);
    }
  });
});
