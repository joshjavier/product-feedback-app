import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/feedback/(new|edit)", "/feedback/:id/edit"],
};

export function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("feathers-jwt");

  if (!jwtToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
}
