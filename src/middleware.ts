import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const userData = localStorage.getItem("user-data");

  const path = request.nextUrl.pathname;

  // let isUserPresent = false;

  // if (userData) {
  //   try {
  //     const obj = JSON.parse(userData);
  //     isUserPresent = !!obj?.user;
  //   } catch (error) {
  //     console.error("Error parsing user data from local storage:", error);
  //   }
  // }

  // if (true) {
  //   if (path.startsWith("/chat") || path.startsWith("/profile")) {
  //     return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  //   }
  // } else {
  //   if (path.startsWith("/auth")) {
  //     return NextResponse.redirect(new URL("/", request.nextUrl));
  //   }
  // }
}

export const config = {
  matcher: ["/chat", "/profile", "/auth"],
};
