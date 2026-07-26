import {
  buildAttributionCookie,
  extractAttribution,
  SIGNUP_ATTRIBUTION_COOKIE,
} from "@arcadeai/ui-kit/utils/attribution";
import { type NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR"];

const ATTRIBUTION_COOKIE_MAX_AGE_DAYS = 30;

// Share the signup cookie across arcade.dev subdomains (docs → identity-ui) in
// production. Everywhere else emit a host-only cookie (undefined domain): a
// Domain attribute set to a public suffix like `vercel.app` (preview deploys)
// — or a single-label host like `localhost` — is rejected by the browser.
// `.arcade.dev` is the only cross-subdomain scope we ever need, so match it
// explicitly rather than guessing the registrable domain from the host.
const SHARED_COOKIE_DOMAIN = ".arcade.dev";
function attributionCookieDomain(hostname: string): string | undefined {
  return hostname === "arcade.dev" || hostname.endsWith(SHARED_COOKIE_DOMAIN)
    ? SHARED_COOKIE_DOMAIN
    : undefined;
}

// Capture signup attribution (utm_*/gclid/referrer) on the first docs page a
// visitor lands on with those params, into a first-party cookie the identity-ui
// register flow reads back. First-touch wins: skip if the cookie already exists.
// Attaches to whatever response we return because most first visits hit the
// locale redirect below, which drops the query string.
function withAttribution(
  request: NextRequest,
  response: NextResponse
): NextResponse {
  if (request.cookies.has(SIGNUP_ATTRIBUTION_COOKIE)) {
    return response;
  }
  const attribution = extractAttribution(
    request.nextUrl.searchParams,
    request.headers.get("referer")
  );
  if (attribution) {
    response.headers.append(
      "set-cookie",
      buildAttributionCookie(attribution, {
        domain: attributionCookieDomain(request.nextUrl.hostname),
        maxAgeDays: ATTRIBUTION_COOKIE_MAX_AGE_DAYS,
      })
    );
  }
  return response;
}

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

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const englishLocaleRedirectPath = getEnglishLocaleRedirectPath(pathname);
  if (englishLocaleRedirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = englishLocaleRedirectPath;
    return withAttribution(request, NextResponse.redirect(url));
  }

  if (pathnameIsMissingLocale(pathname)) {
    const locale = getPreferredLocale(request);
    const redirectPath =
      pathname === "/" ? `/${locale}/home` : `/${locale}${pathname}`;
    return withAttribution(
      request,
      NextResponse.redirect(new URL(redirectPath, request.url))
    );
  }

  for (const locale of SUPPORTED_LOCALES) {
    if (pathname === `/${locale}`) {
      return withAttribution(
        request,
        NextResponse.redirect(new URL(`/${locale}/home`, request.url))
      );
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
    return withAttribution(
      request,
      NextResponse.redirect(
        new URL(pathname.replace("/toolkits", "/mcp-servers"), request.url)
      )
    );
  }

  return withAttribution(request, response);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|manifest|public|.*\\.svg$|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.ico$|.*\\.webmanifest$|.*\\.css$|.*\\.js$|.*\\.woff$|.*\\.woff2$|.*\\.ttf$|.*\\.eot$|.*\\.otf$|.*\\.pdf$|.*\\.txt$|.*\\.xml$|.*\\.json$|.*\\.py$|.*\\.mp4$).*)",
  ],
};
