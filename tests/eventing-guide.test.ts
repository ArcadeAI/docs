import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { meta } from "../app/en/build/_meta";

const PAGE = "app/en/build/eventing/page.mdx";
const TITLE_RE = /title:\s*"Build event-driven integrations"/;
const MODEL_SECTION_RE =
  /## The eventing model([\s\S]*?)## Choose your deployment origin/;
const TABLE_DATA_ROW_RE = /^\| (?!Term \|)(?!-)[^|]+\|/gm;
const TIMESTAMP_TOLERANCE_RE = /through (\d+) seconds/;
const TIMESTAMP_REJECTION_RE = /timestamps (\d+) seconds away/;
const TOLERANCE_CONSTANT_RE = /TOLERANCE_SECONDS = (\d+)/;
const RETRY_DELAYS_RE =
  /Arcade makes 8 attempts: immediately, then after ([^.]+)\. The configured delay/;
const RETRY_TOTAL_RE = /totals (\d+) hours, (\d+) minutes, and (\d+) seconds/;
const RETRY_DELAY_SEPARATOR_RE = /,\s*(?:and\s+)?/;
const RETRY_DELAY_RE = /(\d+) (second|minute|hour)s?/;
const RETENTION_WINDOW_RE =
  /Keep each recorded `webhook-id` for at least Arcade's configured event-retention period \(90 days by default\)/;
const STABLE_WEBHOOK_ID_RE =
  /same `webhook-id` across automatic retries, manual retry, and recovery/;

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
    expect(model.match(TABLE_DATA_ROW_RE)).toHaveLength(7);
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
    const tolerance = Number(page.match(TIMESTAMP_TOLERANCE_RE)?.[1]);
    const rejection = Number(page.match(TIMESTAMP_REJECTION_RE)?.[1]);
    const receiverTolerance = Number(page.match(TOLERANCE_CONSTANT_RE)?.[1]);
    expect(Number.isInteger(tolerance)).toBe(true);
    expect(Number.isInteger(rejection)).toBe(true);
    expect(Number.isInteger(receiverTolerance)).toBe(true);
    expect(receiverTolerance).toBe(tolerance);
    expect(rejection).toBe(tolerance + 1);

    const unitSeconds = { second: 1, minute: 60, hour: 3600 };
    const delays = page
      .match(RETRY_DELAYS_RE)?.[1]
      .split(RETRY_DELAY_SEPARATOR_RE)
      .map((delay) => {
        const [, amount, unit] = delay.match(RETRY_DELAY_RE) ?? [];
        return Number(amount) * unitSeconds[unit as keyof typeof unitSeconds];
      });
    expect(delays).toHaveLength(7);
    const [, hours, minutes, seconds] = page.match(RETRY_TOTAL_RE) ?? [];
    const statedTotal =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    expect(delays?.reduce((total, delay) => total + delay, 0)).toBe(
      statedTotal
    );
  });

  test("keeps deduplication through the manual recovery window", () => {
    expect(page).toMatch(RETENTION_WINDOW_RE);
    expect(page).toMatch(STABLE_WEBHOOK_ID_RE);
  });
});
