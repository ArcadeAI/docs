import { Code2, Home } from "lucide-react";

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
  "-- Introduction": {
    type: "separator",
    title: "Get started",
  },
  "-- Getting Started": {
    type: "separator",
    title: "Using Arcade",
    display: "hidden",
  },
  // "install-clients": "Quickstart",
  "use-tools": {
    title: "Call Arcade Tools",
    display: "hidden",
  },
  auth: {
    title: "Authorize Tools",
    display: "hidden",
  },
  frameworks: {
    title: "Integrations",
    display: "hidden",
  },
  "-- Building Custom Tools": {
    type: "separator",
    title: "Building Custom Tools",
    display: "hidden",
  },
  quickstart: {
    title: "Quickstart",
    display: "hidden",
  },
  "build-tools": {
    title: "Build tools",
    display: "hidden",
  },
  "evaluate-tools": {
    title: "Evaluate tools",
    display: "hidden",
  },
  "serve-tools": {
    title: "Serve tools",
    display: "hidden",
  },
  "-- Self-Hosted": {
    type: "separator",
    title: "Self-hosting",
    display: "hidden",
  },
  install: {
    title: "Install",
    display: "hidden",
  },
  // "deploy": "Deploy",
  configure: {
    title: "Configure",
    display: "hidden",
  },
  integrations: {
    type: "separator",
    title: "Integrations",
    display: "hidden",
  },
};
