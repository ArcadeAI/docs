import NextLink from "next/link";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { cx } from "./elements";

export type CardProps = Omit<ComponentProps<typeof NextLink>, "title"> & {
  title: ReactNode;
  icon?: ReactNode;
  arrow?: boolean;
};

/** Nextra's `<Cards.Card>` (nextra/components), ported class for class. */
export function Card({
  children,
  title,
  icon,
  arrow,
  href,
  className,
  ...props
}: CardProps) {
  return (
    <NextLink
      className={cx(
        "group",
        "nextra-card flex flex-col justify-start overflow-hidden rounded-[.5rem] border border-gray-200 focus-visible:nextra-focus",
        "text-current no-underline dark:shadow-none",
        "shadow-gray-100 hover:shadow-gray-100 dark:hover:shadow-none",
        "active:shadow-gray-200 active:shadow-sm",
        "transition-all duration-200 hover:border-gray-300",
        children
          ? "bg-gray-100 shadow hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:hover:border-neutral-500 dark:hover:bg-neutral-700"
          : "bg-transparent shadow-sm hover:bg-slate-50 hover:shadow-md dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-900",
        className
      )}
      href={href}
      {...props}
    >
      {children}
      <span
        className={cx(
          "flex items-center gap-2 p-4 font-semibold text-gray-700 hover:text-gray-900",
          arrow &&
            'after:transition-transform after:duration-75 after:content-["→"] group-hover:after:translate-x-0.5 group-focus:after:translate-x-0.5',
          children
            ? "dark:text-gray-300 dark:hover:text-gray-100"
            : "dark:text-neutral-200 dark:hover:text-neutral-50"
        )}
        title={typeof title === "string" ? title : undefined}
      >
        {icon}
        <span className="_truncate">{title}</span>
      </span>
    </NextLink>
  );
}

export type CardsProps = ComponentProps<"div"> & {
  /** Maximum number of columns. */
  num?: number;
};

/** Nextra's `<Cards>` grid. */
export function Cards({
  children,
  num = 3,
  className,
  style,
  ...props
}: CardsProps) {
  return (
    <div
      className={cx("nextra-cards mt-4 grid gap-4", "not-prose", className)}
      {...props}
      style={{ ...style, "--rows": num } as CSSProperties}
    >
      {children}
    </div>
  );
}

Cards.Card = Card;
