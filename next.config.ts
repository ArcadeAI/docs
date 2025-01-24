import { NextConfig } from "next";
import nextra from "nextra";
import remarkCodeImport from "remark-code-import";
import { tempRedirects } from "./redirects";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  codeHighlight: true,
  mdxOptions: {
    remarkPlugins: [remarkCodeImport],
  },
});

const nextraConfig = withNextra({
  redirects: async () => [
    ...tempRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    })),
  ],
});

const nextConfig: NextConfig = {
  ...nextraConfig,
};

export default nextConfig;
