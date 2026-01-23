#!/usr/bin/env npx tsx

/**
 * Vale Style Review for Pull Requests
 *
 * Runs Vale on changed files in a PR, sends issues to an LLM for fixes,
 * and posts suggestions as GitHub PR review comments.
 *
 * Usage:
 *   pnpm vale:review --pr 123
 *   GITHUB_TOKEN=xxx ANTHROPIC_API_KEY=xxx pnpm vale:review --pr 123
 *   GITHUB_TOKEN=xxx OPENAI_API_KEY=xxx pnpm vale:review --pr 123
 *
 * Prefers Anthropic (Claude) if ANTHROPIC_API_KEY is set, falls back to OpenAI.
 */

import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
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
const MEGABYTE = KILOBYTE * KILOBYTE;
const MAX_FILE_SIZE_KB = 50;
const MAX_FILE_SIZE = MAX_FILE_SIZE_KB * KILOBYTE;
const MAX_BUFFER_MB = 10;
const MAX_FILES = 10;
const MAX_AI_TOKENS = 4096;
const LINE_NUM_WIDTH = 4;
const CONTENT_MATCH_PREFIX_LENGTH = 20;
const JSON_CODE_BLOCK_REGEX = /```(?:json)?\s*([\s\S]*?)```/;
const DIFF_HUNK_REGEX = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/;
const OWNER = "ArcadeAI";
const REPO = "docs";
const MAX_LENGTH_CHANGE_RATIO = 0.5;
const MIN_SUGGESTED_LENGTH_RATIO = 0.7; // Suggested must be at least 70% of original length
const CODE_BLOCK_MARKER = "```";

// Load style guide
const STYLE_GUIDE_PATH = join(__dirname, "..", "STYLEGUIDE.md");
const STYLE_GUIDE = existsSync(STYLE_GUIDE_PATH)
  ? readFileSync(STYLE_GUIDE_PATH, "utf-8")
  : "";

// Types
type ValeIssue = {
  line: number;
  column: number;
  severity: string;
  message: string;
  rule: string;
};

type ValeOutput = Record<string, ValeIssue[]>;

type Suggestion = {
  line: number;
  endLine?: number;
  original: string;
  suggested: string;
  rule: string;
  reason: string;
};

type ReviewComment = {
  path: string;
  line: number;
  start_line?: number;
  body: string;
};

type FileWithDiff = {
  filename: string;
  commentableLines: Set<number>;
};

// Regex to identify Vale-generated comments (starts with **`Rule.Name`**:)
const VALE_COMMENT_REGEX = /^\*\*`[A-Za-z]+\.[A-Za-z]+`\*\*:/;

// Parse command line args
function parseArgs(): { prNumber: number } {
  const args = process.argv.slice(2);
  const prIndex = args.indexOf("--pr");
  if (prIndex === -1 || !args[prIndex + 1]) {
    console.error("Usage: vale-style-review --pr <number>");
    process.exit(1);
  }
  return { prNumber: Number.parseInt(args[prIndex + 1], 10) };
}

// Parse a unified diff patch to extract line numbers that can receive comments
// GitHub only allows comments on lines that are part of the diff (added or context lines)
function parseDiffForCommentableLines(patch: string | undefined): Set<number> {
  const commentableLines = new Set<number>();

  if (!patch) {
    return commentableLines;
  }

  const lines = patch.split("\n");

  let currentNewLine = 0;
  let inHunk = false;

  for (const line of lines) {
    const hunkMatch = line.match(DIFF_HUNK_REGEX);

    if (hunkMatch) {
      // Start of a new hunk - get the starting line number in the new file
      currentNewLine = Number.parseInt(hunkMatch[1], 10);
      inHunk = true;
      continue;
    }

    if (!inHunk) {
      continue;
    }

    if (line.startsWith("-")) {
      // Deleted line - doesn't exist in new file, don't increment
      continue;
    }

    if (line.startsWith("+") || line.startsWith(" ")) {
      // Added or context line - these are commentable
      commentableLines.add(currentNewLine);
      currentNewLine += 1;
    }
    // Lines starting with "\" (e.g., "\ No newline at end of file") are skipped
  }

  return commentableLines;
}

