# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Unreleased] - YYYY-MM-DD

### Adicionado 
- Criado novo projeto para o website da Alencar 
- Pagina de em breve online para os clientes
- Submenus no header para serviços (Implantação, Suporte, Venda, Desenvolvimento)
- Página completa de Desenvolvimento de Software (/servicos/desenvolvimento)
- Seções: Hero, Tech Stack, Processo de Desenvolvimento, Tipos de Projetos
- Animações suaves no dropdown do menu de serviços
- **[WA-23] Otimizações de performance completas implementadas:**
  - Componente OptimizedImage com formatos modernos (WebP, AVIF)
  - Lazy loading para componentes não críticos com Intersection Observer
  - Code splitting inteligente e dynamic imports
  - Service Worker para cache offline e estratégias de cache otimizadas
  - Resource preloading automático baseado em rotas e hover
  - Bundle optimization com chunks separados para UI, React e libs
  - CSS otimizado com font-display swap e GPU acceleration
  - Compressão e minificação configuradas no Next.js
  - Scripts de análise de performance e bundle size
  - Loading states e skeleton screens para melhor UX

### Alterado 
- [WA-42]: Deploy na Vercel com pagina "em breve"
- Header com dropdown animado para submenu de serviços
- Logo agora é clicável e retorna para página inicial
- Removidos emojis da seção de processos de desenvolvimento
- [WA-21]: Atualizado número de telefone para +55 (11) 99567-6003
- [WA-21]: Links das redes sociais atualizados com URLs oficiais da empresa 
- [WA-39] Adicionado pagina de parceiros 
- [WA-33] Atualizado as descriçōes e estrutura da pagina inicial

### Corrigido
- Menu dropdown que desaparecia ao tentar clicar nos itens
- Navegação mobile com submenus indentados 
- [WA-21]: Links das redes sociais no footer (WhatsApp, LinkedIn, Instagram)
- [WA-21]: Ícones interativos das redes sociais com efeitos hover

### Arquivos de Performance Criados
- `/next.config.js` - Configuração otimizada do Next.js com compressão e cache
- `/components/optimized-image.tsx` - Componente de imagem com lazy loading e formatos modernos
- `/components/lazy-section.tsx` - Wrapper para lazy loading de seções
- `/components/loading-spinner.tsx` - Estados de loading e skeleton screens
- `/components/resource-preloader.tsx` - Preloading inteligente de recursos
- `/components/service-worker-register.tsx` - Registro do service worker
- `/hooks/use-intersection-observer.ts` - Hook para detecção de visibilidade
- `/public/sw.js` - Service worker com estratégias de cache otimizadas
- `/scripts/analyze-bundle.js` - Script para análise de bundle size
- `/scripts/performance-audit.js` - Auditoria automática de performance
- `PERFORMANCE_OPTIMIZATION.md` - Documentação completa das otimizações

---

## Links úteis

- [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)
- [Versionamento Semântico](https://semver.org/lang/pt-BR/)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)
- [Hub Confluence](https://alencar-consultorias.atlassian.net/wiki/company-hub) 

## [Unreleased-status]

### Adicionado
- Novas funcionalidades que foram adicionadas

### Alterado
- Mudanças em funcionalidades existentes

### Depreciado
- Funcionalidades que serão removidas em breve

### Removido
- Funcionalidades que foram removidas

### Corrigido
- Correções de bugs

### Segurança
- Correções de vulnerabilidades