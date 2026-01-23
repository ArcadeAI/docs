import { describe, expect, it } from "vitest";

import { buildPipPackageName } from "../components/ToolkitPage";

describe("ToolkitPage helpers", () => {
  it("builds a pip package name from toolkit id", () => {
    expect(buildPipPackageName("Github")).toBe("arcade_github");
    expect(buildPipPackageName("Google Sheets")).toBe("arcade_google_sheets");
    expect(buildPipPackageName("Slack-Api")).toBe("arcade_slack_api");
  });
});
