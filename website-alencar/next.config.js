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

  // Headers de performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

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

    // Otimizar imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    }

    return config
  },

  // Configurações de build
  swcMinify: true,
  poweredByHeader: false,
  
  // Configurações de runtime
  output: 'standalone',
}

module.exports = nextConfig
