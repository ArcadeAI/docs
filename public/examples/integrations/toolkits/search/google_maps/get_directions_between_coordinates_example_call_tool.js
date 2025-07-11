import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleMaps.GetDirectionsBetweenCoordinates";

const toolInput = {
	origin_latitude: 37.7879,
	origin_longitude: -122.4076,
	destination_latitude: 37.8219,
	destination_longitude: -122.4789,
	distance_unit: "KM",
	travel_mode: "BEST",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
	user_id: USER_ID,
});

console.log(response);
