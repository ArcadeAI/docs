import { describe, expect, test } from "vitest";
import { sortDocumentationChunks } from "../app/_components/toolkit-docs/lib/documentation-chunks";
import type { DocumentationChunk } from "../app/_components/toolkit-docs/types";

describe("sortDocumentationChunks", () => {
  test("supports lightweight chunks with optional content", () => {
    const chunks = [
      { header: undefined },
      { header: undefined },
      { header: "## B" },
      { header: "## A" },
    ] as unknown as DocumentationChunk[];

    expect(() => sortDocumentationChunks(chunks)).not.toThrow();
    expect(
      sortDocumentationChunks(chunks).map((chunk) => chunk.header ?? null)
    ).toEqual(["## A", "## B", null, null]);
  });
});
