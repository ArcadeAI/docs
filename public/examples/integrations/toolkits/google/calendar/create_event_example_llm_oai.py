import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Create a new calendar event for tomorrow at 10am. This meeting is for a 1:1 with John Doe. Please include john.doe@example.com in the attendees."
TOOL_NAME = "Google.CreateEvent"

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
