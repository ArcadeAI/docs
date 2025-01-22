import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Create a static matplotlib pie chart for this data: Two green apples, 5 red apples, 3 yellow apples."
TOOL_NAME = "CodeSandbox.CreateStaticMatplotlibChart"

client = OpenAI(
    base_url="https://api.arcade.dev", api_key=os.environ.get("ARCADE_API_KEY")
)

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": PROMPT},
    ],
    model="gpt-4o-mini",
    user=USER_ID,
    tools=[TOOL_NAME],
    tool_choice="execute",
)
print(response)  # The returned base64 encoded image needs to be decoded now
