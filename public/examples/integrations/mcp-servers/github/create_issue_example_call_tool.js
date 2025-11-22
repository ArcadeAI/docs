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
    owner: "your-org",
    repo: "your-repo",
    title: "Bug: Login button not working",
    body: "## Description\nThe login button on the main page doesn't respond to clicks.\n\n## Steps to Reproduce\n1. Go to homepage\n2. Click login button\n3. Nothing happens\n\n## Expected Behavior\nShould redirect to login page",
    labels: ["bug", "high-priority"],
    assignees: ["developer1"],
};

const response = await client.tools.execute({
    tool_name: TOOL_NAME,
    input: toolInput,
    user_id: USER_ID,
});

console.log(response); 