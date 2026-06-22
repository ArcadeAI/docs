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
  },
  auth: null,
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
});
