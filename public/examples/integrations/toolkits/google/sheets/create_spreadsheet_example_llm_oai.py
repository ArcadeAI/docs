import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Create a new spreadsheet named 'Customers'. I want three columns: Name, Age, and City. John is 20 y/o from New York. Jane is 25 y/o from Los Angeles. Calculate the average age of all customers and put it in the fifth row (use a formula so that it updates automatically)."
TOOL_NAME = "Google.CreateSpreadsheet"

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
