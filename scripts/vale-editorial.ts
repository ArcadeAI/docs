#!/usr/bin/env npx tsx

/**
 * Editorial Review for Merged Pull Requests
 *
 * Runs after a PR is merged to analyze docs against STYLEGUIDE.md
 * and create a follow-up PR with structural improvements.
 *
 * Usage:
 *   pnpm vale:editorial --pr 123
 *   GITHUB_TOKEN=xxx ANTHROPIC_API_KEY=xxx pnpm vale:editorial --pr 123
 *
 * Prefers Anthropic (Claude) if ANTHROPIC_API_KEY is set, falls back to OpenAI.
 */

import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "@octokit/rest";
import { config } from "dotenv";
import OpenAI from "openai";

// Load environment variables
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
if (existsSync(envPath)) {
  config({ path: envPath });
}

// Constants
const KILOBYTE = 1024;
const MAX_FILE_SIZE_KB = 50;
const MAX_FILE_SIZE = MAX_FILE_SIZE_KB * KILOBYTE;
const MAX_FILES = 5;
const MAX_AI_TOKENS = 8192;
const OWNER = "ArcadeAI";
const REPO = "docs";
const EDITORIAL_COMMENT_REGEX = /<!-- Editorial: (.+?) -->/;
const HTTP_UNPROCESSABLE_ENTITY = 422;
const MEGABYTE = KILOBYTE * KILOBYTE;
const MAX_BUFFER_MB = 10;

// Load style guide
const STYLE_GUIDE_PATH = join(__dirname, "..", "STYLEGUIDE.md");
const STYLE_GUIDE = existsSync(STYLE_GUIDE_PATH)
  ? readFileSync(STYLE_GUIDE_PATH, "utf-8")
  : "";

// Types
type PRInfo = {
  number: number;
  author: string;
  title: string;
  files: string[];
};

type EditorialSuggestion = {
  filename: string;
  originalContent: string;
  revisedContent: string;
  summary: string;
};

// AI client type
type AIClient =
  | { type: "anthropic"; client: Anthropic }
  | { type: "openai"; client: OpenAI };

type ValeIssue = {
  line: number;
  message: string;
  rule: string;
};

type ValeOutput = Record<string, ValeIssue[]>;

// Run Vale on content and return issues
function runValeOnContent(filename: string, content: string): ValeIssue[] {
  // Create temp directory and file with correct extension
  const tempDir = mkdtempSync(join(tmpdir(), "vale-editorial-"));
  const ext = filename.endsWith(".mdx") ? ".mdx" : ".md";
  const tempFile = join(tempDir, `temp${ext}`);

  try {
    writeFileSync(tempFile, content);

    const result = spawnSync("vale", ["--output=JSON", tempFile], {
      encoding: "utf-8",
      maxBuffer: MAX_BUFFER_MB * MEGABYTE,
    });

    if (result.error) {
      console.error("Vale error:", result.error);
      return [];
    }

    const output: ValeOutput = JSON.parse(result.stdout || "{}");
    return output[tempFile] ?? [];
  } catch {
    return [];
  } finally {
    try {
      unlinkSync(tempFile);
    } catch {
      // Ignore cleanup errors
    }
  }
}

// Build prompt to fix Vale issues in content
function buildValeFixPrompt(content: string, issues: ValeIssue[]): string {
  return `Fix the following Vale style issues in this markdown content.

VALE ISSUES:
${JSON.stringify(issues, null, 2)}

RULES:
1. ONLY fix the specific issues listed - make minimal changes
2. If a message says "Use 'X' instead of 'Y'", find Y and replace with X
3. Preserve all code blocks, frontmatter, and technical details exactly
4. Return ONLY the corrected markdown content, no explanations

CONTENT:
${content}`;
}

