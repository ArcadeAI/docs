import { describe, expect, it } from "vitest";
import { getChangedToolkitIdsFromCustomSections } from "../../src/diff/index";
import { getCustomSectionsSourceHash } from "../../src/merger/data-merger";
import type { MergedToolkit } from "../../src/types/index";

const previousToolkit = (documentation = "old"): MergedToolkit => ({
  auth: null,
  customImports: [],
  description: "GitHub",
  documentationChunks: [
    {
      content: documentation,
      location: "description",
      position: "after",
      type: "warning",
    },
  ],
  generatedAt: "2026-01-01T00:00:00.000Z",
  id: "Github",
  label: "Github",
  metadata: {
    category: "development",
    docsLink: "https://docs.example.com",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [],
  version: "1.0.0",
});

describe("getChangedToolkitIdsFromCustomSections", () => {
  it("treats curation-only edits as toolkit changes", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {
          github: {
            customImports: [],
            documentationChunks: [
              {
                content: "new",
                location: "description",
                position: "after",
                type: "warning",
              },
            ],
            subPages: [],
            toolChunks: {},
          },
        },
        new Map([["Github", previousToolkit()]])
      )
    ).toEqual(["github"]);
  });

  it("does not report identical curation", () => {
    const toolkit = previousToolkit();
    expect(
      getChangedToolkitIdsFromCustomSections(
        {
          Github: {
            customImports: [],
            documentationChunks: toolkit.documentationChunks,
            subPages: [],
            toolChunks: {},
          },
        },
        new Map([["Github", toolkit]])
      )
    ).toEqual([]);
  });

  it("uses the curation fingerprint after generated prose is edited", () => {
    const curation = {
      customImports: [],
      documentationChunks: [
        {
          content: "hand-authored source",
          location: "description" as const,
          position: "after" as const,
          type: "warning" as const,
        },
      ],
      subPages: [],
      toolChunks: {},
    };
    const toolkit = previousToolkit("secret-coherence edited output");
    toolkit.curationSourceHash = getCustomSectionsSourceHash(curation);

    expect(
      getChangedToolkitIdsFromCustomSections(
        { github: curation },
        new Map([["Github", toolkit]])
      )
    ).toEqual([]);
  });

  it("treats cleared curation as a prose change", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {
          github: {
            customImports: [],
            documentationChunks: [],
            subPages: [],
            toolChunks: {},
          },
        },
        new Map([["Github", previousToolkit()]])
      )
    ).toEqual(["github"]);
  });

  it("treats a missing toolkit directory as cleared curation", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {},
        new Map([["Github", previousToolkit()]])
      )
    ).toEqual(["github"]);
  });

  it("ignores absent curation when the previous artifact is also empty", () => {
    const toolkit = previousToolkit();
    toolkit.documentationChunks = [];

    expect(
      getChangedToolkitIdsFromCustomSections({}, new Map([["Github", toolkit]]))
    ).toEqual([]);
  });
});
