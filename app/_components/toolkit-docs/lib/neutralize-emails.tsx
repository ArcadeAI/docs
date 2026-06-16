import { Fragment, type ReactNode } from "react";

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

/** Structural view over hast nodes — avoids depending on `unist-util-visit`. */
type WalkNode = {
  type: string;
  value?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: WalkNode[];
};

function neutralizeTextValue(value: string): WalkNode[] {
  const breaks = atBreakOffsets(value);
  if (breaks.length === 0) {
    return [{ type: "text", value }];
  }

  const out: WalkNode[] = [];
  let cursor = 0;
  for (const offset of breaks) {
    out.push({ type: "text", value: value.slice(cursor, offset) });
    out.push({ type: "element", tagName: "wbr", properties: {}, children: [] });
    cursor = offset;
  }
  out.push({ type: "text", value: value.slice(cursor) });
  return out;
}

function walk(node: WalkNode): void {
  if (!node.children) {
    return;
  }
  const next: WalkNode[] = [];
  for (const child of node.children) {
    if (child.type === "text" && typeof child.value === "string") {
      next.push(...neutralizeTextValue(child.value));
    } else {
      walk(child);
      next.push(child);
    }
  }
  node.children = next;
}

/**
 * rehype plugin (for react-markdown) that applies the same `<wbr>` break to
 * email-like text inside rendered markdown — e.g. a toolkit `summary` that
 * contains a `mongodb+srv://user:pass@host.tld` connection string.
 *
 * Typed structurally against the hast tree (a `WalkNode`) to avoid a direct
 * dependency on `@types/hast`, which pnpm only exposes transitively.
 */
export function rehypeNeutralizeEmails() {
  return (tree: WalkNode): void => walk(tree);
}
