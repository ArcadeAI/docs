import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleSheets.CreateSpreadsheet";

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
  title: "My Spreadsheet",
  data: JSON.stringify({
    "1": {
      "A": "Name",
      "B": "Age",
      "C": "City"
    },
    "2": {
      "A": "John",
      "B": "20",
      "C": "New York"
    },
    "3": {
      "A": "Jane",
      "B": "25",
      "C": "Los Angeles"
    },
    "5": {
      "A": "Average Age",
      "B": "=AVERAGE(B2:B3)"
    }
  })
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
