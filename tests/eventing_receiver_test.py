import base64
import hashlib
import hmac
import json
import sqlite3
import tempfile
import threading
import unittest
from pathlib import Path

from examples.eventing.receiver import (
    ConfigurationError,
    SQLiteInbox,
    VerificationError,
    receive,
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

        combined = headers(old_key)
        combined["webhook-signature"] += " " + headers(new_key)["webhook-signature"]
        verify_request(BODY, combined, active, NOW)

    def test_rejects_malformed_secret_collections_as_configuration(self) -> None:
        key = b"current-secret"
        with self.assertRaisesRegex(ConfigurationError, "list or tuple of strings"):
            verify_request(BODY, headers(key), secret(key), NOW)  # type: ignore[arg-type]
        with self.assertRaisesRegex(ConfigurationError, "list or tuple of strings"):
            verify_request(BODY, headers(key), [None], NOW)  # type: ignore[list-item]
        with self.assertRaisesRegex(ConfigurationError, "list or tuple of strings"):
            verify_request(BODY, headers(key), {secret(key)}, NOW)  # type: ignore[arg-type]

    def test_rejects_malformed_headers_and_non_object_json(self) -> None:
        key = b"current-secret"
        valid = headers(key)
        for required in ("webhook-id", "webhook-timestamp", "webhook-signature"):
            candidate = dict(valid)
            candidate.pop(required)
            with self.assertRaises(VerificationError):
                verify_request(BODY, candidate, [secret(key)], NOW)
        with self.assertRaises(VerificationError):
            verify_request(BODY, {**valid, "webhook-timestamp": "nope"}, [secret(key)], NOW)
        with self.assertRaises(VerificationError):
            verify_request(BODY, {**valid, "webhook-signature": "v1,é"}, [secret(key)], NOW)

        scalar = b'"signed but not an event"'
        with self.assertRaises(VerificationError):
            verify_request(scalar, headers(key, body=scalar), [secret(key)], NOW)

    def test_header_names_are_case_insensitive(self) -> None:
        key = b"current-secret"
        mixed_case = {
            name.title(): value for name, value in headers(key).items()
        }
        event, delivery_id = verify_request(BODY, mixed_case, [secret(key)], NOW)
        self.assertEqual("demo.follow_up", event["type"])
        self.assertEqual("msg_1", delivery_id)

    def test_malformed_rotation_secret_is_logged_while_valid_secret_works(self) -> None:
        key = b"current-secret"
        with self.assertLogs("examples.eventing.receiver", level="WARNING"):
            verify_request(BODY, headers(key), ["not-base64!", secret(key)], NOW)

    def test_receive_maps_failures_and_keeps_duplicate_and_retry_contracts(self) -> None:
        key = b"current-secret"
        active = [secret(key)]
        with tempfile.TemporaryDirectory() as directory:
            inbox = SQLiteInbox(str(Path(directory) / "inbox.sqlite"))
            handled: list[str] = []
            connection = sqlite3.connect(inbox.path)
            connection.execute("CREATE TABLE business_events (event_type TEXT NOT NULL)")
            connection.commit()
            connection.close()

            def succeed(_: sqlite3.Connection, event: dict) -> None:
                handled.append(event["type"])

            duplicate_headers = headers(key, delivery_id="msg_duplicate")
            self.assertEqual(204, receive(BODY, duplicate_headers, active, inbox, succeed, NOW))
            self.assertEqual(204, receive(BODY, duplicate_headers, active, inbox, succeed, NOW))
            self.assertEqual(["demo.follow_up"], handled)
            self.assertEqual(400, receive(BODY + b" ", duplicate_headers, active, inbox, succeed, NOW))
            self.assertEqual(500, receive(BODY, duplicate_headers, [], inbox, succeed, NOW))

            attempts = 0

            def fail_once(connection: sqlite3.Connection, event: dict) -> None:
                nonlocal attempts
                attempts += 1
                connection.execute(
                    "INSERT INTO business_events(event_type) VALUES (?)",
                    (event["type"],),
                )
                if attempts == 1:
                    raise RuntimeError("retry me")

            retry_headers = headers(key, delivery_id="msg_retry")
            self.assertEqual(500, receive(BODY, retry_headers, active, inbox, fail_once, NOW))
            connection = sqlite3.connect(inbox.path)
            self.assertEqual([], connection.execute("SELECT * FROM business_events").fetchall())
            self.assertEqual(
                [],
                connection.execute(
                    "SELECT * FROM webhook_inbox WHERE webhook_id = 'msg_retry'"
                ).fetchall(),
            )
            connection.close()
            self.assertEqual(204, receive(BODY, retry_headers, active, inbox, fail_once, NOW))
            self.assertEqual(2, attempts)
            connection = sqlite3.connect(inbox.path)
            self.assertEqual(
                [("demo.follow_up",)],
                connection.execute("SELECT event_type FROM business_events").fetchall(),
            )
            self.assertEqual(
                [("msg_retry",)],
                connection.execute(
                    "SELECT webhook_id FROM webhook_inbox WHERE webhook_id = 'msg_retry'"
                ).fetchall(),
            )
            connection.close()

    def test_distinct_ids_fan_out_and_concurrent_duplicates_run_once(self) -> None:
        key = b"current-secret"
        active = [secret(key)]
        with tempfile.TemporaryDirectory() as directory:
            inbox = SQLiteInbox(str(Path(directory) / "inbox.sqlite"))
            handled: list[str] = []
            lock = threading.Lock()

            def succeed(_: sqlite3.Connection, event: dict) -> None:
                with lock:
                    handled.append(event["type"])

            for delivery_id in ("msg_a", "msg_b"):
                self.assertEqual(
                    204,
                    receive(BODY, headers(key, delivery_id=delivery_id), active, inbox, succeed, NOW),
                )
            self.assertEqual(2, len(handled))

            barrier = threading.Barrier(3)
            statuses: list[int] = []

            def send_duplicate() -> None:
                barrier.wait()
                status = receive(
                    BODY,
                    headers(key, delivery_id="msg_race"),
                    active,
                    inbox,
                    succeed,
                    NOW,
                )
                with lock:
                    statuses.append(status)

            threads = [threading.Thread(target=send_duplicate) for _ in range(2)]
            for thread in threads:
                thread.start()
            barrier.wait()
            for thread in threads:
                thread.join()

            self.assertEqual([204, 204], sorted(statuses))
            self.assertEqual(3, len(handled))


if __name__ == "__main__":
    unittest.main()
