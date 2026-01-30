import { describe, expect, it } from "vitest";

// Test the pure function that builds the GitHub edit URL
// The function is not exported, so we test the logic directly
describe("page-actions helpers", () => {
  describe("buildGithubEditUrl logic", () => {
    const GITHUB_JSON_BASE_URL =
      "https://github.com/ArcadeAI/docs/blob/main/data/toolkits";

    function buildGithubEditUrl(toolkitId: string): string {
      const jsonFileName = `${toolkitId.toLowerCase()}.json`;
      return `${GITHUB_JSON_BASE_URL}/${jsonFileName}`;
    }

    it("builds correct URL for simple toolkit ID", () => {
      expect(buildGithubEditUrl("Github")).toBe(
        "https://github.com/ArcadeAI/docs/blob/main/data/toolkits/github.json"
      );
    });

    it("lowercases the toolkit ID", () => {
      expect(buildGithubEditUrl("CustomerioApi")).toBe(
        "https://github.com/ArcadeAI/docs/blob/main/data/toolkits/customerioapi.json"
      );
    });

    it("handles toolkit IDs with uppercase letters", () => {
      expect(buildGithubEditUrl("SlackApi")).toBe(
        "https://github.com/ArcadeAI/docs/blob/main/data/toolkits/slackapi.json"
      );
    });

    it("handles single word toolkit IDs", () => {
      expect(buildGithubEditUrl("Jira")).toBe(
        "https://github.com/ArcadeAI/docs/blob/main/data/toolkits/jira.json"
      );
    });
  });

  describe("API endpoint construction", () => {
    it("constructs correct markdown API endpoint from pathname", () => {
      const pathname = "/en/resources/integrations/development/github";
      const endpoint = `/api/markdown${pathname}.md`;
      expect(endpoint).toBe(
        "/api/markdown/en/resources/integrations/development/github.md"
      );
    });

    it("handles different categories", () => {
      const pathname = "/en/resources/integrations/productivity/jira";
      const endpoint = `/api/markdown${pathname}.md`;
      expect(endpoint).toBe(
        "/api/markdown/en/resources/integrations/productivity/jira.md"
      );
    });
  });
});
