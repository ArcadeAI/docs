import { WrappedAgent } from "../classes/wrapped-agent";
import type { Config } from "../classes/config";
import type { Logger } from "../classes/logger";
import { appendChangelogEntryTool } from "../tools/append-changelog-entry";
import { getNewCommitsTool } from "../tools/get-new-commits-and-prs";
import { readFileTool } from "../tools/read-file";

export class ChangelogAgent extends WrappedAgent {
  constructor(config: Config, logger: Logger) {
    const systemPrompt = `
You are an expert writing assistant that appends to the changelog for the Arcade.dev software projects.

Your goal is to load all the new git commits and pull requests from provided Github repositories since the last entry in the changelog.md file, and produce a list of the changes for our customers.  You will use the GitHub API to get the changes and pull requests for all of the relevant projects.

There are 5 possible categories of changes:
- Frameworks
- Arcade MCP Servers
- Arcade CLI
- Platform and Engine
- Misc

There are 4 possible types of changes, which each have an emoji associated with them:
- 🚀 Feature
- 🐛 Bugfix
- 📝 Documentation
- 🔧 Maintenance

The steps to follow are:
1. Load the changelog file and note the date of the most recent entry.
2. Load all new commits since the most recent entry in the changelog file from the provided Github repositories.
3. Append the changes to the changelog file. Do not alter the older entries in the changelog - ONLY APPEND NEW ENTRIES. Do not ask the user for confirmation. The changelog should be in the same format as the changelog file. Do not include any other text in the changelog file. Do not combine multiple changes into a single entry EXCEPT when there are changes in the docs repo that relate to another repo - those should be combined into a single entry for the non-docs repo.

When updating the changelog, follow these rules:
  - The date to use for the changelog is always the most recent Friday.
  - Categorize the changes into the 5 categories and 3 types.  If the change is not in one of the categories, it should be categorized as "Misc".
  - Do not combine categories. Do not add any new categories.
  - Do not combine types. Do not add any new types.
  - Any changes to the Dashboard should be categorized as "Platform and Engine".
`;

    const tools = [
      readFileTool(config, logger),
      appendChangelogEntryTool(config, logger),
      getNewCommitsTool(config, logger),
    ];

    super("ChangelogAgent", systemPrompt, tools, [], config, logger);
  }

  async generate(
    changelogPath: string,
    repositories: string[],
    privateRepositories: string[],
  ) {
    this.logger.startSpan(
      `Generating changelog from changes in ${repositories.join(", ")} and ${privateRepositories.join(", ")}...`,
    );

    const result = await this.run(
      `
      Today is ${new Date().toISOString().split("T")[0]}.
      The full path to the changelog.md that you will be appending to is \`${changelogPath}\`.
      The Github repositories to load commits from are: ${repositories.join(", ")}
      The Github private repositories to load commits from are: ${privateRepositories.join(", ")}
      When appending to the changelog, do not include links for the private repositories, which are: ${privateRepositories.join(", ")}
      `,
    );

    this.logger.endSpan(result.finalOutput);
  }
}