// Get changed files from PR with their commentable line numbers
async function getChangedFiles(
  octokit: Octokit,
  prNumber: number
): Promise<FileWithDiff[]> {
  const { data: files } = await octokit.rest.pulls.listFiles({
    owner: OWNER,
    repo: REPO,
    pull_number: prNumber,
  });

  return files
    .filter((f) => f.filename.startsWith("app/en/"))
    .filter((f) => f.filename.endsWith(".md") || f.filename.endsWith(".mdx"))
    .filter((f) => f.status !== "removed")
    .slice(0, MAX_FILES)
    .map((f) => ({
      filename: f.filename,
      commentableLines: parseDiffForCommentableLines(f.patch),
    }));
}

// Get existing Vale review comments on the PR to avoid duplicates
// Returns a Set of "path:line" keys that already have Vale comments
async function getExistingValeComments(
  octokit: Octokit,
  prNumber: number
): Promise<Set<string>> {
  const existingComments = new Set<string>();

  try {
    // Paginate through all review comments
    const comments = await octokit.paginate(
      octokit.rest.pulls.listReviewComments,
      {
        owner: OWNER,
        repo: REPO,
        pull_number: prNumber,
        per_page: 100,
      }
    );

    for (const comment of comments) {
      // Check if this looks like a Vale comment
      if (VALE_COMMENT_REGEX.test(comment.body.trim())) {
        // Use the line number (prefer line, fall back to original_line for outdated comments)
        const line = comment.line ?? comment.original_line;
        if (line && comment.path) {
          const key = `${comment.path}:${line}`;
          existingComments.add(key);
        }
      }
    }

    if (existingComments.size > 0) {
      console.log(
        `Found ${existingComments.size} existing Vale comment(s) to skip`
      );
    }
  } catch (error) {
    console.warn("Warning: Could not fetch existing comments:", error);
  }

  return existingComments;
}

// Run Vale on files and get JSON output
function runVale(files: string[]): ValeOutput {
  const existingFiles = files.filter((f) => existsSync(f));
  if (existingFiles.length === 0) {
    return {};
  }

  const result = spawnSync("vale", ["--output=JSON", ...existingFiles], {
    encoding: "utf-8",
    maxBuffer: MAX_BUFFER_MB * MEGABYTE,
  });

  if (result.error) {
    console.error("Vale error:", result.error);
    return {};
  }

  try {
    return JSON.parse(result.stdout || "{}");
  } catch {
    console.error("Failed to parse Vale output");
    return {};
  }
}

// Add line numbers to content
function addLineNumbers(content: string): string {
  return content
    .split("\n")
    .map((line, i) => `${(i + 1).toString().padStart(LINE_NUM_WIDTH)}: ${line}`)
    .join("\n");
}

// Build prompt for LLM
function buildPrompt(
  filename: string,
  content: string,
  issues: ValeIssue[]
): string {
  const numberedContent = addLineNumbers(content);

  return `You are a technical documentation style editor.

STYLE GUIDE:
${STYLE_GUIDE}

TASK: Fix the Vale style issues listed below for this file. Return JSON with your suggestions.

CRITICAL - NEVER MODIFY CODE:
- NEVER suggest changes to lines inside code blocks (lines between \`\`\` markers)
- NEVER suggest changes to code examples, import statements, function calls, or variable names
- SKIP any Vale issue that appears inside a code block or affects code

RULES:
1. ONLY fix the specific issues listed - do not make any other changes
2. Make MINIMAL changes - only change the specific word or phrase mentioned in the issue
3. NEVER delete content, rewrite sentences, or change anything beyond the flagged issue
4. If a message says "Use 'X' instead of 'Y'", find ONLY Y and replace with X - nothing else
5. Preserve technical accuracy - never change code or technical details
6. For passive voice - only fix if active voice is clearer
7. If an issue should NOT be fixed (e.g., passive voice is appropriate, or it's inside code), OMIT IT
8. The "original" field must contain the EXACT full line from the file
9. The "suggested" field must be identical to "original" EXCEPT for the specific fix
10. The "suggested" field should not be significantly shorter than the "original" - you are fixing style, not removing content

FILE: ${filename}

VALE ISSUES:
${JSON.stringify(issues, null, 2)}

FILE CONTENT:
${numberedContent}

Return a JSON object with this exact structure:
{
  "suggestions": [
    {
      "line": <line number>,
      "original": "<the exact original line content>",
      "suggested": "<the corrected line content>",
      "rule": "<the Vale rule name from the issue, e.g. 'Arcade.WordList'>",
      "reason": "<brief explanation>"
    }
  ]
}

Only include suggestions where you have a concrete fix. Return empty suggestions array if no fixes needed.`;
}

