import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: false,
    },
  },
  home: {
    type: "page",
    title: "Home",
    href: "/get-started",
  },
  "mcp-servers": {
    type: "page",
    title: "MCP Servers",
    href: "/mcp-servers",
  },
  clients: {
    type: "page",
    title: "Clients",
    href: "/home/arcade-clients",
  },
  reference: {
    type: "page",
    title: "API Reference",
    href: "/home/references",
  },
};

export default meta;
