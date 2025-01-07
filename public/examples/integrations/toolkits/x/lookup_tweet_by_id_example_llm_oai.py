import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Lookup a tweet with the ID 'your_tweet_id_here'." # Tweet IDs can be found in the response of other X tools, like SearchRecentTweetsByUsername
TOOL_NAME = "X.LookupTweetById"

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
