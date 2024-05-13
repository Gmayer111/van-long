import createMiddleware from "next-intl/middleware";
import { locales } from "./types/locales";
import { pathnames, localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  pathnames,
  localePrefix,
  defaultLocale: "fr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
