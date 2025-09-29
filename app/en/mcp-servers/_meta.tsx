import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      toc: true,
    },
  },
  index: {
    title: "Overview",
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
    },
  },
  "-- Categories": {
    type: "separator",
    title: "Categories",
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
  "-- Submit your toolkit": {
    type: "separator",
    title: "Submit your toolkit",
  },
  "contribute-a-toolkit": {
    title: "Contribute a toolkit",
  },
  "community-toolkit-template": {
    display: "hidden",
  },
};

export default meta;
