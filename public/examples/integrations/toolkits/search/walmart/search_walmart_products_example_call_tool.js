import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Search.SearchWalmartProducts";

const toolInput = {
	query: "Apple iPhone",
	sort_by: "lowest_price_first",
	max_price: 250,
	next_day_delivery: true,
	page: 1,
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
});

console.log(response);
