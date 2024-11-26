import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function Docs({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Docs;
