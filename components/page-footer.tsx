"use client";

import {
  type FooterProps,
  PageFooter as FumadocsPageFooter,
} from "fumadocs-ui/layouts/notebook/page";

/**
 * Fumadocs' previous/next links, marked so the search crawler skips them
 * (algolia/crawler-config.js): their titles and descriptions belong to the
 * neighbouring pages, not to this one.
 */
export function PageFooter(props: FooterProps) {
  return (
    <div data-search-exclude="">
      <FumadocsPageFooter {...props} />
    </div>
  );
}
