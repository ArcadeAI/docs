#!/usr/bin/env npx tsx

/**
 * Vale + AI Fix Script (Interactive)
 *
 * Runs Vale on specified files, then offers to fix issues one at a time
 * with AI assistance. Supports feedback loops for iterative refinement.
 *
 * Usage:
 *   pnpm vale:fix [files...]        # Fix specific files
 *   pnpm vale:fix --staged          # Fix staged files only
 *   pnpm vale:fix app/en/guides/    # Fix all files in directory
 */

import { execSync, spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { config } from "dotenv";
import OpenAI from "openai";

// Load environment variables from .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
if (existsSync(envPath)) {
  config({ path: envPath });
}

// Determine which AI provider to use
type AIProvider = "anthropic" | "openai" | null;

function getAIProvider(): AIProvider {
  if (process.env.ANTHROPIC_API_KEY) {
    return "anthropic";
  }
  if (process.env.OPENAI_API_KEY) {
    return "openai";
  }
  return null;
}

const AI_PROVIDER = getAIProvider();

// Load the style guide for the prompt
const STYLE_GUIDE_PATH = join(__dirname, "..", "STYLEGUIDE.md");
const STYLE_GUIDE = existsSync(STYLE_GUIDE_PATH)
  ? readFileSync(STYLE_GUIDE_PATH, "utf-8")
  : "";

type ValeIssue = {
  file: string;
  line: number;
  column: number;
  severity: "error" | "warning" | "suggestion";
  message: string;
  rule: string;
};

type UserChoice = "yes" | "no" | "edit" | "feedback" | "skip";

// Regex for parsing Vale line output
const VALE_LINE_REGEX = /^(.+?):(\d+):(\d+):([^:]+):(.+)$/;

// Constants
const KILOBYTE = 1024;
const MEGABYTE = KILOBYTE * KILOBYTE;
const MAX_BUFFER_SIZE = 10 * MEGABYTE;
const MAX_AI_TOKENS = 8192;

// Regex for stripping code fences from AI responses
const CODE_FENCE_START_REGEX = /^```(?:mdx|markdown|md)?\n/;
const CODE_FENCE_END_REGEX = /\n```$/;

// Line number display width for diffs
const LINE_NUM_WIDTH = 3;

// Regex for finding non-whitespace characters (word boundaries)
const NON_WHITESPACE_REGEX = /\S/;

// ANSI color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  underline: "\x1b[4m",
  bgYellow: "\x1b[43m",
  black: "\x1b[30m",
};

function getSeverity(
  rule: string,
  message: string
): "error" | "warning" | "suggestion" {
  if (rule.startsWith("alex.")) {
    return "warning";
  }
  if (message.toLowerCase().includes("error")) {
    return "error";
  }
  return "suggestion";
}

function parseValeOutput(output: string): Map<string, ValeIssue[]> {
  const issuesByFile = new Map<string, ValeIssue[]>();

  for (const line of output.split("\n")) {
    if (!line.trim()) {
      continue;
    }

    const match = line.match(VALE_LINE_REGEX);
    if (match) {
      const [, file, lineNum, col, rule, message] = match;
      const severity = getSeverity(rule, message);

      const issues = issuesByFile.get(file) ?? [];
      issues.push({
        file,
        line: Number.parseInt(lineNum, 10),
        column: Number.parseInt(col, 10),
        severity,
        message: message.trim(),
        rule,
      });
      issuesByFile.set(file, issues);
    }
  }

  return issuesByFile;
}

function runVale(files: string[]): Map<string, ValeIssue[]> {
  const result = spawnSync("vale", ["--output=line", ...files], {
    encoding: "utf-8",
    maxBuffer: MAX_BUFFER_SIZE,
  });

  if (result.error) {
    console.error("❌ Vale failed to execute:", result.error.message);
    console.error(
      "   Make sure Vale is installed: https://vale.sh/docs/install/"
    );
    process.exit(1);
  }

  const output = result.stdout || "";
  return parseValeOutput(output);
}

