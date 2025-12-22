import { Home } from "lucide-react";
import type { MetaRecord } from "nextra";

function TitleWithIcon({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 font-medium">
      <Icon className="size-4" />
      {children}
    </span>
  );
}

const meta: MetaRecord = {
  "*": {
    theme: {
      breadcrumb: true,
      toc: true,
      copyPage: true,
    },
  },
  home: {
    title: <TitleWithIcon icon={Home}>Home</TitleWithIcon>,
    href: "/home",
  },
  "-- Overview": {
    type: "separator",
    title: "Overview",
  },
  index: {
    title: "Overview",
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  "-- Categories": {
    type: "separator",
    title: "Categories",
  },
  productivity: {
    title: "Productivity & Docs",
  },
  "social-communication": {
    title: "Social & Communication",
  },
  entertainment: {
    title: "Entertainment",
  },
  development: {
    title: "Developer Tools",
  },
  payments: {
    title: "Payments & Finance",
  },
  search: {
    title: "Search Tools",
  },
  sales: {
    title: "Sales",
  },
  databases: {
    title: "Databases",
  },
  "customer-support": {
    title: "Customer Support",
  },
  "-- Submit your Server": {
    type: "separator",
    title: "Submit your Server",
  },
  "contribute-a-server": {
    title: "Contribute a Server",
  },
};

export default meta;
