import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZohoCreatorApi.UpdateZohoCreatorReportRecords";

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
  "mode": "execute",
  "account_owner_name": "john_doe",
  "application_link_name": "my_app",
  "report_link_name": "sales_report",
  "process_until_limit_enabled": true,
  "request_body": "{\"records\":[{\"id\":\"1\",\"field\":\"value1\"},{\"id\":\"2\",\"field\":\"value2\"}]}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
