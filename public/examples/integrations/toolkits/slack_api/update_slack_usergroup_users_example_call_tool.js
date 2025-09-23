import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SlackApi.UpdateSlackUsergroupUsers";

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
  "user_group_id": "S0614K5ZC",
  "user_ids_list": [
    "U12345678",
    "U23456789",
    "U34567890"
  ],
  "team_id_for_org_token": "T012AB3C4",
  "update_additional_channels": [
    "C01AB2C3D",
    "C02EF3G4H"
  ],
  "include_user_count": true,
  "is_shared_section": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
