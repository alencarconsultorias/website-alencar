import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Alencar Consultorias - Transformação Digital'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#D4AF37',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '24px',
            }}
          >
            <span style={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>AC</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#1a1a1a',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Alencar Consultorias
            </h1>
            <p
              style={{
                fontSize: '24px',
                color: '#666',
                margin: 0,
                marginTop: '8px',
              }}
            >
              Transformação Digital e Tecnologia
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '28px',
            color: '#333',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.
        </p>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
