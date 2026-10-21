"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

/**
 * Fumadocs root provider with the site defaults: dark theme by default and no
 * theme hotkey. Search uses Fumadocs' built-in dialog (Cmd/Ctrl + K), backed
 * by the /api/search route in lib/builtin-search.ts.
 */
export function AppRootProvider({ children }: { children: ReactNode }) {
  return (
    <RootProvider theme={{ defaultTheme: "dark", hotKey: false }}>
      {children}
    </RootProvider>
  );
}
