import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Gina & Lucy — Cat-Comedy mit AI-Magic'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            'radial-gradient(circle at 25% 30%, rgba(255,62,138,0.35), transparent 55%), radial-gradient(circle at 75% 70%, rgba(168,85,247,0.30), transparent 55%), #0a0a0a',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '36px',
            color: '#ff3e8a',
            marginBottom: '24px',
            fontWeight: 600,
          }}
        >
          <span>🐾</span>
          <span style={{ color: '#888' }}>ginaandlucy.com</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '110px',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '32px',
          }}
        >
          <div style={{ display: 'flex' }}>
            <span style={{ color: '#a855f7' }}>Gina</span>
            <span style={{ color: '#666', margin: '0 24px' }}>&</span>
            <span style={{ color: '#ff3e8a' }}>Lucy</span>
          </div>
          <div style={{ fontSize: '52px', fontWeight: 700, color: '#ccc', marginTop: '16px' }}>
            Cat-Comedy mit AI-Magic
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '48px',
            fontSize: '32px',
            color: '#aaa',
            fontWeight: 600,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontSize: '44px', fontWeight: 900 }}>22.8K</span>
            <span style={{ fontSize: '22px' }}>Instagram</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontSize: '44px', fontWeight: 900 }}>13.3K</span>
            <span style={{ fontSize: '22px' }}>YouTube</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontSize: '44px', fontWeight: 900 }}>1.48M</span>
            <span style={{ fontSize: '22px' }}>Lifetime Views</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
