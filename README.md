# website-alencar

## 🌐 Executando o Next.js
```bash
# rodando localhost 
cd website-alencar 
npm run dev

# rodando em producao 
npm build 
npm start
```

## 🚀 Comportamento em ambientes Vercel
- **Production**: todo tráfego é reescrito para `/coming-soon` via `middleware.ts`.
- **Preview/Development**: o site oficial carrega normalmente.

### Testar a página "Em breve" localmente
Use a flag a seguir ao iniciar o servidor para simular o modo Production:
```bash
# macOS/Linux
NEXT_PUBLIC_FORCE_COMING_SOON=true npm run dev

# ou
FORCE_COMING_SOON=true npm run dev
```

### Exceções
- Recursos internos do Next (`/_next/*`), `api`, `images/`, `favicon.ico`, `robots.txt`, `sitemap.xml` e arquivos estáticos (css, js, imagens, fontes) não são reescritos.

O controle está no arquivo `website-alencar/middleware.ts`.

## 📚 Confluence  
Acesse o hub da empresa para identificar documentaçōes tecnicas do projeto [Hub no Confluence](https://alencar-consultorias.atlassian.net/wiki/company-hub)

## 📋 Changelog
Acesse o historico de versoes e seus detalhamentos das releases deste projeto: **[CHANGELOG.md](CHANGELOG.md)**

## 🚩 Contribuindo
Consulte o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para instruções.

## ❤️ Código de Conduta
Ao interagir, siga nosso [Code of Conduct](CODE_OF_CONDUCT.md).

⚠️ Este projeto está licenciado sob uma Licença Proprietária. Para mais detalhes, consulte o arquivo [Clique aqui](LICENSE.txt).