"use client";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Script from "next/script";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import "../styles/globals.css";

function Docs({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        ui_host:
          process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || "https://us.posthog.com",
        disable_session_recording: true,
        loaded: (posthog) => {
          if (
            process.env.NODE_ENV === "development" ||
            process.env.NEXT_PUBLIC_POSTHOG_DEBUG
          )
            posthog.debug();
        },
      });

      const handleRouteChangeComplete = () => posthog?.capture("$pageview");

      const handleRouteChangeStart = () => posthog?.capture("$pageleave");

      router.events.on("routeChangeComplete", handleRouteChangeComplete);
      router.events.on("routeChangeStart", handleRouteChangeStart);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChangeComplete);
        router.events.off("routeChangeStart", handleRouteChangeStart);
      };
    } else {
      console.warn("Analytics is disabled because no key is set");
    }
  }, [router.events]);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-29HSQ3LQ13"
        strategy="afterInteractive"
      />

      {/* Initialize Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-29HSQ3LQ13');
      `}
      </Script>

      {/* Statuspage.io embed */}
      <Script
        src="https://status.arcade.dev/embed/script.js"
        strategy="afterInteractive"
      />

      {/* PostHog */}
      <PostHogProvider client={posthog}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </PostHogProvider>
    </>
  );
}

export default Docs;
