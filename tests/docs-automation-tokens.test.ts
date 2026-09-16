import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "vitest";

const readWorkflow = (name: string) =>
  readFileSync(join(process.cwd(), ".github", "workflows", name), "utf-8");

const AUTOMATION_WORKFLOWS = [
  "generate-toolkit-docs.yml",
  "llmstxt.yml",
  "update-design-system-dependency.yml",
] as const;

for (const name of AUTOMATION_WORKFLOWS) {
  test(`${name} opens PRs with GITHUB_TOKEN, not Docs Bot`, () => {
    const yaml = readWorkflow(name);

    expect(yaml).not.toContain("uses: ./.github/actions/app-token");
    expect(yaml).not.toContain("DOCS_BOT_CLIENT_ID");
    expect(yaml).not.toContain("DOCS_BOT_PRIVATE_KEY");
    expect(yaml).not.toContain("create-github-app-token");
    expect(yaml).toContain("github.token");
  });
}

test("docs automation no longer ships a GitHub App token action", () => {
  expect(
    existsSync(
      join(process.cwd(), ".github", "actions", "app-token", "action.yml")
    )
  ).toBe(false);
});
