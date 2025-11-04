import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ClickupApi.CreateWorkspaceGoal";

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
  "allow_multiple_owners": true,
  "due_date_timestamp": 1699996800000,
  "goal_color": "#FF5733",
  "goal_description": "Increase user engagement by 20% in Q4.",
  "goal_name": "User Engagement Improvement",
  "goal_owners": [
    101,
    102
  ],
  "workspace_id": 5
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
