import dotenv from "dotenv";
import * as pkg from "./package.json";
import { program } from "@commander-js/extra-typings";
import { Config } from "./classes/config";
import { Logger } from "./classes/logger";
import { ChangelogAgent } from "./agents/changelog";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDirectory = path.normalize(
  path.join(__dirname, "..", "..", "pages"),
);

program.version(pkg.version).name(pkg.name).description(pkg.description);

program
  .command("generate")
  .description("generate changelogs")
  .option(
    "-l, --log_level [level]",
    "The log level.  Options are: debug, info, warn, error",
    process.env.LOG_LEVEL,
  )
  .option(
    "-c, --colorize [colorize]",
    "Colorize the log output",
    process.env.LOG_COLOR,
  )
  .option(
    "-t, --timestamps [timestamps]",
    "Include timestamps in the log output",
    process.env.LOG_TIMESTAMPS,
  )
  .option(
    "-d, --directory [directory]",
    "The path to the directory to consider",
    pagesDirectory,
  )
  .option(
    "-k, --openai_api_key [api_key]",
    "The OpenAI API key (also loaded from process.env.OPENAI_API_KEY or same name in .env)",
  )
  .option(
    "-b, --openai_base_url [base_url]",
    "The OpenAI base URL (also loaded from process.env.OPENAI_BASE_URL or same name in .env)",
  )
  .option(
    "-m, --openai_model [model]",
    "The OpenAI model (also loaded from process.env.OPENAI_MODEL or same name in .env)",
  )
  .option(
    "-g, --github_token [github_token]",
    "The GitHub token (also loaded from process.env.GITHUB_TOKEN or same name in .env)",
  )

  .argument(
    "[changelog_path]",
    "The path to the changelog.md file",
    path.join(pagesDirectory, "home", "changelog.mdx"),
  )
  .argument(
    "[repos]",
    "A comma separated list of repositories to load the changelogs from",
    "ArcadeAI/docs,ArcadeAI/arcade-ai,ArcadeAI/Cloud,ArcadeAI/Engine,ArcadeAI/dashboard,ArcadeAI/toolkits",
  )
  .argument(
    "[private_repos]",
    "A comma separated list of private repositories to load the changelogs from",
    "ArcadeAI/Cloud,ArcadeAI/Engine,ArcadeAI/dashboard,ArcadeAI/toolkits",
  )
  .action(
    async (
      changelog_path: string,
      repositories: string,
      privateRepositories: string,
      options,
    ) => {
      const config = new Config(options);
      const logger = new Logger(config);
      const agent = new ChangelogAgent(config, logger);

      await agent.generate(
        changelog_path,
        repositories.split(",").map((r) => r.trim()),
        privateRepositories.split(",").map((r) => r.trim()),
      );

      process.exit(0);
    },
  );

program.parse();
