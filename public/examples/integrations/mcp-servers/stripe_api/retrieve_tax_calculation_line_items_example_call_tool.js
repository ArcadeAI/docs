import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.RetrieveTaxCalculationLineItems";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "tax_calculation_id": "txcl_1KxYz2AbCdEfGhIj",
  "pagination_cursor_ending_before": "tli_00000000000001",
  "fields_to_expand": [
    "lines.data.tax_rate",
    "customer"
  ],
  "object_return_limit": 25,
  "pagination_starting_after_item_id": "tli_00000000000025"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
