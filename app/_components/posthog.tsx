/** biome-ignore-all lint/style/useNamingConvention: This is ok for PostHog */
"use client";

import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

function createNoopPosthogClient() {
  return {
    // biome-ignore lint/suspicious/noEmptyBlockStatements: Intentional no-op for disabled analytics
    capture: () => {},
    // biome-ignore lint/suspicious/noEmptyBlockStatements: Intentional no-op for disabled analytics
    identify: () => {},
    // biome-ignore lint/suspicious/noEmptyBlockStatements: Intentional no-op for disabled analytics
    reset: () => {},
    // biome-ignore lint/suspicious/noExplicitAny: Minimal no-op client for disabled analytics
  } as any;
}

export const PostHog = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);

  useEffect(() => {
    if (isEnabled && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
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
      // No key: keep analytics fully disabled and avoid noisy console errors.
    }
  }, [isEnabled]);

  // Track page views when pathname changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is required for route change tracking
  useEffect(() => {
    if (isEnabled) {
      posthog?.capture("$pageview");
    }
  }, [pathname, isEnabled]);

  return (
    <PostHogProvider client={isEnabled ? posthog : createNoopPosthogClient()}>
      {children}
    </PostHogProvider>
  );
};
