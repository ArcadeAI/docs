import { describe, expect, it } from "vitest";
import {
  buildToolInput,
  generateJavaScriptExample,
  generatePythonExample,
} from "../components/dynamic-code-block";
import type { ToolCodeExample } from "../types";

describe("DynamicCodeBlock helpers", () => {
  it("builds tool input with placeholders for required values", () => {
    const codeExample: ToolCodeExample = {
      toolName: "Github.CreateIssue",
      parameters: {
        title: {
          value: null,
          type: "string",
          required: true,
        },
        body: {
          value: null,
          type: "string",
          required: false,
        },
      },
      requiresAuth: true,
      authProvider: "github",
    };

    const toolInput = buildToolInput(codeExample.parameters);

    expect(toolInput).toEqual({
      title: "your_value",
    });
  });

  it("generates JavaScript example with auth flow", () => {
    const codeExample: ToolCodeExample = {
      toolName: "Github.CreateIssue",
      parameters: {
        owner: {
          value: "arcadeai",
          type: "string",
          required: true,
        },
        labels: {
          value: ["bug", "high-priority"],
          type: "array",
          required: false,
        },
      },
      requiresAuth: true,
      authProvider: "github",
      tabLabel: "Call the Tool with User Authorization",
    };

    const output = generateJavaScriptExample(codeExample);

    expect(output).toContain("client.tools.authorize");
    expect(output).toContain("user_id: USER_ID");
    expect(output).toContain('const TOOL_NAME = "Github.CreateIssue";');
    expect(output).toContain('owner: "arcadeai"');
    expect(output).toContain('labels: ["bug", "high-priority"]');
  });

  it("generates Python example without auth flow when not required", () => {
    const codeExample: ToolCodeExample = {
      toolName: "Slack.ListChannels",
      parameters: {
        limit: {
          value: 50,
          type: "integer",
          required: false,
        },
      },
      requiresAuth: false,
    };

    const output = generatePythonExample(codeExample);

    expect(output).not.toContain("authorize");
    expect(output).not.toContain("USER_ID");
    expect(output).toContain('TOOL_NAME = "Slack.ListChannels"');
    expect(output).toContain("tool_input = {");
    expect(output).toContain('"limit": 50');
  });

  it("serializes non-finite numbers as None in Python output", () => {
    const codeExample: ToolCodeExample = {
      toolName: "Slack.ListChannels",
      parameters: {
        limit: {
          value: Number.NaN,
          type: "integer",
          required: false,
        },
      },
      requiresAuth: false,
    };

    const output = generatePythonExample(codeExample);

    expect(output).toContain('"limit": None');
  });
});
