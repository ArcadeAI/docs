import {
  Tab as FumadocsTab,
  Tabs as FumadocsTabs,
  type TabsProps as FumadocsTabsProps,
  type TabProps,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import { Children, isValidElement, type ReactNode } from "react";
import { TabsStorageGuard } from "./tabs-storage-guard";

export type TabsProps = Omit<
  FumadocsTabsProps,
  "groupId" | "persist" | "items" | "defaultIndex"
> & {
  items: string[];
  /** Nextra's prop for syncing/persisting the selected tab across the site. */
  storageKey?: string;
  defaultIndex?: number;
};

/**
 * Nextra-compatible `<Tabs items={[...]} storageKey="...">`.
 *
 * Tab values are the item *index* (as Nextra stored them), not the label, so a
 * shared `storageKey` keeps groups in sync even when labels differ between
 * pages (e.g. "JavaScript" vs "TypeScript" as the second tab). `storageKey`
 * maps to Fumadocs' `groupId` + `persist` (localStorage).
 */
export function Tabs({
  storageKey,
  items,
  defaultIndex = 0,
  children,
  ...props
}: TabsProps) {
  const panels = Children.toArray(children).filter(isValidElement);

  return (
    <FumadocsTabs
      defaultValue={String(defaultIndex)}
      {...(storageKey ? { groupId: storageKey, persist: true } : {})}
      {...props}
    >
      {storageKey ? (
        <TabsStorageGuard
          defaultIndex={defaultIndex}
          itemCount={items.length}
          storageKey={storageKey}
        />
      ) : null}
      <TabsList>
        {items.map((item, index) => (
          <TabsTrigger key={item} value={String(index)}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {panels.map((panel, index) => (
        <FumadocsTab key={items[index] ?? index} value={String(index)}>
          {(panel.props as { children?: ReactNode }).children}
        </FumadocsTab>
      ))}
    </FumadocsTabs>
  );
}

/**
 * `<Tabs.Tab>` in Nextra. The parent `Tabs` reads each child's content and
 * assigns the index-based value, so this component only carries children.
 */
export function Tab(props: TabProps) {
  return <>{props.children}</>;
}

Tabs.Tab = Tab;
