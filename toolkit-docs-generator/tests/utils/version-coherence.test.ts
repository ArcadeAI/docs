/**
 * Tests for majority-version coherence filter
 */
import { describe, expect, it } from "vitest";
import type { ToolDefinition } from "../../src/types/index.js";
import {
  filterToolsByMajorityVersion,
  getMajorityVersion,
} from "../../src/utils/version-coherence.js";

const createTool = (
  fullyQualifiedName: string,
  overrides: Partial<ToolDefinition> = {}
): ToolDefinition => ({
  name: fullyQualifiedName.split("@")[0]?.split(".")[1] ?? "Tool",
  qualifiedName: fullyQualifiedName.split("@")[0] ?? "",
  fullyQualifiedName,
  description: "A test tool",
  parameters: [],
  auth: null,
  secrets: [],
  output: null,
  ...overrides,
});

describe("getMajorityVersion", () => {
  it("returns null for empty array", () => {
    expect(getMajorityVersion([])).toBeNull();
  });

  it("returns the version when all tools share the same version", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
    ];
    expect(getMajorityVersion(tools)).toBe("3.1.3");
  });

  it("returns the majority version when mixed", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.GetNotificationSummary@2.0.1"),
      createTool("Github.ListNotifications@2.0.1"),
    ];
    expect(getMajorityVersion(tools)).toBe("3.1.3");
  });

  it("returns the version for a single tool", () => {
    const tools = [createTool("Github.CreateIssue@1.0.0")];
    expect(getMajorityVersion(tools)).toBe("1.0.0");
  });

  it("breaks ties by picking the lexicographically higher version", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0"),
      createTool("Github.ListPullRequests@1.0.0"),
      createTool("Github.SetStarred@2.0.0"),
      createTool("Github.GetStar@2.0.0"),
    ];
    expect(getMajorityVersion(tools)).toBe("2.0.0");
  });
});

describe("filterToolsByMajorityVersion", () => {
  it("returns the same array reference when all tools share the same version", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
    ];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toBe(tools); // same reference
    expect(result).toHaveLength(3);
  });

  it("filters out minority-version tools", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.GetNotificationSummary@2.0.1"),
      createTool("Github.ListNotifications@2.0.1"),
    ];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toHaveLength(5);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))).toBe(
      true
    );
  });

  it("returns the original array for empty input", () => {
    const tools: ToolDefinition[] = [];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toBe(tools);
    expect(result).toHaveLength(0);
  });

  it("returns a single tool unchanged", () => {
    const tools = [createTool("Github.CreateIssue@1.0.0")];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toBe(tools);
    expect(result).toHaveLength(1);
  });

  it("breaks ties by keeping tools at the higher version", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0"),
      createTool("Github.ListPullRequests@1.0.0"),
      createTool("Github.SetStarred@2.0.0"),
      createTool("Github.GetStar@2.0.0"),
    ];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@2.0.0"))).toBe(
      true
    );
  });

  it("handles tools with no @ version gracefully", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      {
        ...createTool("Github.Broken@0.0.0"),
        fullyQualifiedName: "Github.Broken",
      },
    ];
    const result = filterToolsByMajorityVersion(tools);
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))).toBe(
      true
    );
  });
});
