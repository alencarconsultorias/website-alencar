# Configuração do Sistema de Email

Este documento explica como configurar o sistema de envio de emails do formulário de contato.

## Pré-requisitos

O formulário de contato está configurado para enviar emails para `lucas.lessa@alencarconsultorias.com.br` usando EmailJS (recomendado) ou Gmail como provedor de email.

## Opção 1: EmailJS (Recomendado - Mais Fácil)

O EmailJS é um serviço que permite enviar emails diretamente do frontend sem necessidade de servidor backend.

### Passo 1: Criar conta no EmailJS
1. Acesse [emailjs.com](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

### Passo 2: Configurar o Serviço de Email
1. No dashboard do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" (ou outro provedor)
4. Conecte sua conta Gmail
5. Anote o **Service ID** gerado

### Passo 3: Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:
   ```
   Subject: Nova mensagem de {{from_name}} - Alencar Consultorias
   
   To: lucas.lessa@alencarconsultorias.com.br
   
   Content:
   Nome: {{from_name}}
   Email: {{from_email}}
   Empresa: {{company}}
   
   Mensagem:
   {{message}}
   ```
4. Anote o **Template ID** gerado

### Passo 4: Obter Public Key
1. Vá para "Account" > "General"
2. Copie sua **Public Key**

### Passo 5: Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com:

```env
# Configurações EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_igsoh1e
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

**Exemplo com seus dados:**
```env
# Configurações EmailJS - Alencar Consultorias
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_igsoh1e
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123def456
```

## Opção 2: Gmail/SMTP (Mais Complexo)

### 1. Criar arquivo `.env.local`

Crie um arquivo chamado `.env.local` na raiz do projeto (`website-alencar/`) com o seguinte conteúdo:

```env
# Configurações de Email
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-aplicativo
```

### 2. Configurar Gmail para Envio de Emails

Para usar o Gmail como provedor de email, siga estes passos:

#### Passo 1: Ativar Autenticação de 2 Fatores
1. Acesse [myaccount.google.com](https://myaccount.google.com)
2. Vá para "Segurança"
3. Ative a "Verificação em duas etapas"

#### Passo 2: Gerar Senha de Aplicativo
1. Ainda na seção "Segurança", procure por "Senhas de app"
2. Clique em "Senhas de app"
3. Selecione "Email" como aplicativo
4. Selecione "Outro (nome personalizado)" como dispositivo
5. Digite "Website Alencar" como nome
6. Clique em "Gerar"
7. Copie a senha gerada (16 caracteres)

#### Passo 3: Configurar as Variáveis
No arquivo `.env.local`, substitua:
- `seu-email@gmail.com` pelo email que será usado para enviar as mensagens
- `sua-senha-de-aplicativo` pela senha de 16 caracteres gerada no passo anterior

### 3. Exemplo de Configuração

```env
# Exemplo de configuração
EMAIL_USER=contato@alencarconsultorias.com.br
EMAIL_PASS=abcd efgh ijkl mnop
```

## Alternativas ao Gmail

Se preferir usar outro provedor de email, você pode modificar o arquivo `/app/api/contact/route.ts`:

### Para Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

### Para SMTP Personalizado:
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.seudominio.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
```

## Testando o Sistema

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse o site em `http://localhost:3000`

3. Navegue até a seção de contato

4. Preencha e envie o formulário

5. Verifique se o email foi recebido em `lucas.lessa@alencarconsultorias.com.br`

## Solução de Problemas

### Erro: "Invalid login"
- Verifique se a autenticação de 2 fatores está ativada
- Confirme se está usando a senha de aplicativo (não a senha normal da conta)

### Erro: "Connection timeout"
- Verifique sua conexão com a internet
- Confirme se as configurações SMTP estão corretas

### Emails não chegam
- Verifique a pasta de spam
- Confirme se o email de destino está correto
- Teste com um email diferente

## Segurança

⚠️ **IMPORTANTE**: 
- Nunca commite o arquivo `.env.local` no Git
- O arquivo já está incluído no `.gitignore`
- Use sempre senhas de aplicativo, nunca a senha principal da conta
- Mantenha as credenciais seguras e não as compartilhe

## Suporte

Se encontrar problemas na configuração, verifique:
1. Se todas as variáveis de ambiente estão definidas corretamente
2. Se o arquivo `.env.local` está na raiz correta do projeto
3. Se reiniciou o servidor após alterar as variáveis de ambiente
