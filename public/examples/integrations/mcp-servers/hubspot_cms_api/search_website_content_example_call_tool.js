import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCmsApi.SearchWebsiteContent";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "blog_ids_to_search": [
    123,
    456
  ],
  "boost_recent_time_window": "10d",
  "content_language_code": "en",
  "content_type_filters": [
    "BLOG_POST",
    "SITE_PAGE"
  ],
  "hubdb_table_id": 789,
  "invert_path_prefix_filter": false,
  "maximum_boost_limit": 5.0,
  "pagination_offset": 0,
  "path_prefixes": [
    "/blog",
    "/articles"
  ],
  "popularity_boost": 2.0,
  "result_length": "LONG",
  "results_limit": 10,
  "search_domains": [
    "example.com",
    "test.com"
  ],
  "search_properties": [
    "title",
    "description"
  ],
  "search_term": "marketing",
  "show_autocomplete": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
