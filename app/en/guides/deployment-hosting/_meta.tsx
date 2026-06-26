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
  "on-prem": {
    title: "On-premises MCP servers",
  },
  "warp-pipes": {
    title: "Warp Pipes",
    display: "hidden",
  },
  "configure-engine": {
    title: "Configure Arcade's engine",
  },
  "arcade-deploy": {
    title: "Arcade Deploy",
  },
};

export default meta;
