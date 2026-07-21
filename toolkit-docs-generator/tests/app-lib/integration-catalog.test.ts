import { describe, expect, it } from "vitest";
import { mergeToolkitCatalogFields } from "../../../app/_lib/integration-catalog";
import { toIntegrationLink } from "../../../app/_lib/integration-index";
import type { ToolkitWithDocsLink } from "../../../app/_lib/toolkit-slug";

const makeDsToolkit = (
  overrides: Partial<ToolkitWithDocsLink> & { id: string }
): ToolkitWithDocsLink =>
  ({
    label: overrides.id,
    type: "arcade",
    category: "development",
    isHidden: false,
    isComingSoon: false,
    isBYOC: false,
    isPro: false,
    docsLink:
      "https://docs.arcade.dev/en/resources/integrations/development/alpha-api",
    ...overrides,
  }) as ToolkitWithDocsLink;

describe("mergeToolkitCatalogFields", () => {
  it("lets JSON docsLink and category override design-system fields", () => {
    const merged = mergeToolkitCatalogFields(
      makeDsToolkit({ id: "AlphaApi" }),
      {
        docsLink:
          "https://docs.arcade.dev/en/resources/integrations/productivity/alpha",
        category: "productivity",
      }
    );

    expect(merged.docsLink).toBe(
      "https://docs.arcade.dev/en/resources/integrations/productivity/alpha"
    );
    expect(merged.category).toBe("productivity");
    expect(toIntegrationLink(merged)).toBe(
      "/en/resources/integrations/productivity/alpha"
    );
  });

  it("keeps empty-string JSON metadata instead of falling back to DS", () => {
    const merged = mergeToolkitCatalogFields(
      makeDsToolkit({
        id: "AlphaApi",
        category: "development",
        docsLink:
          "https://docs.arcade.dev/en/resources/integrations/development/alpha-api",
      }),
      {
        docsLink: "",
        category: "",
      }
    );

    expect(merged.docsLink).toBe("");
    expect(merged.category).toBe("others");
    // Empty docsLink → kebab id; empty category → others. Matches resolveToolkitRoute.
    expect(toIntegrationLink(merged)).toBe(
      "/en/resources/integrations/others/alpha-api"
    );
  });

  it("falls back to design-system fields when JSON omits the keys", () => {
    const merged = mergeToolkitCatalogFields(
      makeDsToolkit({
        id: "AlphaApi",
        category: "development",
        docsLink:
          "https://docs.arcade.dev/en/resources/integrations/development/alpha-api",
      }),
      {}
    );

    expect(merged.docsLink).toBe(
      "https://docs.arcade.dev/en/resources/integrations/development/alpha-api"
    );
    expect(merged.category).toBe("development");
  });

  it("falls back when JSON fields are null (same as ?? in resolveToolkitRoute)", () => {
    const merged = mergeToolkitCatalogFields(
      makeDsToolkit({
        id: "AlphaApi",
        category: "development",
        docsLink:
          "https://docs.arcade.dev/en/resources/integrations/development/alpha-api",
      }),
      {
        docsLink: null,
        category: null,
      }
    );

    expect(merged.docsLink).toBe(
      "https://docs.arcade.dev/en/resources/integrations/development/alpha-api"
    );
    expect(merged.category).toBe("development");
  });
});