// Fix Vale issues using LLM
async function fixValeIssues(
  ai: AIClient,
  content: string,
  issues: ValeIssue[]
): Promise<string> {
  if (issues.length === 0) {
    return content;
  }

  const prompt = buildValeFixPrompt(content, issues);

  try {
    if (ai.type === "anthropic") {
      const response = await ai.client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: MAX_AI_TOKENS,
        messages: [{ role: "user", content: prompt }],
      });
      const textBlock = response.content.find((b) => b.type === "text");
      return textBlock?.type === "text" ? textBlock.text : content;
    }

    const response = await ai.client.chat.completions.create({
      model: "gpt-4-turbo",
      max_tokens: MAX_AI_TOKENS,
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0]?.message?.content ?? content;
  } catch (error) {
    console.error("Error fixing Vale issues:", error);
    return content;
  }
}

// Parse command line args
function parseArgs(): { prNumber: number } {
  const args = process.argv.slice(2);
  const prIndex = args.indexOf("--pr");
  if (prIndex === -1 || !args[prIndex + 1]) {
    console.error("Usage: vale-editorial --pr <number>");
    process.exit(1);
  }
  return { prNumber: Number.parseInt(args[prIndex + 1], 10) };
}

// Get PR info including author and changed files
async function getPRInfo(octokit: Octokit, prNumber: number): Promise<PRInfo> {
  const { data: pr } = await octokit.rest.pulls.get({
    owner: OWNER,
    repo: REPO,
    pull_number: prNumber,
  });

  if (!pr.merged) {
    console.error(`PR #${prNumber} has not been merged yet`);
    process.exit(1);
  }

  const { data: files } = await octokit.rest.pulls.listFiles({
    owner: OWNER,
    repo: REPO,
    pull_number: prNumber,
  });

  const docFiles = files
    .filter((f) => f.filename.startsWith("app/en/"))
    .filter((f) => f.filename.endsWith(".md") || f.filename.endsWith(".mdx"))
    .filter((f) => f.status !== "removed")
    .slice(0, MAX_FILES)
    .map((f) => f.filename);

  return {
    number: prNumber,
    author: pr.user?.login ?? "unknown",
    title: pr.title,
    files: docFiles,
  };
}

// Build prompt for editorial review
function buildEditorialPrompt(filename: string, content: string): string {
  return `You are a technical documentation editor. Your job is to ensure docs conform to the style guide.

STYLE GUIDE:
${STYLE_GUIDE}

TASK: Revise this documentation file to conform to the style guide above.

ONLY make changes that bring the doc into conformance with the style guide. For each change you make, you must be able to point to the specific style guide section that requires it.

DO NOT:
1. Change code examples or technical details
2. Fix word choices or grammar (Vale handles that separately)
3. Make subjective "improvements" not required by the style guide
4. Add content beyond what the style guide specifies

FILE: ${filename}

CONTENT:
${content}

If the doc already conforms to the style guide, return exactly: NO_CHANGES_NEEDED

If changes are needed to conform to the style guide:
1. Return ONLY the revised markdown content, no explanations
2. Preserve all code blocks exactly as they are
3. Preserve frontmatter exactly as it is
4. Add a brief HTML comment at the top (after frontmatter) citing which style guide sections required changes:
   <!-- Editorial: [Style guide section] - [what was changed] -->`;
}

// Get editorial suggestions from Anthropic
async function getEditorialFromAnthropic(
  client: Anthropic,
  filename: string,
  content: string
): Promise<EditorialSuggestion | null> {
  const prompt = buildEditorialPrompt(filename, content);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: MAX_AI_TOKENS,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    return null;
  }

  const revisedContent = textBlock.text.trim();

  if (revisedContent === "NO_CHANGES_NEEDED") {
    return null;
  }

  // Extract summary from the HTML comment if present
  const commentMatch = revisedContent.match(EDITORIAL_COMMENT_REGEX);
  const summary = commentMatch ? commentMatch[1] : "Structural improvements";

  return {
    filename,
    originalContent: content,
    revisedContent,
    summary,
  };
}

