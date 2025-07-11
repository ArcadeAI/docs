import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "you@example.com";
const TOOL_NAME = "GoogleFlights.SearchOneWayFlights";

const toolInput = {
	departure_airport_code: "LAX",
	arrival_airport_code: "SFO",
	outbound_date: "2025-09-01",
	currency_code: "USD",
	travel_class: "ECONOMY",
	num_adults: 1,
	num_children: 0,
	max_stops: "ANY",
	sort_by: "TOP_FLIGHTS",
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
	user_id: USER_ID,
});

console.log(response);
