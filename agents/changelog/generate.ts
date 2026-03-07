import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

// --- Config ---

const REPOS = [
  { owner: "ArcadeAI", repo: "docs", private: false },
  { owner: "ArcadeAI", repo: "arcade-mcp", private: false },
  { owner: "ArcadeAI", repo: "monorepo", private: true },
];

const CATEGORIES = [
  "Frameworks",
  "Arcade MCP Servers",
  "Arcade CLI",
  "Platform and Engine",
  "Misc",
] as const;

const TYPES = ["feature", "bugfix", "documentation", "maintenance"] as const;

const EMOJI: Record<string, string> = {
  feature: "\u{1F680}",
  bugfix: "\u{1F41B}",
  documentation: "\u{1F4DD}",
  maintenance: "\u{1F527}",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHANGELOG_PATH = path.join(
  __dirname,
  "..",
  "..",
  "app",
  "en",
  "references",
  "changelog",
  "page.mdx",
);

// --- Types ---

type PR = {
  repo: string;
  number: number;
  title: string;
  body: string;
  labels: string[];
  merged_at: string;
  is_private: boolean;
};

type CategorizedPR = {
  category: (typeof CATEGORIES)[number];
  type: (typeof TYPES)[number];
  description: string;
  repo: string;
  pr_number: number;
  merged_at: string;
  is_private: boolean;
};

type FinalEntry = {
  category: string;
  type: string;
  description: string;
  sources: { repo: string; pr_number: number }[];
};

// --- Step 1: Compute most recent Friday (or today if Friday) ---

function getMostRecentFriday(): string {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
  const daysSinceFriday = (day - 5 + 7) % 7; // 0 if today is Friday
  const friday = new Date(now);
  friday.setDate(now.getDate() - daysSinceFriday);
  return friday.toISOString().split("T")[0];
}

// --- Step 2: Read changelog, extract last entry date ---

function getLastEntryDate(): string {
  const content = fs.readFileSync(CHANGELOG_PATH, "utf-8");
  const match = content.match(/^## (\d{4}-\d{2}-\d{2})/m);
  if (!match) throw new Error("No changelog entries found");
  return match[1];
}

// --- Step 3: Fetch merged PRs ---

async function fetchMergedPRs(
  owner: string,
  repo: string,
  sinceDate: string,
  isPrivate: boolean,
): Promise<PR[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN env var is required");

  const prs: PR[] = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed&sort=updated&direction=desc&per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`GitHub API error for ${owner}/${repo}: ${res.status} ${body}`);
    }

    const data: any[] = await res.json();
    if (data.length === 0) break;

    for (const pr of data) {
      if (!pr.merged_at) continue;
      const mergedDate = pr.merged_at.split("T")[0];
      if (mergedDate > sinceDate) {
        prs.push({
          repo,
          number: pr.number,
          title: pr.title,
          body: (pr.body || "").slice(0, 500),
          labels: pr.labels?.map((l: any) => l.name) || [],
          merged_at: pr.merged_at,
          is_private: isPrivate,
        });
      }
    }

    // Stop if the oldest PR on this page was updated before our cutoff
    const oldestUpdated = data[data.length - 1].updated_at.split("T")[0];
    if (oldestUpdated <= sinceDate || data.length < 100) break;
    page++;
  }

  return prs;
}

// --- Step 4: Per-PR categorization (parallel) ---

const CATEGORIZE_SCHEMA = {
  name: "pr_categorization",
  strict: true,
  schema: {
    type: "object" as const,
    properties: {
      category: { type: "string" as const, enum: [...CATEGORIES] },
      type: { type: "string" as const, enum: [...TYPES] },
      description: { type: "string" as const },
    },
    required: ["category", "type", "description"],
    additionalProperties: false,
  },
};

async function categorizePR(pr: PR, openai: OpenAI): Promise<CategorizedPR> {
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const res = await openai.chat.completions.create({
    model,
    response_format: { type: "json_schema", json_schema: CATEGORIZE_SCHEMA },
    messages: [
      {
        role: "system",
        content: [
          `Categorize this pull request for a software changelog.`,
          `Categories: ${CATEGORIES.join(", ")}.`,
          `Types: ${TYPES.join(", ")}.`,
          `Dashboard changes → "Platform and Engine".`,
          `Engine changes → "Platform and Engine".`,
          `Write a concise one-line description (no PR number, no repo name).`,
        ].join(" "),
      },
      {
        role: "user",
        content: `Repo: ${pr.repo}\nTitle: ${pr.title}\nLabels: ${pr.labels.join(", ")}\n\n${pr.body}`,
      },
    ],
  });

  const result = JSON.parse(res.choices[0].message.content!);
  return {
    ...result,
    repo: pr.repo,
    pr_number: pr.number,
    merged_at: pr.merged_at,
    is_private: pr.is_private,
  };
}

