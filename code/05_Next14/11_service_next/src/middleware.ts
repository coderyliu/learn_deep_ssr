import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"]
};

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/juanpi/api")) {
    return NextResponse.rewrite(
      new URL(req.nextUrl.pathname, "http://codercba.com:9060")
    );
  }
}
