import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "vitest";

const workflowPath = join(
  process.cwd(),
  ".github",
  "workflows",
  "generate-toolkit-docs.yml"
);

const workflowContents = readFileSync(workflowPath, "utf-8");

test("porter workflow includes required triggers", () => {
  expect(workflowContents).toContain("repository_dispatch");
  expect(workflowContents).toContain("porter_deploy_succeeded");
  expect(workflowContents).toContain("workflow_dispatch");
});

test("porter workflow generates docs and opens a PR", () => {
  expect(workflowContents).toContain("pnpm dlx tsx src/cli/index.ts generate");
  expect(workflowContents).toContain("--skip-unchanged");
  expect(workflowContents).toContain("--tool-metadata-url");
  expect(workflowContents).toContain("--tool-metadata-key");
  expect(workflowContents).toContain("peter-evans/create-pull-request");
  expect(workflowContents).toContain("pull-requests: write");
});
