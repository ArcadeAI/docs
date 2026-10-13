import type * as PageTree from "fumadocs-core/page-tree";
import type { ReactNode } from "react";

/**
 * Plain, serialisable description of the docs sidebar. Built on the server
 * from the Fumadocs page tree (lib/source.ts) and rendered by
 * components/chrome/sidebar.tsx.
 */
export type SidebarNode = SidebarFolder | SidebarPage | SidebarSeparator;

export interface SidebarPage {
  href: string;
  icon?: ReactNode;
  id: string;
  kind: "page";
  /**
   * True for entries that only link somewhere (toolkit pages, cross links)
   * instead of standing for a docs file. They are skipped by previous/next.
   */
  linkOnly?: boolean;
  title: ReactNode;
}

export interface SidebarFolder {
  children: SidebarNode[];
  icon?: ReactNode;
  id: string;
  kind: "folder";
  /** URL prefix the folder stands for, e.g. `/en/operate/governance`. */
  route: string;
  title: ReactNode;
}

export interface SidebarSeparator {
  id: string;
  kind: "separator";
  title?: ReactNode;
}

const TRAILING_INDEX = /\/index$/;

function folderRoute(
  node: PageTree.Folder,
  baseUrl: string,
  parentRoute: string,
  position: number
): string {
  if (node.index) {
    return node.index.url;
  }
  const folderPath = node.$ref?.folder;
  if (folderPath) {
    return `${baseUrl}/${folderPath}`.replace(TRAILING_INDEX, "");
  }
  return `${parentRoute}/__folder-${position}`;
}

function toPage(item: PageTree.Item, fallbackId: string): SidebarPage {
  return {
    href: item.url,
    icon: item.icon,
    id: item.$id ?? fallbackId,
    kind: "page",
    linkOnly: item.$ref === undefined ? true : undefined,
    title: item.name,
  };
}

function toNodes(
  nodes: PageTree.Node[],
  baseUrl: string,
  parentRoute: string
): SidebarNode[] {
  return nodes.map((node, position): SidebarNode => {
    const fallbackId = `${parentRoute}#${position}`;
    if (node.type === "separator") {
      return {
        id: node.$id ?? fallbackId,
        kind: "separator",
        title: node.name,
      };
    }
    if (node.type === "page") {
      return toPage(node, fallbackId);
    }
    const route = folderRoute(node, baseUrl, parentRoute, position);
    const children = toNodes(node.children, baseUrl, route);
    return {
      // A folder's own page is listed as its first entry.
      children: node.index
        ? [toPage(node.index, `${route}#index`), ...children]
        : children,
      icon: node.icon,
      id: node.$id ?? fallbackId,
      kind: "folder",
      route,
      title: node.name,
    };
  });
}

export function buildSidebarModel(
  tree: PageTree.Root,
  baseUrl: string
): SidebarNode[] {
  return toNodes(tree.children, baseUrl, baseUrl);
}
