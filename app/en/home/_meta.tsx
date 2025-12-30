import { BadgeHelp, Globe, Home, Shield, BookOpen, Rocket, Settings, Wrench, Bot, Users, Server, Eye, KeyRound, FileCode, Phone } from "lucide-react";
import type { MetaRecord } from "nextra";

function TitleWithIcon({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 font-medium">
      <Icon className="size-4" />
      {children}
    </span>
  );
}

export const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: true,
    },
  },
  index: {
    title: <TitleWithIcon icon={Home}>Home</TitleWithIcon>,
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  arcade: {
    title: <TitleWithIcon icon={Globe}>Arcade.dev</TitleWithIcon>,
    href: "https://arcade.dev",
  },
  
  // Section 1: Get Started
  "-- Get Started": {
    type: "separator",
    title: "Get Started",
  },
  "about-arcade": {
    title: "About Arcade",
  },
  setup: {
    title: "Setup",
  },
  quickstarts: {
    title: "Quickstarts",
  },
  "common-use-cases": {
    title: "Common use cases",
    display: "hidden", // Coming soon
  },
  examples: {
    title: "Example Agents",
  },
  integrations: {
    title: "Integrations",
  },
  tools: {
    title: "Tools",
  },
  glossary: {
    title: "Glossary",
  },
  faq: {
    title: "FAQ",
  },
  changelog: {
    title: "Changelog",
  },
  
  // Section 2: Guides
  "-- Guides": {
    type: "separator",
    title: "Guides",
  },
  "configure-arcade": {
    title: "Configure Arcade",
  },
  "tool-calling": {
    title: "Call tools",
  },
  "create-tools": {
    title: "Create tools",
  },
  "agent-frameworks": {
    title: "Agent Frameworks",
  },
  "user-facing-agents": {
    title: "User-facing agents",
  },
  observability: {
    title: "Observability Platforms",
  },
  "deployment-hosting": {
    title: "Deployment and hosting",
  },
  security: {
    title: <TitleWithIcon icon={Shield}>Security & Compliance</TitleWithIcon>,
  },
  
  // Section 3: Learn (placeholder)
  "-- Learn": {
    type: "separator",
    title: "Learn",
  },
  
  // Section 4: Reference
  "-- Reference": {
    type: "separator",
    title: "Reference",
  },
  references: {
    title: "Overview",
  },
  api: {
    title: "API",
  },
  mcp: {
    title: "Arcade MCP (MCP Server SDK)",
  },
  "arcade-cli": {
    title: "Arcade CLI",
  },
  "auth-providers": {
    title: "Auth providers",
  },
  
  // Section 5: Resources
  "-- Resources": {
    type: "separator",
    title: "Resources",
  },
  "contact-us": {
    title: <TitleWithIcon icon={BadgeHelp}>Contact us</TitleWithIcon>,
  },
};

export default meta;