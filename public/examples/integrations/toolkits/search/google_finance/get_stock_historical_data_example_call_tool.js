import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "you@example.com";
const TOOL_NAME = "GoogleFinance.GetStockHistoricalData";

const toolInput = {
	ticker_symbol: "GOOG",
	exchange_identifier: "NASDAQ",
	window: "ONE_MONTH",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
	user_id: USER_ID,
});

console.log(response);
