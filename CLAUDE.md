# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

The repository root holds docs (`README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) but the Next.js application lives entirely inside `website-alencar/`. All commands below must be run from that subdirectory.

## Commands

```bash
cd website-alencar

npm run dev          # local dev server
npm run build        # production build
npm run lint         # ESLint
npm start            # serve production build
```

To simulate the production "coming soon" mode locally:

```bash
NEXT_PUBLIC_FORCE_COMING_SOON=true npm run dev
```

> Note: `next.config.mjs` has `ignoreDuringBuilds: true` for both ESLint and TypeScript, so the build will not fail on type errors or lint warnings.

## Architecture

**Framework:** Next.js App Router with TypeScript, Tailwind CSS v4, and shadcn/ui (Radix UI primitives).

**Path alias:** `@/*` resolves to `website-alencar/*`.

### Routes (`app/`)

| Route | Description |
|---|---|
| `/` | Home page with hero, services, innovation, approach, contact sections |
| `/sobre` | About page |
| `/contato` | Contact page |
| `/parceiros` | Partners page |
| `/coming-soon` | Placeholder page — middleware redirects away from it in production |
| `/servicos/automacao` | Automation service page |
| `/servicos/desenvolvimento` | Software development service page |
| `/servicos/implantacao` | Implementation service page |
| `/servicos/suporte` | Support/SAC page (also reachable via `/servicos/sac` via Vercel rewrite) |
| `/servicos/vendas` | Sales service page |
| `/politica-de-privacidade` | Privacy policy |
| `/termos-de-uso` | Terms of use |

### Component organization

Page-level components are grouped under `components/` by service area:
- `components/automacao/` — automation service sections
- `components/development/` — software development service sections
- `components/implantacao/` — implementation service sections
- `components/sales/` — sales service sections
- `components/suporte/` — support/SAC service sections
- `components/ui/` — shadcn/ui primitive components (do not hand-edit; regenerate with the shadcn CLI if needed)

Shared layout components at the top of `components/`: `header.tsx`, `footer.tsx`, `hero-section.tsx`, `services-section.tsx`, etc.

### SEO pattern

Each service page should use `generateMetadata()` from `lib/seo-config.ts` to produce consistent Open Graph, Twitter Card, and canonical metadata. The `StructuredData` component (`components/structured-data.tsx`) injects JSON-LD into `<head>` and supports `organization`, `website`, `service`, and `breadcrumb` types. The `BreadcrumbSeo` component handles breadcrumb structured data on inner pages.

### Middleware (`website-alencar/middleware.ts`)

Controls the "coming soon" gate. In production (`VERCEL_ENV === 'production'`), `/coming-soon` is redirected to `/`. Static assets, `/_next/*`, `/api`, and common file extensions bypass the middleware entirely.

### Deployment

Deployed on Vercel, region `gru1` (São Paulo). `vercel.json` sets security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`) and a URL rewrite from `/servicos/suporte` → `/servicos/sac`.

## Contribution workflow

Branch naming requires the Jira task ID:
- `feature/JIRA-123-feature-name`
- `bugfix/JIRA-456-fix-name`
- `hotfix/JIRA-789-critical-fix`

Commit messages follow Conventional Commits with the Jira ID in scope:
```
feat(JIRA-123): adicionar autenticação com JWT
fix(JIRA-456): corrigir erro de validação no formulário
```

PRs target `dev` or `main`. Link with `Fixes JIRA-XXX` in the PR body. Technical documentation lives in [Confluence](https://alencar-consultorias.atlassian.net/wiki/spaces/tsaas/overview).
