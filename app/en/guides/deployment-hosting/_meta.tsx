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
  "arcade-cloud": {
    title: "Arcade Cloud",
  },
  azure: {
    title: "Azure Marketplace",
  },
  aws: {
    title: "AWS Marketplace",
  },
  gcp: {
    title: "GCP (coming soon)",
  },
  helm: {
    title: "Self-host with Helm",
  },
  "on-prem": {
    title: "Hybrid MCP servers",
  },
  "warp-pipes": {
    title: "Warp Pipes",
    display: "hidden",
  },
  "arcade-deploy": {
    title: "Arcade Deploy",
  },
};

export default meta;
