import { cn } from "@arcadeai/design-system/lib/utils";
import type { ComponentProps } from "react";

/**
 * Fumadocs' steps, numbering the `##` and `###` headings inside, so the MDX
 * keeps its Nextra form (headings, no `<Step>` wrappers). The hidden tab-label
 * headings (lib/remark-nextra-compat.ts) carry a `style` and are skipped.
 */
export function Steps({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("fd-steps [&_:is(h2,h3):not([style])]:fd-step", className)}
      {...props}
    />
  );
}

/** Kept for MDX that wraps a step explicitly; renders its children as-is. */
export function Step({ children }: ComponentProps<"div">) {
  return <>{children}</>;
}
