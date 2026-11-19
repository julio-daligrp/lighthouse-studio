import { SiteContent } from '../types';

export const templateContent: SiteContent = {
  brandName: 'LIGHTHOUSE Studio',
  heroKicker: 'Añade el Texto del Título Aquí',
  heroHeadline:
    'Este es un espacio para dar la bienvenida a los visitantes del sitio. Capta su atención con un texto que indique claramente de qué trata el sitio, y añade una imagen o video atractivo.',
  aboutTitle: 'Sobre Nosotros',
  aboutHeadline:
    'Este es el espacio para presentar a los visitantes el negocio o la marca. Explica brevemente quién está detrás, qué hace y qué lo hace único. Comparte sus valores fundamentales y lo que este sitio tiene para ofrecer.',
  servicesTitle: 'Nuestros Servicios',
  services: [
    {
      id: 'srv-1',
      title: 'Título del Servicio',
      description:
        'Describe el servicio y cómo los clientes pueden beneficiarse de él. Es una oportunidad para añadir una breve descripción con detalles relevantes, como precios, duración y cómo reservar.',
      details: ['Sesión de descubrimiento', 'Estrategia a medida', 'Entrega iterativa', 'Soporte continuo'],
    },
    {
      id: 'srv-2',
      title: 'Título del Servicio',
      description:
        'Describe el servicio y cómo los clientes pueden beneficiarse de él. Es una oportunidad para añadir una breve descripción con detalles relevantes, como precios, duración y cómo reservar.',
      details: ['Diseño de experiencia de usuario', 'Prototipos interactivos', 'Sistemas de diseño', 'Guías de marca'],
    },
    {
      id: 'srv-3',
      title: 'Título del Servicio',
      description:
        'Describe el servicio y cómo los clientes pueden beneficiarse de él. Es una oportunidad para añadir una breve descripción con detalles relevantes, como precios, duración y cómo reservar.',
      details: ['Arquitectura frontend', 'Optimización de rendimiento', 'Pruebas multiplataforma', 'Lanzamiento'],
    },
  ],
  projectsTitle: 'Proyectos Recientes',
  projects: [
    {
      id: 'proj-1',
      number: '01',
      title: 'Título del Proyecto 01',
      description: 'Comparte información sobre un proyecto anterior aquí para atraer nuevos clientes.',
      category: 'Identidad de Marca y Web',
      year: '2025',
      client: 'Studio Atelier',
      artStyle: 'dome-lavender',
      overview:
        'Una exploración integral de presencia digital que combina gradientes cálidos de faro con tipografía táctil y microinteracciones fluidas.',
      deliverables: ['Identidad visual', 'Sistema de diseño', 'Plataforma web interactiva', 'Guías de movimiento'],
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'Título del Proyecto 02',
      description: 'Comparte información sobre un proyecto anterior aquí para atraer nuevos clientes.',
      category: 'Diseño de Producto Digital',
      year: '2025',
      client: 'Noveau Labs',
      artStyle: 'orb-lilac',
      overview:
        'Una interfaz de usuario experimental centrada en la computación calma, transiciones profundas en verde azulado y cero saturación visual.',
      deliverables: ['Arquitectura UI/UX', 'Tokens de diseño', 'Suite de pruebas', 'Librería de componentes'],
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'Título del Proyecto 03',
      description: 'Comparte información sobre un proyecto anterior aquí para atraer nuevos clientes.',
      category: 'Experiencia Espacial y de Movimiento',
      year: '2024',
      client: 'Forma Objects',
      artStyle: 'sphere-lime',
      overview:
        'Narrativa arquitectónica de producto a través de modelos serenos de iluminación solar, curvaturas orgánicas y cuadrículas minimalistas.',
      deliverables: ['Estudio de iluminación 3D', 'Diseño editorial', 'Microinteracciones', 'Dirección de arte'],
    },
    {
      id: 'proj-4',
      number: '04',
      title: 'Título del Proyecto 04',
      description: 'Comparte información sobre un proyecto anterior aquí para atraer nuevos clientes.',
      category: 'Tecnología Creativa',
      year: '2024',
      client: 'Kinetic Sound',
      artStyle: 'horizon-sunset',
      overview:
        'Muestra audiovisual interactiva con gradientes reactivos de terracota y costeros, paisajes sonoros continuos y ritmo editorial.',
      deliverables: ['Sitio web interactivo', 'Shaders reactivos al sonido', 'Estrategia de contenidos', 'Dirección de diseño'],
    },
  ],
  bannerText: 'LIGHTHOUSE STUDIO',
  addressLine1: 'Calle Palo hincando #154',
  addressLine2: 'Zona Colonial',
  email: 'lighthousestudiodo@gmail.com',
  phone: '(849) 259-3232',
  copyright: '© 2026 LIGHTHOUSE Studio. Todos los derechos reservados.',
};

