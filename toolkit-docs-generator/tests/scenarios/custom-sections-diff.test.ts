import { describe, expect, it } from "vitest";
import { getChangedToolkitIdsFromCustomSections } from "../../src/diff/index";
import type { MergedToolkit } from "../../src/types/index";

const previousToolkit = (documentation = "old"): MergedToolkit => ({
  id: "Github",
  label: "Github",
  version: "1.0.0",
  description: "GitHub",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [],
  documentationChunks: [
    {
      type: "warning",
      location: "description",
      position: "after",
      content: documentation,
    },
  ],
  customImports: [],
  subPages: [],
  generatedAt: "2026-01-01T00:00:00.000Z",
});

describe("getChangedToolkitIdsFromCustomSections", () => {
  it("treats curation-only edits as toolkit changes", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {
          github: {
            documentationChunks: [
              {
                type: "warning",
                location: "description",
                position: "after",
                content: "new",
              },
            ],
            customImports: [],
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
            documentationChunks: toolkit.documentationChunks,
            customImports: [],
            subPages: [],
            toolChunks: {},
          },
        },
        new Map([["Github", toolkit]])
      )
    ).toEqual([]);
  });

  it("treats cleared curation as a prose change", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {
          github: {
            documentationChunks: [],
            customImports: [],
            subPages: [],
            toolChunks: {},
          },
        },
        new Map([["Github", previousToolkit()]])
      )
    ).toEqual(["github"]);
  });

  it("ignores toolkits without a curation file", () => {
    expect(
      getChangedToolkitIdsFromCustomSections(
        {},
        new Map([["Github", previousToolkit()]])
      )
    ).toEqual([]);
  });
});
