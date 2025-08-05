"use client";

import { usePostHog } from "posthog-js/react";
import Link from "next/link";

export interface LinkClickedProps {
  linkLocation: string;
  children?: React.ReactNode;
  className?: string;
}

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
      href={`https://api.arcade.dev/signup`}
      onClick={() => trackSignupClick(linkLocation)}
      className={className}
    >
      {children}
    </Link>
  );
};
