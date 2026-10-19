import { describe, expect, test } from "vitest";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";
import type { PartnerToolkit } from "@/app/_data/partner-toolkits";
import { toIntegrationCatalog } from "@/app/_lib/integration-catalog";

const INTEGRATIONS = "https://docs.arcade.dev/en/resources/integrations";

// Minimal generated toolkit file. toIntegrationCatalog only reads `id`,
// `label`, and `metadata`.
const makeGenerated = (
  id: string,
  metadata: Partial<ToolkitData["metadata"]> = {}
): ToolkitData =>
  ({
    id,
    label: `${id} Label`,
    metadata: {
      category: "social",
      iconUrl: `https://design-system.arcade.dev/icons/${id.toLowerCase()}.svg`,
      isBYOC: false,
      isPro: false,
      type: "arcade",
      docsLink: `${INTEGRATIONS}/social/${id.toLowerCase()}`,
      isComingSoon: false,
      isHidden: false,
      ...metadata,
    },
  }) as unknown as ToolkitData;

const partner = {
  id: "Partner",
  label: "Partner",
  category: "search",
  publicIconUrl: "/images/partners/partner.svg",
  isBYOC: true,
  isPro: false,
  isPartner: true,
  type: "verified",
  mcpUrl: "https://mcp.example.com/mcp",
  docsLink: `${INTEGRATIONS}/search/partner`,
  relativeDocsLink: "/en/resources/integrations/search/partner",
  isComingSoon: false,
  isHidden: false,
} satisfies PartnerToolkit;

describe("toIntegrationCatalog", () => {
  test("lists a published toolkit with the card fields from its generated file", () => {
    const [toolkit] = toIntegrationCatalog(
      [makeGenerated("Twilio", { isBYOC: true, type: "verified" })],
      []
    );

    expect(toolkit).toEqual({
      id: "Twilio",
      label: "Twilio Label",
      isBYOC: true,
      isPro: false,
      publicIconUrl: "https://design-system.arcade.dev/icons/twilio.svg",
      docsLink: `${INTEGRATIONS}/social/twilio`,
      relativeDocsLink: "/en/resources/integrations/social/twilio",
      type: "verified",
      category: "social",
      isComingSoon: false,
      isHidden: false,
    });
  });

  test("lists only toolkits that have a generated file", () => {
    const ids = toIntegrationCatalog(
      [makeGenerated("Slack"), makeGenerated("SlackApi")],
      []
    ).map((toolkit) => toolkit.id);

    expect(ids).toEqual(["Slack", "SlackApi"]);
  });

  test("leaves out the platform's own toolkits", () => {
    const ids = toIntegrationCatalog(
      [
        makeGenerated("Math"),
        makeGenerated("ArcadeEngineApi"),
        makeGenerated("Slack"),
      ],
      []
    ).map((toolkit) => toolkit.id);

    expect(ids).toEqual(["Slack"]);
  });

  test("appends partner toolkits after the published ones", () => {
    const ids = toIntegrationCatalog([makeGenerated("Slack")], [partner]).map(
      (toolkit) => toolkit.id
    );

    expect(ids).toEqual(["Slack", "Partner"]);
  });
});
