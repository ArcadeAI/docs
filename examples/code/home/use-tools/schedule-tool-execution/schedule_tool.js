import { Arcade } from '@arcade-ai/arcade';

// Initialize the Arcade client
const arcade = new Arcade();

// Schedule a tool execution for 1 hour in the future
const futureTime = new Date();
futureTime.setHours(futureTime.getHours() + 1);

// Schedule the GitHub.CreateIssue tool to run at the specified time
async function scheduleToolExecution() {
  try {
    const scheduledExecution = await arcade.tools.schedule({
      toolName: 'Github.CreateIssue',
      input: {
        owner: 'ArcadeAI',
        repo: 'Docs',
        title: 'Scheduled issue creation',
        body: 'This issue was created by a scheduled tool execution'
      },
      runAt: futureTime,
      userId: 'user@example.com' // Optional: specify the user ID for attribution
    });

    console.log(`Scheduled execution ID: ${scheduledExecution.id}`);
    console.log(`Status: ${scheduledExecution.status}`);
    console.log(`Will run at: ${scheduledExecution.runAt}`);

    // List all scheduled tool executions
    const scheduledTools = await arcade.tools.listScheduled();
    console.log(`Total scheduled executions: ${scheduledTools.items.length}`);

    // Get details of a specific scheduled execution
    const executionDetails = await arcade.tools.getScheduled(scheduledExecution.id);
    console.log(`Tool: ${executionDetails.toolName}`);
    console.log(`Status: ${executionDetails.executionStatus}`);

    // After execution, you can check the attempts and output
    if (executionDetails.attempts && executionDetails.attempts.length > 0) {
      const latestAttempt = executionDetails.attempts[0];
      console.log(`Success: ${latestAttempt.success}`);
      if (latestAttempt.success) {
        console.log(`Output: ${JSON.stringify(latestAttempt.output)}`);
      }
    }
  } catch (error) {
    console.error('Error scheduling tool execution:', error);
  }
}

scheduleToolExecution();