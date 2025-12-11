import { Home } from "lucide-react";
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
  index: {
    title: <TitleWithIcon icon={Home}>Home</TitleWithIcon>,
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  "-- Get Started": {
    type: "separator",
    title: "Get Started",
  },
  "about-arcade": "About Arcade",
  setup: "Setup",
  quickstarts: "Quickstarts",
  "common-use-cases": "Common Use Cases",
  glossary: "Glossary",
  faq: "FAQ",
  "-- Example agents": {
    type: "separator",
    title: "Example agents",
  },
  "confluence-jira-example":
    "Turn Confluence into Jira Tickets/Turn Google doc into Linear Tickets",
  "daily-digest-example":
    "Daily Digest: Summarize your Google Calendar / Email stuffs",
  "-- Guides": {
    type: "separator",
    title: "Guides",
  },
  "configure-arcade-section": "Configure Arcade",
  "calling-tools": "Calling tools",
  "creating-tools": "Creating tools",
  "agent-frameworks": "Agent Frameworks",
  "sharing-with-end-users": "Sharing your agent with end-users",
  "observability-platforms": "Observability Platforms",
  "deployment-hosting": "Deployment and Hosting",
  "security-section": "Security and Compliance",
  "-- Learn": {
    type: "separator",
    title: "Learn",
  },
  "what-is-agent": "What's an agent?",
  "auth-and-secrets": "How do auth and secrets work?",
  "agentic-architecture": "Agentic Architectures & Workflows",
  "-- Updates": {
    type: "separator",
    title: "Updates",
  },
  "status-page": {
    title: "Status",
    href: "https://status.arcade.dev",
  },
  "changelog-page": "Changelog",
  blog: {
    title: "Blog",
    href: "https://blog.arcade.dev",
  },
  "-- APIs & SDKs": {
    type: "separator",
    title: "APIs & SDKs",
  },
  api: "API",
  "arcade-mcp": "Arcade MCP (MCP Server SDK)",
  "arcade-clients": "Arcade Clients",
  // Hide auto-discovered directories
  "api-keys": {
    display: "hidden",
  },
  "auth-providers": {
    display: "hidden",
  },
  changelog: {
    display: "hidden",
  },
  "contact-us": {
    display: "hidden",
  },
  "hosting-overview": {
    display: "hidden",
  },
  "mcp-clients": {
    display: "hidden",
  },
  "mcp-gateway-quickstart": {
    display: "hidden",
  },
  "python-quickstart": {
    display: "hidden",
  },
  "registry-early-access": {
    display: "hidden",
  },
  "sample-agents": {
    display: "hidden",
  },
  "tool-calling-intro": {
    display: "hidden",
  },
  guides: {
    display: "hidden",
  },
  "add-external-mcp": {
    display: "hidden",
  },
  "build-custom-mcp": {
    display: "hidden",
  },
  concepts: {
    display: "hidden",
  },
  examples: {
    display: "hidden",
  },
  security: {
    display: "hidden",
  },
  "turn-api-to-mcp": {
    display: "hidden",
  },
  "why-agents-call-tools": {
    display: "hidden",
  },
};

export default meta;
