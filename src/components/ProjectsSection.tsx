import React from 'react';
import { ServiceBadge, ServiceBadgeData } from './ServiceBadge';
import {
  StickerLighthouse,
  StickerSailboat,
  StickerPalmTree,
  StickerLifebuoy,
} from './HeroStickers';

interface ProjectsSectionProps {
  onOpenContact?: (subject?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const servicesData: ServiceBadgeData[] = [
  {
    id: 'branding',
    type: 'branding',
    topText: 'DISEÑO DE LOGO',
    bottomText: 'BRANDING',
    title: 'DISEÑO DE LOGO & BRANDING',
    subtitle: 'Identidad Visual & Dirección de Arte',
    shortDesc: 'Identidades visuales integrales y arquitectura de marca memorable.',
    fullDesc:
      'Construimos sistemas de identidad visual perdurables y diferenciadores. Desde el logotipo principal, paleta cromática y selección tipográfica, hasta el manual normativo y aplicaciones corporativas en medios físicos y digitales.',
    deliverables: [
      'Logotipo responsivo (horizontal, vertical, emblema)',
      'Manual de identidad y normas de uso',
      'Paleta cromática con contrastes certificados',
      'Selección de tipografías primarias y secundarias',
      'Diseño de papelería corporativa y tarjetas',
      'Paquete de assets vectoriales (SVG, PNG, EPS)',
    ],
    bgColor: '#630D16',
    textColor: '#FFFFFF',
  },
  {
    id: 'social',
    type: 'social',
    topText: 'MANEJO DE',
    bottomText: 'REDES SOCIALES',
    title: 'MANEJO DE REDES SOCIALES',
    subtitle: 'Social Media & Content Strategy',
    shortDesc: 'Estrategia de contenido, creación visual y gestión de comunidad.',
    fullDesc:
      'Potenciamos tu presencia digital en Instagram, LinkedIn, TikTok y Facebook con contenido de alto impacto visual, copywriting persuasivo, parrillas estratégicas de publicación y monitoreo constante de engagement y alcance.',
    deliverables: [
      'Estrategia mensual de contenidos y pilares temáticos',
      'Diseño gráfico de carruseles, posts estáticos y reels',
      'Copywriting persuasivo y hashtags optimizados',
      'Planificación y calendarización de publicaciones',
      'Gestión de comunidad y respuesta a mensajes',
      'Informe analítico mensual con métricas de crecimiento',
    ],
    bgColor: '#C42A27',
    textColor: '#FFFFFF',
  },
  {
    id: 'web',
    type: 'web',
    topText: 'DISEÑO Y MANEJO',
    bottomText: 'DE PÁGINA WEB',
    title: 'DISEÑO Y MANEJO DE PÁGINA WEB',
    subtitle: 'UI/UX & Desarrollo Digital',
    shortDesc: 'Experiencias web modernas, interactivas y 100% responsive.',
    fullDesc:
      'Diseñamos y desarrollamos sitios web fluidos, atractivos y optimizados para la conversión. Combinamos estética editorial con rendimiento de alta velocidad, arquitectura SEO limpia y mantenimiento continuo.',
    deliverables: [
      'Arquitectura de información y diseño UI/UX responsivo',
      'Desarrollo frontend moderno de alto rendimiento',
      'Optimización técnica para motores de búsqueda (SEO)',
      'Integración de formularios de contacto y analítica',
      'Panel de autogestión de contenidos',
      'Monitoreo, copias de seguridad y soporte continuo',
    ],
    bgColor: '#14343A',
    textColor: '#FFFFFF',
  },
  {
    id: 'crm',
    type: 'crm',
    topText: 'SERVICIO AL CLIENTE',
    bottomText: 'CON IA | CRM',
    title: 'SERVICIO AL CLIENTE CON IA | CRM',
    subtitle: 'Automatización Inteligente 24/7',
    shortDesc: 'Automatización inteligente, chatbots 24/7 y gestión de leads.',
    fullDesc:
      'Optimizamos tu atención al cliente y embudo comercial integrando asistentes inteligentes con Inteligencia Artificial y plataformas CRM. Captura, califica y atiende prospectos en tiempo real sin perder ninguna oportunidad de venta.',
    deliverables: [
      'Diseño y entrenamiento de agente conversacional con IA',
      'Integración multicanal en WhatsApp, Web y Redes',
      'Configuración e implementación de CRM a la medida',
      'Automatización de respuestas frecuentes y cotizaciones',
      'Enrutamiento automático de leads calificados',
      'Panel de control de conversaciones y métricas',
    ],
    bgColor: '#F6E3AA',
    textColor: '#630D16',
  },
  {
    id: 'events',
    type: 'events',
    topText: 'ORGANIZACIÓN',
    bottomText: 'DE EVENTOS',
    title: 'ORGANIZACIÓN DE EVENTOS',
    subtitle: 'Experiencias Presenciales & POP',
    shortDesc: 'Producción integral de experiencias presenciales y corporativas.',
    fullDesc:
      'Diseñamos y producimos eventos corporativos, activaciones de producto y celebraciones exclusivas con un estándar visual impecable. Cuidamos cada detalle desde el concepto creativo hasta la ejecución técnica in situ.',
    deliverables: [
      'Conceptualización y dirección de arte del evento',
      'Diseño escenográfico, señalética y branding espacial',
      'Selección y coordinación técnica de proveedores',
      'Gestión de cronograma, logística y protocolo',
      'Diseño de invitaciones físicas y credenciales digitales',
      'Supervisión y coordinación operativa durante el evento',
    ],
    bgColor: '#98B7CE',
    textColor: '#14343A',
  },
  {
    id: 'btl',
    type: 'btl',
    topText: 'MARKETING',
    bottomText: 'BELOW THE LINE',
    title: 'MARKETING BELOW THE LINE',
    subtitle: 'Activaciones de Marca & Material POP',
    shortDesc: 'Campañas no convencionales, activaciones vivenciales y material POP.',
    fullDesc:
      'Llegamos a tu audiencia en el punto de contacto directo mediante experiencias no masivas de alto impacto emocional. Desarrollamos activaciones vivenciales, guerrilla marketing y materiales POP que cautivan y conectan.',
    deliverables: [
      'Diseño de activaciones vivenciales en punto de contacto',
      'Estrategia de guerrilla marketing y experiential branding',
      'Diseño y producción de stands y material POP',
      'Dinámicas de sampling y degustación personalizada',
      'Capacitación de promotores y embajadores de marca',
      'Medición de impacto y reporte de interacciones',
    ],
    bgColor: '#FFFFFF',
    textColor: '#C42A27',
    borderColor: 'rgba(20, 52, 58, 0.16)',
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenContact,
  onSelectService,
}) => {
  const handleSelectService = (service: ServiceBadgeData) => {
    if (onSelectService) {
      onSelectService(service.id);
    } else if (onOpenContact) {
      onOpenContact(`Cotización de servicio: ${service.title}`);
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#F8F4EB] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#14343A]/5"
    >
      {/* Anchor alias so #projects scrolls here directly */}
      <div id="projects" className="absolute -top-16" />

      {/* Subtle, Minimal Peripheral Brand Accents matching ServiciosPage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        <div className="absolute top-12 right-4 sm:right-12 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
          <StickerPalmTree className="w-12 sm:w-14 lg:w-16 transform rotate-6" />
        </div>

        <div className="absolute bottom-12 left-4 sm:left-12 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity">
          <StickerLifebuoy className="w-11 sm:w-13 lg:w-14 transform -rotate-12" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 relative z-10">
        {/* Section Title & Script Heading matching ServiciosPage */}
        <div className="text-center pt-2">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
            <div className="hidden sm:block transform -rotate-12 hover:scale-110 transition-transform cursor-pointer">
              <StickerLighthouse className="w-10 sm:w-12 lg:w-14" />
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#17363C] font-normal tracking-normal select-none font-script inline-block"
              style={{
                fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
              }}
            >
              Nuestros servicios
            </h2>
            <div className="hidden sm:block transform rotate-12 hover:scale-110 transition-transform cursor-pointer">
              <StickerSailboat className="w-12 sm:w-14 lg:w-16" />
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#14343A]/80 font-primary leading-relaxed">
            Soluciones integrales de diseño, estrategia digital y producción de experiencias creadas para potenciar y diferenciar la presencia de tu marca.
          </p>
        </div>

        {/* The 6 Services Circular Badges Showcase Grid matching ServiciosPage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-14 gap-y-14 sm:gap-y-16 lg:gap-y-20 justify-items-center items-start pt-2 sm:pt-4">
          {servicesData.map((service, index) => (
            <ServiceBadge
              key={service.id}
              service={service}
              onClick={handleSelectService}
              index={index}
            />
          ))}
        </div>
      </div>

    </section>
  );
};
