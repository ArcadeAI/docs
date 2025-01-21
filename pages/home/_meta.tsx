import { BookOpen, Code2, Home } from "lucide-react";

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
        <BookOpen className="size-4" />
        Learning Arcade
      </span>
    ),
    href: "/learn",
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

  "-- Getting Started": {
    type: "separator",
    title: "Using Arcade",
  },
  quickstart: {
    title: "Quickstart",
  },
  "use-tools": {
    title: "Tool Calling",
  },
  auth: {
    title: "Authorization",
  },
  "-- Agent Frameworks": {
    type: "separator",
    title: "Agent Frameworks",
  },
  langchain: {
    title: "LangChain",
  },
  langgraph: {
    title: "LangGraph",
  },
  crewai: {
    title: "CrewAI",
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
