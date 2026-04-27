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
  productivity: {
    title: "Productivity & Docs",
  },
  social: {
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
  "-- Feedback": {
    type: "separator",
    title: "Feedback",
  },
  "tool-feedback": {
    title: "Tool Feedback",
  },
};

export default meta;
