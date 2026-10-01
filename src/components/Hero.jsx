const ACCENT = 'hsl(28,38%,64%)'

function getAnims() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return { wrapper: {}, anim: () => ({}) }

  const small = window.matchMedia('(max-width: 768px)').matches
  const revealDelay = small ? 0.6 : 1.1
  const textBase    = small ? 0.9 : 1.5
  const textStep    = small ? 0.15 : 0.2

  return {
    bgZoom: `tf-bg-zoom 3s ease-out ${revealDelay}s both`,
    anim: (i) => ({
      animation: `tf-hero-up 1.0s cubic-bezier(0.22, 1, 0.36, 1) ${(textBase + i * textStep).toFixed(2)}s both`,
    }),
  }
}

export default function Hero({ whatsapp }) {
  const { bgZoom, anim } = getAnims()

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Clip-path reveal wrapper */}
      <div className="hero-reveal-wrapper" style={{ position: 'absolute', inset: 0 }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://tatiana-franca-refugio.lovable.app/assets/hero-interior-CU5Lo8cG.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: bgZoom,
        }} />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(20,14,8,0.52)' }} />
      </div>

      {/* Text content */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '9rem 2rem 5rem',
        width: '100%',
      }}>
        <div style={{ maxWidth: '680px' }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.68rem',
            fontWeight: 400,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(245,243,239,0.75)',
            marginBottom: '1.5rem',
            ...anim(0),
          }}>
            Tatiana França Arquitetura
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: '1.5rem',
            ...anim(1),
          }}>
            Sua casa como{' '}
            <em style={{ fontStyle: 'italic', color: ACCENT }}>refúgio</em>{' '}
            de bem-estar
          </h1>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.95rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'rgba(245,243,239,0.8)',
            marginBottom: '2.5rem',
            maxWidth: '480px',
            ...anim(2),
          }}>
            Arquitetura de interiores autoral em Cuiabá —{' '}
            <strong style={{ fontWeight: 500, color: '#fff' }}>estética, funcionalidade</strong>{' '}
            e sensações que acolhem.
          </p>

          <div style={anim(3)}>
            <a
              href={`https://wa.me/${whatsapp}?text=Olá! Gostaria de agendar um atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'hsl(30,12%,14%)',
                backgroundColor: ACCENT,
                padding: '1rem 2.75rem',
                textDecoration: 'none',
                transition: 'background-color 0.25s, color 0.25s',
                border: `1px solid ${ACCENT}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = ACCENT
                e.currentTarget.style.color = 'hsl(30,12%,14%)'
              }}
            >
              Agendar atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