function prompt(question: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function parseUserChoice(input: string): UserChoice {
  const lower = input.toLowerCase();
  if (lower === "y" || lower === "yes") {
    return "yes";
  }
  if (lower === "n" || lower === "no") {
    return "no";
  }
  if (lower === "e" || lower === "edit") {
    return "edit";
  }
  if (lower === "f" || lower === "feedback") {
    return "feedback";
  }
  if (lower === "s" || lower === "skip") {
    return "skip";
  }
  return "no"; // default
}

function highlightWordAt(line: string, column: number): string {
  // Column is 1-indexed, convert to 0-indexed
  const col = column - 1;
  if (col < 0 || col >= line.length) {
    return line;
  }

  // Find word boundaries around the column
  let wordStart = col;
  let wordEnd = col;

  // Expand backward to find word start
  while (wordStart > 0 && NON_WHITESPACE_REGEX.test(line[wordStart - 1])) {
    wordStart -= 1;
  }

  // Expand forward to find word end
  while (wordEnd < line.length && NON_WHITESPACE_REGEX.test(line[wordEnd])) {
    wordEnd += 1;
  }

  // Build highlighted line
  const before = line.slice(0, wordStart);
  const word = line.slice(wordStart, wordEnd);
  const after = line.slice(wordEnd);

  return `${before}${colors.bold}${colors.underline}${word}${colors.reset}${colors.magenta}${after}`;
}

function getContextLines(
  content: string,
  lineNum: number,
  column = 0,
  contextSize = 2
): string {
  const lines = content.split("\n");
  const start = Math.max(0, lineNum - contextSize - 1);
  const end = Math.min(lines.length, lineNum + contextSize);

  return lines
    .slice(start, end)
    .map((line, i) => {
      const num = start + i + 1;
      const isTarget = num === lineNum;
      const marker = isTarget ? "→" : " ";
      const lineNumStr = num.toString().padStart(LINE_NUM_WIDTH);
      if (isTarget) {
        const highlighted = column > 0 ? highlightWordAt(line, column) : line;
        return `${colors.magenta}${marker} ${lineNumStr}: ${highlighted}${colors.reset}`;
      }
      return `${colors.dim}${marker} ${lineNumStr}: ${line}${colors.reset}`;
    })
    .join("\n");
}

function buildSingleIssuePrompt(
  content: string,
  issue: ValeIssue,
  feedback?: string
): string {
  const styleGuideSection = STYLE_GUIDE
    ? `\n\nSTYLE GUIDE:\n${STYLE_GUIDE}\n`
    : "";

  const feedbackSection = feedback
    ? `\n\nUSER FEEDBACK on previous attempt:\n${feedback}\n`
    : "";

  return `You are a technical documentation editor. Fix ONE specific style issue in this file.

ISSUE TO FIX (Line ${issue.line}):
[${issue.rule}] ${issue.message}

Note: If the message says "Use 'X' instead of 'Y'", find 'Y' on line ${issue.line} and replace it with 'X'.

CRITICAL RULES:
1. ONLY modify line ${issue.line} to fix this ONE issue
2. Return the COMPLETE file - do not truncate or omit any content
3. Preserve ALL other lines exactly as they appear
4. Do not add explanations - return only the file content
${styleGuideSection}${feedbackSection}
FILE CONTENT:
\`\`\`mdx
${content}
\`\`\`

Return the corrected file content (without the wrapping code fence):`;
}

async function fixSingleIssueWithAI(
  content: string,
  issue: ValeIssue,
  feedback?: string
): Promise<string | null> {
  const promptText = buildSingleIssuePrompt(content, issue, feedback);

  try {
    if (AI_PROVIDER === "anthropic") {
      const client = new Anthropic();
      const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: MAX_AI_TOKENS,
        messages: [{ role: "user", content: promptText }],
      });

      const textBlock = response.content.find((block) => block.type === "text");
      if (textBlock && textBlock.type === "text") {
        return textBlock.text
          .replace(CODE_FENCE_START_REGEX, "")
          .replace(CODE_FENCE_END_REGEX, "");
      }
    } else if (AI_PROVIDER === "openai") {
      const client = new OpenAI();
      const response = await client.chat.completions.create({
        model: "gpt-4-turbo",
        max_tokens: MAX_AI_TOKENS,
        messages: [{ role: "user", content: promptText }],
      });

      const text = response.choices[0]?.message?.content;
      if (text) {
        return text
          .replace(CODE_FENCE_START_REGEX, "")
          .replace(CODE_FENCE_END_REGEX, "");
      }
    }
    return null;
  } catch (error) {
    console.error(`Error calling AI: ${error}`);
    return null;
  }
}

