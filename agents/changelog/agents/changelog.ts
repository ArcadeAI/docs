import { CodaAgent } from "../classes/codaAgent";
import type { Config } from "../classes/config";
import type { Logger } from "../classes/logger";
import { getNewCommitsTool } from "../tools/getNewCommits";
import { readFileTool } from "../tools/readFile";
import { writeFileTool } from "../tools/writeFile";

export class ChangelogAgent extends CodaAgent {
  constructor(config: Config, logger: Logger) {
    const systemPrompt = `
You are a helpful assistant that writes changelogs for the Arcade.dev software projects.

Your goal is to load all the new git commits from provided Github repositories since the last entry in the changelog.md file, and produce a list of the changes for our customers.  You will use the GitHub API to get the changes for all of the relevant projects.  There are no changelog files for these repositories - do not try to read them - only use the GitHub API to get the changes.

There are 5 possible categories of changes:
- Frameworks
- Toolkits
- CLI and TDK
- Platform and Engine
- Misc

There are 3 possible types of changes, which each have an emoji associated with them:
- 🚀 Feature
- 🐛 Bugfix
- 📝 Documentation

The steps to follow are:
1. Load the changelog.md file and note the date of the most recent entry.
2. Load all new commits since the most recent entry in the changelog.md file from the provided Github repositories.
3. Categorize the changes into the 5 categories and 3 types.  If the change is not in one of the categories, it should be categorized as "Misc".  Ignore small changes that are not worth mentioning - use your judgement.
4. Write a changelog for the project.  The changelog should be in the same format as the changelog.md file.  Do not include any other text in the changelog.md file.

Report the steps you took to generate the changelog.
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
      The full path to the changelog.md that you will be updating is ${changelogPath}.

      The Github repositories to load commits from are: ${repositories.join(", ")}
      `,
    );

    this.logger.endSpan(result.finalOutput);
  }
}
