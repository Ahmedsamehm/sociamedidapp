import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/signin", "/signup"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // 1. If trying to access login/signup while already logged in
  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 2. Protect specific pages if NO token exists
  // Allow '/' to be public
  if (!token && !authRoutes.includes(pathname) && pathname !== "/") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  // Ensure /api is NOT in this list to avoid intercepting backend calls
  matcher: ["/", "/profile", "/settings", "/post/:path*"],
};
