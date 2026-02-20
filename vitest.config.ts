import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);
const designSystemEntry = require.resolve("@arcadeai/design-system");

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@arcadeai\/design-system$/, replacement: designSystemEntry },
    ],
  },
});
