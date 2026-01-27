import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      // Preview pages are dynamic/client-rendered.
      // We render breadcrumb + "On this page" ourselves to match existing layouts.
      breadcrumb: false,
      toc: false,
      copyPage: true,
    },
  },
};

export default meta;
