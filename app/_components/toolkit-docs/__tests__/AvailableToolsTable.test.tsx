import { describe, expect, it } from "vitest";

import {
  buildToolsTableData,
  toToolAnchorId,
} from "../components/AvailableToolsTable";

describe("AvailableToolsTable helpers", () => {
  it("builds table data with fallback descriptions", () => {
    const data = buildToolsTableData([
      {
        name: "CreateIssue",
        qualifiedName: "Github.CreateIssue",
        description: "Create an issue",
        secretsInfo: [
          { name: "GITHUB_API_KEY", type: "api_key" },
          { name: "SECONDARY_TOKEN", type: "token" },
          { name: "ANOTHER_API_KEY", type: "api_key" },
        ],
      },
      {
        name: "ListPullRequests",
        qualifiedName: "Github.ListPullRequests",
        description: null,
        secrets: ["WEBHOOK_SECRET"],
      },
      {
        name: "GetRepo",
        qualifiedName: "Github.GetRepo",
        description: null,
        secrets: [],
      },
    ]);

    expect(data).toEqual([
      ["Github.CreateIssue", "Create an issue", "API key, Token"],
      ["Github.ListPullRequests", "No description provided.", "WEBHOOK_SECRET"],
      ["Github.GetRepo", "No description provided.", "None"],
    ]);
  });

  it("includes secret type docs base URL when provided", () => {
    const data = buildToolsTableData(
      [
        {
          name: "CreateIssue",
          qualifiedName: "Github.CreateIssue",
          description: "Create an issue",
          secretsInfo: [{ name: "GITHUB_API_KEY", type: "api_key" }],
        },
      ],
      {
        secretsDisplay: "types",
        secretTypeDocsBaseUrl: "/references/secrets",
      }
    );

    expect(data).toEqual([
      [
        "Github.CreateIssue",
        "Create an issue",
        "API key (/references/secrets/api_key)",
      ],
    ]);
  });

  it("matches the anchor id logic used by TableOfContents", () => {
    expect(toToolAnchorId("Github.CreateIssue")).toBe("githubcreateissue");
    expect(toToolAnchorId("Slack Api.Send Message")).toBe(
      "slack-api.send-message".replace(".", "")
    );
  });
});
