import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { DocsPageShell } from "@/components/chrome/page";
import type { TocEntry } from "@/components/chrome/stores";
import { pageLastModified, toolkitPageLastModified } from "@/lib/last-modified";
import { DOCS_REPOSITORY_BASE } from "@/lib/layout.shared";
import { smartypants } from "@/lib/remark-smartypants";
import { source } from "@/lib/source";
import {
  generateToolkitParams,
  matchToolkitRoute,
  ToolkitRoutePage,
  toolkitMarkdownUrl,
  toolkitRouteMetadata,
} from "@/lib/toolkit-route";
import { getMDXComponents } from "@/mdx-components";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

/**
 * Pages that open with a second-level heading and show no page title. Their
 * frontmatter `title` only feeds `<title>` and the sidebar.
 */
const PAGES_WITHOUT_TITLE = new Set([
  "get-started/agent-frameworks/langchain/auth-langchain-tools",
  "get-started/agent-frameworks/mastra",
  "resources/examples",
]);

function githubEditUrl(filePath: string): string {
  return `${DOCS_REPOSITORY_BASE}/content/docs/${filePath}`;
}

function markdownUrl(slug: string[] | undefined): string {
  return `/llms.mdx/${(slug ?? []).join("/")}`;
}

function lastModifiedDate(data: unknown): string | null {
  const value = (data as { lastModified?: unknown }).lastModified;
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date.toISOString();
  }
  return null;
}

const INLINE_CODE = /`([^`]+)`/;

/**
 * Renders a frontmatter title the way the MDX body renders it: `code` spans
 * as code, and typographic punctuation in the text around them.
 */
function inlineCode(
  title: string,
  Code: MDXComponents["code"] | undefined
): ReactNode {
  const parts = title.split(INLINE_CODE);
  if (parts.length === 1 || typeof Code !== "function") {
    return smartypants(title);
  }
  // Odd parts are the text between backticks.
  let offset = 0;
  let isCode = false;
  const nodes: ReactNode[] = [];
  for (const part of parts) {
    nodes.push(
      isCode ? <Code key={`code-${offset}`}>{part}</Code> : smartypants(part)
    );
    offset += part.length + 1;
    isCode = !isCode;
  }
  return nodes;
}

/**
 * Table-of-contents titles come from the headings as plain elements. Inline
 * code in them is rendered with the content's own `code` component, so an
 * entry shows the same boxed code as the heading it points to.
 */
function tocTitle(node: ReactNode, Code: MDXComponents["code"]): ReactNode {
  if (typeof Code !== "function") {
    return node;
  }
  return Children.map(node, (child) => {
    if (!isValidElement<{ children?: ReactNode }>(child)) {
      return child;
    }
    if (child.type === "code") {
      return <Code>{child.props.children}</Code>;
    }
    // Fragments and other inline wrappers: look inside them.
    return child.props.children === undefined
      ? child
      : cloneElement(child, undefined, tocTitle(child.props.children, Code));
  });
}

/**
 * Children of the element returned by `ToolkitRoutePage`. Its own page
 * wrapper is replaced by the docs shell.
 */
function innerChildren(node: ReactNode): ReactNode {
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return node.props.children;
  }
  return node;
}

// Every route is known at build time (MDX pages + generated toolkit pages);
// unknown paths get the static 404 without running page code.
export const dynamicParams = false;

export default async function Page(props: Props) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    const match = matchToolkitRoute(params.slug);
    if (match) {
      const toolkitPage = await ToolkitRoutePage({ match });
      if (toolkitPage) {
        // Toolkit pages list their tools in their own panel: the shell keeps
        // the table of contents column but has no headings to show in it.
        return (
          <DocsPageShell
            lastModified={toolkitPageLastModified()}
            markdownUrl={toolkitMarkdownUrl(match)}
          >
            {innerChildren(toolkitPage)}
          </DocsPageShell>
        );
      }
    }
    notFound();
  }

  const { body: MDX, full, breadcrumb, landing, title } = page.data;
  const components = getMDXComponents();
  const Wrapper = components.wrapper;
  const Heading = components.h1;
  // A `toc: false` frontmatter value replaces the generated heading list.
  const headings: unknown = page.data.toc;
  const showToc = headings !== false && !landing;
  const showTitle =
    !(landing || PAGES_WITHOUT_TITLE.has(page.slugs.join("/"))) &&
    typeof Heading === "function";

  const tocItems: TocEntry[] = Array.isArray(headings)
    ? (headings as typeof page.data.toc).map((item) => ({
        depth: item.depth,
        id: item.url.slice(1),
        title: tocTitle(item.title, components.code),
      }))
    : [];

  // The page title is the first element of the content, so the spacing rules
  // between it and what follows are the content's own.
  const content = (children: ReactNode) => (
    <>
      {showTitle ? (
        <Heading>{inlineCode(title, components.code)}</Heading>
      ) : null}
      {children}
    </>
  );

  return (
    <DocsPageShell
      breadcrumb={breadcrumb !== false && !landing}
      editUrl={githubEditUrl(page.path)}
      lastModified={pageLastModified(page.path, lastModifiedDate(page.data))}
      layout={full || landing ? "full" : "default"}
      markdownUrl={showToc ? markdownUrl(params.slug) : undefined}
      toc={showToc}
      tocItems={tocItems}
    >
      <MDX
        components={{
          ...components,
          wrapper: ({ children }: { children?: ReactNode }) =>
            typeof Wrapper === "function" ? (
              <Wrapper>{content(children)}</Wrapper>
            ) : (
              content(children)
            ),
        }}
      />
    </DocsPageShell>
  );
}

export async function generateStaticParams() {
  const toolkitParams = await generateToolkitParams();
  return [...source.generateParams(), ...toolkitParams];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    const match = matchToolkitRoute(params.slug);
    if (match) {
      const metadata = await toolkitRouteMetadata(match);
      if (metadata) {
        return metadata;
      }
    }
    notFound();
  }

  // Open Graph and Twitter tags are derived from the title and description;
  // pages without a description fall back to the site description
  // (app/layout.tsx).
  const metadata: Metadata = {
    title: page.data.metaTitle ?? page.data.title,
  };
  if (page.data.description) {
    metadata.description = page.data.description;
  }
  return metadata;
}
