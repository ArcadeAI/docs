from arcadepy import Arcade

client = Arcade()

# Get an iterator of pages of tools
pages_iterator = client.tools.formatted.list(format="openai").iter_pages()

# Flatten the pages into a list of all tools
all_tools = [tool for page in pages_iterator for tool in page.items]

# Print the number of tools
print(len(all_tools))
