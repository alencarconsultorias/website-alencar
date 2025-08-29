import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Lista de rotas que devem ser redirecionadas para "em breve"
  const routesToRedirect = [
    '/blog',
    '/portfolio',
    '/cases',
    '/clientes',
    '/parceiros',
    '/carreiras',
    '/downloads',
    '/suporte',
    '/faq',
    '/politica-privacidade',
    '/termos-uso'
  ];
  
  // Verifica se a rota atual está na lista de redirecionamento
  if (routesToRedirect.includes(pathname)) {
    return NextResponse.redirect(new URL('/em-breve', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
