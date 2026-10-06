import "./global.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type React from "react";
import CustomLayout from "@/components/custom-layout";
import { AppRootProvider } from "@/components/root-provider";

export const metadata: Metadata = {
  appleWebApp: {
    title: "Arcade Documentation",
  },
  description:
    "Arcade is the enterprise-ready actions runtime for AI agents — enforce your security policies on every action, execute reliably across any system, and govern agents centrally in production.",
  icons: {
    apple: { sizes: "180x180", url: "/apple-touch-icon.png" },
    icon: [
      { sizes: "16x16", type: "image/png", url: "/favicon-16x16.png" },
      { sizes: "32x32", type: "image/png", url: "/favicon-32x32.png" },
      { url: "/favicon.ico" },
    ],
    other: [
      { color: "#5bbad5", rel: "mask-icon", url: "/safari-pinned-tab.svg" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://docs.arcade.dev"),
  openGraph: {
    images: [
      {
        alt: "Arcade",
        height: 630,
        url: "/images/logo/arcade_og-logo.jpg",
        width: 1200,
      },
    ],
    siteName: "Arcade Docs",
    type: "website",
    url: "https://docs.arcade.dev",
  },
  other: {
    "apple-mobile-web-app-title": "Arcade Documentation",
    "twitter:site:domain": "docs.arcade.dev",
    "twitter:url": "https://docs.arcade.dev",
  },
  title: {
    default: "Arcade Docs",
    template: "%s | Arcade Docs",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo/arcade_og-logo.jpg"],
    site: "@TryArcade",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: [
    { color: "#ffffff", media: "(prefers-color-scheme: light)" },
    { color: "#0a0a0a", media: "(prefers-color-scheme: dark)" },
  ],
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Docs are English-only. proxy.ts redirects legacy /es and /pt-BR URLs to /en.
  const lang = "en";

  return (
    <html
      data-scroll-behavior="smooth"
      dir="ltr"
      lang={lang}
      suppressHydrationWarning
    >
      <head>
        <meta content={lang} httpEquiv="Content-Language" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="dns-prefetch" />
      </head>
      <body className="flex min-h-screen flex-col">
        {/*
          swagger-ui-react bundles zenscroll, which installs a document-wide
          click handler as soon as its module is evaluated. That handler
          intercepts every in-page anchor click, computes the destination as
          "element top minus a 10px edge offset", and animates there with
          window.scrollTo. CSS scroll-padding-top never enters the
          calculation, so headings land under the sticky navbar. Standing
          zenscroll's automatic anchor handling down hands anchor scrolling
          back to the browser, which does honor scroll-padding-top. The
          zenscroll methods swagger-ui calls itself keep working.
        */}
        <Script id="disable-zenscroll-anchors" strategy="beforeInteractive">
          {"window.noZensmooth = true;"}
        </Script>
        <AppRootProvider>
          <GoogleTagManager gtmId="GTM-TVS58H5F" />
          <Script
            src="https://status.arcade.dev/embed/script.js"
            strategy="afterInteractive"
          />
          <CustomLayout>{children}</CustomLayout>
        </AppRootProvider>
      </body>
    </html>
  );
}
