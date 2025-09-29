# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

---

## [Unreleased] - 2025-09-29

### Adicionado 
- Criado novo projeto para o website da Alencar 
- Pagina de em breve online para os clientes
- Submenus no header para serviços (Implantação, Suporte, Venda, Desenvolvimento)
- Página completa de Desenvolvimento de Software (/servicos/desenvolvimento)
- Seções: Hero, Tech Stack, Processo de Desenvolvimento, Tipos de Projetos
- Animações suaves no dropdown do menu de serviços
- **Formulário de contato funcional** com envio real de emails
- Sistema de notificações toast para feedback do usuário
- Validação de campos obrigatórios no formulário
- Proteção anti-spam integrada (honeypot)
- Estados de loading com spinner animado
- Integração com Web3Forms para envio de emails
- Documentação completa do sistema de emails (WEB3FORMS_SETUP.md)
- Script auxiliar para obtenção de chave Web3Forms

### Alterado 
- [WA-42]: Deploy na Vercel com pagina "em breve"
- Header com dropdown animado para submenu de serviços
- Logo agora é clicável e retorna para página inicial
- Removidos emojis da seção de processos de desenvolvimento
- [WA-21]: Atualizado número de telefone para +55 (11) 99567-6003
- [WA-21]: Links das redes sociais atualizados com URLs oficiais da empresa 
- [WA-39] Adicionado pagina de parceiros 
- [WA-33] Atualizado as descriçōes e estrutura da pagina inicial
- **Seção de contato** com informações atualizadas e formulário funcional
- **Layout principal** com sistema de notificações Toaster
- Informações de contato no footer (WhatsApp atualizado)

### Corrigido
- Menu dropdown que desaparecia ao tentar clicar nos itens
- Navegação mobile com submenus indentados 
- [WA-21]: Links das redes sociais no footer (WhatsApp, LinkedIn, Instagram)
- [WA-21]: Ícones interativos das redes sociais com efeitos hover
- **Erro de credenciais** no sistema de envio de emails
- **Formulário de contato** agora envia emails reais para lucas.lessa@alencarconsultorias.com.br

### Dependências
- Adicionado `@emailjs/browser` para integração com EmailJS
- Adicionado `nodemailer` e `@types/nodemailer` como sistema backup
- Adicionado `@web3forms/react` para integração com Web3Forms

### Arquivos Técnicos
- `/app/api/contact/route.ts` - API route para envio de emails (backup)
- `/components/contact-section.tsx` - Componente do formulário funcional
- `/app/layout.tsx` - Layout com sistema de notificações
- `WEB3FORMS_SETUP.md` - Documentação do Web3Forms
- `EMAIL_SETUP.md` - Documentação do sistema de emails
- `CONFIGURAR_CHAVE.md` - Instruções de configuração
- `get-web3forms-key.js` - Script auxiliar
- `.env.local` - Configuração da chave Web3Forms

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