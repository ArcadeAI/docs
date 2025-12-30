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
    theme: {
      toc: false,
      copyPage: false,
    },
  },
  "contribute-a-server": {
    title: "Contribute a Server",
  },
  productivity: {
    title: "Productivity & Docs",
  },
  "social-communication": {
    title: "Social & Communication",
  },
  entertainment: {
    title: "Entertainment",
  },
  development: {
    title: "Developer Tools",
  },
  payments: {
    title: "Payments & Finance",
  },
  search: {
    title: "Search Tools",
  },
  sales: {
    title: "Sales",
  },
  databases: {
    title: "Databases",
  },
  "customer-support": {
    title: "Customer Support",
  },
  "-- Submit your Server": {
    type: "separator",
    title: "Submit your Server",
  },
};

export default meta;
