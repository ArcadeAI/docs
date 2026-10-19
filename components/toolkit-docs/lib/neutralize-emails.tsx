import type { Element, Root, Text } from "hast";
import { Fragment, type ReactNode } from "react";
import { visit } from "unist-util-visit";

/**
 * Matches the email-like text runs that Cloudflare's Email Obfuscation (Scrape
 * Shield) rewrites into a `/cdn-cgi/l/email-protection` link — which 404s for
 * crawlers and shows up in Ahrefs as "links to broken page". Mirrors
 * Cloudflare's own detection: a local part, `@`, then a dotted domain with a
 * TLD. Covers example emails and `user:password@host.tld` connection strings.
 */
const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

/** Offsets of each `@` that sits inside an email-like run. */
function atBreakOffsets(text: string): number[] {
  const breaks: number[] = [];
  for (const match of text.matchAll(EMAIL_RE)) {
    const start = match.index ?? 0;
    breaks.push(start + match[0].indexOf("@"));
  }
  return breaks;
}

/**
 * Render `text`, inserting a zero-width `<wbr>` immediately before the `@` of
 * any email-like run. `<wbr>` is invisible and excluded from copied text, so the
 * displayed and copied value is unchanged — but the email is no longer a
 * contiguous text node, so Cloudflare's edge scanner won't obfuscate it.
 *
 * Use this for plain-text fields rendered server-side (e.g. a tool description).
 */
export function splitEmails(text: string): ReactNode {
  const breaks = atBreakOffsets(text);
  if (breaks.length === 0) {
    return text;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const offset of breaks) {
    nodes.push(
      <Fragment key={`t${cursor}`}>{text.slice(cursor, offset)}</Fragment>
    );
    nodes.push(<wbr key={`w${offset}`} />);
    cursor = offset;
  }
  nodes.push(<Fragment key={`t${cursor}`}>{text.slice(cursor)}</Fragment>);
  return nodes;
}

/** Splits `value` into text/`<wbr>` element pairs at each email `@` break. */
export function splitEmailText(value: string): Array<Text | Element> {
  const breaks = atBreakOffsets(value);
  const out: Array<Text | Element> = [];
  let cursor = 0;
  for (const offset of breaks) {
    out.push({ type: "text", value: value.slice(cursor, offset) });
    out.push({ type: "element", tagName: "wbr", properties: {}, children: [] });
    cursor = offset;
  }
  out.push({ type: "text", value: value.slice(cursor) });
  return out;
}

/**
 * rehype plugin (for react-markdown) that applies the same `<wbr>` break to
 * email-like text inside rendered markdown — e.g. a toolkit `summary` that
 * contains a `mongodb+srv://user:pass@host.tld` connection string.
 */
export function rehypeNeutralizeEmails() {
  return (tree: Root): void => {
    visit(tree, "text", (node, index, parent) => {
      if (index === undefined || !parent) {
        return;
      }
      const replacement = splitEmailText(node.value);
      if (replacement.length <= 1) {
        return;
      }
      parent.children.splice(index, 1, ...replacement);
      return index + replacement.length;
    });
  };
}
