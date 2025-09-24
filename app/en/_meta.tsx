import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: false,
    },
  },
  home: {
    type: "page",
    title: "Home",
    href: "/get-started",
  },
  toolkits: {
    type: "page",
    title: "Toolkits",
    href: "/toolkits",
  },
  reference: {
    type: "page",
    title: "Reference",
    href: "https://reference.arcade.dev/",
  },
  status: {
    type: "page",
    title: "Status",
    href: "https://status.arcade.dev/",
  },
};

export default meta;
