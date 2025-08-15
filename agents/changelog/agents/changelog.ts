import { WrappedAgent } from "../classes/wrappedAgent";
import type { Config } from "../classes/config";
import type { Logger } from "../classes/logger";
import { getNewCommitsTool } from "../tools/getNewCommitsAndPRs";
import { readFileTool } from "../tools/readFile";
import { writeFileTool } from "../tools/writeFile";

export class ChangelogAgent extends WrappedAgent {
  constructor(config: Config, logger: Logger) {
    const systemPrompt = `
You are a helpful assistant that updates the changelog for the Arcade.dev software projects.

Your goal is to load all the new git commits and pull requests from provided Github repositories since the last entry in the changelog.md file, and produce a list of the changes for our customers.  You will use the GitHub API to get the changes and pull requests for all of the relevant projects.

There are 5 possible categories of changes:
- Frameworks
- Toolkits
- CLI and TDK
- Platform and Engine
- Misc

There are 4 possible types of changes, which each have an emoji associated with them:
- 🚀 Feature
- 🐛 Bugfix
- 📝 Documentation
- 🔧 Maintenance

The steps to follow are:
1. Load the changelog.mdx file and note the date of the most recent entry.
2. Load all new commits since the most recent entry in the changelog.mdx file from the provided Github repositories.
3. Append to the changelog.mdx file and append the new changes.  Do not alter the older entries in the changelog. Do not ask the user for confirmation. The changelog should be in the same format as the changelog.mdx file.  Do not include any other text in the changelog.mdx file.  Do not combine multiple changes into a single entry.

When generating the changelog, follow these rules:
  - The date to use for the changelog is always the most recent Friday.
  - Categorize the changes into the 5 categories and 3 types.  If the change is not in one of the categories, it should be categorized as "Misc".
  - Ignore small changes that are not worth mentioning and skip changes that are internal only (about the CI pipeline, tests, publishing, etc.) - use your judgement.
  - Do not combine categories.  Do not add any new categories.
  - Do not combine types. Do not add any new types.
  - Any changes to the Dashboard should be categorized as "Platform and Engine".
`;

    const tools = [
      readFileTool(config, logger),
      writeFileTool(config, logger),
      getNewCommitsTool(config, logger),
    ];

    super("ChangelogAgent", systemPrompt, tools, [], config, logger);
  }

  async generate(changelogPath: string, repositories: string[]) {
    this.logger.startSpan(
      `Generating changelog from changes in ${repositories.join(", ")}...`,
    );

    const result = await this.run(
      `
      Today is ${new Date().toISOString().split("T")[0]}.
      The full path to the changelog.md that you will be appending to is \`${changelogPath}\`.
      The Github repositories to load commits from are: ${repositories.join(", ")}
      `,
    );

    this.logger.endSpan(result.finalOutput);
  }
}
