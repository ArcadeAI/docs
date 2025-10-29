import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "PagerdutyApi.CreateEscalationPolicy";

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
  "change_tracking_user_email": "user@example.com",
  "request_body": "{\"escalation_rules\":[{\"escalation_level\":1,\"targets\":[{\"type\":\"user\",\"id\":\"PABC123\"}]}]}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
