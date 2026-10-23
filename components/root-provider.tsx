"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import { lazy, type ReactNode } from "react";
import { SEARCH_SUGGESTIONS } from "@/lib/search-suggestions";

// Loaded on first use, like Fumadocs' own default dialog.
const SearchDialog = lazy(() => import("./search-dialog"));

/**
 * Fumadocs root provider with the site defaults: dark theme by default and no
 * theme hotkey. Search uses a Fumadocs search dialog (Cmd/Ctrl + K, see
 * components/search-dialog.tsx) backed by the /api/search route in
 * lib/builtin-search.ts.
 */
export function AppRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{ SearchDialog, links: SEARCH_SUGGESTIONS }}
      theme={{ defaultTheme: "dark", hotKey: false }}
    >
      {children}
    </RootProvider>
  );
}
