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
  overview: {
    title: "Overview",
  },
  examples: {
    title: "Examples",
  },
  transports: {
    title: "Transports",
  },
  server: {
    title: "Server",
  },
  middleware: {
    title: "Middleware",
  },
  types: {
    title: "Types",
  },
  errors: {
    title: "Errors",
  },
  settings: {
    title: "Settings",
  },
};

export default meta;
