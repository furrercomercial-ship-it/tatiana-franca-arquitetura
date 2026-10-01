import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const BG = 'hsl(36,25%,97%)'
const CARD = 'hsl(34,28%,92%)'
const MUTED_FG = 'hsl(28,10%,46%)'

const depoimentos = [
  {
    texto: 'Transformou nosso apartamento exatamente no que sonhávamos. Hoje temos um lar que representa quem somos.',
    nome: 'Ana e Carlos', cidade: 'Cuiabá — MT',
  },
  {
    texto: 'O processo foi leve, organizado e o resultado superou todas as expectativas. Cada detalhe foi pensado com muito cuidado.',
    nome: 'Juliana M.', cidade: 'Cuiabá — MT',
  },
]

export default function Depoimentos() {
  const { ref, visible } = useReveal()

  return (
    <section style={{ backgroundColor: BG, padding: '7rem 2rem' }}>
      <div
        ref={ref}
        className={`tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', fontWeight: 400,
            letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1rem',
          }}>O que dizem</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: FG,
          }}>
            Histórias de quem <em style={{ fontStyle: 'italic' }}>transformou</em> seu espaço
          </h2>
        </div>

        <div className="depoimentos-grid">
          {depoimentos.map(({ texto, nome, cidade }) => (
            <div key={nome} style={{ backgroundColor: CARD, padding: '3rem' }}>
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" style={{ marginBottom: '1.5rem' }}>
                <path d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.76 0.08 11.52 0L12.96 2.4C10.48 3.04 8.6 4.32 7.32 6.24C6.12 8.08 5.56 10.16 5.64 12.48H11.52V24H0ZM19.2 24V14.4C19.2 10.56 20.16 7.28 22.08 4.56C24.08 1.84 26.96 0.08 30.72 0L32.16 2.4C29.68 3.04 27.8 4.32 26.52 6.24C25.32 8.08 24.76 10.16 24.84 12.48H30.72V24H19.2Z" fill={ACCENT} fillOpacity="0.4"/>
              </svg>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 400,
                lineHeight: 1.65, color: FG, marginBottom: '2rem', fontStyle: 'italic',
              }}>{texto}</p>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', fontWeight: 500, color: FG }}>{nome}</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: ACCENT }}>{cidade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .depoimentos-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; }
        @media (max-width: 768px) { .depoimentos-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
