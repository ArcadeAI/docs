import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      toc: true,
      copyPage: true,
    },
  },
  index: {
    title: "Overview",
  },
  cursor: {
    title: "Cursor",
  },
  "claude-desktop": {
    title: "Claude Desktop",
  },
  "claude-code": {
    title: "Claude Code",
  },
  "visual-studio-code": {
    title: "Visual Studio Code",
  },
  "copilot-studio": {
    title: "Microsoft Copilot Studio",
  },
};

export default meta;
