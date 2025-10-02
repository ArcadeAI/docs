import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetTaxRegistrations";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "pagination_ending_before": "tr_1JHabc2D3EfGhIjK",
  "response_fields_to_expand": [
    "jurisdiction_details",
    "entity_profile"
  ],
  "object_limit": 25,
  "pagination_starting_after_object_id": "tr_1JHxyz9A0BcDeFgH",
  "tax_registration_status": "active"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