// AI client type
type AIClient =
  | { type: "anthropic"; client: Anthropic }
  | { type: "openai"; client: OpenAI };

// Get suggestions using Anthropic (Claude)
async function getSuggestionsFromAnthropic(
  client: Anthropic,
  prompt: string
): Promise<Suggestion[]> {
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: MAX_AI_TOKENS,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    return [];
  }

  // Extract JSON from response (may be wrapped in markdown code blocks)
  let jsonText = textBlock.text;
  const jsonMatch = jsonText.match(JSON_CODE_BLOCK_REGEX);
  if (jsonMatch) {
    jsonText = jsonMatch[1];
  }

  const parsed = JSON.parse(jsonText);
  return Array.isArray(parsed.suggestions) ? parsed.suggestions : [];
}

// Get suggestions using OpenAI
async function getSuggestionsFromOpenAI(
  client: OpenAI,
  prompt: string
): Promise<Suggestion[]> {
  const response = await client.chat.completions.create({
    model: "gpt-4-turbo",
    max_tokens: MAX_AI_TOKENS,
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  });

  const text = response.choices[0]?.message?.content;
  if (!text) {
    return [];
  }

  const parsed = JSON.parse(text);
  return Array.isArray(parsed.suggestions) ? parsed.suggestions : [];
}

// Get suggestions from LLM (supports both providers)
async function getSuggestions(
  ai: AIClient,
  filename: string,
  content: string,
  issues: ValeIssue[]
): Promise<Suggestion[]> {
  const prompt = buildPrompt(filename, content, issues);

  try {
    if (ai.type === "anthropic") {
      return await getSuggestionsFromAnthropic(ai.client, prompt);
    }
    return await getSuggestionsFromOpenAI(ai.client, prompt);
  } catch (error) {
    console.error(`Error getting suggestions for ${filename}:`, error);
    return [];
  }
}

// Check which lines are inside code blocks (fenced with ```)
// Returns a Set of line numbers (1-indexed) that are inside code blocks
function getLinesInCodeBlocks(content: string): Set<number> {
  const linesInCodeBlocks = new Set<number>();
  const lines = content.split("\n");
  let inCodeBlock = false;
  let openingBacktickCount = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const lineNum = i + 1; // 1-indexed

    // Count leading spaces (CommonMark allows at most 3 spaces for fence markers)
    let leadingSpaces = 0;
    for (const char of line) {
      if (char === " ") {
        leadingSpaces += 1;
      } else {
        break;
      }
    }

    // Only consider fence markers if indentation is 0-3 spaces
    const trimmedLine = line.trim();

    // Check if this line starts or ends a code block
    if (leadingSpaces <= 3 && trimmedLine.startsWith(CODE_BLOCK_MARKER)) {
      // Count consecutive backticks at the start
      let backtickCount = 0;
      for (const char of trimmedLine) {
        if (char === "`") {
          backtickCount += 1;
        } else {
          break;
        }
      }

      if (inCodeBlock) {
        // For closing fence: must have at least as many backticks as opening
        // AND only whitespace after the backticks (per CommonMark spec)
        const afterBackticks = trimmedLine.slice(backtickCount);
        if (
          backtickCount >= openingBacktickCount &&
          afterBackticks.trim() === ""
        ) {
          // Closing a code block - this line is still part of the block
          linesInCodeBlocks.add(lineNum);
          inCodeBlock = false;
          openingBacktickCount = 0;
        } else {
          // Not a valid closing fence, treat as content inside the code block
          linesInCodeBlocks.add(lineNum);
        }
      } else {
        // Opening a code block - this line is part of the block
        linesInCodeBlocks.add(lineNum);
        inCodeBlock = true;
        openingBacktickCount = backtickCount;
      }
    } else if (inCodeBlock) {
      // Inside a code block
      linesInCodeBlocks.add(lineNum);
    }
  }

  return linesInCodeBlocks;
}

