import { useState, useEffect } from 'react'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const BG = 'hsl(36,25%,95%)'
const MUTED_FG = 'hsl(28,10%,46%)'

export default function IntroAnimation() {
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGone(true)
      return
    }
    const isSmall = window.matchMedia('(max-width: 768px)').matches
    const exitAt = isSmall ? 700 : 1000
    const goneAt = isSmall ? 1300 : 1700

    const t1 = setTimeout(() => setExiting(true), exitAt)
    const t2 = setTimeout(() => setGone(true), goneAt)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        pointerEvents: 'none',
      }}
    >
      {/* Name — Playfair italic, large */}
      <p style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 400,
        fontStyle: 'italic',
        color: FG,
        letterSpacing: '0.02em',
        lineHeight: 1,
        animation: 'tf-intro-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both',
      }}>
        Tatiana França
      </p>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.58rem',
        fontWeight: 300,
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: MUTED_FG,
        marginTop: '0.85rem',
        animation: 'tf-intro-up 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both',
      }}>
        Arquitetura de Interiores
      </p>

      {/* Gold line growing from center */}
      <div style={{
        width: '72px',
        height: '1px',
        backgroundColor: ACCENT,
        marginTop: '1.75rem',
        transformOrigin: 'center',
        animation: 'tf-intro-line 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both',
      }} />
    </div>
  )
}
