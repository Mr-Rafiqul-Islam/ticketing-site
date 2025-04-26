import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  
  console.log("Middleware triggered",req); // Log when middleware is triggered
  const token = req.cookies.get("authToken")?.value;
  console.log("Token from localStorage:", token); // Log the token for debugging
  // Check if the token is present in the cookies

  // Define the paths that should be protected
  const protectedPaths = ["/booking", "/my-booking", "/profile"];

  // Check if the request is for a protected path
  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );
  // Check if the request is for the login page
  if (isProtectedPath && !token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
// Define the routes where middleware should be applied
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/booking/:path*",
    "/my-booking/:path*",
    "/profile/:path*",
  ], // Apply middleware to specific routes
};
