import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ClickupApi.UpdateGoalDetails";

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
  "goal_color": "#FF5733",
  "goal_description": "Increase team productivity by 20%",
  "goal_due_date": 1699996800,
  "goal_id": "123e4567-e89b-12d3-a456-426614174000",
  "goal_name": "Productivity Boost",
  "new_owners_to_add": [
    "user_1",
    "user_2"
  ],
  "remove_owners_user_ids": [
    "user_3"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
