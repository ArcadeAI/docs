import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const guide = readFileSync(
  "app/en/build/tool-calling/background-executions/page.mdx",
  "utf8"
);
const normalizedGuide = guide.replace(/\s+/g, " ");

describe("MCP Tasks guide", () => {
  test.each([
    ["hosted asynchronous policy", "Arcade-hosted tools"],
    ["native result", '"resultType": "task"'],
    ["compatibility result", '"type": "arcade.execution/v1"'],
    ["native get", "tasks/get"],
    ["native update", "tasks/update"],
    ["native cancel", "tasks/cancel"],
    ["REST start", "Idempotency-Key"],
    ["REST lifecycle", "/tool-executions/{execution_id}/result"],
    ["execution deadline", "execution_deadline"],
    ["retention deadline", "retention_expires_at"],
    [
      "webhook signature",
      "{webhook-id}.{webhook-timestamp}.{exact-request-body}",
    ],
    ["webhook freshness", "freshness window"],
    ["webhook reconciliation", "durable state as truth"],
    ["terminal failures", "owner_lost_after_invocation"],
    ["operator recovery", "Permissioned operator status"],
  ])("documents %s", (_topic, evidence) => {
    expect(normalizedGuide).toContain(evidence);
  });

  test.each([
    "external tenants",
    "self-hosted Arcade Engine deployments",
    "local deployments",
    "milestone M3 features",
  ])("keeps %s visibly gated", (boundary) => {
    expect(normalizedGuide).toContain(boundary);
  });
});
