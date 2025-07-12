import requests
from arcadepy import Arcade

client = Arcade(base_url="http://localhost:9099")  # Automatically finds the `ARCADE_API_KEY` env variable

salesforce_provider_id = "salesforce"
salesforce_org_subdomain = "salesforce-org-subdomain"
user_id = "{arcade_user_id}"
scopes = ["read_account"]

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider=salesforce_provider_id,
    scopes=scopes,
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

token = auth_response.context.token

if not token:
    raise ValueError("No token found in auth response")

# Use the Salesforce API
response = requests.post(
    f"https://{salesforce_org_subdomain}.my.salesforce.com/services/data/v63.0/parameterizedSearch",
    headers={"Authorization": f"Bearer {token}"},
    json={
        "q": "acme",
        "sobjects": [
            {"name": "Account", "fields": ["Id", "Name", "Website", "Phone"]},
        ],
        "in": "ALL",
        "overallLimit": 10,
        "offset": 0,
    },
)

if not response.ok:
    raise ValueError(
        f"Failed to retrieve Salesforce data: {response.status_code} - {response.text}"
    )

print(response.json())
