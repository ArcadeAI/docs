import type { Toolkit } from "@arcadeai/design-system";

/**
 * Toolkit with optional `docsLink` and `isPartner` properties.
 * The design-system `Toolkit` type doesn't include either field, but some
 * docs-local entries carry them at runtime (e.g. partner toolkits that
 * render a Partner badge on cards). This type makes the properties explicit
 * so both server and client code can share it.
 */
export type ToolkitWithDocsLink = Toolkit & {
  docsLink?: string | null;
  isPartner?: boolean;
};
