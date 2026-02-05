import { describe, expect, it } from "vitest";
import type { ProviderVersion } from "../../src/types/index.js";
import { resolveProviderIdsFromMetadata } from "../../src/utils/provider-matching.js";

describe("resolveProviderIdsFromMetadata", () => {
  it("matches by toolkit id (case-insensitive)", () => {
    const providers: ProviderVersion[] = [{ provider: "githubapi" }];
    const toolkits = [
      { id: "GithubApi", label: "GitHub API" },
      { id: "Github", label: "GitHub" },
    ];

    const resolved = resolveProviderIdsFromMetadata(providers, toolkits);
    expect(resolved[0]?.provider).toBe("GithubApi");
  });

  it("matches by toolkit label (spaces)", () => {
    const providers: ProviderVersion[] = [{ provider: "GitHub API" }];
    const toolkits = [{ id: "GithubApi", label: "GitHub API" }];

    const resolved = resolveProviderIdsFromMetadata(providers, toolkits);
    expect(resolved[0]?.provider).toBe("GithubApi");
  });

  it("matches ids with -api and _api suffixes", () => {
    const providers: ProviderVersion[] = [
      { provider: "github-api" },
      { provider: "github_api" },
    ];
    const toolkits = [{ id: "GithubApi", label: "GitHub API" }];

    const resolved = resolveProviderIdsFromMetadata(providers, toolkits);
    expect(resolved[0]?.provider).toBe("GithubApi");
    expect(resolved[1]?.provider).toBe("GithubApi");
  });

  it("leaves unknown providers unchanged", () => {
    const providers: ProviderVersion[] = [{ provider: "UnknownToolkit" }];
    const toolkits = [{ id: "Github", label: "GitHub" }];

    const resolved = resolveProviderIdsFromMetadata(providers, toolkits);
    expect(resolved[0]?.provider).toBe("UnknownToolkit");
  });
});
