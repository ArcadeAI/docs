"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { useSidebar } from "fumadocs-ui/components/sidebar/base";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type FocusEventHandler,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Collapse } from "@/components/chrome/collapse";
import {
  ArrowRightIcon,
  ExpandIcon,
  LinkArrowIcon,
} from "@/components/chrome/icons";
import type {
  SidebarFolder,
  SidebarNode,
  SidebarPage,
} from "@/components/chrome/sidebar-model";
import { setFocusedRoute, useFocusedRoute } from "@/components/chrome/stores";
import { LocaleSwitch, ThemeSwitch } from "@/components/chrome/switchers";
import { SearchButton } from "@/components/search-button";

/** Folders below this level start closed. */
const DEFAULT_MENU_COLLAPSE_LEVEL = 2;
const MOBILE_BREAKPOINT = 767;

/** Open/closed state the reader chose, kept across client navigations. */
const TreeState: Record<string, boolean> = Object.create(null);

const classes = {
  active: cn(
    "bg-primary-100 font-semibold text-primary-800 dark:bg-primary-400/10 dark:text-primary-600",
    "contrast-more:border-primary-500!"
  ),
  border: cn(
    "relative before:absolute before:inset-y-1",
    'before:w-px before:bg-gray-200 before:content-[""] dark:before:bg-neutral-800',
    "ms-3 ps-3 pt-1 before:start-0"
  ),
  footer: cn(
    "nextra-sidebar-footer nextra-border mx-4 flex items-center gap-2 border-t py-4"
  ),
  inactive: cn(
    "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
    "dark:text-neutral-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50",
    "contrast-more:text-gray-900 contrast-more:dark:text-gray-50",
    "contrast-more:border-transparent contrast-more:hover:border-gray-900 contrast-more:dark:hover:border-gray-50"
  ),
  link: cn(
    "flex rounded px-2 py-1.5 text-sm transition-colors [word-break:break-word]",
    "cursor-pointer contrast-more:border"
  ),
  list: cn("grid gap-1"),
  wrapper: cn("nextra-scrollbar nextra-mask overflow-y-auto p-4"),
};

/** Top-level entries show their section icon next to a stronger label. */
function Title({ icon, title }: { icon?: ReactNode; title: ReactNode }) {
  if (!icon) {
    return title;
  }
  return (
    <span className="flex items-center gap-2 font-medium text-gray-950 dark:text-white [&>svg]:size-4">
      {icon}
      {title}
    </span>
  );
}

const onFocus: FocusEventHandler<HTMLAnchorElement> = (event) => {
  const route = event.currentTarget.getAttribute("href");
  if (route) {
    setFocusedRoute(route);
  }
};

const onBlur: FocusEventHandler<HTMLAnchorElement> = () => {
  setFocusedRoute("");
};

function useActiveRoute(): string {
  return usePathname() || "/";
}

function Folder({ item, level }: { item: SidebarFolder; level: number }) {
  const route = useActiveRoute();
  const active = [route, `${route}/`].includes(`${item.route}/`);
  const activeRouteInside = active || route.startsWith(`${item.route}/`);
  const focusedRoute = useFocusedRoute();
  const focusedRouteInside = focusedRoute.startsWith(`${item.route}/`);
  const [, rerender] = useState({});

  const state = TreeState[item.route];
  const open =
    state === undefined
      ? active ||
        activeRouteInside ||
        focusedRouteInside ||
        level < DEFAULT_MENU_COLLAPSE_LEVEL
      : state || focusedRouteInside;

  useEffect(() => {
    // Folders the reader navigated away from go back to their default state.
    if (activeRouteInside && focusedRouteInside) {
      TreeState[item.route] = true;
    } else {
      delete TreeState[item.route];
    }
  }, [activeRouteInside, focusedRouteInside, item.route]);

  const toggle = useCallback(() => {
    TreeState[item.route] = !open;
    rerender({});
  }, [item.route, open]);

  return (
    <li className={cn({ active, open }) || undefined}>
      <button
        className={cn(
          "cursor-pointer transition focus-visible:nextra-focus",
          "items-center justify-between gap-2",
          "w-full text-start",
          classes.link,
          active ? classes.active : classes.inactive
        )}
        data-href={item.route}
        onClick={toggle}
        type="button"
      >
        <Title icon={item.icon} title={item.title} />
        <ArrowRightIcon
          className={cn(
            "shrink-0",
            "rounded-[4px] p-0.5 hover:bg-gray-800/5 dark:hover:bg-gray-100/5",
            "origin-center transition-all motion-reduce:transition-none rtl:-rotate-180",
            open && "ltr:rotate-90 rtl:-rotate-270"
          )}
          height="18"
        />
      </button>
      <Collapse isOpen={open}>
        <Menu
          className={classes.border}
          directories={item.children}
          level={level}
        />
      </Collapse>
    </li>
  );
}

