import base64
import hashlib
import hmac
import json
import sqlite3
import time
from collections.abc import Callable, Mapping

TOLERANCE_SECONDS = 300
WebhookSecrets = list[str] | tuple[str, ...]


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
    if isinstance(secrets, str):
        raise ConfigurationError("webhook secrets must be a list or tuple")

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
    matched = False
    valid_secret_found = False
    for secret in secrets:
        if not secret.startswith("whsec_"):
            continue
        try:
            key = base64.b64decode(secret.removeprefix("whsec_"), validate=True)
        except ValueError:
            continue
        if not key:
            continue
        valid_secret_found = True
        digest = hmac.new(key, signed, hashlib.sha256).digest()
        expected = b"v1," + base64.b64encode(digest)
        candidate_matched = False
        for candidate in supplied:
            try:
                encoded = candidate.encode("ascii")
            except UnicodeEncodeError:
                continue
            candidate_matched |= hmac.compare_digest(expected, encoded)
        matched |= candidate_matched
    if not valid_secret_found:
        if not secrets:
            raise ConfigurationError("no webhook secrets configured")
        raise ConfigurationError(
            "webhook secrets must use whsec_ followed by padded standard base64"
        )
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
        connection = sqlite3.connect(path)
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
        connection = sqlite3.connect(self.path, timeout=30)
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
    active_secrets: WebhookSecrets,
    inbox: SQLiteInbox,
    handler: Callable[[sqlite3.Connection, dict], None],
    now: int | None = None,
) -> int:
    try:
        event, delivery_id = verify_request(body, headers, active_secrets, now)
    except VerificationError:
        return 400
    except ConfigurationError:
        return 500

    try:
        inbox.handle(delivery_id, event, handler)
    except Exception:
        return 500
    return 204
