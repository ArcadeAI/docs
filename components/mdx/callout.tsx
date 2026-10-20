import { Callout as FumadocsCallout } from "fumadocs-ui/components/callout";
import type { ComponentProps, ReactNode } from "react";

/** The `type` values the MDX pages use (Nextra's names). */
export type CalloutType =
  | "default"
  | "info"
  | "warning"
  | "error"
  | "important";

type FumadocsCalloutType = NonNullable<
  ComponentProps<typeof FumadocsCallout>["type"]
>;

/** Fumadocs has no "important"; it is a heads-up, like a warning. */
const FUMADOCS_TYPE: Record<CalloutType, FumadocsCalloutType> = {
  default: "idea",
  error: "error",
  important: "warning",
  info: "info",
  warning: "warning",
};

export type CalloutProps = Omit<
  ComponentProps<typeof FumadocsCallout>,
  "type"
> & {
  type?: CalloutType | null;
  /** Nextra's name for a custom icon. */
  emoji?: ReactNode;
};

/**
 * Fumadocs' callout, taking the `type` names and `emoji` prop the MDX pages
 * were written with.
 */
export function Callout({ type, emoji, icon, ...props }: CalloutProps) {
  return (
    <FumadocsCallout
      icon={icon ?? emoji}
      type={FUMADOCS_TYPE[type ?? "default"]}
      {...props}
    />
  );
}
