import { tool } from "@openai/agents";
import { z } from "zod";

import type { Config } from "../classes/config";
import type { Logger } from "../classes/logger";
import { ToolUtils } from "../utils/toolUtils";

const name = "get_new_commits";
const description =
  "Get the new commits from a GitHub repository using the GitHub API";
const parametersSchema = z.object({
  organization_name: z
    .string()
    .describe(
      "The name of the Github organization to read the new commits from",
    ),
  repository_name: z
    .string()
    .describe("The name of the Github repository to read the new commits from"),
  branch_name: z
    .string()
    .default("main")
    .describe("The name of git the branch to read the new commits from"),
  since: z
    .string()
    .describe(
      "The date to start from. The date should be in the format YYYY-MM-DD.",
    ),
  until: z
    .string()
    .describe(
      "The date to end at.  The date should be in the format YYYY-MM-DD.",
    ),
});

export const getNewCommitsTool = (config: Config, logger: Logger) =>
  tool({
    name,
    description,
    parameters: parametersSchema,
    execute: ToolUtils.wrappedExecute(name, execute, config, logger),
  });

export async function execute(
  parameters: z.infer<typeof parametersSchema>,
  config: Config,
) {
  const { organization_name, repository_name, branch_name, since } = parameters;

  /*
  curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/commits?since=2025-06-16&until=2025-06-20
  */

  const url = `https://api.github.com/repos/${organization_name}/${repository_name}/commits?branch=${branch_name}&since=${since}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.github_token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch commits from URL: ${url}: ${response.statusText} | ${JSON.stringify(
        await response.json(),
      )}
      `,
    );
  }

  const data = await response.json();

  return data;
}
