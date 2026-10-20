import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Suspense } from "react";
import { NotFoundContent } from "@/components/not-found-content";
import { SiteFooter } from "@/components/site-footer";
import { baseOptions } from "@/lib/layout.shared";

/** 404 page: the docs navbar and footer, without the sidebar. */
export default function NotFound() {
  return (
    <>
      <HomeLayout {...baseOptions()}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center py-16">
              Loading...
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>
      </HomeLayout>
      <SiteFooter />
    </>
  );
}
