"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { ChevronRight } from "lucide-react";
import { type ComponentProps, useEffect, useRef } from "react";

/**
 * `<details>` drawn like Fumadocs' accordion. It stays the native element
 * rather than Fumadocs' `Accordion`, which leaves a closed body out of the
 * page: here the body is always in the HTML, so search indexes it and the
 * browser's find opens it. A link to an element inside opens it too.
 */
export function Details({
  className,
  children,
  ...props
}: ComponentProps<"details">) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function openForHash() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (ref.current && target && ref.current.contains(target)) {
        ref.current.open = true;
        target.scrollIntoView();
      }
    }
    openForHash();
    window.addEventListener("hashchange", openForHash);
    return () => window.removeEventListener("hashchange", openForHash);
  }, []);

  return (
    <details
      className={cn(
        "group/details my-4 overflow-hidden rounded-lg border bg-fd-card",
        "[&>:not(summary)]:mx-4 [&>:not(summary):last-child]:mb-4",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </details>
  );
}

/**
 * The title row. Its text is an `h3`, as it was on the Nextra site, so the
 * heading id (lib/remark-nextra-compat.ts) and the search records stay put.
 */
export function Summary({
  className,
  children,
  id,
  ...props
}: ComponentProps<"summary">) {
  return (
    <summary
      className={cn(
        "not-prose flex cursor-pointer list-none items-center gap-2 px-3 py-2.5",
        "font-medium text-fd-card-foreground hover:bg-fd-accent/50",
        "[&::-webkit-details-marker]:hidden",
        className
      )}
      {...props}
    >
      <ChevronRight
        aria-hidden="true"
        className="size-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 group-open/details:rotate-90"
      />
      <h3 className="font-medium text-sm" id={id}>
        {children}
      </h3>
    </summary>
  );
}
