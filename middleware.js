import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Pages publiques
  const publicRoutes = ["/", "/login", "/inscription"];

  const isPublicRoute = publicRoutes.includes(pathname);

  // Si la route n'est pas publique et qu'il n'y a pas de token
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Si déjà connecté, empêcher retour à login/inscription
  if ((pathname === "/login" || pathname === "/inscription") && token) {
    return NextResponse.redirect(new URL("/projects", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Appliquer le middleware à toutes les routes
     * sauf API, fichiers Next.js, images, favicon...
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};