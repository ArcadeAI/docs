import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.GetLegalHoldPolicyAssignments";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "legal_hold_policy_id": "lh_9f8a7b6c",
  "filter_by_assignment_type": "file",
  "filter_by_item_id": "1234567890",
  "pagination_marker": "marker_abc123",
  "maximum_items_per_page": 50,
  "response_fields": [
    "id",
    "assigned_at",
    "assigned_by",
    "item_type"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
