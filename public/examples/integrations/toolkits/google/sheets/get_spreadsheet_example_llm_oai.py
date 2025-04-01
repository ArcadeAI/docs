import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Get the spreadsheet with the ID 'your_spreadsheet_id_here'."  # The ID of a spreadsheet can be found with the ListSpreadsheets tool
TOOL_NAME = "Google.GetSpreadsheet"

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
