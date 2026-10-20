import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import type { ComponentProps } from "react";
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
import { Details, Summary } from "@/components/mdx/details";
import { Heading } from "@/components/mdx/heading";
import { ImageZoom } from "@/components/mdx/image-zoom";
import { Mermaid } from "@/components/mdx/mermaid";
import { Step, Steps } from "@/components/mdx/steps";
import { Table } from "@/components/mdx/table";
import { Tab, Tabs } from "@/components/mdx/tabs";
import { SampleAppCard } from "@/components/sample-app-card";
import { SubpageList } from "@/components/subpage-list";
import ToggleContent from "@/components/toggle-content";
import { ToolCard } from "@/components/tool-card";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

function heading(as: HeadingTag) {
  return function MdxHeading(props: ComponentProps<"h2">) {
    return <Heading as={as} {...props} />;
  };
}

/**
 * Components available in every MDX page without an import: Fumadocs' own
 * (`fumadocs-ui/mdx`: links, headings, code blocks, tables, cards, callouts),
 * plus thin wrappers in components/mdx that take the props the pages were
 * written with for Nextra (`<Tabs storageKey>`, `<Cards.Card>`,
 * `<Callout type="warning">`, numbered `###` inside `<Steps>`).
 *
 * `MCPClientGrid` (components/pages/get-started/mcp-clients/mcp-client-grid.tsx)
 * is page-local and imported explicitly by the page that uses it.
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AgentFrameworkTabs,
    Callout,
    Card,
    Cards,
    CheatSheetGrid,
    CheatSheetSection,
    // Nextra's inline-code component, used as JSX in a few pages
    Code: (props: ComponentProps<"code">) => <code {...props} />,
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
    Table,
    Tabs,
    ToggleContent,
    ToolCard,
    details: Details,
    h1: heading("h1"),
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    h5: heading("h5"),
    h6: heading("h6"),
    img: ImageZoom,
    summary: Summary,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;
