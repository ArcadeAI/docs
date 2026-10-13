import fs from "node:fs";
import path from "node:path";
import { transformerMetaHighlight } from "@shikijs/transformers";
import {
  type RehypeCodeOptions,
  rehypeCodeDefaultOptions,
  remarkMdxMermaid,
} from "fumadocs-core/mdx-plugins";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";
import { remarkGlossary } from "./lib/remark-glossary";
import { remarkNextraCompat } from "./lib/remark-nextra-compat";
import { remarkSmartypants } from "./lib/remark-smartypants";

/**
 * Frontmatter accepted on every docs page. `metaTitle` overrides the `<title>`
 * when it differs from the rendered H1; `sidebarTitle` is the sidebar label;
 * `toc`/`breadcrumb` mirror Nextra's `_meta.tsx` theme options; `icon` is a
 * Lucide icon name (resolved by `lucideIconsPlugin` in lib/source.ts).
 */
const docsFrontmatterSchema = frontmatterSchema.extend({
  breadcrumb: z.boolean().optional(),
  icon: z.string().optional(),
  // Landing-style page (Nextra layout: full + toc/breadcrumb off): no title,
  // description or page actions are rendered around the MDX body.
  landing: z.boolean().optional(),
  // Freshness: the date a human last ran the page end-to-end, and how many
  // days it stays "verified" (components/verified-badge.tsx).
  lastVerified: z.string().optional(),
  metaTitle: z.string().optional(),
  sidebarTitle: z.string().optional(),
  toc: z.boolean().optional(),
  verifyEvery: z.number().int().positive().optional(),
});

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    // Git-based "last updated" date shown under each page.
    lastModified: true,
    // Exposes `page.data.getText("processed")`, used by app/llms.mdx for the
    // "copy page as Markdown" action and agent-friendly page exports.
    postprocess: { includeProcessedMarkdown: true },
    schema: docsFrontmatterSchema,
  },
});

/** The glossary page moved from app/en/resources/glossary/page.mdx. */
function resolveGlossaryPath(): string {
  const candidates = [
    "content/docs/resources/glossary.mdx",
    "content/docs/resources/glossary/index.mdx",
  ];
  return (
    candidates.find((candidate) =>
      fs.existsSync(path.join(process.cwd(), candidate))
    ) ?? candidates[0]
  );
}

type ShikiTransformer = NonNullable<RehypeCodeOptions["transformers"]>[number];

const LANGUAGE_CLASS_PREFIX = "language-";
const COPY_DISABLED_REGEX = /( |^)copy=false($| )/;
const HIGHLIGHTED_CLASS = "highlighted";

/** Languages Nextra rendered without token colours. */
const PLAIN_LANGUAGES = new Set(["plaintext", "text", "txt", "plain"]);

interface FenceMeta {
  __raw?: string;
  _fenceLang?: string;
  "data-line-numbers"?: boolean;
  title?: string;
}

function classList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }
  return typeof value === "string" ? value.split(" ") : [];
}

/** The language written on the fence, before any fallback to plain text. */
function fenceLanguage(pre: unknown): string | undefined {
  const code = (
    pre as { children?: { properties?: { className?: unknown } }[] }
  ).children?.[0];
  const languageClass = classList(code?.properties?.className).find((name) =>
    name.startsWith(LANGUAGE_CLASS_PREFIX)
  );
  return languageClass?.slice(LANGUAGE_CLASS_PREFIX.length);
}

/**
 * Shapes Shiki's output like Nextra's (rehype-pretty-code) so the ported
 * `pre`/`code` components and CSS apply unchanged:
 * `<pre data-language data-copy data-word-wrap [data-filename]>` holding
 * `<code [data-line-numbers]>` with one bare `<span>` per line, highlighted
 * lines marked `data-highlighted-line`. Unknown and plain-text languages keep
 * the fence language as the label and carry no token colours.
 */
const transformerNextraShape: ShikiTransformer = {
  code(node) {
    const meta = this.options.meta as FenceMeta | undefined;
    if (meta?.["data-line-numbers"]) {
      const lines = node.children.filter((child) => child.type === "element");
      node.properties["data-line-numbers"] = "";
      node.properties["data-line-numbers-max-digits"] = String(
        String(lines.length).length
      );
    }
  },
  enforce: "post",
  line(node) {
    if (classList(node.properties.class).includes(HIGHLIGHTED_CLASS)) {
      node.properties["data-highlighted-line"] = "";
    }
    node.properties.class = undefined;
    if (node.children.length === 0) {
      node.children.push({ type: "text", value: " " });
    }
  },
  name: "arcade:nextra-shape",
  pre(node) {
    const meta = this.options.meta as FenceMeta | undefined;
    const raw = meta?.__raw ?? "";
    const language = meta?._fenceLang ?? this.options.lang;
    node.properties = {
      "data-copy": COPY_DISABLED_REGEX.test(raw) ? undefined : "",
      "data-filename": meta?.title,
      "data-language": language || "plaintext",
      "data-word-wrap": raw.includes("word-wrap=false") ? undefined : "",
      tabindex: "0",
    };
  },
  span(node) {
    const meta = this.options.meta as FenceMeta | undefined;
    const language = meta?._fenceLang ?? this.options.lang;
    const isFallback =
      Boolean(meta?._fenceLang) && meta?._fenceLang !== this.options.lang;
    if (isFallback || PLAIN_LANGUAGES.has(language)) {
      node.properties.style = undefined;
    }
  },
};

const glossaryPath = resolveGlossaryPath();
const hasGlossary = fs.existsSync(path.join(process.cwd(), glossaryPath));

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // Unknown fence languages (for example `env`) render as plain text, as
      // they did in Nextra, instead of failing the build.
      fallbackLanguage: "plaintext",
      // Nextra showed no language icon; the header comes from components/mdx/pre.tsx.
      icon: false,
      parseMetaString(meta, node, tree) {
        return {
          ...rehypeCodeDefaultOptions.parseMetaString?.(meta, node, tree),
          _fenceLang: fenceLanguage(node),
        };
      },
      tab: false,
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        // Supports Nextra-style `{1,3-5}` line highlighting in code fence meta.
        transformerMetaHighlight(),
        transformerNextraShape,
      ],
    },
    remarkPlugins: (plugins) => {
      // remarkMdxMermaid turns ```mermaid fences into <Mermaid chart /> (see
      // components/mdx/mermaid.tsx), matching Nextra, which rendered diagrams.
      const extra: typeof plugins = [remarkMdxMermaid];
      if (hasGlossary) {
        extra.push([remarkGlossary, { glossaryPath }]);
      }
      extra.push(remarkSmartypants);
      // remarkNextraCompat assigns the heading ids, so it must come before
      // Fumadocs' own remarkHeading (in `plugins`), which then keeps them.
      return [remarkNextraCompat, ...plugins, ...extra];
    },
  },
});
