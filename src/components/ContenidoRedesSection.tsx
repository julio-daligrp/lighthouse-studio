import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { StencilBorder } from './StencilBorder';
import {
  StickerClipboard,
  StickerMonitor,
  StickerDashboard,
  StickerStopwatch,
  LighthouseMonogram,
} from './HeroStickers';

interface ContenidoRedesSectionProps {
  onOpenContact: (subject?: string) => void;
  onNavigateServices: () => void;
}

interface ContentPillar {
  id: string;
  tabLabel: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  contactSubject: string;
  folderTheme: 'yellow' | 'blue' | 'wine' | 'teal';
}

const contentPillars: ContentPillar[] = [
  {
    id: 'reels',
    tabLabel: '01 · Producción audiovisual',
    title: 'Reels & Video',
    tagline: 'Piezas verticales con guion, ritmo y dirección para retener desde el segundo uno.',
    description:
      'Creamos piezas audiovisuales dinámicas pensadas para detener el scroll, transmitir autoridad y mostrar el lado humano de tu marca sin improvisar frente a la cámara.',
    deliverables: [
      'Guionización estratégica con ganchos visuales y narrativos',
      'Jornadas de grabación y dirección de cámara en sitio',
      'Edición ágil con subtítulos y diseño sonoro',
      'Adaptación multiplataforma para Reels, TikTok y Shorts',
    ],
    contactSubject: 'Quiero producir Reels & Video estratégicos para mi marca',
    folderTheme: 'yellow',
  },
  {
    id: 'carruseles',
    tabLabel: '02 · Diseño editorial',
    title: 'Carruseles & Artes',
    tagline: 'Transformamos ideas clave en piezas gráficas claras, guardables y memorables.',
    description:
      'Estructuramos contenido educativo y de posicionamiento con jerarquía tipográfica y coherencia total con la identidad visual de tu estudio o empresa.',
    deliverables: [
      'Carruseles educativos y de autoridad orientados a guardados',
      'Artes estáticos con dirección de arte y balance tipográfico',
      'Sistema visual coherente y reconocible en todo el feed',
      'Optimización de portadas, lectura móvil e historias',
    ],
    contactSubject: 'Me interesa diseño de Carruseles & Artes para mis redes',
    folderTheme: 'blue',
  },
  {
    id: 'copy',
    tabLabel: '03 · Narrativa & Voz',
    title: 'Copywriting & Voz',
    tagline: 'Palabras con intención que reflejan tu personalidad e invitan a conversar.',
    description:
      'Cada pieza visual necesita un mensaje que la respalde. Redactamos textos persuasivos que suenan a tu marca, resuelven objeciones y guían a la acción.',
    deliverables: [
      'Definición de tono de marca y pilares de mensaje',
      'Captions estructurados para generar interacción real',
      'Llamados a la acción claros orientados a consultas',
      'Secuencias estratégicas para historias del día a día',
    ],
    contactSubject: 'Necesito Copywriting & Voz estratégica para mi marca',
    folderTheme: 'wine',
  },
  {
    id: 'calendario',
    tabLabel: '04 · Planificación & Métricas',
    title: 'Calendario & Análisis',
    tagline: 'Orden mensual, programación puntual y lectura clara de resultados reales.',
    description:
      'Dejamos atrás las publicaciones a última hora: trabajamos con una parrilla mensual aprobada contigo y optimizamos cada mes según el desempeño de tus objetivos.',
    deliverables: [
      'Calendario editorial mensual revisado y aprobado contigo',
      'Optimización integral de biografía, destacados y enlaces',
      'Planificación de campañas estacionales y lanzamientos',
      'Reporte mensual con aprendizajes clave y próximos pasos',
    ],
    contactSubject: 'Quiero organizar mi Calendario & Análisis mensual en redes',
    folderTheme: 'teal',
  },
];

const folderThemeStyles: Record<
  ContentPillar['folderTheme'],
  {
    tab: string;
    body: string;
    title: string;
    tagline: string;
    notch: string;
    chevron: string;
    divider: string;
    desc: string;
    plus: string;
    itemText: string;
    cta: string;
  }
