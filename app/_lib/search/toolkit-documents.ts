import type { ToolkitData } from "@/app/_components/toolkit-docs/types";
import { getToolkitCanonicalPath } from "@/app/_lib/toolkit-static-params";
import { stripMarkdown } from "./mdx-documents";
import type { SearchDocument } from "./types";

const MAX_CONTENT_CHARS = 2000;
const DOT_REGEX = /\./g;
const WHITESPACE_REGEX = /\s+/g;

function truncateContent(text: string): string {
  if (text.length <= MAX_CONTENT_CHARS) {
    return text;
  }
  const sliced = text.slice(0, MAX_CONTENT_CHARS);
  const lastSpace = sliced.lastIndexOf(" ");
  const cut = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;
  return `${cut}…`;
}

function joinNonEmpty(parts: Array<string | null | undefined>): string {
  return parts
    .filter((part): part is string => Boolean(part?.trim()))
    .join(" ");
}

/**
 * Match the toolkit page's tool anchors (`toToolAnchorId`) without importing
 * the client table component into the server index builder.
 */
function toToolAnchorId(value: string): string {
  return value
    .toLowerCase()
    .replace(WHITESPACE_REGEX, "-")
    .replace(DOT_REGEX, "");
}

/**
 * Index a generated toolkit page and each of its tools.
 *
 * Hidden toolkits are omitted. A missing category is skipped rather than
 * failing the index — those toolkits are not routed on the site either.
 */
export function documentsFromToolkit(toolkit: ToolkitData): SearchDocument[] {
  if (toolkit.metadata.isHidden) {
    return [];
  }

  let path: string;
  try {
    path = getToolkitCanonicalPath({
      id: toolkit.id,
      category: toolkit.metadata.category,
      docsLink: toolkit.metadata.docsLink,
    });
  } catch {
    return [];
  }

  const title = toolkit.label || toolkit.id;
  const pageContent = truncateContent(
    stripMarkdown(joinNonEmpty([toolkit.summary, toolkit.description]))
  );

  const documents: SearchDocument[] = [
    {
      id: path,
      url: path,
      title,
      heading: null,
      content: pageContent,
      type: "page",
    },
  ];

  for (const tool of toolkit.tools) {
    const url = `${path}#${toToolAnchorId(tool.qualifiedName)}`;
    const parameterNames = tool.parameters.map((parameter) => parameter.name);
    documents.push({
      id: url,
      url,
      title,
      heading: tool.qualifiedName,
      content: truncateContent(
        joinNonEmpty([tool.description, parameterNames.join(" ")])
      ),
      type: "tool",
    });
  }

  return documents;
}
