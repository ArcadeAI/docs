import { usePostHog } from "posthog-js/react";
import Link from "next/link";

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface LinkClickedProps {
  utmParams: UTMParams;
  linkLocation: string;
  children?: React.ReactNode;
  className?: string;
}

export const SignupLink = ({
  utmParams,
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
      href={`https://api.arcade.dev/signup?${new URLSearchParams(utmParams as Record<string, string>)}`}
      onClick={() => trackSignupClick(linkLocation)}
      className={className}
    >
      {children}
    </Link>
  );
};
