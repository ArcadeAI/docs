import { tempRedirects } from "./redirects";
import nextra from "nextra";
import remarkCodeImport from "remark-code-import";
import { NextConfig } from "next";

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
