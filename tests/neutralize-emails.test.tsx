import type { Element, Root, RootContent } from "hast";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";
import {
  rehypeNeutralizeEmails,
  splitEmails,
} from "@/app/_components/toolkit-docs/lib/neutralize-emails";

/**
 * MARTECH-17: Cloudflare's Email Obfuscation rewrites any contiguous email-like
 * text in server HTML into a `/cdn-cgi/l/email-protection` link, which 404s for
 * crawlers (Ahrefs "links to broken page"). The neutralizer inserts a zero-width
 * `<wbr>` before the `@` so the rendered text node is no longer a contiguous
 * match — while the visible/copied value is unchanged.
 */
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

describe("splitEmails", () => {
  test("returns the original string untouched when it has no email", () => {
    expect(splitEmails("just some text")).toBe("just some text");
  });

  test("breaks an email so the rendered HTML has no contiguous match", () => {
    const html = renderToStaticMarkup(
      <span>{splitEmails("ping jane.doe@example.com today")}</span>
    );
    expect(html).toContain("<wbr");
    expect(html).not.toMatch(EMAIL);
    // The visible/copied text is unchanged once the zero-width <wbr> is removed.
    expect(html.replace(/<wbr\s*\/?>/g, "")).toContain("jane.doe@example.com");
  });

  test("breaks user:password@host connection-string credentials too", () => {
    const html = renderToStaticMarkup(
      <span>
        {splitEmails("mongodb+srv://user:pass@cluster.mongodb.net/db")}
      </span>
    );
    expect(html).not.toMatch(EMAIL);
  });
});

const collectText = (node: Root | RootContent): string => {
  if (node.type === "text") {
    return node.value;
  }
  return "children" in node ? node.children.map(collectText).join("") : "";
};

const hasContiguousEmail = (node: Root | RootContent): boolean => {
  if (node.type === "text") {
    return EMAIL.test(node.value);
  }
  return "children" in node ? node.children.some(hasContiguousEmail) : false;
};

describe("rehypeNeutralizeEmails", () => {
  test("splits email text nodes and inserts a <wbr>, losslessly", () => {
    const tree: Root = {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "p",
          properties: {},
          children: [{ type: "text", value: "reach user@example.com now" }],
        },
      ],
    };

    rehypeNeutralizeEmails()(tree);

    const paragraph = tree.children[0] as Element;
    expect(
      paragraph.children.some(
        (child) => child.type === "element" && child.tagName === "wbr"
      )
    ).toBe(true);
    // No single text node still holds a full email...
    expect(hasContiguousEmail(tree)).toBe(false);
    // ...and the concatenated text is unchanged.
    expect(collectText(tree)).toBe("reach user@example.com now");
  });
});
