import { tool } from '@openai/agents';
import { z } from 'zod';

import type { Config } from '../classes/config';
import type { Logger } from '../classes/logger';
import { ToolUtils } from '../utils/tool-utils';

const name = 'get_new_commits_and_pull_requests';
const description =
  'Get the new commits and pull requests from a GitHub repository using the GitHub API';
const parametersSchema = z.object({
  organization_name: z
    .string()
    .describe(
      'The name of the Github organization to read the new commits from'
    ),
  repository_name: z
    .string()
    .describe('The name of the Github repository to read the new commits from'),
  branch_name: z
    .string()
    .default('main')
    .describe('The name of git the branch to read the new commits from'),
  since: z
    .string()
    .describe(
      'The date to start from. The date should be in the format YYYY-MM-DD.'
    ),
  until: z
    .string()
    .describe(
      'The date to end at.  The date should be in the format YYYY-MM-DD.'
    ),
});

type Commit = {
  sha: string;
  commit: {
    message: string;
    sha: string;
  };
};

type Label = {
  name: string;
  description: string;
  color: string;
};

type PullRequest = {
  number: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  labels: Label[];
};

export const getNewCommitsTool = (config: Config, logger: Logger) =>
  tool({
    name,
    description,
    parameters: parametersSchema,
    execute: ToolUtils.wrappedExecute(name, execute, config, logger),
  });

export async function execute(
  parameters: z.infer<typeof parametersSchema>,
  config: Config
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
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.github_token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch commits from URL: ${url}: ${response.statusText} | ${JSON.stringify(
        await response.json()
      )}
      `
    );
  }

  const data: Commit[] = await response.json();

  const pull_requests: Awaited<ReturnType<typeof getPullRequest>>[] = [];

  for (const commit of data) {
    // example commit message: "Allow goreleaser to auto push (#480)"
    const pullRequestMatch = commit.commit.message.match(/\(#(\d+)\)/);
    if (!pullRequestMatch) continue;

    const pull_request_number = Number.parseInt(pullRequestMatch[1]);
    if (!pull_request_number || isNaN(pull_request_number)) continue;

    const pull_request = await getPullRequest(
      pull_request_number,
      organization_name,
      repository_name,
      config
    );
    pull_requests.push(pull_request);
  }

  return pull_requests;
}

async function getPullRequest(
  pull_request_number: number,
  organization_name: string,
  repository_name: string,
  config: Config
) {
  const url = `https://api.github.com/repos/${organization_name}/${repository_name}/pulls/${pull_request_number}`;

  /*
  curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/pulls?head=OWNER:BRANCH
  */

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${config.github_token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch pull request from URL: ${url}: ${response.statusText} | ${JSON.stringify(
        await response.json()
      )}
      `
    );
  }

  const data: PullRequest = await response.json();

  return {
    number: data.number,
    title: data.title,
    description: data.description,
    labels: data.labels.map((label) => ({
      name: label.name,
      description: label.description,
    })),
  };
}
