// Script para obter chave do Web3Forms automaticamente
// Execute: node get-web3forms-key.js

async function getWeb3FormsKey() {
  try {
    console.log('🔑 Obtendo chave do Web3Forms...')
    
    const response = await fetch('https://web3forms.com/api/create-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'lucas.lessa@alencarconsultorias.com.br',
        name: 'Alencar Consultorias Website'
      })
    })

    if (response.ok) {
      const result = await response.json()
      console.log('✅ Chave obtida com sucesso!')
      console.log('📧 Verifique o email lucas.lessa@alencarconsultorias.com.br')
      console.log('🔑 Chave:', result.access_key)
      console.log('\n📝 Adicione ao arquivo .env.local:')
      console.log(`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=${result.access_key}`)
    } else {
      console.log('⚠️  Erro ao obter chave. Crie manualmente em https://web3forms.com/')
      console.log('📧 Use o email: lucas.lessa@alencarconsultorias.com.br')
    }
  } catch (error) {
    console.log('⚠️  Erro de conexão. Crie manualmente em https://web3forms.com/')
    console.log('📧 Use o email: lucas.lessa@alencarconsultorias.com.br')
    console.log('📋 Siga as instruções em WEB3FORMS_SETUP.md')
  }
}

getWeb3FormsKey()
