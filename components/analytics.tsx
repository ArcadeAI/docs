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
  const url = new URL(getDashboardUrl("register"));
  url.searchParams.set("utm_source", UTM_SOURCE);
  url.searchParams.set("utm_campaign", utmCampaign);
  if (utmMedium) {
    url.searchParams.set("utm_medium", utmMedium);
  }
  return url.toString();
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
      className={cn("text-brand-accent", className)}
      href={buildRegisterHref(utmCampaign, utmMedium)}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
