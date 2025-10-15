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
  "-- Getting Started": {
    type: "separator",
    title: "Using Arcade",
  },
  quickstart: {
    title: "Hosted Tools Quickstart",
  },
  "api-keys": {
    title: "Get an API key",
  },
  "-- Authoring Tools": {
    type: "separator",
    title: "Authoring Tools",
  },
  "build-tools": {
    title: "Build tools",
  },
  "evaluate-tools": {
    title: "Evaluate tools",
  },
  "serve-tools": {
    title: "Serve tools",
  },
  "-- Agent Frameworks and MCP": {
    type: "separator",
    title: "Agent Frameworks and MCP",
  },
  "mcp-clients": {
    title: "MCP Clients",
  },
  langchain: {
    title: "LangChain",
  },
  crewai: {
    title: "CrewAI",
  },
  "google-adk": {
    title: "Google ADK",
  },
  mastra: {
    title: "Mastra",
  },
  "oai-agents": {
    title: "OpenAI Agents",
  },
  vercelai: {
    title: "Vercel AI",
  },
  "-- Core Concepts": {
    type: "separator",
    title: "Core Concepts",
  },
  "use-tools": {
    title: "Tool Calling",
  },
  auth: {
    title: "Authorization",
  },
  "mcp-gateways": {
    title: "MCP Gateways",
  },
  "arcade-cli": {
    title: "Arcade CLI",
  },
  "-- Hosting options": {
    type: "separator",
    title: "Hosting options",
  },
  "hosting-overview": {
    title: "Overview",
  },
  deployment: {
    title: "Deployment",
  },
  "auth-providers": {
    title: "Customizing Auth",
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
  "agentic-development": {
    title: "Agentic Development",
  },
  changelog: {
    title: "Changelog",
  },
  "-- Registry": {
    type: "separator",
    title: "Registry",
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
    href: "/contact-us",
  },
  status: {
    title: <TitleWithIcon icon={HeartPulse}>Status</TitleWithIcon>,
    href: "https://status.arcade.dev/",
  },
};

export default meta;
