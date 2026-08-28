import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";
import { meta } from "../app/en/build/_meta";

const PAGE = "app/en/build/eventing/page.mdx";
const TITLE_RE = /title:\s*"Build event-driven integrations"/;
const MODEL_SECTION_RE =
  /## The eventing model([\s\S]*?)## Choose your deployment origin/;
const TABLE_DATA_ROW_RE = /^\| (?!Term \|)(?!-)[^|]+\|/gm;
const ACCOUNT_LIFECYCLE_SECTION_RE =
  /## Recover expired connected accounts([\s\S]*?)## Try a scheduled event/;
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
    expect(page).toContain("## Connect a customer-owned realtime provider");
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
      "AUTH_PROVIDER_ID",
    ]) {
      expect(page).toContain(`export ${variable}=`);
    }
  });

  test("documents provider ingress setup, proof, recovery, and boundaries", () => {
    for (const value of [
      "slack.message.received",
      "github.push.received",
      '"preserve_signing_secret":true',
      "current_secret_verified",
      "last_verified_at",
      "public_host_required",
      "request-rate and byte-rate limits",
      "seven days",
      "5 MiB",
    ]) {
      expect(page).toContain(value);
    }
    expect(page).toContain("$SCOPE/auth_providers/$AUTH_PROVIDER_ID/ingress");
    expect(page).toContain("It is not the OAuth redirect URI");
    expect(page).toContain("acknowledges and drops deliveries");
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

  test("documents the complete connected-account recovery contract", () => {
    const section = page.match(ACCOUNT_LIFECYCLE_SECTION_RE)?.[1] ?? "";
    for (const value of [
      "connected_account.created",
      "connected_account.expired",
      "connected_account.reconnected",
      '"event_types":["connected_account.expired"]',
      '"type": "connected_account.expired"',
      '"timestamp":',
      '"data":',
      "organization_id",
      "project_id",
      "user_id",
      "provider_id",
      "connection_id",
      "status",
      "reason",
      "no_refresh_token",
      "refresh_failed",
      "POST /v1/orgs/{org_id}/projects/{project_id}/auth/authorize",
      "MCP-managed OAuth",
    ]) {
      expect(section).toContain(value);
    }
    expect(section).toContain("**Reconnect**");
    expect(section).toContain("public subscription API is project-scoped");
    expect(section).toContain("organization-bound lifecycle events omit");
    expect(section).toContain("verify the Standard Webhooks signature");
    expect(section).toContain("reduced grant");
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
