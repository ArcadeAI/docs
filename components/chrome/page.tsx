"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Fragment,
  type MouseEvent,
  type ReactNode,
  use,
  useEffect,
  useRef,
} from "react";
import { ArrowRightIcon, LinkArrowIcon } from "@/components/chrome/icons";
import type {
  SidebarFolder,
  SidebarNode,
  SidebarPage,
} from "@/components/chrome/sidebar-model";
import {
  DirectoriesContext,
  setActiveAnchor,
  type TocEntry,
  useActiveAnchor,
} from "@/components/chrome/stores";
import { PageActions } from "@/components/page-actions";

/* ------------------------------------------------------------------ helpers */

function isActive(route: string, href: string): boolean {
  return [route, `${route}/`].includes(`${href}/`);
}

function nodeRoute(node: SidebarNode | undefined): string {
  if (!node) {
    return "";
  }
  if (node.kind === "page") {
    return node.href;
  }
  return node.kind === "folder" ? node.route : "";
}

interface ActiveInfo {
  /** Entries that can be paged through, in sidebar order. */
  flat: SidebarPage[];
  /** Position of the current page in `flat`. */
  index: number;
  /** Sidebar entries from the top-level section down to the current page. */
  path: (SidebarFolder | SidebarPage)[];
}

/**
 * Walks the sidebar in display order. Link-only entries (toolkit pages, cross
 * links) are not part of the previous/next sequence; when one of them is the
 * current page it takes the position of the next real page.
 */
function findActive(directories: SidebarNode[], route: string): ActiveInfo {
  const flat: SidebarPage[] = [];
  let index = -1;
  let path: (SidebarFolder | SidebarPage)[] = [];

  const walk = (nodes: SidebarNode[], parents: SidebarFolder[]) => {
    for (const node of nodes) {
      if (node.kind === "folder") {
        walk(node.children, [...parents, node]);
      } else if (node.kind === "page") {
        if (index === -1 && isActive(route, node.href)) {
          index = flat.length;
          path = [...parents, node];
        }
        if (!node.linkOnly) {
          flat.push(node);
        }
      }
    }
  };
  walk(directories, []);
  return { flat, index, path };
}

function Title({ node }: { node: SidebarFolder | SidebarPage }) {
  if (!node.icon) {
    return node.title;
  }
  return (
    <span className="flex items-center gap-2 font-medium text-gray-950 dark:text-white [&>svg]:size-4">
      {node.icon}
      {node.title}
    </span>
  );
}

function titleAttribute(node: SidebarFolder | SidebarPage): string | undefined {
  return typeof node.title === "string" ? node.title : undefined;
}

/* --------------------------------------------------------------- breadcrumb */

