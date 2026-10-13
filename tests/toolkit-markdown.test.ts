import { describe, expect, test } from "vitest";
import type { ToolkitData } from "@/components/toolkit-docs/types";
import { toToolkitMarkdown } from "@/lib/toolkit-markdown";

/**
 * MARTECH-17 follow-up: toolkit pages render per-tool detail client-only, so the
 * edge HTML→markdown "copy page" view lost parameters/output/examples. The data
 * route now builds markdown straight from ToolkitData; this guards that the
 * serializer emits that detail.
 */
const fixture: ToolkitData = {
  auth: null,
  customImports: [],
  description: "A demo toolkit.",
  documentationChunks: [],
  id: "Demo",
  label: "Demo",
  metadata: {
    category: "development",
    docsLink: "",
    iconUrl: "",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [
    {
      auth: { providerId: "demo", providerType: "oauth2", scopes: ["scope.a"] },
      codeExample: {
        parameters: {
          recipient: { required: true, type: "string", value: "someone" },
        },
        requiresAuth: true,
        toolName: "Demo.DoThing",
      },
      description: "Does a thing.",
      documentationChunks: [],
      fullyQualifiedName: "Demo.DoThing@1.0.0",
      name: "DoThing",
      output: { description: "The result", type: "json" },
      parameters: [
        {
          description: "Who to do the thing for",
          enum: null,
          inferrable: true,
          name: "recipient",
          required: true,
          type: "string",
        },
      ],
      qualifiedName: "Demo.DoThing",
      secrets: ["API_KEY"],
      secretsInfo: [],
    },
  ],
  version: "1.0.0",
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
