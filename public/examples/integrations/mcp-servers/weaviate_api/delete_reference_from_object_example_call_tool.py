import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "WeaviateApi.DeleteReferenceFromObject"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'mode': 'execute',
    'collection_name': 'UserCollection',
    'source_object_uuid': '123e4567-e89b-12d3-a456-426614174000',
    'reference_property_name': 'friends',
    'required_consistency_level': 'quorum',
    'tenant_identifier': 'tenant123',
    'request_body': '{"referenceId":"456e7890-e12b-34d5-a678-426614174001"}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
