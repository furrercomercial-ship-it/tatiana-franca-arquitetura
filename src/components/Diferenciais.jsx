import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const MUTED_FG = 'hsl(28,10%,46%)'
const BG = 'hsl(34,28%,92%)'

const items = [
  { titulo: 'Atendimento próximo e personalizado', desc: 'Cada projeto começa com escuta atenta e dedicação exclusiva ao seu estilo de vida.' },
  { titulo: 'Projetos exclusivos e autorais', desc: 'Ambientes com identidade única, pensados para refletir quem você é.' },
  { titulo: 'Soluções inteligentes para conforto e estética', desc: 'Tecnologia e sensibilidade unidas para criar espaços que funcionam e encantam.' },
]

export default function Diferenciais() {
  const { ref, visible } = useReveal()

  return (
    <section style={{ backgroundColor: BG, padding: '7rem 2rem' }}>
      <div
        ref={ref}
        className={`tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', fontWeight: 400,
            letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1.25rem',
          }}>Diferenciais</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, color: FG,
          }}>
            Por que escolher a{' '}
            <em style={{ fontStyle: 'italic' }}>Tatiana França</em>
          </h2>
        </div>

        <div className="dif-grid">
          {items.map(({ titulo, desc }) => (
            <div key={titulo} style={{ textAlign: 'center' }}>
              <div style={{ width: '2.5rem', height: '2px', backgroundColor: ACCENT, margin: '0 auto 1.75rem' }} />
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 400,
                color: ACCENT, lineHeight: 1.35, marginBottom: '1rem',
              }}>{titulo}</h3>
              <p style={{
                fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', fontWeight: 300,
                lineHeight: 1.8, color: MUTED_FG,
              }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dif-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 3rem; }
        @media (max-width: 768px) { .dif-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
