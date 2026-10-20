import type * as PageTree from "fumadocs-core/page-tree";
import { describe, expect, it } from "vitest";
import { findNeighbours } from "@/lib/page-neighbours";

const page = (url: string, file = true): PageTree.Item => ({
  $ref: file ? `${url}.mdx` : undefined,
  name: url,
  type: "page",
  url,
});

// A section with its own page, a cross link to another section, a real page,
// two link-only toolkit pages and an external link, then a second section.
const tree: PageTree.Root = {
  children: [
    {
      children: [
        page("/get-started/quickstart", false),
        page("/en/build/tools"),
        page("/en/build/gmail", false),
        page("/en/build/nimble", false),
        page("https://releases.arcade.dev", false),
      ],
      index: page("/en/build"),
      name: "Build",
      type: "folder",
    },
    page("/en/operate"),
  ],
  name: "Docs",
};

const urls = ({ next, previous }: ReturnType<typeof findNeighbours>) => [
  previous?.url,
  next?.url,
];

describe("findNeighbours", () => {
  it("skips cross links and starts a folder with its own page", () => {
    expect(urls(findNeighbours(tree, "/en/build"))).toEqual([
      undefined,
      "/en/build/tools",
    ]);
  });

  it("skips toolkit and external links between real pages", () => {
    expect(urls(findNeighbours(tree, "/en/build/tools"))).toEqual([
      "/en/build",
      "/en/operate",
    ]);
  });

  it("gives a link-only page the real pages around it", () => {
    expect(urls(findNeighbours(tree, "/en/build/nimble/"))).toEqual([
      "/en/build/tools",
      "/en/operate",
    ]);
  });

  it("returns nothing for a page outside the sidebar", () => {
    expect(findNeighbours(tree, "/en/missing")).toEqual({});
  });
});
