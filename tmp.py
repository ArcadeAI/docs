import os

# Define the directories containing the files
directories = [
    "public/examples/integrations/toolkits/github/",
    "public/examples/integrations/toolkits/google/calendar/",
    "public/examples/integrations/toolkits/google/drive/",
    "public/examples/integrations/toolkits/google/gmail/",
    "public/examples/integrations/toolkits/google/docs/",
    "public/examples/integrations/toolkits/web/",
    "public/examples/integrations/toolkits/search/",
    "public/examples/integrations/toolkits/slack/",
    "public/examples/integrations/toolkits/x/",
]

# Iterate over each directory
for directory in directories:
    # List all files in the directory
    for filename in os.listdir(directory):
        # Check if the filename ends with "_example_call_tool.py"
        if filename.endswith("_1.py"):
            # Construct the new filename
            new_filename = filename.replace("_example_1.py", "_example_llm_oai.py")
            # Rename the file
            os.rename(
                os.path.join(directory, filename), os.path.join(directory, new_filename)
            )
            print(f"Renamed: {filename} to {new_filename}")

        # Check if the filename ends with "_example_llm_oai.py"
        elif filename.endswith("_2.py"):
            # Construct the new filename
            new_filename = filename.replace("_example_2.py", "_example_call_tool.py")
            # Rename the file
            os.rename(
                os.path.join(directory, filename), os.path.join(directory, new_filename)
            )
            print(f"Renamed: {filename} to {new_filename}")
