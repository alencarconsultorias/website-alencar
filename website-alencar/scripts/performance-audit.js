#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🚀 Auditoria de Performance - Alencar Consultorias\n')

// Verificar otimizações implementadas
const checks = [
  {
    name: 'Next.js Image Optimization',
    check: () => {
      const nextConfig = path.join(process.cwd(), 'next.config.js')
      if (fs.existsSync(nextConfig)) {
        const content = fs.readFileSync(nextConfig, 'utf8')
        return content.includes('images:') && content.includes('formats:')
      }
      return false
    }
  },
  {
    name: 'Lazy Loading Components',
    check: () => {
      const appDir = path.join(process.cwd(), 'app')
      const pageFile = path.join(appDir, 'page.tsx')
      if (fs.existsSync(pageFile)) {
        const content = fs.readFileSync(pageFile, 'utf8')
        return content.includes('lazy(') && content.includes('Suspense')
      }
      return false
    }
  },
  {
    name: 'Service Worker',
    check: () => {
      const swFile = path.join(process.cwd(), 'public', 'sw.js')
      return fs.existsSync(swFile)
    }
  },
  {
    name: 'Resource Preloading',
    check: () => {
      const preloaderFile = path.join(process.cwd(), 'components', 'resource-preloader.tsx')
      return fs.existsSync(preloaderFile)
    }
  },
  {
    name: 'CSS Optimizations',
    check: () => {
      const globalCss = path.join(process.cwd(), 'app', 'globals.css')
      if (fs.existsSync(globalCss)) {
        const content = fs.readFileSync(globalCss, 'utf8')
        return content.includes('font-display: swap') && content.includes('will-change')
      }
      return false
    }
  },
  {
    name: 'Bundle Splitting',
    check: () => {
      const nextConfig = path.join(process.cwd(), 'next.config.js')
      if (fs.existsSync(nextConfig)) {
        const content = fs.readFileSync(nextConfig, 'utf8')
        return content.includes('splitChunks')
      }
      return false
    }
  }
]

// Executar verificações
let passedChecks = 0
checks.forEach(check => {
  const passed = check.check()
  const status = passed ? '✅' : '❌'
  console.log(`${status} ${check.name}`)
  if (passed) passedChecks++
})

// Calcular score
const score = Math.round((passedChecks / checks.length) * 100)
console.log(`\n📊 Score de Performance: ${score}%`)

// Recomendações baseadas no score
if (score >= 90) {
  console.log('🎉 Excelente! Sua aplicação está bem otimizada.')
} else if (score >= 70) {
  console.log('👍 Boa otimização! Algumas melhorias ainda podem ser feitas.')
} else if (score >= 50) {
  console.log('⚠️  Performance moderada. Considere implementar mais otimizações.')
} else {
  console.log('🔴 Performance precisa de atenção. Implemente as otimizações faltantes.')
}

// Sugestões adicionais
console.log('\n💡 Sugestões adicionais:')
console.log('- Execute `npm run build` para verificar o tamanho do bundle')
console.log('- Use Lighthouse para auditoria completa de performance')
console.log('- Monitore Core Web Vitals em produção')
console.log('- Considere implementar Critical CSS para above-the-fold')
console.log('- Otimize imagens para formatos modernos (WebP, AVIF)')

// Verificar tamanhos de arquivos críticos
console.log('\n📁 Análise de Arquivos:')

const criticalFiles = [
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'components/hero-section.tsx'
]

criticalFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file)
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    const sizeKB = (stats.size / 1024).toFixed(2)
    const status = stats.size > 50000 ? '⚠️ ' : '✅ '
    console.log(`${status}${file}: ${sizeKB}KB`)
  }
})

console.log('\n🔧 Para análise detalhada do bundle, execute:')
console.log('node scripts/analyze-bundle.js')

console.log('\n📈 Para monitoramento contínuo:')
console.log('- Configure Web Vitals no Google Analytics')
console.log('- Use Real User Monitoring (RUM)')
console.log('- Implemente alertas de performance')
