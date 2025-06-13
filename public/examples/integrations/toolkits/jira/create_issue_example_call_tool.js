import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "user@example.com";  // Unique identifier for your user (email, UUID, etc.)
const TOOL_NAME = "Jira.CreateIssue";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "title": "Bug in login feature",
  "issue_type": "Bug",
  "project": "PROJ123",
  "due_date": "2025-01-15",
  "description": "There is a bug that prevents users from logging in.",
  "labels": [
    "login_issue",
    "urgent"
  ],
  "assignee": "john.doe@example.com"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
