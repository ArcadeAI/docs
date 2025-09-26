import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a supported locale
  const pathnameIsMissingLocale = ["en", "es", "pt-BR"].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = "en"; // Default to English
    // If it's the root path, redirect to /{locale}/home
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Handle direct locale access (e.g., /en -> /en/home)
  const supportedLocales = ["en", "es", "pt-BR"];
  for (const locale of supportedLocales) {
    if (pathname === `/${locale}`) {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
  }

  // Add the pathname to headers so the layout can access it
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);
  return response;
}

export const config = {
  // Matcher ignoring static assets and API routes
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest|_pagefind|public|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.webp|.*\\.ico|.*\\.css|.*\\.js|.*\\.woff|.*\\.woff2|.*\\.ttf|.*\\.eot|.*\\.otf|.*\\.pdf|.*\\.txt|.*\\.xml|.*\\.json|.*\\.py|.*\\.mp4).*)",
  ],
};
