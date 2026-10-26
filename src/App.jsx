import { useState } from 'react'
import { openWhatsAppOrDemo } from './lib/whatsapp'

const IMG = '/ruta-norte/images/ruta-norte'

const NAV_LINKS = [
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Destinos', href: '#destinos' },
  { label: 'Inspiración', href: '#inspiracion' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros' },
]

const EXPERIENCES = [
  {
    id: 'naturaleza',
    title: 'Naturaleza',
    desc: 'Senderos, montañas, acantilados y paisajes que invitan a parar.',
    image: `${IMG}/experiences/naturaleza.svg`,
  },
  {
    id: 'gastronomia',
    title: 'Gastronomía',
    desc: 'Sabores locales, mercados, productores y mesas que cuentan historias.',
    image: `${IMG}/experiences/gastronomia.svg`,
  },
  {
    id: 'aventura',
    title: 'Aventura',
    desc: 'Actividades para salir de la rutina y ver el norte desde otra perspectiva.',
    image: `${IMG}/experiences/aventura.svg`,
  },
  {
    id: 'escapadas',
    title: 'Escapadas',
    desc: 'Una pausa de unos días para desconectar y volver con otra energía.',
    image: `${IMG}/experiences/escapadas.svg`,
  },
]

const DESTINATIONS = [
  {
    id: 'asturias',
    name: 'Asturias',
    desc: 'Verde, salvaje y atlántica.',
    image: `${IMG}/destinations/asturias.svg`,
  },
  {
    id: 'cantabria',
    name: 'Cantabria',
    desc: 'Montaña, costa y pueblos con historia.',
    image: `${IMG}/destinations/cantabria.svg`,
  },
  {
    id: 'pais-vasco',
    name: 'País Vasco',
    desc: 'Mar, gastronomía y cultura.',
    image: `${IMG}/destinations/pais-vasco.svg`,
  },
  {
    id: 'galicia',
    name: 'Galicia',
    desc: 'Atlántico, tradición y paisajes.',
    image: `${IMG}/destinations/galicia.svg`,
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Cuéntanos',
    desc: 'Dinos qué buscas, cuándo quieres viajar y qué tipo de experiencia te apetece.',
  },
  {
    num: '02',
    title: 'Diseñamos',
    desc: 'Te proponemos una experiencia adaptada a tu viaje.',
  },
  {
    num: '03',
    title: 'Disfruta',
    desc: 'Tú solo tienes que venir y vivir el norte.',
  },
]

const TRUST_ITEMS = [
  'Experiencias seleccionadas',
  'Atención cercana',
  'Propuestas personalizadas',
  'Turismo local',
]

const GALLERY = [
  { src: `${IMG}/destinations/asturias.svg`, alt: 'Paisaje atlántico de Asturias' },
  { src: `${IMG}/experiences/naturaleza.svg`, alt: 'Sendero entre montañas del norte' },
  { src: `${IMG}/destinations/galicia.svg`, alt: 'Costa de Galicia al atardecer' },
  { src: `${IMG}/experiences/gastronomia.svg`, alt: 'Producto local del norte de España' },
  { src: `${IMG}/destinations/cantabria.svg`, alt: 'Montaña y costa de Cantabria' },
  { src: `${IMG}/destinations/pais-vasco.svg`, alt: 'Mar y montaña del País Vasco' },
]

const FAQ_ITEMS = [
  {
    q: '¿Qué tipo de experiencias ofrece Ruta Norte?',
    a: 'Naturaleza, gastronomía, aventura, cultura y escapadas por el norte de España.',
  },
  {
    q: '¿Puedo crear una experiencia personalizada?',
    a: 'Sí. Puedes contactarnos para contarnos qué tienes en mente y estudiar una propuesta.',
  },
  {
    q: '¿Trabajáis con grupos?',
    a: 'Las experiencias pueden adaptarse a diferentes tipos de viajeros y grupos.',
  },
  {
    q: '¿Puedo consultar una experiencia antes de reservar?',
    a: 'Sí. Puedes escribirnos por WhatsApp para conocer todos los detalles.',
  },
]

const JOURNAL = [
  {
    id: 'journal-01',
    category: 'Inspiración',
    date: '10 de octubre de 2026',
    title: '5 lugares del norte que merece la pena descubrir',
    excerpt:
      'Una selección de rincones del norte de España para inspirar tu próxima escapada, lejos de lo más conocido.',
    image: `${IMG}/destinations/asturias.svg`,
  },
  {
    id: 'journal-02',
    category: 'Naturaleza',
    date: '26 de septiembre de 2026',
    title: 'Qué hacer cuando el mar y la montaña están a pocos kilómetros',
    excerpt:
      'En el norte no siempre hay que elegir: así se combinan costa y altura en el mismo día.',
    image: `${IMG}/destinations/cantabria.svg`,
  },
  {
    id: 'journal-03',
    category: 'Gastronomía',
    date: '12 de septiembre de 2026',
    title: 'Una guía para descubrir el norte a través de su gastronomía',
    excerpt:
      'Mercados, productores y mesas locales: la mejor puerta de entrada a cada territorio.',
    image: `${IMG}/experiences/gastronomia.svg`,
  },
]

const CASES = [
  {
    tag: 'Escenario real de una salida',
    title: 'Salida a la Costa Verde en noviembre',
    desc: 'Ocho horas previstas, lluvia desde primera hora y un grupo de seis personas. El guía rehízo el itinerario: bosque en lugar de acantilado, mesa cubierta al final del día. La salida se mantuvo; el plan cambió.',
  },
  {
    tag: 'Condiciones de la garantía',
    title: 'Qué pasa si una ruta no se puede hacer',
    desc: 'Si el tiempo o el estado del terreno no acompañan, la experiencia se reprograma o se propone una alternativa dentro de la misma escapada. Quien responde por WhatsApp el mismo día es quien te guía.',
  },
  {
    tag: 'El proceso, paso a paso',
    title: 'Cómo se reserva y qué pasa el día de la salida',
    desc: 'Se habla por WhatsApp, se cierra la propuesta por escrito y el día de la salida se encuentra al grupo en el punto acordado. Qué incluye y qué no queda claro antes de salir, no después.',
  },
]

const LEVEL_PANEL = {
  level: 'CUSTOM Premium',
  price: '449 € + 49 €/mes',
  includes:
    '11 secciones · todo lo de Pro (hero, sobre nosotros, servicios, confianza, ubicación, sección ampliada, galería, FAQ) · blog con 3 entradas · casos de éxito · footer con aviso legal · hosting · responsive · SEO básico · 3 rondas de cambios',
  excludes:
    'calendario editorial y gestión de redes → PAQUETE FULL (199 €/mes) · formulario → extra, a presupuestar',
}

const FORM_TYPES = ['Naturaleza', 'Gastronomía', 'Aventura', 'Escapadas', 'Personalizado']
const FORM_GROUP_SIZES = ['1-2', '3-5', '6-10', '10+']

function waMsg(text) {
  return `Hola, estoy visitando la demo Ruta Norte. ${text}`
}

function useWhatsApp() {
  const [toast, setToast] = useState(false)

  function send(message) {
    const ok = openWhatsAppOrDemo(message)
    if (!ok) {
      setToast(true)
      window.setTimeout(() => setToast(false), 4500)
    }
  }

  const Toast = toast ? (
    <div className="toast" role="status">
      <span className="toast-label">Estado demo</span>
      <p>
        <strong>Esto es una demo de portafolio.</strong> El WhatsApp de Ruta
        Norte no está conectado: así se abriría la conversación con tu mensaje
        predefinido.
      </p>
    </div>
  ) : null

  return { send, Toast }
}

function AnnouncementBar() {
  return (
    <div className="announce">
      Experiencias locales · Naturaleza · Gastronomía · Descubre el norte todo el año
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#inicio" className="logo">
          Ruta Norte
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="btn btn-dark btn-sm nav-cta-mobile" onClick={() => setOpen(false)}>
              Planea tu escapada
            </a>
          </li>
        </ul>
        <a href="#contacto" className="btn btn-dark btn-sm nav-cta-desktop">
          Planea tu escapada
        </a>
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function SectionHead({ label, title, desc, dark = false }) {
  return (
    <div className="section-head">
      {label && <span className="eyebrow">{label}</span>}
      <h2 className={`section-title${dark ? ' on-dark' : ''}`}>{title}</h2>
      {desc && <p className="section-desc">{desc}</p>}
    </div>
  )
}

function Hero({ onWhatsApp }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-img" src={`${IMG}/hero.svg`} alt="Paisaje del norte de España entre montañas y mar" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="badge badge-demo">Proyecto conceptual · Demo CAT CODE</span>
        <h1 className="hero-title">El norte se vive.</h1>
        <p className="hero-sub">
          Descubre paisajes, sabores y experiencias que no aparecen en las rutas
          de siempre.
        </p>
        <div className="hero-actions">
          <a href="#experiencias" className="btn btn-light">
            Explorar experiencias
          </a>
          <button
            type="button"
            className="btn btn-wa"
            onClick={() => onWhatsApp(waMsg('Tengo una idea de escapada y me gustaría hablarla con vosotros.'))}
          >
            Hablar por WhatsApp
          </button>
        </div>
        <p className="hero-labels">Escapadas · Naturaleza · Gastronomía · Cultura</p>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="section" id="sobre-nosotros">
      <div className="intro-grid">
        <div>
          <SectionHead
            label="Introducción"
            title="No se trata solo de viajar."
            desc="Se trata de descubrir un lugar desde dentro."
          />
          <p className="body-text">
            En Ruta Norte diseñamos experiencias para quienes quieren conocer el
            norte de España de una forma diferente: caminando sus paisajes,
            probando su gastronomía y descubriendo lugares que merecen ser
            recordados.
          </p>
          <a href="#destinos" className="text-link">
            Descubrir Ruta Norte →
          </a>
        </div>
        <figure className="about-figure">
          <img src={`${IMG}/about.svg`} alt="Persona caminando por un paisaje del norte de España" />
          <figcaption>
            <h3 className="about-title">Viajar más despacio. Descubrir más.</h3>
            <p className="body-text">
              Ruta Norte nace de una idea sencilla: algunos lugares se disfrutan
              más cuando tienes tiempo para mirarlos. Por eso buscamos
              experiencias que conecten paisaje, personas, gastronomía y cultura
              local.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Experiences({ onWhatsApp }) {
  return (
    <section className="section band-sand" id="experiencias">
      <div className="wrap">
        <SectionHead
          label="Experiencias"
          title="Elige cómo quieres vivirlo."
          desc="Cuatro maneras de acercarte al norte, cada una con su propio ritmo."
        />
        <div className="exp-grid">
          {EXPERIENCES.map((exp, i) => (
            <article className="exp-card" key={exp.id}>
              <img src={exp.image} alt={exp.title} className="exp-img" loading="lazy" />
              <div className="exp-body">
                <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-desc">{exp.desc}</p>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => onWhatsApp(waMsg(`Me interesa la experiencia de ${exp.title.toLowerCase()}.`))}
                >
                  Explorar →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <SectionHead
        label="Cómo funciona"
        title="Tú eliges el momento. Nosotros pensamos el resto."
      />
      <div className="steps-grid">
        {STEPS.map((s) => (
          <div className="step" key={s.num}>
            <span className="step-num">{s.num}</span>
            <h3 className="step-title">{s.title}</h3>
            <p className="body-text">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="trust">
        <h3 className="trust-title">Hecho para viajar sin complicaciones.</h3>
        <ul className="trust-list">
          {TRUST_ITEMS.map((t) => (
            <li key={t}>
              <span className="trust-check" aria-hidden="true">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Destinations() {
  return (
    <section className="section band-dark" id="destinos">
      <div className="wrap">
        <SectionHead
          label="Destinos"
          title="El norte tiene muchas caras."
          desc="Cuatro territorios. Cientos de historias."
          dark
        />
        <div className="dest-grid">
          {DESTINATIONS.map((d) => (
            <article className="dest-card" key={d.id}>
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-body">
                <h3 className="dest-name">{d.name}</h3>
                <p className="dest-desc">{d.desc}</p>
                <span className="dest-arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Featured({ onWhatsApp }) {
  return (
    <section className="section" id="destacada">
      <div className="featured">
        <img
          className="featured-img"
          src={`${IMG}/featured.svg`}
          alt="Paisaje entre montañas y mar en el norte de España"
          loading="lazy"
        />
        <div className="featured-body">
          <span className="eyebrow">Experiencia destacada</span>
          <h2 className="section-title">Entre montañas y mar.</h2>
          <p className="body-text">
            Una escapada para descubrir algunos de los paisajes más especiales
            del norte, combinar naturaleza, gastronomía y pequeños pueblos y
            dejar espacio para lo inesperado.
          </p>
          <ul className="featured-tags">
            <li>3 días</li>
            <li>Naturaleza</li>
            <li>Gastronomía</li>
            <li>Grupos pequeños</li>
          </ul>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => onWhatsApp(waMsg('Quiero saber más sobre la experiencia destacada "Entre montañas y mar".'))}
          >
            Quiero saber más
          </button>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section band-sand" id="galeria">
      <div className="wrap">
        <SectionHead
          label="Galería"
          title="El norte, en imágenes."
          desc="Destinos, paisajes y producto local: lo que verás en cada escapada."
        />
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <figure className="gallery-item" key={g.src + g.alt}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <SectionHead label="FAQ" title="Preguntas frecuentes" />
      <div className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <details className="faq-item" key={item.q}>
            <summary className="faq-q">{item.q}</summary>
            <p className="faq-a">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function Journal({ onWhatsApp }) {
  return (
    <section className="section band-dark" id="inspiracion">
      <div className="wrap">
        <SectionHead
          label="Inspiración · Journal"
          title="Ideas para tu próxima escapada."
          desc="Tres lecturas cortas para empezar a imaginar el viaje."
          dark
        />
        <div className="journal-grid">
          {JOURNAL.map((post) => (
            <article className="journal-card" key={post.id}>
              <img src={post.image} alt={post.title} loading="lazy" />
              <div className="journal-body">
                <div className="journal-meta">
                  <span className="journal-cat">{post.category}</span>
                  <time>{post.date}</time>
                </div>
                <h3 className="journal-title">{post.title}</h3>
                <p className="journal-excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="journal-cta">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => onWhatsApp(waMsg('Me interesa el journal de Ruta Norte y las historias del norte.'))}
          >
            Ver todas las historias
          </button>
        </div>
      </div>
    </section>
  )
}

function SuccessCases() {
  return (
    <section className="section" id="casos">
      <SectionHead
        label="Casos de éxito"
        title="El trabajo, a la vista."
        desc="Sin testimonios ni valoraciones inventadas: el proceso real de una experiencia con Ruta Norte."
      />
      <div className="cases-grid">
        {CASES.map((c) => (
          <article className="case-card" key={c.title}>
            <span className="case-tag">{c.tag}</span>
            <h3 className="case-title">{c.title}</h3>
            <p className="body-text">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExtraForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section band-sand" id="contacto">
      <div className="wrap">
        <div className="extra-head">
          <span className="badge badge-dark">Extra · a presupuestar</span>
          <SectionHead
            label="Formulario de contacto"
            title="¿Prefieres contárnoslo por escrito?"
            desc="El contacto principal de esta landing es WhatsApp. El formulario es un extra que se presupuesta aparte."
          />
        </div>
        <p className="demo-note" role="note">
          <strong>Demostración.</strong> Este formulario no envía nada a ningún
          sitio.
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-nombre">Nombre</label>
              <input id="f-nombre" name="nombre" type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="f-email">Email</label>
              <input id="f-email" name="email" type="email" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="f-tipo">Tipo de experiencia</label>
              <select id="f-tipo" name="tipo" defaultValue="" required>
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {FORM_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="f-personas">Personas</label>
              <select id="f-personas" name="personas" defaultValue="" required>
                <option value="" disabled>
                  Nº de personas
                </option>
                {FORM_GROUP_SIZES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="f-mensaje">Mensaje</label>
            <textarea
              id="f-mensaje"
              name="mensaje"
              rows={4}
              placeholder="Cuéntanos fechas aproximadas, tipo de grupo y qué te apetece vivir..."
            />
          </div>
          <button type="submit" className="btn btn-dark" disabled={sent}>
            {sent ? 'Solicitud registrada (demo)' : 'Enviar solicitud'}
          </button>
          {sent && (
            <p className="form-success" role="status">
              <strong>Esto es una demostración.</strong> Así se vería la
              confirmación si el formulario estuviera activo. No hemos recibido
              nada.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer({ onWhatsApp }) {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand-col">
          <span className="footer-brand">Ruta Norte</span>
          <p className="footer-claim">El norte se vive.</p>
          <nav className="footer-nav" aria-label="Navegación del pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <button type="button" className="btn btn-wa btn-sm" onClick={() => onWhatsApp(waMsg('Hola, me gustaría planear una escapada al norte.'))}>
            Hablar por WhatsApp
          </button>
        </div>

        <div className="footer-legal">
          <h3 className="footer-col-title">Aviso legal</h3>
          <p className="legal-slot">
            Hueco reservado para el aviso legal (titular, NIF/CIF y domicilio
            social).{' '}
            <strong>Contenido del cliente:</strong> se facilita por el titular
            del proyecto conforme a la Ley 34/2002. Pendiente de redactar.
          </p>
        </div>

        <div className="footer-level">
          <div className="level-head">
            <span className="level-name">{LEVEL_PANEL.level}</span>
            <span className="level-price">{LEVEL_PANEL.price}</span>
          </div>
          <p className="level-text">
            <strong>Incluye:</strong> {LEVEL_PANEL.includes}
          </p>
          <p className="level-text level-muted">
            <strong>No incluye:</strong> {LEVEL_PANEL.excludes}
          </p>
          <div className="level-links">
            <a href="https://cat-code-hdz.github.io/casa-nora/" target="_blank" rel="noopener noreferrer">
              ¿Ver el escalón anterior? → Casa Nora
            </a>
            <a href="https://cat-code-hdz.github.io/estudio-lumen/" target="_blank" rel="noopener noreferrer">
              ¿Ver el siguiente nivel? → Estudio Lumen
            </a>
          </div>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 Ruta Norte</span>
        <span className="badge badge-demo">Proyecto conceptual · Diseñado por CAT CODE</span>
      </div>
    </footer>
  )
}

function WhatsAppFab({ onWhatsApp }) {
  return (
    <div className="fab-wrap">
      <span className="fab-label">Escríbenos</span>
      <button
        type="button"
        className="fab"
        aria-label="Hablar por WhatsApp"
        onClick={() => onWhatsApp(waMsg('Hola, tengo una idea de viaje al norte.'))}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" width="26" height="26" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.55 1.764.846 2.806.846 3.182 0 5.768-2.587 5.768-5.766.001-3.182-2.585-5.629-5.768-5.629zm3.42 8.167c-.145.405-.838.774-1.171.823-.334.05-.758.077-2.348-.544-1.905-.744-3.134-2.693-3.23-2.821-.095-.129-.769-1.023-.769-1.95 0-.928.486-1.385.66-1.575.174-.19.38-.238.508-.238.127 0 .253.002.365.008.117.005.274-.045.428.327.16.386.548 1.336.595 1.433.048.097.08.21.016.337-.064.127-.096.206-.191.317-.095.111-.2.248-.286.333-.095.095-.195.198-.084.388.111.19.493.813 1.058 1.317.728.648 1.341.85 1.531.945.19.096.302.08.413-.048.112-.127.477-.555.604-.746.127-.19.254-.159.429-.095.175.064 1.112.524 1.303.62.19.095.317.143.365.222.048.08.048.46-.097.865z" />
        </svg>
      </button>
    </div>
  )
}

export default function App() {
  const { send, Toast } = useWhatsApp()

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero onWhatsApp={send} />
        <Intro />
        <Experiences onWhatsApp={send} />
        <HowItWorks />
        <Destinations />
        <Featured onWhatsApp={send} />
        <Gallery />
        <Faq />
        <Journal onWhatsApp={send} />
        <SuccessCases />
        <ExtraForm />
      </main>
      <Footer onWhatsApp={send} />
      <WhatsAppFab onWhatsApp={send} />
      {Toast}
    </>
  )
}
