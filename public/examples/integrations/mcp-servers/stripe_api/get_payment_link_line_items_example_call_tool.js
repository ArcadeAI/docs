import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetPaymentLinkLineItems";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "payment_link_id": "plink_1ExampleA2b3C4d5",
  "item_limit": 5,
  "fields_to_expand": [
    "data.price.product",
    "data.price.tier"
  ],
  "pagination_starting_after": "li_1ExampleLastItem",
  "pagination_ending_before": "li_1ExamplePrevItem"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