> = {
  yellow: {
    tab: 'bg-[#E2C878] text-[#14343A]',
    body: 'bg-[#F8E6AF] text-[#14343A]',
    title: 'text-[#14343A]',
    tagline: 'text-[#14343A]/85',
    notch: 'bg-[#14343A]/12',
    chevron: 'bg-[#14343A]/10 text-[#14343A]',
    divider: 'border-[#14343A]/15',
    desc: 'text-[#14343A]/90',
    plus: 'text-[#761113]',
    itemText: 'text-[#14343A]',
    cta: 'text-[#761113] hover:text-[#14343A]',
  },
  blue: {
    tab: 'bg-[#83A4BE] text-[#14343A]',
    body: 'bg-[#ADC5D9] text-[#14343A]',
    title: 'text-[#14343A]',
    tagline: 'text-[#14343A]/85',
    notch: 'bg-[#14343A]/12',
    chevron: 'bg-[#14343A]/10 text-[#14343A]',
    divider: 'border-[#14343A]/15',
    desc: 'text-[#14343A]/90',
    plus: 'text-[#630D16]',
    itemText: 'text-[#14343A]',
    cta: 'text-[#630D16] hover:text-[#14343A]',
  },
  wine: {
    tab: 'bg-[#7A1822] text-[#F8E6AF]',
    body: 'bg-[#630D16] text-[#F8F4EB]',
    title: 'text-[#F8E6AF]',
    tagline: 'text-[#F8F4EB]/85',
    notch: 'bg-white/15',
    chevron: 'bg-white/10 text-[#F8E6AF]',
    divider: 'border-white/20',
    desc: 'text-[#F8F4EB]/90',
    plus: 'text-[#F8E6AF]',
    itemText: 'text-[#F8F4EB]',
    cta: 'text-[#F8E6AF] hover:text-white',
  },
  teal: {
    tab: 'bg-[#1E474F] text-[#F8E6AF]',
    body: 'bg-[#14343A] text-[#F8F4EB]',
    title: 'text-[#F8E6AF]',
    tagline: 'text-[#F8F4EB]/85',
    notch: 'bg-white/15',
    chevron: 'bg-white/10 text-[#F8E6AF]',
    divider: 'border-white/15',
    desc: 'text-[#F8F4EB]/90',
    plus: 'text-[#F8E6AF]',
    itemText: 'text-[#F8F4EB]',
    cta: 'text-[#F8E6AF] hover:text-white',
  },
};

