import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        PUBLIC_FILE.test(pathname) ||
        pathname.startsWith('/tr') ||
        pathname.startsWith('/en')
    ) {
        return NextResponse.next();
    }

    const locale = 'tr'; // Default dil
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}
