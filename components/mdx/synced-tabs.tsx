"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { Tabs } from "fumadocs-ui/components/ui/tabs";
import {
  type ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type SyncedTabsProps = Omit<
  ComponentProps<typeof Tabs>,
  "value" | "onValueChange" | "defaultValue" | "groupId" | "persist"
> & {
  defaultValue: string;
  /** Groups with the same id switch together and remember the pick. */
  groupId?: string;
  /** The value of each tab in this group. */
  values: string[];
};

/** The element a click on a link to the URL's current hash points at. */
function sameHashTarget(event: MouseEvent): HTMLElement | null {
  const link = (event.target as Element | null)?.closest?.("a[href^='#']");
  const id = decodeURIComponent(link?.getAttribute("href")?.slice(1) ?? "");
  if (!id || id !== decodeURIComponent(window.location.hash.slice(1))) {
    return null;
  }
  return document.getElementById(id);
}

/** The panel of the tab group `root` that holds `target`, if any. */
function ownPanel(target: HTMLElement, root: HTMLElement | null) {
  let panel = target.closest<HTMLElement>("[role=tabpanel]");
  while (panel && panel.parentElement !== root) {
    panel =
      panel.parentElement?.closest<HTMLElement>("[role=tabpanel]") ?? null;
  }
  return panel;
}

/**
 * Fumadocs' tabs, holding the open tab itself so that a pick from another
 * group (or an earlier visit) that this group has no tab for is ignored
 * instead of leaving the group with no open panel. Built on the unstyled
 * root (the styled one keeps its own value), with the styled root's frame.
 */
export function SyncedTabs({
  defaultValue,
  groupId,
  values,
  ...props
}: SyncedTabsProps) {
  const [value, setValue] = useState(defaultValue);
  const root = useRef<HTMLDivElement>(null);
  // MDX passes a new array on every render; depend on its content.
  const valuesKey = values.join("\n");
  const onValueChange = useCallback(
    (next: string) => {
      if (valuesKey.split("\n").includes(next)) {
        setValue(next);
      }
    },
    [valuesKey]
  );

  // Fumadocs opens the tab holding the URL's target when the hash changes.
  // A click on a link to the hash the URL already has (the table of
  // contents, after the reader switched tabs) changes nothing, so open the
  // tab here, and scroll once it shows: the browser's own jump would aim at
  // the hidden heading.
  const pending = useRef<HTMLElement | null>(null);
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = sameHashTarget(event);
      const panel = target && ownPanel(target, root.current);
      if (panel?.dataset.tabValue && panel.dataset.state !== "active") {
        event.preventDefault();
        pending.current = target;
        setValue(panel.dataset.tabValue);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  useEffect(() => {
    if (pending.current && value) {
      pending.current.scrollIntoView();
      pending.current = null;
    }
  }, [value]);

  return (
    <Tabs
      {...props}
      {...(groupId ? { groupId, persist: true } : {})}
      className={cn(
        "my-4 flex flex-col overflow-hidden rounded-xl border bg-fd-secondary",
        props.className
      )}
      onValueChange={onValueChange}
      ref={root}
      value={value}
    />
  );
}
