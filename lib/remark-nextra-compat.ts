import Slugger from "github-slugger";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";

/**
 * Reproduces what Nextra 4 did to the Markdown tree, so the rendered HTML and
 * every heading id match the Nextra-built production site:
 *
 * - heading ids come from one `github-slugger` per page that is shared, in
 *   document order, by headings (`h2`–`h6`; `h1` gets no id), tab labels and
 *   `<summary>` text. `## Title [#custom-id]` sets the id explicitly;
 * - each `<Tabs.Tab>` starts with a hidden `<h3 id="…">label</h3>`, which is
 *   how tab labels reach search engines and deep links;
 * - `<details>` / `<summary>` written as JSX render through the MDX component
 *   map (components/mdx) instead of as bare HTML elements.
 *
 * It must run before Fumadocs' `remarkHeading`, which keeps an id that is
 * already set and builds the table of contents from it.
 */

interface JsxAttribute {
  name: string;
  type: "mdxJsxAttribute";
  value?: unknown;
}

interface JsxElement {
  attributes: JsxAttribute[];
  children: unknown[];
  data?: { _mdxExplicitJsx?: boolean };
  name: string | null;
  type: "mdxJsxFlowElement" | "mdxJsxTextElement";
}

interface NodeLike {
  children?: NodeLike[];
  type: string;
  value?: string;
}

const CUSTOM_ID_REGEX = /\s*\[#([\s\S]+?)]\s*$/;
const COMPONENT_HTML_TAGS = new Set(["details", "summary"]);

function isJsxElement(node: unknown): node is JsxElement {
  const type = (node as { type?: string } | null)?.type;
  return type === "mdxJsxFlowElement" || type === "mdxJsxTextElement";
}

function flattenValue(node: NodeLike): string {
  return (node.children ?? [])
    .map((child) => {
      if (child.children) {
        return flattenValue(child);
      }
      return typeof child.value === "string" ? child.value : "";
    })
    .join("");
}

function literal(value: string | number) {
  return { raw: JSON.stringify(value), type: "Literal", value };
}

/** `style={{ visibility: "hidden", width: 0, height: 0 }}` as an MDX attribute. */
function hiddenStyleAttribute(): JsxAttribute {
  const entries: [string, string | number][] = [
    ["visibility", "hidden"],
    ["width", 0],
    ["height", 0],
  ];
  return {
    name: "style",
    type: "mdxJsxAttribute",
    value: {
      data: {
        estree: {
          body: [
            {
              expression: {
                properties: entries.map(([key, value]) => ({
                  computed: false,
                  key: { name: key, type: "Identifier" },
                  kind: "init",
                  method: false,
                  shorthand: false,
                  type: "Property",
                  value: literal(value),
                })),
                type: "ObjectExpression",
              },
              type: "ExpressionStatement",
            },
          ],
          comments: [],
          sourceType: "module",
          type: "Program",
        },
      },
      type: "mdxJsxAttributeValueExpression",
      value: "",
    },
  };
}

interface EstreeLiteral {
  type: string;
  value?: unknown;
}

/** Reads the string entries of `items={["a", "b"]}` on a `<Tabs>` element. */
function tabNames(tabs: JsxElement): (string | undefined)[] | null {
  const attribute = tabs.attributes.find(
    (attr) => attr.type === "mdxJsxAttribute" && attr.name === "items"
  );
  const expression = (
    attribute?.value as
      | {
          data?: {
            estree?: {
              body?: { expression?: { elements?: (EstreeLiteral | null)[] } }[];
            };
          };
        }
      | undefined
  )?.data?.estree?.body?.[0]?.expression;
  if (!expression?.elements) {
    return null;
  }
  return expression.elements.map((element) =>
    typeof element?.value === "string" ? element.value : undefined
  );
}

function addSummaryIds(node: NodeLike, slugger: Slugger): void {
  for (const child of node.children ?? []) {
    if (
      isJsxElement(child) &&
      child.type === "mdxJsxTextElement" &&
      child.name === "summary"
    ) {
      child.attributes.push({
        name: "id",
        type: "mdxJsxAttribute",
        value: slugger.slug(flattenValue(child as unknown as NodeLike)),
      });
    } else if (child.children) {
      addSummaryIds(child, slugger);
    }
  }
}

interface HeadingLike {
  children: NodeLike[];
  data?: { hProperties?: Record<string, unknown> };
  depth: number;
}

/** Applies `[#custom-id]` and gives every heading below `h1` its slug id. */
function assignHeadingId(heading: HeadingLike, slugger: Slugger): void {
  heading.data ||= {};
  heading.data.hProperties ||= {};
  const props = heading.data.hProperties;
  const lastChild = heading.children.at(-1);
  if (lastChild?.type === "text" && typeof lastChild.value === "string") {
    const matched = lastChild.value.match(CUSTOM_ID_REGEX);
    if (matched) {
      props.id = matched[1];
      lastChild.value = lastChild.value.slice(0, matched.index);
    }
  }
  if (heading.depth === 1) {
    return;
  }
  const customId = typeof props.id === "string" ? props.id : "";
  props.id = slugger.slug(
    customId || flattenValue({ children: heading.children, type: "heading" })
  );
}

/** Prepends the hidden `<h3 id>label</h3>` to a `<Tabs.Tab>`. */
function addTabHeading(
  tab: JsxElement,
  parent: unknown,
  index: number | undefined,
  slugger: Slugger
): void {
  if (!isJsxElement(parent) || parent.name !== "Tabs" || index === undefined) {
    return;
  }
  const name = tabNames(parent)?.[index];
  if (name === undefined) {
    return;
  }
  const heading: JsxElement = {
    attributes: [
      { name: "id", type: "mdxJsxAttribute", value: slugger.slug(name) },
      hiddenStyleAttribute(),
    ],
    children: [{ type: "text", value: name }],
    data: { _mdxExplicitJsx: true },
    name: "h3",
    type: "mdxJsxFlowElement",
  };
  tab.children.unshift(heading);
}

export function remarkNextraCompat(): (tree: Root) => void {
  return (tree: Root) => {
    const slugger = new Slugger();

    visit(tree, (node, index, parent) => {
      if (node.type === "heading") {
        assignHeadingId(node as unknown as HeadingLike, slugger);
        return;
      }
      if (!isJsxElement(node)) {
        return;
      }
      if (node.name && COMPONENT_HTML_TAGS.has(node.name) && node.data) {
        node.data._mdxExplicitJsx = undefined;
      }
      if (node.type !== "mdxJsxFlowElement") {
        return;
      }
      if (node.name === "Tabs.Tab") {
        addTabHeading(node, parent, index, slugger);
      }
      if (node.name === "details") {
        addSummaryIds(node as unknown as NodeLike, slugger);
      }
    });
  };
}
