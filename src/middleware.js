import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const isActive = req.cookies.get("isActive")?.value;
  const verifiedToken =
    token && (await verifyAuth(token));

  if (req.nextUrl.pathname.startsWith("/dashboard") && verifiedToken && isActive) {
    return;
  }
  if (req.nextUrl.pathname.startsWith("/dashboard") && (!verifiedToken || !isActive)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/Build")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if(req.nextUrl.pathname.startsWith("/google-authenticator")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/google-authenticator", "/Build", "/Build/index.html"],
};
