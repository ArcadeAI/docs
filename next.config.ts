import type { NextConfig } from "next";
import nextra from "nextra";
import { withLlmsTxt } from "./lib/next-plugin-llmstxt";
import { remarkGlossary } from "./lib/remark-glossary";
import { redirects } from "./redirects";

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
  search: false,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkGlossary,
        { glossaryPath: "./app/en/resources/glossary/page.mdx" },
      ],
    ],
  },
});

const nextConfig: NextConfig = withLlmsTxt({
  enabled: false, // disabled for now, we will recreate this every week
})(
  withNextra({
    async redirects() {
      return redirects;
    },
    // The app imports shared modules out of toolkit-docs-generator/src/shared/,
    // which compiles under "moduleResolution": "NodeNext" and therefore writes
    // its internal relative imports with a ".js" extension. Webpack resolves
    // with bundler semantics and would look for a literal ".js" file that
    // never exists on disk, so teach it to try ".ts" first.
    webpack: (config) => {
      config.resolve.extensionAlias = {
        ...config.resolve.extensionAlias,
        ".js": [".ts", ".tsx", ".js"],
      };
      return config;
    },
    headers: async () => [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), geolocation=(), microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ],
  })
);

export default nextConfig;
