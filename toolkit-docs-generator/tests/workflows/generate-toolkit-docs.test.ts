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
  expect(workflowContents).toContain(
    "../node_modules/.bin/tsx src/cli/index.ts generate"
  );
  // pnpm dlx resolves an unpinned tsx from the registry on every run, so the
  // nightly's TypeScript runtime would drift outside the lockfile.
  expect(workflowContents).not.toContain("pnpm dlx");
  expect(workflowContents).toContain("--skip-unchanged");
  expect(workflowContents).toContain("--preserve-last-known-good");
  expect(workflowContents).toContain("--verbose");
  expect(workflowContents).toContain("--api-source tool-metadata");
  expect(workflowContents).toContain("--tool-metadata-url");
  expect(workflowContents).toContain("--tool-metadata-key");
  expect(workflowContents).toContain("--llm-provider anthropic");
  expect(workflowContents).toContain("--llm-model");
  expect(workflowContents).toContain("--llm-api-key");
  expect(workflowContents).toContain("--llm-max-tokens 8192");
  expect(workflowContents).toContain("--exclude-file ./remove-toolkits.txt");
  expect(workflowContents).toContain("--ignore-file ./skip-toolkits.txt");
  expect(workflowContents).toContain("--remove-empty-sections=false");
  expect(workflowContents).toContain("peter-evans/create-pull-request");
  expect(workflowContents).toContain("HUSKY: 0");
  expect(workflowContents).toContain("[AUTO] Adding MCP Servers docs update");
  expect(workflowContents).toContain("pull-requests: write");
});

test("porter workflow does not build the docs generator before running it", () => {
  // toolkit-docs-generator has no package.json, so a `pnpm build` step
  // there resolves to the root manifest's `next build --webpack` — a full
  // Next.js production build that the tsx-executed CLI below doesn't need.
  expect(workflowContents).not.toContain("Build toolkit docs generator");
  expect(workflowContents).not.toMatch(
    /run: pnpm build\s*\n\s*working-directory: toolkit-docs-generator/
  );
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

test("porter workflow alerts Slack when generation fails", () => {
  expect(workflowContents).toContain("needs.generate.result == 'failure'");
  expect(workflowContents).toContain("SLACK_PROJ_DOCS_WEBHOOK_URL");
  // The jq program is single-quoted, so the shell passes backslashes through
  // untouched. `\n` reaches jq as a newline escape; `\\n` would reach it as an
  // escaped backslash followed by "n" and Slack would print a literal "\n".
  expect(workflowContents).toContain("generation failed\\n\\n*Workflow run:*");
  expect(workflowContents).not.toContain("\\\\n");
});

test("porter workflow warns when it preserves or omits a broken toolkit", () => {
  expect(workflowContents).toContain("preservedToolkits");
  expect(workflowContents).toContain("omittedToolkits");
  expect(workflowContents).toContain("Continuing to serve previous docs");
  expect(workflowContents).toContain("No docs are being served");
});

test("workflow dispatch keeps default full-run behavior", () => {
  expect(workflowContents).toContain("workflow_dispatch:");
  expect(workflowContents).toContain("--all");
  expect(workflowContents).toContain("--skip-unchanged");
  expect(workflowContents).not.toContain("providers:");
  expect(workflowContents).not.toContain("inputs.providers");
  expect(workflowContents).not.toContain("PROVIDERS_INPUT=");
});
