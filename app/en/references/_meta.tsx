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
    display: "hidden",
  },
};

export default meta;
