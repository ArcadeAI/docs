import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Layout, Navbar, Footer as NextraFooter } from 'nextra-theme-docs';
import { Footer } from '@/components/footer';
import { Logo } from '@/components/logo';
import './globals.css';
import { SiDiscord, SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { SignupLink } from '@/components/analytics';
import CustomLayout from '@/components/custom-layout';
import NavBarButton from '@/components/nav-bar-button';

export const metadata = {
  title: {
    default: 'Arcade Docs',
    template: '%s | Arcade Docs',
  },
  description: 'Arcade - AI platform for developers',
  metadataBase: new URL('https://docs.arcade.dev'),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://docs.arcade.dev',
    siteName: 'Arcade Docs',
    images: [
      {
        url: '/images/logo/arcade-logo.png',
        width: 1200,
        height: 630,
        alt: 'Arcade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TryArcade',
    images: ['/images/logo/arcade-logo.png'],
  },
  appleWebApp: {
    title: 'Arcade Documentation',
  },
  other: {
    'apple-mobile-web-app-title': 'Arcade Documentation',
    'twitter:url': 'https://docs.arcade.dev',
    'twitter:site:domain': 'docs.arcade.dev',
  },
};

const navbar = (
  <Navbar
    chatIcon={<SiDiscord />}
    chatLink="https://discord.gg/GUZEMpEZ9p"
    logo={<Logo />}
    logoLink="https://www.arcade.dev/"
    projectIcon={<SiGithub />}
    projectLink="https://github.com/ArcadeAI/arcade-ai"
  >
    <SignupLink linkLocation="docs:navbar">
      <NavBarButton
        hideOnPath={['/home/registry-early-access']}
        text="Sign Up"
      />
    </SignupLink>
    <Link href="https://api.arcade.dev/dashboard/playground/chat">
      <NavBarButton text="Dashboard" variant="outline" />
    </Link>
  </Navbar>
);

export default async function RootLayout({ children }) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',
          light: 'rgb(254, 252, 232)',
        }}
        color={{
          hue: { dark: 335, light: 335 },
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
          docsRepositoryBase="https://github.com/ArcadeAI/arcade-ai"
          editLink="Edit this page on GitHub"
          footer={
            <NextraFooter>
              <Footer />
            </NextraFooter>
          }
          navbar={navbar}
          pageMap={await getPageMap()}
        >
          <CustomLayout>{children}</CustomLayout>
        </Layout>
      </body>
    </html>
  );
}
