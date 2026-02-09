#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

// Regex patterns defined at top level for performance
const TITLE_PATTERN = /title="([^"]+)"/;
const HREF_PATTERN = /href="([^"]+)"/;
const GITHUB_PATTERN = /https:\/\/github\.com\/([^/]+\/[^/]+)/;

function parseRepositoriesFromMDX(content) {
  const repositories = [];

  // Regex to find all SampleAppCard components with title and href
  const sampleAppCardRegex = /<SampleAppCard\s+([^>]+)>/g;

  let match = sampleAppCardRegex.exec(content);
  while (match !== null) {
    const propsString = match[1];

    // Extract title and href from props
    const titleMatch = propsString.match(TITLE_PATTERN);
    const hrefMatch = propsString.match(HREF_PATTERN);

    if (titleMatch && hrefMatch) {
      const title = titleMatch[1];
      const href = hrefMatch[1];

      // Check if it's a GitHub URL and extract repo name
      const githubMatch = href.match(GITHUB_PATTERN);

      if (githubMatch) {
        const repoName = githubMatch[1];
        repositories.push({
          title,
          repo: repoName,
          href,
        });
      }
    }
    match = sampleAppCardRegex.exec(content);
  }

  return repositories;
}

async function fetchRepoData(repoInfo) {
  const url = `https://api.github.com/repos/${repoInfo.repo}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "arcade-docs-updater",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      repo: repoInfo.repo,
      title: repoInfo.title,
      href: repoInfo.href,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  } catch (error) {
    console.error(`Error fetching data for ${repoInfo.repo}:`, error);
    return null;
  }
}

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

async function updateExampleDates() {
  console.log("Parsing repositories from MDX file...");

  // Read the current MDX file
  const mdxPath = path.join(
    import.meta.dirname,
    "../../app/en/resources/examples/page.mdx"
  );
  let content = fs.readFileSync(mdxPath, "utf8");

  // Parse repositories from the MDX file
  const repositories = parseRepositoriesFromMDX(content);
  console.log(
    "Found repositories:",
    repositories.map((r) => `${r.title} (${r.repo})`)
  );

  if (repositories.length === 0) {
    console.log("No GitHub repositories found in MDX file.");
    return;
  }

  console.log("Fetching repository data from GitHub API...");

  // Fetch data for all repositories
  const repoDataPromises = repositories.map(fetchRepoData);
  const repoData = (await Promise.all(repoDataPromises)).filter(Boolean);

  // Sort by creation date (newest first)
  repoData.sort((a, b) => b.createdAt - a.createdAt);

  console.log(
    "Repository dates:",
    repoData.map((r) => `${r.title}: ${formatDate(r.createdAt)}`)
  );

  // Update dates for each repository
  for (const repo of repoData) {
    // Find the SampleAppCard with this title and update its date
    const titleRegex = new RegExp(
      `(title="${repo.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?)date="[^"]*"`,
      "g"
    );
    const newDate = formatDate(repo.createdAt);

    const before = content;
    content = content.replace(titleRegex, `$1date="${newDate}"`);

    if (content !== before) {
      console.log(`Updated date for "${repo.title}" to ${newDate}`);
    } else {
      console.warn(`Could not find or update date for "${repo.title}"`);
    }
  }

  // Write the updated content back
  fs.writeFileSync(mdxPath, content, "utf8");
  console.log("Successfully updated example dates!");
}

// Run the update
updateExampleDates().catch((error) => {
  console.error("Error updating example dates:", error);
  process.exit(1);
});
