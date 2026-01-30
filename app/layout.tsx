import { getDictionary } from "@/_dictionaries/get-dictionary";
import { SignupLink } from "@/app/_components/analytics";
import CustomLayout from "@/app/_components/custom-layout";
import { getDashboardUrl } from "@/app/_components/dashboard-link";
import { Footer } from "@/app/_components/footer";
import { Logo } from "@/app/_components/logo";
import NavBarButton from "@/app/_components/nav-bar-button";
import { TranslationBanner } from "@/app/_components/translation-banner";
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
        url: "/images/logo/arcade_og-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Arcade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TryArcade",
    images: ["/images/logo/arcade_og-logo.jpg"],
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = "en";

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
        <meta content={lang} httpEquiv="Content-Language" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="dns-prefetch" />
      </Head>
      <body>
        {lang !== "en" && (
          <TranslationBanner dictionary={dictionary} locale={lang} />
        )}
        <Layout
          copyPageButton={true}
          docsRepositoryBase="https://github.com/ArcadeAI/docs/tree/main/"
          editLink={dictionary.editPage}
          feedback={{
            content: false,
          }}
          footer={
            <NextraFooter>
              <Footer />
            </NextraFooter>
          }
          i18n={[{ locale: "en", name: "English" }]}
          lastUpdated={<LastUpdated>{dictionary.lastUpdated}</LastUpdated>}
          navbar={
            <Navbar
              chatIcon={
                <Discord className="size-6 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
              }
              chatLink="https://discord.gg/GUZEMpEZ9p"
              logo={<Logo />}
              logoLink={"https://arcade.dev/"}
              projectIcon={
                <Github className="size-5.5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
              }
              projectLink="https://github.com/ArcadeAI/arcade-mcp"
            >
              <SignupLink linkLocation="docs:navbar">
                <NavBarButton
                  hideOnPath={[
                    "/guides/create-tools/add-tools-to-arcade-catalog",
                  ]}
                  text="Sign Up"
                />
              </SignupLink>
              <Link href={getDashboardUrl("playground/chat")}>
                <NavBarButton text="Dashboard" variant="outline" />
              </Link>
            </Navbar>
          }
          nextThemes={{ defaultTheme: "dark" }}
          pageMap={pageMap}
          sidebar={{
            defaultMenuCollapseLevel: 2,
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
          <GoogleTagManager gtmId="GTM-TVS58H5F" />
          <Script
            src="https://status.arcade.dev/embed/script.js"
            strategy="afterInteractive"
          />
          <CustomLayout>{children}</CustomLayout>
        </Layout>
      </body>
    </html>
  );
}
