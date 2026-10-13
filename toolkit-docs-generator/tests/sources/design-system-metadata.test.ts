import { describe, expect, it } from "vitest";
import { createDesignSystemMetadataSourceFromToolkits } from "../../src/sources/design-system-metadata";
import type { ToolkitMetadata } from "../../src/types/index";

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  category: "development",
  docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
  iconUrl: "https://design-system.arcade.dev/icons/github.svg",
  id: "Github",
  isBYOC: false,
  isComingSoon: false,
  isHidden: false,
  isPro: false,
  label: "GitHub",
  type: "arcade",
  ...overrides,
});

describe("DesignSystemMetadataSource", () => {
  it("returns exact match when present", async () => {
    const source = createDesignSystemMetadataSourceFromToolkits([
      createMetadata({
        id: "GithubApi",
        label: "GitHub API",
        type: "arcade_starter",
      }),
    ]);

    const meta = await source.getToolkitMetadata("GithubApi");
    expect(meta?.label).toBe("GitHub API");
    expect(meta?.type).toBe("arcade_starter");
  });

  it("falls back to base provider icon for *Api toolkits", async () => {
    const source = createDesignSystemMetadataSourceFromToolkits([
      createMetadata(),
    ]);

    const meta = await source.getToolkitMetadata("GithubApi");
    expect(meta?.label).toBe("GitHub API");
    expect(meta?.iconUrl).toBe(
      "https://design-system.arcade.dev/icons/github.svg"
    );
  });

  it("does not map non-api toolkits to an Api variant", async () => {
    const source = createDesignSystemMetadataSourceFromToolkits([
      createMetadata({
        category: "productivity",
        id: "FigmaApi",
        label: "Figma API",
        type: "arcade_starter",
      }),
    ]);

    const meta = await source.getToolkitMetadata("Figma");
    expect(meta).toBeNull();
  });
});
