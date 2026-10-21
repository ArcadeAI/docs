import { notFound } from "next/navigation";
import type { NextRequest } from "next/server";
import { source } from "@/lib/source";

export const revalidate = false;

/** `<GlossaryTerm ...>text</GlossaryTerm>` injected by lib/remark-glossary.ts. */
const GLOSSARY_TERM_REGEX = /<GlossaryTerm\b[^>]*>([\s\S]*?)<\/GlossaryTerm>/g;

/**
 * Serves a docs page as processed Markdown (`/llms.mdx/<slug>`), used by the
 * "Copy page" / "Open in ..." actions and by agents. Toolkit pages are served
 * by `/api/toolkit-data/<id>?format=markdown` instead.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) {
    notFound();
  }

  const markdown = (await page.data.getText("processed")).replace(
    GLOSSARY_TERM_REGEX,
    "$1"
  );
  const header = `# ${page.data.title}\n\n${
    page.data.description ? `${page.data.description}\n\n` : ""
  }`;

  return new Response(header + markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
