import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

/**
 * Docs layout: Fumadocs' notebook layout (navbar across the top, sidebar
 * with the page tree), followed by the site footer band. The sections open
 * one level deep; deeper folders open when they hold the current page.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  return (
    <>
      <DocsLayout
        {...base}
        nav={{ ...base.nav, mode: "top" }}
        sidebar={{ defaultOpenLevel: 1, prefetch: false }}
        tree={source.getPageTree()}
      >
        {children}
      </DocsLayout>
      <SiteFooter />
    </>
  );
}
