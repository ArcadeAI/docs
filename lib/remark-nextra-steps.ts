import type { Heading, Root, RootContent } from "mdast";
import { visit } from "unist-util-visit";

/** Minimal shape of an `mdxJsxFlowElement` (from mdast-util-mdx-jsx). */
interface MdxJsxFlowElement {
  attributes: unknown[];
  children: RootContent[];
  name: string | null;
  type: "mdxJsxFlowElement";
}

function isJsxFlowElement(node: unknown): node is MdxJsxFlowElement {
  return (
    typeof node === "object" &&
    node !== null &&
    (node as { type?: string }).type === "mdxJsxFlowElement" &&
    Array.isArray((node as { children?: unknown }).children)
  );
}

function isHeading(node: RootContent): node is Heading {
  return node.type === "heading";
}

function stepElement(children: RootContent[]): RootContent {
  const node: MdxJsxFlowElement = {
    attributes: [],
    children,
    name: "Step",
    type: "mdxJsxFlowElement",
  };
  // mdast's RootContent union does not include MDX JSX nodes; remark-mdx adds them.
  return node as unknown as RootContent;
}

/**
 * Groups the direct children of a `<Steps>` element into `<Step>` elements.
 *
 * Nextra's `<Steps>` numbered every `###` heading inside it via CSS counters.
 * Fumadocs needs an explicit `<Step>` wrapper around each step, so this
 * plugin finds the shallowest heading depth among the direct children and
 * starts a new `<Step>` at each heading of that depth. Content before the
 * first heading stays a direct child of `<Steps>`.
 */
export function groupStepsChildren(children: RootContent[]): RootContent[] {
  const headings = children.filter(isHeading);
  if (headings.length === 0) {
    return children;
  }
  // Already using explicit <Step> children: leave untouched.
  if (
    children.some((child) => isJsxFlowElement(child) && child.name === "Step")
  ) {
    return children;
  }

  const stepDepth = Math.min(...headings.map((h) => h.depth));
  const result: RootContent[] = [];
  let current: RootContent[] | null = null;

  for (const child of children) {
    if (isHeading(child) && child.depth === stepDepth) {
      if (current) {
        result.push(stepElement(current));
      }
      current = [child];
      continue;
    }
    if (current) {
      current.push(child);
    } else {
      result.push(child);
    }
  }
  if (current) {
    result.push(stepElement(current));
  }
  return result;
}

/**
 * Remark plugin: rewrites Nextra-style `<Steps>` blocks into Fumadocs'
 * `<Steps><Step>…</Step></Steps>` structure.
 */
export function remarkNextraSteps(): (tree: Root) => void {
  return (tree: Root) => {
    visit(tree, "mdxJsxFlowElement", (node: unknown) => {
      if (!isJsxFlowElement(node) || node.name !== "Steps") {
        return;
      }
      node.children = groupStepsChildren(node.children);
    });
  };
}
