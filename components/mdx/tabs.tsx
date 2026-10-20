import {
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import {
  Children,
  type ComponentProps,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { SyncedTabs } from "./synced-tabs";

/**
 * Labels that are the same pick in every group: the pages call the Node.js
 * SDK "JavaScript" in most groups and "TypeScript" in a few.
 */
const SAME_PICK: Record<string, string> = { typescript: "javascript" };

const WHITESPACE = /\s+/g;

/** The value a tab is remembered by: its label, lowercased. */
export function tabValue(label: string): string {
  const value = label.trim().toLowerCase().replace(WHITESPACE, "-");
  return SAME_PICK[value] ?? value;
}

export type TabsProps = {
  children?: ReactNode;
  className?: string;
  defaultIndex?: number;
  /** The tab labels, in the order of the `<Tabs.Tab>` panels. */
  items: string[];
  /**
   * Nextra's name for a tab group: groups with the same key switch together
   * and the reader's pick is remembered, by label rather than by position.
   */
  storageKey?: string;
};

/**
 * Fumadocs' tabs, taking the `items` and `storageKey` props the MDX pages
 * were written with.
 */
function TabsRoot({
  children,
  className,
  defaultIndex = 0,
  items,
  storageKey,
}: TabsProps) {
  const values = items.map(tabValue);
  const panels = Children.toArray(children).filter(isValidElement);
  return (
    <SyncedTabs
      className={className}
      defaultValue={values[defaultIndex] ?? values[0] ?? ""}
      groupId={storageKey}
      values={values}
    >
      <TabsList>
        {items.map((item, index) => (
          <TabsTrigger key={item} value={values[index] ?? item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {panels.map((panel, index) =>
        cloneElement(panel as ReactElement<{ value?: string }>, {
          key: items[index] ?? index,
          value: values[index] ?? String(index),
        })
      )}
    </SyncedTabs>
  );
}

/**
 * One panel. Every panel is in the HTML, not only the open one, so search
 * and links to a heading inside a closed tab still find it (Fumadocs opens
 * the tab that holds the heading a link points at).
 */
export function Tab({
  value = "",
  ...props
}: Omit<ComponentProps<typeof TabsContent>, "value"> & { value?: string }) {
  return <TabsContent forceMount value={value} {...props} />;
}

/**
 * `<Tabs>` with `<Tabs.Tab>`. MDX renders on the server, where a property of
 * a client component (`.Tab`) cannot be read, so the pair is put together
 * here.
 */
export const Tabs = Object.assign(TabsRoot, { Tab });
