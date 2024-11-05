from arcadepy import Arcade

client = Arcade()

# Get all tools in the Github toolkit formatted for OpenAI

# Get an iterator of pages of Github tools
github_tools = client.tools.formatted.list(
    format="openai", toolkit="github"
).iter_pages()

# Flatten the pages into a list of all Github tools
github_tools = [tool for page in github_tools for tool in page.items]

# Print the number of tools in the Github toolkit
print(len(github_tools))
