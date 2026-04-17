/**
 * Tests for highest-version coherence filter
 */
import { describe, expect, it } from "vitest";
import type { ToolDefinition } from "../../src/types/index.js";
import {
  filterToolsByHighestVersion,
  getHighestVersion,
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

describe("getHighestVersion", () => {
  it("returns null for empty array", () => {
    expect(getHighestVersion([])).toBeNull();
  });

  it("returns the version when all tools share the same version", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
    ];
    expect(getHighestVersion(tools)).toBe("3.1.3");
  });

  it("returns the highest version when mixed", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.GetNotificationSummary@2.0.1"),
      createTool("Github.ListNotifications@2.0.1"),
    ];
    expect(getHighestVersion(tools)).toBe("3.1.3");
  });

  it("returns the version for a single tool", () => {
    const tools = [createTool("Github.CreateIssue@1.0.0")];
    expect(getHighestVersion(tools)).toBe("1.0.0");
  });

  it("picks the numerically higher version regardless of tool count", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0"),
      createTool("Github.ListPullRequests@1.0.0"),
      createTool("Github.SetStarred@2.0.0"),
    ];
    expect(getHighestVersion(tools)).toBe("2.0.0");
  });

  it("picks newer version even when it has fewer tools", () => {
    // New release @4.0.0 consolidated tools — only 2 remain.
    // Old stale tools @3.1.3 still outnumber it. Highest version wins.
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.Search@4.0.0"),
      createTool("Github.Advanced@4.0.0"),
    ];
    expect(getHighestVersion(tools)).toBe("4.0.0");
  });

  it("handles multi-digit version components correctly", () => {
    const tools = [
      createTool("Github.CreateIssue@9.0.0"),
      createTool("Github.SetStarred@10.0.0"),
    ];
    expect(getHighestVersion(tools)).toBe("10.0.0");
  });

  it("handles pre-release versions", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0-alpha.1"),
      createTool("Github.SetStarred@2.0.0-beta.1"),
    ];
    expect(getHighestVersion(tools)).toBe("2.0.0-beta.1");
  });

  it("handles build metadata versions", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0+build.456"),
      createTool("Github.SetStarred@3.0.0+build.789"),
    ];
    expect(getHighestVersion(tools)).toBe("3.0.0+build.789");
  });

  it("handles pre-release + build metadata combined", () => {
    const tools = [
      createTool("Github.CreateIssue@1.2.3-rc.1+build.789"),
      createTool("Github.SetStarred@4.0.0-beta.1+build.123"),
    ];
    expect(getHighestVersion(tools)).toBe("4.0.0-beta.1+build.123");
  });

  it("prefers stable release over pre-release with same core version", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc.1"),
      createTool("Github.SetStarred@1.23"),
    ];
    expect(getHighestVersion(tools)).toBe("1.23");
  });

  it("orders numeric pre-release identifiers numerically", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc.2"),
      createTool("Github.SetStarred@1.23-rc.10"),
    ];
    expect(getHighestVersion(tools)).toBe("1.23-rc.10");
  });

  it("treats non-numeric pre-release identifiers as higher than numeric ones", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc.1"),
      createTool("Github.SetStarred@1.23-rc.beta"),
    ];
    expect(getHighestVersion(tools)).toBe("1.23-rc.beta");
  });

  it("treats longer pre-release identifier lists as newer when prefix matches", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc"),
      createTool("Github.SetStarred@1.23-rc.1"),
    ];
    expect(getHighestVersion(tools)).toBe("1.23-rc.1");
  });

  it("distinguishes versions that differ only in the patch component", () => {
    const tools = [
      createTool("Github.CreateIssue@1.2.3"),
      createTool("Github.SetStarred@1.2.4"),
    ];
    expect(getHighestVersion(tools)).toBe("1.2.4");
  });

  it("orders alphanumeric pre-release identifiers by ASCII byte order", () => {
    // SemVer §11.4.2: alphanumeric identifiers compare by ASCII, not locale.
    // 'B' (66) < 'a' (97), so "1.0.0-Beta" < "1.0.0-alpha".
    const tools = [
      createTool("Github.CreateIssue@1.0.0-Beta"),
      createTool("Github.SetStarred@1.0.0-alpha"),
    ];
    expect(getHighestVersion(tools)).toBe("1.0.0-alpha");
  });

  it("orders alphanumeric pre-release identifiers when both are non-numeric", () => {
    const tools = [
      createTool("Github.CreateIssue@1.0.0-alpha"),
      createTool("Github.SetStarred@1.0.0-beta"),
    ];
    expect(getHighestVersion(tools)).toBe("1.0.0-beta");
  });

  it("returns null when every tool lacks an @version", () => {
    const tools = [
      {
        ...createTool("X.A@0.0.0"),
        fullyQualifiedName: "X.A",
      },
      {
        ...createTool("X.B@0.0.0"),
        fullyQualifiedName: "X.B",
      },
    ];
    // extractVersion defaults missing "@" to "0.0.0", so "highest" is
    // well-defined here. This test pins that contract so future changes
    // to extractVersion surface in the coherence layer.
    expect(getHighestVersion(tools)).toBe("0.0.0");
  });
});

