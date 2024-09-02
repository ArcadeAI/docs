import CustomLayout from "@components/CustomLayout";
import { Footer } from "@components/Footer";
import { Logo } from "@components/Logo";
import { SEO } from "@components/SEO";
import { titleRenderer } from "@components/TopNav";
import GitHub from '@geist-ui/react-icons/github';
import { Check, Important, Info, Note, Tip, Warning } from "@markdown/Callouts";
import { Card, Cards } from "@markdown/Cards";
import { DarkOnly, LightOnly } from "@markdown/ThemeContent";
import { DocsThemeConfig, Card as NavCard, Cards as NavCards, Steps } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  primaryHue: { dark: 340, light: 340 }, // Hue for #ED155D
  primarySaturation: { dark: 85, light: 85 },
  logo: <Logo />,
  search: {
    placeholder: 'Search...',
  },
  chat: {
    link: 'https://discord.gg/',
    icon: '', // Placeholder for chat icon
  },
  docsRepositoryBase: "https://github.com/ArcadeAI/docs",
  editLink: {
    text: "Edit this page on GitHub",
  },
  project: {
    link: 'https://github.com/ArcadeAI/',
    icon: <GitHub />,
  },
  sidebar: {
    toggleButton: true,
    titleComponent: titleRenderer,
  },
  footer: {
    text: <Footer />,
  },
  toc: {
    backToTop: true,
  },
  components: {
    Card,
    Cards,
    NavCard,
    NavCards,
    LightOnly,
    DarkOnly,
    Steps,
    Info,
    Warning,
    Note,
    Tip,
    Important,
    Check,
  },
  useNextSeoProps: SEO,
  main: ({ children }) => <CustomLayout>{children}</CustomLayout>,
};

export default config;
