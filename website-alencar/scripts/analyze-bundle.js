#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔍 Analisando bundle do Next.js...\n')

// Instalar @next/bundle-analyzer se não estiver instalado
try {
  require.resolve('@next/bundle-analyzer')
} catch (e) {
  console.log('📦 Instalando @next/bundle-analyzer...')
  execSync('npm install --save-dev @next/bundle-analyzer', { stdio: 'inherit' })
}

// Criar configuração temporária do Next.js com analyzer
const nextConfigPath = path.join(process.cwd(), 'next.config.js')
const nextConfigBackup = path.join(process.cwd(), 'next.config.backup.js')

// Backup da configuração atual
if (fs.existsSync(nextConfigPath)) {
  fs.copyFileSync(nextConfigPath, nextConfigBackup)
}

// Criar configuração com analyzer
const analyzerConfig = `
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compressão
  compress: true,

  // Webpack otimizações
  webpack: (config, { dev, isServer }) => {
    // Otimizações de produção
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Chunk para bibliotecas de UI
          ui: {
            name: 'ui',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|class-variance-authority|clsx|tailwind-merge)[\\/]/,
          },
          // Chunk para React
          react: {
            name: 'react',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          },
          // Chunk para outras bibliotecas
          lib: {
            name: 'lib',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            minChunks: 2,
          },
        },
      }
    }

    return config
  },

  // Configurações de build
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = withBundleAnalyzer(nextConfig)
`

fs.writeFileSync(nextConfigPath, analyzerConfig)

try {
  console.log('🏗️  Fazendo build com análise...')
  execSync('ANALYZE=true npm run build', { stdio: 'inherit' })
  
  console.log('\n✅ Análise completa!')
  console.log('📊 O relatório do bundle foi aberto no seu navegador.')
  console.log('\n📋 Dicas de otimização:')
  console.log('- Verifique chunks grandes e considere code splitting')
  console.log('- Identifique bibliotecas não utilizadas')
  console.log('- Analise imports desnecessários')
  console.log('- Considere lazy loading para componentes pesados')
  
} catch (error) {
  console.error('❌ Erro na análise:', error.message)
} finally {
  // Restaurar configuração original
  if (fs.existsSync(nextConfigBackup)) {
    fs.copyFileSync(nextConfigBackup, nextConfigPath)
    fs.unlinkSync(nextConfigBackup)
  }
}
