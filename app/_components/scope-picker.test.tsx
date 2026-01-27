import { describe, expect, it } from "vitest";

import {
  DEFAULT_SHOW_UNSELECTED_TOOLS,
  getRequiredScopes,
  getSelectedToolNames,
  getToolsForSelectionGrid,
} from "./scope-picker";

describe("scope picker helpers", () => {
  const tools = [
    { name: "SendEmail", scopes: ["scope.send", " scope.send "] },
    { name: "ListEmails", scopes: ["scope.read", ""] },
  ];

  it("defaults to hiding unselected tools", () => {
    expect(DEFAULT_SHOW_UNSELECTED_TOOLS).toBe(false);
  });

  it("filters selected tools to known names only", () => {
    const selected = new Set(["SendEmail", "UnknownTool"]);

    expect(getSelectedToolNames(tools, selected)).toEqual(["SendEmail"]);
  });

  it("builds required scopes for selected tools", () => {
    const selected = new Set(["SendEmail", "ListEmails"]);

    expect(getRequiredScopes(tools, selected)).toEqual([
      "scope.read",
      "scope.send",
    ]);
  });

  it("returns empty scopes when no valid tools selected", () => {
    const selected = new Set(["UnknownTool"]);

    expect(getRequiredScopes(tools, selected)).toEqual([]);
  });

  it("builds the selection grid with selected tools only by default", () => {
    const selected = new Set(["ListEmails"]);
    expect(getToolsForSelectionGrid(tools, selected)).toEqual([tools[1]]);
  });

  it("can include unselected tools in the selection grid", () => {
    const selected = new Set(["ListEmails"]);
    expect(getToolsForSelectionGrid(tools, selected, true)).toEqual(tools);
  });
});
