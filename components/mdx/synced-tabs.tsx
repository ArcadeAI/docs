"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { Tabs } from "fumadocs-ui/components/ui/tabs";
import { type ComponentProps, useCallback, useState } from "react";

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

  return (
    <Tabs
      {...props}
      {...(groupId ? { groupId, persist: true } : {})}
      className={cn(
        "my-4 flex flex-col overflow-hidden rounded-xl border bg-fd-secondary",
        props.className
      )}
      onValueChange={onValueChange}
      value={value}
    />
  );
}
