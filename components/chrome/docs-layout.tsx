"use client";

import type * as PageTree from "fumadocs-core/page-tree";
import {
  SidebarCollapseTrigger,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "fumadocs-ui/components/sidebar/base";
import { DocsLayout, type DocsSlots } from "fumadocs-ui/layouts/notebook";
import { usePathname } from "next/navigation";
import { type ComponentProps, createContext, type ReactNode, use } from "react";
import { Navbar } from "@/components/chrome/navbar";
import { MobileNav, Sidebar } from "@/components/chrome/sidebar";
import type { SidebarNode } from "@/components/chrome/sidebar-model";
import { DirectoriesContext } from "@/components/chrome/stores";

/** True on pages that show no sidebar (the 404 page). */
const BareContext = createContext(false);

/**
 * Page frame: skip link, navbar, mobile menu, then the centered row that
 * holds the sidebar, the page and its table of contents.
 */
function Container({ children }: ComponentProps<"div">) {
  const directories = use(DirectoriesContext);
  const bare = use(BareContext);
  return (
    <>
      <a className="nextra-skip-nav" href="#nextra-skip-nav">
        Skip to Content
      </a>
      <Navbar />
      <MobileNav directories={directories} />
      <main className="custom-main">
        {bare ? (
          children
        ) : (
          <div className="mx-auto flex max-w-(--nextra-content-width)">
            {children}
          </div>
        )}
      </main>
    </>
  );
}

/**
 * The sidebar starts fresh on every page, as it always has: the active entry
 * is centered again, a collapsed sidebar re-expands, and folders the reader
 * opened by hand return to their default state one navigation later.
 */
function SidebarRoot() {
  const directories = use(DirectoriesContext);
  const pathname = usePathname();
  return use(BareContext) ? null : (
    <Sidebar directories={directories} key={pathname} />
  );
}

const slots: Partial<DocsSlots> = {
  container: Container,
  sidebar: {
    collapseTrigger: SidebarCollapseTrigger,
    provider: SidebarProvider,
    root: SidebarRoot,
    trigger: SidebarTrigger,
    useSidebar,
  },
};

interface ChromeLayoutProps {
  /** Render the page without the sidebar and the centered content row. */
  bare?: boolean;
  children: ReactNode;
  /** Sidebar entries, see components/chrome/sidebar-model.ts. */
  directories: SidebarNode[];
  tree: PageTree.Root;
}

/**
 * Docs layout. Fumadocs provides the page tree, sidebar state and search
 * contexts; every visible part is rendered by the components in this folder.
 */
export function ChromeLayout({
  bare = false,
  children,
  directories,
  tree,
}: ChromeLayoutProps) {
  return (
    <DirectoriesContext value={directories}>
      <BareContext value={bare}>
        <DocsLayout
          nav={{ enabled: false }}
          searchToggle={{ enabled: false }}
          slots={slots}
          tabs={false}
          themeSwitch={{ enabled: false }}
          tree={tree}
        >
          {children}
        </DocsLayout>
      </BareContext>
    </DirectoriesContext>
  );
}
