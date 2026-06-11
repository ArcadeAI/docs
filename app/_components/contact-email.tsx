"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const CONTACT_PAGE = "/en/resources/contact-us";

type ContactEmailProps = {
  /** Local part of the address, e.g. "security" for security@arcade.dev. */
  user: string;
  /** Domain of the address, e.g. "arcade.dev". */
  domain: string;
  /** Visible link text. Keep it free of the raw address (see below). */
  children: ReactNode;
};

/**
 * A mailto link whose address is assembled only after hydration.
 *
 * Cloudflare's Email Address Obfuscation runs at the edge on the server-rendered
 * HTML and rewrites any `mailto:`/address it finds into a
 * `/cdn-cgi/l/email-protection` link, which crawlers report as broken. By keeping
 * the address out of the SSR markup — we render a plain link to the contact page
 * until the component mounts — there is nothing for Cloudflare to rewrite, while
 * real users still get a working `mailto:`. Pass visible text via `children`
 * (not the literal address) so it isn't exposed server-side either.
 */
export function ContactEmail({ user, domain, children }: ContactEmailProps) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    setAddress(`${user}@${domain}`);
  }, [user, domain]);

  if (address) {
    return <a href={`mailto:${address}`}>{children}</a>;
  }

  return <Link href={CONTACT_PAGE}>{children}</Link>;
}
