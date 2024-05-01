import { NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const verifiedToken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith("/dashboard") && verifiedToken) {
    return;
  }
  if (req.nextUrl.pathname.startsWith("/dashboard") && !verifiedToken) {
    console.log("Redirecting to /")
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/new-login")) {
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
  matcher: ["/dashboard", "/new-login", "/google-authenticator"],
};
