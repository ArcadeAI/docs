import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GithubApi.ListGithubIssues";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "include_collaborative_repositories": true,
  "include_owned_repositories": true,
  "include_pull_requests": false,
  "issue_filter_type": "assigned",
  "issue_labels": "bug,ui",
  "issue_state": "open",
  "organization_repositories": true,
  "page_number": 1,
  "results_per_page": 50,
  "sort_direction": "desc",
  "sort_issues_by": "updated",
  "updated_since_timestamp": "2023-10-01T00:00:00Z"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
