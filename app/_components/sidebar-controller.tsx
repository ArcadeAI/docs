"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function SidebarController() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on the home page (e.g., /en/home, /es/home, etc.)
    const isHomePage = pathname?.endsWith("/home");

    // Find the sidebar expand/collapse button
    const sidebarButton = document.querySelector(
      "button[aria-controls][aria-expanded]"
    ) as HTMLButtonElement;

    if (sidebarButton) {
      const isExpanded = sidebarButton.getAttribute("aria-expanded") === "true";

      // Click the button if we need to change the state
      if (isHomePage && isExpanded) {
        // On home page, collapse if expanded
        sidebarButton.click();
      } else if (!(isHomePage || isExpanded)) {
        // On other pages, expand if collapsed
        sidebarButton.click();
      }
    }
  }, [pathname]);

  return null;
}
