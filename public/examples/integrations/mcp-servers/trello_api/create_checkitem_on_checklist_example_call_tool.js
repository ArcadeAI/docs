import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.CreateCheckitemOnChecklist";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "checkitem_name": "Review API integration",
  "checklist_id": "5f8d7a2b9c1e4b3a",
  "checkitem_position": "bottom",
  "checkitem_due_date": "2025-10-10",
  "due_reminder_minutes": 1440,
  "member_id": "603d2f1a7b4c9e2f",
  "is_checkitem_checked": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
