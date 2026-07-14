"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

// TODO(i18n): hardcoded to the English contact page. Docs content is en-only
// today, so this is the safe target (a /<locale>/ link could 404 for locales
// without the page). When translated content ships, derive the active locale
// (e.g. via usePathname) and point at /<locale>/resources/contact-us.
const CONTACT_PAGE = "/en/resources/contact-us";

const linkClassName =
  "text-brand-accent underline decoration-from-font [text-underline-position:from-font]";

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
    return (
      <a className={linkClassName} href={`mailto:${address}`}>
        {children}
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={CONTACT_PAGE}>
      {children}
    </Link>
  );
}
