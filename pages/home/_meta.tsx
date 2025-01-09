import { Code2, Home, BookOpen } from "lucide-react";

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
    href: "https://reference.arcade-ai.com/",
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
    title: "Call Arcade Tools",
  },
  auth: {
    title: "Authorize Tools",
  },
  frameworks: {
    title: "Integrations",
  },
  "-- Building Custom Tools": {
    type: "separator",
    title: "Building Custom Tools",
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
  "-- Integrations": {
    type: "separator",
    title: "Integrations",
  },
  integrations: {
    title: "Overview",
  },
  toolkits: {
    title: "Toolkits",
  },
  "auth-providers": {
    title: "Auth Providers",
  },
  "supported-models": {
    title: "Supported Models",
  },
};
