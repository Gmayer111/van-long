import createIntlMiddleware from "next-intl/middleware";
import { pathnames, localePrefix } from "./navigation";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.cookies.get("NEXT_LOCALE")?.value || "fr";

  const handleI18nRouting = createIntlMiddleware({
    locales: ["fr", "en"],
    defaultLocale,
    localePrefix,
    pathnames,
    localeDetection: false,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(fr|en)/:path*", "/((?!admin|_next|_vercel|.*\\..*).*)"],
};

export { auth as middleware } from "auth";
