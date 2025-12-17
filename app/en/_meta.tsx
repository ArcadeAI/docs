import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: false,
    },
  },
  // 1.0 Home Section
  home: {
    type: "page",
    title: "Docs",
    href: "/home",
  },
  // MCP Servers Section
  "mcp-servers": {
    type: "page",
    title: "Integrations",
    href: "/mcp-servers",
  },
  // API & SDKs Section
  references: {
    type: "page",
    title: "API & SDKs",
    href: "/references",
  },
};

export default meta;