export const studioLiveContent: SiteContent = {
  brandName: 'LIGHTHOUSE Studio',
  heroKicker: 'Diseño Luminoso y Dirección Creativa',
  heroHeadline:
    'Construimos identidades de marca luminosas, sistemas de diseño distintivos y experiencias digitales serenas para marcas visionarias.',
  aboutTitle: 'Sobre Nosotros',
  aboutHeadline:
    'LIGHTHOUSE es un estudio multidisciplinario independiente que opera en la intersección del branding, los gráficos espaciales y la artesanía digital. Iluminamos marcas con claridad atemporal, radiante armonía cromática y autoridad tipográfica.',
  servicesTitle: 'Nuestras Capacidades',
  services: [
    {
      id: 'srv-1',
      title: 'Arquitectura de Marca',
      description:
        'Identidades visuales holísticas, sistemas tipográficos, gobierno de marca y posicionamiento estratégico adaptado a organizaciones progresistas.',
      details: ['Estrategia de marca', 'Tipografía a medida', 'Ciencia del color', 'Sistemas de diseño'],
    },
    {
      id: 'srv-2',
      title: 'Experiencia Digital',
      description:
        'Aplicaciones web de vanguardia, portafolios interactivos e interfaces táctiles desarrolladas con movimiento fluido y profundidad espacial.',
      details: ['Diseño UX/UI', 'Coreografía de movimiento', 'WebGL y shaders', 'Desarrollo integral'],
    },
    {
      id: 'srv-3',
      title: 'Dirección de Arte y 3D',
      description:
        'Esculturas digitales de alta fidelidad, elementos visuales de campaña y estéticas generativas que marcan una distinción incomparable.',
      details: ['CGI 3D e iluminación', 'Dirección creativa', 'Piezas de campaña', 'Publicación editorial'],
    },
  ],
  projectsTitle: 'Proyectos Seleccionados',
  projects: [
    {
      id: 'proj-1',
      number: '01',
      title: 'Monografía Costera Beacon',
      description: 'Arquitecturas de luz generativa y portal de exposición interactiva para la Bienal Marítima.',
      category: 'Exposición y Web',
      year: '2026',
      client: 'Consejo de Diseño del Pacífico',
      artStyle: 'dome-lavender',
      overview:
        'Un espacio digital complementario para una exposición arquitectónica, empleando luz volumétrica suave y jerarquías tipográficas minimalistas.',
      deliverables: ['Pabellón virtual', 'Catálogo interactivo', 'Sistema de identidad', 'Colaboración sonora'],
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'Instrumento Sonoro Nocturne',
      description: 'Interfaz de música física-digital háptica creada para compositores acústicos experimentales.',
      category: 'Diseño de Producto',
      year: '2025',
      client: 'Nocturne Labs',
      artStyle: 'orb-lilac',
      overview:
        'Diseño del software complementario y grafismos de superficie física para un revolucionario sintetizador modular.',
      deliverables: ['UX industrial', 'App web complementaria', 'UI de biblioteca de sonido', 'Arte de empaque'],
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'Fundición Solar Solstice',
      description: 'Identidad digital que exhibe arquitectura solar limpia y colectores escultóricos de luz natural.',
      category: 'Editorial y Espacial',
      year: '2025',
      client: 'Solstice Energy',
      artStyle: 'sphere-lime',
      overview:
        'Un estudio de lujo silencioso: amplios campos en tono crema cálido, estudios de luz natural de alto contraste y un ritmo de lectura pausado.',
      deliverables: ['Publicación digital', 'Licenciamiento tipográfico', 'Diseño editorial', 'Curaduría impresa'],
    },
    {
      id: 'proj-4',
      number: '04',
      title: 'Navegación Autónoma Harbor',
      description: 'Interfaz de telemetría en tiempo real y sistema de guiado para embarcaciones autónomas de propulsión limpia.',
      category: 'Marítimo y Software',
      year: '2024',
      client: 'Harbor Systems',
      artStyle: 'horizon-sunset',
      overview:
        'Traducción de complejas corrientes marinas y matemáticas de trayectoria en una pantalla de mando intuitiva y meditativa.',
      deliverables: ['Interfaz de telemetría', 'Visualizador de shaders', 'Tokens de diseño', 'Panel de mando ejecutivo'],
    },
  ],
  bannerText: 'ILUMINA TU VISIÓN',
  addressLine1: 'Calle Palo hincando #154',
  addressLine2: 'Zona Colonial',
  email: 'lighthousestudiodo@gmail.com',
  phone: '(849) 259-3232',
  copyright: '© 2026 LIGHTHOUSE Studio. Todos los derechos reservados.',
};
