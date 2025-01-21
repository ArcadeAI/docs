import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Update pull request #1 in the ArcadeAI/hello-world repository with the title 'Updated Title' and body 'Updated body content.'"
TOOL_NAME = "Github.UpdatePullRequest"

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
    tool_choice="generate",
)
print(response.choices[0].message.content)
