'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Registrar service worker após o carregamento da página
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration.scope)
            
            // Verificar atualizações
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                      // Nova versão disponível
                      console.log('Nova versão do site disponível. Recarregue a página.')
                      
                      // Opcional: mostrar notificação para o usuário
                      if (window.confirm('Nova versão disponível. Deseja recarregar?')) {
                        window.location.reload()
                      }
                    } else {
                      // Primeira instalação
                      console.log('Site disponível offline!')
                    }
                  }
                })
              }
            })
          })
          .catch(error => {
            console.log('Falha ao registrar Service Worker:', error)
          })
      })

      // Escutar mensagens do service worker
      navigator.serviceWorker.addEventListener('message', event => {
        console.log('Mensagem do Service Worker:', event.data)
      })

      // Detectar quando o service worker está controlando a página
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker assumiu o controle da página')
      })
    }
  }, [])

  return null
}
