import type { Code, Link, Paragraph, Root, Text } from "mdast";
import { describe, expect, it } from "vitest";
import { AGENT_PLUGIN_GATEWAY_URL } from "@/lib/agent-plugin";
import { applySubstitutions, remarkSubstitute } from "@/lib/remark-substitute";

const substitute = remarkSubstitute();

describe("applySubstitutions", () => {
  it("replaces a known token", () => {
    expect(applySubstitutions("Paste {{ARCADE_PLUGIN_GATEWAY_URL}}")).toBe(
      `Paste ${AGENT_PLUGIN_GATEWAY_URL}`
    );
  });

  it("replaces every occurrence of a token", () => {
    const result = applySubstitutions(
      "{{ARCADE_PLUGIN_REPO}} and {{ARCADE_PLUGIN_REPO}}"
    );
    expect(result).toBe("ArcadeAI/arcade-plugin and ArcadeAI/arcade-plugin");
  });

  it("leaves unknown tokens alone so OAuth placeholders survive", () => {
    expect(applySubstitutions('client_id: "{{client_id}}"')).toBe(
      'client_id: "{{client_id}}"'
    );
  });

  it("derives the one-click install links from the gateway URL", () => {
    const cursor = applySubstitutions("{{ARCADE_PLUGIN_CURSOR_INSTALL_LINK}}");
    const encoded = new URL(cursor).searchParams.get("config") ?? "";
    const config = JSON.parse(Buffer.from(encoded, "base64").toString("utf-8"));
    expect(config.url).toBe(AGENT_PLUGIN_GATEWAY_URL);

    const vscode = applySubstitutions("{{ARCADE_PLUGIN_VSCODE_INSTALL_LINK}}");
    const vscodeConfig = JSON.parse(
      new URL(vscode).searchParams.get("config") ?? ""
    );
    expect(vscodeConfig).toEqual({
      type: "http",
      url: AGENT_PLUGIN_GATEWAY_URL,
    });
  });
});

describe("remarkSubstitute", () => {
  it("substitutes in the raw source Nextra exports for copy-page and agents", () => {
    const file = {
      value: "Paste {{ARCADE_PLUGIN_GATEWAY_URL}} as an MCP server.",
    };
    const tree: Root = { type: "root", children: [] };

    substitute(tree, file);

    expect(file.value).toBe(
      `Paste ${AGENT_PLUGIN_GATEWAY_URL} as an MCP server.`
    );
  });

  it("substitutes inside fenced code blocks", () => {
    const code: Code = {
      type: "code",
      lang: "text",
      value: "{{ARCADE_PLUGIN_GATEWAY_URL}}",
    };
    const tree: Root = { type: "root", children: [code] };

    substitute(tree, {});

    expect(code.value).toBe(AGENT_PLUGIN_GATEWAY_URL);
  });

  it("substitutes inside link targets", () => {
    const link: Link = {
      type: "link",
      url: "{{ARCADE_PLUGIN_GATEWAY_URL}}",
      children: [],
    };
    const paragraph: Paragraph = { type: "paragraph", children: [link] };
    const tree: Root = { type: "root", children: [paragraph] };

    substitute(tree, {});

    expect(link.url).toBe(AGENT_PLUGIN_GATEWAY_URL);
  });

  it("substitutes inside prose", () => {
    const text: Text = {
      type: "text",
      value: "Run {{ARCADE_PLUGIN_INSTALL_COMMAND}} to start.",
    };
    const paragraph: Paragraph = { type: "paragraph", children: [text] };
    const tree: Root = { type: "root", children: [paragraph] };

    substitute(tree, {});

    expect(text.value).toBe(
      "Run npx plugins add ArcadeAI/arcade-plugin to start."
    );
  });
});
