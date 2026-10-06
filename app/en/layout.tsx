import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

/**
 * Notebook layout = top navbar (logo, search, links) + sidebar, the same
 * structure as the Nextra docs theme this site migrated from.
 */
export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  return (
    <>
      <DocsLayout
        {...base}
        nav={{ ...base.nav, mode: "top" }}
        sidebar={{
          collapsible: true,
          defaultOpenLevel: 1,
          prefetch: false,
        }}
        tabMode="sidebar"
        themeSwitch={{ enabled: true, mode: "light-dark-system" }}
        tree={source.getPageTree()}
      >
        {children}
      </DocsLayout>
      {/* Rendered after the docs grid so the sidebar/TOC columns stay intact. */}
      <footer className="border-t bg-fd-card">
        <div className="mx-auto w-full max-w-[97rem] px-4 py-8 md:px-8">
          <Footer />
        </div>
      </footer>
    </>
  );
}
