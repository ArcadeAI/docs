import { describe, expect, test } from "vitest";
import { tabValue } from "@/components/mdx/tabs";

/**
 * Tab groups with the same `storageKey` switch together and remember the
 * reader's pick by this value, so groups that list the same choices in a
 * different order, or spell them differently, still agree.
 */
describe("tabValue", () => {
  test("ignores case and spacing", () => {
    expect(tabValue("HTTP transport")).toBe(tabValue("http transport"));
    expect(tabValue(" Claude Desktop ")).toBe("claude-desktop");
  });

  test("treats TypeScript and JavaScript as the same pick", () => {
    expect(tabValue("TypeScript")).toBe(tabValue("JavaScript"));
  });

  test("keeps other choices apart", () => {
    expect(tabValue("Python")).not.toBe(tabValue("JavaScript"));
    expect(tabValue("npm")).not.toBe(tabValue("pnpm"));
  });
});
