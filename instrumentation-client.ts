import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
  defaults: "2025-11-30",
  enable_heatmaps: true,
  loaded: (posthogInstance) => {
    if (process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true") {
      posthogInstance.debug();
    }
  },
  // Allow AI agent traffic to be captured (default filters out bots)
  opt_out_useragent_filter: true,
  session_recording: {
    blockClass: "ph-no-capture",
    maskAllInputs: true,
    recordCrossOriginIframes: false,
  },
  ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || "https://us.posthog.com",
});
