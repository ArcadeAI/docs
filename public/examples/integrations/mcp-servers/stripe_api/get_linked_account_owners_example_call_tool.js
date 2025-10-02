import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetLinkedAccountOwners";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "ownership_object_id": "ownobj_12345",
  "linked_account_id": "acct_67890",
  "number_of_owners_to_return": 25,
  "expanded_fields": [
    "email",
    "role"
  ],
  "pagination_starting_after": "owner_100",
  "pagination_ending_before": "owner_075"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
