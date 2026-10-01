import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const MUTED_FG = 'hsl(28,10%,46%)'
const BORDER = 'hsl(34,16%,84%)'
const BG = 'hsl(34,28%,92%)'

const etapas = [
  { num: '01', titulo: 'Diagnóstico e briefing', desc: 'Entendimento profundo da sua rotina, necessidades e desejos.' },
  { num: '02', titulo: 'Conceito do projeto', desc: 'Criação de um projeto exclusivo, com identidade e soluções inteligentes.' },
  { num: '03', titulo: 'Desenvolvimento técnico', desc: 'Detalhamento completo para execução sem surpresas.' },
  { num: '04', titulo: 'Acompanhamento', desc: 'Suporte em todas as etapas para garantir um resultado impecável.' },
]

export default function Processo() {
  const { ref, visible } = useReveal()

  return (
    <section id="metodo" style={{ backgroundColor: BG, padding: '7rem 2rem' }}>
      <div
        ref={ref}
        className={`processo-container tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="processo-inner">
          {/* Título esquerda */}
          <div style={{ position: 'sticky', top: '8rem' }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', fontWeight: 400,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1rem',
            }}>Como funciona</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400,
              color: FG, lineHeight: 1.25, marginBottom: '1.5rem',
            }}>
              Do sonho à <em style={{ fontStyle: 'italic' }}>realidade</em>
            </h2>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.875rem', fontWeight: 300,
              lineHeight: 1.75, color: MUTED_FG,
            }}>
              Um processo pensado para ser leve, transparente e personalizado do início ao fim.
            </p>
          </div>

          {/* Etapas direita */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {etapas.map(({ num, titulo, desc }, i) => (
              <div key={num} style={{
                display: 'flex', gap: '1.5rem',
                paddingBottom: i < etapas.length - 1 ? '2.5rem' : '0',
                marginBottom: i < etapas.length - 1 ? '2.5rem' : '0',
                borderBottom: i < etapas.length - 1 ? `1px solid ${BORDER}` : 'none',
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.75rem',
                  fontWeight: 400, color: 'rgba(196,161,128,0.45)', lineHeight: 1, minWidth: '3rem',
                }}>{num}</span>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem',
                    fontWeight: 500, color: FG, marginBottom: '0.4rem', lineHeight: 1.3,
                  }}>{titulo}</h3>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', fontWeight: 300,
                    lineHeight: 1.75, color: MUTED_FG,
                  }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .processo-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 768px) {
          .processo-inner { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
