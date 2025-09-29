import { BadgeHelp, Code2, Home, Plug } from "lucide-react";
import type { MetaRecord } from "nextra";

export const meta: MetaRecord = {
  index: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Home className="size-4" />
        Home
      </span>
    ),
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
    },
  },
  learn: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Plug className="size-4" />
        Toolkits
      </span>
    ),
    href: "/toolkits",
  },
  reference: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Code2 className="size-4" />
        API Reference
      </span>
    ),
    href: "https://reference.arcade.dev/",
  },
  "contact-us": {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <BadgeHelp className="size-4" />
        Contact us
      </span>
    ),
    href: "/contact-us",
    // theme: {
    //   breadcrumb: false,
    //   pagination: false,
    // },
  },

  "-- Getting Started": {
    type: "separator",
    title: "Using Arcade",
  },
  quickstart: {
    title: "Quickstart",
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
  "-- Agent Frameworks": {
    type: "separator",
    title: "Agent Frameworks",
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
  "-- MCP": {
    type: "separator",
    title: "MCP",
  },
  "mcp-overview": {
    title: "MCP Overview",
  },
  "mcp-desktop-clients": {
    title: "IDEs and desktop clients",
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
  "arcade-cli": {
    title: "Arcade CLI",
  },
  "arcade-clients": {
    title: "Arcade Clients",
  },
  "-- Hosting options": {
    type: "separator",
    title: "Hosting options",
  },
  "hosting-overview": {
    title: "Overview",
  },
  "hybrid-deployment": {
    title: "Hybrid Deployment",
  },
  "local-deployment": {
    title: "Local Deployment",
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
  "migrate-to-v2": {
    display: "hidden",
  },
};

export default meta;
