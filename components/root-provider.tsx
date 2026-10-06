"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import {
  AlgoliaSearch,
  isAlgoliaConfigured,
} from "@/components/algolia-search";

/**
 * Fumadocs root provider with the site defaults: dark theme by default and
 * Algolia search when configured (Orama via /api/search otherwise).
 */
export function AppRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={isAlgoliaConfigured ? { SearchDialog: AlgoliaSearch } : undefined}
      theme={{ defaultTheme: "dark" }}
    >
      {children}
    </RootProvider>
  );
}
