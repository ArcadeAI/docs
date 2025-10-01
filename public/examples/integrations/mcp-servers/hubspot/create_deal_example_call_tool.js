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
  "deal_name": "Website Redesign Contract",
  "deal_amount": 25000,
  "deal_stage": "stage_3",
  "deal_type": "newbusiness",
  "expected_close_date": "2025-10-15",
  "pipeline_id": "123",
  "deal_owner": "7890",
  "priority_level": "high",
  "deal_description": "Redesign of corporate website including CMS migration and SEO"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
