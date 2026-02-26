import { describe, expect, it } from "vitest";
import { createDesignSystemMetadataSourceFromToolkits } from "../../src/sources/design-system-metadata.js";
import type { ToolkitMetadata } from "../../src/types/index.js";

const createMetadata = (
  overrides: Partial<ToolkitMetadata> = {}
): ToolkitMetadata => ({
  id: "Github",
  label: "GitHub",
  category: "development",
  iconUrl: "https://design-system.arcade.dev/icons/github.svg",
  isBYOC: false,
  isPro: false,
  type: "arcade",
  docsLink: "https://docs.arcade.dev/en/mcp-servers/development/github",
  isComingSoon: false,
  isHidden: false,
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
        id: "FigmaApi",
        label: "Figma API",
        category: "productivity",
        type: "arcade_starter",
      }),
    ]);

    const meta = await source.getToolkitMetadata("Figma");
    expect(meta).toBeNull();
  });
});
