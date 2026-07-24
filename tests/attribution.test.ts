import {
  buildAttributionCookie,
  extractAttribution,
  SIGNUP_ATTRIBUTION_COOKIE,
} from "@arcadeai/ui-kit/utils/attribution";
import { describe, expect, test } from "vitest";

describe("extractAttribution", () => {
  test("captures known params and referrer origin", () => {
    const params = new URLSearchParams("utm_source=google&gclid=abc&foo=bar");
    expect(
      extractAttribution(params, "https://arcade.dev/blog/post?x=1")
    ).toEqual({
      attribution_utm_source: "google",
      attribution_gclid: "abc",
      attribution_referrer: "https://arcade.dev",
    });
  });

  test("returns null when no known params are present", () => {
    expect(extractAttribution(new URLSearchParams("foo=bar"), null)).toBeNull();
  });

  test("omits referrer when unparseable", () => {
    const result = extractAttribution(
      new URLSearchParams("utm_medium=cpc"),
      "not a url"
    );
    expect(result).toEqual({ attribution_utm_medium: "cpc" });
  });
});

describe("buildAttributionCookie", () => {
  test("serializes a shared-domain cookie identity-ui can read back", () => {
    const cookie = buildAttributionCookie(
      { attribution_utm_source: "google" },
      { domain: ".arcade.dev", maxAgeDays: 30 }
    );
    expect(cookie).toContain(`${SIGNUP_ATTRIBUTION_COOKIE}=`);
    expect(cookie).toContain("Domain=.arcade.dev;");
    expect(cookie).toContain("Path=/;");
    expect(cookie).toContain("SameSite=Lax");
    expect(cookie).toContain("Secure");
    // Round-trips the same shape ui-kit's parseAttributionCookie expects.
    const value = cookie.slice(
      `${SIGNUP_ATTRIBUTION_COOKIE}=`.length,
      cookie.indexOf(";")
    );
    expect(JSON.parse(decodeURIComponent(value))).toEqual({
      attribution_utm_source: "google",
    });
  });

  test("omits the Domain attribute for host-only cookies", () => {
    const cookie = buildAttributionCookie(
      { attribution_gclid: "x" },
      { maxAgeDays: 30 }
    );
    expect(cookie).not.toContain("Domain=");
  });
});
