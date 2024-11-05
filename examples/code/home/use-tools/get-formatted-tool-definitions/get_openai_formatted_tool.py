from arcadepy import Arcade

client = Arcade()

# Get a specific tool formatted for OpenAI
github_star_repo = client.tools.formatted.get(
    tool_id="Github.SetStarred", format="openai"
)

print(github_star_repo)
