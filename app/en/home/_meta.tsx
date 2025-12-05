import { BadgeHelp, Globe, HeartPulse, Home } from "lucide-react";
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
  "-- Getting Started with tool calling": {
    type: "separator",
    title: "Getting Started with tool calling",
  },
  "calling-tools-custom-apps": {
    title: "Calling tools in your custom apps",
    href: "/calling-tools-custom-apps",
  },
  "api-keys": {
    title: "Get an API Key",
  },
  "mcp-gateway-quickstart": {
    title: "Calling tools in 3rd party agents, apps, or IDEs",
    href: "/mcp-gateway-quickstart",
  },
  "mcp-server-quickstart": {
    title: "Build MCP Server to write custom tools",
    href: "/mcp-server-quickstart",
  },
  "sample-agents": {
    title: "Sample agents with tool calling",
    href: "/sample-agents",
  },
  "configure-arcade-section": {
    title: "Configure Arcade",
  },
  "-- Tool Calling": {
    type: "separator",
    title: "Tool Calling",
  },
  "tool-calling-intro": {
    title: "Introduction",
    href: "/tool-calling-intro",
  },
  "error-handling": {
    title: "Error Handling",
    href: "/error-handling",
  },
  "third-party-apps": {
    title: "In 3rd party applications",
  },
  "custom-apps": {
    title: "In custom applications",
  },
  "triggers-section": {
    title: "Triggers",
  },
  "-- Tool Writing": {
    type: "separator",
    title: "Tool Writing",
  },
  "tool-writing-basics": {
    title: "Learn the basics",
  },
  "improve-performance": {
    title: "Building tools to get more performance out of existing toolkits",
  },
  "new-functionality": {
    title: "Building tools with agent functionality that doesn't exist",
  },
  "newest-models": {
    title: "Ensure tools work with the newest models",
  },
  "tool-writing-reference": {
    title: "Reference",
  },
  "-- Configuring Arcade with Agent Orchestrators": {
    type: "separator",
    title: "Configuring Arcade with Agent Orchestrators",
  },
  "orchestrator-overview": {
    title:
      "Overview to route based on language / orchestration framework combo",
    href: "/orchestrator-overview",
  },
  "python-quickstart": {
    title: "Python Quickstart",
    href: "/python-quickstart",
  },
  "typescript-quickstart": {
    title: "Typescript Quickstart",
    href: "/typescript-quickstart",
  },
  langchain: {
    title: "LangGraph",
  },
  "oai-agents": {
    title: "OpenAI Agents",
  },
  crewai: {
    title: "CrewAI",
  },
  "open-agents": {
    title: "OpenAgents",
  },
  "google-adk": {
    title: "Google ADK",
  },
  mastra: {
    title: "Mastra",
  },
  vercelai: {
    title: "Vercel AI",
  },
  "-- Configuring Arcade with Observability Platforms": {
    type: "separator",
    title: "Configuring Arcade with Observability Platforms",
  },
  "observability-platforms": {
    title: "Observability Platforms",
  },
  "-- Scaling your app to many end-users": {
    type: "separator",
    title: "Scaling your app to many end-users",
  },
  "multi-user-auth": {
    title: "Set-up secure multi-user auth for your app",
    href: "/multi-user-auth",
  },
  "auth-providers": {
    title: "Customizing Auth",
  },
  "-- Hosting Options": {
    type: "separator",
    title: "Hosting Options",
  },
  "hosting-overview": {
    title: "Overview",
    href: "/hosting-overview",
  },
  "cloud-infrastructure": {
    title: "Using Arcade's Cloud Infrastructure",
    href: "/cloud-infrastructure",
  },
  "on-premise-mcp": {
    title: "Using On-premise MCP Servers",
    href: "/on-premise-mcp",
  },
  "engine-config": {
    title: "Engine configuration",
    href: "/engine-config",
  },
  "-- Security": {
    type: "separator",
    title: "Security",
  },
  "security-section": {
    title: "Security & Compliance",
  },
  "-- Guides": {
    type: "separator",
    title: "Guides",
  },
  glossary: {
    title: "Glossary",
  },
  faq: {
    title: "FAQ",
  },
  "connect-docs-ide": {
    title: "Connect Arcade Docs to Your IDE",
    href: "/connect-docs-ide",
  },
  changelog: {
    title: "Changelog",
  },
  "-- Tool Registry": {
    type: "separator",
    title: "Tool Registry",
  },
  "registry-early-access": {
    title: "Registry Early Access",
  },
  "-- Resources": {
    type: "separator",
    title: "Resources",
  },
  "contact-us": {
    title: <TitleWithIcon icon={BadgeHelp}>Contact us</TitleWithIcon>,
  },
  status: {
    title: <TitleWithIcon icon={HeartPulse}>Status</TitleWithIcon>,
    href: "https://status.arcade.dev/",
  },
};

export default meta;
