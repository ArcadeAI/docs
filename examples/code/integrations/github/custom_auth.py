import requests
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "user@example.com"

"""
In this example, we will use Arcade to authenticate with GitHub and retrieve
the number of stargazers of the ArcadeAI/arcade-ai repository.

There is a tool for that in the Arcade SDK, which simplifies the process for
you to interact with GitHub either through our Python or JavaScript SDKs or via
LLM tool calling.

Below we are just showing how to use Arcade as an auth provider, if you ever
need to.
"""

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="github",
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

if not auth_response.context.token:
    raise ValueError("No token found in auth response")

token = auth_response.context.token

owner = "ArcadeAI"
name = "arcade-ai"
headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": f"Bearer {token}",
    "X-GitHub-Api-Version": "2022-11-28",
}
url = f"https://api.github.com/repos/{owner}/{name}"

response = requests.get(url, headers=headers)
response.raise_for_status()

print(response.json().get("stargazers_count"))
