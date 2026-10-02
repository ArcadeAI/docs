"use client";

import {
  Button,
  buttonVariants,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { Home, SearchX } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { Dictionary } from "@/_dictionaries/i18n-config";
import { BackButton } from "@/app/_components/back-button";

const LOCALE_PATH_REGEX = /^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/.+|$)/;
function getReferrerInfo(): { referrer: string; referringDomain: string } {
  const referrer =
    typeof document !== "undefined" ? document.referrer || "" : "";
  if (!referrer) {
    return { referrer: "", referringDomain: "" };
  }
  try {
    return { referrer, referringDomain: new URL(referrer).hostname };
  } catch {
    return { referrer, referringDomain: "" };
  }
}

// Default dictionary for fallback during SSR
const defaultDict: Dictionary["notFoundPage"] = {
  title: "Page not found",
  description: "This page doesn't exist or may have moved.",
  notAvailablePrefix: "Not available in",
  tryEnglish: "Try English version",
  translationHint: "This page may not be translated yet.",
  viewOriginalEnglish: "View the original in English",
  goHome: "Go to homepage",
  goBack: "Go back",
  needHelp: "Need help? Try these popular pages:",
  quickstart: "Quickstart",
  mcpServers: "MCP Servers",
  createMcpServer: "Create a MCP Server",
};

function NotFoundContent() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const lastCapturedPathRef = useRef<string | null>(null);
  const [dict, setDict] = useState<Dictionary["notFoundPage"]>(defaultDict);

  const currentLocale = useMemo(
    () => pathname.match(LOCALE_PATH_REGEX)?.[1] || "en",
    [pathname]
  );

  useEffect(() => {
    const loadDict = async () => {
      try {
        const dictModule = await import("@/_dictionaries/en");
        setDict(dictModule.default.notFoundPage);
      } catch {
        // Keep default English dictionary on error
      }
    };
    loadDict();
  }, []);

  useEffect(() => {
    const search = searchParams?.toString();
    const pathWithQuery = search ? `${pathname}?${search}` : pathname;

    // Prevent duplicate capture if this component re-renders for the same 404 URL.
    if (lastCapturedPathRef.current === pathWithQuery) {
      return;
    }
    lastCapturedPathRef.current = pathWithQuery;

    const { referrer, referringDomain } = getReferrerInfo();

    posthog.capture("Page not found", {
      status_code: 404,
      pathname,
      path: pathWithQuery,
      locale: currentLocale,
      // Ensure special props are attached to custom 404 events for link analysis.
      $current_url: typeof window !== "undefined" ? window.location.href : null,
      $referrer: referrer || null,
      $referring_domain: referringDomain || null,
    });
  }, [currentLocale, pathname, searchParams]);

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full max-w-xl">
        <Card className="gap-4 border-2 border-stone-900 py-6 shadow-2xl shadow-black/10 dark:shadow-black/25">
          <CardHeader className="text-center">
            {/* Illustration */}
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-linear-to-br from-orange-100 to-orange-50 ring-1 ring-orange-200/50 dark:from-orange-900/30 dark:to-orange-800/20 dark:ring-orange-800/30">
              <SearchX className="size-9 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-10">
            {/* Content */}
            <div className="space-y-3 text-center">
              <h1 className="font-bold text-2xl text-foreground tracking-tight sm:text-3xl">
                {dict.title}
              </h1>
              <p className="mx-auto max-w-sm text-base text-muted-foreground leading-relaxed">
                {dict.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                render={<Link href={`/${currentLocale}/home`} />}
                size="lg"
              >
                <Home className="mr-2 h-5 w-5" />
                {dict.goHome}
              </Button>
              <BackButton goBackText={dict.goBack} />
            </div>
          </CardContent>

          <CardFooter className="border-border border-t pt-6">
            <div className="w-full space-y-3 text-center">
              <p className="text-muted-foreground text-sm">{dict.needHelp}</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/home/quickstart`}
                >
                  {dict.quickstart}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/mcp-servers`}
                >
                  {dict.mcpServers}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/home/build-tools/create-a-mcp-server`}
                >
                  {dict.createMcpServer}
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-16">Loading...</div>
      }
    >
      <NotFoundContent />
    </Suspense>
  );
}
