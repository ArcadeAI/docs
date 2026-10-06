"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignupLink } from "@/components/analytics";
import { getDashboardUrl } from "@/components/dashboard-link";

const HIDE_SIGNUP_ON = new Set([
  "/build/create-tools/add-tools-to-arcade-catalog",
  "/en/build/create-tools/add-tools-to-arcade-catalog",
]);

/**
 * "Sign Up" / "Dashboard" buttons in the top navbar (Nextra navbar parity).
 * Rendered as real links styled as buttons so they work without JavaScript
 * and never nest a <button> inside an <a>.
 */
export function NavLinks() {
  const pathname = usePathname();
  const showSignup = !HIDE_SIGNUP_ON.has(pathname);

  return (
    <div className="flex items-center gap-2">
      {showSignup ? (
        <SignupLink
          className={cn(
            buttonVariants({ variant: "primary" }),
            "h-8 rounded-full bg-primary px-4 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          )}
          linkLocation="docs:navbar"
          utmMedium="navbar"
        >
          Sign Up
        </SignupLink>
      ) : null}
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-8 rounded-full px-4 font-medium text-sm"
        )}
        href={getDashboardUrl("playground/chat")}
      >
        Dashboard
      </Link>
    </div>
  );
}
