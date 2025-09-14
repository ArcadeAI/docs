import asyncio
from google.adk import Agent, Runner
from google.adk.artifacts import InMemoryArtifactService
from google.adk.sessions import InMemorySessionService, Session
from google.genai import types
from dotenv import load_dotenv


load_dotenv(override=True)


async def main():
    app_name = 'Arcade Google ADK'
    user_id = '{arcade_user_id}'
    session_service = InMemorySessionService()
    artifact_service = InMemoryArtifactService()

    # This creates a simple agent, and for now it does not have any tools.
    agent = Agent(
        model="gemini-2.0-flash",
        name="simple_agent",
        instruction="You are a helpful assistant that can help users with"
                    " everyday tasks.",
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
