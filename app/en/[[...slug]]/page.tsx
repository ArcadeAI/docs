import {
  DocsPage,
  DocsTitle,
  EditOnGitHub,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/notebook/page";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PageFooter } from "@/components/page-footer";
import { pageLastModified, toolkitPageLastModified } from "@/lib/last-modified";
import { DOCS_REPOSITORY_BASE } from "@/lib/layout.shared";
import { findNeighbours } from "@/lib/page-neighbours";
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

/** "Copy Markdown" and the "Open" menu (GitHub, ChatGPT, Claude…). */
function PageActions({ editUrl, url }: { editUrl?: string; url: string }) {
  return (
    <>
      <MarkdownCopyButton markdownUrl={url} />
      <ViewOptionsPopover githubUrl={editUrl} markdownUrl={url} />
    </>
  );
}

const DATE_FORMAT = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  // Rendered once at build time, so the date never depends on the reader.
  timeZone: "UTC",
  year: "numeric",
});

/**
 * "Edit on GitHub" and the date of the last change, under the page. Skipped
 * by the search crawler, like the previous/next links.
 */
function PageMeta({
  editUrl,
  lastModified,
}: {
  editUrl?: string;
  lastModified: string | null;
}) {
  if (!(editUrl || lastModified)) {
    return null;
  }
  return (
    <div
      className="flex flex-row flex-wrap items-center justify-between gap-4"
      data-search-exclude=""
    >
      {editUrl ? <EditOnGitHub href={editUrl} /> : null}
      {lastModified ? (
        <p className="text-fd-muted-foreground text-sm">
          Last updated on{" "}
          <time dateTime={lastModified}>
            {DATE_FORMAT.format(new Date(lastModified))}
          </time>
        </p>
      ) : null}
    </div>
  );
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
      const toolkitPage = await ToolkitRoutePage({
        actions: <PageActions url={toolkitMarkdownUrl(match)} />,
        match,
      });
      if (toolkitPage) {
        // Toolkit pages show their own breadcrumb and list their tools in a
        // fixed 20rem panel on the right (components/toolkit-docs), so the
        // page has no breadcrumb or table of contents and leaves room for it.
        return (
          <DocsPage
            breadcrumb={{ enabled: false }}
            className="xl:pe-80"
            footer={{
              items: findNeighbours(
                source.getPageTree(),
                `/en/${(params.slug ?? []).join("/")}`
              ),
            }}
            slots={{ footer: PageFooter }}
            tableOfContent={{ enabled: false }}
            tableOfContentPopover={{ enabled: false }}
            toc={[]}
          >
            {toolkitPage}
            <PageMeta lastModified={toolkitPageLastModified()} />
          </DocsPage>
        );
      }
    }
    notFound();
  }

  const { body: MDX, full, breadcrumb, landing, title } = page.data;
  const components = getMDXComponents();
  // A `toc: false` frontmatter value hides the table of contents.
  const showToc = page.data.toc !== false && !landing;
  const showTitle = !(landing || PAGES_WITHOUT_TITLE.has(page.slugs.join("/")));
  const editUrl = githubEditUrl(page.path);

  return (
    <DocsPage
      breadcrumb={{ enabled: breadcrumb !== false && !landing }}
      footer={{
        enabled: !landing,
        items: findNeighbours(source.getPageTree(), page.url),
      }}
      full={Boolean(full || landing)}
      slots={{ footer: PageFooter }}
      tableOfContent={{ enabled: showToc }}
      tableOfContentPopover={{ enabled: showToc }}
      toc={Array.isArray(page.data.toc) ? page.data.toc : []}
    >
      {showTitle ? (
        <DocsTitle>{inlineCode(title, components.code)}</DocsTitle>
      ) : null}
      {showToc ? (
        <div className="flex flex-row flex-wrap items-center gap-2 border-fd-border border-b pb-6">
          <PageActions editUrl={editUrl} url={markdownUrl(params.slug)} />
        </div>
      ) : null}
      <MDX components={components} />
      {landing ? null : (
        <PageMeta
          editUrl={editUrl}
          lastModified={pageLastModified(
            page.path,
            lastModifiedDate(page.data)
          )}
        />
      )}
    </DocsPage>
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
