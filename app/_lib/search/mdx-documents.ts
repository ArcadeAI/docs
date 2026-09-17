import { parse as parseYaml } from "yaml";
import type { SearchDocument } from "./types";

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
const HEADING_REGEX = /^(#{1,6})\s+(.+)$/;
const FENCE_REGEX = /^```/;
const IMPORT_EXPORT_START_REGEX = /^(?:import|export)\s/;
const FENCED_BLOCK_REGEX = /```[\s\S]*?```/g;
const FENCE_OPEN_REGEX = /^```\w*\n?/;
const FENCE_CLOSE_REGEX = /```$/;
const INLINE_CODE_REGEX = /`([^`]+)`/g;
const IMAGE_REGEX = /!\[([^\]]*)\]\([^)]+\)/g;
const LINK_REGEX = /\[([^\]]+)\]\([^)]+\)/g;
const JSX_TAG_REGEX = /<\/?[A-Za-z][^>]*>/g;
const MARKDOWN_NOISE_REGEX = /[*_~#>]+/g;
const WHITESPACE_REGEX = /\s+/g;
const NON_SLUG_REGEX = /[^a-z0-9\s-]/g;
const MULTI_HYPHEN_REGEX = /-+/g;

const MAX_CONTENT_CHARS = 2000;
const MIN_HEADING_LEVEL = 2;

type Frontmatter = {
  title?: string;
  description?: string;
};

type Section = {
  level: number;
  heading: string;
  content: string;
};

function truncateContent(text: string): string {
  if (text.length <= MAX_CONTENT_CHARS) {
    return text;
  }
  const sliced = text.slice(0, MAX_CONTENT_CHARS);
  const lastSpace = sliced.lastIndexOf(" ");
  const cut = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;
  return `${cut}…`;
}

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .trim()
    .replace(NON_SLUG_REGEX, "")
    .replace(WHITESPACE_REGEX, "-")
    .replace(MULTI_HYPHEN_REGEX, "-");
}

export function stripMarkdown(text: string): string {
  return text
    .replace(FENCED_BLOCK_REGEX, (block) =>
      block.replace(FENCE_OPEN_REGEX, "").replace(FENCE_CLOSE_REGEX, "")
    )
    .replace(INLINE_CODE_REGEX, "$1")
    .replace(IMAGE_REGEX, "$1")
    .replace(LINK_REGEX, "$1")
    .replace(JSX_TAG_REGEX, " ")
    .replace(MARKDOWN_NOISE_REGEX, " ")
    .replace(WHITESPACE_REGEX, " ")
    .trim();
}

function parseFrontmatter(source: string): {
  data: Frontmatter;
  body: string;
} {
  const match = source.match(FRONTMATTER_REGEX);
  if (!match) {
    return { data: {}, body: source };
  }

  try {
    const parsed: unknown = parseYaml(match[1]);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      const record = parsed as Record<string, unknown>;
      return {
        data: {
          title: typeof record.title === "string" ? record.title : undefined,
          description:
            typeof record.description === "string"
              ? record.description
              : undefined,
        },
        body: source.slice(match[0].length),
      };
    }
  } catch {
    // Invalid YAML — index the raw body instead of failing the whole index.
  }

  return { data: {}, body: source };
}

function stripImportsAndExports(source: string): string {
  const lines = source.split("\n");
  const kept: string[] = [];
  let skipping = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (skipping) {
      if (trimmed.endsWith(";")) {
        skipping = false;
      }
      continue;
    }
    if (IMPORT_EXPORT_START_REGEX.test(trimmed)) {
      skipping = !trimmed.endsWith(";");
      continue;
    }
    kept.push(line);
  }

  return kept.join("\n");
}

function splitSections(body: string): Section[] {
  const sections: Section[] = [{ level: 0, heading: "", content: "" }];
  let inFence = false;

  for (const line of body.split("\n")) {
    if (FENCE_REGEX.test(line.trim())) {
      inFence = !inFence;
      const current = sections.at(-1);
      if (current) {
        current.content += `${line}\n`;
      }
      continue;
    }

    const headingMatch = inFence ? null : line.match(HEADING_REGEX);
    if (headingMatch) {
      sections.push({
        level: headingMatch[1].length,
        heading: headingMatch[2].trim(),
        content: "",
      });
      continue;
    }

    const current = sections.at(-1);
    if (current) {
      current.content += `${line}\n`;
    }
  }

  return sections;
}

function joinNonEmpty(parts: Array<string | undefined>): string {
  return parts
    .filter((part): part is string => Boolean(part?.trim()))
    .join(" ");
}

/**
 * Turn one authored MDX page into search records: a page-level document plus
 * one record per `##` (or deeper) section so BM25 can deep-link to headings.
 */
export function documentsFromMdx(
  url: string,
  source: string
): SearchDocument[] {
  const { data, body } = parseFrontmatter(source);
  const sections = splitSections(stripImportsAndExports(body));
  const h1 = sections.find((section) => section.level === 1);
  const pageTitle = data.title?.trim() || h1?.heading || "Untitled";
  const preamble = stripMarkdown(
    joinNonEmpty(
      sections
        .filter((section) => section.level <= 1)
        .map((section) => section.content)
    )
  );

  const documents: SearchDocument[] = [
    {
      id: url,
      url,
      title: pageTitle,
      heading: null,
      content: truncateContent(joinNonEmpty([data.description, preamble])),
      type: "page",
    },
  ];

  for (const section of sections) {
    if (section.level < MIN_HEADING_LEVEL) {
      continue;
    }
    const heading = stripMarkdown(section.heading);
    const content = truncateContent(stripMarkdown(section.content));
    if (!(heading || content)) {
      continue;
    }
    const sectionUrl = `${url}#${slugifyHeading(heading || section.heading)}`;
    documents.push({
      id: sectionUrl,
      url: sectionUrl,
      title: pageTitle,
      heading: heading || null,
      content,
      type: content ? "content" : "heading",
    });
  }

  return documents;
}
