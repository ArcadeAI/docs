import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Github.AssignPullRequestUser";

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
    pull_number: 123,
    assignee_identifier: "john.doe@company.com",
    search_mode: "email",  // Options: username, email, name, id
    auto_accept_matches: false,
};

const response = await client.tools.execute({
    tool_name: TOOL_NAME,
    input: toolInput,
    user_id: USER_ID,
});

console.log(response);

