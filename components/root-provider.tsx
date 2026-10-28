"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import { AlgoliaSearch, isSearchConfigured } from "@/components/algolia-search";

/**
 * Fumadocs root provider with the site defaults: dark theme by default and no
 * theme hotkey. Search is Fumadocs' dialog over the Algolia index
 * (components/algolia-search.tsx), off when the Algolia env vars are unset.
 */
export function AppRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={
        isSearchConfigured
          ? { SearchDialog: AlgoliaSearch }
          : { enabled: false }
      }
      theme={{ defaultTheme: "dark", hotKey: false }}
    >
      {children}
    </RootProvider>
  );
}
