import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <DocsLayout
        {...baseOptions()}
        sidebar={{
          collapsible: true,
          defaultOpenLevel: 0,
          prefetch: false,
        }}
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
