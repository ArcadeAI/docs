import { type NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR"];

/**
 * Parse Accept-Language header and normalize locale codes
 */
function parseAcceptLanguageHeader(acceptLanguage: string): string[] {
  return acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .map((lang) => {
      // Handle both 'es' and 'es-ES' format
      if (lang.startsWith("es")) {
        return "es";
      }
      if (lang.startsWith("pt")) {
        return "pt-BR";
      }
      return lang;
    });
}

/**
 * Get the preferred locale from cookie or Accept-Language header
 */
function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  // First priority: check if user has a saved locale preference in cookie
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Second priority: check browser's Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const languages = parseAcceptLanguageHeader(acceptLanguage);
    const preferredLocale = languages.find((lang) =>
      SUPPORTED_LOCALES.includes(lang)
    );
    if (preferredLocale) {
      return preferredLocale;
    }
  }

  // Default fallback
  return "en";
}

/**
 * Check if the pathname is missing a locale prefix
 */
function pathnameIsMissingLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect if there is no locale
  if (pathnameIsMissingLocale(pathname)) {
    const locale = getPreferredLocale(request);
    const redirectPath =
      pathname === "/" ? `/${locale}/home` : `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // Handle direct locale access (e.g., /en -> /en/home)
  for (const locale of SUPPORTED_LOCALES) {
    if (pathname === `/${locale}`) {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
  }

  const response = NextResponse.next();

  // Add pathname to headers for server components
  response.headers.set("x-pathname", pathname);

  // Redirect /toolkit routes to /mcp-server routes
  if (pathname.includes("/toolkits/")) {
    return NextResponse.redirect(
      new URL(pathname.replace("/toolkits/", "/mcp-servers/"), request.url)
    );
  }

  // Persist locale preference from URL if present
  const currentLocale = SUPPORTED_LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (currentLocale) {
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      maxAge: 31_536_000, // 1 year
      path: "/",
      sameSite: "lax",
      httpOnly: false,
    });
  }

  return response;
}

export const config = {
  // Matcher ignoring static assets and API routes
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest|_pagefind|public|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp|.*\\.ico|.*\\.css|.*\\.js|.*\\.woff|.*\\.woff2|.*\\.ttf|.*\\.eot|.*\\.otf|.*\\.pdf|.*\\.txt|.*\\.xml|.*\\.json|.*\\.py|.*\\.mp4).*)",
  ],
};
