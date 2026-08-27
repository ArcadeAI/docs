import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const page = readFileSync(
  join(process.cwd(), "app/en/build/eventing/page.mdx"),
  "utf8"
);
const receiver =
  page.match(/```python filename="receiver.py"\n([\s\S]*?)\n```/)?.[1] ?? "";

const harness = `
import base64
import hashlib
import hmac
import json
import tempfile
import threading
import unittest

SECRET = "whsec_" + base64.b64encode(b"primary-secret").decode()
OLD_SECRET = "whsec_" + base64.b64encode(b"old-secret").decode()
NOW = 2_000_000_000
BODY = b'{"type":"demo.ready","data":{"ok":true}}'

def signature(secret, delivery_id, timestamp, body=BODY):
    key = base64.b64decode(secret.removeprefix("whsec_"))
    signed = delivery_id.encode() + b"." + str(timestamp).encode() + b"." + body
    digest = hmac.new(key, signed, hashlib.sha256).digest()
    return "v1," + base64.b64encode(digest).decode()

def headers(delivery_id="msg_1", timestamp=NOW, secret=SECRET, body=BODY):
    return {
        "webhook-id": delivery_id,
        "webhook-timestamp": str(timestamp),
        "webhook-signature": signature(secret, delivery_id, timestamp, body),
    }

class ReceiverContract(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.inbox = SQLiteInbox(self.tmp.name + "/inbox.db")
        self.calls = []
        connection = sqlite3.connect(self.inbox.path)
        connection.execute("CREATE TABLE business_events (event_type TEXT NOT NULL)")
        connection.commit()
        connection.close()

    def tearDown(self):
        self.tmp.cleanup()

    def handler(self, connection, event):
        connection.execute(
            "INSERT INTO business_events(event_type) VALUES (?)",
            (event["type"],),
        )
        self.calls.append(event["type"])

    def business_rows(self):
        connection = sqlite3.connect(self.inbox.path)
        try:
            return connection.execute(
                "SELECT event_type FROM business_events ORDER BY rowid"
            ).fetchall()
        finally:
            connection.close()

    def test_first_delivery_and_duplicate_acknowledgement(self):
        h = headers()
        self.assertEqual(receive(BODY, h, [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(receive(BODY, h, [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(self.calls, ["demo.ready"])

    def test_header_names_are_case_insensitive(self):
        mixed_case = {
            "Webhook-Id": "msg_mixed",
            "Webhook-Timestamp": str(NOW),
            "Webhook-Signature": signature(SECRET, "msg_mixed", NOW),
        }
        self.assertEqual(receive(BODY, mixed_case, [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(self.calls, ["demo.ready"])

    def test_handler_failure_rolls_back_claim_for_retry(self):
        def fail(connection, event):
            connection.execute(
                "INSERT INTO business_events(event_type) VALUES (?)",
                (event["type"],),
            )
            raise RuntimeError("try again")
        self.assertEqual(receive(BODY, headers(), [SECRET], self.inbox, fail, NOW), 500)
        self.assertEqual(self.business_rows(), [])
        self.assertEqual(receive(BODY, headers(), [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(self.calls, ["demo.ready"])
        self.assertEqual(self.business_rows(), [("demo.ready",)])

    def test_timestamp_boundaries_are_fixed_at_verification(self):
        for offset, expected in [(-300, 204), (300, 204), (-301, 400), (301, 400)]:
            delivery_id = "msg_" + str(offset)
            self.assertEqual(
                receive(BODY, headers(delivery_id, NOW + offset), [SECRET], self.inbox, self.handler, NOW),
                expected,
            )

    def test_signatures_bind_headers_and_raw_body(self):
        valid = headers()
        bad_cases = [
            (BODY + b" ", valid),
            (BODY, {**valid, "webhook-id": "substituted"}),
            (BODY, {**valid, "webhook-timestamp": str(NOW + 1)}),
            (BODY, {**valid, "webhook-signature": "v1,bad"}),
        ]
        for body, candidate in bad_cases:
            self.assertEqual(receive(body, candidate, [SECRET], self.inbox, self.handler, NOW), 400)
        for required in ("webhook-id", "webhook-timestamp", "webhook-signature"):
            candidate = {**valid}
            candidate.pop(required)
            self.assertEqual(receive(BODY, candidate, [SECRET], self.inbox, self.handler, NOW), 400)
        self.assertEqual(receive(BODY, {**valid, "webhook-timestamp": "nope"}, [SECRET], self.inbox, self.handler, NOW), 400)
        self.assertEqual(receive(BODY, {**valid, "webhook-signature": "v1,é"}, [SECRET], self.inbox, self.handler, NOW), 400)
        scalar = b'"signed but not an event"'
        self.assertEqual(receive(scalar, headers("msg_scalar", NOW, SECRET, scalar), [SECRET], self.inbox, self.handler, NOW), 400)

    def test_rotation_and_retirement(self):
        old = headers("msg_old", NOW, OLD_SECRET)
        combined = {**old, "webhook-signature": old["webhook-signature"] + " " + signature(SECRET, "msg_old", NOW)}
        self.assertEqual(receive(BODY, combined, [OLD_SECRET, SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(receive(BODY, headers("msg_retired", NOW, OLD_SECRET), [SECRET], self.inbox, self.handler, NOW), 400)

    def test_secret_configuration_errors_remain_retryable(self):
        malformed = "not-base64!"
        self.assertEqual(receive(BODY, headers("msg_bad_config"), [malformed], self.inbox, self.handler, NOW), 500)
        self.assertEqual(receive(BODY, headers("msg_no_config"), [], self.inbox, self.handler, NOW), 500)
        self.assertEqual(receive(BODY, headers("msg_empty_key"), ["whsec_"], self.inbox, self.handler, NOW), 500)
        self.assertEqual(receive(BODY, headers("msg_no_prefix"), [SECRET.removeprefix("whsec_")], self.inbox, self.handler, NOW), 500)
        self.assertEqual(receive(BODY, headers("msg_mixed_config"), [malformed, SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(self.calls, ["demo.ready"])

    def test_distinct_delivery_ids_fan_out(self):
        self.assertEqual(receive(BODY, headers("msg_a"), [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(receive(BODY, headers("msg_b"), [SECRET], self.inbox, self.handler, NOW), 204)
        self.assertEqual(len(self.calls), 2)

    def test_concurrent_duplicate_claim_is_atomic(self):
        start = threading.Barrier(3)
        statuses = []
        def send():
            start.wait()
            statuses.append(receive(BODY, headers("msg_race"), [SECRET], self.inbox, self.handler, NOW))
        threads = [threading.Thread(target=send) for _ in range(2)]
        for thread in threads: thread.start()
        start.wait()
        for thread in threads: thread.join()
        self.assertEqual(sorted(statuses), [204, 204])
        self.assertEqual(self.calls, ["demo.ready"])

unittest.main()
`;

describe("published event receiver", () => {
  test("executes the verification and idempotency contract", () => {
    expect(receiver).toContain("def receive(");
    const version = spawnSync(
      "python3",
      ["-c", "import sys; assert sys.version_info >= (3, 10)"],
      { encoding: "utf8" }
    );
    expect(
      version.error?.message ?? "",
      "receiver contract requires python3"
    ).toBe("");
    expect(
      version.status,
      `receiver contract requires Python 3.10+: ${version.stderr ?? ""}`
    ).toBe(0);
    const result = spawnSync("python3", ["-c", `${receiver}\n${harness}`], {
      encoding: "utf8",
    });
    expect(result.error?.message ?? "", result.stderr ?? undefined).toBe("");
    expect(result.status, result.stderr || result.stdout).toBe(0);
  });
});
