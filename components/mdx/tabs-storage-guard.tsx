"use client";

import { useLayoutEffect } from "react";

const INDEX_REGEX = /^\d+$/;

interface TabsStorageGuardProps {
  defaultIndex: number;
  itemCount: number;
  storageKey: string;
}

/**
 * Fumadocs persists the selected tab value under `localStorage[groupId]`. Our
 * values are item indices ("0", "1", ...), like Nextra's. Anything else stored
 * under the key (an old label-based value, or an index past the end of this
 * group) would select no tab at all, so reset it before Fumadocs reads it.
 * Rendered as the first child of the Tabs so its layout effect runs first.
 */
export function TabsStorageGuard({
  storageKey,
  itemCount,
  defaultIndex,
}: TabsStorageGuardProps) {
  useLayoutEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === null) {
        return;
      }
      const index = Number(stored);
      const valid =
        INDEX_REGEX.test(stored) &&
        Number.isInteger(index) &&
        index < itemCount;
      if (!valid) {
        window.localStorage.setItem(storageKey, String(defaultIndex));
      }
    } catch {
      // localStorage unavailable (private mode, blocked storage): nothing to fix.
    }
  }, [storageKey, itemCount, defaultIndex]);

  return null;
}
