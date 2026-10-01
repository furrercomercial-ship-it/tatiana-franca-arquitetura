import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const FG = 'hsl(30,12%,14%)'
const ACCENT = 'hsl(28,38%,64%)'
const BG = 'hsl(36,25%,97%)'
const WARM = 'hsl(34,28%,92%)'
const MUTED_FG = 'hsl(28,10%,46%)'
const BORDER = 'hsl(34,16%,84%)'
const DARK = 'hsl(30,15%,10%)'

// ── Dados ────────────────────────────────────────────────────────
const projetos = [
  {
    id: 1, titulo: 'Sala Integrada', categoria: 'Salas & Estar',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/portfolio-sala-B3kZcIXK.jpg',
    desc: 'Ambiente integrado com design contemporâneo, unindo sala de estar e jantar em um espaço harmonioso, funcional e cheio de personalidade.',
  },
  {
    id: 2, titulo: 'Jantar & Estar', categoria: 'Salas & Estar',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/portfolio-jantar-DSJFYaat.jpg',
    desc: 'Sala de jantar e estar integradas com materiais nobres e paleta de cores quentes que convidam ao acolhimento.',
  },
  {
    id: 3, titulo: 'Varanda Integrada', categoria: 'Salas & Estar',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/portfolio-varanda-CeshjRUO.jpg',
    desc: 'Varanda integrada à sala, ampliando o espaço e criando uma conexão elegante entre o interior e o exterior.',
  },
  {
    id: 4, titulo: 'Banheiro Rústico', categoria: 'Banheiros',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/portfolio-banheiro-DlhaBJGZ.jpg',
    desc: 'Banheiro com identidade rústica e sofisticada, com texturas naturais e iluminação cuidadosamente pensada.',
  },
  {
    id: 5, titulo: 'Quarto Infantil', categoria: 'Quartos',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/portfolio-quarto-BZqd58up.jpg',
    desc: 'Quarto infantil lúdico e aconchegante, pensado para estimular a criatividade e garantir o conforto da criança.',
  },
  {
    id: 6, titulo: 'Quarto Jovem', categoria: 'Quartos',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/jovem-1-CUxefbXx.jpg',
    desc: 'Quarto projetado para jovens, com design moderno, funcional e cheio de personalidade própria.',
  },
  {
    id: 7, titulo: 'Quarto de Casal', categoria: 'Quartos',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/casal-1-XZgEPgKv.jpg',
    desc: 'Suíte master com atmosfera serena e elegante — o refúgio perfeito para descansar e se renovar.',
  },
  {
    id: 8, titulo: 'Home Office', categoria: 'Escritórios',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/office-1-De9GpEQt.jpg',
    desc: 'Escritório residencial projetado para maximizar a produtividade sem abrir mão da estética e do conforto.',
  },
  {
    id: 9, titulo: 'Consultório', categoria: 'Comercial',
    img: 'https://tatiana-franca-refugio.lovable.app/assets/consultorio-1-ZUcBa1qU.jpg',
    desc: 'Ambiente comercial que transmite profissionalismo e acolhimento, criando uma experiência positiva para os clientes.',
  },
]

const categorias = [
  { nome: 'Salas & Estar',  cover: projetos[0].img },
  { nome: 'Quartos',        cover: projetos[4].img },
  { nome: 'Banheiros',      cover: projetos[3].img },
  { nome: 'Escritórios',    cover: projetos[7].img },
  { nome: 'Comercial',      cover: projetos[8].img },
]

// ── Breadcrumb ───────────────────────────────────────────────────
function Breadcrumb({ parts, onBack, backLabel }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      marginBottom: '3rem', flexWrap: 'wrap',
    }}>
      <button
        onClick={onBack}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', fontWeight: 400,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: ACCENT, background: 'none', border: `1px solid ${BORDER}`,
          padding: '0.45rem 1rem', cursor: 'pointer', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = ACCENT; }}
      >
        ← {backLabel}
      </button>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', color: MUTED_FG, opacity: 0.5 }}>
        {parts.join(' / ')}
      </span>
    </div>
  )
}

