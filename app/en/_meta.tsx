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
    href: "https://reference.arcade.dev/",
  },
  status: {
    type: "page",
    title: "Status",
    href: "https://status.arcade.dev/",
  },
};

export default meta;
