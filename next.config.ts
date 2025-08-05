import { NextConfig } from "next";
import nextra from "nextra";
import remarkCodeImport from "remark-code-import";
import { tempRedirects } from "./redirects";

const withNextra = nextra({
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
  async headers() {
    const commonHeaders = [
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
        value:
          "camera=(), battery=(), browsing-topics=(), geolocation=(), microphone=()",
      },
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },
    ]

    return [
      {
        source: "/(.*)",
        headers: commonHeaders,
      },
    ]
  },
};

export default nextConfig;