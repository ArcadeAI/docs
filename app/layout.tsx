import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arcade Docs",
    template: "%s | Arcade Docs",
  },
  description: "Arcade - AI platform for developers",
  metadataBase: new URL("https://docs.arcade.dev"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://docs.arcade.dev",
    siteName: "Arcade Docs",
    images: [
      {
        url: "/images/logo/arcade-logo.png",
        width: 1200,
        height: 630,
        alt: "Arcade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TryArcade",
    images: ["/images/logo/arcade-logo.png"],
  },
  appleWebApp: {
    title: "Arcade Documentation",
  },
  other: {
    "apple-mobile-web-app-title": "Arcade Documentation",
    "twitter:url": "https://docs.arcade.dev",
    "twitter:site:domain": "docs.arcade.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark">{children}</body>
    </html>
  );
}
