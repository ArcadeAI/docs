import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Github.CreateIssue";

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
    owner: "ArcadeAI",
    repo: "example",
    title: "Example Issue",
    body: "This is an example issue.",
};

const response = await client.tools.execute({
    tool_name: TOOL_NAME,
    input: toolInput,
    user_id: USER_ID,
});

console.log(response); 