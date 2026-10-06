import {
  Card as FumadocsCard,
  type CardProps as FumadocsCardProps,
  Cards as FumadocsCards,
} from "fumadocs-ui/components/card";
import type { HTMLAttributes, ReactNode } from "react";

export type CardsProps = HTMLAttributes<HTMLDivElement> & {
  /** Nextra's column count hint; Fumadocs lays cards out responsively. */
  num?: number;
};

/** Nextra-compatible `<Cards>` grid. */
export function Cards({ num: _num, ...props }: CardsProps) {
  return <FumadocsCards {...props} />;
}

export type CardProps = Omit<FumadocsCardProps, "title" | "href"> & {
  title: ReactNode;
  href: string;
  icon?: ReactNode;
  /** Nextra showed an arrow on hover; Fumadocs cards always indicate links. */
  arrow?: boolean;
  /** Nextra allowed an image above the card body. */
  image?: boolean;
};

/** `<Cards.Card>` in Nextra. */
export function Card({
  arrow: _arrow,
  image: _image,
  children,
  description,
  ...props
}: CardProps) {
  return (
    <FumadocsCard description={description ?? children} {...props}>
      {description ? children : null}
    </FumadocsCard>
  );
}

Cards.Card = Card;
