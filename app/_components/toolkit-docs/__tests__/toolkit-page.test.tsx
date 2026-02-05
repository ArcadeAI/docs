import { describe, expect, it } from "vitest";

import {
  buildObservedSectionIds,
  buildPipPackageName,
  TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK,
  TOOLKIT_PAGE_GET_BUILDING_LINK,
  TOOLKIT_PAGE_OVERVIEW_LINK,
  TOOLKIT_PAGE_SELECTED_TOOLS_LINK,
} from "../components/toolkit-page";

describe("ToolkitPage helpers", () => {
  it("builds a pip package name from toolkit id", () => {
    expect(buildPipPackageName("Github")).toBe("arcade_github");
    expect(buildPipPackageName("Google Sheets")).toBe("arcade_google_sheets");
    expect(buildPipPackageName("Slack-Api")).toBe("arcade_slack_api");
    expect(buildPipPackageName("SlackApi")).toBe("arcade_slack_api");
  });

  it("defines sidebar navigation links", () => {
    expect(TOOLKIT_PAGE_OVERVIEW_LINK).toEqual({
      id: "overview",
      label: "Overview",
      href: "#overview",
    });
    expect(TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK).toEqual({
      id: "available-tools",
      label: "Available tools",
      href: "#available-tools",
    });
    expect(TOOLKIT_PAGE_SELECTED_TOOLS_LINK).toEqual({
      id: "selected-tools",
      label: "Selected tools",
      href: "#selected-tools",
    });
    expect(TOOLKIT_PAGE_GET_BUILDING_LINK).toEqual({
      id: "get-building",
      label: "Get building",
      href: "#get-building",
    });
  });

  it("builds observed section ids including overview and tools", () => {
    expect(
      buildObservedSectionIds([
        { qualifiedName: "Github.CreateIssue" },
        { qualifiedName: "Slack.ListChannels" },
      ])
    ).toEqual([
      "overview",
      "available-tools",
      "selected-tools",
      "githubcreateissue",
      "slacklistchannels",
      "get-building",
    ]);
  });
});
