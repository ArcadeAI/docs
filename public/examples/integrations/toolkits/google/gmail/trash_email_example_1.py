import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Move the email with the ID 'your_email_id_here' to the trash." # The ID of an email can be found with the ListEmails tool
TOOL_NAME = "Google.TrashEmail"

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
