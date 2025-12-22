import Link from "next/link";

const DASHBOARD_BASE_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://api.arcade.dev";

export const getDashboardUrl = (path = "") =>
  path
    ? `${DASHBOARD_BASE_URL}/dashboard/${path}`
    : `${DASHBOARD_BASE_URL}/dashboard`;

type DashboardLinkProps = {
  path?: string;
  children?: React.ReactNode;
};

export const DashboardLink = ({
  path = "",
  children = "Arcade account",
}: DashboardLinkProps) => <Link href={getDashboardUrl(path)}>{children}</Link>;