export const ContenidoRedesSection: React.FC<ContenidoRedesSectionProps> = ({
  onOpenContact,
  onNavigateServices,
}) => {
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);

  const toggleFolder = (id: string) => {
    setOpenFolderId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="contenido-redes"
      className="relative w-full bg-[#FAF7F0] pt-16 sm:pt-20 pb-24 px-6 sm:px-10 lg:px-16 border-t border-[#14343A]/10 select-none"
    >
      <div className="relative max-w-6xl mx-auto rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.08)] bg-[#FAF6EE] p-8 sm:p-12 lg:p-14 text-[#14343A]">
        {/* Top Row: Editorial Copy on Left + Studio Stickers transferred from removed panel on Right */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            {/* Headline mixing Montserrat ExtraBold & Des Montilees Script */}
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14343A] leading-[1.12] tracking-[-0.025em] font-primary text-balance"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Contenido para redes que{' '}
              <span
                className="font-script font-normal text-[#C42A27] text-4xl sm:text-5xl lg:text-[52px] inline-block leading-none transform -rotate-1"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                construye marca
              </span>
            </h2>

            {/* Dashed Divider */}
            <div className="w-full max-w-md border-b-2 border-dashed border-[#630D16]/20 my-5 sm:my-6" />

            {/* Strategic Intro Copy */}
            <p className="text-sm sm:text-[15px] text-[#14343A]/85 font-primary leading-relaxed">
              No publicamos por llenar un calendario. Diseñamos y producimos contenido con
              dirección creativa y propósito comercial para que cada Reel, carrusel e historia
              acerque a tu audiencia ideal y convierta atención en confianza.
            </p>
          </div>

          {/* Studio Die-Cut Icons moved cleanly into the main panel */}
          <div className="flex items-center gap-3 sm:gap-4 self-start lg:self-center shrink-0">
            <StickerClipboard className="w-12 sm:w-14 transform -rotate-6" />
            <StickerMonitor className="w-12 sm:w-14 transform rotate-6" />
            <StickerStopwatch className="w-11 sm:w-13 transform rotate-12" />
            <StickerDashboard className="w-12 sm:w-14 transform -rotate-3" />
          </div>
        </div>

        {/* Full-Width 2-Column Grid of Expandable Folder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {contentPillars.map((pillar) => {
            const isOpen = openFolderId === pillar.id;
            const styles = folderThemeStyles[pillar.folderTheme];
            return (
              <div key={pillar.id} className="group flex flex-col items-start">
                {/* Folder Ear / Top Tab */}
                <button
                  type="button"
                  onClick={() => toggleFolder(pillar.id)}
                  aria-expanded={isOpen}
                  aria-controls={`folder-panel-${pillar.id}`}
                  className={`ml-5 sm:ml-6 px-5 py-1.5 rounded-t-[14px] text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider font-secondary cursor-pointer transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] ${styles.tab}`}
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  {pillar.tabLabel}
                </button>

                {/* Folder Body */}
                <div
                  className={`w-full rounded-[25px] shadow-[0_10px_24px_rgba(20,52,58,0.08)] transition-transform duration-200 ${
                    isOpen ? '' : 'hover:-translate-y-0.5'
                  } ${styles.body}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFolder(pillar.id)}
                    aria-expanded={isOpen}
                    aria-controls={`folder-panel-${pillar.id}`}
                    className="w-full text-left px-6 sm:px-7 py-5 sm:py-6 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-current rounded-[25px]"
                  >
                    <div className="min-w-0 pr-2">
                      <h3
                        className={`text-xl sm:text-[23px] font-extrabold tracking-tight leading-snug font-primary ${styles.title}`}
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-[13.5px] font-primary leading-relaxed mt-1 ${styles.tagline}`}
                      >
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Top-Right Folder Grip Notch + Expand Chevron */}
                    <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
                      <span
                        className={`hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-[25px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isOpen ? 'rotate-180' : ''
                        } ${styles.chevron}`}
                        aria-hidden="true"
                      >
                        <ChevronDown size={16} />
                      </span>
                      <span
                        className={`w-3 h-7 rounded-full shrink-0 ${styles.notch}`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Smoothly Animated Expandable Info Panel */}
                  <div
                    id={`folder-panel-${pillar.id}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div
                        className={`px-6 sm:px-7 pb-6 pt-4 border-t border-dashed transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                          isOpen ? 'translate-y-0' : '-translate-y-2'
                        } ${styles.divider}`}
                      >
                        <p
                          className={`text-xs sm:text-[13.5px] font-primary leading-relaxed mb-4 ${styles.desc}`}
                        >
                          {pillar.description}
                        </p>

                        <div className="space-y-2 mb-5">
                          {pillar.deliverables.map((item) => (
                            <div
                              key={item}
                              className={`flex items-start gap-2.5 text-xs sm:text-[13px] font-semibold font-primary ${styles.itemText}`}
                            >
                              <span
                                className={`font-extrabold leading-none mt-0.5 ${styles.plus}`}
                              >
                                +
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <button
                          type="button"
                          tabIndex={isOpen ? 0 : -1}
                          onClick={() => onOpenContact(pillar.contactSubject)}
                          className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider font-secondary transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:underline ${styles.cta}`}
                          style={{
                            fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif",
                          }}
                        >
                          <span>Solicitar este enfoque</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs + Monogram Mark */}
        <div className="mt-10 pt-6 border-t border-dashed border-[#14343A]/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() =>
                onOpenContact('Quiero generar contenido estratégico para mis redes sociales')
              }
              className="relative group px-7 py-3.5 bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider font-secondary transition-all shadow-md cursor-pointer whitespace-nowrap rounded-[25px] inline-flex items-center gap-2.5 overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#F8E6AF] group-hover:text-white transition-colors select-none font-bold">
                —
              </span>
              <span>Planificar mi contenido</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
              <StencilBorder className="text-white/80 group-hover:text-[#F8E6AF]" />
            </button>

            <button
              onClick={onNavigateServices}
              className="relative group px-7 py-3.5 bg-white hover:bg-[#FAF1DE] active:scale-[0.99] text-[#14343A] border border-[#14343A]/15 text-xs sm:text-sm font-bold uppercase tracking-wider font-secondary transition-all shadow-sm cursor-pointer whitespace-nowrap rounded-[25px] inline-flex items-center gap-2.5 overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#C42A27] transition-colors select-none font-bold">—</span>
              <span>Explorar Servicios</span>
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform font-bold"
              >
                &rarr;
              </span>
              <StencilBorder className="text-[#14343A]/55 group-hover:text-[#C42A27]" />
            </button>
          </div>

          <LighthouseMonogram color="#630D16" className="w-5 h-6 opacity-90 shrink-0" />
        </div>
      </div>
    </section>
  );
};
