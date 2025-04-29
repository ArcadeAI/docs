// Import the OpenAI client
import { OpenAI } from "openai";

// Replace these values with your own:
const ARCADE_API_KEY = "MY_ARCADE_API_KEY"; // Your Arcade API key from the previous step
const RECIPIENT_EMAIL = "FRIEND@EMAIL.COM"; // The email address where you want to send the email
const YOUR_EMAIL = "YOUR@EMAIL.COM"; // Your email address (used for authorization)

// Instantiate the OpenAI client pointing to Arcade's endpoint
const client = new OpenAI({
  baseURL: "https://api.arcade.dev/v1",
  apiKey: ARCADE_API_KEY,
});

// Define the parameters for the request
const prompt = `Send an email to ${RECIPIENT_EMAIL} with the subject 'Arcade.dev' and the body
'I'm trying out Arcade.dev and it's awesome! You should check it out too:
https://api.arcade.dev/signup'`;
const tools = ["Google.SendEmail"]; // The tools available to use for the request
const model = "gpt-4o";
const user_id = YOUR_EMAIL; // Identifies the user for Arcade to auth with

// Send the request to the LLM via Arcade's Gateway
const response = await client.chat.completions.create({
  model: model,
  messages: [{ role: "user", content: prompt }],
  tools: tools,
  tool_choice: "generate", // Instructs Arcade to use its tools
  user: user_id,
});

// Print the response from the LLM
console.log(response.choices[0].message.content);
