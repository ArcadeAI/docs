import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "WeaviateApi.AddReferenceToObject"

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
    'source_class_name': 'Product',
    'source_object_uuid': '123e4567-e89b-12d3-a456-426614174000',
    'reference_property_name': 'relatedProducts',
    'required_consistency_level': '1',
    'tenant_identifier': 'tenant_1',
    'request_body': '{"referenceId":"456e7890-e12b-34d5-a678-426614174001"}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
