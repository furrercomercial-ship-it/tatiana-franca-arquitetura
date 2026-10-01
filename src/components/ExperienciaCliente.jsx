import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const MUTED_FG = 'hsl(28,10%,46%)'
const BG = 'hsl(36,25%,97%)'

export default function ExperienciaCliente() {
  const { ref, visible } = useReveal()

  return (
    <section style={{ backgroundColor: BG, padding: '8rem 2rem', textAlign: 'center' }}>
      <div
        ref={ref}
        className={`tf-reveal${visible ? ' tf-visible' : ''}`}
        style={{ maxWidth: '780px', margin: '0 auto' }}
      >
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', fontWeight: 400,
          letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '2rem',
        }}>
          Experiência do Cliente
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 400, lineHeight: 1.2,
          color: FG, marginBottom: '2rem',
        }}>
          Um processo pensado para você viver o{' '}
          <em style={{ fontStyle: 'italic' }}>melhor</em>{' '}
          da arquitetura
        </h2>

        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 300,
          lineHeight: 1.85, color: MUTED_FG, maxWidth: '600px', margin: '0 auto',
        }}>
          Do primeiro contato à finalização, cada etapa é conduzida com{' '}
          <strong style={{ fontWeight: 500, color: FG }}>
            sensibilidade, organização e atenção absoluta
          </strong>{' '}
          aos detalhes — uma experiência leve, segura e personalizada.
        </p>
      </div>
    </section>
  )
}
