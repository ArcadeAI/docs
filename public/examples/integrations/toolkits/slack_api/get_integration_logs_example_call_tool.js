import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.GetIntegrationLogs";

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
  "filter_by_app_id": "A123BCD45",
  "filter_by_change_type": "added",
  "result_count": "50",
  "result_page_number": "1",
  "filter_by_service_id": "SVC789",
  "encoded_team_id": "T-ENC-9f8e7d6c",
  "filter_by_user": "U234XYZ"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
