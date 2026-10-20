import fs from "node:fs";
import path from "node:path";
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
 * `toc`/`breadcrumb` hide the table of contents or breadcrumb; `icon` is a
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

/** Finds the glossary page, which may be a file or a folder index. */
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

const HIGHLIGHT_GROUP_REGEX = /\B\{(.*?)\}\B/g;
const SINGLE_NUMBER_REGEX = /^-?\d+$/;
const NUMBER_RANGE_REGEX = /^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/;
const INCLUSIVE_SEPARATORS = new Set(["-", "..", "\u2025"]);

/** `parse-numeric-range`, as used by rehype-pretty-code: "1-3, 7" → 1,2,3,7. */
function parseNumericRange(input: string): number[] {
  const result: number[] = [];
  for (const part of input.split(",").map((value) => value.trim())) {
    if (SINGLE_NUMBER_REGEX.test(part)) {
      result.push(Number.parseInt(part, 10));
      continue;
    }
    const match = part.match(NUMBER_RANGE_REGEX);
    if (!match) {
      continue;
    }
    const start = Number.parseInt(match[1] ?? "", 10);
    const step = start < Number.parseInt(match[3] ?? "", 10) ? 1 : -1;
    let end = Number.parseInt(match[3] ?? "", 10);
    if (INCLUSIVE_SEPARATORS.has(match[2] ?? "")) {
      end += step;
    }
    for (let line = start; line !== end; line += step) {
      result.push(line);
    }
  }
  return result;
}

/**
 * Lines to highlight: every `{…}` group of the fence meta, as the pages write
 * them (`{1-5} {16}`, `{9-18, 20, 24}` with spaces).
 */
function highlightedLines(meta: string): Set<number> {
  const lines = new Set<number>();
  for (const match of meta.matchAll(HIGHLIGHT_GROUP_REGEX)) {
    for (const line of parseNumericRange(match[1] ?? "")) {
      lines.add(line);
    }
  }
  return lines;
}

/**
 * Marks the lines named in the fence meta (```python {2-4}) with Fumadocs'
 * `highlighted` class, the same one its `// [!code highlight]` comments set.
 * Shiki's own meta transformer reads a single `{…}` group without spaces.
 */
const transformerMetaLines: ShikiTransformer = {
  line(node, line) {
    const meta = this.options.meta as { __raw?: string } | undefined;
    if (highlightedLines(meta?.__raw ?? "").has(line)) {
      this.addClassToHast(node, "highlighted");
    }
  },
  name: "arcade:meta-lines",
};

const glossaryPath = resolveGlossaryPath();
const hasGlossary = fs.existsSync(path.join(process.cwd(), glossaryPath));

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // Unknown fence languages (for example `env`) render as plain text
      // instead of failing the build.
      fallbackLanguage: "plaintext",
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerMetaLines,
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
