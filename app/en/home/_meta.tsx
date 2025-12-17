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
  "common-use-cases": "Common use cases",
  "example-agents": "Example agents",
  toolkits: {
    title: "Toolkits",
    href: "/en/mcp-servers",
  },
  glossary: "Glossary",
  faq: "FAQ",
  "changelog-page": "Changelog",
  "-- Guides": {
    type: "separator",
    title: "Guides",
  },
  "configure-arcade-section": "Configure Arcade",
  "calling-tools": "Call tools",
  "creating-tools": "Create tools",
  "agent-frameworks": "Agent frameworks",
  "sharing-with-end-users": "Share your agent with end-users",
  observability: "Observability",
  "deployment-hosting": "Deployment and hosting",
  "security-section": "Security and compliance",
  "-- Learn": {
    type: "separator",
    title: "Learn",
  },
  "what-is-agent": "What's an agent",
  "auth-and-secrets": "How do auth and secrets work",
  "agentic-architecture": "Agentic architectures & workflows",
  "-- Reference": {
    type: "separator",
    title: "Reference",
  },
  api: "API",
  "arcade-mcp": "Arcade MCP (MCP server SDK)",
  "arcade-clients": "Arcade clients",
  "auth-providers": "Auth Providers",
  // Hide auto-discovered directories
  "api-keys": {
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
