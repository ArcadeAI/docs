import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "GoogleShopping.SearchProducts";

const toolInput = {
	keywords: "Apple iPhone",
	language_code: "en",
	country_code: "us",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
});

console.log(response);
