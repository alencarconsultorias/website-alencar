// Service Worker para cache de recursos
const CACHE_NAME = 'alencar-consultorias-v1'
const STATIC_CACHE_NAME = 'alencar-static-v1'

// Recursos para cache imediato
const STATIC_RESOURCES = [
  '/',
  '/alencar-icon.png',
  '/images/alencar-logo.png',
  '/_next/static/css/app/layout.css',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/main.js'
]

// Recursos para cache sob demanda
const RUNTIME_CACHE = [
  '/servicos/desenvolvimento',
  '/parceiros',
  '/business-consulting-technology-workspace.jpg',
  '/computer-science-innovation-technology.jpg',
  '/modern-technology-innovation-digital-transformatio.jpg'
]

// Instalar service worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aberto')
        return cache.addAll(STATIC_RESOURCES)
      })
      .then(() => {
        console.log('Service Worker: Recursos estáticos em cache')
        return self.skipWaiting()
      })
  )
})

// Ativar service worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Ativando...')
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Limpar caches antigos
          if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
            console.log('Service Worker: Removendo cache antigo', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      console.log('Service Worker: Ativado')
      return self.clients.claim()
    })
  )
})

// Interceptar requisições
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)

  // Apenas interceptar requisições do mesmo domínio
  if (url.origin !== location.origin) return

  // Estratégia Cache First para recursos estáticos
  if (isStaticResource(request)) {
    event.respondWith(cacheFirst(request))
    return
  }

  // Estratégia Network First para páginas HTML
  if (isHTMLRequest(request)) {
    event.respondWith(networkFirst(request))
    return
  }

  // Estratégia Stale While Revalidate para imagens
  if (isImageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request))
    return
  }
})

// Verificar se é recurso estático
function isStaticResource(request) {
  return request.url.includes('/_next/static/') ||
         request.url.includes('.css') ||
         request.url.includes('.js') ||
         request.url.includes('/alencar-icon.png')
}

// Verificar se é requisição HTML
function isHTMLRequest(request) {
  return request.headers.get('accept')?.includes('text/html')
}

// Verificar se é requisição de imagem
function isImageRequest(request) {
  return request.headers.get('accept')?.includes('image/') ||
         request.url.includes('.jpg') ||
         request.url.includes('.png') ||
         request.url.includes('.webp') ||
         request.url.includes('.avif')
}

// Estratégia Cache First
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Erro na rede', error)
    return new Response('Recurso não disponível offline', { status: 503 })
  }
}

// Estratégia Network First
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Tentando cache para', request.url)
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    return new Response('Página não disponível offline', { 
      status: 503,
      headers: { 'Content-Type': 'text/html' }
    })
  }
}

// Estratégia Stale While Revalidate
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request)
  
  const networkResponsePromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      const cache = caches.open(CACHE_NAME)
      cache.then(c => c.put(request, networkResponse.clone()))
    }
    return networkResponse
  }).catch(() => null)

  return cachedResponse || await networkResponsePromise || 
         new Response('Imagem não disponível', { status: 503 })
}
