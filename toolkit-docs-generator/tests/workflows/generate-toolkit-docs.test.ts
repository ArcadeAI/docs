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
  expect(workflowContents).toContain("schedule:");
  expect(workflowContents).toContain('cron: "0 11 * * *"');
});

test("porter workflow generates docs and opens a PR", () => {
  expect(workflowContents).toContain("pnpm dlx tsx src/cli/index.ts generate");
  expect(workflowContents).toContain("--skip-unchanged");
  expect(workflowContents).toContain("--require-complete");
  expect(workflowContents).toContain("--verbose");
  expect(workflowContents).toContain("--api-source tool-metadata");
  expect(workflowContents).toContain("--tool-metadata-url");
  expect(workflowContents).toContain("--tool-metadata-key");
  expect(workflowContents).toContain("--llm-provider openai");
  expect(workflowContents).toContain("--llm-model");
  expect(workflowContents).toContain("--llm-api-key");
  expect(workflowContents).toContain("--remove-empty-sections=false");
  expect(workflowContents).toContain("peter-evans/create-pull-request");
  expect(workflowContents).toContain("HUSKY: 0");
  expect(workflowContents).toContain("[AUTO] Adding MCP Servers docs update");
  expect(workflowContents).toContain("pull-requests: write");
});

test("porter workflow wires the secret-coherence editor", () => {
  expect(workflowContents).toContain("--llm-editor-provider anthropic");
  expect(workflowContents).toContain("--llm-editor-model");
  expect(workflowContents).toContain("--llm-editor-api-key");
  expect(workflowContents).toContain("ANTHROPIC_API_KEY");
  expect(workflowContents).toContain("claude-sonnet-4-6");
});

test("porter workflow opts JS actions into Node 24 to unblock the 2026-06-02 deprecation", () => {
  expect(workflowContents).toContain(
    'FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: "true"'
  );
});

test("workflow_dispatch accepts a providers input for focused manual runs", () => {
  expect(workflowContents).toContain("providers:");
  expect(workflowContents).toContain("inputs.providers");
  // A non-empty providers input must bypass --skip-unchanged so the
  // secret-coherence scan actually re-evaluates the chosen toolkits.
  expect(workflowContents).toContain("PROVIDERS_INPUT=");
  expect(workflowContents).toContain("--all --skip-unchanged");
});
