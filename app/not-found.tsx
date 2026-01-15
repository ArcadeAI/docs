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
import { usePostHog } from "posthog-js/react";
import { use, useEffect, useMemo, useRef } from "react";
import { getDictionaryClient } from "@/_dictionaries/get-dictionary-client";
import { BackButton } from "@/app/_components/back-button";

const LOCALE_PATH_REGEX = /^\/([a-z]{2}(?:-[A-Z]{2})?)(?:\/.+|$)/;
const LOCALE_PREFIX_REGEX = /^\/[a-z]{2}(?:-[A-Z]{2})?/;

export default function NotFound() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const lastCapturedPathRef = useRef<string | null>(null);

  const { currentLocale, englishPath, showEnglishLink } = useMemo(() => {
    const locale = pathname.match(LOCALE_PATH_REGEX)?.[1] || "en";
    const enPath = `/en${pathname.replace(LOCALE_PREFIX_REGEX, "") || "/"}`;
    const showEnLink = locale !== "en";

    return {
      currentLocale: locale,
      englishPath: enPath,
      showEnglishLink: showEnLink,
    };
  }, [pathname]);

  const dict = use(getDictionaryClient(currentLocale));

  useEffect(() => {
    const search = searchParams?.toString();
    const pathWithQuery = search ? `${pathname}?${search}` : pathname;

    // Prevent duplicate capture if this component re-renders for the same 404 URL.
    if (lastCapturedPathRef.current === pathWithQuery) return;
    lastCapturedPathRef.current = pathWithQuery;

    posthog?.capture("page_not_found", {
      status_code: 404,
      pathname,
      path: pathWithQuery,
      locale: currentLocale,
      english_path: englishPath,
      show_english_link: showEnglishLink,
      // PostHog special props (best-effort; only available in browser).
      $current_url: typeof window !== "undefined" ? window.location.href : null,
      $referrer:
        typeof document !== "undefined" ? document.referrer || null : null,
    });
  }, [
    currentLocale,
    englishPath,
    pathname,
    posthog,
    searchParams,
    showEnglishLink,
  ]);

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
                {dict.notFoundPage.title}
              </h1>
              <p className="mx-auto max-w-sm text-base text-muted-foreground leading-relaxed">
                {dict.notFoundPage.description}
              </p>
            </div>

            {/* English fallback */}
            {showEnglishLink && (
              <div className="text-center text-muted-foreground text-sm">
                <span>{dict.notFoundPage.translationHint} </span>
                <Link
                  className="font-medium text-orange-600 underline-offset-2 hover:underline dark:text-orange-400"
                  href={englishPath}
                >
                  {dict.notFoundPage.viewOriginalEnglish}
                </Link>
                .
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={`/${currentLocale}/home`}>
                  <Home className="mr-2 h-5 w-5" />
                  {dict.notFoundPage.goHome}
                </Link>
              </Button>
              <BackButton goBackText={dict.notFoundPage.goBack} />
            </div>
          </CardContent>

          <CardFooter className="border-border border-t pt-6">
            <div className="w-full space-y-3 text-center">
              <p className="text-muted-foreground text-sm">
                {dict.notFoundPage.needHelp}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/home/quickstart`}
                >
                  {dict.notFoundPage.quickstart}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/mcp-servers`}
                >
                  {dict.notFoundPage.mcpServers}
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "h-8"
                  )}
                  href={`/${currentLocale}/home/build-tools/create-a-mcp-server`}
                >
                  {dict.notFoundPage.createMcpServer}
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
