import { Agent, run } from "@openai/agents";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const changelogPath = path.normalize(
  path.join(__dirname, "..", "..", "pages", "home", "changelog.mdx"),
);

const systemPrompt = `
You are a helpful assistant that writes changelogs for the Arcade.dev software project.
Your goal is to load all the changes since the last entry in the changelog.md file, and produce a list of the changes.

The full path to the changelog.md is ${changelogPath}

There are 5 categories of changes:
- Frameworks
- Toolkits
- CLI and TDK
- Platform and Engine
- Misc

There are 3 types of changes, which each have an emoji associated with them:
- 🚀 Feature
- 🐛 Bugfix
- 📝 Documentation

The steps to follow are:
1. Load the changelog.md file
2. Load the most recent entry in the changelog.md file
3. Load all the changes since the most recent entry in the changelog.md file.  Use the GitHub API to get the changes for all of the relevant projects
4. Categorize the changes into the 5 categories and 3 types
5. Write a changelog for the project
`;

const agent = new Agent({
  name: "Changelog Agent",
  instructions: systemPrompt,
});

const result = await run(
  agent,
  `Today is ${new Date().toISOString().split("T")[0]}.  Please update the changelog.`,
);

console.log(result.finalOutput);
