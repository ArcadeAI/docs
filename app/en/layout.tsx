import type { ReactNode } from "react";
import { ChromeLayout } from "@/components/chrome/docs-layout";
import { buildSidebarModel } from "@/components/chrome/sidebar-model";
import { SiteFooter } from "@/components/chrome/site-footer";
import { source } from "@/lib/source";

/**
 * Docs layout: navbar, sidebar and page area (components/chrome/), followed
 * by the site footer band.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const tree = source.getPageTree();
  return (
    <>
      <ChromeLayout directories={buildSidebarModel(tree, "/en")} tree={tree}>
        {children}
      </ChromeLayout>
      <SiteFooter />
    </>
  );
}
