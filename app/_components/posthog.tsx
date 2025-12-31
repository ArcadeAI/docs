/** biome-ignore-all lint/style/useNamingConvention: This is ok for PostHog */
"use client";

import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export const PostHog = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        ui_host:
          process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || "https://us.posthog.com",
        disable_session_recording: true,
        // Enable heatmaps for click tracking
        enable_heatmaps: true,
        // Enable surveys for CSAT
        disable_surveys: false,
        loaded: (posthogInstance) => {
          if (
            process.env.NODE_ENV === "development" ||
            process.env.NEXT_PUBLIC_POSTHOG_DEBUG
          ) {
            posthogInstance.debug();
          }
        },
      });
    } else {
      // biome-ignore lint/suspicious/noConsole: This is ok for PostHog
      console.warn("Analytics is disabled because no key is set");
    }
  }, []);

  // Track page views when pathname changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is required for route change tracking
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog?.capture("$pageview");
    }
  }, [pathname]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};