// Get editorial suggestions from OpenAI
async function getEditorialFromOpenAI(
  client: OpenAI,
  filename: string,
  content: string
): Promise<EditorialSuggestion | null> {
  const prompt = buildEditorialPrompt(filename, content);

  const response = await client.chat.completions.create({
    model: "gpt-4-turbo",
    max_tokens: MAX_AI_TOKENS,
    messages: [{ role: "user", content: prompt }],
  });

  const revisedContent = response.choices[0]?.message?.content?.trim();
  if (!revisedContent || revisedContent === "NO_CHANGES_NEEDED") {
    return null;
  }

  const commentMatch = revisedContent.match(EDITORIAL_COMMENT_REGEX);
  const summary = commentMatch ? commentMatch[1] : "Structural improvements";

  return {
    filename,
    originalContent: content,
    revisedContent,
    summary,
  };
}

// Get editorial suggestion for a file
async function getEditorialSuggestion(
  ai: AIClient,
  filename: string,
  content: string
): Promise<EditorialSuggestion | null> {
  try {
    if (ai.type === "anthropic") {
      return await getEditorialFromAnthropic(ai.client, filename, content);
    }
    return await getEditorialFromOpenAI(ai.client, filename, content);
  } catch (error) {
    console.error(`Error getting editorial review for ${filename}:`, error);
    return null;
  }
}

// Create a branch, apply changes, and open a PR
async function createEditorialPR(
  octokit: Octokit,
  ai: AIClient,
  prInfo: PRInfo,
  suggestions: EditorialSuggestion[]
): Promise<string> {
  const branchName = `style/editorial-${prInfo.number}`;
  const providerName = ai.type === "anthropic" ? "Claude" : "GPT-4 Turbo";

  // Get the default branch's latest commit SHA
  const { data: repo } = await octokit.rest.repos.get({
    owner: OWNER,
    repo: REPO,
  });

  const { data: ref } = await octokit.rest.git.getRef({
    owner: OWNER,
    repo: REPO,
    ref: `heads/${repo.default_branch}`,
  });

  // Create new branch
  try {
    await octokit.rest.git.createRef({
      owner: OWNER,
      repo: REPO,
      ref: `refs/heads/${branchName}`,
      sha: ref.object.sha,
    });
  } catch (error: unknown) {
    // Branch might already exist, try to update it
    const apiError = error as { status?: number };
    if (apiError.status === HTTP_UNPROCESSABLE_ENTITY) {
      await octokit.rest.git.updateRef({
        owner: OWNER,
        repo: REPO,
        ref: `heads/${branchName}`,
        sha: ref.object.sha,
        force: true,
      });
    } else {
      throw error;
    }
  }

  // Commit each file change (after running Vale to fix any style issues)
  for (const suggestion of suggestions) {
    // Run Vale on revised content and fix any issues
    let finalContent = suggestion.revisedContent;
    const valeIssues = runValeOnContent(suggestion.filename, finalContent);

    if (valeIssues.length > 0) {
      console.log(
        `  Fixing ${valeIssues.length} Vale issue(s) in ${suggestion.filename}...`
      );
      finalContent = await fixValeIssues(ai, finalContent, valeIssues);
    }

    // Get the current file to get its SHA
    const { data: currentFile } = await octokit.rest.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: suggestion.filename,
      ref: branchName,
    });

    if (Array.isArray(currentFile) || currentFile.type !== "file") {
      console.error(`Unexpected content type for ${suggestion.filename}`);
      continue;
    }

    // Update the file
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: suggestion.filename,
      message: `Editorial: ${suggestion.summary}`,
      content: Buffer.from(finalContent).toString("base64"),
      sha: currentFile.sha,
      branch: branchName,
    });
  }

  // Build PR body with summaries
  const fileChanges = suggestions
    .map((s) => `- **${s.filename}**: ${s.summary}`)
    .join("\n");

  // Create PR
  const { data: newPR } = await octokit.rest.pulls.create({
    owner: OWNER,
    repo: REPO,
    title: `Editorial improvements for #${prInfo.number}`,
    head: branchName,
    base: repo.default_branch,
    body: `## Editorial Review

This PR contains structural improvements to documentation changed in #${prInfo.number}.

### Changes

${fileChanges}

### Context

These suggestions are based on our [style guide](./STYLEGUIDE.md) and focus on document structure, not word-level fixes (which are handled by Vale).

Review each change carefully - accept what improves the docs, modify what needs adjustment, or close this PR if the changes aren't helpful.

---
_Generated by editorial review using ${providerName}_`,
  });

  // Assign to original author
  await octokit.rest.issues.addAssignees({
    owner: OWNER,
    repo: REPO,
    issue_number: newPR.number,
    assignees: [prInfo.author],
  });

  return newPR.html_url;
}

