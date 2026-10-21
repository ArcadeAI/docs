import type { Metadata } from "next";
import { SearchCompare } from "@/components/search-compare";

export const metadata: Metadata = {
  title: "Search comparison",
  robots: { index: false, follow: false },
};

export default function SearchComparePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold">Search comparison</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Experimental. The same query runs against Algolia (what the site uses
        today) and Fumadocs' built-in search, side by side.
      </p>
      <SearchCompare />
    </main>
  );
}