function showIssueDiff(
  original: string,
  fixed: string,
  issue: ValeIssue
): void {
  const originalLines = original.split("\n");
  const fixedLines = fixed.split("\n");

  // Find the changed lines around the issue
  const contextSize = 3;
  const start = Math.max(0, issue.line - contextSize - 1);
  const end = Math.min(
    Math.max(originalLines.length, fixedLines.length),
    issue.line + contextSize
  );

  console.log(`\n  ${colors.red}${colors.bold}Original:${colors.reset}`);
  for (let i = start; i < Math.min(end, originalLines.length); i += 1) {
    const isIssueLine = i + 1 === issue.line;
    const marker = isIssueLine ? "−" : " ";
    const lineNum = (i + 1).toString().padStart(LINE_NUM_WIDTH);
    const lineContent = originalLines[i];
    if (isIssueLine) {
      console.log(
        `  ${colors.red}${marker} ${lineNum}: ${lineContent}${colors.reset}`
      );
    } else {
      console.log(
        `  ${colors.dim}${marker} ${lineNum}: ${lineContent}${colors.reset}`
      );
    }
  }

  console.log(`\n  ${colors.green}${colors.bold}Proposed:${colors.reset}`);
  for (let i = start; i < Math.min(end, fixedLines.length); i += 1) {
    const isIssueLine = i + 1 === issue.line;
    const marker = isIssueLine ? "+" : " ";
    const lineNum = (i + 1).toString().padStart(LINE_NUM_WIDTH);
    const lineContent = fixedLines[i];
    if (isIssueLine) {
      console.log(
        `  ${colors.green}${marker} ${lineNum}: ${lineContent}${colors.reset}`
      );
    } else {
      console.log(
        `  ${colors.dim}${marker} ${lineNum}: ${lineContent}${colors.reset}`
      );
    }
  }
}

function findEditor(): string | null {
  // Check environment variables first
  if (process.env.EDITOR) {
    return process.env.EDITOR;
  }
  if (process.env.VISUAL) {
    return process.env.VISUAL;
  }

  // Try common editors
  const editors = ["code", "cursor", "vim", "nvim", "nano", "vi"];
  for (const editor of editors) {
    try {
      execSync(`which ${editor}`, { stdio: "ignore" });
      return editor;
    } catch {
      // Editor not found, try next
    }
  }
  return null;
}

function openInEditor(filePath: string): void {
  const editor = findEditor();
  if (!editor) {
    console.log(
      `\n   ${colors.yellow}No editor found. Set $EDITOR or install code/vim/nano.${colors.reset}`
    );
    console.log(`   Edit manually: ${colors.cyan}${filePath}${colors.reset}`);
    return;
  }

  try {
    execSync(`${editor} "${filePath}"`, { stdio: "inherit" });
    console.log(`\n   Opened ${filePath} in ${editor}`);
    console.log("   Make your changes and save the file.");
  } catch {
    console.log(`\n   Could not open editor. Edit manually: ${filePath}`);
  }
}

function getFilesToCheck(args: string[]): string[] {
  if (args.includes("--staged")) {
    const staged = execSync(
      "git diff --cached --name-only --diff-filter=ACMR",
      { encoding: "utf-8" }
    );
    return staged
      .split("\n")
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .filter(Boolean);
  }
  if (args.length === 0) {
    console.log("Usage: pnpm vale:fix [--staged | files...]");
    process.exit(0);
  }
  return args;
}

function countIssues(issuesByFile: Map<string, ValeIssue[]>): {
  total: number;
  toxic: number;
} {
  let total = 0;
  let toxic = 0;
  for (const issues of issuesByFile.values()) {
    total += issues.length;
    toxic += issues.filter((i) => i.rule.startsWith("alex.")).length;
  }
  return { total, toxic };
}

