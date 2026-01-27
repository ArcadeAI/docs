import { describe, expect, it } from "vitest";

import { getRequiredScopes, getSelectedToolNames } from "./scope-picker";

describe("scope picker helpers", () => {
  const tools = [
    { name: "SendEmail", scopes: ["scope.send", " scope.send "] },
    { name: "ListEmails", scopes: ["scope.read", ""] },
  ];

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
});