function Breadcrumb({ path }: { path: (SidebarFolder | SidebarPage)[] }) {
  return (
    <div className="nextra-breadcrumb mt-1.5 flex items-center gap-1 overflow-hidden text-gray-600 text-sm contrast-more:text-current dark:text-gray-400">
      {path.map((item, index) => {
        const nextItem = path[index + 1];
        let href = "";
        if (nextItem && item.kind === "folder") {
          const first = nodeRoute(item.children[0]);
          href = first === nodeRoute(nextItem) ? "" : first;
        }
        const className = cn(
          "whitespace-nowrap transition-colors",
          nextItem
            ? "min-w-6 overflow-hidden text-ellipsis"
            : "font-medium text-black dark:text-gray-100",
          href &&
            "ring-inset hover:text-gray-900 focus-visible:nextra-focus dark:hover:text-gray-100"
        );
        return (
          <Fragment key={item.id}>
            {index > 0 ? (
              <ArrowRightIcon className="shrink-0 rtl:rotate-180" height="14" />
            ) : null}
            {href ? (
              <Link
                className={className}
                href={href}
                prefetch={false}
                title={titleAttribute(item)}
              >
                <Title node={item} />
              </Link>
            ) : (
              <span className={className} title={titleAttribute(item)}>
                <Title node={item} />
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

/* --------------------------------------------------------------- pagination */

const paginationLink = cn(
  "text-gray-600 focus-visible:nextra-focus dark:text-gray-400",
  "hover:text-gray-800 dark:hover:text-gray-200",
  "contrast-more:text-gray-700 contrast-more:dark:text-gray-100",
  "flex max-w-[50%] items-center gap-1 py-4 font-medium text-base transition-colors [word-break:break-word] md:text-lg"
);

function Pagination({ flat, index }: { flat: SidebarPage[]; index: number }) {
  const prev = index > 0 ? flat[index - 1] : undefined;
  const next = index >= 0 ? flat[index + 1] : undefined;
  if (!(prev || next)) {
    return null;
  }
  return (
    <div className="nextra-border mb-8 flex items-center border-t pt-8 print:hidden">
      {prev ? (
        <Link
          className={cn(paginationLink, "pe-4")}
          href={prev.href}
          prefetch={false}
          title={titleAttribute(prev)}
        >
          <ArrowRightIcon
            className="inline shrink-0 ltr:rotate-180"
            height="20"
          />
          <Title node={prev} />
        </Link>
      ) : null}
      {next ? (
        <Link
          className={cn(paginationLink, "ms-auto ps-4 text-end")}
          href={next.href}
          prefetch={false}
          title={titleAttribute(next)}
        >
          <Title node={next} />
          <ArrowRightIcon
            className="inline shrink-0 rtl:rotate-180"
            height="20"
          />
        </Link>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------- table of contents */

const DEPTH_CLASS: Record<number, string> = {
  2: "font-semibold",
  3: "ms-3",
  4: "ms-6",
  5: "ms-9",
  6: "ms-12",
};

const tocLink = cn(
  "font-medium text-xs transition",
  "text-gray-600 dark:text-gray-400",
  "hover:text-gray-800 dark:hover:text-gray-200",
  "contrast-more:text-gray-700 contrast-more:dark:text-gray-100"
);

const SCROLL_TO_OPTIONS = { behavior: "smooth", top: 0 } as const;

function scrollToTop(event: MouseEvent<HTMLButtonElement>) {
  const buttonElement = event.currentTarget;
  const tocElement = buttonElement.parentElement?.parentElement;
  window.scrollTo(SCROLL_TO_OPTIONS);
  tocElement?.scrollTo(SCROLL_TO_OPTIONS);
  buttonElement.disabled = true;
}

/** Keeps the active entry visible inside a scrollable table of contents. */
function scrollEntryIntoView(list: HTMLElement, anchor: HTMLElement) {
  const listRect = list.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  if (anchorRect.top >= listRect.top && anchorRect.bottom <= listRect.bottom) {
    return;
  }
  list.scrollTo({
    behavior: "smooth",
    top:
      list.scrollTop +
      anchorRect.top -
      listRect.top -
      (list.clientHeight - anchorRect.height) / 2,
  });
}

function TOC({ editUrl, toc }: { editUrl?: string; toc: TocEntry[] }) {
  const activeSlug = useActiveAnchor();
  const tocRef = useRef<HTMLUListElement>(null);
  const hasHeadings = toc.length > 0;
  const activeIndex = toc.findIndex(({ id }) => id === activeSlug);

  useEffect(() => {
    if (!activeSlug) {
      return;
    }
    const list = tocRef.current;
    const anchor = list?.querySelector<HTMLElement>(
      `a[href="#${CSS.escape(activeSlug)}"]`
    );
    if (list && anchor) {
      scrollEntryIntoView(list, anchor);
    }
  }, [activeSlug]);

  return (
    <div
      className={cn(
        "grid grid-rows-[min-content_1fr_min-content]",
        "sticky top-(--nextra-navbar-height) text-sm",
        "max-h-[calc(100vh-var(--nextra-navbar-height))]"
      )}
    >
      {hasHeadings ? (
        <>
          <p className="px-4 pt-6 font-semibold tracking-tight">On this page</p>
          <ul
            className={cn(
              "nextra-scrollbar overflow-y-auto overscroll-y-contain hyphens-auto p-4",
              "nextra-mask"
            )}
            ref={tocRef}
          >
            {toc.map(({ id, title, depth }) => (
              <li className="my-2 scroll-my-6 scroll-py-6" key={id}>
                <a
                  className={cn(
                    "focus-visible:nextra-focus",
                    DEPTH_CLASS[depth],
                    "block subpixel-antialiased transition-colors",
                    id === activeSlug
                      ? "text-primary-600 contrast-more:text-primary-600!"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300",
                    "break-words contrast-more:text-gray-900 contrast-more:underline contrast-more:dark:text-gray-50"
                  )}
                  href={`#${id}`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <div
        className={cn(
          "mx-4 grid gap-2 py-4",
          hasHeadings && "nextra-border border-t"
        )}
      >
        {editUrl ? (
          <a
            className={cn("focus-visible:nextra-focus", tocLink)}
            href={editUrl}
            rel="noreferrer"
            target="_blank"
          >
            Edit this page on GitHub&nbsp;
            <LinkArrowIcon
              className="inline shrink-0 align-baseline"
              height="1em"
            />
          </a>
        ) : null}
        <button
          aria-hidden={activeIndex < 2 ? "true" : undefined}
          className={cn(
            "cursor-pointer transition focus-visible:nextra-focus",
            "flex items-center gap-1.5",
            "whitespace-nowrap",
            activeIndex < 2 ? "opacity-0" : "opacity-100",
            tocLink
          )}
          disabled={activeIndex < 2}
          onClick={scrollToTop}
          type="button"
        >
          Scroll to top
          <ArrowRightIcon
            className="-rotate-90 rounded-full border border-current"
            height="1.1em"
          />
        </button>
      </div>
    </div>
  );
}

/**
 * Marks the heading nearest the top of the viewport as active. Same window
 * as before: below the navbar, above the bottom 80% of the viewport.
 */
function useHeadingObserver(toc: TocEntry[]) {
  useEffect(() => {
    if (toc.length === 0) {
      return;
    }
    const navbarHeight =
      getComputedStyle(document.documentElement).getPropertyValue(
        "--nextra-navbar-height"
      ) || "0%";
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        const id = entry?.target.getAttribute("data-toc-id");
        if (id) {
          setActiveAnchor(id);
        }
      },
      { rootMargin: `-${navbarHeight.trim()} 0% -80%` }
    );
    for (const { id } of toc) {
      const heading = document.getElementById(id);
      const target =
        heading?.querySelector<HTMLElement>("a.subheading-anchor") ?? heading;
      if (target) {
        target.setAttribute("data-toc-id", id);
        observer.observe(target);
      }
    }
    return () => {
      observer.disconnect();
      setActiveAnchor("");
    };
  }, [toc]);
}

/* -------------------------------------------------------------------- shell */

const DATE_FORMAT = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export interface DocsPageShellProps {
  /** Show the breadcrumb above the page. */
  breadcrumb?: boolean;
  children: ReactNode;
  /** URL of the page source, for "Edit this page on GitHub". */
  editUrl?: string;
  /** ISO date of the last change to the page. */
  lastModified?: string | null;
  /**
   * "full" drops the table of contents column when there is no table of
   * contents; "default" keeps the column so the page width does not change.
   */
  layout?: "default" | "full";
  /** URL that returns the page as Markdown. Omit to hide "Copy page". */
  markdownUrl?: string;
  pagination?: boolean;
  /** Show the table of contents column content. */
  toc?: boolean;
  tocItems?: TocEntry[];
}

const NO_TOC: TocEntry[] = [];

/**
 * Everything around the page content: breadcrumb, "Copy page", the "last
 * updated" line, previous/next links and the table of contents column.
 */
export function DocsPageShell({
  breadcrumb = true,
  children,
  editUrl,
  lastModified,
  layout = "default",
  markdownUrl,
  pagination = true,
  toc = true,
  tocItems = NO_TOC,
}: DocsPageShellProps) {
  const directories = use(DirectoriesContext);
  const route = usePathname() || "/";
  const active = findActive(directories, route);
  const items = toc ? tocItems : NO_TOC;
  useHeadingObserver(items);

  const date = lastModified ? new Date(lastModified) : null;

  return (
    <>
      {layout === "default" || toc ? (
        <nav
          aria-label="table of contents"
          className="nextra-toc order-last w-64 shrink-0 max-xl:hidden print:hidden"
        >
          {toc ? <TOC editUrl={editUrl} toc={items} /> : null}
        </nav>
      ) : null}
      <article
        className={cn(
          "min-h-[calc(100vh-var(--nextra-navbar-height))] w-full min-w-0 break-words",
          "px-4 pt-4 pb-8 text-slate-700 md:px-12 dark:text-slate-200"
        )}
      >
        {breadcrumb && active.path.length > 0 ? (
          <Breadcrumb path={active.path} />
        ) : null}
        {markdownUrl ? <PageActions markdownUrl={markdownUrl} /> : null}
        <div id="nextra-skip-nav" />
        <main data-pagefind-body>{children}</main>
        {date ? (
          <div className="mt-12 mb-8 text-end text-gray-600 text-xs dark:text-gray-400">
            Last updated on{" "}
            <time dateTime={date.toISOString()} suppressHydrationWarning>
              {DATE_FORMAT.format(date)}
            </time>
          </div>
        ) : (
          <div className="mt-16" />
        )}
        {pagination ? (
          <Pagination flat={active.flat} index={active.index} />
        ) : null}
      </article>
    </>
  );
}