// Initialize AI client based on available API keys
function initializeAIClient(
  anthropicKey: string | undefined,
  openaiKey: string | undefined
): AIClient {
  if (anthropicKey) {
    console.log("Using Claude (Anthropic) for editorial review");
    return {
      type: "anthropic",
      client: new Anthropic({ apiKey: anthropicKey }),
    };
  }
  console.log("Using GPT-4 Turbo (OpenAI) for editorial review");
  return { type: "openai", client: new OpenAI({ apiKey: openaiKey }) };
}

// Process a single file and return editorial suggestion if any
async function processFile(
  octokit: Octokit,
  ai: AIClient,
  filename: string
): Promise<EditorialSuggestion | null> {
  const { data: fileData } = await octokit.rest.repos.getContent({
    owner: OWNER,
    repo: REPO,
    path: filename,
  });

  if (Array.isArray(fileData) || fileData.type !== "file") {
    console.log(`Skipping ${filename} (not a file)`);
    return null;
  }

  const content = Buffer.from(fileData.content, "base64").toString("utf-8");

  if (content.length > MAX_FILE_SIZE) {
    console.log(`Skipping ${filename} (too large)`);
    return null;
  }

  console.log(`Reviewing ${filename}...`);
  const suggestion = await getEditorialSuggestion(ai, filename, content);

  if (suggestion) {
    console.log("  → Structural improvements suggested");
  } else {
    console.log("  → No structural changes needed");
  }

  return suggestion;
}

// Main function
async function main() {
  const { prNumber } = parseArgs();

  // Validate environment
  const githubToken = process.env.GITHUB_TOKEN;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!githubToken) {
    console.error("GITHUB_TOKEN is required");
    process.exit(1);
  }

  if (!(anthropicKey || openaiKey)) {
    console.error("ANTHROPIC_API_KEY or OPENAI_API_KEY is required");
    process.exit(1);
  }

  const octokit = new Octokit({ auth: githubToken });
  const ai = initializeAIClient(anthropicKey, openaiKey);

  console.log(`Running editorial review for merged PR #${prNumber}...`);

  const prInfo = await getPRInfo(octokit, prNumber);

  if (prInfo.files.length === 0) {
    console.log("No documentation files were changed in this PR");
    return;
  }

  console.log(`PR #${prNumber} by @${prInfo.author}: "${prInfo.title}"`);
  console.log(`Found ${prInfo.files.length} doc file(s) to review`);

  // Process each file and collect suggestions
  const suggestions: EditorialSuggestion[] = [];

  for (const filename of prInfo.files) {
    try {
      const suggestion = await processFile(octokit, ai, filename);
      if (suggestion) {
        suggestions.push(suggestion);
      }
    } catch (error) {
      console.error(`Error processing ${filename}:`, error);
    }
  }

  if (suggestions.length === 0) {
    console.log("\nNo editorial improvements needed. No PR created.");
    return;
  }

  console.log(`\nCreating editorial PR with ${suggestions.length} file(s)...`);

  const prUrl = await createEditorialPR(octokit, ai, prInfo, suggestions);

  console.log(`\nEditorial PR created: ${prUrl}`);
  console.log(`Assigned to @${prInfo.author} for review.`);
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
