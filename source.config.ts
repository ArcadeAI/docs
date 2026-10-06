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
import { remarkCodeLangAlias } from "./lib/remark-code-lang-alias";
import { remarkGlossary } from "./lib/remark-glossary";
import { remarkNextraSteps } from "./lib/remark-nextra-steps";

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
  metaTitle: z.string().optional(),
  sidebarTitle: z.string().optional(),
  toc: z.boolean().optional(),
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

/**
 * Exposes the fence language on the `<pre>` element so the `pre` MDX override
 * (components/mdx/pre.tsx) can render the Terminal / language header.
 */
type ShikiTransformer = NonNullable<RehypeCodeOptions["transformers"]>[number];

const transformerDataLanguage: ShikiTransformer = {
  name: "arcade:data-language",
  pre(node) {
    if (this.options.lang) {
      node.properties["data-language"] = this.options.lang;
    }
  },
};

const glossaryPath = resolveGlossaryPath();
const hasGlossary = fs.existsSync(path.join(process.cwd(), glossaryPath));

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // Unknown fence languages render as plain text instead of failing the build.
      fallbackLanguage: "plaintext",
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        // Supports Nextra-style `{1,3-5}` line highlighting in code fence meta.
        transformerMetaHighlight(),
        transformerDataLanguage,
      ],
    },
    remarkPlugins: (plugins) => {
      // remarkMdxMermaid turns ```mermaid fences into <Mermaid chart /> (see
      // components/mdx/mermaid.tsx), matching Nextra, which rendered diagrams.
      const extra: typeof plugins = [
        remarkMdxMermaid,
        remarkCodeLangAlias,
        remarkNextraSteps,
      ];
      if (hasGlossary) {
        extra.push([remarkGlossary, { glossaryPath }]);
      }
      return [...plugins, ...extra];
    },
  },
});
