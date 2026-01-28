import { describe, expect, it } from "vitest";

import { buildOptimizedPageContent } from "../components/page-actions";
import type { ToolkitData } from "../types";

describe("buildOptimizedPageContent", () => {
  const baseToolkit: ToolkitData = {
    id: "Github",
    label: "GitHub",
    version: "1.0.0",
    description: "Toolkit description",
    summary: "Toolkit summary",
    metadata: {
      category: "development",
      iconUrl: "https://example.com/icon.svg",
      isBYOC: false,
      isPro: false,
      type: "arcade",
      docsLink: "https://docs.arcade.dev",
    },
    auth: null,
    tools: [
      {
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        fullyQualifiedName: "Github.CreateIssue@1.0.0",
        description: "Create an issue",
        parameters: [],
        auth: null,
        secrets: [],
        output: null,
        documentationChunks: [],
      },
    ],
    customImports: [],
    subPages: [],
  };

  it("adds generic examples before tool listing", () => {
    const content = buildOptimizedPageContent(baseToolkit);
    expect(content.indexOf('"examples"')).toBeLessThan(
      content.indexOf('"tools"')
    );
  });

  it("includes JavaScript and TypeScript tool execution examples", () => {
    const content = buildOptimizedPageContent(baseToolkit);
    const parsed = JSON.parse(content);

    expect(parsed.examples.javascript).toContain("client.tools.execute");
    expect(parsed.examples.javascript).toContain("const toolInput = {");
    expect(parsed.examples.typescript).toContain("client.tools.execute");
    expect(parsed.examples.typescript).toContain(
      "const toolInput: Record<string, unknown> = {"
    );
  });

  it("does not include per-tool code examples", () => {
    const content = buildOptimizedPageContent(baseToolkit);
    const parsed = JSON.parse(content);

    expect(parsed.tools[0].codeExample).toBeUndefined();
  });
});
