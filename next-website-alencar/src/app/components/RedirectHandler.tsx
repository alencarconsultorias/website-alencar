'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface RedirectHandlerProps {
  children: React.ReactNode;
  enableAutoRedirect?: boolean;
  redirectRoutes?: string[];
}

export default function RedirectHandler({ 
  children, 
  enableAutoRedirect = true,
  redirectRoutes = [
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
  ]
}: RedirectHandlerProps) {
  const router = useRouter();

  useEffect(() => {
    if (!enableAutoRedirect) return;

    // Intercepta cliques em links que devem ser redirecionados
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const url = new URL(link.href);
        const pathname = url.pathname;
        
        if (redirectRoutes.includes(pathname)) {
          e.preventDefault();
          router.push('/em-breve');
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enableAutoRedirect, redirectRoutes, router]);

  return <>{children}</>;
}
