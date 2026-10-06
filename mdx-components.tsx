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
import { Mermaid } from "@/components/mdx/mermaid";
import { Pre } from "@/components/mdx/pre";
import { Step, Steps } from "@/components/mdx/steps";
import { Tab, Tabs } from "@/components/mdx/tabs";
import { SampleAppCard } from "@/components/sample-app-card";
import { SubpageList } from "@/components/subpage-list";
import ToggleContent from "@/components/toggle-content";
import { ToolCard } from "@/components/tool-card";

/**
 * Components available in every MDX page without an import. Keep this list in
 * sync with the "Nextra-compat component API" section of MIGRATION_PLAN.md.
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
    pre: Pre,
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
  };
}

export const useMDXComponents = getMDXComponents;
