import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GithubApi.CreateGithubPagesDeployment";

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
  "artifact_url": "https://github.com/user/repo/releases/download/v1.0.0/assets.zip",
  "oidc_token_for_deployment": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "repository_name": "my-repo",
  "repository_owner": "user",
  "build_version_identifier": "v1.0.0",
  "target_environment_for_deployment": "production"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
