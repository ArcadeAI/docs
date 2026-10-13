"use client";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import posthog from "posthog-js";
import { useCallback } from "react";
import { getDashboardUrl } from "./dashboard-link";

export interface LinkClickedProps {
  children?: React.ReactNode;
  className?: string;
  linkLocation: string;
  utmCampaign?: string;
  utmMedium?: string;
}

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
  const handleClick = useCallback(() => {
    posthog.capture("Signup clicked", {
      link_location: linkLocation,
    });
  }, [linkLocation]);

  return (
    <Link
      className={cn("text-brand-accent", className)}
      href={buildRegisterHref(utmCampaign, utmMedium)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
