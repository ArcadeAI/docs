import os
from openai import OpenAI
from datetime import datetime

# When using the FindTimeSlotsWhenEveryoneIsFree tool, always ground the LLM with the current date and day of the week,
# so that it can call the tool with the correct date arguments.
TODAY = datetime.now().strftime("%Y-%m-%d")
DAY_OF_WEEK = datetime.now().strftime("%A")

USER_ID = "you@example.com"
PROMPT = f"`Today is {TODAY}, {DAY_OF_WEEK}. Find times when john.doe@example.com, jenifer.smith@example.com, and I are free next week. I'm looking for a time slot between 09:00 and 20:00."
TOOL_NAME = "Google.FindTimeSlotsWhenEveryoneIsFree"

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
