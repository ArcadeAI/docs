import type * as PageTree from "fumadocs-core/page-tree";
import Link from "next/link";
import { source } from "@/lib/source";

type SubpageListProps = {
  /** URL of the parent folder, e.g. `/en/operate/identity` or `/operate/identity`. */
  basePath: string;
};

const TRAILING_SLASHES_REGEX = /\/+$/;

function normalizeUrl(url: string): string {
  const withLocale =
    url.startsWith("/en/") || url === "/en" ? url : `/en${url}`;
  return withLocale.replace(TRAILING_SLASHES_REGEX, "");
}

/**
 * URLs that identify a folder: its `index` page, or a direct child page at the
 * folder path. Fumadocs only sets `folder.index` when `index` is not listed
 * explicitly in meta.json; our generated meta files list it, so check both.
 */
function folderUrls(folder: PageTree.Folder): Set<string> {
  const urls = new Set<string>();
  if (folder.index?.url) {
    urls.add(normalizeUrl(folder.index.url));
  }
  for (const child of folder.children) {
    if (child.type === "page") {
      urls.add(normalizeUrl(child.url));
    }
  }
  return urls;
}

function findFolder(
  nodes: PageTree.Node[],
  target: string
): PageTree.Folder | null {
  for (const node of nodes) {
    if (node.type !== "folder") {
      continue;
    }
    if (folderUrls(node).has(target)) {
      return node;
    }
    const nested = findFolder(node.children, target);
    if (nested) {
      return nested;
    }
  }
  return null;
}

/** Child entries of a folder, in sidebar order: pages and sub-folders (their index page). */
function childLinks(
  folder: PageTree.Folder,
  target: string
): { url: string; name: string }[] {
  const links: { url: string; name: string }[] = [];
  for (const child of folder.children) {
    if (child.type === "page") {
      if (normalizeUrl(child.url) === target) {
        continue;
      }
      links.push({ name: nodeName(child.name), url: child.url });
    } else if (child.type === "folder") {
      const url = child.index?.url ?? firstPageUrl(child);
      if (url) {
        links.push({ name: nodeName(child.name), url });
      }
    }
  }
  return links;
}

function firstPageUrl(folder: PageTree.Folder): string | null {
  for (const child of folder.children) {
    if (child.type === "page") {
      return child.url;
    }
    if (child.type === "folder") {
      const url = child.index?.url ?? firstPageUrl(child);
      if (url) {
        return url;
      }
    }
  }
  return null;
}

function nodeName(name: PageTree.Node["name"]): string {
  return typeof name === "string" ? name : String(name ?? "");
}

/**
 * Lists the child pages of a docs folder as a bullet list. Replaces the Nextra
 * version that received the folder's `_meta` object: children are now read from
 * the Fumadocs page tree, so only `basePath` is needed.
 */
export function SubpageList({ basePath }: SubpageListProps) {
  const target = normalizeUrl(basePath);
  const tree = source.getPageTree();
  const folder = findFolder(tree.children, target);
  const links = folder ? childLinks(folder, target) : [];

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="ms-[1.5em] not-first:mt-[1.25em] list-disc [:is(ol,ul)_&]:my-[.75em]">
      {links.map((link) => (
        <li className="my-[.5em]" key={link.url}>
          <Link
            className="text-(--x-color-primary-600) underline decoration-from-font [text-underline-position:from-font] hover:no-underline focus-visible:nextra-focus"
            href={link.url}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
