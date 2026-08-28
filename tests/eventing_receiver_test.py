import base64
import hashlib
import hmac
import json
import sqlite3
import tempfile
import unittest
from pathlib import Path

from examples.eventing.receiver import (
    ConfigurationError,
    SQLiteInbox,
    VerificationError,
    verify_request,
)


NOW = 2_000_000_000
BODY = json.dumps({"type": "demo.follow_up", "data": {"id": "evt_1"}}).encode()


def secret(key: bytes) -> str:
    return "whsec_" + base64.b64encode(key).decode()


def headers(key: bytes, *, delivery_id: str = "msg_1", timestamp: int = NOW, body: bytes = BODY) -> dict[str, str]:
    timestamp_text = str(timestamp)
    signed = delivery_id.encode() + b"." + timestamp_text.encode() + b"." + body
    signature = "v1," + base64.b64encode(
        hmac.new(key, signed, hashlib.sha256).digest()
    ).decode()
    return {
        "webhook-id": delivery_id,
        "webhook-timestamp": timestamp_text,
        "webhook-signature": signature,
    }


class ReceiverTest(unittest.TestCase):
    def test_rejects_tampering_and_unknown_secrets(self) -> None:
        key = b"current-secret"
        with self.assertRaises(VerificationError):
            verify_request(BODY + b" ", headers(key), [secret(key)], NOW)
        with self.assertRaises(VerificationError):
            verify_request(BODY, headers(key), [secret(b"other-secret")], NOW)

    def test_accepts_exact_timestamp_boundary_and_rejects_beyond_it(self) -> None:
        key = b"current-secret"
        for offset in (-300, 300):
            event, delivery_id = verify_request(
                BODY, headers(key, timestamp=NOW + offset), [secret(key)], NOW
            )
            self.assertEqual("demo.follow_up", event["type"])
            self.assertEqual("msg_1", delivery_id)
        for offset in (-301, 301):
            with self.assertRaises(VerificationError):
                verify_request(
                    BODY, headers(key, timestamp=NOW + offset), [secret(key)], NOW
                )

    def test_accepts_either_active_rotation_secret(self) -> None:
        old_key, new_key = b"old-secret", b"new-secret"
        active = [secret(old_key), secret(new_key)]
        verify_request(BODY, headers(old_key), active, NOW)
        verify_request(BODY, headers(new_key), active, NOW)

    def test_rejects_a_bare_secret_string_as_configuration(self) -> None:
        key = b"current-secret"
        with self.assertRaisesRegex(ConfigurationError, "list or tuple"):
            verify_request(BODY, headers(key), secret(key), NOW)  # type: ignore[arg-type]

    def test_duplicate_is_ignored_and_failed_handler_can_retry(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            inbox = SQLiteInbox(str(Path(directory) / "inbox.sqlite"))
            handled: list[str] = []

            def succeed(_: sqlite3.Connection, event: dict) -> None:
                handled.append(event["type"])

            self.assertTrue(inbox.handle("msg_duplicate", {"type": "first"}, succeed))
            self.assertFalse(inbox.handle("msg_duplicate", {"type": "second"}, succeed))
            self.assertEqual(["first"], handled)

            attempts = 0

            def fail_once(_: sqlite3.Connection, __: dict) -> None:
                nonlocal attempts
                attempts += 1
                if attempts == 1:
                    raise RuntimeError("retry me")

            with self.assertRaises(RuntimeError):
                inbox.handle("msg_retry", {"type": "retry"}, fail_once)
            self.assertTrue(inbox.handle("msg_retry", {"type": "retry"}, fail_once))
            self.assertEqual(2, attempts)


if __name__ == "__main__":
    unittest.main()
