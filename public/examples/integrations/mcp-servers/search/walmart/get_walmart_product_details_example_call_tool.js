import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Walmart.GetProductDetails";

const toolInput = {
	item_id: "1234567890",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
});

console.log(response);
