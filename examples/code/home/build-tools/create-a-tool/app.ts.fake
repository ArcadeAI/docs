import Arcade from "@arcadeai/arcadejs";

const ARCADE_API_KEY = process.env.ARCADE_API_KEY;
const USER_ID = process.env.USER_ID;
const DB_DIALECT = "POSTGRES";

const SYSTEM_PROMPT = `
You are an expert SQL analyst.
For all questions, you will use only the tools provided to you to answer the question, and no prior knowledge.
The SQL dialect is "${DB_DIALECT}".
If a tool call requires a schema, and one has not been provided, assume the schema is "public".
If a tool call produces a response with multiple entries, format your response as a markdown table, with one row per entry.
`;

const client = new Arcade({
  apiKey: ARCADE_API_KEY,
});

const tables = await chat("Discover all the tables in the database");
const schemas = await chat(
  `Get the schemas of the tables in the database.  The tables are: ${tables}`,
  tables,
);
await chat(
  `Get the first 10 user's names.  The database schema is: ${schemas}`,
  schemas,
);
await chat(
  `Count how many users there are.  The database schema is: ${schemas}`,
  schemas,
);
await chat(
  `How many messages has each user sent?  Group by user id and name.  The database schema is: ${schemas}`,
  schemas,
);

/* --- UTILITIES --- */

function buildPrompt(question: string) {
  return {
    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: question,
      },
    ],
    model: "gpt-4o",
    user: USER_ID,
    tools: ["Sql.ExecuteQuery"],
    tool_choice: "generate",
  };
}

async function chat(
  question: string,
  replace: string = "...",
): Promise<string | undefined> {
  console.log(`\r\n[❓] Asking: ${question.replace(replace, " {...}")}\r\n`);
  const response = await client.chat.completions.create(buildPrompt(question));
  displayResponse(response);
  return response.choices?.[0]?.message?.content;
}

function displayResponse(response: Arcade.Chat.ChatResponse) {
  console.log("--- response ---");
  console.log(response.choices?.[0]?.message?.content);
  console.log("\r\n--- tool calls ---");
  response.choices?.[0]?.message?.tool_calls?.map((tool) => {
    if (!tool || !tool.function) return;
    console.log(`${tool.function.name}: ${tool.function.arguments}`);
  });
  console.log("---");
}
