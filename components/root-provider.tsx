"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

/**
 * Fumadocs root provider with the site defaults: dark theme by default and no
 * theme hotkey. Fumadocs' own search is off; the docs search lives in
 * components/algolia-search.tsx and handles its own shortcut.
 */
export function AppRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{ enabled: false }}
      theme={{ defaultTheme: "dark", hotKey: false }}
    >
      {children}
    </RootProvider>
  );
}
