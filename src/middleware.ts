// import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from './app/shared/utils/types';
import { public_routes } from '@utils/constants';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const userRole = 'admin';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // const cookie = request.cookies.get(process.env.TOKEN as string);
  // const token = cookie?.value;

  if (!token) return NextResponse.redirect('/login');

  // // if token is expired then redirect to login page
  // if (user.exp < Date.now() / 1000) {
  //   url.pathname = "/signin";
  //   return NextResponse.redirect(url);
  // }

  // allow public routes visit to auth useres
  if (public_routes.includes(pathname)) return NextResponse.next();

  // if user role is not admin and user is trying to access admin routes then redirect to login page
  if (userRole === UserRole.ADMIN && !pathname.startsWith('/admin/')) {
    url.pathname = '/admin/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - NotFound Page
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets (public assets)
     * - favicon.ico (favicon file)
     */
    '/((?!api|not-found|_next/static|_next/image|assets|favicon.ico).*)',
  ],
};
