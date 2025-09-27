import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Clickup.CreateTask";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "list_id": "12345",
  "task_title": "Prepare Q3 Marketing Plan",
  "description": "Draft Q3 strategy, budget estimates, and channel plan. Assign owners and review schedule.",
  "priority": "HIGH",
  "status": "In Progress",
  "start_date": "2025-09-01",
  "due_date": "2025-09-15",
  "sprint_points": 5
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
