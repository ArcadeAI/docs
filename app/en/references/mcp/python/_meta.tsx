import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      layout: "full",
      toc: true,
      copyPage: true,
    },
  },
  index: {
    title: "Overview",
  },
  context: {
    title: "Context",
  },
  server: {
    title: "Server",
  },
  settings: {
    title: "Settings",
  },
  middleware: {
    title: "Middleware",
  },
  errors: {
    title: "Errors",
  },
};

export default meta;
