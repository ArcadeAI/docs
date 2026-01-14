#!/usr/bin/env npx tsx

/**
 * Vale + Claude AI Fix Script
 *
 * Runs Vale on specified files, then offers to fix issues using Claude.
 * Used by pre-commit hook and can be run manually.
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

    // Format: file:line:col:rule:message
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

  // Vale exits with 1 if there are issues, 0 if clean
  const output = result.stdout || "";
  return parseValeOutput(output);
}

function askUser(question: string): Promise<boolean> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().startsWith("y"));
    });
  });
}

function buildPrompt(filePath: string, issues: ValeIssue[]): string {
  const content = readFileSync(filePath, "utf-8");

  const issueList = issues
    .map((i) => `- Line ${i.line}: [${i.rule}] ${i.message}`)
    .join("\n");

  const styleGuideSection = STYLE_GUIDE
    ? `\n\nSTYLE GUIDE:\n${STYLE_GUIDE}\n`
    : "";

  return `You are a technical documentation editor for Arcade. Fix the following style issues in this MDX/Markdown file.

IMPORTANT RULES:
1. ONLY fix the specific issues listed below - do not make other changes
2. Preserve all code blocks, frontmatter, and JSX components exactly as-is
3. Maintain the original meaning and technical accuracy
4. For passive voice: rewrite to active voice where it improves clarity, but skip if passive is clearer
5. For toxic/harmful language (alex.* rules): these are CRITICAL - always fix these
6. Return ONLY the corrected file content, no explanations
7. Follow the style guide below for voice, tone, and terminology
${styleGuideSection}
STYLE ISSUES TO FIX:
${issueList}

ORIGINAL FILE CONTENT:
\`\`\`mdx
${content}
\`\`\`

Return the corrected file content (without the wrapping code fence):`;
}

async function fixFileWithAnthropic(
  filePath: string,
  issues: ValeIssue[],
  client: Anthropic
): Promise<string | null> {
  const prompt = buildPrompt(filePath, issues);

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: MAX_AI_TOKENS,
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = response.content.find((block) => block.type === "text");
    if (textBlock && textBlock.type === "text") {
      let fixed = textBlock.text;
      fixed = fixed
        .replace(CODE_FENCE_START_REGEX, "")
        .replace(CODE_FENCE_END_REGEX, "");
      return fixed;
    }
    return null;
  } catch (error) {
    console.error(`Error calling Anthropic API: ${error}`);
    return null;
  }
}

async function fixFileWithOpenAI(
  filePath: string,
  issues: ValeIssue[],
  client: OpenAI
): Promise<string | null> {
  const prompt = buildPrompt(filePath, issues);

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      max_tokens: MAX_AI_TOKENS,
      messages: [{ role: "user", content: prompt }],
    });

    const content = response.choices[0]?.message?.content;
    if (content) {
      let fixed = content;
      fixed = fixed
        .replace(CODE_FENCE_START_REGEX, "")
        .replace(CODE_FENCE_END_REGEX, "");
      return fixed;
    }
    return null;
  } catch (error) {
    console.error(`Error calling OpenAI API: ${error}`);
    return null;
  }
}

function fixFileWithAI(
  filePath: string,
  issues: ValeIssue[]
): Promise<string | null> {
  if (AI_PROVIDER === "anthropic") {
    const client = new Anthropic();
    return fixFileWithAnthropic(filePath, issues, client);
  }
  if (AI_PROVIDER === "openai") {
    const client = new OpenAI();
    return fixFileWithOpenAI(filePath, issues, client);
  }
  return Promise.resolve(null);
}

function showDiff(original: string, fixed: string, _filePath: string): void {
  // Write temp files for diff
  const tmpOriginal = `/tmp/vale-fix-original-${Date.now()}`;
  const tmpFixed = `/tmp/vale-fix-fixed-${Date.now()}`;

  writeFileSync(tmpOriginal, original);
  writeFileSync(tmpFixed, fixed);

  try {
    execSync(
      `diff --color=always -u "${tmpOriginal}" "${tmpFixed}" | head -50`,
      {
        stdio: "inherit",
      }
    );
  } catch {
    // diff exits with 1 if files differ, which is expected
  }

  // Cleanup
  try {
    execSync(`rm "${tmpOriginal}" "${tmpFixed}"`, { stdio: "ignore" });
  } catch {
    // ignore cleanup errors
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

async function processFileWithAI(
  file: string,
  issues: ValeIssue[],
  providerName: string,
  isStaged: boolean
): Promise<boolean> {
  console.log(`\n📝 Processing ${file} with ${providerName}...`);

  const original = readFileSync(file, "utf-8");
  const fixed = await fixFileWithAI(file, issues);

  if (!fixed || fixed === original) {
    console.log("   No changes needed or fix failed");
    return false;
  }

  console.log("\n--- Proposed changes ---");
  showDiff(original, fixed, file);
  console.log("------------------------\n");

  const applyFix = await askUser(`Apply changes to ${file}? [y/N] `);

  if (applyFix) {
    writeFileSync(file, fixed);
    console.log(`   ✅ Fixed ${file}`);
    if (isStaged) {
      execSync(`git add "${file}"`);
    }
    return true;
  }
  console.log(`   ⏭️  Skipped ${file}`);
  return false;
}

function getProviderName(): string {
  return AI_PROVIDER === "anthropic" ? "Claude" : "GPT-4o";
}

function promptForAIFix(): Promise<boolean> {
  if (AI_PROVIDER === null) {
    console.log(
      "\n💡 Tip: Set ANTHROPIC_API_KEY or OPENAI_API_KEY in .env.local to enable AI-powered fixes"
    );
    console.log("   See AGENTS.md for setup instructions (optional)");
    return Promise.resolve(false);
  }
  return askUser(`\n🤖 Auto-fix with ${getProviderName()}? [y/N] `);
}

function checkRemainingToxicIssues(files: string[]): void {
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

async function processAllFiles(
  issuesByFile: Map<string, ValeIssue[]>,
  isStaged: boolean
): Promise<number> {
  const providerName = getProviderName();
  let filesFixed = 0;

  for (const [file, issues] of issuesByFile) {
    const wasFixed = await processFileWithAI(
      file,
      issues,
      providerName,
      isStaged
    );
    if (wasFixed) {
      filesFixed += 1;
    }
  }

  return filesFixed;
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

  const shouldFix = await promptForAIFix();

  if (!shouldFix) {
    console.log("\nRun 'vale <file>' to see detailed issues.");
    if (counts.toxic > 0) {
      console.log(
        "\n🚨 Toxic language issues found. Please fix manually before committing."
      );
      process.exit(1);
    }
    process.exit(0);
  }

  const filesFixed = await processAllFiles(issuesByFile, isStaged);
  console.log(`\n✨ Done! Fixed ${filesFixed}/${issuesByFile.size} files`);

  if (isStaged && counts.toxic > 0 && filesFixed < issuesByFile.size) {
    checkRemainingToxicIssues(files);
  }
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
