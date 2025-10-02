import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZoomMeetingsApi.ListZoomDevices";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "filter_by_name_or_serial_number": "RoomCam-1234",
  "filter_by_platform_os": "win",
  "filter_by_device_type": 0,
  "filter_by_device_vendor": "Logitech",
  "filter_device_by_model": "Rally",
  "device_status_filter": 1,
  "result_limit": 50,
  "pagination_token": "abc123token",
  "filter_by_zdm_enrollment": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
