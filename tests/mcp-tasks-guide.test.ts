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
    ["native feature flag", "native_mcp_tasks"],
    ["compatibility feature flag", "mcp_tasks_compatibility"],
    ["admission bounds", "mcp_tasks_principal_concurrency"],
    ["operator status route", "/operator/tool-executions"],
    ["owner-loss deadline", "owner_loss_detection_at"],
    ["unknown stop delivery", "stop_delivery_unknown"],
    ["saturation retry guidance", "Retry-After"],
    ["Inspector substitute", "rmcp 3.3.0"],
    [
      "canonical capability metadata",
      "io.modelcontextprotocol/clientCapabilities",
    ],
  ])("documents %s", (_topic, evidence) => {
    expect(normalizedGuide).toContain(evidence);
  });

  test.each(["external tenants", "Arcade Cloud"])(
    "keeps %s visibly gated",
    (boundary) => {
      expect(normalizedGuide).toContain(boundary);
    }
  );

  test.each(["customer-managed", "local deployments"])(
    "documents opt-in availability for %s",
    (mode) => {
      expect(normalizedGuide).toContain(mode);
    }
  );
});
