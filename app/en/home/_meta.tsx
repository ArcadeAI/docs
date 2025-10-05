import { Home } from "lucide-react";
import type { MetaRecord } from "nextra";

export const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: true,
    },
  },
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
      copyPage: false,
    },
  },

  "-- Getting Started": {
    type: "separator",
    title: "Using Arcade",
  },
  "api-keys": {
    title: "Get an API key",
  },
  quickstart: {
    title: "Quickstart",
  },
  "-- Agent Frameworks and MCP": {
    type: "separator",
    title: "Agent Frameworks and MCP",
  },
  "agent-frameworks-overview": {
    title: "Overview",
  },
  "mcp-clients": {
    title: "MCP Clients",
  },
  "pydantic-ai": {
    title: "Pydantic AI",
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
  "oai-agents": {
    title: "OpenAI Agents",
  },
  "generic-python": {
    title: "Generic Python",
  },
  mastra: {
    title: "Mastra",
  },
  vercelai: {
    title: "Vercel AI",
  },
  "generic-typescript": {
    title: "Generic TypeScript",
  },
  cursor: {
    title: "Cursor",
  },
  chatgpt: {
    title: "ChatGPT",
  },
  n8n: {
    title: "n8n",
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
  "contact-us": {
    title: "Contact Us",
    href: "/contact-us",
  },
  "-- Registry": {
    type: "separator",
    title: "Registry",
  },
  "registry-early-access": {
    title: "Registry Early Access",
  },
};

export default meta;
