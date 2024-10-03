import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    // console.log("Usuario no autenticado")
  }

  NextResponse.next();
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}