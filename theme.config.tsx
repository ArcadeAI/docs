import { NavBarButton } from "@/components/NavBarButton";
import ToggleContent from "@/components/ToggleContent";
import CustomLayout from "@components/CustomLayout";
import { Footer } from "@components/Footer";
import { Head } from "@components/Head";
import { Hero } from "@components/Hero";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Logo } from "@components/Logo";
import { Check, Important, Info, Note, Tip, Warning } from "@markdown/Callouts";
import { Card, Cards } from "@markdown/Cards";
import { DarkOnly, LightOnly } from "@markdown/ThemeContent";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Button, Cards as NavCards, Steps } from "nextra/components";
import { SignupLink } from "@/components/Analytics";
import Link from "next/link";

const config: DocsThemeConfig = {
  color: { hue: { dark: 335, light: 335 } }, // Hue for #ED155D
  logo: <Logo />,
  logoLink: "https://www.arcade.dev/",
  themeSwitch: {
    component: () => null,
  },
  search: {
    placeholder: "Search...",
  },
  chat: {
    link: "https://discord.gg/GUZEMpEZ9p",
    icon: <SiDiscord />,
  },
  docsRepositoryBase: "https://github.com/ArcadeAI/arcade-ai",
  gitTimestamp: null,
  editLink: {
    content: null, // TODO: add edit link when our repo is public
  },
  project: {
    link: "https://github.com/ArcadeAI/arcade-ai",
    icon: <SiGithub />,
  },
  navbar: {
    extraContent: (
      <>
        <SignupLink
          utmParams={{
            utm_source: "docs",
            utm_medium: "navbar",
            utm_campaign: "signup",
          }}
          linkLocation="docs:navbar"
        >
          <NavBarButton
            text="Sign Up"
          />
        </SignupLink>
        <Link
          href="https://api.arcade.dev/dashboard/playground/chat?utm_source=docs&utm_medium=navbar&utm_campaign=dashboard"
        >
          <NavBarButton
            text="Dashboard"
            variant="outline"
          />
        </Link>
      </>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  head: Head,
  footer: {
    content: <Footer />,
  },
  toc: {
    backToTop: "Scroll to top",
  },
  components: {
    Hero,
    Card,
    Cards,
    NavCard: NavCards.Card,
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
  main: ({ children }) => <CustomLayout>{children}</CustomLayout>,
};

export default config;
