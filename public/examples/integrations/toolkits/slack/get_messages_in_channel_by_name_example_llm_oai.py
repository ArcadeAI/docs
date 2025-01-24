import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Fetch the messages in the channel named 'general' between '2023-01-01 00:00:00' and '2023-01-31 23:59:59'."
TOOL_NAME = "Slack.GetMessagesInChannelByName"

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
