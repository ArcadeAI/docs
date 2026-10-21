"use client";

import { useSearchContext } from "fumadocs-ui/contexts/search";
import { Search } from "lucide-react";

/**
 * Search trigger for the navbar and mobile menu. It opens Fumadocs' search
 * dialog, which also handles the Cmd/Ctrl + K shortcut.
 */
export function SearchButton() {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      aria-label="Search docs"
      className="search-button flex w-56 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      onClick={() => setOpenSearch(true)}
      type="button"
    >
      <Search className="size-3.5 shrink-0" />
      <span className="flex-1 text-left">Search</span>
      <kbd className="flex items-center gap-0.5 rounded border border-border px-1 text-xs text-muted-foreground">
        <span>⌘</span>K
      </kbd>
    </button>
  );
}
