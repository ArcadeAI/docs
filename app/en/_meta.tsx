import {
  Book,
  BookOpen,
  GraduationCap,
  Home,
  Pencil,
  Ruler,
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
  resources: {
    title: <TitleWithIcon icon={Pencil}>Resources</TitleWithIcon>,
  },
  guides: {
    title: <TitleWithIcon icon={Ruler}>Guides</TitleWithIcon>,
  },
  learn: {
    title: <TitleWithIcon icon={Book}>Learn</TitleWithIcon>,
  },
  references: {
    title: <TitleWithIcon icon={GraduationCap}>References</TitleWithIcon>,
  },
};

export default meta;
