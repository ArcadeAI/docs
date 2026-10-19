import NextLink from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon, LinkArrowIcon, LinkIcon } from "./icons";

/**
 * The Markdown element renderers of the Nextra docs theme (nextra-theme-docs
 * 4.6 `useMDXComponents`), ported class for class. The production site was
 * built on them, so headings, paragraphs, lists, links, tables, inline code,
 * blockquotes and rules keep the exact sizes, margins and colours. Nextra's
 * `x:`-prefixed Tailwind classes are the same utilities without the prefix;
 * its named classes (`nextra-code`, `subheading-anchor`, …) are defined in the
 * "content parity" block of app/global.css.
 */

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

const EXTERNAL_URL_RE = /^https?:\/\//;

export const FOCUS = "focus-visible:nextra-focus";

/** Nextra `classes.border` from its `Pre` component. */
export const CODE_BORDER =
  "border border-gray-300 dark:border-neutral-700 contrast-more:border-gray-900 contrast-more:dark:border-gray-50";

/* ------------------------------------------------------------------ Links */

type AnchorProps = ComponentProps<"a"> & { prefetch?: boolean };

export function Anchor({ href = "", prefetch, ...rest }: AnchorProps) {
  const props = { ...rest, className: cx(FOCUS, rest.className) };
  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }
  if (EXTERNAL_URL_RE.test(href)) {
    const { children } = props;
    return (
      <a href={href} rel="noreferrer" target="_blank" {...props}>
        {children}
        {typeof children === "string" ? (
          <>
            {" "}
            <LinkArrowIcon
              className="inline shrink-0 align-baseline"
              height="1em"
            />
          </>
        ) : null}
      </a>
    );
  }
  return <NextLink href={href} prefetch={prefetch} {...props} />;
}

export function Link({ className, ...props }: AnchorProps) {
  return (
    <Anchor
      className={cx(
        "text-(--x-color-primary-600) underline decoration-from-font [text-underline-position:from-font] hover:no-underline",
        className
      )}
      {...props}
    />
  );
}

/* --------------------------------------------------------------- Headings */

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const HEADING_SIZE: Record<HeadingTag, string> = {
  h1: "mt-2 text-4xl",
  h2: "nextra-border mt-10 border-b pb-1 text-3xl",
  h3: "mt-8 text-2xl",
  h4: "mt-8 text-xl",
  h5: "mt-8 text-lg",
  h6: "mt-8 text-base",
};

function createHeading(Tag: HeadingTag) {
  return function Heading({
    children,
    id,
    className,
    ...props
  }: ComponentProps<"h2">) {
    const classes =
      // can be added by footnotes
      className === "sr-only"
        ? "sr-only"
        : cx(
            "text-slate-900 tracking-tight dark:text-slate-100",
            Tag === "h1"
              ? "font-bold"
              : "font-semibold target:animate-[fade-in_1.5s]",
            HEADING_SIZE[Tag],
            className
          );
    // The "#" is drawn by `.subheading-anchor::after`, as in Nextra, so the
    // heading's own text stays free of it.
    const anchorProps = {
      "aria-label": "Permalink for this section",
      className: cx(FOCUS, "subheading-anchor"),
      href: `#${id}`,
    };
    return (
      <Tag className={classes} id={id} {...props}>
        {children}
        {id ? <a {...anchorProps} /> : null}
      </Tag>
    );
  };
}

export const H1 = createHeading("h1");
export const H2 = createHeading("h2");
export const H3 = createHeading("h3");
export const H4 = createHeading("h4");
export const H5 = createHeading("h5");
export const H6 = createHeading("h6");

/* ------------------------------------------------------------ Flow content */

export function Paragraph(props: ComponentProps<"p">) {
  return <p className="not-first:mt-[1.25em] leading-7" {...props} />;
}

export function UnorderedList(props: ComponentProps<"ul">) {
  return (
    <ul
      className="ms-[1.5em] not-first:mt-[1.25em] list-disc [:is(ol,ul)_&]:my-[.75em]"
      {...props}
    />
  );
}

