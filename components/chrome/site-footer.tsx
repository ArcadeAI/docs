import { Footer } from "@/components/footer";

/** Footer band shown under every page. */
export function SiteFooter() {
  return (
    <div className="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
      <hr className="nextra-border" />
      <footer className="mx-auto flex max-w-(--nextra-content-width) justify-center py-12 pr-[max(env(safe-area-inset-right),1.5rem)] pl-[max(env(safe-area-inset-left),1.5rem)] text-gray-600 md:justify-start dark:text-gray-400">
        <Footer />
      </footer>
    </div>
  );
}
