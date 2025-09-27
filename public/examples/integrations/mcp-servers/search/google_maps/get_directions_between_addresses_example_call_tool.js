import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleMaps.GetDirectionsBetweenAddresses";

const toolInput = {
	origin_address: "123 Main St, New York, NY 10001",
	destination_address: "456 Main St, New York, NY 10001",
	distance_unit: "KM",
	travel_mode: "BEST",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
	user_id: USER_ID,
});

console.log(response);
