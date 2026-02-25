import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);
const designSystemEntry = require.resolve("@arcadeai/design-system");

export default defineConfig({
  resolve: {
    alias: {
      // Force Vitest to use the Node-resolved entrypoint instead of the
      // package "development" condition, which some published versions point
      // to non-shipped source files.
      "@arcadeai/design-system": designSystemEntry,
    },
  },
});
