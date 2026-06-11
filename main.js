<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Emilia Nieto — Psicóloga. Acompañamiento terapéutico individual en línea. Agenda tu sesión inicial hoy." />
  <title>Emilia Nieto · Psicóloga</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css?v=20260609" />
</head>
<body>

  <!-- NAV -->
  <nav class="nav" id="nav" aria-label="Navegación principal">
    <div class="nav-inner">
      <a href="#inicio" class="nav-logo" aria-label="Inicio">
        <span class="nav-logo-name">Emilia Nieto</span>
        <span class="nav-logo-title">Psicóloga</span>
      </a>
      <ul class="nav-links" role="list">
        <li><a href="#sobre-mi" class="nav-link">Sobre mí</a></li>
        <li><a href="#servicios" class="nav-link">Servicios</a></li>
        <li><a href="#testimonios" class="nav-link">Testimonios</a></li>
        <li><a href="#agenda" class="nav-cta">Agendar cita</a></li>
      </ul>
      <button class="nav-burger" id="nav-burger" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
      <a href="#sobre-mi" class="nav-mobile-link">Sobre mí</a>
      <a href="#servicios" class="nav-mobile-link">Servicios</a>
      <a href="#testimonios" class="nav-mobile-link">Testimonios</a>
      <a href="#agenda" class="nav-mobile-link nav-mobile-cta">Agendar cita</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio" aria-label="Presentación">
    <div class="hero-mesh" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-kicker">Psicología en línea</p>
        <h1 class="hero-title">
          Un espacio donde<br>
          <em>sanar</em> tiene<br>
          nombre propio.
        </h1>
        <p class="hero-sub">Acompañamiento terapéutico individual, empático y basado en evidencia. Tu bienestar emocional es posible.</p>
        <div class="hero-actions">
          <a href="#agenda" class="btn btn-primary">Agendar mi primera cita</a>
          <a href="#sobre-mi" class="btn btn-ghost">Conocer más →</a>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-img-wrap">
          <img src="assets/img/portrait.jpg" alt="Emilia Nieto, psicóloga" class="hero-portrait" loading="eager" />
          <div class="hero-img-deco"></div>
        </div>
        <div class="hero-badge">
          <span class="hero-badge-icon">✦</span>
          <span class="hero-badge-text">+5 años<br>de experiencia</span>
        </div>
      </div>
    </div>
    <div class="hero-scroll-hint" aria-hidden="true">
      <span class="hero-scroll-line"></span>
      <span class="hero-scroll-label">Explorar</span>
    </div>
  </section>

  <!-- MANIFESTO STRIP -->
  <div class="strip" aria-hidden="true">
    <div class="strip-track">
      <span>Escucha activa</span>
      <span class="strip-dot">◆</span>
      <span>Empatía genuina</span>
      <span class="strip-dot">◆</span>
      <span>Crecimiento personal</span>
      <span class="strip-dot">◆</span>
      <span>Terapia basada en evidencia</span>
      <span class="strip-dot">◆</span>
      <span>Espacio seguro</span>
      <span class="strip-dot">◆</span>
      <span>Sin juicios</span>
      <span class="strip-dot">◆</span>
      <span>Transformación real</span>
      <span class="strip-dot">◆</span>
      <span>Escucha activa</span>
      <span class="strip-dot">◆</span>
      <span>Empatía genuina</span>
      <span class="strip-dot">◆</span>
      <span>Crecimiento personal</span>
      <span class="strip-dot">◆</span>
      <span>Terapia basada en evidencia</span>
      <span class="strip-dot">◆</span>
      <span>Espacio seguro</span>
      <span class="strip-dot">◆</span>
    </div>
  </div>

  <!-- SOBRE MÍ -->
  <section class="about" id="sobre-mi" aria-label="Sobre la psicóloga">
    <div class="about-inner">
      <div class="about-img-col reveal" data-reveal>
        <div class="about-carousel" aria-label="Galería de consultorio">
          <div class="about-carousel-track">
            <!-- Slide 1: Sesión en línea -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#e8f0e9 0%,#d4e8d4 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <rect x="18" y="28" width="134" height="92" rx="10" stroke="#5c7c5f" stroke-width="2.2" fill="rgba(92,124,95,0.07)"/>
                <line x1="85" y1="28" x2="85" y2="120" stroke="#5c7c5f" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.4"/>
                <circle cx="50" cy="62" r="14" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.1)"/>
                <path d="M28 100 Q28 82 50 82 Q72 82 72 100" stroke="#5c7c5f" stroke-width="2" fill="none" stroke-linecap="round"/>
                <circle cx="120" cy="62" r="14" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.1)"/>
                <path d="M98 100 Q98 82 120 82 Q142 82 142 100" stroke="#c9a87a" stroke-width="2" fill="none" stroke-linecap="round"/>
                <path d="M8 122 L28 122 L34 132 L136 132 L142 122 L162 122" stroke="#5c7c5f" stroke-width="2" stroke-linecap="round"/>
                <rect x="70" y="119" width="30" height="5" rx="2.5" fill="#5c7c5f" opacity="0.25"/>
              </svg>
              <span class="carousel-illus-label">Sesión en línea</span>
              <span class="carousel-illus-sub">Desde la comodidad de tu espacio, con total privacidad</span>
            </div>
            <!-- Slide 2: Dos sillones -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#f4ede3 0%,#ede5d8 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <rect x="12" y="82" width="56" height="42" rx="7" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.08)"/>
                <rect x="7" y="66" width="66" height="20" rx="7" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.08)"/>
                <rect x="7" y="82" width="13" height="42" rx="5" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.05)"/>
                <rect x="60" y="82" width="13" height="42" rx="5" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.05)"/>
                <line x1="18" y1="124" x2="18" y2="146" stroke="#5c7c5f" stroke-width="2" stroke-linecap="round"/>
                <line x1="62" y1="124" x2="62" y2="146" stroke="#5c7c5f" stroke-width="2" stroke-linecap="round"/>
                <rect x="102" y="82" width="56" height="42" rx="7" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.08)"/>
                <rect x="97" y="66" width="66" height="20" rx="7" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.08)"/>
                <rect x="97" y="82" width="13" height="42" rx="5" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.05)"/>
                <rect x="150" y="82" width="13" height="42" rx="5" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.05)"/>
                <line x1="108" y1="124" x2="108" y2="146" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="152" y1="124" x2="152" y2="146" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="7" y1="146" x2="163" y2="146" stroke="#5c7c5f" stroke-width="1.5" stroke-linecap="round" opacity="0.2"/>
                <path d="M78 87 C78 82 84 79 85 83 C86 79 92 82 92 87 C92 92 85 98 85 98 C85 98 78 92 78 87Z" fill="#c9a87a" opacity="0.7"/>
              </svg>
              <span class="carousel-illus-label">Un espacio para conversar</span>
              <span class="carousel-illus-sub">Frente a frente, sin prisa, sin juicios</span>
            </div>
            <!-- Slide 3: Escritorio con notas y pañuelos -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#f0ece4 0%,#e8e0d4 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <rect x="18" y="38" width="78" height="102" rx="7" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.06)"/>
                <circle cx="37" cy="38" r="5" stroke="#5c7c5f" stroke-width="1.8" fill="none"/>
                <circle cx="57" cy="38" r="5" stroke="#5c7c5f" stroke-width="1.8" fill="none"/>
                <circle cx="77" cy="38" r="5" stroke="#5c7c5f" stroke-width="1.8" fill="none"/>
                <line x1="30" y1="62" x2="82" y2="62" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round" opacity="0.45"/>
                <line x1="30" y1="76" x2="82" y2="76" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round" opacity="0.45"/>
                <line x1="30" y1="90" x2="72" y2="90" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round" opacity="0.45"/>
                <line x1="30" y1="104" x2="78" y2="104" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round" opacity="0.45"/>
                <rect x="96" y="38" width="12" height="72" rx="4" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.12)" transform="rotate(18 102 74)"/>
                <path d="M104 103 L108 116 L112 103" stroke="#c9a87a" stroke-width="1.8" fill="none" transform="rotate(18 108 110)" stroke-linecap="round"/>
                <rect x="118" y="84" width="42" height="50" rx="6" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.07)"/>
                <path d="M126 84 Q139 71 152 84" stroke="#5c7c5f" stroke-width="2" fill="rgba(255,255,255,0.4)" stroke-linecap="round"/>
                <path d="M131 84 Q139 74 147 84" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
                <line x1="8" y1="140" x2="162" y2="140" stroke="#5c7c5f" stroke-width="1.5" opacity="0.15" stroke-linecap="round"/>
              </svg>
              <span class="carousel-illus-label">Tus notas, tu proceso</span>
              <span class="carousel-illus-sub">Todo lo que sientas tiene un lugar aquí</span>
            </div>
            <!-- Slide 4: Espacio seguro -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#e8f0e9 0%,#f4ede3 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <path d="M85 22 L152 72 L152 155 L18 155 L18 72 Z" stroke="#5c7c5f" stroke-width="2.2" fill="rgba(92,124,95,0.07)"/>
                <path d="M85 16 L160 68 L10 68 Z" stroke="#5c7c5f" stroke-width="2.2" fill="rgba(92,124,95,0.12)"/>
                <rect x="68" y="112" width="34" height="43" rx="17" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.1)"/>
                <circle cx="85" cy="93" r="6" fill="#c9a87a" opacity="0.4"/>
                <path d="M68 75 C68 67 78 63 85 70 C92 63 102 67 102 75 C102 83 85 94 85 94 C85 94 68 83 68 75Z" fill="#c9a87a" opacity="0.65"/>
              </svg>
              <span class="carousel-illus-label">Tu espacio seguro</span>
              <span class="carousel-illus-sub">Confidencialidad y cuidado en cada sesión</span>
            </div>
            <!-- Slide 5a: Ansiedad -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#f4ede3 0%,#ede0d0 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <!-- Brain outline -->
                <path d="M85 30 C70 30 55 40 52 55 C45 55 35 62 38 74 C32 78 30 88 36 95 C34 105 40 115 52 117 C56 128 68 135 80 133 C84 138 90 138 94 133 C106 135 118 128 122 117 C134 115 140 105 138 95 C144 88 142 78 136 74 C139 62 129 55 122 55 C119 40 104 30 85 30Z" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.1)"/>
                <!-- Brain divider -->
                <line x1="85" y1="32" x2="85" y2="132" stroke="#c9a87a" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
                <!-- Wave lines (thoughts) -->
                <path d="M55 70 Q62 64 69 70 Q76 76 83 70" stroke="#5c7c5f" stroke-width="2" fill="none" stroke-linecap="round"/>
                <path d="M55 85 Q62 79 69 85 Q76 91 83 85" stroke="#5c7c5f" stroke-width="2" fill="none" stroke-linecap="round"/>
                <path d="M55 100 Q62 94 69 100 Q76 106 83 100" stroke="#5c7c5f" stroke-width="2" fill="none" stroke-linecap="round"/>
                <circle cx="115" cy="82" r="18" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.08)"/>
                <path d="M109 82 L115 88 L122 76" stroke="#5c7c5f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="carousel-illus-label">Manejo de la ansiedad</span>
              <span class="carousel-illus-sub">Herramientas para calmar la mente y recuperar el control</span>
            </div>
            <!-- Slide 5b: Depresión -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#e8f0e9 0%,#ddeade 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <!-- Sun -->
                <circle cx="85" cy="72" r="22" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.12)"/>
                <line x1="85" y1="35" x2="85" y2="25" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="85" y1="109" x2="85" y2="119" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="48" y1="72" x2="38" y2="72" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="122" y1="72" x2="132" y2="72" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="59" y1="46" x2="52" y2="39" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="111" y1="98" x2="118" y2="105" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="111" y1="46" x2="118" y2="39" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <line x1="59" y1="98" x2="52" y2="105" stroke="#c9a87a" stroke-width="2" stroke-linecap="round"/>
                <!-- Person rising up -->
                <circle cx="85" cy="72" r="8" fill="#c9a87a" opacity="0.5"/>
                <!-- Ground & person silhouette -->
                <line x1="40" y1="145" x2="130" y2="145" stroke="#5c7c5f" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
                <circle cx="85" cy="128" r="7" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.1)"/>
                <path d="M85 135 L85 145" stroke="#5c7c5f" stroke-width="2" stroke-linecap="round"/>
                <path d="M75 140 L85 136 L95 140" stroke="#5c7c5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="carousel-illus-label">Superar la depresión</span>
              <span class="carousel-illus-sub">Recupera la luz y el sentido a tu propio ritmo</span>
            </div>
            <!-- Slide 5c: Regulación emocional -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#ede5d8 0%,#e8ddd0 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <!-- Waves representing emotions -->
                <path d="M20 95 Q35 75 50 95 Q65 115 80 95 Q95 75 110 95 Q125 115 140 95 Q152 78 160 88" stroke="#5c7c5f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                <path d="M20 112 Q35 98 50 112 Q65 126 80 112 Q95 98 110 112 Q125 126 140 112 Q152 100 160 106" stroke="#5c7c5f" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.5"/>
                <path d="M20 78 Q35 62 50 78 Q65 94 80 78 Q95 62 110 78 Q125 94 140 78 Q152 65 160 72" stroke="#c9a87a" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
                <!-- Anchor / balance symbol -->
                <circle cx="85" cy="50" r="16" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.08)"/>
                <line x1="85" y1="34" x2="85" y2="66" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="69" y1="50" x2="101" y2="50" stroke="#5c7c5f" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M72 42 Q69 34 75 30" stroke="#5c7c5f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
                <path d="M98 42 Q101 34 95 30" stroke="#5c7c5f" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              </svg>
              <span class="carousel-illus-label">Regulación emocional</span>
              <span class="carousel-illus-sub">Aprende a navegar tus emociones sin ser arrastrada por ellas</span>
            </div>
            <!-- Slide 5 original: Crecimiento -->
            <div class="about-carousel-slide about-carousel-slide--illus" style="background:linear-gradient(135deg,#d4e8d4 0%,#e8f0e9 100%)">
              <svg width="170" height="170" viewBox="0 0 170 170" fill="none" aria-hidden="true">
                <path d="M62 128 L72 158 L98 158 L108 128 Z" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.14)"/>
                <rect x="56" y="120" width="58" height="12" rx="5" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.18)"/>
                <path d="M85 120 Q85 95 85 58" stroke="#5c7c5f" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M85 102 Q62 90 56 68 Q78 72 85 92" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.14)" stroke-linejoin="round"/>
                <path d="M85 86 Q108 72 116 50 Q94 55 85 74" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.14)" stroke-linejoin="round"/>
                <path d="M85 68 Q64 54 60 34 Q80 40 85 60" stroke="#5c7c5f" stroke-width="2" fill="rgba(92,124,95,0.12)" stroke-linejoin="round"/>
                <circle cx="85" cy="46" r="13" stroke="#c9a87a" stroke-width="2" fill="rgba(201,168,122,0.12)"/>
                <circle cx="85" cy="46" r="5" fill="#c9a87a" opacity="0.5"/>
              </svg>
              <span class="carousel-illus-label">Crecimiento personal</span>
              <span class="carousel-illus-sub">A tu ritmo, paso a paso, con acompañamiento</span>
            </div>
          </div>
          <button class="about-carousel-btn about-carousel-btn--prev" aria-label="Anterior">&#8592;</button>
          <button class="about-carousel-btn about-carousel-btn--next" aria-label="Siguiente">&#8594;</button>
          <div class="about-carousel-dots">
            <span class="about-carousel-dot is-active"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
            <span class="about-carousel-dot"></span>
          </div>
        </div>
        <div class="about-quote-card glass-card">
          <p class="about-quote-text">«Cada persona lleva dentro la semilla de su propia transformación.»</p>
        </div>
      </div>
      <div class="about-text-col">
        <p class="section-kicker reveal" data-reveal>Sobre mí</p>
        <h2 class="section-title reveal" data-reveal>
          Hola, soy <em>Emilia</em>.<br>
          Te acompaño en tu camino.
        </h2>
        <p class="about-para reveal" data-reveal>Soy Emilia Nieto, psicóloga con más de 5 años de experiencia acompañando a personas en sus procesos de cambio y crecimiento personal.</p>
        <p class="about-para reveal" data-reveal>Mi enfoque es la Terapia Cognitivo-Conductual, especializada en depresión y ansiedad en adultos. Trabajo contigo para identificar patrones de pensamiento y desarrollar herramientas concretas que transformen tu día a día.</p>
        <p class="about-para reveal" data-reveal>Creo profundamente en la capacidad de cada ser humano para transformarse. Mi consultorio es un lugar seguro, sin juicios, donde la honestidad y la empatía son la base de todo proceso.</p>
        <div class="about-credentials reveal" data-reveal>
          <div class="credential-item">
            <span class="credential-icon">🎓</span>
            <div>
              <strong>Licenciatura en Psicología</strong>
              <span>Universidad Internacional del Ecuador</span>
            </div>
          </div>
          <div class="credential-item">
            <span class="credential-icon">🧠</span>
            <div>
              <strong>Especialista en Depresión y Ansiedad</strong>
              <span>Adultos · Terapia Cognitivo-Conductual</span>
            </div>
          </div>
          <div class="credential-item">
            <span class="credential-icon">✦</span>
            <div>
              <strong>+5 años de práctica</strong>
              <span>Consulta privada en línea</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICIOS -->
  <section class="services" id="servicios" aria-label="Tipos de sesión">
    <div class="services-inner">
      <div class="services-header">
        <p class="section-kicker reveal" data-reveal>Servicios</p>
        <h2 class="section-title reveal" data-reveal>
          Elige cómo<br><em>empezamos</em>.
        </h2>
        <p class="services-sub reveal" data-reveal>Dos modalidades pensadas para acompañarte desde el primer momento hasta donde quieras llegar.</p>
      </div>
      <div class="services-grid">

        <!-- SESIÓN INICIAL -->
        <article class="service-card glass-card reveal" data-reveal data-service="sesion-inicial">
          <div class="service-tag">Primer paso</div>
          <div class="service-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="18" stroke="var(--accent)" stroke-width="1.5" fill="none"/>
              <path d="M20 12v8l5 3" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="service-name">Sesión Inicial</h3>
          <p class="service-duration">60 minutos</p>
          <p class="service-desc">Un primer encuentro para conocernos, explorar tu situación actual y definir juntos los objetivos del proceso terapéutico. Sin compromisos, con total confidencialidad.</p>
          <ul class="service-includes" role="list">
            <li>Evaluación psicológica inicial</li>
            <li>Escucha activa y sin juicios</li>
            <li>Orientación sobre el proceso terapéutico</li>
            <li>Definición de objetivos personalizados</li>
          </ul>
          <div class="service-footer">
            <a href="#agenda" class="btn btn-service" data-select-service="sesion-inicial">Agendar →</a>
          </div>
        </article>

        <!-- SESIÓN INDIVIDUAL -->
        <article class="service-card glass-card service-card--featured reveal" data-reveal data-service="sesion-individual">
          <div class="service-tag service-tag--featured">Proceso continuo</div>
          <div class="service-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M32 20c0 6.627-5.373 12-12 12S8 26.627 8 20" stroke="var(--accent-2)" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="20" cy="20" r="3" fill="var(--accent)"/>
            </svg>
          </div>
          <h3 class="service-name">Sesión Individual</h3>
          <p class="service-duration">50 minutos</p>
          <p class="service-desc">Sesiones de seguimiento diseñadas para trabajar en profundidad sobre tus objetivos, desarrollar herramientas y consolidar los cambios que deseas en tu vida.</p>
          <ul class="service-includes" role="list">
            <li>Trabajo terapéutico personalizado</li>
            <li>Técnicas cognitivo-conductuales</li>
            <li>Herramientas de regulación emocional</li>
            <li>Seguimiento continuo de avances</li>
          </ul>
          <div class="service-footer">
            <a href="#agenda" class="btn btn-service btn-service--featured" data-select-service="sesion-individual">Agendar →</a>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats" aria-label="Estadísticas de práctica">
    <div class="stats-inner">
      <div class="stat-item reveal" data-reveal>
        <span class="stat-num" data-count-to="5">0</span><span class="stat-plus">+</span>
        <p class="stat-label">Años de experiencia</p>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat-item reveal" data-reveal>
        <span class="stat-num" data-count-to="500">0</span><span class="stat-plus">+</span>
        <p class="stat-label">Personas acompañadas</p>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat-item reveal" data-reveal>
        <span class="stat-num" data-count-to="98">0</span><span class="stat-plus">%</span>
        <p class="stat-label">De satisfacción reportada</p>
      </div>
      <div class="stat-divider" aria-hidden="true"></div>
      <div class="stat-item reveal" data-reveal>
        <span class="stat-num" data-count-to="3">0</span>
        <p class="stat-label">Formaciones especializadas</p>
      </div>
    </div>
  </section>

  <!-- TESTIMONIOS -->
  <section class="testimonials" id="testimonios" aria-label="Testimonios de pacientes">
    <div class="testimonials-inner">
      <p class="section-kicker reveal" data-reveal>Testimonios</p>
      <h2 class="section-title reveal" data-reveal>Lo que dicen<br><em>quienes confían</em> en mí.</h2>
      <div class="testimonials-grid">
        <article class="testimonial-card glass-card reveal" data-reveal>
          <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
          <blockquote class="testimonial-quote">«Emilia tiene una capacidad única para hacer que te sientas comprendida desde el primer momento. El proceso terapéutico cambió mi vida.»</blockquote>
          <footer class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">A</div>
            <div>
              <strong>Ana G.</strong>
              <span>Paciente desde 2022</span>
            </div>
          </footer>
        </article>
        <article class="testimonial-card glass-card reveal" data-reveal>
          <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
          <blockquote class="testimonial-quote">«Encontré en la consulta de Emilia el espacio que necesitaba para trabajar mis miedos sin sentirme juzgado. Muy recomendable para cualquiera que quiera avanzar.»</blockquote>
          <footer class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">C</div>
            <div>
              <strong>Carlos M.</strong>
              <span>Paciente desde 2023</span>
            </div>
          </footer>
        </article>
        <article class="testimonial-card glass-card reveal" data-reveal>
          <div class="testimonial-stars" aria-label="5 estrellas">★★★★★</div>
          <blockquote class="testimonial-quote">«Profesional, empática y muy preparada. Me ayudó a superar una etapa muy difícil con herramientas que uso hasta hoy en mi día a día.»</blockquote>
          <footer class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">S</div>
            <div>
              <strong>Sofía R.</strong>
              <span>Paciente desde 2021</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>

  <!-- AGENDA / BOOKING -->
  <section class="booking" id="agenda" aria-label="Agendar cita">
    <div class="booking-mesh" aria-hidden="true"></div>
    <div class="booking-inner booking-inner--calendly">
      <div class="booking-header">
        <p class="section-kicker reveal" data-reveal>Agenda tu cita</p>
        <h2 class="section-title section-title--light reveal" data-reveal>
          El primer paso<br><em>siempre es el más difícil.</em>
        </h2>
        <p class="booking-sub reveal" data-reveal>Elige el día y la hora que mejor te convenga. La confirmación llega de inmediato a tu correo.</p>
      </div>

      <div class="booking-calendly-wrap reveal" data-reveal>
        <!-- Calendly inline widget -->
        <!-- Cal.com inline widget -->
        <div id="cal-embed" style="min-width:320px; width:100%;"></div>
      </div>

      <!-- Contact aside -->
      <div class="booking-contact reveal" data-reveal>
        <div class="contact-item">
          <span class="contact-icon" aria-hidden="true">📞</span>
          <div>
            <strong>Teléfono</strong>
            <a href="tel:+34612345678">+34 612 345 678</a>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon" aria-hidden="true">✉️</span>
          <div>
            <strong>Email</strong>
            <a href="mailto:consulta@dralaura.es">consulta@dralaura.es</a>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon" aria-hidden="true">🕐</span>
          <div>
            <strong>Horario</strong>
            <span>Lunes a Viernes · 9:00 – 20:00</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-name">Emilia Nieto</span>
        <span class="footer-tagline">Psicóloga · En línea</span>
      </div>
      <nav class="footer-nav" aria-label="Navegación de pie de página">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#agenda">Agendar</a>
      </nav>
      <p class="footer-legal">© 2026 Emilia Nieto · Psicóloga Colegiada · Nº M-45678</p>
    </div>
  </footer>

  <script defer src="lib/gsap.min.js"></script>
  <script defer src="lib/ScrollTrigger.min.js"></script>
  <script defer src="lib/manifest.js"></script>
  <script defer src="main.js?v=20260609"></script>
  <script>
    (function (C, A, L) {
      var p = function (a, ar) { a.q.push(ar); };
      var d = C.document;
      C.Cal = C.Cal || function () { var cal = C.Cal; var ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { var api = function () { p(api, arguments); }; var namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = api; p(api, ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", { origin: "https://cal.com" });
    Cal("inline", {
      elementOrSelector: "#cal-embed",
      calLink: "emilia-nieto-hocuyz",
      layout: "month_view"
    });
    Cal("ui", {
      styles: { branding: { brandColor: "#5c7c5f" } },
      hideEventTypeDetails: false
    });
  </script>
</body>
</html>
