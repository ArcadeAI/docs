import { Suspense } from "react";
import { ChromeLayout } from "@/components/chrome/docs-layout";
import { NotFoundContent } from "@/components/chrome/not-found-content";
import { buildSidebarModel } from "@/components/chrome/sidebar-model";
import { SiteFooter } from "@/components/chrome/site-footer";
import { source } from "@/lib/source";

/**
 * 404 page: the navbar and footer of the docs, without the sidebar. The
 * mobile menu still lists the docs so a reader can find their way back.
 */
export default function NotFound() {
  const tree = source.getPageTree();
  return (
    <>
      <ChromeLayout
        bare
        directories={buildSidebarModel(tree, "/en")}
        tree={tree}
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-16">
              Loading...
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>
      </ChromeLayout>
      <SiteFooter />
    </>
  );
}
