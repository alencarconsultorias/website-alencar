import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This middleware rewrites all routes to /coming-soon when running on
// the Vercel Production environment. Preview and Development are unaffected.
// It also allows assets, Next.js internals, and specific files to pass through.
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const pathname = url.pathname

  // Allowlist: paths that should never be rewritten
  if (
    pathname.startsWith('/coming-soon') ||
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

  if (isProduction || forceComingSoon) {
    const rewriteUrl = url.clone()
    rewriteUrl.pathname = '/coming-soon'
    return NextResponse.rewrite(rewriteUrl)
  }

  return NextResponse.next()
}

// Limit middleware to all routes except common static/internal ones.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|coming-soon|images).*)',
  ],
}


