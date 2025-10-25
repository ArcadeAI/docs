import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "MiroApi.FetchBoardContentChanges";

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
  "end_modification_datetime": "2023-10-15T23:59:59Z",
  "organization_id": "org_123456",
  "start_date_time": "2023-10-01T00:00:00Z",
  "board_ids": [
    "board_1",
    "board_2"
  ],
  "max_results_per_call": 50,
  "sort_order_by_date": "desc"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