export function OrderedList(props: ComponentProps<"ol">) {
  return (
    <ol
      className="ms-6 not-first:mt-[1.25em] list-decimal [:is(ol,ul)_&]:my-[.75em]"
      {...props}
    />
  );
}

export function ListItem(props: ComponentProps<"li">) {
  return <li className="my-[.5em]" {...props} />;
}

export function Blockquote(props: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className="not-first:mt-[1.25em] border-gray-300 border-s-2 ps-[1.5em] text-gray-700 italic dark:border-gray-700 dark:text-gray-400"
      {...props}
    />
  );
}

export function Rule(props: ComponentProps<"hr">) {
  return <hr className="nextra-border my-[2em]" {...props} />;
}

type CodeProps = ComponentProps<"code"> & { "data-language"?: string };

export function Code({
  children,
  className,
  "data-language": _language,
  ...props
}: CodeProps) {
  return (
    <code
      className={cx(
        "nextra-code",
        "data-line-numbers" in props && "[counter-reset:line]",
        className
      )}
      dir="ltr"
      {...props}
    >
      {children}
    </code>
  );
}

/* ------------------------------------------------------------------ Tables */

export function Table({ className, ...props }: ComponentProps<"table">) {
  return (
    <table
      {...props}
      className={cx(
        "block overflow-x-auto",
        "nextra-scrollbar not-first:mt-[1.25em] p-0",
        className
      )}
    />
  );
}

export function Th({ className, ...props }: ComponentProps<"th">) {
  return (
    <th
      {...props}
      className={cx(
        "m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600",
        className
      )}
    />
  );
}

export function Tr({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      {...props}
      className={cx(
        "m-0 border-gray-300 border-t p-0 dark:border-gray-600",
        "even:bg-gray-100 even:dark:bg-gray-600/20",
        className
      )}
    />
  );
}

export function Td({ className, ...props }: ComponentProps<"td">) {
  return (
    <td
      {...props}
      className={cx(
        "m-0 border border-gray-300 px-4 py-2 dark:border-gray-600",
        className
      )}
    />
  );
}

/** Nextra's `<Table>` component, with its `Table.Tr`, `Table.Th` and `Table.Td` parts. */
export const TableWithParts = Object.assign(Table, { Td, Th, Tr });

/* ----------------------------------------------------------------- Summary */

export function Summary({
  children,
  className,
  id,
  ...props
}: ComponentProps<"summary">) {
  return (
    <summary
      className={cx(
        FOCUS,
        "cursor-pointer transition-colors",
        "hover:bg-gray-100 dark:hover:bg-neutral-800",
        "select-none rounded-[.25rem]",
        "[&::-webkit-details-marker]:hidden",
        "flex items-center",
        className
      )}
      {...props}
    >
      <ArrowRightIcon
        className={cx(
          "ms-2 me-1 shrink-0 motion-reduce:transition-none",
          "transition rtl:rotate-180 [[data-expanded]>summary:first-child>&]:rotate-90"
        )}
        height="1em"
        strokeWidth="3"
      />
      <h3 className="grow hyphens-auto p-1" id={id}>
        {children}
      </h3>
      {id ? (
        <a
          aria-label="Permalink for this section"
          className={cx(
            "self-stretch",
            "flex items-center",
            "rounded-[.25rem] px-2 focus-visible:nextra-focus",
            "hover:bg-gray-100 dark:hover:bg-neutral-800",
            "hover:[summary:has(&)]:bg-transparent"
          )}
          href={`#${id}`}
        >
          <LinkIcon className="pointer-events-none" height="1em" />
        </a>
      ) : null}
    </summary>
  );
}

/* ----------------------------------------------------------------- Wrapper */

/**
 * Wraps the whole MDX body. `not-prose` switches off the Fumadocs typography
 * preset inside it, so the Nextra element classes above are the only styling,
 * as in production. The colour and font features are those of Nextra's
 * `<article>`.
 */
export function Wrapper({ children }: { children?: ReactNode }) {
  return (
    <div className="nextra-content not-prose w-full min-w-0 break-words text-slate-700 dark:text-slate-200">
      {children}
    </div>
  );
}
