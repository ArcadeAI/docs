import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "../styles/globals.css";
import * as React from "react";

function Docs({ Component, pageProps }) {
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

      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Docs;
