import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const supportedLocales = ["en", "es", "pt-BR"];

  // Check if the pathname starts with a supported locale
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the preferred locale from cookie, Accept-Language header, or default to English
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const acceptLanguage = request.headers.get("accept-language");

    let locale = "en"; // Default fallback

    // First priority: check if user has a saved locale preference in cookie
    if (cookieLocale && supportedLocales.includes(cookieLocale)) {
      locale = cookieLocale;
    }
    // Second priority: check browser's Accept-Language header
    else if (acceptLanguage) {
      // Parse Accept-Language header and find the best match
      const languages = acceptLanguage
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

      const preferredLocale = languages.find((lang) =>
        supportedLocales.includes(lang)
      );
      if (preferredLocale) {
        locale = preferredLocale;
      }
    }

    // If it's the root path, redirect to /{locale}/home
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Handle direct locale access (e.g., /en -> /en/home)
  for (const locale of supportedLocales) {
    if (pathname === `/${locale}`) {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
  }

  const response = NextResponse.next();

  // Add pathname to headers for server components
  response.headers.set("x-pathname", pathname);

  // Persist locale preference from URL if present
  const currentLocale = supportedLocales.find(
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
