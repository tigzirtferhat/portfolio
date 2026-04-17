import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  const url = request.nextUrl;

  // routes protégées
  if (url.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // empêcher retour login si connecté
  if (url.pathname === "/login") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};