import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { transformerMetaHighlight } from "@shikijs/transformers";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        // Supports Nextra-style `{1,3-5}` line highlighting in code fence meta.
        transformerMetaHighlight(),
      ],
    },
  },
});
