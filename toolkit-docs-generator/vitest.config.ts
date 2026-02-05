import { defineConfig } from "vitest/config";

export default defineConfig({
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
