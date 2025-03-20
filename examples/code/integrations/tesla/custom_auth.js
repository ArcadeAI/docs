import { ArcadeClient } from "@arcade-ai/client";

// Initialize the Arcade client
const client = new ArcadeClient();

// Start the authorization flow for Tesla
// This will redirect the user to Tesla's authorization page if needed
const authResult = await client.auth.start({
  provider: "tesla",
  scopes: ["vehicle_data", "vehicle_cmds"],
});

// Use the token to make API calls to Tesla Fleet API
const token = authResult.token;

// Now you can use the token to make API calls to Tesla Fleet API
// For example:
// const response = await fetch(
//   'https://fleet-api.prd.eu.vn.cloud.tesla.com/api/1/vehicles',
//   { headers: { Authorization: `Bearer ${token}` } }
// );
