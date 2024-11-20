import ToggleContent from "@/components/ToggleContent";
import CustomLayout from "@components/CustomLayout";
import { Footer } from "@components/Footer";
import { Head } from "@components/Head";
import { Hero } from "@components/Hero";
import Discord from "@components/icons/discord";
import { Logo } from "@components/Logo";
import { SEO } from "@components/SEO";
import { SignUpButton } from "@/components/SignUpButton";
import { titleRenderer } from "@components/TopNav";
import GitHub from "@geist-ui/react-icons/github";
import { Check, Important, Info, Note, Tip, Warning } from "@markdown/Callouts";
import { Card, Cards } from "@markdown/Cards";
import { DarkOnly, LightOnly } from "@markdown/ThemeContent";
import {
  DocsThemeConfig,
  Card as NavCard,
  Cards as NavCards,
  Steps,
} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  primaryHue: { dark: 335, light: 335 }, // Hue for #ED155D
  logo: <Logo />,
  themeSwitch: {
    component: () => null,
  },
  search: {
    placeholder: "Search...",
  },
  chat: {
    link: "https://discord.gg/GUZEMpEZ9p",
    icon: <Discord />,
  },
  docsRepositoryBase: "https://github.com/ArcadeAI/arcade-ai",
  editLink: {
    component: () => null, // Provide a no-op component to disable the edit link
  },
  project: {
    link: "https://github.com/ArcadeAI/arcade-ai",
    icon: <GitHub />,
  },
  navbar: {
    extraContent: <SignUpButton />,
  },
  sidebar: {
    toggleButton: true,
    titleComponent: titleRenderer,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  head: Head,
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
    LightOnly,
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
