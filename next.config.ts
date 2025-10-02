import type { NextConfig } from "next";
import nextra from "nextra";
import { remarkGlossary } from "./lib/remark-glossary";

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
  mdxOptions: {
    remarkPlugins: [
      [remarkGlossary, { glossaryPath: "./app/en/home/glossary/page.mdx" }],
    ],
  },
});

const nextConfig: NextConfig = withNextra({
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
});

export default nextConfig;
