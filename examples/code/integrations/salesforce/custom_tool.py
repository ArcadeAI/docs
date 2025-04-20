from typing import Annotated

from arcade.sdk import ToolContext, tool
from arcade.sdk.auth import Google

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build


@tool(
    requires_auth=Google(
        scopes=["https://www.googleapis.com/auth/gmail.readonly"],
    )
)
async def list_emails(
    context: ToolContext,
    subject: Annotated[str, "The subject of the email"],
    body: Annotated[str, "The body of the email"],
    recipient: Annotated[str, "The recipient of the email"],
) -> Annotated[str, "A confirmation message with the sent email ID and URL"]:
    """
    Send an email using the Gmail API.
    """
    if not context.authorization or not context.authorization.token:
        raise ValueError("No token found in context")

    credentials = Credentials(context.authorization.token)
    gmail = build("gmail", "v1", credentials=credentials)

    email_messages = (
        gmail.users().messages().list(userId="me").execute().get("messages", [])
    )

    return email_messages
