export type ServiceCategory = 'identidad' | 'contenido' | 'experiencias';

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetailMeta {
  category: ServiceCategory;
  categoryLabel: string;
  timeline: string;
  tagline: string;
  idealFor: string;
  processSteps: ServiceProcessStep[];
  outcomes: string[];
}

export const serviceDetailsMeta: Record<string, ServiceDetailMeta> = {
  branding: {
    category: 'identidad',
    categoryLabel: 'Identidad & Web',
    timeline: '3 a 5 semanas',
    tagline: 'Identidades que se reconocen al instante y perduran con carácter.',
    idealFor:
      'Marcas emergentes que necesitan nacer con una base visual sólida, o empresas consolidadas listas para un rebranding estratégico que eleve su posicionamiento.',
    processSteps: [
      {
        step: '01',
        title: 'Auditoría y Territorio de Marca',
        description:
          'Analizamos tu propuesta de valor, audiencia objetivo y referentes del sector para definir el territorio visual diferencial.',
      },
      {
        step: '02',
        title: 'Dirección de Arte y Concepto',
        description:
          'Exploramos rutas creativas, arquitectura del logotipo, paletas cromáticas y familias tipográficas alineadas con tu voz.',
      },
      {
        step: '03',
        title: 'Sistema Visual y Aplicaciones',
        description:
          'Desarrollamos las versiones responsivas del emblema, papelería, piezas digitales y recursos gráficos complementarios.',
      },
      {
        step: '04',
        title: 'Manual Normativo y Entrega',
        description:
          'Documentamos todas las reglas de uso y entregamos el paquete completo de archivos vectoriales listos para impresión y digital.',
      },
    ],
    outcomes: [
      'Coherencia visual absoluta en todos tus puntos de contacto físicos y digitales.',
      'Manual normativo práctico para que tu equipo y proveedores apliquen la marca sin errores.',
      'Diferenciación inmediata frente a la competencia con estética editorial propia.',
    ],
  },
  social: {
    category: 'contenido',
    categoryLabel: 'Contenido & IA',
    timeline: 'Gestión mensual continua',
    tagline: 'Contenido estratégico diseñado para conectar, posicionar y convertir.',
    idealFor:
      'Negocios y fundadores que buscan presencia profesional constante en Instagram, LinkedIn, TikTok y Facebook sin improvisar cada publicación.',
    processSteps: [
      {
        step: '01',
        title: 'Pilares y Voz Editorial',
        description:
          'Definimos las líneas temáticas, el tono de comunicación y los formatos prioritarios según tu audiencia y objetivos.',
      },
      {
        step: '02',
        title: 'Parrilla Mensual y Copywriting',
        description:
          'Planificamos el calendario completo con guiones de reels, textos persuasivos y llamados a la acción claros.',
      },
      {
        step: '03',
        title: 'Diseño y Producción Visual',
        description:
          'Creamos carruseles, portadas, piezas estáticas y ediciones dinámicas respetando al milímetro la identidad de tu marca.',
      },
      {
        step: '04',
        title: 'Publicación, Comunidad y Analítica',
        description:
          'Calendarizamos el contenido, acompañamos la conversación con tu comunidad y evaluamos métricas reales mes a mes.',
      },
    ],
    outcomes: [
      'Calendario editorial aprobado con anticipación y cero fricción operativa para tu equipo.',
      'Feed y piezas visuales consistentes que refuerzan la autoridad de tu marca.',
      'Decisiones de contenido guiadas por retención, alcance e interacciones reales.',
    ],
  },
  web: {
    category: 'identidad',
    categoryLabel: 'Identidad & Web',
    timeline: '4 a 6 semanas',
    tagline: 'Sitios web editoriales, rápidos y pensados para convertir visitas en oportunidades.',
    idealFor:
      'Empresas de servicios, estudios y marcas comerciales que necesitan un escaparate digital a la altura de su propuesta y optimizado para buscadores.',
    processSteps: [
      {
        step: '01',
        title: 'Arquitectura y Flujo de Conversión',
        description:
          'Estructuramos el mapa de páginas, jerarquía de mensajes y recorridos de usuario orientados a consulta o venta.',
      },
      {
        step: '02',
        title: 'Diseño UI/UX a la Medida',
        description:
          'Diseñamos cada vista en escritorio y móvil cuidando tipografía, ritmo espacial, contraste e identidad propia.',
      },
      {
        step: '03',
        title: 'Desarrollo Frontend y SEO Técnico',
        description:
          'Construimos una web ligera y responsiva con semántica limpia, metadatos estructurados y formularios integrados.',
      },
      {
        step: '04',
        title: 'Pruebas, Lanzamiento y Soporte',
        description:
          'Validamos velocidad, accesibilidad y compatibilidad antes de publicar, acompañándote en el mantenimiento continuo.',
      },
    ],
    outcomes: [
      'Navegación fluida en móvil y escritorio con tiempos de carga ágiles.',
      'Arquitectura preparada para posicionamiento orgánico y captura de prospectos.',
      'Base escalable lista para crecer con nuevas páginas, catálogos o integraciones.',
    ],
  },
  crm: {
    category: 'contenido',
    categoryLabel: 'Contenido & IA',
    timeline: '2 a 4 semanas',
    tagline: 'Atención inmediata 24/7 y seguimiento comercial automatizado sin perder el trato humano.',
    idealFor:
      'Equipos comerciales con alto volumen de consultas en WhatsApp, web o redes que desean responder al instante, calificar leads y ordenar su pipeline.',
    processSteps: [
      {
        step: '01',
        title: 'Mapeo del Embudo Comercial',
        description:
          'Revisamos tus canales de entrada, preguntas frecuentes, criterios de calificación y etapas reales de venta.',
      },
      {
        step: '02',
        title: 'Entrenamiento del Asistente con IA',
        description:
          'Configuramos flujos conversacionales naturales con la información exacta de tus servicios, precios y tono de marca.',
      },
      {
        step: '03',
        title: 'Integración Multicanal y CRM',
        description:
          'Conectamos WhatsApp, web y redes sociales al CRM para registrar contactos, etiquetas y asignaciones automáticas.',
      },
      {
        step: '04',
        title: 'Ajuste Fino y Tablero de Control',
        description:
          'Supervisamos conversaciones reales durante el arranque y dejamos métricas claras de respuesta y conversión.',
      },
    ],
    outcomes: [
      'Respuestas inmediatas a cualquier hora del día sin dejar prospectos en espera.',
      'Leads automáticamente clasificados y centralizados dentro de tu CRM.',
      'Mayor enfoque de tu equipo humano en cierres de alto valor.',
    ],
  },
  events: {
    category: 'experiencias',
    categoryLabel: 'Experiencias & BTL',
    timeline: '4 a 8 semanas',
    tagline: 'Experiencias presenciales curadas al detalle que transforman invitados en embajadores.',
    idealFor:
      'Lanzamientos de marca, encuentros corporativos, cenas ejecutivas o celebraciones institucionales que exigen dirección creativa y ejecución impecable.',
    processSteps: [
      {
        step: '01',
        title: 'Concepto Creativo y Guion del Evento',
        description:
          'Definimos la narrativa, estética espacial, recorrido de los invitados y momentos clave de recordación.',
      },
      {
        step: '02',
        title: 'Diseño Espacial y Piezas Gráficas',
        description:
          'Creamos señalética, invitaciones físicas y digitales, acreditaciones y ambientación coherente con la marca.',
      },
      {
        step: '03',
        title: 'Curaduría y Coordinación Técnica',
        description:
          'Gestionamos proveedores, montaje, cronograma operativo y ensayos previos para eliminar imprevistos.',
      },
      {
        step: '04',
        title: 'Dirección y Operación In Situ',
        description:
          'Supervisamos cada fase el día del evento desde el montaje hasta el cierre para que disfrutes con tranquilidad.',
      },
    ],
    outcomes: [
      'Dirección artística integral donde cada rincón comunica la esencia de tu marca.',
      'Logística ordenada con cronograma claro y coordinación centralizada de proveedores.',
      'Experiencia memorable y altamente fotografiable para tus invitados.',
    ],
  },
  btl: {
    category: 'experiencias',
    categoryLabel: 'Experiencias & BTL',
    timeline: '3 a 6 semanas',
    tagline: 'Activaciones directas y material POP creativo que conquistan el punto de contacto.',
    idealFor:
      'Marcas de consumo, retail o servicios que desean irrumpir en espacios físicos, ferias o puntos de venta con experiencias tangibles y memorables.',
    processSteps: [
      {
        step: '01',
        title: 'Estrategia de Contacto Directo',
        description:
          'Identificamos los momentos y ubicaciones clave donde tu audiencia está más receptiva para sorprenderla.',
      },
      {
        step: '02',
        title: 'Diseño de Activación y Material POP',
        description:
          'Desarrollamos stands, exhibidores, dinámicas interactivas y piezas físicas pensadas para generar interacción genuina.',
      },
      {
        step: '03',
        title: 'Producción y Capacitación de Equipo',
        description:
          'Supervisamos la fabricación de materiales y formamos a embajadores y promotores en el discurso de marca.',
      },
      {
        step: '04',
        title: 'Despliegue y Medición de Impacto',
        description:
          'Ejecutamos la activación en campo y recopilamos datos de participación, muestras entregadas y leads captados.',
      },
    ],
    outcomes: [
      'Visibilidad física diferenciada frente a campañas tradicionales saturadas.',
      'Interacción directa y emocional con consumidores reales en el punto clave.',
      'Registro tangible de alcance, degustaciones y oportunidades generadas.',
    ],
  },
};
