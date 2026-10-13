import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { redirects } from "./redirects";

const config: NextConfig = {
  // Parallel builds (CI matrix, multiple agents) can each use their own output
  // directory: NEXT_DIST_DIR=.next-foo bun run build
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  headers: () =>
    Promise.resolve([
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
    ]),
  reactStrictMode: true,
  // Redirect rules for renamed, merged, or deleted pages live in redirects.ts
  // (a plain data module) so scripts/check-redirects.ts and the tests can
  // import them without parsing this file.
  redirects: () => Promise.resolve(redirects),
};

const withMDX = createMDX();

export default withMDX(config);
