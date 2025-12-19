import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ClickupApi.AddTargetToGoal";

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
  "goal_identifier": "123e4567-e89b-12d3-a456-426614174000",
  "initial_value_steps": 0,
  "linked_task_ids": [
    "task_1",
    "task_2"
  ],
  "list_ids": [
    "list_1",
    "list_2"
  ],
  "target_name": "Increase User Engagement",
  "target_owners_ids": [
    "user_1",
    "user_2"
  ],
  "target_steps_end": 100,
  "target_type": "percentage",
  "target_unit": "%"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