// Validate that a suggestion has the required fields with correct types
function hasValidFields(s: Suggestion): boolean {
  return (
    typeof s.line === "number" &&
    typeof s.original === "string" &&
    typeof s.suggested === "string" &&
    typeof s.rule === "string"
  );
}

// Check if a suggestion would remove too much content
function wouldRemoveContent(s: Suggestion): boolean {
  const originalLen = s.original.trim().length;
  const suggestedLen = s.suggested.trim().length;
  return (
    originalLen > 0 && suggestedLen < originalLen * MIN_SUGGESTED_LENGTH_RATIO
  );
}

// Check if a suggestion makes destructive length changes
function isDestructiveChange(s: Suggestion): boolean {
  const lengthDiff = Math.abs(s.suggested.trim().length - s.original.trim().length);
  return lengthDiff > s.original.trim().length * MAX_LENGTH_CHANGE_RATIO;
}

// Format suggestions as GitHub review comments
// Only includes suggestions for lines that are in the PR diff and don't already have Vale comments
function formatReviewComments(options: {
  filename: string;
  suggestions: Suggestion[];
  fileContent: string;
  commentableLines: Set<number>;
  existingComments: Set<string>;
}): ReviewComment[] {
  const {
    filename,
    suggestions,
    fileContent,
    commentableLines,
    existingComments,
  } = options;
  const lines = fileContent.split("\n");

  // Get lines that are inside code blocks - NEVER modify these
  const linesInCodeBlocks = getLinesInCodeBlocks(fileContent);

  return suggestions
    .filter((s) => {
      // Skip if there's already a Vale comment on this line
      const commentKey = `${filename}:${s.line}`;
      if (existingComments.has(commentKey)) {
        console.log(`  Skipping line ${s.line} (already has Vale comment)`);
        return false;
      }
      // Validate required fields exist and have correct types
      if (!hasValidFields(s)) {
        return false;
      }
      // Validate line number is in range
      if (s.line < 1 || s.line > lines.length) {
        return false;
      }
      // CRITICAL: Never modify lines inside code blocks
      if (linesInCodeBlocks.has(s.line)) {
        console.log(
          `  Skipping line ${s.line} (inside code block - code must not be modified)`
        );
        return false;
      }
      // Validate line is in the PR diff (GitHub API requirement)
      if (!commentableLines.has(s.line)) {
        return false;
      }
      // Reject suggestions that remove content (suggested is too short)
      if (wouldRemoveContent(s)) {
        console.log(
          `  Skipping line ${s.line} (suggested text too short - would remove content)`
        );
        return false;
      }
      // Reject destructive suggestions (length change > 50% of original)
      if (isDestructiveChange(s)) {
        console.log(`  Skipping destructive suggestion on line ${s.line}`);
        return false;
      }
      // Validate original content matches (loosely)
      const actualLine = lines[s.line - 1];
      return actualLine.includes(
        s.original.trim().slice(0, CONTENT_MATCH_PREFIX_LENGTH)
      );
    })
    .map((s) => ({
      path: filename,
      line: s.line,
      body: `**\`${s.rule}\`**: ${s.reason}

\`\`\`suggestion
${s.suggested}
\`\`\``,
    }));
}

