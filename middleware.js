import { languageCodes } from "@/constants";
import createIntlMiddleware from "next-intl/middleware";

const handleI18nRouting = createIntlMiddleware({
  locales: languageCodes,
  defaultLocale: languageCodes[0],
  localePrefix: "as-needed",
  alternateLinks: true,
  localeDetection: false,
});

export default function middleware(request) {
  const response = handleI18nRouting(request);
  // Setting custom header
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|media|uploads|sitemap|favicon.ico|robots.txt|sitemap.xml|icon.*|apple-icon.*|_next/static|_next/image).*)",
  ],
};
