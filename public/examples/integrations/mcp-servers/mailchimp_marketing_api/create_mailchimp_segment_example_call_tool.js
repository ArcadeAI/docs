import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "MailchimpMarketingApi.CreateMailchimpSegment";

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
  "list_unique_id": "abc123",
  "segment_name": "Active Customers",
  "emails_for_static_segment": [
    "customer1@example.com",
    "customer2@example.com"
  ],
  "segment_match_conditions": [
    {
      "field": "last_purchase_date",
      "operator": ">",
      "value": "2023-01-01"
    }
  ],
  "segment_match_type": "all"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
