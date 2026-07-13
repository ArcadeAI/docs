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
  documentationChunks: [
    {
      type: "markdown",
      location: "description",
      position: "after",
      content: "## Toolkit setup\n\nConfigure the toolkit first.",
      priority: 10,
    },
  ],
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
      documentationChunks: [
        {
          type: "warning",
          location: "parameters",
          position: "before",
          content: "Use a verified recipient.",
          priority: 20,
        },
      ],
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

  test("includes toolkit and tool documentation chunks", () => {
    expect(md).toContain("## Toolkit setup");
    expect(md).toContain("Configure the toolkit first.");
    expect(md).toContain("Use a verified recipient.");
  });

  test("preserves repeated chunk content at different locations", () => {
    const repeated = "Repeat this guidance.";
    const output = toToolkitMarkdown({
      ...fixture,
      documentationChunks: [
        {
          type: "info",
          location: "description",
          position: "after",
          content: repeated,
        },
        {
          type: "warning",
          location: "auth",
          position: "before",
          content: repeated,
        },
      ],
    });

    expect(output.split(repeated)).toHaveLength(3);
  });
});