// ── Nível 1: Cards de Categorias ────────────────────────────────
function CategoriesView({ onSelect }) {
  const { ref, visible } = useReveal()

  return (
    <div ref={ref} className={`tf-reveal${visible ? ' tf-visible' : ''}`}>
      <div style={{ marginBottom: '4rem' }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', fontWeight: 400,
          letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '1rem',
        }}>Portfólio</p>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, color: FG, marginBottom: '1.25rem',
        }}>
          Projetos que contam <em style={{ fontStyle: 'italic' }}>histórias</em>
        </h2>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', fontWeight: 300,
          lineHeight: 1.75, color: MUTED_FG, maxWidth: '520px',
        }}>
          Cada detalhe traduz o estilo de vida dos nossos clientes em ambientes{' '}
          <strong style={{ fontWeight: 500, color: FG }}>únicos, elegantes e atemporais.</strong>
        </p>
      </div>

      {/* Grid de categorias — 2 grandes + 3 menores */}
      <div className="cat-grid">
        {categorias.map((cat, i) => {
          const count = projetos.filter(p => p.categoria === cat.nome).length
          return (
            <div
              key={cat.nome}
              className={`cat-card cat-card-${i}`}
              onClick={() => onSelect(cat.nome)}
              style={{ height: i < 2 ? '520px' : '380px' }}
            >
              <img
                src={cat.cover}
                alt={cat.nome}
                className="cat-img"
                loading="lazy"
                decoding="async"
              />
              <div className="cat-overlay" />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '2rem 2rem 2.5rem',
              }}>
                <p style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem',
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(245,243,239,0.6)', marginBottom: '0.5rem',
                }}>
                  {count} {count === 1 ? 'projeto' : 'projetos'}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 400,
                  color: '#fff', lineHeight: 1.2, marginBottom: '0.75rem',
                }}>
                  {cat.nome}
                </h3>
                <span className="cat-arrow" style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem',
                  fontWeight: 400, letterSpacing: '0.1em', color: ACCENT,
                  display: 'inline-block',
                }}>
                  Ver projetos →
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Nível 2: Projetos da Categoria ──────────────────────────────
function ProjectsView({ categoria, onBack, onSelect }) {
  const { ref, visible } = useReveal(0.05)
  const lista = projetos.filter(p => p.categoria === categoria)

  return (
    <div>
      <Breadcrumb parts={['Projetos', categoria]} onBack={onBack} backLabel="Categorias" />

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 400, color: FG,
        }}>
          {categoria}
        </h2>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', fontWeight: 300,
          color: MUTED_FG, marginTop: '0.5rem',
        }}>
          {lista.length} {lista.length === 1 ? 'projeto' : 'projetos'}
        </p>
      </div>

      <div
        ref={ref}
        className={`proj-grid tf-reveal${visible ? ' tf-visible' : ''}`}
      >
        {lista.map((p) => (
          <div
            key={p.id}
            className="proj-card"
            onClick={() => onSelect(p)}
          >
            <div style={{ overflow: 'hidden', marginBottom: '0.75rem' }}>
              <img
                src={p.img}
                alt={p.titulo}
                className="proj-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '0.25rem',
            }}>{p.categoria}</p>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.1rem', fontWeight: 400, color: FG,
            }}>{p.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Nível 3: Detalhe do Projeto ──────────────────────────────────
function DetailView({ projeto, onBack, onBackToCategories, whatsapp }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [projeto.id])

  return (
    <div>
      <Breadcrumb
        parts={['Projetos', projeto.categoria, projeto.titulo]}
        onBack={onBack}
        backLabel={projeto.categoria}
      />

      {/* Hero do projeto */}
      <div style={{
        width: '100%', maxHeight: '65vh', overflow: 'hidden', marginBottom: '3rem',
      }}>
        <img
          src={projeto.img}
          alt={projeto.titulo}
          style={{
            width: '100%', maxHeight: '65vh',
            objectFit: 'cover', display: 'block',
            animation: 'tf-fade-in 0.6s ease-out both',
          }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Info */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="detail-inner">
          <div>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', fontWeight: 400,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT, marginBottom: '0.75rem',
            }}>{projeto.categoria}</p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400,
              color: FG, lineHeight: 1.2, marginBottom: '1.5rem',
            }}>{projeto.titulo}</h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 300,
              lineHeight: 1.85, color: MUTED_FG, marginBottom: '2.5rem', maxWidth: '520px',
            }}>{projeto.desc}</p>

            <a
              href={`https://wa.me/${whatsapp}?text=Olá, Tatiana! Tenho interesse no projeto "${projeto.titulo}". Podemos conversar?`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'hsl(30,12%,14%)', backgroundColor: ACCENT,
                padding: '1rem 2rem', textDecoration: 'none', transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'hsl(30,28%,30%)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = ACCENT}
            >
              Tenho interesse neste projeto
            </a>
          </div>

          {/* Galeria placeholder */}
          <div>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', fontWeight: 400,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED_FG,
              marginBottom: '1.25rem', opacity: 0.6,
            }}>Galeria</p>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem',
            }}>
              <img
                src={projeto.img}
                alt={projeto.titulo}
                loading="lazy" decoding="async"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
              />
              {[1, 2, 3].map(n => (
                <div key={n} style={{
                  aspectRatio: '1/1',
                  backgroundColor: WARM,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem',
                    color: MUTED_FG, opacity: 0.5, letterSpacing: '0.1em',
                    textTransform: 'uppercase', textAlign: 'center', padding: '1rem',
                  }}>Em breve</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + voltar */}
        <div style={{
          borderTop: `1px solid ${BORDER}`, marginTop: '5rem', paddingTop: '2.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <button
            onClick={onBack}
            style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', fontWeight: 400,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: MUTED_FG, background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            ← Outros projetos de {projeto.categoria}
          </button>
          <button
            onClick={onBackToCategories}
            style={{
              fontFamily: "'Poppins', sans-serif", fontSize: '0.72rem', fontWeight: 400,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: ACCENT, background: 'none', border: `1px solid ${BORDER}`,
              padding: '0.5rem 1.25rem', cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = ACCENT; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = ACCENT; }}
          >
            Ver todas as categorias
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Componente Principal ─────────────────────────────────────────
export default function Portfolio({ whatsapp = '5565999999999' }) {
  const [view, setView] = useState('categories')
  const [activeCat, setActiveCat] = useState(null)
  const [activeProj, setActiveProj] = useState(null)

  const handleSelectCat = (nome) => {
    setActiveCat(nome)
    setView('projects')
    window.scrollTo({ top: document.getElementById('portfolio')?.offsetTop - 80 || 0, behavior: 'smooth' })
  }

  const handleSelectProj = (projeto) => {
    setActiveProj(projeto)
    setView('detail')
  }

  const handleBackToCategories = () => {
    setView('categories')
    setActiveCat(null)
    setActiveProj(null)
  }

  const handleBackToProjects = () => {
    setView('projects')
    setActiveProj(null)
    window.scrollTo({ top: document.getElementById('portfolio')?.offsetTop - 80 || 0, behavior: 'smooth' })
  }

  return (
    <section
      id="portfolio"
      style={{ backgroundColor: view === 'detail' ? BG : BG, padding: '7rem 2rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {view === 'categories' && (
          <CategoriesView onSelect={handleSelectCat} />
        )}
        {view === 'projects' && (
          <ProjectsView
            categoria={activeCat}
            onBack={handleBackToCategories}
            onSelect={handleSelectProj}
          />
        )}
        {view === 'detail' && (
          <DetailView
            projeto={activeProj}
            onBack={handleBackToProjects}
            onBackToCategories={handleBackToCategories}
            whatsapp={whatsapp}
          />
        )}
      </div>

      <style>{`
        /* Category grid: 2 grandes + 3 menores */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.25rem;
        }
        .cat-card-0, .cat-card-1 { grid-column: span 3; }
        .cat-card-2, .cat-card-3, .cat-card-4 { grid-column: span 2; }

        /* Project grid */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Detail layout */
        .detail-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr !important; }
          .cat-card-0, .cat-card-1,
          .cat-card-2, .cat-card-3, .cat-card-4 {
            grid-column: span 1 !important;
            height: 340px !important;
          }
          .proj-grid { grid-template-columns: 1fr !important; }
          .detail-inner { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cat-card-0, .cat-card-1,
          .cat-card-2, .cat-card-3, .cat-card-4 {
            grid-column: span 1 !important;
          }
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
