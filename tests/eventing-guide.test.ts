import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { meta } from "../app/en/build/_meta";

const PAGE = "app/en/build/eventing/page.mdx";
const TITLE_RE = /title:\s*"Build event-driven integrations"/;
const MODEL_SECTION_RE =
  /## The eventing model([\s\S]*?)## Choose your deployment origin/;
const MODEL_ROW_RE =
  /^\| (Arcade event|Trigger type|Trigger instance|Schedule|Provider ingress|Webhook subscription|Webhook delivery) \|/gm;
const TIMESTAMP_TOLERANCE_RE = /through (\d+) seconds/;
const TIMESTAMP_REJECTION_RE = /timestamps (\d+) seconds away/;
const TOLERANCE_CONSTANT_RE = /TOLERANCE_SECONDS = (\d+)/;

const page = readFileSync(join(process.cwd(), PAGE), "utf8");

describe("unified eventing guide", () => {
  test("registers the eventing content directory in Build navigation", () => {
    const contentDirectories = readdirSync(
      join(process.cwd(), "app/en/build"),
      { withFileTypes: true }
    )
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
    expect(contentDirectories).toContain("eventing");
    expect(meta.eventing).toEqual({
      title: "Events and webhooks",
    });
    expect(page).toMatch(TITLE_RE);
  });

  test("defines the exact seven-term source-to-destination model", () => {
    const model = page.match(MODEL_SECTION_RE)?.[1] ?? "";
    const rows = [
      "| Arcade event | Store | Trigger instance, schedule, or provider ingress | Project history |",
      "| Trigger type | Configure | Toolkit declaration | Trigger instance |",
      "| Trigger instance | Produce | Connected-account observation | Arcade event |",
      "| Schedule | Produce | Time rule | Arcade event |",
      "| Provider ingress | Produce | Verified provider callback | Arcade event |",
      "| Webhook subscription | Route | Matching Arcade event | Webhook delivery |",
      "| Webhook delivery | Deliver | Webhook subscription | Configured receiver |",
    ];
    for (const row of rows) {
      expect(model).toContain(row);
    }
    expect(model.match(MODEL_ROW_RE)).toHaveLength(7);
  });

  test("keeps examples on Dashboard and scoped REST surfaces", () => {
    expect(page).toContain("## Try a scheduled event");
    expect(page).toContain("## Try a filtered Gmail trigger");
    expect(page).toContain('Tabs items={["Dashboard", "REST API"]}');
    expect(page).toContain("Authorization: Bearer $ARCADE_API_KEY");
    expect(page).toContain(
      "/v1/orgs/$ARCADE_ORG_ID/projects/$ARCADE_PROJECT_ID"
    );
    for (const variable of [
      "WEBHOOK_ID",
      "SCHEDULE_ID",
      "TRIGGER_ID",
      "EVENT_ID",
    ]) {
      expect(page).toContain(`export ${variable}=`);
    }
    expect(page).toContain("poll for up to 120 seconds");
  });

  test("pins origins, tenant isolation, and the reference boundary", () => {
    for (const value of [
      "https://api.arcade.dev",
      "https://app.arcade.dev",
      "$ARCADE_ENGINE_URL/dashboard",
      "http://localhost:9099",
      "http://localhost:9099/dashboard",
    ]) {
      expect(page).toContain(value);
    }
    expect(page).toContain("[Arcade API reference](/references/api)");
  });

  test("documents the supported lifecycle without hiding retained events", () => {
    for (const route of [
      "GET /triggers/{trigger_id}",
      "PATCH /triggers/{trigger_id}",
      "DELETE /triggers/{trigger_id}",
      "GET /schedules/{schedule_id}",
      "PATCH /schedules/{schedule_id}",
      "DELETE /schedules/{schedule_id}",
      "GET /events/{event_id}",
      "POST /webhooks/{webhook_id}/rotate_secret",
      "POST /webhooks/{webhook_id}/recover_deliveries",
      "POST /webhooks/{webhook_id}/replay_missing",
      "POST /webhooks/{webhook_id}/deliveries/{delivery_id}/retry",
    ]) {
      expect(page).toContain(route);
    }
  });

  test("states only reviewed delivery guarantees and resource boundaries", () => {
    for (const claim of [
      "at-least-once",
      "8 attempts",
      "27 hours, 35 minutes, and 5 seconds",
      "90 days",
      "webhook-id",
      "fresh `webhook-timestamp`",
      "300 seconds",
      "301 seconds",
      "one Arcade event per scheduled fire",
    ]) {
      expect(page).toContain(claim);
    }
    const tolerance = Number(page.match(TIMESTAMP_TOLERANCE_RE)?.[1]);
    const rejection = Number(page.match(TIMESTAMP_REJECTION_RE)?.[1]);
    const receiverTolerance = Number(page.match(TOLERANCE_CONSTANT_RE)?.[1]);
    expect(receiverTolerance).toBe(tolerance);
    expect(rejection).toBe(tolerance + 1);
  });
});
