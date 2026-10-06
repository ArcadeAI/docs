import {
  type CalloutType,
  Callout as FumadocsCallout,
} from "fumadocs-ui/components/callout";
import type { ComponentProps, ReactNode } from "react";

/** The `type` values Nextra's `<Callout>` accepted. */
export type NextraCalloutType =
  | "default"
  | "info"
  | "warning"
  | "error"
  | "important";

const TYPE_MAP: Record<NextraCalloutType, CalloutType> = {
  default: "idea",
  error: "error",
  important: "warn",
  info: "info",
  warning: "warn",
};

export type CalloutProps = Omit<
  ComponentProps<typeof FumadocsCallout>,
  "type" | "icon"
> & {
  type?: NextraCalloutType | CalloutType;
  /** Nextra's custom icon prop; mapped to Fumadocs' `icon`. */
  emoji?: ReactNode;
  icon?: ReactNode;
};

function isNextraType(type: string): type is NextraCalloutType {
  return type in TYPE_MAP;
}

/**
 * Nextra-compatible `<Callout>`: accepts Nextra's `type`/`emoji` props and
 * renders the Fumadocs callout. Fumadocs' own type names also pass through.
 */
export function Callout({
  type = "default",
  emoji,
  icon,
  ...props
}: CalloutProps) {
  const resolvedType: CalloutType = isNextraType(type) ? TYPE_MAP[type] : type;
  const resolvedIcon = icon ?? emoji;
  return (
    <FumadocsCallout
      type={resolvedType}
      {...(resolvedIcon === undefined ? {} : { icon: resolvedIcon })}
      {...props}
    />
  );
}
