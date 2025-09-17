import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/signin", "/signup"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profile", "/settings", "/post/:path*"],
};
