import type * as PageTree from "fumadocs-core/page-tree";

type Neighbour = Pick<PageTree.Item, "description" | "name" | "url">;

export type PageNeighbours = {
  next?: Neighbour;
  previous?: Neighbour;
};

const TRAILING_SLASH = /\/$/;

function samePath(a: string, b: string): boolean {
  return a.replace(TRAILING_SLASH, "") === b.replace(TRAILING_SLASH, "");
}

/** Sidebar pages in display order; a folder's own page comes first. */
function flatten(nodes: PageTree.Node[], items: PageTree.Item[] = []) {
  for (const node of nodes) {
    if (node.type === "page") {
      items.push(node);
    } else if (node.type === "folder") {
      if (node.index) {
        items.push(node.index);
      }
      flatten(node.children, items);
    }
  }
  return items;
}

function toNeighbour(item: PageTree.Item | undefined): Neighbour | undefined {
  return item
    ? { description: item.description, name: item.name, url: item.url }
    : undefined;
}

/**
 * Previous and next pages for the page at `url`, in sidebar order. Only pages
 * backed by a docs file take part: link-only entries (toolkit pages, cross
 * links to another section, external links) are skipped. When one of them is
 * the current page, its neighbours are the real pages around it.
 */
export function findNeighbours(
  tree: PageTree.Root,
  url: string
): PageNeighbours {
  const items = flatten(tree.children);
  const index = items.findIndex((item) => samePath(item.url, url));
  if (index === -1) {
    return {};
  }
  const isPage = (item: PageTree.Item) => item.$ref !== undefined;
  return {
    next: toNeighbour(items.slice(index + 1).find(isPage)),
    previous: toNeighbour(items.slice(0, index).findLast(isPage)),
  };
}
