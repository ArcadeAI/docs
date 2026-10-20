"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { CopyCheckIcon, LinkIcon } from "lucide-react";
import type { ComponentProps } from "react";

type HeadingProps = ComponentProps<"h2"> & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

/**
 * Fumadocs' heading (the text links to the heading, an icon on hover copies
 * the link), with two differences:
 *
 * - the copy button has no text and is hidden from assistive technology, so
 *   the heading's name, and the search record built from it, is its own text
 *   ("Install the CLI", not "Install the CLI Copy Anchor Link"). The text
 *   link is the keyboard way to the address;
 * - no scroll margin of its own: the site-wide `scroll-padding-top` in
 *   app/global.css keeps a heading clear of the navbar, and the two would
 *   add up.
 */
export function Heading({
  as: As,
  className,
  children,
  ...props
}: HeadingProps) {
  const { id } = props;
  const [copied, onCopy] = useCopyButton(() => {
    if (!id) {
      return;
    }
    const url = new URL(window.location.href);
    url.hash = id;
    return navigator.clipboard.writeText(url.href);
  });

  if (!id) {
    return (
      <As className={className} {...props}>
        {children}
      </As>
    );
  }

  return (
    <As
      className={cn(
        "group/heading flex flex-row items-center gap-1",
        className
      )}
      {...props}
    >
      <a data-card="" href={`#${id}`}>
        {children}
      </a>
      <button
        aria-hidden="true"
        className="not-prose inline-flex shrink-0 items-center justify-center rounded-md p-1 text-fd-muted-foreground opacity-0 transition-opacity hover:bg-fd-accent hover:text-fd-accent-foreground group-hover/heading:opacity-100 [&_svg]:size-4"
        onClick={onCopy}
        tabIndex={-1}
        type="button"
      >
        {copied ? <CopyCheckIcon /> : <LinkIcon />}
      </button>
    </As>
  );
}
