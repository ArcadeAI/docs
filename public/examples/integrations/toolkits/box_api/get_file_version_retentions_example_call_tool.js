import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.GetFileVersionRetentions";

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
  "filter_by_file_id": "1234567890",
  "retention_policy_id": "rp_987654",
  "filter_by_disposition_action": "permanently_delete",
  "filter_by_disposition_before_date": "2025-12-31",
  "disposition_effective_after_date": "2024-01-01",
  "max_items_per_page": 50,
  "pagination_start_marker": "marker_abc123"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
