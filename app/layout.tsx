import { Footer as NextraFooter, Layout, Navbar } from "nextra-theme-docs";
import { Footer } from "@components/Footer";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";

import { Logo } from "@components/Logo";
// Required for theme styles, previously was imported under the hood
import "nextra-theme-docs/style.css";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { SignupLink } from "@/components/Analytics";
import NavBarButton from "@/components/NavBarButton";
import Link from "next/link";
import CustomLayout from "@/components/CustomLayout";

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

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink="https://github.com/ArcadeAI/arcade-ai"
    projectIcon={<SiGithub />}
    logoLink="https://www.arcade.dev/"
    chatLink="https://discord.gg/GUZEMpEZ9p"
    chatIcon={<SiDiscord />}
  >
    <>
      <SignupLink linkLocation="docs:navbar">
        <NavBarButton
          hideOnPath={["/home/registry-early-access"]}
          text="Sign Up"
        />
      </SignupLink>
      <Link href="https://api.arcade.dev/dashboard/playground/chat">
        <NavBarButton text="Dashboard" variant="outline" />
      </Link>
    </>
  </Navbar>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
        backgroundColor={{
          dark: "rgb(15, 23, 42)",
          light: "rgb(254, 252, 232)",
        }}
        color={{
          hue: { dark: 335, light: 335 },
        }}
      >
        {/* Performance optimizations for external resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/ArcadeAI/arcade-ai"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          toc={{ backToTop: "Scroll to top" }}
          footer={
            <NextraFooter>
              <Footer />
            </NextraFooter>
          }
          // ...Your additional theme config options
        >
          <CustomLayout>{children}</CustomLayout>
        </Layout>
      </body>
    </html>
  );
}
