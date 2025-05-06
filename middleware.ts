import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const PUBLIC_PATHS = ["/login", "/register", "/tr/login", "/tr/register", "/en/login", "/en/register"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        PUBLIC_FILE.test(pathname) ||
        PUBLIC_PATHS.includes(pathname)
    ) {
        return NextResponse.next();
    }

    if (!pathname.startsWith("/tr") && !pathname.startsWith("/en")) {
        const locale = "tr";
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
    }

    const token = request.cookies.get("token")?.value;
    if (!token) {
        const redirectLocale = pathname.split("/")[1];
        return NextResponse.redirect(new URL(`/${redirectLocale}/login`, request.url));
    }

    return NextResponse.next();
}
