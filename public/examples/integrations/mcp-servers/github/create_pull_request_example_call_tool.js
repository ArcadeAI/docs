import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Github.CreatePullRequest";

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
    owner: "your-org",
    repo: "your-repo",
    title: "Add new authentication feature",
    head: "feature/auth",
    base: "main",
    body: "This PR implements OAuth2 authentication with the following changes:\n\n- Added OAuth2 provider\n- Updated login flow\n- Added tests",
    draft: false,
    reviewers: ["teammate1", "teammate2"],
};

const response = await client.tools.execute({
    tool_name: TOOL_NAME,
    input: toolInput,
    user_id: USER_ID,
});

console.log(response);

