import { describe, expect, it } from "vitest";
import { shouldRenderDefaultSection } from "../components/tool-section";
import type { DocumentationChunk } from "../types";

describe("ToolSection helpers", () => {
  it("returns true when no replace chunks exist", () => {
    const chunks: DocumentationChunk[] = [
      {
        type: "callout",
        location: "description",
        position: "before",
        content: "Info",
      },
    ];

    expect(shouldRenderDefaultSection(chunks, "description")).toBe(true);
  });

  it("returns false when replace chunk exists for location", () => {
    const chunks: DocumentationChunk[] = [
      {
        type: "markdown",
        location: "parameters",
        position: "replace",
        content: "Custom parameters",
      },
    ];

    expect(shouldRenderDefaultSection(chunks, "parameters")).toBe(false);
  });
});
