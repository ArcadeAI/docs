import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GithubApi.UploadSarifCodeScanningResults";

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
  "base64_compressed_sarif_data": "H4sIAAAAAAAAA6tWSs5M0UjOzy/1z8/8DgDgAIAAA=",
  "commit_sha": "abc123def456ghi789jkl",
  "git_reference": "refs/heads/main",
  "repository_name": "sample-repo",
  "repository_owner": "sample-owner",
  "analysis_start_time": "2023-10-01T12:00:00Z",
  "base_directory_for_analysis": "/src",
  "tool_name": "CodeAnalyzer"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
