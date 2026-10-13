import { Tabs as ClientTabs, Tab, type TabsProps } from "./tabs.client";

/**
 * Server-side entry for `<Tabs>` / `<Tabs.Tab>`. MDX is rendered on the server
 * and cannot read a property (`.Tab`) off a client component, so the compound
 * component is assembled here, as Nextra does.
 */
export const Tabs = Object.assign(
  (props: TabsProps) => <ClientTabs {...props} />,
  { Tab }
);
