import { describe, expect, test } from "vitest";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";
import { toToolkitMarkdown } from "@/app/_lib/toolkit-markdown";

/**
 * MARTECH-17 follow-up: toolkit pages render per-tool detail client-only, so the
 * edge HTML→markdown "copy page" view lost parameters/output/examples. The data
 * route now builds markdown straight from ToolkitData; this guards that the
 * serializer emits that detail.
 */
const fixture: ToolkitData = {
  id: "Demo",
  label: "Demo",
  version: "1.0.0",
  description: "A demo toolkit.",
  metadata: {
    category: "development",
    iconUrl: "",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  documentationChunks: [],
  customImports: [],
  subPages: [],
  tools: [
    {
      name: "DoThing",
      qualifiedName: "Demo.DoThing",
      fullyQualifiedName: "Demo.DoThing@1.0.0",
      description: "Does a thing.",
      parameters: [
        {
          name: "recipient",
          type: "string",
          required: true,
          description: "Who to do the thing for",
          enum: null,
          inferrable: true,
        },
      ],
      auth: { providerId: "demo", providerType: "oauth2", scopes: ["scope.a"] },
      secrets: ["API_KEY"],
      secretsInfo: [],
      output: { type: "json", description: "The result" },
      documentationChunks: [],
      codeExample: {
        toolName: "Demo.DoThing",
        parameters: {
          recipient: { value: "someone", type: "string", required: true },
        },
        requiresAuth: true,
      },
    },
  ],
};

describe("toToolkitMarkdown", () => {
  const md = toToolkitMarkdown(fixture);

  test("includes the toolkit header and tool heading", () => {
    expect(md).toContain("# Demo");
    expect(md).toContain("### Demo.DoThing");
  });

  test("includes per-tool detail missing from the slimmed HTML", () => {
    expect(md).toContain(
      "| `recipient` | string | Yes | Who to do the thing for |"
    );
    expect(md).toContain("**Output:** `json` — The result");
    expect(md).toContain("scope.a");
    expect(md).toContain("API_KEY");
    expect(md).toContain("Example input");
  });

  test("includes toolkit and tool curation in deterministic order", () => {
    const curated: ToolkitData = {
      ...fixture,
      documentationChunks: [
        {
          type: "markdown",
          location: "custom_section",
          position: "after",
          content: "Later toolkit prose.",
          priority: 20,
        },
        {
          type: "markdown",
          location: "custom_section",
          position: "after",
          content: "Earlier toolkit prose.",
          priority: 10,
        },
      ],
      tools: fixture.tools.map((tool) => ({
        ...tool,
        documentationChunks: [
          {
            type: "markdown",
            location: "description",
            position: "after",
            content: "Curated tool prose.",
          },
        ],
      })),
    };

    const result = toToolkitMarkdown(curated);
    expect(result).toContain("Curated tool prose.");
    expect(result.indexOf("Earlier toolkit prose.")).toBeLessThan(
      result.indexOf("Later toolkit prose.")
    );
  });

  test("uses replacement curation instead of a generated section", () => {
    const curated: ToolkitData = {
      ...fixture,
      tools: fixture.tools.map((tool) => ({
        ...tool,
        documentationChunks: [
          {
            type: "markdown",
            location: "output",
            position: "replace",
            content: "A hand-authored output contract.",
          },
        ],
      })),
    };

    const result = toToolkitMarkdown(curated);
    expect(result).toContain("A hand-authored output contract.");
    expect(result).not.toContain("**Output:** `json` — The result");
  });
});