function File({ item }: { item: SidebarPage }) {
  const route = useActiveRoute();
  const { setOpen } = useSidebar();
  const active = [route, `${route}/`].includes(`${item.href}/`);
  const className = cn(
    "focus-visible:nextra-focus",
    classes.link,
    active ? classes.active : classes.inactive
  );
  const closeMenu = useCallback(() => setOpen(false), [setOpen]);

  if (item.href.startsWith("http")) {
    return (
      <li className={active ? "active" : undefined}>
        <a
          className={className}
          href={item.href}
          onBlur={onBlur}
          onClick={closeMenu}
          onFocus={onFocus}
          rel="noreferrer"
          target="_blank"
        >
          <Title icon={item.icon} title={item.title} />
          {typeof item.title === "string" && !item.icon ? (
            <>
              &nbsp;
              <LinkArrowIcon
                className="inline shrink-0 align-baseline"
                height="1em"
              />
            </>
          ) : null}
        </a>
      </li>
    );
  }

  return (
    <li className={active ? "active" : undefined}>
      <Link
        className={className}
        href={item.href}
        onBlur={onBlur}
        onClick={closeMenu}
        onFocus={onFocus}
        prefetch={false}
      >
        <Title icon={item.icon} title={item.title} />
      </Link>
    </li>
  );
}

function Menu({
  className,
  directories,
  level,
  ref,
}: {
  className?: string;
  directories: SidebarNode[];
  level: number;
  ref?: RefObject<HTMLUListElement | null>;
}) {
  return (
    <ul className={cn(classes.list, className)} ref={ref}>
      {directories.map((item) => {
        if (item.kind === "separator") {
          return (
            <li
              className={
                item.title
                  ? "not-first:mt-5 mb-2 px-2 py-1.5 font-semibold text-gray-900 text-sm dark:text-gray-100"
                  : "my-4"
              }
              key={item.id}
            >
              {item.title || <hr className="nextra-border mx-2 border-t" />}
            </li>
          );
        }
        if (item.kind === "folder") {
          return <Folder item={item} key={item.id} level={level + 1} />;
        }
        return <File item={item} key={item.id} />;
      })}
    </ul>
  );
}

/** Centers the active entry in a scrollable sidebar list. */
function scrollActiveIntoView(container: HTMLElement | null) {
  const activeLink = container?.querySelector<HTMLElement>("li.active");
  if (!(container && activeLink)) {
    return;
  }
  const containerRect = container.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  container.scrollTop +=
    linkRect.top -
    containerRect.top -
    (container.clientHeight - linkRect.height) / 2;
}

/** Full-screen menu shown on small screens when the navbar menu button is open. */
export function MobileNav({ directories }: { directories: SidebarNode[] }) {
  const { open } = useSidebar();
  const sidebarRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("max-md:overflow-hidden", open);
    if (open) {
      scrollActiveIntoView(sidebarRef.current);
    }
    return () => {
      document.documentElement.classList.remove("max-md:overflow-hidden");
    };
  }, [open]);

  return (
    <aside
      className={cn(
        "nextra-mobile-nav",
        "flex flex-col",
        "fixed inset-0 z-20 overscroll-contain pt-(--nextra-navbar-height)",
        "[contain:layout_style]",
        "md:hidden",
        "bg-nextra-bg",
        open
          ? "[transform:translate3d(0,0,0)]"
          : "[transform:translate3d(0,-100%,0)]"
      )}
    >
      <div className="px-4 pt-4">
        <SearchButton />
      </div>
      <Menu
        className={classes.wrapper}
        directories={directories}
        level={0}
        ref={sidebarRef}
      />
      <div className={cn(classes.footer, "mt-auto")}>
        <ThemeSwitch className="grow" />
        <LocaleSwitch className="grow justify-end" />
      </div>
    </aside>
  );
}

/** Desktop sidebar: the page tree plus the language, theme and collapse controls. */
export function Sidebar({ directories }: { directories: SidebarNode[] }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showToggleAnimation, setToggleAnimation] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarControlsId = useId();

  useEffect(() => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      scrollActiveIntoView(sidebarRef.current);
    }
  }, []);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
    setToggleAnimation(true);
  }, []);

  return (
    <aside
      className={cn(
        "nextra-sidebar print:hidden",
        "transition-all ease-in-out",
        "flex flex-col max-md:hidden",
        "h-[calc(100dvh-var(--nextra-navbar-height))]",
        "top-(--nextra-navbar-height) shrink-0",
        isExpanded ? "w-64" : "w-20",
        "sticky"
      )}
      id={sidebarControlsId}
    >
      <div
        className={cn(classes.wrapper, "grow", !isExpanded && "no-scrollbar")}
        ref={sidebarRef}
      >
        <Collapse horizontal isOpen={isExpanded}>
          <Menu directories={directories} level={0} />
        </Collapse>
      </div>
      <div
        className={cn(
          "sticky bottom-0 bg-nextra-bg",
          classes.footer,
          !isExpanded && "flex-wrap justify-center",
          showToggleAnimation && [
            "*:opacity-0",
            isExpanded
              ? "*:animate-[fade-in_1s_ease_.2s_forwards]"
              : "*:animate-[fade-in2_1s_ease_.2s_forwards]",
          ]
        )}
      >
        <LocaleSwitch className={isExpanded ? "grow" : ""} lite={!isExpanded} />
        <ThemeSwitch lite />
        <button
          aria-controls={sidebarControlsId}
          aria-expanded={isExpanded}
          className={cn(
            "cursor-pointer transition focus-visible:nextra-focus",
            "rounded-[6px] p-2",
            "text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
          )}
          onClick={toggleExpanded}
          title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
          type="button"
        >
          <ExpandIcon
            className={cn(
              !isExpanded && "*:first:origin-[35%] *:first:rotate-180"
            )}
            height="12"
          />
        </button>
      </div>
    </aside>
  );
}
