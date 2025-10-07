import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "TrelloApi.TrelloBatchGetRequests";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "api_routes_list": [
    "/boards/5abbe4b7ddc1b351ef961414",
    "/boards/5abbe4b7ddc1b351ef961414/lists",
    "/boards/5abbe4b7ddc1b351ef961414/cards",
    "/members/me",
    "/organizations/4d5ea62fd76aa1136000000c",
    "/cards/54d5ea62fd76aa1136000000d",
    "/lists/54d5ea62fd76aa1136000000e",
    "/tokens/abcd1234/tokeninfo",
    "/actions/5c2a1b2f3d4e5f6a7b8c9d0e",
    "/search?query=project&modelTypes=boards,cards"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
