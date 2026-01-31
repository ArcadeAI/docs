import { describe, expect, it } from "vitest";
import {
  hasChunksAt,
  sortChunksDeterministically,
} from "../components/documentation-chunk-renderer";
import type { DocumentationChunk } from "../types";

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

  it("returns false when chunks are missing", () => {
    expect(hasChunksAt(undefined, "header", "after")).toBe(false);
    expect(hasChunksAt(null, "header", "after")).toBe(false);
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

describe("sortChunksDeterministically", () => {
  const createChunk = (
    overrides: Partial<DocumentationChunk> = {}
  ): DocumentationChunk => ({
    type: "markdown",
    location: "custom_section",
    position: "after",
    content: "Default content",
    ...overrides,
  });

  it("sorts chunks by priority (lower first)", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ priority: 30, header: "## Third" }),
      createChunk({ priority: 10, header: "## First" }),
      createChunk({ priority: 20, header: "## Second" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].header).toBe("## First");
    expect(sorted[1].header).toBe("## Second");
    expect(sorted[2].header).toBe("## Third");
  });

  it("sorts chunks with same priority alphabetically by header", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ header: "## Zebra" }),
      createChunk({ header: "## Alpha" }),
      createChunk({ header: "## Middle" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].header).toBe("## Alpha");
    expect(sorted[1].header).toBe("## Middle");
    expect(sorted[2].header).toBe("## Zebra");
  });

  it("places chunks with headers before chunks without headers", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ content: "No header content" }),
      createChunk({ header: "## Has Header", content: "Header content" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].header).toBe("## Has Header");
    expect(sorted[1].header).toBeUndefined();
  });

  it("sorts chunks with same priority and no headers by content", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ content: "Zebra content" }),
      createChunk({ content: "Alpha content" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].content).toBe("Alpha content");
    expect(sorted[1].content).toBe("Zebra content");
  });

  it("handles empty array", () => {
    const sorted = sortChunksDeterministically([]);
    expect(sorted).toEqual([]);
  });

  it("handles single chunk", () => {
    const chunk = createChunk({ header: "## Only One" });
    const sorted = sortChunksDeterministically([chunk]);

    expect(sorted).toHaveLength(1);
    expect(sorted[0].header).toBe("## Only One");
  });

  it("does not mutate the original array", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ priority: 20, header: "## Second" }),
      createChunk({ priority: 10, header: "## First" }),
    ];
    const originalOrder = [...chunks];

    sortChunksDeterministically(chunks);

    expect(chunks[0].header).toBe(originalOrder[0].header);
    expect(chunks[1].header).toBe(originalOrder[1].header);
  });

  it("uses default priority of 100 for chunks without priority", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ header: "## Default Priority" }), // No priority = 100
      createChunk({ priority: 50, header: "## Low Priority" }),
      createChunk({ priority: 150, header: "## High Priority" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].header).toBe("## Low Priority");
    expect(sorted[1].header).toBe("## Default Priority");
    expect(sorted[2].header).toBe("## High Priority");
  });

  it("strips ## prefix when comparing headers", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ header: "## Beta Section" }),
      createChunk({ header: "### Alpha Section" }),
      createChunk({ header: "# Gamma Section" }),
    ];

    const sorted = sortChunksDeterministically(chunks);

    expect(sorted[0].header).toBe("### Alpha Section");
    expect(sorted[1].header).toBe("## Beta Section");
    expect(sorted[2].header).toBe("# Gamma Section");
  });

  it("produces stable order across multiple calls", () => {
    const chunks: DocumentationChunk[] = [
      createChunk({ header: "## Auth" }),
      createChunk({ header: "## Reference" }),
      createChunk({ header: "## Setup" }),
    ];

    const sorted1 = sortChunksDeterministically(chunks);
    const sorted2 = sortChunksDeterministically(chunks);
    const sorted3 = sortChunksDeterministically(chunks);

    expect(sorted1.map((c) => c.header)).toEqual(sorted2.map((c) => c.header));
    expect(sorted2.map((c) => c.header)).toEqual(sorted3.map((c) => c.header));
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

  it("validates optional priority property", () => {
    const chunkWithPriority: DocumentationChunk = {
      type: "markdown",
      location: "custom_section",
      position: "after",
      content: "test",
      priority: 10,
    };

    const chunkWithoutPriority: DocumentationChunk = {
      type: "markdown",
      location: "custom_section",
      position: "after",
      content: "test",
    };

    expect(chunkWithPriority.priority).toBe(10);
    expect(chunkWithoutPriority.priority).toBeUndefined();
  });
});
