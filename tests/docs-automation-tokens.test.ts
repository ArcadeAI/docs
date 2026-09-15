import { readFileSync } from "node:fs";
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
  test(`${name} authenticates PR writes with Docs Bot, not GITHUB_TOKEN`, () => {
    const yaml = readWorkflow(name);

    expect(yaml).toContain("uses: ./.github/actions/app-token");
    expect(yaml).toContain("secrets.DOCS_BOT_CLIENT_ID");
    expect(yaml).toContain("secrets.DOCS_BOT_PRIVATE_KEY");
    expect(yaml).toContain("steps.app-token.outputs.token");
    expect(yaml).not.toContain("secrets.GITHUB_TOKEN");
  });
}

test("app-token composite action mints a GitHub App installation token", () => {
  const action = readFileSync(
    join(process.cwd(), ".github", "actions", "app-token", "action.yml"),
    "utf-8"
  );

  expect(action).toContain("actions/create-github-app-token@v2");
});
