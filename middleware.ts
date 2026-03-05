import { type NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR"];

function getPreferredLocale(_request: NextRequest): string {
  return "en";
}

function getEnglishLocaleRedirectPath(pathname: string): string | null {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === "en") {
      continue;
    }

    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      return "/en/home";
    }

    if (pathname.startsWith(`/${locale}/`)) {
      return `/en${pathname.slice(locale.length + 1)}`;
    }
  }

  return null;
}

function pathnameIsMissingLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const englishLocaleRedirectPath = getEnglishLocaleRedirectPath(pathname);
  if (englishLocaleRedirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = englishLocaleRedirectPath;
    return NextResponse.redirect(url);
  }

  if (pathnameIsMissingLocale(pathname)) {
    const locale = getPreferredLocale(request);
    const redirectPath =
      pathname === "/" ? `/${locale}/home` : `/${locale}${pathname}`;
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  for (const locale of SUPPORTED_LOCALES) {
    if (pathname === `/${locale}`) {
      return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  const currentLocale = SUPPORTED_LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (currentLocale) {
    response.cookies.set("NEXT_LOCALE", currentLocale, {
      maxAge: 31_536_000,
      path: "/",
      sameSite: "lax",
      httpOnly: false,
    });
  }

  if (pathname.includes("/toolkits")) {
    return NextResponse.redirect(
      new URL(pathname.replace("/toolkits", "/mcp-servers"), request.url)
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|manifest|public|.*.svg|.*.png|.*.jpg|.*.jpeg|.*.gif|.*.webp|.*.ico|.*.webmanifest|.*.css|.*.js|.*.woff|.*.woff2|.*.ttf|.*.eot|.*.otf|.*.pdf|.*.txt|.*.xml|.*.json|.*.py|.*.mp4).*)",
  ],
};
