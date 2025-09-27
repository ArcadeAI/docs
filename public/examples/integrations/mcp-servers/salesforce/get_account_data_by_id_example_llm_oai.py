import os
from openai import OpenAI

PROMPT = "Get the data for the account with the id '001111111111111111'"
TOOL_NAME = "Salesforce.GetAccountDataById"

client = OpenAI(
    base_url="http://localhost:9099/v1", api_key=os.environ.get("ARCADE_API_KEY")
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
