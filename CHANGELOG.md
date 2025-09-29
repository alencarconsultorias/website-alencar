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
- **[WA-22] SEO básico completo implementado:**
  - Meta tags otimizadas (title, description, keywords) para todas as páginas
  - Open Graph tags para compartilhamento em redes sociais
  - Twitter Cards para melhor apresentação no Twitter
  - Sitemap.xml dinâmico com todas as páginas do site
  - Robots.txt configurado para otimização de crawling
  - Structured Data (JSON-LD) para Organization, Website e Services
  - Breadcrumbs com structured data para melhor navegação
  - Canonical URLs para evitar conteúdo duplicado
  - Geração automática de imagens Open Graph
  - Configuração SEO centralizada para manutenção fácil
  - Web App Manifest para funcionalidades PWA básicas

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

### Arquivos SEO Criados
- `/app/sitemap.ts` - Sitemap dinâmico para indexação
- `/app/robots.ts` - Configuração de crawling para buscadores
- `/app/opengraph-image.tsx` - Geração automática de imagens OG
- `/components/structured-data.tsx` - Componente para dados estruturados
- `/components/breadcrumb-seo.tsx` - Breadcrumbs com SEO otimizado
- `/lib/seo-config.ts` - Configuração centralizada de SEO
- `/public/site.webmanifest` - Manifest para PWA básico

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