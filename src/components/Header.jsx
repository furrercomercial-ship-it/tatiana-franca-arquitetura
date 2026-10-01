import { useState, useEffect } from 'react'

const BG = 'hsl(36,25%,95%)'
const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const PRIMARY = 'hsl(30,28%,30%)'
const BORDER = 'hsl(34,16%,84%)'

export default function Header({ whatsapp }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Método', href: '#metodo' },
    { label: 'Contato', href: '#contato' },
  ]

  const textColor = scrolled ? FG : 'rgba(245,243,239,0.9)'

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.35s ease',
      backgroundColor: scrolled ? `${BG}F5` : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
      }}>
        {/* Logo com separador */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          textDecoration: 'none',
          color: textColor,
          transition: 'color 0.35s',
        }}>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.15rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
          }}>
            Tatiana França
          </span>
          <span style={{ opacity: 0.4, fontSize: '1rem' }}>|</span>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>
            Arquitetura
          </span>
        </a>

        {/* Nav desktop */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: textColor,
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s, color 0.35s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.8}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'hsl(30,12%,14%)',
              backgroundColor: ACCENT,
              padding: '0.6rem 1.6rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = PRIMARY}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ACCENT}
          >
            Contato
          </a>
        </nav>

        {/* Hamburguer mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: textColor,
          }}
          className="show-mobile"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <path d="M6 6L18 18M6 18L18 6" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: BG,
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          borderTop: `1px solid ${BORDER}`,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: FG,
              textDecoration: 'none',
            }}>
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'hsl(36,25%,96%)',
              backgroundColor: PRIMARY,
              padding: '0.75rem 1.4rem',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
            }}
          >
            WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  )
}
