import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "WeaviateApi.CreateBackup"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'backend_storage_system': 's3',
    'backup_chunk_size': 256,
    'backup_id': 'my_backup_001',
    'bucket_name': 'my-backup-bucket',
    'collections_to_include_in_backup': ['users', 'orders'],
    'compression_level': 'BestCompression',
    'cpu_utilization_percentage': 50
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
