"use client";

import { Discord, Github } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { useSidebar } from "fumadocs-ui/components/sidebar/base";
import Link from "next/link";
import { useCallback } from "react";
import { MenuIcon } from "@/components/chrome/icons";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { SearchButton } from "@/components/search-button";
import { DISCORD_URL, GITHUB_REPO_URL, LOGO_URL } from "@/lib/layout.shared";

/**
 * Top navigation bar: logo (links to arcade.dev), search, GitHub and Discord
 * icons, the Sign Up / Dashboard buttons and, on small screens, the menu
 * button that opens the mobile navigation.
 */
export function Navbar() {
  const { open, setOpen } = useSidebar();
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <header
      className={cn(
        "nextra-navbar sticky top-0 z-30 w-full bg-transparent print:hidden",
        "max-md:[.nextra-banner:not([class$=hidden])~&]:top-(--nextra-banner-height)"
      )}
    >
      <div
        className={cn(
          "nextra-navbar-blur",
          "absolute -z-1 size-full",
          "nextra-border border-b",
          "bg-nextra-bg/70 backdrop-blur-md"
        )}
      />
      <nav
        className={cn(
          "mx-auto flex max-w-(--nextra-content-width) items-center gap-4",
          "pr-[max(env(safe-area-inset-right),1.5rem)] pl-[max(env(safe-area-inset-left),1.5rem)]",
          "justify-end"
        )}
        style={{ height: "var(--nextra-navbar-height)" }}
      >
        <Link
          aria-label="Home page"
          className="me-auto flex items-center transition-opacity hover:opacity-75 focus-visible:nextra-focus"
          href={LOGO_URL}
        >
          <Logo />
        </Link>
        <div className="nextra-scrollbar flex gap-4 overflow-x-auto py-1.5 max-md:hidden" />
        <div className="max-md:hidden">
          <SearchButton />
        </div>
        <a
          className="focus-visible:nextra-focus"
          href={GITHUB_REPO_URL}
          rel="noreferrer"
          target="_blank"
        >
          <Github className="size-5.5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        </a>
        <a
          className="focus-visible:nextra-focus"
          href={DISCORD_URL}
          rel="noreferrer"
          target="_blank"
        >
          <Discord className="size-6 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        </a>
        <NavLinks />
        <button
          aria-label="Menu"
          className="nextra-hamburger cursor-pointer transition focus-visible:nextra-focus active:bg-gray-400/20 md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <MenuIcon className={cn({ open })} height="24" />
        </button>
      </nav>
    </header>
  );
}
