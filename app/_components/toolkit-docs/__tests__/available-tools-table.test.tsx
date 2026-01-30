import { describe, expect, it, vi } from "vitest";

import {
  buildScopeDisplayItems,
  buildSecretDisplayItems,
  filterTools,
  handleSelectionButtonClick,
  toToolAnchorId,
} from "../components/available-tools-table";

describe("AvailableToolsTable helpers", () => {
  it("builds secret display items from secrets info", () => {
    const items = buildSecretDisplayItems(
      {
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        description: "Create an issue",
        secretsInfo: [
          { name: "GITHUB_API_KEY", type: "api_key" },
          { name: "SECONDARY_TOKEN", type: "token" },
        ],
      },
      { secretsDisplay: "summary" }
    );

    expect(items).toEqual([
      { label: "API key", href: undefined },
      { label: "Token", href: undefined },
    ]);
  });

  it("adds hrefs for secret type docs when base URL is provided", () => {
    const items = buildSecretDisplayItems(
      {
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        description: "Create an issue",
        secretsInfo: [{ name: "GITHUB_API_KEY", type: "api_key" }],
      },
      { secretsDisplay: "types", secretTypeDocsBaseUrl: "/references/secrets" }
    );

    expect(items).toEqual([
      { label: "API key", href: "/references/secrets/api_key" },
    ]);
  });

  it("filters tools by query and filter mode", () => {
    const tools = [
      {
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        description: "Create an issue",
        scopes: ["repo"],
        secrets: ["API_KEY"],
      },
      {
        name: "ListRepos",
        qualifiedName: "Github.ListRepos",
        description: "List repositories",
        scopes: [],
        secrets: [],
      },
    ];

    expect(filterTools(tools, "list", "all", [])).toEqual([tools[1]]);
    expect(filterTools(tools, "", "has_scopes", [])).toEqual([tools[0]]);
    expect(filterTools(tools, "", "no_secrets", [])).toEqual([tools[1]]);
    expect(filterTools(tools, "", "all", ["repo"])).toEqual([tools[0]]);
    expect(filterTools(tools, "", "all", ["missing"])).toEqual([]);
  });

  it("builds scope display items from scopes", () => {
    expect(
      buildScopeDisplayItems([" scope.one ", "", "scope.two", "scope.one"])
    ).toEqual(["scope.one", "scope.two"]);
  });

  it("matches the anchor id logic used by TableOfContents", () => {
    expect(toToolAnchorId("Github.CreateIssue")).toBe("githubcreateissue");
    expect(toToolAnchorId("Slack.Api.Send.Message")).toBe(
      "slackapisendmessage"
    );
    expect(toToolAnchorId("Slack Api.Send.Message")).toBe(
      "slack-apisendmessage"
    );
  });

  it("stops row navigation and toggles selection when clicking the button", () => {
    const stopPropagation = vi.fn();
    const onToggleSelection = vi.fn();

    handleSelectionButtonClick(
      { stopPropagation },
      onToggleSelection,
      "CreateIssue"
    );

    expect(stopPropagation).toHaveBeenCalledTimes(1);
    expect(onToggleSelection).toHaveBeenCalledWith("CreateIssue");
  });

  it("stops row navigation even when selection handler is missing", () => {
    const stopPropagation = vi.fn();
    handleSelectionButtonClick({ stopPropagation }, undefined, "CreateIssue");
    expect(stopPropagation).toHaveBeenCalledTimes(1);
  });
});