// --- Step 5: Final combining call ---

const COMBINE_SCHEMA = {
  name: "combined_changelog",
  strict: true,
  schema: {
    type: "object" as const,
    properties: {
      entries: {
        type: "array" as const,
        items: {
          type: "object" as const,
          properties: {
            category: { type: "string" as const, enum: [...CATEGORIES] },
            type: { type: "string" as const, enum: [...TYPES] },
            description: { type: "string" as const },
            sources: {
              type: "array" as const,
              items: {
                type: "object" as const,
                properties: {
                  repo: { type: "string" as const },
                  pr_number: { type: "integer" as const },
                },
                required: ["repo", "pr_number"] as const,
                additionalProperties: false,
              },
            },
          },
          required: ["category", "type", "description", "sources"] as const,
          additionalProperties: false,
        },
      },
    },
    required: ["entries"] as const,
    additionalProperties: false,
  },
};

async function combineEntries(
  categorized: CategorizedPR[],
  openai: OpenAI,
): Promise<FinalEntry[]> {
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const input = categorized
    .sort((a, b) => a.merged_at.localeCompare(b.merged_at))
    .map((pr) => ({
      category: pr.category,
      type: pr.type,
      description: pr.description,
      repo: pr.repo,
      pr_number: pr.pr_number,
      merged_at: pr.merged_at,
    }));

  const res = await openai.chat.completions.create({
    model,
    response_format: { type: "json_schema", json_schema: COMBINE_SCHEMA },
    messages: [
      {
        role: "system",
        content: [
          `You are combining changelog entries.`,
          `If a docs PR and a non-docs PR are about the same feature, combine them into one entry under the non-docs category.`,
          `Do not alter categories or types unless combining.`,
          `Keep descriptions concise. Return ALL entries.`,
        ].join(" "),
      },
      { role: "user", content: JSON.stringify(input) },
    ],
  });

  return JSON.parse(res.choices[0].message.content!).entries;
}

// --- Step 6: Format the entry ---

function formatEntry(date: string, entries: FinalEntry[]): string {
  const privateRepos = new Set(REPOS.filter((r) => r.private).map((r) => r.repo));

  const grouped: Record<string, FinalEntry[]> = {};
  for (const entry of entries) {
    if (!grouped[entry.category]) grouped[entry.category] = [];
    grouped[entry.category].push(entry);
  }

  let result = `## ${date}\n`;

  for (const category of CATEGORIES) {
    const items = grouped[category];
    if (!items || items.length === 0) continue;

    result += `\n**${category}**\n\n`;

    for (const item of items) {
      const emoji = EMOJI[item.type] || EMOJI.maintenance;
      const sources = item.sources
        .map((s) => {
          return privateRepos.has(s.repo) ? s.repo : `${s.repo} PR #${s.pr_number}`;
        })
        .join(", ");

      result += `- \`[${item.type} - ${emoji}]\` ${item.description} (${sources})\n`;
    }
  }

  return result;
}

// --- Step 7: Insert into changelog file ---

function insertEntry(entry: string): void {
  const content = fs.readFileSync(CHANGELOG_PATH, "utf-8");
  const firstH2 = content.indexOf("## ");

  const newContent =
    firstH2 !== -1
      ? content.slice(0, firstH2) + entry + "\n" + content.slice(firstH2)
      : content + "\n" + entry;

  fs.writeFileSync(CHANGELOG_PATH, newContent, "utf-8");
}

// --- Main ---

async function main() {
  const openai = new OpenAI();

  // Step 1
  const fridayDate = getMostRecentFriday();
  console.log(`Changelog date: ${fridayDate}`);

  // Step 2
  const lastEntryDate = getLastEntryDate();
  console.log(`Last entry date: ${lastEntryDate}`);

  if (fridayDate <= lastEntryDate) {
    console.log("No new period to cover. Exiting.");
    return;
  }

  // Step 3
  console.log("Fetching merged PRs...");
  const allPRs = (
    await Promise.all(
      REPOS.map((r) => fetchMergedPRs(r.owner, r.repo, lastEntryDate, r.private)),
    )
  ).flat();
  console.log(`Found ${allPRs.length} merged PRs since ${lastEntryDate}`);

  if (allPRs.length === 0) {
    console.log("No new PRs. Exiting.");
    return;
  }

  // Step 4
  console.log("Categorizing PRs...");
  const categorized = await Promise.all(allPRs.map((pr) => categorizePR(pr, openai)));

  // Step 5
  console.log("Combining related entries...");
  const combined = await combineEntries(categorized, openai);

  // Step 6
  const entry = formatEntry(fridayDate, combined);
  console.log("\nGenerated entry:\n");
  console.log(entry);

  // Step 7
  insertEntry(entry);
  console.log(`Changelog updated: ${CHANGELOG_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
