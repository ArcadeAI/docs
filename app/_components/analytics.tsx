"use client";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import posthog from "posthog-js";
import { getDashboardUrl } from "./dashboard-link";

export type LinkClickedProps = {
  linkLocation: string;
  children?: React.ReactNode;
  className?: string;
};

export const SignupLink = ({
  linkLocation,
  children,
  className,
}: LinkClickedProps) => {
  const trackSignupClick = (source: string) => {
    posthog.capture("Signup clicked", {
      link_location: source,
    });
  };

  return (
    <Link
      className={cn("text-primary", className)}
      href={getDashboardUrl("register")}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
