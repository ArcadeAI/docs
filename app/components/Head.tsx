import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export const Head = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter, title: pageTitle } = useConfig();
  const url =
    "https://docs.arcade.dev" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  // TODO: make metadata depend on the project docs

  const description = frontMatter.description ?? "Arcade";
  // const title = frontMatter.title ?? "Arcade";

  const image = frontMatter.ogImage
    ? "https://docs.arcade.dev" + frontMatter.ogImage
    : "https://docs.arcade.dev/images/logo/arcade-logo.png";
  const video = frontMatter.ogVideo
    ? "https://docs.arcade.dev" + frontMatter.ogVideo
    : null;

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-title" content="Arcade Documentation" />
      <title>Arcade Docs</title>

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:url" content={url} />
      <meta httpEquiv="Content-Language" content="en" />
      <meta property="og:site_name" content="Arcade Docs" />
      <meta property="og:title" content={pageTitle} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      {video && <meta property="og:video" content={video} />}

      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="docs.arcade.dev" />
      <meta name="twitter:url" content="https://docs.arcade.dev" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* Early connection to reduce the time to fetch the script */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </>
  );
};
