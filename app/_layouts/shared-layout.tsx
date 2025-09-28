import { getDictionary } from "@/_dictionaries/get-dictionary";
import { SignupLink } from "@/app/_components/analytics";
import CustomLayout from "@/app/_components/custom-layout";
import { Footer } from "@/app/_components/footer";
import { Logo } from "@/app/_components/logo";
import NavBarButton from "@/app/_components/nav-bar-button";
import "@/app/globals.css";
import { Discord, Github } from "@arcadeai/design-system";
import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";
import Script from "next/script";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import {
  LastUpdated,
  Layout,
  Navbar,
  Footer as NextraFooter,
} from "nextra-theme-docs";
import { PostHog } from "../_components/posthog";

export const metadata = {
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

type SharedLayoutProps = {
  children: React.ReactNode;
  lang: string;
};

export default async function SharedLayout({
  children,
  lang,
}: SharedLayoutProps) {
  const dictionary = await getDictionary(lang);
  const pageMap = await getPageMap(`/${lang}`);

  return (
    <html dir="ltr" lang={lang} suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: "#0a0a0a",
          light: "#ffffff",
        }}
        color={{
          hue: 347,
          saturation: 100,
          lightness: 50,
        }}
      >
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* Performance optimizations for external resources */}
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="dns-prefetch" />
      </Head>
      <body>
        <Layout
          copyPageButton={false}
          docsRepositoryBase="https://github.com/ArcadeAI/docs"
          editLink={dictionary.editPage}
          footer={
            <NextraFooter>
              <Footer />
            </NextraFooter>
          }
          i18n={[
            { locale: "en", name: "English" },
            // { locale: "es", name: "Español" },
            // { locale: "pt-BR", name: "Português" },
          ]}
          lastUpdated={<LastUpdated>{dictionary.lastUpdated}</LastUpdated>}
          navbar={
            <Navbar
              chatIcon={
                <Discord className="size-6 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
              }
              chatLink="https://discord.gg/GUZEMpEZ9p"
              logo={<Logo />}
              logoLink={`/${lang}/home`}
              projectIcon={
                <Github className="size-5.5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
              }
              projectLink="https://github.com/ArcadeAI/docs"
            >
              <SignupLink linkLocation="docs:navbar">
                <NavBarButton
                  hideOnPath={["/home/registry-early-access"]}
                  text="Sign Up"
                />
              </SignupLink>
              <Link href="https://api.arcade.dev/dashboard/playground/chat">
                <NavBarButton text="Dashboard" variant="outline" />
              </Link>
            </Navbar>
          }
          nextThemes={{ defaultTheme: "dark" }}
          pageMap={pageMap}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          themeSwitch={{
            dark: dictionary.dark,
            light: dictionary.light,
            system: dictionary.system,
          }}
          toc={{
            backToTop: dictionary.toc.backToTop,
            title: dictionary.toc.title,
          }}
        >
          {/* Google tag (gtag.js) */}
          <GoogleTagManager gtmId="GTM-TVS58H5F" />

          {/* Statuspage.io embed */}
          <Script
            src="https://status.arcade.dev/embed/script.js"
            strategy="afterInteractive"
          />
          <PostHog>
            <CustomLayout>{children}</CustomLayout>
          </PostHog>
        </Layout>
      </body>
    </html>
  );
}
