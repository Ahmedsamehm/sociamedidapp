import { NextRequest, NextResponse } from "next/server";

const protectRoutes = ["/", "/post", "/post/:path", "/profile", "/settings"];
const authRoutes = ["/signin", "/signup"];
const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  if (!token && protectRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  if (token && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/", "/profile", "/post", "/post/:path*", "/settings"],
};
