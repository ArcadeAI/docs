import { describe, expect, it } from "vitest";
import {
  computeProcessingStats,
  filterProvidersBySkipIds,
} from "../../src/cli/generate-flow.js";

describe("computeProcessingStats", () => {
  it("ignores skip IDs that do not exist in the fetched toolkit list", () => {
    const toolkitList = new Map([
      ["github", {}],
      ["slack", {}],
      ["jira", {}],
    ]);
    const skipToolkitIds = new Set(["github", "nonexistent", "alsomissing"]);

    const stats = computeProcessingStats(toolkitList, skipToolkitIds);

    expect(stats.totalToolkits).toBe(3);
    expect(stats.effectiveSkipped).toBe(1);
    expect(stats.toProcess).toBe(2);
    expect(stats.unknownSkipIds).toEqual(
      expect.arrayContaining(["nonexistent", "alsomissing"])
    );
    expect(stats.unknownSkipIds).toHaveLength(2);
  });

  it("never returns negative toProcess", () => {
    const toolkitList = new Map([["github", {}]]);
    const skipToolkitIds = new Set(["github", "slack", "jira", "extra"]);

    const stats = computeProcessingStats(toolkitList, skipToolkitIds);

    expect(stats.toProcess).toBeGreaterThanOrEqual(0);
    expect(stats.effectiveSkipped).toBe(1);
    expect(stats.toProcess).toBe(0);
  });

  it("returns correct stats when all toolkits are processed", () => {
    const toolkitList = new Map([
      ["github", {}],
      ["slack", {}],
    ]);
    const skipToolkitIds = new Set<string>();

    const stats = computeProcessingStats(toolkitList, skipToolkitIds);

    expect(stats.totalToolkits).toBe(2);
    expect(stats.effectiveSkipped).toBe(0);
    expect(stats.toProcess).toBe(2);
    expect(stats.unknownSkipIds).toHaveLength(0);
  });

  it("is case-insensitive when matching skip IDs against toolkit list", () => {
    const toolkitList = new Map([
      ["GitHub", {}],
      ["Slack", {}],
    ]);
    const skipToolkitIds = new Set(["github", "slack"]);

    const stats = computeProcessingStats(toolkitList, skipToolkitIds);

    expect(stats.effectiveSkipped).toBe(2);
    expect(stats.toProcess).toBe(0);
    expect(stats.unknownSkipIds).toHaveLength(0);
  });
});

describe("filterProvidersBySkipIds", () => {
  it("filters provider entries when normalized provider ID is in skip IDs", () => {
    const providers = [
      { provider: "Github" },
      { provider: "Slack" },
      { provider: "Jira" },
    ];
    const skipToolkitIds = new Set(["github", "jira"]);

    const { providersToProcess, skippedProviders } = filterProvidersBySkipIds(
      providers,
      skipToolkitIds
    );

    expect(providersToProcess).toHaveLength(1);
    expect(providersToProcess[0].provider).toBe("Slack");
    expect(skippedProviders).toHaveLength(2);
  });

  it("is case-insensitive", () => {
    const providers = [
      { provider: "GITHUB" },
      { provider: "slack" },
      { provider: "Jira" },
    ];
    const skipToolkitIds = new Set(["github", "SLACK", "JIRA"]);

    const { providersToProcess, skippedProviders } = filterProvidersBySkipIds(
      providers,
      skipToolkitIds
    );

    expect(providersToProcess).toHaveLength(0);
    expect(skippedProviders).toHaveLength(3);
  });

  it("returns all providers when skip set is empty", () => {
    const providers = [{ provider: "Github" }, { provider: "Slack" }];
    const skipToolkitIds = new Set<string>();

    const { providersToProcess, skippedProviders } = filterProvidersBySkipIds(
      providers,
      skipToolkitIds
    );

    expect(providersToProcess).toHaveLength(2);
    expect(skippedProviders).toHaveLength(0);
  });

  it("keeps non-ignored providers from a mixed list", () => {
    const providers = [
      { provider: "Github", version: "1.0.0" },
      { provider: "Slack" },
      { provider: "Jira", version: "2.0.0" },
    ];
    const skipToolkitIds = new Set(["github"]);

    const { providersToProcess } = filterProvidersBySkipIds(
      providers,
      skipToolkitIds
    );

    expect(providersToProcess).toHaveLength(2);
    const providerNames = providersToProcess.map((p) => p.provider);
    expect(providerNames).toContain("Slack");
    expect(providerNames).toContain("Jira");
  });
});
