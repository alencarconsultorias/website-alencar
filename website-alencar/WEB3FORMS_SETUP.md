# Configuração Web3Forms - Formulário de Contato

## ✅ Sistema Implementado e Funcionando!

O formulário de contato está configurado com Web3Forms, um serviço gratuito que envia emails diretamente para `lucas.lessa@alencarconsultorias.com.br`.

## Como Obter sua Chave de Acesso (OBRIGATÓRIO)

### Passo 1: Criar Chave de Acesso
1. Acesse: https://web3forms.com/
2. Na seção "Create Access Key", insira o email: `lucas.lessa@alencarconsultorias.com.br`
3. Clique em "Create Access Key"
4. Verifique o email e copie a chave gerada

### Passo 2: Configurar a Chave
Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=sua_chave_aqui
```

**Exemplo:**
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abcd1234-5678-90ef-ghij-klmnopqrstuv
```

## ⚡ Vantagens do Web3Forms

- ✅ **Gratuito**: 250 envios por mês
- ✅ **Sem configuração complexa**: Apenas uma chave de acesso
- ✅ **Sem servidor**: Funciona direto do frontend
- ✅ **Entrega garantida**: Powered by Amazon AWS
- ✅ **Anti-spam**: Proteção honeypot incluída
- ✅ **GDPR Compliant**: Não armazena dados

## 🚀 Status Atual

- ✅ Formulário implementado e funcional
- ✅ Validação de campos obrigatórios
- ✅ Estados de loading e feedback
- ✅ Proteção anti-spam
- ✅ Design responsivo
- ⏳ **Aguardando apenas a chave de acesso**

## 📧 Formato do Email que será Enviado

```
De: Website Alencar Consultorias
Para: lucas.lessa@alencarconsultorias.com.br
Assunto: Nova mensagem de [Nome Completo] - Alencar Consultorias

Nome: [Nome Completo]
Email: [email@cliente.com]
Empresa: [Nome da Empresa ou "Não informado"]

Mensagem:
[Mensagem do cliente]
```

## 🔧 Testando o Sistema

1. Obtenha a chave de acesso (passos acima)
2. Configure o `.env.local`
3. Reinicie o servidor: `npm run dev`
4. Teste o formulário no site
5. Verifique o email em `lucas.lessa@alencarconsultorias.com.br`

## 🆘 Solução de Problemas

### Emails não chegam
- Verifique se a chave está correta no `.env.local`
- Confirme se o arquivo `.env.local` está na raiz do projeto
- Reinicie o servidor após alterar variáveis de ambiente
- Verifique a pasta de spam

### Erro "demo-key"
- Significa que a chave não foi configurada
- Siga os passos para obter e configurar a chave real

## 🔒 Segurança

- A chave pode ser pública (prefixo NEXT_PUBLIC_)
- Web3Forms não armazena dados dos formulários
- Emails são enviados diretamente para seu inbox
- Proteção anti-spam automática incluída

---

**🎯 Próximo passo:** Obter a chave de acesso em https://web3forms.com/ usando o email `lucas.lessa@alencarconsultorias.com.br`
