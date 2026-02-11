import { type NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es", "pt-BR"];
const TOOLKIT_DETAIL_SEGMENTS_WITH_LOCALE = 5;
const TOOLKIT_DETAIL_SEGMENTS_WITHOUT_LOCALE = 4;

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;

// Known AI/LLM agent User-Agent patterns (case-insensitive matching)
const AI_AGENT_PATTERNS = [
  /claude/i,
  /anthropic/i,
  /chatgpt/i,
  /openai/i,
  /gpt-4/i,
  /gpt-3/i,
  /cursor/i,
  /copilot/i,
  /github.copilot/i,
  /codeium/i,
  /tabnine/i,
  /amazonq/i,
  /amazon-q/i,
  /gemini/i,
  /bard/i,
  /perplexity/i,
  /phind/i,
  /you\.com/i,
  /cohere/i,
  /ai21/i,
  /huggingface/i,
  /langchain/i,
  /llamaindex/i,
  /autogpt/i,
  /agentgpt/i,
  /babyagi/i,
  /superagent/i,
  /fixie/i,
  /dust\.tt/i,
  /respell/i,
  /lindy\.ai/i,
  /kapa\.ai/i,
  /mendable/i,
  /inkeep/i,
  /glean/i,
  /devdocs/i,
  /readable/i,
];

function prefersMarkdown(request: NextRequest): boolean {
  const acceptHeader = (request.headers.get("accept") || "").toLowerCase();
  return acceptHeader.includes("text/markdown");
}

function isAIAgent(request: NextRequest): boolean {
  const userAgent = request.headers.get("user-agent") || "";
  return AI_AGENT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

function getPreferredLocale(_request: NextRequest): string {
  // We don't currently support other translations, so always use English.
  return "en";
}

function pathnameIsMissingLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
}

function getLocaleFromPathname(pathname: string, request: NextRequest): string {
  if (pathnameIsMissingLocale(pathname)) {
    return getPreferredLocale(request);
  }

  return (
    SUPPORTED_LOCALES.find(
      (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
    ) || "en"
  );
}

function buildMarkdownPath(pathname: string, locale: string): string {
  if (pathname === "/" || pathname === "") {
    return `/${locale}/home.md`;
  }
  if (pathnameIsMissingLocale(pathname)) {
    return `/${locale}${pathname}.md`;
  }
  if (SUPPORTED_LOCALES.some((loc) => pathname === `/${loc}`)) {
    return `${pathname}/home.md`;
  }
  return `${pathname}.md`;
}

function isToolkitDetailPath(pathname: string): boolean {
  const segments = pathname.split("/").filter(Boolean);

  if (
    segments.length === TOOLKIT_DETAIL_SEGMENTS_WITH_LOCALE &&
    SUPPORTED_LOCALES.includes(segments[0]) &&
    segments[1] === "resources" &&
    segments[2] === "integrations"
  ) {
    return true;
  }

  if (
    segments.length === TOOLKIT_DETAIL_SEGMENTS_WITHOUT_LOCALE &&
    segments[0] === "resources" &&
    segments[1] === "integrations"
  ) {
    return true;
  }

  return false;
}

function handleContentNegotiation(
  request: NextRequest,
  pathname: string
): NextResponse | null {
  const method = request.method.toUpperCase();
  if (method !== "GET" && method !== "HEAD") {
    return null;
  }

  const shouldServeMarkdown = prefersMarkdown(request) || isAIAgent(request);
  if (!shouldServeMarkdown || pathname.endsWith(".md")) {
    return null;
  }

  const normalizedPathname =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;

  if (isToolkitDetailPath(normalizedPathname)) {
    return null;
  }

  const locale = getLocaleFromPathname(normalizedPathname, request);
  const mdPath = buildMarkdownPath(normalizedPathname, locale);
  const url = request.nextUrl.clone();
  url.pathname = `/api/markdown${mdPath}`;
  return NextResponse.rewrite(url);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const contentNegotiationResponse = handleContentNegotiation(
    request,
    pathname
  );
  if (contentNegotiationResponse) {
    return contentNegotiationResponse;
  }

  if (pathname.endsWith(".md") && pathnameIsMissingLocale(pathname)) {
    const locale = getPreferredLocale(request);
    const pathWithoutMd = pathname.replace(MD_EXTENSION_REGEX, "");
    const redirectPath = `/${locale}${pathWithoutMd}.md`;
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (pathname.endsWith(".md") && !pathname.startsWith("/api/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/api/markdown${pathname}`;
    return NextResponse.rewrite(url);
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
    "/((?!api|_next/static|_next/image|favicon.ico|manifest|_pagefind|public|.*.svg|.*.png|.*.jpg|.*.jpeg|.*.gif|.*.webp|.*.ico|.*.css|.*.js|.*.woff|.*.woff2|.*.ttf|.*.eot|.*.otf|.*.pdf|.*.txt|.*.xml|.*.json|.*.py|.*.mp4).*)",
  ],
};
