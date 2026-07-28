import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/admin/:path*'],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');
  const url = req.nextUrl;

  if (token && token.value === 'admin-authenticated') {
    return NextResponse.next();
  }

  // If not authenticated, redirect to the custom login page
  url.pathname = '/login';
  return NextResponse.redirect(url);
}
