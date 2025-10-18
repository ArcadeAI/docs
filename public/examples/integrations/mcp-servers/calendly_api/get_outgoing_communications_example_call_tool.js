import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "CalendlyApi.GetOutgoingCommunications";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "organization_uri": "https://api.example.com/orgs/12345",
  "number_of_records": 25,
  "filter_communications_after": "2025-01-01T00:00:00.000Z",
  "end_date_time_utc": "2025-10-01T00:00:00.000Z",
  "pagination_token": "eyJwIjoibmV4dCJ9"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
