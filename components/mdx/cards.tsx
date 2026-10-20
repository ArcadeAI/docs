import {
  Card as FumadocsCard,
  Cards as FumadocsCards,
} from "fumadocs-ui/components/card";
import type { ComponentProps, ReactNode } from "react";
import { source } from "@/lib/source";

export type CardsProps = ComponentProps<typeof FumadocsCards> & {
  /** Nextra's column count; Fumadocs' grid sizes itself to the page. */
  num?: number;
};

/**
 * Fumadocs' card grid. Left out of the search index, as the Nextra cards
 * were: each card repeats the title and description of the page it links to.
 */
export function Cards({ num: _num, ...props }: CardsProps) {
  return <FumadocsCards data-search-exclude="" {...props} />;
}

export type CardProps = Omit<ComponentProps<typeof FumadocsCard>, "title"> & {
  title: ReactNode;
  /** Nextra's hover arrow; Fumadocs cards show they are links on hover. */
  arrow?: boolean;
};

/**
 * The frontmatter description of the docs page a card links to, so a card
 * written with only a title still says where it leads.
 */
function describe(href: string | undefined): string | undefined {
  if (!href?.startsWith("/en/")) {
    return;
  }
  const [path = href] = href.split("#");
  return source.getPageByUrl(path)?.data.description;
}

/** Fumadocs' card, as `<Card>` or Nextra's `<Cards.Card>`. */
export function Card({ arrow: _arrow, description, ...props }: CardProps) {
  return (
    <FumadocsCard
      description={description ?? describe(props.href)}
      {...props}
    />
  );
}

Cards.Card = Card;
