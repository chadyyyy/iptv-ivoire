import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Fix 404: /sitemap -> /sitemap.xml redirect
  if (request.nextUrl.pathname === '/sitemap') {
    return NextResponse.redirect(new URL('/sitemap.xml', request.url), 301)
  }
}

export const config = {
  matcher: ['/sitemap'],
}
