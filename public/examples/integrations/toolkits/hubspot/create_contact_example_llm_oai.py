import os
from openai import OpenAI

PROMPT = "Create a contact with the following information: first name: John, last name: Doe, email: john.doe@example.com, phone: +1234567890, mobile phone: +1234567890, job title: Software Engineer"
TOOL_NAME = "Hubspot.CreateContact"

client = OpenAI(
    base_url="https://api.arcade.dev", api_key=os.environ.get("ARCADE_API_KEY")
)

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": PROMPT},
    ],
    model="gpt-4o-mini",
    tools=[TOOL_NAME],
    tool_choice="generate",
)
print(response.choices[0].message.content)
