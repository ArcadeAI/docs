import Slugger from "github-slugger";
import { parse as parseYaml } from "yaml";
import type { SearchDocument } from "./types";

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
const HEADING_REGEX = /^\s*(#{1,6})\s+(.+)$/;
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
const HEADING_CODE_SPLIT_REGEX = /(`[^`]+`)/;
const HEADING_IMAGE_REGEX = /!\[[^\]]*\]\([^)]+\)/g;
const HEADING_EMPHASIS_REGEX =
  /\*+|~~|(?<![\p{L}\p{N}])_+|_+(?![\p{L}\p{N}])/gu;
const ESCAPE_REGEX = /\\([\\`*_{}[\]()#+\-.!|~<>])/g;
const TABS_ITEMS_REGEX = /^<Tabs\b[^>]*\bitems=\{\[([^\]]*)\]\}/;
const TABS_OPEN_REGEX = /^<Tabs(?:\s|>|$)/;
const TABS_CLOSE_REGEX = /^<\/Tabs>/;
const TAB_OPEN_REGEX = /^<Tabs\.Tab\b/;
const QUOTED_STRING_REGEX = /"([^"]*)"|'([^']*)'/g;
const OPEN_BRACKET_REGEX = /[{[(]/g;
const CLOSE_BRACKET_REGEX = /[}\])]/g;
const SUMMARY_REGEX = /<summary\b[^>]*>(.*?)<\/summary>/g;

const MAX_CONTENT_CHARS = 2000;
const MIN_HEADING_LEVEL = 2;

type Frontmatter = {
  title?: string;
  description?: string;
};

type Section = {
  level: number;
  heading: string;
  slug: string;
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

/**
 * Plain text of an MDX heading, matching the text Nextra feeds to
 * `github-slugger`: inline code keeps its contents verbatim, links keep their
 * label, and images, JSX tags, and emphasis markers are dropped.
 */
export function headingText(heading: string): string {
  return heading
    .split(HEADING_CODE_SPLIT_REGEX)
    .map((part) =>
      part.startsWith("`") && part.endsWith("`") && part.length > 1
        ? part.slice(1, -1)
        : part
            .replace(HEADING_IMAGE_REGEX, "")
            .replace(LINK_REGEX, "$1")
            .replace(JSX_TAG_REGEX, "")
            .replace(HEADING_EMPHASIS_REGEX, "")
            .replace(ESCAPE_REGEX, "$1")
    )
    .join("")
    .trim();
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

function bracketDelta(line: string): number {
  const opens = line.match(OPEN_BRACKET_REGEX)?.length ?? 0;
  const closes = line.match(CLOSE_BRACKET_REGEX)?.length ?? 0;
  return opens - closes;
}

/**
 * Drop top-level ESM statements. A statement ends once its brackets balance,
 * so multi-line `import { … } from "…"` blocks work with or without a trailing
 * semicolon. Lines inside code fences are content, never ESM.
 */
function stripImportsAndExports(source: string): string {
  const lines = source.split("\n");
  const kept: string[] = [];
  let depth = 0;
  let skipping = false;
  let inFence = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (skipping) {
      depth += bracketDelta(trimmed);
      skipping = depth > 0;
      continue;
    }
    if (FENCE_REGEX.test(trimmed)) {
      inFence = !inFence;
    } else if (!inFence && IMPORT_EXPORT_START_REGEX.test(trimmed)) {
      depth = bracketDelta(trimmed);
      skipping = depth > 0;
      continue;
    }
    kept.push(line);
  }

  return kept.join("\n");
}

function parseTabItems(tag: string): string[] | null {
  const match = tag.match(TABS_ITEMS_REGEX);
  if (!match) {
    return null;
  }
  return [...match[1].matchAll(QUOTED_STRING_REGEX)].map(
    (item) => item[1] ?? item[2] ?? ""
  );
}

type TabsFrame = { items: string[] | null; nextIndex: number };

/**
 * Nextra shares one `github-slugger` instance per page across `##+` headings,
 * `<Tabs.Tab>` labels, and `<summary>` text. Every one of them has to be
 * slugged in document order for duplicate suffixes (`example-1`) to line up.
 */
class PageSlugger {
  private readonly slugger = new Slugger();
  private readonly tabsStack: TabsFrame[] = [];
  private pendingTabsTag: string | null = null;

  heading(text: string): string {
    return this.slugger.slug(headingText(text));
  }

  observe(trimmed: string): void {
    this.observeTabs(trimmed);
    for (const summary of trimmed.matchAll(SUMMARY_REGEX)) {
      this.slugger.slug(headingText(summary[1]));
    }
  }

  private observeTabs(trimmed: string): void {
    if (this.pendingTabsTag !== null) {
      this.pendingTabsTag += ` ${trimmed}`;
      if (trimmed.endsWith(">")) {
        this.openTabs(this.pendingTabsTag);
      }
      return;
    }
    if (TAB_OPEN_REGEX.test(trimmed)) {
      this.openTab();
    } else if (TABS_OPEN_REGEX.test(trimmed)) {
      if (trimmed.includes(">")) {
        this.openTabs(trimmed);
      } else {
        this.pendingTabsTag = trimmed;
      }
    } else if (TABS_CLOSE_REGEX.test(trimmed)) {
      this.tabsStack.pop();
    }
  }

  private openTabs(tag: string): void {
    this.tabsStack.push({ items: parseTabItems(tag), nextIndex: 0 });
    this.pendingTabsTag = null;
  }

  private openTab(): void {
    const frame = this.tabsStack.at(-1);
    if (!frame) {
      return;
    }
    const label = frame.items?.[frame.nextIndex];
    frame.nextIndex += 1;
    if (label !== undefined) {
      this.slugger.slug(label);
    }
  }
}

/**
 * Split a page into heading sections and assign each heading the ID Nextra
 * renders.
 */
function splitSections(body: string): Section[] {
  const sections: Section[] = [
    { level: 0, heading: "", slug: "", content: "" },
  ];
  const slugger = new PageSlugger();
  let inFence = false;

  const appendToCurrent = (line: string) => {
    const current = sections.at(-1);
    if (current) {
      current.content += `${line}\n`;
    }
  };

  for (const line of body.split("\n")) {
    const trimmed = line.trim();
    if (FENCE_REGEX.test(trimmed)) {
      inFence = !inFence;
      appendToCurrent(line);
      continue;
    }
    if (inFence) {
      appendToCurrent(line);
      continue;
    }

    slugger.observe(trimmed);

    const headingMatch = line.match(HEADING_REGEX);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const heading = headingMatch[2].trim();
      sections.push({
        level,
        heading,
        slug: level >= MIN_HEADING_LEVEL ? slugger.heading(heading) : "",
        content: "",
      });
      continue;
    }

    appendToCurrent(line);
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
    const heading = headingText(section.heading).replace(WHITESPACE_REGEX, " ");
    const content = truncateContent(stripMarkdown(section.content));
    if (!(heading || content)) {
      continue;
    }
    const sectionUrl = `${url}#${section.slug}`;
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
