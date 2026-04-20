import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/external-url-check.test.ts"],
  },
});
