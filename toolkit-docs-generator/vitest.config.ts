import { createRequire } from "node:module";
import { defineConfig } from "vitest/config";

const require = createRequire(import.meta.url);
const designSystemEntry = require.resolve("@arcadeai/design-system");

export default defineConfig({
  resolve: {
    alias: {
      // Use the Node-resolved entry to avoid broken "development" export paths
      // in some published design-system versions during Vitest transform.
      "@arcadeai/design-system": designSystemEntry,
    },
  },
  test: {
    // Enable globals like describe, it, expect without imports
    globals: true,

    // Test environment
    environment: "node",

    // Include test files
    include: ["tests/**/*.test.ts"],

    // Coverage configuration
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "tests/",
        "**/*.d.ts",
        "vitest.config.ts",
      ],
      // Require 80% coverage
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },

    // TypeScript configuration
    typecheck: {
      enabled: true,
    },
  },
});
