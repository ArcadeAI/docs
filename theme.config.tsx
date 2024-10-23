import ToggleContent from "@/components/ToggleContent";
import CustomLayout from "@components/CustomLayout";
import { Footer } from "@components/Footer";
import { Hero } from "@components/Hero";
import Discord from "@components/icons/discord";
import { Logo } from "@components/Logo";
import { SEO } from "@components/SEO";
import { titleRenderer } from "@components/TopNav";
import GitHub from "@geist-ui/react-icons/github";
import { Check, Important, Info, Note, Tip, Warning } from "@markdown/Callouts";
import { Card, Cards } from "@markdown/Cards";
import { DarkOnly } from "@markdown/ThemeContent";
import {
  DocsThemeConfig,
  Card as NavCard,
  Cards as NavCards,
  Steps,
} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: { dark: 335, light: 335 }, // Hue for #ED155D
  logo: <Logo />,
  darkMode: true,
  themeSwitch: {
    component: () => null,
  },
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
  search: {
    placeholder: "Search...",
  },
  chat: {
    link: "https://discord.gg/GUZEMpEZ9p",
    icon: <Discord />,
  },
  docsRepositoryBase: "https://github.com/ArcadeAI/docs",
  editLink: {
    component: () => null, // Provide a no-op component to disable the edit link
  },
  project: {
    link: "https://github.com/ArcadeAI/arcade-ai",
    icon: <GitHub />,
  },
  sidebar: {
    toggleButton: true,
    titleComponent: titleRenderer,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  footer: {
    text: <Footer />,
  },
  toc: {
    backToTop: true,
  },
  components: {
    Hero,
    Card,
    Cards,
    NavCard,
    NavCards,
    DarkOnly,
    Steps,
    Info,
    Warning,
    Note,
    Tip,
    Important,
    Check,
    ToggleContent,
  },
  useNextSeoProps: SEO,
  main: ({ children }) => <CustomLayout>{children}</CustomLayout>,
};

export default config;
