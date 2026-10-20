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
  // tab here too.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.("a[href^='#']");
      const id = decodeURIComponent(link?.getAttribute("href")?.slice(1) ?? "");
      const target = id ? document.getElementById(id) : null;
      let panel = target?.closest<HTMLElement>("[role=tabpanel]");
      while (panel) {
        const tabValue = panel.dataset.tabValue;
        if (panel.parentElement === root.current && tabValue) {
          setValue(tabValue);
          requestAnimationFrame(() => target?.scrollIntoView());
          return;
        }
        panel = panel.parentElement?.closest<HTMLElement>("[role=tabpanel]");
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

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
