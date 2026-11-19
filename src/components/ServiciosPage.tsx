import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { StickerTicket } from './ServiceBadge';
import { StencilBorder } from './StencilBorder';
import { servicesData } from './ProjectsSection';
import {
  StickerClipboard,
  StickerDashboard,
  StickerLifebuoy,
  StickerLighthouse,
  StickerMonitor,
  StickerPalmTree,
  StickerSailboat,
  StickerStationery,
  StickerTarget,
} from './HeroStickers';

interface ServiciosPageProps {
  onNavigateHome: () => void;
  onNavigateAbout?: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenContact: (subject?: string) => void;
}

const renderDossierSticker = (id: string) => {
  const cls = 'w-16 h-16 sm:w-18 sm:h-18';
  switch (id) {
    case 'branding':
      return <StickerStationery className={cls} />;
    case 'social':
      return <StickerClipboard className={cls} />;
    case 'web':
      return <StickerMonitor className={cls} />;
    case 'crm':
      return <StickerDashboard className={cls} />;
    case 'events':
      return <StickerTicket className={cls} />;
    case 'btl':
      return <StickerTarget className={cls} />;
    default:
      return <StickerStationery className={cls} />;
  }
};

export const ServiciosPage: React.FC<ServiciosPageProps> = ({
  onNavigateHome,
  onNavigateAbout,
  onSelectService,
  onOpenContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Nuestros Servicios | Lighthouse Studio';
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F4EB] text-[#14343A] pt-24 sm:pt-28 pb-20 px-4 sm:px-8 lg:px-12 selection:bg-[#C42A27]/15 selection:text-[#761113] relative overflow-hidden">
      {/* Subtle Peripheral Brand Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        <div className="hidden lg:block absolute top-28 right-8 opacity-70">
          <StickerPalmTree className="w-14 transform rotate-6" />
        </div>
        <div className="hidden lg:block absolute bottom-16 left-8 opacity-70">
          <StickerLifebuoy className="w-13 transform -rotate-12" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Header & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14343A]/10 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A] hover:text-[#C42A27] transition-colors font-secondary cursor-pointer py-1 px-2.5 rounded-[25px] hover:bg-[#14343A]/5 whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <ArrowLeft size={16} />
              <span>Volver al Inicio</span>
            </button>
            <span className="text-[#14343A]/30">/</span>
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C42A27] font-secondary whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              Nuestros Servicios
            </span>
          </div>

          <button
            onClick={() => onOpenContact('Hablemos sobre una propuesta de servicios para mi marca')}
            className="relative group inline-flex items-center gap-2.5 self-start sm:self-auto px-6 py-2.5 bg-[#14343A] hover:bg-[#761113] active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible whitespace-nowrap shrink-0"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
            <span>Iniciar Proyecto</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
          </button>
        </div>

        {/* Distinct Editorial Split Header Banner */}
        <section className="rounded-[25px] bg-[#FAF7F0] border border-[#14343A]/12 overflow-hidden shadow-[0_16px_40px_rgba(20,52,58,0.07)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <StickerLighthouse className="w-10 h-10 sm:w-12 sm:h-12 -rotate-6 shrink-0" />
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl text-[#17363C] font-normal tracking-normal select-none font-script leading-none mb-4"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                Nuestros servicios
              </h1>

              <p className="max-w-xl text-sm sm:text-base text-[#14343A]/85 font-primary leading-relaxed">
                Soluciones integrales de diseño, estrategia digital, automatización comercial y producción de experiencias creadas para potenciar y diferenciar la presencia de tu marca.
              </p>
            </div>

          </div>

          <div className="lg:col-span-5 bg-[#14343A] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-12 pointer-events-none"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, #ADC5D9 0px, #ADC5D9 28px, transparent 28px, transparent 56px)',
              }}
            />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest text-[#F8E6AF] font-secondary block mb-2"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Lighthouse Studio
                </span>
                <p
                  className="text-xl sm:text-2xl font-extrabold text-white leading-snug font-primary text-balance"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                >
                  De la identidad visual al contacto directo con tus clientes.
                </p>
              </div>
              <StickerSailboat className="w-13 h-13 sm:w-16 sm:h-16 shrink-0 rotate-6 drop-shadow-md" />
            </div>
          </div>
        </section>

        {/* Distinct 2-Column Editorial Service Dossier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
          {servicesData.map((service) => {
            const isLightSurface =
              service.bgColor.toUpperCase() === '#FFFFFF' ||
              service.bgColor.toUpperCase() === '#F6E3AA';

            return (
              <article
                key={service.id}
                onClick={() => onSelectService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Abrir página de ${service.title}`}
                className="group bg-[#FAF7F0] rounded-[25px] border border-[#14343A]/12 hover:border-[#14343A]/35 shadow-sm hover:shadow-[0_18px_40px_rgba(20,52,58,0.12)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col sm:flex-row cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C42A27]"
              >
                {/* Left Colored Emblem Column */}
                <div
                  className={`sm:w-44 lg:w-48 shrink-0 p-6 flex items-center justify-center relative ${
                    isLightSurface ? 'border-b sm:border-b-0 sm:border-r border-[#14343A]/10' : ''
                  }`}
                  style={{
                    backgroundColor: service.bgColor,
                    color: service.textColor,
                  }}
                >
                  <div className="my-2 sm:my-4 transform group-hover:scale-108 group-hover:rotate-3 transition-transform duration-300">
                    {renderDossierSticker(service.id)}
                  </div>
                </div>

                {/* Right Editorial Details Column */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between gap-5">
                  <div className="space-y-3">
                    <h2
                      className="text-base sm:text-lg font-bold text-[#14343A] group-hover:text-[#C42A27] transition-colors uppercase tracking-wider font-secondary leading-snug"
                      style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                    >
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#14343A]/80 font-primary leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Concise Deliverables Preview */}
                    <ul className="pt-2 space-y-1.5 text-xs sm:text-[13px] text-[#14343A]/75 font-primary">
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#C42A27] font-bold">—</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#14343A]/10 flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-wider text-[#14343A] group-hover:text-[#C42A27] transition-colors font-secondary"
                      style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                    >
                      Ver servicio completo
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#14343A] group-hover:text-[#C42A27] group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Studio Work Process Band */}
        <section className="bg-[#14343A] text-white rounded-[25px] p-8 sm:p-10 lg:p-12 space-y-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-6">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest text-[#F8E6AF] font-secondary block mb-1"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Nuestro Enfoque
              </span>
              <h2
                className="text-4xl sm:text-5xl text-white font-script"
                style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
              >
                Cómo estructuramos cada proyecto
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-white/80 font-primary leading-relaxed">
              Cada servicio sigue un proceso ordenado para que tengas claridad estratégica, entregas puntuales y resultados medibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-2">
              <span
                className="text-sm font-bold text-[#F8E6AF] tabular-nums font-secondary block"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Diagnóstico y Claridad
              </span>
              <p className="text-sm text-white/80 font-primary leading-relaxed">
                Escuchamos tus retos, auditamos tu presencia actual y definimos objetivos concretos antes de diseñar o producir.
              </p>
            </div>
            <div className="space-y-2">
              <span
                className="text-sm font-bold text-[#F8E6AF] tabular-nums font-secondary block"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Dirección Creativa y Sistema
              </span>
              <p className="text-sm text-white/80 font-primary leading-relaxed">
                Construimos propuestas visuales, arquitecturas digitales o flujos comerciales alineados con la personalidad de tu marca.
              </p>
            </div>
            <div className="space-y-2">
              <span
                className="text-sm font-bold text-[#F8E6AF] tabular-nums font-secondary block"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Ejecución y Acompañamiento
              </span>
              <p className="text-sm text-white/80 font-primary leading-relaxed">
                Implementamos cada entregable listos para salir al mercado y te acompañamos en su evolución continua.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action block */}
        <div className="relative bg-[#FAF7F0] rounded-[25px] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-5 shadow-sm overflow-hidden">
          <span
            className="text-xs font-bold uppercase tracking-wider text-[#14343A]/70 font-secondary relative z-10"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            Colaboremos
          </span>
          <h3
            className="text-4xl sm:text-5xl text-[#630D16] font-script relative z-10"
            style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
          >
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="max-w-xl text-[#14343A]/80 text-sm sm:text-base font-primary relative z-10">
            Conversemos sobre tus metas y requerimientos para estructurar un plan de trabajo adaptado a tus necesidades.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <button
              onClick={() => onOpenContact('Quiero cotizar un servicio para mi marca')}
              className="relative group px-8 py-3.5 bg-[#761113] hover:bg-[#C42A27] active:scale-[0.99] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer font-secondary rounded-[25px] flex items-center gap-2.5 overflow-visible whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
              <span>Contactar con Lighthouse Studio</span>
              <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
            </button>
            {onNavigateAbout && (
              <button
                onClick={onNavigateAbout}
                className="relative group px-8 py-3.5 bg-white hover:bg-[#FAF6EE] active:scale-[0.99] text-[#14343A] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs cursor-pointer font-secondary rounded-[25px] flex items-center gap-2.5 overflow-visible whitespace-nowrap shrink-0"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                <span className="text-[#C42A27] transition-colors select-none font-bold">—</span>
                <span>Conoce Sobre Nosotros</span>
                <StencilBorder className="text-[#14343A]/70 group-hover:text-[#C42A27]" />
              </button>
            )}
          </div>

          <div className="absolute inset-[3px] !m-0 pointer-events-none z-20" aria-hidden="true">
            <svg className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="22"
                ry="22"
                stroke="#14343A"
                strokeOpacity="0.35"
                strokeWidth="2.25"
                strokeDasharray="28 5 56 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
