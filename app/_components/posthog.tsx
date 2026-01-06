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
        // Enable session recording for user behavior analysis
        disable_session_recording: false,
        session_recording: {
          maskAllInputs: true, // Privacy: mask sensitive input fields
          blockClass: "ph-no-capture", // Allow opting out specific elements
          recordCrossOriginIframes: false, // Don't record third-party iframes
        },
        // Enable heatmaps for click tracking
        enable_heatmaps: true,
        // Enable surveys for CSAT feedback
        disable_surveys: false,
        loaded: (posthogInstance) => {
          if (process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true") {
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
