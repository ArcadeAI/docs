import type { MetaRecord } from "nextra";

// Nest the outcome buckets under "Examples" in the sidebar. Each is a link to
// the matching section anchor on the gallery page (ids set by `levelId` in
// examples-gallery.tsx). The parent "Examples" still opens the full gallery.
const meta: MetaRecord = {
  index: {
    title: "Overview",
  },
  connect: {
    title: "Connect",
    href: "/en/resources/examples#level-connect",
  },
  automate: {
    title: "Automate",
    href: "/en/resources/examples#level-automate",
  },
  orchestrate: {
    title: "Orchestrate",
    href: "/en/resources/examples#level-orchestrate",
  },
};

export default meta;
