import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/work/unlock') return NextResponse.next();

  const cookie = request.cookies.get('work_access');
  if (cookie?.value !== 'granted') {
    const url = request.nextUrl.clone();
    url.pathname = '/work/unlock';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/work', '/work/:path*'],
};
