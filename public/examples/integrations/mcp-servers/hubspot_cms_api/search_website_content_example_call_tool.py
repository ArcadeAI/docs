import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "HubspotCmsApi.SearchWebsiteContent"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'blog_ids_to_search': [123, 456],
    'boost_recent_time_window': '10d',
    'content_language_code': 'en',
    'content_type_filters': ['BLOG_POST', 'SITE_PAGE'],
    'hubdb_table_id': 789,
    'invert_path_prefix_filter': False,
    'maximum_boost_limit': 5.0,
    'pagination_offset': 0,
    'path_prefixes': ['/blog', '/articles'],
    'popularity_boost': 2.0,
    'result_length': 'LONG',
    'results_limit': 10,
    'search_domains': ['example.com', 'test.com'],
    'search_properties': ['title', 'description'],
    'search_term': 'marketing',
    'show_autocomplete': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