// Post review to PR
async function postReview(
  octokit: Octokit,
  prNumber: number,
  comments: ReviewComment[],
  aiProvider: "anthropic" | "openai"
): Promise<void> {
  if (comments.length === 0) {
    console.log("No suggestions to post");
    return;
  }

  const providerName = aiProvider === "anthropic" ? "Claude" : "GPT-4 Turbo";

  try {
    await octokit.rest.pulls.createReview({
      owner: OWNER,
      repo: REPO,
      pull_number: prNumber,
      event: "COMMENT",
      body: `## Style Review

Found ${comments.length} style suggestion(s).

_Powered by Vale + ${providerName}_`,
      comments: comments.map((c) => ({
        path: c.path,
        line: c.line,
        body: c.body,
      })),
    });

    console.log(`Posted review with ${comments.length} suggestions`);
  } catch (error) {
    console.error("Error posting review:", error);
    throw error;
  }
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

  // Prefer Anthropic, fall back to OpenAI
  let ai: AIClient;
  if (anthropicKey) {
    ai = { type: "anthropic", client: new Anthropic({ apiKey: anthropicKey }) };
    console.log("Using Claude (Anthropic) for suggestions");
  } else {
    ai = { type: "openai", client: new OpenAI({ apiKey: openaiKey }) };
    console.log("Using GPT-4 Turbo (OpenAI) for suggestions");
  }

  console.log(`Reviewing PR #${prNumber}...`);

  // Get changed files with their diff info
  const changedFiles = await getChangedFiles(octokit, prNumber);
  if (changedFiles.length === 0) {
    console.log("No documentation files changed in this PR");
    return;
  }

  console.log(`Found ${changedFiles.length} doc file(s) to review`);

  // Get existing Vale comments to avoid duplicates
  const existingComments = await getExistingValeComments(octokit, prNumber);

  // Filter by file size, warn about missing files
  const missingFiles: string[] = [];
  const filesToReview = changedFiles.filter((f) => {
    if (!existsSync(f.filename)) {
      missingFiles.push(f.filename);
      return false;
    }
    const stats = statSync(f.filename);
    if (stats.size > MAX_FILE_SIZE) {
      console.log(`Skipping ${f.filename} (too large: ${stats.size} bytes)`);
      return false;
    }
    return true;
  });

  if (missingFiles.length > 0) {
    console.warn(
      `⚠️  Warning: ${missingFiles.length} file(s) from PR not found locally:`
    );
    for (const file of missingFiles) {
      console.warn(`   - ${file}`);
    }
    console.warn(
      "   This may indicate the wrong branch was checked out. Ensure the PR's head branch is checked out."
    );
  }

  // Build a map from filename to commentable lines for quick lookup
  const commentableLinesMap = new Map<string, Set<number>>();
  for (const f of filesToReview) {
    commentableLinesMap.set(f.filename, f.commentableLines);
  }

  // Run Vale
  console.log("Running Vale...");
  const valeOutput = runVale(filesToReview.map((f) => f.filename));

  const filesWithIssues = Object.keys(valeOutput).filter(
    (f) => valeOutput[f].length > 0
  );

  if (filesWithIssues.length === 0) {
    console.log("No style issues found!");
    return;
  }

  const totalIssues = filesWithIssues.reduce(
    (sum, f) => sum + valeOutput[f].length,
    0
  );
  console.log(
    `Found ${totalIssues} issue(s) in ${filesWithIssues.length} file(s)`
  );

  // Get suggestions for each file
  const allComments: ReviewComment[] = [];

  for (const filename of filesWithIssues) {
    const issues = valeOutput[filename];
    const content = readFileSync(filename, "utf-8");
    const commentableLines = commentableLinesMap.get(filename) ?? new Set();

    console.log(
      `Getting suggestions for ${filename} (${issues.length} issues)...`
    );
    const suggestions = await getSuggestions(ai, filename, content, issues);

    const comments = formatReviewComments({
      filename,
      suggestions,
      fileContent: content,
      commentableLines,
      existingComments,
    });
    allComments.push(...comments);

    console.log(`  → ${comments.length} actionable suggestions`);
  }

  // Post review
  await postReview(octokit, prNumber, allComments, ai.type);

  console.log("Done!");
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
