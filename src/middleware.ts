import createIntlMiddleware from "next-intl/middleware";
import { pathnames, localePrefix } from "./navigation";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "./lib/sessions";

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;
  const isProtectedRoute = path.includes("admin");
  const currentSession = await cookies().get("session")?.value;
  const session = await decrypt(currentSession);
  const hasEqualToken =
    request.nextUrl.searchParams.get("token") === currentSession;

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (
    session?.userId &&
    hasEqualToken &&
    request.nextUrl.pathname.startsWith("/fr/admin")
  ) {
    response.cookies.set({
      name: "navSession",
      value: "logged",
      path: "/fr",
    });
    return response;
  }

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
  matcher: ["/", "/(fr|en)/:path*", "/((?!auth|_next|_vercel|.*\\..*).*)"],
};