function displayIssueSummary(
  issuesByFile: Map<string, ValeIssue[]>,
  counts: { total: number; toxic: number }
): void {
  console.log(
    `\n⚠️  Found ${counts.total} style issues in ${issuesByFile.size} file(s)`
  );
  if (counts.toxic > 0) {
    console.log(
      `   🚨 ${counts.toxic} toxic/harmful language issues (these should be fixed)`
    );
  }
  console.log("\nFiles with issues:");
  for (const [file, issues] of issuesByFile) {
    const toxic = issues.filter((i) => i.rule.startsWith("alex.")).length;
    const toxicNote = toxic > 0 ? ` (${toxic} toxic)` : "";
    console.log(`  ${file}: ${issues.length} issues${toxicNote}`);
  }
}

function getProviderName(): string {
  return AI_PROVIDER === "anthropic" ? "Claude" : "GPT-4 Turbo";
}

type ProcessIssueResult = {
  content: string;
  action: "fixed" | "skipped" | "skipfile";
};

type ProcessIssueOptions = {
  file: string;
  issue: ValeIssue;
  issueNum: number;
  totalIssues: number;
  currentContent: string;
};

async function handleNoAIFix(
  opts: ProcessIssueOptions
): Promise<ProcessIssueResult> {
  console.log("   ⚠️  AI couldn't suggest a fix for this issue.");
  const skipChoice = await prompt("   [n]o change / [e]dit / [s]kip file: ");
  const choice = parseUserChoice(skipChoice);
  if (choice === "edit") {
    openInEditor(opts.file);
    await prompt("   Press Enter when done editing...");
    return { content: readFileSync(opts.file, "utf-8"), action: "fixed" };
  }
  if (choice === "skip") {
    return { content: opts.currentContent, action: "skipfile" };
  }
  return { content: opts.currentContent, action: "skipped" };
}

async function handleEditChoice(
  file: string,
  fixedContent: string
): Promise<ProcessIssueResult> {
  writeFileSync(file, fixedContent);
  openInEditor(file);
  await prompt("   Press Enter when done editing...");
  return { content: readFileSync(file, "utf-8"), action: "fixed" };
}

async function handleFeedbackChoice(
  currentContent: string,
  issue: ValeIssue,
  currentFixed: string
): Promise<string> {
  const feedback = await prompt("   Your feedback: ");
  if (feedback) {
    console.log("   🤖 Regenerating with feedback...");
    const newFixed = await fixSingleIssueWithAI(
      currentContent,
      issue,
      feedback
    );
    if (newFixed && newFixed !== currentContent) {
      showIssueDiff(currentContent, newFixed, issue);
      return newFixed;
    }
    console.log("   ⚠️  AI couldn't incorporate feedback.");
  }
  return currentFixed;
}

async function processIssue(
  opts: ProcessIssueOptions
): Promise<ProcessIssueResult> {
  const { file, issue, issueNum, totalIssues, currentContent } = opts;
  const providerName = getProviderName();

  console.log(`\n${colors.dim}${"─".repeat(60)}${colors.reset}`);
  console.log(
    `📝 ${colors.cyan}Issue ${issueNum}/${totalIssues}${colors.reset} in ${colors.bold}${file}${colors.reset}`
  );
  console.log(
    `   ${colors.yellow}[${issue.rule}]${colors.reset} ${issue.message}`
  );
  console.log(`\n${getContextLines(currentContent, issue.line, issue.column)}`);

  console.log(`\n   🤖 Getting fix from ${providerName}...`);
  let fixed = await fixSingleIssueWithAI(currentContent, issue);

  if (!fixed || fixed === currentContent) {
    return handleNoAIFix(opts);
  }

  showIssueDiff(currentContent, fixed, issue);

  const iterating = true;
  while (iterating) {
    const answer = await prompt(
      `\n   ${colors.green}[y]es${colors.reset} / ${colors.red}[n]o${colors.reset} / ${colors.blue}[e]dit${colors.reset} / ${colors.yellow}[f]eedback${colors.reset} / ${colors.dim}[s]kip file${colors.reset}: `
    );
    const choice = parseUserChoice(answer);

    switch (choice) {
      case "yes":
        return { content: fixed, action: "fixed" };
      case "no":
        return { content: currentContent, action: "skipped" };
      case "edit":
        return handleEditChoice(file, fixed);
      case "feedback":
        fixed = await handleFeedbackChoice(currentContent, issue, fixed);
        break;
      case "skip":
        return { content: currentContent, action: "skipfile" };
      default:
        return { content: currentContent, action: "skipped" };
    }
  }

  return { content: currentContent, action: "skipped" };
}

