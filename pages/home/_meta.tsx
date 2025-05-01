import { BadgeHelp, Code2, Home, Plug } from "lucide-react";

export default {
  "*": {
    breadcrumb: true,
  },
  index: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Home className="size-4" />
        Home
      </span>
    ),
    theme: {
      layout: "full",
    },
  },
  learn: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Plug className="size-4" />
        Integrations
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
    target: "_blank",
  },

  "contact-us": {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <BadgeHelp className="size-4" />
        Contact us
      </span>
    ),
    href: "/contact-us",
    theme: {
      breadcrumb: false,
      pagination: false,
    },
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
  "use-tools": {
    title: "Tool Calling",
  },
  auth: {
    title: "Authorization",
  },
  mcp: {
    title: "MCP",
  },
  "-- Agent Frameworks": {
    type: "separator",
    title: "Agent Frameworks",
  },
  langchain: {
    title: "LangChain",
  },
  "oai-agents": {
    title: "OpenAI Agents",
  },
  crewai: {
    title: "CrewAI",
  },
  mastra: {
    title: "Mastra",
  },
  "-- Building Tools": {
    type: "separator",
    title: "Building Tools",
  },
  "custom-tools": {
    title: "Quickstart",
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
  "-- Self-Hosted": {
    type: "separator",
    title: "Self-hosting",
  },
  install: {
    title: "Install",
  },
  configure: {
    title: "Configure",
  },
  "supported-models": {
    title: "Model Providers",
  },
  "auth-providers": {
    title: "Auth Providers",
  },
};