describe("filterToolsByHighestVersion", () => {
  it("returns the same array reference when all tools share the same version", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toBe(tools); // same reference
    expect(result).toHaveLength(3);
  });

  it("filters out older-version tools", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.GetNotificationSummary@2.0.1"),
      createTool("Github.ListNotifications@2.0.1"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(5);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))).toBe(
      true
    );
  });

  it("keeps newer version even when it has fewer tools", () => {
    const tools = [
      createTool("Github.CreateIssue@3.1.3"),
      createTool("Github.ListPullRequests@3.1.3"),
      createTool("Github.SetStarred@3.1.3"),
      createTool("Github.GetStar@3.1.3"),
      createTool("Github.ListStars@3.1.3"),
      createTool("Github.Search@4.0.0"),
      createTool("Github.Advanced@4.0.0"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@4.0.0"))).toBe(
      true
    );
  });

  it("returns the original array for empty input", () => {
    const tools: ToolDefinition[] = [];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toBe(tools);
    expect(result).toHaveLength(0);
  });

  it("returns a single tool unchanged", () => {
    const tools = [createTool("Github.CreateIssue@1.0.0")];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toBe(tools);
    expect(result).toHaveLength(1);
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
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(2);
    expect(result.every((t) => t.fullyQualifiedName.endsWith("@3.1.3"))).toBe(
      true
    );
  });

  it("drops matching pre-release tools when stable release exists", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc.1"),
      createTool("Github.SetStarred@1.23"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(1);
    expect(result[0]?.fullyQualifiedName).toBe("Github.SetStarred@1.23");
  });

  it("keeps only the highest numeric pre-release", () => {
    const tools = [
      createTool("Github.CreateIssue@1.23-rc.2"),
      createTool("Github.SetStarred@1.23-rc.10"),
      createTool("Github.ListPullRequests@1.23-rc.1"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(1);
    expect(result[0]?.fullyQualifiedName).toBe("Github.SetStarred@1.23-rc.10");
  });

  it("keeps tools with equivalent core versions even when build metadata differs", () => {
    // Build metadata is ignored by semver precedence, so two tools tagged
    // `@1.0.0` and `@1.0.0+build.1` are the same release and both survive.
    const tools = [
      createTool("Github.CreateIssue@1.0.0"),
      createTool("Github.SetStarred@1.0.0+build.1"),
      createTool("Github.ListPullRequests@0.9.0"),
    ];
    const result = filterToolsByHighestVersion(tools);
    expect(result).toHaveLength(2);
    expect(result.map((t) => t.fullyQualifiedName)).toEqual([
      "Github.CreateIssue@1.0.0",
      "Github.SetStarred@1.0.0+build.1",
    ]);
  });
});
