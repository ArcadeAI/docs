"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Banner } from "nextra/components";

type TranslationBannerProps = {
  dictionary: {
    banner: {
      aiTranslation: string;
      contributeLink: string;
      thanks: string;
    };
  };
  locale: string;
};

/**
 * Constructs the GitHub edit URL for the current page
 * Example: /es/home/auth -> https://github.com/ArcadeAI/docs/blob/main/app/es/home/auth/page.mdx
 */
function constructGithubUrl(pathname: string, locale: string): string {
  const baseUrl = "https://github.com/ArcadeAI/docs/blob/main/app";

  // Remove leading slash if present
  const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  // If the path doesn't start with the locale, add it
  const pathWithLocale = cleanPath.startsWith(`${locale}/`)
    ? cleanPath
    : `${locale}/${cleanPath}`;

  // Construct the full GitHub URL pointing to the page.mdx file
  return `${baseUrl}/${pathWithLocale}/page.mdx`;
}

export function TranslationBanner({
  dictionary,
  locale,
}: TranslationBannerProps) {
  const pathname = usePathname();
  const githubUrl = constructGithubUrl(pathname || "/", locale);

  return (
    <Banner
      className={cn(
        "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50",
        "border-blue-200 dark:border-blue-800",
        "text-blue-900 dark:text-blue-100"
      )}
      storageKey={`translation-banner-${locale}-v1`}
    >
      <div className="flex flex-wrap items-center justify-center gap-1 text-sm">
        <span>{dictionary.banner.aiTranslation}</span>
        <Link
          className={cn(
            "font-medium underline decoration-blue-400 underline-offset-4",
            "hover:decoration-blue-600 dark:decoration-blue-300 dark:hover:decoration-blue-100",
            "transition-colors duration-200"
          )}
          href={githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          {dictionary.banner.contributeLink}
        </Link>
        <span>. {dictionary.banner.thanks}</span>
      </div>
    </Banner>
  );
}
