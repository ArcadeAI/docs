"use client";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import posthog from "posthog-js";
import { getDashboardUrl } from "./dashboard-link";

export type LinkClickedProps = {
  linkLocation: string;
  children?: React.ReactNode;
  className?: string;
  utmCampaign?: string;
  utmMedium?: string;
};

const UTM_SOURCE = "docs";
const DEFAULT_UTM_MEDIUM = "docs-cta";
const DEFAULT_UTM_CAMPAIGN = "docs";

const buildRegisterHref = (utmMedium: string, utmCampaign: string): string => {
  const base = getDashboardUrl("register");
  const separator = base.includes("?") ? "&" : "?";
  const params = new URLSearchParams({
    utm_source: UTM_SOURCE,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
  });
  return `${base}${separator}${params.toString()}`;
};

export const SignupLink = ({
  linkLocation,
  children,
  className,
  utmCampaign = DEFAULT_UTM_CAMPAIGN,
  utmMedium = DEFAULT_UTM_MEDIUM,
}: LinkClickedProps) => {
  const trackSignupClick = (source: string) => {
    posthog.capture("Signup clicked", {
      link_location: source,
    });
  };

  return (
    <Link
      className={cn("text-primary", className)}
      href={buildRegisterHref(utmMedium, utmCampaign)}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
