import { Footer } from "@/components/footer";

/** Footer band shown under every page. */
export function SiteFooter() {
  return (
    <div className="border-fd-border border-t bg-fd-card pb-[env(safe-area-inset-bottom)] print:bg-transparent">
      <footer className="mx-auto flex max-w-(--fd-layout-width) justify-center px-6 py-12 text-fd-muted-foreground md:justify-start">
        <Footer />
      </footer>
    </div>
  );
}
