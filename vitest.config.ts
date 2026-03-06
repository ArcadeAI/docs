import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      // Runs in its own workflow — third-party URLs are flaky in the main test run
      "tests/external-url-check.test.ts",
      "**/node_modules/**",
    ],
  },
});
