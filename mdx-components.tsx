import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { AgentFrameworkTabs } from "@/components/agent-framework-tabs";
import { SignupLink } from "@/components/analytics";
import {
  CheatSheetGrid,
  CheatSheetSection,
  InfoBox,
} from "@/components/cheat-sheet";
import { ContactEmail } from "@/components/contact-email";
import { DashboardLink } from "@/components/dashboard-link";
import { ErrorHierarchy } from "@/components/error-hierarchy";
import { GlossaryTerm } from "@/components/glossary-term";
import { GuideOverview } from "@/components/guide-overview";
import { Callout } from "@/components/mdx/callout";
import { Card, Cards } from "@/components/mdx/cards";
import { Details } from "@/components/mdx/details";
import {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Rule,
  Summary,
  Table,
  Td,
  Th,
  Tr,
  UnorderedList,
  Wrapper,
} from "@/components/mdx/elements";
import { ImageZoom } from "@/components/mdx/image-zoom";
import { Mermaid } from "@/components/mdx/mermaid";
import { Pre } from "@/components/mdx/pre";
import { Step, Steps } from "@/components/mdx/steps";
import { Tabs } from "@/components/mdx/tabs";
import { Tab } from "@/components/mdx/tabs.client";
import { SampleAppCard } from "@/components/sample-app-card";
import { SubpageList } from "@/components/subpage-list";
import ToggleContent from "@/components/toggle-content";
import { ToolCard } from "@/components/tool-card";

/**
 * Components available in every MDX page without an import. Keep this list in
 * sync with the "Nextra-compat component API" section of MIGRATION_PLAN.md.
 *
 * The lowercase entries are the Nextra docs theme's element renderers, ported
 * in components/mdx so the article looks exactly like the production site.
 * They are applied after `components`: the page passes Fumadocs'
 * relative-file `a` renderer, which the docs do not use (every link is an
 * absolute path) and which would drop the Nextra link style and the
 * external-link arrow.
 *
 * `MCPClientGrid` (components/pages/get-started/mcp-clients/mcp-client-grid.tsx)
 * is page-local and imported explicitly by the page that uses it.
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Arcade components
    AgentFrameworkTabs,
    // Nextra-compat components
    Callout,
    Card,
    Cards,
    CheatSheetGrid,
    CheatSheetSection,
    ContactEmail,
    DashboardLink,
    ErrorHierarchy,
    GlossaryTerm,
    GuideOverview,
    Image,
    InfoBox,
    Mermaid,
    SampleAppCard,
    SignupLink,
    Step,
    Steps,
    SubpageList,
    Tab,
    Tabs,
    ToggleContent,
    ToolCard,
    ...components,
    // Nextra element renderers
    a: Link,
    blockquote: Blockquote,
    code: Code,
    details: Details,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    hr: Rule,
    img: ImageZoom,
    li: ListItem,
    ol: OrderedList,
    p: Paragraph,
    pre: Pre,
    summary: Summary,
    table: Table,
    td: Td,
    th: Th,
    tr: Tr,
    ul: UnorderedList,
    wrapper: Wrapper,
  };
}

export const useMDXComponents = getMDXComponents;
