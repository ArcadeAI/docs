import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Hubspot.CreateDeal";

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
  "deal_name": "Q3 Enterprise Renewal",
  "deal_amount": 125000,
  "deal_stage": "appointmentscheduled",
  "deal_type": "existingbusiness",
  "expected_close_date": "2025-10-15",
  "pipeline_id": "default",
  "deal_owner": "78945",
  "priority_level": "high",
  "deal_description": "Renewal for enterprise account with added support package."
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
