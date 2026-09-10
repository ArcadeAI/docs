import base64
import hashlib
import hmac
import json
import logging
import sqlite3
import time
from collections.abc import Callable, Mapping

TOLERANCE_SECONDS = 300
SECRET_FORMAT_ERROR = (
    "webhook secrets must use whsec_ followed by padded standard base64"
)
WebhookSecrets = list[str] | tuple[str, ...]
logger = logging.getLogger(__name__)


class VerificationError(Exception):
    pass


class ConfigurationError(Exception):
    pass


def verify_request(
    body: bytes,
    headers: Mapping[str, str],
    secrets: WebhookSecrets,
    now: int | None = None,
) -> tuple[dict, str]:
    if not isinstance(secrets, (list, tuple)) or any(
        not isinstance(secret, str) for secret in secrets
    ):
        raise ConfigurationError("webhook secrets must be a list or tuple of strings")

    normalized = {key.lower(): value for key, value in headers.items()}
    try:
        delivery_id = normalized["webhook-id"]
        timestamp_text = normalized["webhook-timestamp"]
        supplied = normalized["webhook-signature"].split()
    except KeyError as error:
        raise VerificationError(f"missing {error.args[0]}") from error

    try:
        timestamp = int(timestamp_text)
    except ValueError as error:
        raise VerificationError("invalid webhook-timestamp") from error

    verification_time = int(time.time()) if now is None else now
    if abs(verification_time - timestamp) > TOLERANCE_SECONDS:
        raise VerificationError("webhook-timestamp outside tolerance")

    signed = (
        delivery_id.encode()
        + b"."
        + timestamp_text.encode()
        + b"."
        + body
    )
    keys: list[bytes] = []
    for secret in secrets:
        if not secret.startswith("whsec_"):
            raise ConfigurationError(SECRET_FORMAT_ERROR)
        try:
            key = base64.b64decode(secret.removeprefix("whsec_"), validate=True)
        except ValueError as error:
            raise ConfigurationError(SECRET_FORMAT_ERROR) from error
        if not key:
            raise ConfigurationError(SECRET_FORMAT_ERROR)
        keys.append(key)
    if not keys:
        raise ConfigurationError("no webhook secrets configured")

    matched = False
    for key in keys:
        digest = hmac.new(key, signed, hashlib.sha256).digest()
        expected = b"v1," + base64.b64encode(digest)
        for candidate in supplied:
            try:
                encoded = candidate.encode("ascii")
            except UnicodeEncodeError:
                continue
            matched |= hmac.compare_digest(expected, encoded)
    if not matched:
        raise VerificationError("invalid webhook-signature")

    try:
        event = json.loads(body)
    except json.JSONDecodeError as error:
        raise VerificationError("invalid JSON") from error
    if not isinstance(event, dict):
        raise VerificationError("event must be a JSON object")
    return event, delivery_id


class SQLiteInbox:
    """A durable idempotency inbox for one receiver process."""

    def __init__(self, path: str):
        self.path = path
        connection = sqlite3.connect(path, timeout=30, isolation_level=None)
        try:
            connection.execute(
                """CREATE TABLE IF NOT EXISTS webhook_inbox (
                       webhook_id TEXT PRIMARY KEY,
                       received_at INTEGER NOT NULL
                   )"""
            )
            connection.commit()
        finally:
            connection.close()

    def handle(
        self,
        delivery_id: str,
        event: dict,
        handler: Callable[[sqlite3.Connection, dict], None],
    ) -> bool:
        connection = sqlite3.connect(self.path, timeout=30, isolation_level=None)
        try:
            connection.execute("BEGIN IMMEDIATE")
            inserted = connection.execute(
                """INSERT OR IGNORE INTO webhook_inbox(webhook_id, received_at)
                   VALUES (?, ?)""",
                (delivery_id, int(time.time())),
            ).rowcount
            if inserted == 0:
                connection.commit()
                return False
            handler(connection, event)
            connection.commit()
            return True
        except Exception:
            connection.rollback()
            raise
        finally:
            connection.close()


def receive(
    body: bytes,
    headers: Mapping[str, str],
    subscription_secrets: WebhookSecrets,
    inbox: SQLiteInbox,
    authorize: Callable[[dict], bool],
    handler: Callable[[sqlite3.Connection, dict], None],
    now: int | None = None,
) -> int:
    try:
        event, delivery_id = verify_request(body, headers, subscription_secrets, now)
    except VerificationError:
        return 400
    except ConfigurationError:
        return 500

    try:
        # Build this callback from server-side subscription configuration. Do not
        # accept event types or tenant IDs merely because they appear in the payload.
        if not authorize(event):
            return 403
        inbox.handle(delivery_id, event, handler)
    except Exception:
        logger.exception("webhook handler failed")
        return 500
    return 204
