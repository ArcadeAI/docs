"use client";
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
      // biome-ignore lint/style/useNamingConvention: This is ok for PostHog
      link_location: source,
    });
  };

  return (
    <Link
      className={className}
      href={"https://api.arcade.dev/signup"}
      onClick={() => trackSignupClick(linkLocation)}
    >
      {children}
    </Link>
  );
};
