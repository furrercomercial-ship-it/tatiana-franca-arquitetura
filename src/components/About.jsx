import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const MUTED_FG = 'hsl(28,10%,46%)'
const BORDER = 'hsl(34,16%,84%)'
const BG = 'hsl(34,28%,92%)'

const teua = [
  { letra: 'T', palavra: 'Tecnologia', desc: 'que viabiliza' },
  { letra: 'E', palavra: 'Energia', desc: 'que harmoniza' },
  { letra: 'U', palavra: 'Universo', desc: 'que sustenta' },
  { letra: 'Á', palavra: 'Ambientes', desc: 'que acolhem' },
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="sobre" style={{ backgroundColor: BG, padding: '7rem 2rem' }}>
      <div
        ref={ref}
        className={`about-grid tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="about-inner">
          {/* Foto */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: 'hsl(35,22%,92%)' }}>
              <img
                src="https://tatiana-franca-refugio.lovable.app/assets/tatiana-portrait-BPcI9xDL.jpg"
                alt="Tatiana França - Arquiteta"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem',
              width: '60%', height: '60%', border: `1px solid ${BORDER}`, zIndex: -1,
            }} />
          </div>

          {/* Texto */}
          <div>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', fontWeight: 400,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1.25rem',
            }}>Sobre a arquiteta</p>

            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, lineHeight: 1.25,
              color: FG, marginBottom: '1.5rem',
            }}>
              Cada espaço deve refletir{' '}
              <em style={{ fontStyle: 'italic' }}>a essência de quem habita.</em>
            </h2>

            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 300,
              lineHeight: 1.85, color: MUTED_FG, marginBottom: '1.5rem',
            }}>
              Sensibilidade, técnica e um olhar apurado para criar ambientes{' '}
              <strong style={{ fontWeight: 500, color: FG }}>sofisticados, funcionais e acolhedores.</strong>
            </p>

            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 300,
              lineHeight: 1.85, color: MUTED_FG, marginBottom: '2.5rem',
            }}>
              Uma arquitetura que <strong style={{ fontWeight: 500, color: FG }}>cuida da terra</strong> e{' '}
              <strong style={{ fontWeight: 500, color: FG }}>acolhe quem habita.</strong> Transformar espaços com sentido.
            </p>

            <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: '2rem' }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1rem', fontWeight: 500,
                letterSpacing: '0.15em', color: ACCENT, marginBottom: '1.25rem',
              }}>Arquitetura TEUÁ</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {teua.map(({ letra, palavra, desc }) => (
                  <div key={letra} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{
                      fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem',
                      fontWeight: 500, color: BORDER, lineHeight: 1, minWidth: '1.5rem',
                    }}>{letra}</span>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', fontWeight: 500, color: FG }}>{palavra}</p>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: ACCENT }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
