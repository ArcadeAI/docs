from openai import OpenAI

client = OpenAI(base_url="http://localhost:9099/v1")

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": "Who is the CEO of Apple?"},
    ],
    model="primary/gpt-4o",
)
