import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = Array.from(i18n.locales);

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/favicon.ico',
      '/logo.svg',
      '/whats.svg',
      '/data/about/gadwah.svg',
      '/data/about/latest.svg',
      '/data/about/most.svg',
      '/data/about/strongest.svg',
      // Your other files in `public`
    ].includes(pathname)
  )
    return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Always use default locale (ar) for initial redirect
    const locale = i18n.defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /ar/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname === ''? '/about' : pathname }`,
        request.url,
      ),
    );
  }

  // Rewrite root path (/{locale}/ or /{locale}) to about page
  for (const locale of i18n.locales) {
    if (pathname === `/${locale}` || pathname === `/${locale}/`) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/about`;
      return NextResponse.rewrite(url);
    }
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
