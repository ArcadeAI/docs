"use client";

import { createContext, type ReactNode, useSyncExternalStore } from "react";
import type { SidebarNode } from "@/components/chrome/sidebar-model";

/**
 * Small client stores shared by the chrome components: the heading currently
 * in view and the sidebar route that has keyboard focus.
 */

/** Sidebar entries, provided by the docs layout. */
export const DirectoriesContext = createContext<SidebarNode[]>([]);

export type TocEntry = {
  depth: number;
  id: string;
  title: ReactNode;
};

function createStore<T>(initial: T) {
  let value = initial;
  const listeners = new Set<() => void>();
  return {
    get: () => value,
    set: (next: T) => {
      if (Object.is(next, value)) {
        return;
      }
      value = next;
      for (const listener of listeners) {
        listener();
      }
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

const activeAnchorStore = createStore("");
const focusedRouteStore = createStore("");

export const setActiveAnchor = activeAnchorStore.set;
export const setFocusedRoute = focusedRouteStore.set;

export function useActiveAnchor(): string {
  return useSyncExternalStore(
    activeAnchorStore.subscribe,
    activeAnchorStore.get,
    () => ""
  );
}

export function useFocusedRoute(): string {
  return useSyncExternalStore(
    focusedRouteStore.subscribe,
    focusedRouteStore.get,
    () => ""
  );
}
