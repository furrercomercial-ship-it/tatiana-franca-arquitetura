const ACCENT = 'hsl(28,38%,64%)'

export default function Footer({ whatsapp }) {
  return (
    <footer style={{ backgroundColor: 'hsl(30,15%,8%)', padding: '2.5rem 2rem' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.1rem',
          fontWeight: 400,
          color: 'rgba(245,243,239,0.65)',
          letterSpacing: '0.02em',
        }}>
          Tatiana França Arquitetura
        </p>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[
            { label: 'Instagram', href: 'https://instagram.com' },
            { label: 'WhatsApp', href: `https://wa.me/${whatsapp}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,243,239,0.45)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = ACCENT}
            onMouseLeave={e => e.target.style.color = 'rgba(245,243,239,0.45)'}
            >
              {label}
            </a>
          ))}
        </div>

        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 300,
          color: 'rgba(245,243,239,0.25)',
        }}>
          © {new Date().getFullYear()} Tatiana França. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
