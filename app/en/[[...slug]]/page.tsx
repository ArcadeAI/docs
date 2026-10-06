import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  EditOnGitHub,
  PageLastUpdate,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageActions } from "@/components/page-actions";
import { source } from "@/lib/source";
import {
  generateToolkitParams,
  matchToolkitRoute,
  ToolkitRoutePage,
  toolkitRouteMetadata,
} from "@/lib/toolkit-route";
import { getMDXComponents } from "@/mdx-components";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

const DOCS_REPO_TREE = "https://github.com/ArcadeAI/docs/tree/main";

function githubEditUrl(filePath: string): string {
  return `${DOCS_REPO_TREE}/content/docs/${filePath}`;
}

function markdownUrl(slug: string[] | undefined): string {
  return `/llms.mdx/${(slug ?? []).join("/")}`;
}

function lastModifiedDate(data: unknown): Date | null {
  const value = (data as { lastModified?: unknown }).lastModified;
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  return null;
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
        return toolkitPage;
      }
    }
    notFound();
  }

  const MDX = page.data.body;
  const { full, toc, breadcrumb, landing } = page.data;
  const lastModified = lastModifiedDate(page.data);
  const editUrl = githubEditUrl(page.path);
  const mdxComponents = getMDXComponents({
    a: createRelativeLink(source, page),
  });

  if (landing) {
    return (
      <DocsPage
        breadcrumb={{ enabled: false }}
        footer={{ enabled: false }}
        full
        tableOfContent={{ enabled: false }}
        tableOfContentPopover={{ enabled: false }}
        toc={[]}
      >
        <MDX components={mdxComponents} />
      </DocsPage>
    );
  }

  return (
    <DocsPage
      breadcrumb={{ enabled: breadcrumb !== false, includeRoot: false }}
      footer={{ enabled: true }}
      full={full}
      tableOfContent={{ enabled: toc !== false, style: "clerk" }}
      tableOfContentPopover={{ enabled: toc !== false }}
      toc={toc === false ? [] : page.data.toc}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <PageActions githubUrl={editUrl} markdownUrl={markdownUrl(params.slug)} />
      <DocsBody>
        <MDX components={mdxComponents} />
      </DocsBody>
      <div className="flex flex-row flex-wrap items-center justify-between gap-4 pt-4 text-fd-muted-foreground text-sm">
        <EditOnGitHub href={editUrl} />
        {lastModified ? <PageLastUpdate date={lastModified} /> : null}
      </div>
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

  return {
    alternates: { canonical: page.url },
    description: page.data.description,
    openGraph: {
      description: page.data.description,
      title: page.data.metaTitle ?? page.data.title,
      url: page.url,
    },
    title: page.data.metaTitle ?? page.data.title,
  };
}
