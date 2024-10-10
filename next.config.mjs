import { tempRedirects } from "./redirects.js";
import nextra from "nextra";
import remarkCodeImport from "remark-code-import";

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  codeHighlight: true,
  showLineNumbers: true,
  css: './styles/globals.css',
  mdxOptions: {
    remarkPlugins: [remarkCodeImport],
  },
})

export default withNextra({
  redirects: async () => [
    ...tempRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    })),
  ]
})
