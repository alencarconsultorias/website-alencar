import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This middleware blocks access to /coming-soon in production
// and allows normal routing for all other pages
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const pathname = url.pathname

  // Allowlist: paths that should never be blocked
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') || // public/images/*
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.(css|js|mjs|map|png|jpe?g|gif|svg|ico|webp|avif|woff2?|ttf)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const vercelEnv = process.env.VERCEL_ENV
  const isProduction = vercelEnv === 'production'
  const forceComingSoon =
    process.env.NEXT_PUBLIC_FORCE_COMING_SOON === 'true' ||
    process.env.FORCE_COMING_SOON === 'true'

  // Block access to /coming-soon in production
  if (pathname.startsWith('/coming-soon') && (isProduction || forceComingSoon)) {
    return NextResponse.redirect(new URL('/', url))
  }

  return NextResponse.next()
}

// Limit middleware to all routes except common static/internal ones.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)',
  ],
}


