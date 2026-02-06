"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Client component that updates the markdown alternate link on client-side navigation.
 * The server renders the initial correct link, and this component keeps it updated
 * as users navigate between pages without full page reloads.
 */
export function MarkdownAlternateLink() {
  const pathname = usePathname();

  useEffect(() => {
    const link = document.querySelector(
      'link[rel="alternate"][type="text/markdown"]'
    );
    if (link) {
      const mdPath =
        pathname === "/" || pathname === "" ? "/index.md" : `${pathname}.md`;
      link.setAttribute("href", mdPath);
    }
  }, [pathname]);

  return null;
}
