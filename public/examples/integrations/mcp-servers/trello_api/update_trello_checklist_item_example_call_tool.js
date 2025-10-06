import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.UpdateTrelloChecklistItem";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "card_id": "5f8d0d3a2c9b1a7e4b2c3d4f",
  "checkitem_id": "60a1b2c3d4e5f67890123456",
  "new_checklist_item_name": "Write unit tests for payment module",
  "checkitem_state": "incomplete",
  "checklist_id": "5f8d0d3a2c9b1a7e4b2c3d50",
  "position": "top",
  "checkitem_due_date": "2025-10-15",
  "due_reminder_minutes": 1440,
  "member_id_to_remove": "53b2c1d4e5f678901234abcd"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
