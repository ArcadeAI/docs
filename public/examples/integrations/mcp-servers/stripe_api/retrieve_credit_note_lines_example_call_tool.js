import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.RetrieveCreditNoteLines";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "credit_note_id": "cn_1Hh1X2AbCdEfGhIjK7L9mN2p",
  "fields_to_expand": [
    "invoice",
    "tax_rates"
  ],
  "max_objects_to_return": 25,
  "pagination_starting_after": "cnli_1Hh1Y9ZxYzAbCdEfGhIjK"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
