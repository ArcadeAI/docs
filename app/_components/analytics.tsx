"use client";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

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
  const posthog = usePostHog();

  const trackSignupClick = (source: string) => {
    posthog?.capture("Signup clicked", {
      link_location: source,
    });
  };

  return (
    <Link
      className={cn("text-primary", className)}
      href={"https://api.arcade.dev/dashboard/register"}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
