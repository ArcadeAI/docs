import asyncio
from arcadepy import AsyncArcade
from google.adk import Agent, Runner
from google.adk.artifacts import InMemoryArtifactService
from google.adk.sessions import InMemorySessionService, Session
from google.genai import types
from google_adk_arcade.tools import get_arcade_tools
from dotenv import load_dotenv


load_dotenv(override=True)


async def main():
    # initialize the Arcade client
    client = AsyncArcade()
    app_name = "Arcade Google ADK"
    user_id = "mateo@arcade.dev"
    session_service = InMemorySessionService()
    artifact_service = InMemoryArtifactService()

    # This function returns a list of tools in the format expected by ADK
    all_gmail_tools = await get_arcade_tools(client, toolkits=["Gmail"])

    # We've updated the agent to access a single tool
    agent = Agent(
        model="gemini-2.0-flash",
        name="simple_agent",
        instruction="You are a helpful assistant that can help users with"
                    " everyday tasks. It is very important that you use"
                    " the provided tools to ensure the task is successfully"
                    " achieved",
        tools=gmail_list_emails,  # pass the tool to the agent
    )
    session = await session_service.create_session(
        app_name=app_name, user_id=user_id, state={
            "user_id": user_id,
        }
    )
    runner = Runner(
        app_name=app_name,
        agent=agent,
        artifact_service=artifact_service,
        session_service=session_service,
    )

    # This is a helper function to run the agent with a prompt.
    async def run_prompt(session: Session, new_message: str):
        content = types.Content(
            role='user', parts=[types.Part.from_text(text=new_message)]
        )
        async for event in runner.run_async(
            user_id=user_id,
            session_id=session.id,
            new_message=content,
        ):
            if event.content.parts and event.content.parts[0].text:
                print(f'** {event.author}: {event.content.parts[0].text}')

    # This is the main agent loop to prompt the user until they exit.
    while True:
        user_input = input("User: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        await run_prompt(session, user_input)


if __name__ == "__main__":
    asyncio.run(main())


