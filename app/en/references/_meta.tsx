import type { MetaRecord } from "nextra";

export const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  index: {
    title: "Reference Index",
  },
  api: {
    title: "API",
  },
  mcp: {
    title: "Arcade MCP",
  },
  "cli-cheat-sheet": {
    title: "CLI Cheat Sheet",
  },
};

export default meta;