/**
 * Calculate the line count difference between two strings.
 * Returns positive if newContent has more lines, negative if fewer.
 */
function calculateLineOffset(oldContent: string, newContent: string): number {
  const oldLineCount = oldContent.split("\n").length;
  const newLineCount = newContent.split("\n").length;
  return newLineCount - oldLineCount;
}

/**
 * Create an adjusted copy of an issue with updated line number.
 */
function adjustIssueLineNumber(issue: ValeIssue, offset: number): ValeIssue {
  return {
    ...issue,
    line: issue.line + offset,
  };
}

async function processFile(
  file: string,
  issues: ValeIssue[],
  isStaged: boolean
): Promise<{ fixed: number; skipped: number }> {
  let currentContent = readFileSync(file, "utf-8");
  const originalContent = currentContent;
  let fixedCount = 0;
  let skippedCount = 0;
  let cumulativeLineOffset = 0;

  console.log(`\n${"═".repeat(60)}`);
  console.log(`📄 ${file} (${issues.length} issues)`);

  for (let i = 0; i < issues.length; i += 1) {
    const originalIssue = issues[i];
    // Adjust issue line number based on cumulative offset from previous fixes
    const issue = adjustIssueLineNumber(originalIssue, cumulativeLineOffset);

    const contentBeforeFix = currentContent;
    const result = await processIssue({
      file,
      issue,
      issueNum: i + 1,
      totalIssues: issues.length,
      currentContent,
    });

    currentContent = result.content;

    // If content changed, update the cumulative line offset for subsequent issues
    if (result.action === "fixed" && currentContent !== contentBeforeFix) {
      const lineOffset = calculateLineOffset(contentBeforeFix, currentContent);
      cumulativeLineOffset += lineOffset;
    }

    if (result.action === "fixed") {
      fixedCount += 1;
    } else if (result.action === "skipped") {
      skippedCount += 1;
    } else if (result.action === "skipfile") {
      skippedCount += issues.length - i;
      break;
    }
  }

  // Save if changes were made
  if (currentContent !== originalContent) {
    writeFileSync(file, currentContent);
    console.log(`\n   ✅ Saved changes to ${file}`);
    if (isStaged) {
      execSync(`git add "${file}"`);
    }
  }

  return { fixed: fixedCount, skipped: skippedCount };
}

async function main() {
  const args = process.argv.slice(2);
  const isStaged = args.includes("--staged");

  const files = getFilesToCheck(args);
  if (files.length === 0) {
    console.log("✅ No documentation files to check");
    process.exit(0);
  }

  console.log(`🔍 Running Vale on ${files.length} file(s)...`);
  const issuesByFile = runVale(files);

  if (issuesByFile.size === 0) {
    console.log("✅ No style issues found!");
    process.exit(0);
  }

  const counts = countIssues(issuesByFile);
  displayIssueSummary(issuesByFile, counts);

  if (AI_PROVIDER === null) {
    console.log(
      "\n💡 Tip: Set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env.local to enable AI-powered fixes"
    );
    console.log("   See AGENTS.md for setup instructions (optional)");
    process.exit(0);
  }

  const startFix = await prompt(
    `\n🤖 Fix issues interactively with ${getProviderName()}? [y/N] `
  );
  if (!startFix.toLowerCase().startsWith("y")) {
    console.log("\nRun 'vale <file>' to see detailed issues.");
    process.exit(0);
  }

  let totalFixed = 0;
  let totalSkipped = 0;

  for (const [file, issues] of issuesByFile) {
    const result = await processFile(file, issues, isStaged);
    totalFixed += result.fixed;
    totalSkipped += result.skipped;
  }

  console.log(`\n${"═".repeat(60)}`);
  console.log(`✨ Done! Fixed ${totalFixed}, skipped ${totalSkipped} issues`);

  // Check for remaining toxic issues
  if (isStaged && counts.toxic > 0) {
    const remainingIssues = runVale(files);
    const remainingToxic = [...remainingIssues.values()]
      .flat()
      .filter((i) => i.rule.startsWith("alex.")).length;

    if (remainingToxic > 0) {
      console.log(
        `\n🚨 ${remainingToxic} toxic language issues remain. Please fix manually.`
      );
      process.exit(1);
    }
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
