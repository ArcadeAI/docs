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
  "auth-tool-calling": {
    title: "Authorize tool calling",
  },
  "pre-authorize-tools": {
    title: "Pre-authorize tools",
  },
  "check-auth-status": {
    title: "Check authorization status",
  },
  "get-tool-definitions": {
    title: "Get formatted tool definitions",
  },
};

export default meta;
