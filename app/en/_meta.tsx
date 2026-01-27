import {
  Book,
  BookOpen,
  GraduationCap,
  HelpCircle,
  Home,
  KeyRound,
  Monitor,
  Pencil,
  Puzzle,
  Ruler,
  Shield,
  Wrench,
} from "lucide-react";
import type { MetaRecord } from "nextra";

function TitleWithIcon({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 font-medium text-gray-950 dark:text-white">
      <Icon className="size-4" />
      {children}
    </span>
  );
}

export const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: true,
    },
  },
  home: {
    title: <TitleWithIcon icon={Home}>Docs Home</TitleWithIcon>,
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  "get-started": {
    title: <TitleWithIcon icon={BookOpen}>Get Started</TitleWithIcon>,
  },
  // Goal-based navigation: USE TOOLS
  "use-tools": {
    title: <TitleWithIcon icon={Monitor}>Use Arcade Tools</TitleWithIcon>,
  },
  // Goal-based navigation: BUILD TOOLS
  "build-tools": {
    title: <TitleWithIcon icon={Wrench}>Build Custom Tools</TitleWithIcon>,
  },
  // Tool Catalog (formerly under Resources)
  "tool-catalog": {
    title: <TitleWithIcon icon={Puzzle}>Tool Catalog</TitleWithIcon>,
  },
  // Auth Providers (separated from References)
  "auth-providers": {
    title: <TitleWithIcon icon={KeyRound}>Auth Providers</TitleWithIcon>,
  },
  // Keep existing sections
  guides: {
    title: <TitleWithIcon icon={Ruler}>Guides</TitleWithIcon>,
  },
  learn: {
    title: <TitleWithIcon icon={Book}>Learn</TitleWithIcon>,
  },
  references: {
    title: <TitleWithIcon icon={GraduationCap}>References</TitleWithIcon>,
  },
  // Legacy Resources (integrations will redirect to tool-catalog)
  resources: {
    title: <TitleWithIcon icon={Pencil}>Resources</TitleWithIcon>,
  },
  // Security (elevated from guides)
  security: {
    title: <TitleWithIcon icon={Shield}>Security</TitleWithIcon>,
  },
  // Help section
  help: {
    title: <TitleWithIcon icon={HelpCircle}>Help</TitleWithIcon>,
  },
};

export default meta;
