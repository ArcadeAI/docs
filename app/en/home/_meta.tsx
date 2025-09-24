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
    type: "page",
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
  "getting-started": {
    type: "separator",
    title: "Using Arcade",
  },
  "authoring-tools": {
    type: "separator",
    title: "Authoring Tools",
  },
  "agent-frameworks": {
    type: "separator",
    title: "Agent Frameworks",
  },
  mcp: {
    type: "separator",
    title: "MCP",
  },
  "core-concepts": {
    type: "separator",
    title: "Core Concepts",
  },
  "hosting-options": {
    type: "separator",
    title: "Hosting options",
  },
  guides: {
    type: "separator",
    title: "Guides",
  },
  registry: {
    type: "separator",
    title: "Registry",
  },
};

export default meta;
