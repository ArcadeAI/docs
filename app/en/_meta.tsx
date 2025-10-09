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
  reference: {
    type: "page",
    title: "Reference",
    href: "/home/reference",
  },
};

export default meta;
