from typing import Annotated

from arcade.core.schema import ToolContext
from arcade.sdk import tool
from arcade.sdk.auth import Google

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build


@tool(
    requires_auth=Google(
        scopes=["https://www.googleapis.com/auth/gmail.send"],
    )
)
async def send_email(
    context: ToolContext,
    subject: Annotated[str, "The subject of the email"],
    body: Annotated[str, "The body of the email"],
    recipient: Annotated[str, "The recipient of the email"],
) -> Annotated[str, "A confirmation message with the sent email ID and URL"]:
    """
    Send an email using the Gmail API.
    """

    # Set up the Gmail API client
    service = build("gmail", "v1", credentials=Credentials(context.authorization.token))
