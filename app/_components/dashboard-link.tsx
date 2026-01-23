import Link from "next/link";

const DASHBOARD_BASE_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.arcade.dev";

const normalizePath = (value: string): string =>
  value.replace(/\/+$/, "").replace(/^\/+/, "");

const resolveDashboardPrefix = (): string => {
  const baseUrl = DASHBOARD_BASE_URL.toLowerCase();
  const explicitPrefix = process.env.NEXT_PUBLIC_DASHBOARD_PATH_PREFIX;

  if (explicitPrefix !== undefined) {
    return normalizePath(explicitPrefix);
  }

  if (baseUrl.includes("/dashboard") || baseUrl.includes("app.arcade.dev")) {
    return "";
  }

  return "dashboard";
};

const DASHBOARD_PATH_PREFIX = resolveDashboardPrefix();
const BASE_URL = DASHBOARD_BASE_URL.replace(/\/+$/, "");

export const getDashboardUrl = (path = "") =>
  [
    BASE_URL,
    DASHBOARD_PATH_PREFIX,
    path ? normalizePath(path) : "",
  ]
    .filter(Boolean)
    .join("/");

type DashboardLinkProps = {
  path?: string;
  children?: React.ReactNode;
};

export const DashboardLink = ({
  path = "",
  children = "Arcade account",
}: DashboardLinkProps) => <Link href={getDashboardUrl(path)}>{children}</Link>;
