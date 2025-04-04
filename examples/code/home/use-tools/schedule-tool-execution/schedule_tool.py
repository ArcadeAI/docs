from arcade import Arcade
from datetime import datetime, timedelta, timezone

# Initialize the Arcade client
arcade = Arcade()

# Schedule a tool execution for 1 hour in the future
future_time = datetime.now(timezone.utc) + timedelta(hours=1)

# Schedule the GitHub.CreateIssue tool to run at the specified time
scheduled_execution = arcade.tools.schedule(
    tool_name="Github.CreateIssue",
    input={
        "owner": "ArcadeAI",
        "repo": "Docs",
        "title": "Scheduled issue creation",
        "body": "This issue was created by a scheduled tool execution"
    },
    run_at=future_time,
    user_id="user@example.com"  # Optional: specify the user ID for attribution
)

print(f"Scheduled execution ID: {scheduled_execution.id}")
print(f"Status: {scheduled_execution.status}")
print(f"Will run at: {scheduled_execution.run_at}")

# List all scheduled tool executions
scheduled_tools = arcade.tools.list_scheduled()
print(f"Total scheduled executions: {len(scheduled_tools.items)}")

# Get details of a specific scheduled execution
execution_details = arcade.tools.get_scheduled(scheduled_execution.id)
print(f"Tool: {execution_details.tool_name}")
print(f"Status: {execution_details.execution_status}")

# After execution, you can check the attempts and output
if execution_details.attempts:
    latest_attempt = execution_details.attempts[0]
    print(f"Success: {latest_attempt.success}")
    if latest_attempt.success:
        print(f"Output: {latest_attempt.output}")