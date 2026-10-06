import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Mirror the tsconfig "@/*" -> "./*" path alias so tests can import app modules.
const rootDir = fileURLToPath(new URL(".", import.meta.url)).replace(/\/$/, "");

export default defineConfig({
  resolve: {
    alias: {
      "@": rootDir,
    },
  },
  test: {
    exclude: [
      // Runs in its own workflow — third-party URLs are flaky in the main test run
      "tests/external-url-check.test.ts",
      "**/node_modules/**",
    ],
  },
});
