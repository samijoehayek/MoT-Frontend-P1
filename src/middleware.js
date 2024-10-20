import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const verifiedToken =
    token && (await verifyAuth(token));

  if (req.nextUrl.pathname.startsWith("/dashboard") && verifiedToken) {
    return;
  }
  if (req.nextUrl.pathname.startsWith("/dashboard") && !verifiedToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if(req.nextUrl.pathname.startsWith("/login") && verifiedToken) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if(req.nextUrl.pathname.startsWith("/login") && !verifiedToken) {
    return;
  }
}

export const config = {
  matcher: ["/dashboard", "/login"],
}; 
