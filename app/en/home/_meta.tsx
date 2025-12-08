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
  "-- Updates": {
    type: "separator",
    title: "Updates",
  },
  "status-page": "Status",
  "changelog-page": "Changelog",
  blog: "Blog",
  "-- Get Started": {
    type: "separator",
    title: "Get Started",
  },
  setup: "Setup",
  quickstarts: "Quickstarts",
  "-- Build": {
    type: "separator",
    title: "Build",
  },
  "using-tools": "Using tools",
  "creating-tools": "Creating tools",
  orchestrators: "Orchestrators",
  scaling: "Scaling",
  "agentic-architecture": "Agentic Architecture & Workflows",
  examples: "Examples (tutorials and sample code)",
  "deployment-hosting": "Deployment and Hosting",
  security: "Security",
  "-- Learn": {
    type: "separator",
    title: "Learn",
  },
  "what-is-agent": "What's an agent?",
  "why-agents-call-tools": "Why and how do agents call tools?",
  "auth-and-secrets": "How do auth and secrets work?",
  "-- APIs & SDKs": {
    type: "separator",
    title: "APIs & SDKs",
  },
  api: "API",
  "arcade-mcp": "Arcade MCP",
  "arcade-clients": "Arcade Clients",
  "-- Resources": {
    type: "separator",
    title: "Resources",
  },
  glossary: "Glossary",
  faq: "FAQ",
  concepts: "Concepts",
  // Hide auto-discovered directories
  "api-keys": {
    display: "hidden",
  },
  "auth-providers": {
    display: "hidden",
  },
  "calling-tools-custom-apps": {
    display: "hidden",
  },
  changelog: {
    display: "hidden",
  },
  "configure-arcade-section": {
    display: "hidden",
  },
  "contact-us": {
    display: "hidden",
  },
  crewai: {
    display: "hidden",
  },
  "custom-apps": {
    display: "hidden",
  },
  "google-adk": {
    display: "hidden",
  },
  "hosting-overview": {
    display: "hidden",
  },
  "improve-performance": {
    display: "hidden",
  },
  langchain: {
    display: "hidden",
  },
  mastra: {
    display: "hidden",
  },
  "mcp-clients": {
    display: "hidden",
  },
  "mcp-gateway-quickstart": {
    display: "hidden",
  },
  "new-functionality": {
    display: "hidden",
  },
  "newest-models": {
    display: "hidden",
  },
  "oai-agents": {
    display: "hidden",
  },
  "observability-platforms": {
    display: "hidden",
  },
  "open-agents": {
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
  "security-section": {
    display: "hidden",
  },
  "third-party-apps": {
    display: "hidden",
  },
  "tool-calling-intro": {
    display: "hidden",
  },
  "tool-writing-basics": {
    display: "hidden",
  },
  "tool-writing-reference": {
    display: "hidden",
  },
  "triggers-section": {
    display: "hidden",
  },
  vercelai: {
    display: "hidden",
  },
  guides: {
    display: "hidden",
  },
};

export default meta;
