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
    expect(md.indexOf("## Toolkit setup")).toBeLessThan(md.indexOf("## Tools"));
    expect(md.indexOf("Use a verified recipient.")).toBeLessThan(
      md.indexOf("**Parameters**")
    );
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

  test("uses replacement chunks instead of the default section", () => {
    const output = toToolkitMarkdown({
      ...fixture,
      tools: [
        {
          ...fixture.tools[0],
          documentationChunks: [
            {
              type: "markdown",
              location: "parameters",
              position: "replace",
              content: "Custom parameter guidance.",
            },
          ],
        },
      ],
    });

    expect(output).toContain("Custom parameter guidance.");
    expect(output).not.toContain("| Name | Type | Required | Description |");
  });

  test("uses toolkit description chunks around the default description", () => {
    const output = toToolkitMarkdown({
      ...fixture,
      documentationChunks: [
        {
          type: "markdown",
          location: "description",
          position: "before",
          content: "Read this first.",
        },
        {
          type: "markdown",
          location: "description",
          position: "replace",
          content: "Custom toolkit description.",
        },
        {
          type: "markdown",
          location: "description",
          position: "after",
          content: "Read this last.",
        },
      ],
    });

    expect(output).toContain("Read this first.");
    expect(output).toContain("Custom toolkit description.");
    expect(output).toContain("Read this last.");
    expect(output).not.toContain("A demo toolkit.");
    expect(output.indexOf("Read this first.")).toBeLessThan(
      output.indexOf("Custom toolkit description.")
    );
    expect(output.indexOf("Custom toolkit description.")).toBeLessThan(
      output.indexOf("Read this last.")
    );
  });

  test("empty replacement chunks still suppress the default section", () => {
    const output = toToolkitMarkdown({
      ...fixture,
      tools: [
        {
          ...fixture.tools[0],
          documentationChunks: [
            {
              type: "markdown",
              location: "parameters",
              position: "replace",
              content: "   ",
            },
          ],
        },
      ],
    });

    expect(output).not.toContain("| Name | Type | Required | Description |");
  });

  test("sorts headed chunks before unheaded chunks like the page renderer", () => {
    const output = toToolkitMarkdown({
      ...fixture,
      documentationChunks: [
        {
          type: "markdown",
          location: "custom_section",
          position: "before",
          content: "No header",
        },
        {
          type: "markdown",
          location: "custom_section",
          position: "before",
          content: "Section B",
          header: "## B",
        },
        {
          type: "markdown",
          location: "custom_section",
          position: "before",
          content: "Section A",
          header: "## A",
        },
      ],
    });

    expect(output.indexOf("Section A")).toBeLessThan(
      output.indexOf("Section B")
    );
    expect(output.indexOf("Section B")).toBeLessThan(
      output.indexOf("No header")
    );
  });
});
