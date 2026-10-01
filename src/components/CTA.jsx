import { useReveal } from '../hooks/useReveal'

const ACCENT = 'hsl(28,38%,64%)'
const PRIMARY_FG = 'hsl(36,25%,96%)'
const DARK = 'hsl(30,15%,10%)'

export default function CTA({ whatsapp }) {
  const { ref, visible } = useReveal()

  return (
    <section id="contato" style={{ backgroundColor: DARK, padding: '8rem 2rem', textAlign: 'center' }}>
      <div
        ref={ref}
        className={`tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '700px', margin: '0 auto' }}
      >
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', fontWeight: 400,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1.5rem',
        }}>Vamos conversar</p>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 400, lineHeight: 1.25,
          color: PRIMARY_FG, marginBottom: '1.5rem',
        }}>
          Dê o primeiro passo para viver um ambiente{' '}
          <em style={{ fontStyle: 'italic', color: ACCENT }}>
            pensado exclusivamente para você
          </em>
        </h2>

        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 300,
          lineHeight: 1.75, color: 'rgba(245,243,239,0.55)', marginBottom: '3rem',
        }}>
          Entre em contato e descubra como transformar seu espaço em um refúgio de bem-estar.
        </p>

        <a
          href={`https://wa.me/${whatsapp}?text=Olá, Tatiana! Gostaria de conversar sobre meu projeto.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', fontWeight: 500,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'hsl(30,12%,14%)', backgroundColor: ACCENT,
            padding: '1.1rem 3rem', textDecoration: 'none', transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = PRIMARY_FG}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = ACCENT}
        >
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
