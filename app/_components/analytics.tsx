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
const DEFAULT_UTM_CAMPAIGN = "docs";

const buildRegisterHref = (utmCampaign: string, utmMedium?: string): string => {
  const base = getDashboardUrl("register");
  const separator = base.includes("?") ? "&" : "?";
  const params = new URLSearchParams({
    utm_source: UTM_SOURCE,
    utm_campaign: utmCampaign,
  });
  if (utmMedium) {
    params.set("utm_medium", utmMedium);
  }
  return `${base}${separator}${params.toString()}`;
};

export const SignupLink = ({
  linkLocation,
  children,
  className,
  utmCampaign = DEFAULT_UTM_CAMPAIGN,
  utmMedium,
}: LinkClickedProps) => {
  const trackSignupClick = (source: string) => {
    posthog.capture("Signup clicked", {
      link_location: source,
    });
  };

  return (
    <Link
      className={cn("text-primary", className)}
      href={buildRegisterHref(utmCampaign, utmMedium)}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
