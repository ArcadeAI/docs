import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Update the calendar event with the ID 'your_event_id_here' to be tomorrow at 10am." # Event IDs can be retrieved from the ListEvents tool.
TOOL_NAME = "Google.UpdateEvent"

client = OpenAI(
    base_url="https://api.arcade-ai.com",
    api_key=os.environ.get("ARCADE_API_KEY"))

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