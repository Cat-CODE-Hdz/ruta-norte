import { useState } from 'react'

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBD0-1offX7g45Pp9XQ0ereGh6MHQ8rZEXEuT2VATD422xcCbOEkQ5wp2e79yPpMZNKFHu3WdalrgjuExdbd7fqhvjAoSjRhm6jSXV3xhdC0rzNiBeE44D4ZKFYN0UdIvTRk0lKKWRdZl9QEBWVBK9mBWddUr_mW5JiduUWuuqrsl-sfuzmQ0H3ZI-G-2-qkr9eqlAniCEMBCK7O66hbxyzWV-YKHdoPzU_rj6IzFiLNbnsQSm5xM6N'

const experiences = [
  {
    id: 1,
    tag: 'Senderismo',
    name: 'Costa de Acantilados',
    desc: 'Recorre los imponentes acantilados del litoral vasco con vistas al Cantábrico. Un sendero que combina mar, viento y naturaleza en estado puro.',
    distance: '12km',
    duration: '4-5h',
    difficulty: 'Media',
  },
  {
    id: 2,
    tag: 'Naturaleza',
    name: 'Bosque de Otzarreta',
    desc: 'Adéntrate en el bosque de hayas retorcidas más fascinante del País Vasco. Un paisaje que parece sacado de un cuento.',
    distance: '5km',
    duration: '1.5h',
    difficulty: 'Fácil',
  },
  {
    id: 3,
    tag: 'Cultural',
    name: 'Pueblitos del Mar',
    desc: 'Descubre los pescadores aldeanos costeros desde Getaria hasta Mundaka. Arquitectura, gastronomía y tradición marinera.',
    distance: '45km',
    duration: 'Día',
    difficulty: 'Fácil',
  },
]

const routeSteps = [
  { from: 'Bilbao', to: 'Getaria' },
  { from: 'Getaria', to: 'Zarautz' },
  { from: 'Zarautz', to: 'Deba' },
  { from: 'Deba', to: 'Mundaka' },
]

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#ruta', label: 'La Ruta' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">Ruta Norte</a>
          <ul className={`nav-links${mobileOpen ? ' open' : ''}`}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto">
                <button className="nav-cta" onClick={() => setMobileOpen(false)}>
                  Reservar
                </button>
              </a>
            </li>
          </ul>
          <button
            className="nav-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">País Vasco · Bilbao</div>
          <h1 className="hero-title">
            Explora la <span className="accent">ruta</span> menos conocida del norte
          </h1>
          <p className="hero-desc">
            Descubre senderos ocultos, acantilados salvajes y pueblitos pesqueros
            en la costa vasca. Aventuras guiadas para quienes buscan lo auténtico.
          </p>
          <div className="hero-buttons">
            <a href="#experiencias" className="btn btn-primary">
              Ver Experiencias
            </a>
            <a href="#ruta" className="btn btn-outline">
              La Ruta
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">15+</div>
              <div className="hero-stat-label">Rutas</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">200km</div>
              <div className="hero-stat-label">Senderos</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">4.9</div>
              <div className="hero-stat-label">Valoración</div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="section" id="experiencias">
        <div className="section-label">Experiencias</div>
        <h2 className="section-title">Vive el norte</h2>
        <p className="section-desc">
          Tres maneras diferentes de explorar la costa vasca, cada una con su propio ritmo.
        </p>
        <div className="experiences-grid">
          {experiences.map((exp) => (
            <article className="experience-card" key={exp.id}>
              <img
                className="experience-img"
                src={heroImg}
                alt={exp.name}
              />
              <div className="experience-body">
                <div className="experience-tag">{exp.tag}</div>
                <h3 className="experience-name">{exp.name}</h3>
                <p className="experience-desc">{exp.desc}</p>
                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <strong>{exp.distance}</strong> distancia
                  </div>
                  <div className="experience-meta-item">
                    <strong>{exp.duration}</strong> duración
                  </div>
                  <div className="experience-meta-item">
                    <strong>{exp.difficulty}</strong> dificultad
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ROUTE */}
      <section className="section" id="ruta">
        <div className="route">
          <div className="route-inner">
            <div className="route-content">
              <div className="section-label">La Ruta</div>
              <h2 className="section-title">200km de costa vasca</h2>
              <p className="section-desc">
                Un recorrido lineal que atraviesa los paisajes más espectaculares del
                litoral, desde la ría del Nervión hasta las rompientes de Mundaka.
              </p>
              <div className="route-steps">
                {routeSteps.map((step, i) => (
                  <div className="route-step" key={i}>
                    <div className="route-step-num">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="route-step-text">
                      {step.from}
                      <span>→ {step.to}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="route-map">
              <img src={heroImg} alt="Mapa de la ruta" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" id="galeria">
        <div className="section-label">Galería</div>
        <h2 className="section-title">Capturando el norte</h2>
        <p className="section-desc">
          Imágenes de las rutas, paisajes y momentos que hacen especial esta experiencia.
        </p>
        <div className="gallery-grid">
          <div className="gallery-item span-2">
            <img src={heroImg} alt="Galería 1" />
          </div>
          <div className="gallery-item">
            <img src={heroImg} alt="Galería 2" />
          </div>
          <div className="gallery-item span-row-2">
            <img src={heroImg} alt="Galería 3" />
          </div>
          <div className="gallery-item">
            <img src={heroImg} alt="Galería 4" />
          </div>
          <div className="gallery-item span-2">
            <img src={heroImg} alt="Galería 5" />
          </div>
          <div className="gallery-item">
            <img src={heroImg} alt="Galería 6" />
          </div>
          <div className="gallery-item">
            <img src={heroImg} alt="Galería 7" />
          </div>
          <div className="gallery-item span-2">
            <img src={heroImg} alt="Galería 8" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contacto">
        <div style={{ textAlign: 'center' }}>
          <div className="section-label">Contacto</div>
          <h2 className="section-title">Reserva tu aventura</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Cuéntanos qué tipo de experiencia buscas y te preparamos algo a medida.
          </p>
        </div>
        <div className="contact-wrapper">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('¡Gracias! Te contactaremos pronto.')
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tipo">Tipo de experiencia</label>
                <select id="tipo" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>Senderismo</option>
                  <option>Naturaleza</option>
                  <option>Cultural</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="personas">Personas</label>
                <select id="personas" required defaultValue="">
                  <option value="" disabled>
                    Nº de personas
                  </option>
                  <option>1-2</option>
                  <option>3-5</option>
                  <option>6-10</option>
                  <option>10+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                placeholder="Cuéntanos sobre tu grupo, fechas preferidas, nivel de experiencia..."
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Ruta Norte</div>
            <div className="footer-info">
              Bilbao, País Vasco
              <br />
              info@rutanorte.eus
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Experiencias</div>
            <ul>
              <li><a href="#experiencias">Senderismo</a></li>
              <li><a href="#experiencias">Naturaleza</a></li>
              <li><a href="#experiencias">Cultural</a></li>
              <li><a href="#experiencias">Personalizado</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Ruta</div>
            <ul>
              <li><a href="#ruta">Bilbao → Getaria</a></li>
              <li><a href="#ruta">Getaria → Zarautz</a></li>
              <li><a href="#ruta">Zarautz → Deba</a></li>
              <li><a href="#ruta">Deba → Mundaka</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Social</div>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">X / Twitter</a></li>
              <li><a href="#">TripAdvisor</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Ruta Norte. Todos los derechos reservados.
        </div>
      </footer>
    </>
  )
}
