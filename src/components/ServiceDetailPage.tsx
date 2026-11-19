import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ServiceBadgeData, StickerTicket } from './ServiceBadge';
import { StencilBorder } from './StencilBorder';
import { serviceDetailsMeta } from '../data/serviceDetails';
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

interface ServiceDetailPageProps {
  service: ServiceBadgeData;
  allServices: ServiceBadgeData[];
  onNavigateHome: () => void;
  onNavigateServices: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenContact: (subject?: string) => void;
}

const renderServiceSticker = (id: string, className = 'w-24 h-24 sm:w-28 sm:h-28') => {
  switch (id) {
    case 'branding':
      return <StickerStationery className={className} />;
    case 'social':
      return <StickerClipboard className={className} />;
    case 'web':
      return <StickerMonitor className={className} />;
    case 'crm':
      return <StickerDashboard className={className} />;
    case 'events':
      return <StickerTicket className={className} />;
    case 'btl':
      return <StickerTarget className={className} />;
    default:
      return <StickerStationery className={className} />;
  }
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  allServices,
  onNavigateHome,
  onNavigateServices,
  onSelectService,
  onOpenContact,
}) => {
  const meta = serviceDetailsMeta[service.id];
  const relatedServices = allServices.filter((item) => item.id !== service.id).slice(0, 3);

  const isLightBg = service.bgColor.toUpperCase() === '#FFFFFF' || service.bgColor.toUpperCase() === '#F6E3AA';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${service.title} | Lighthouse Studio`;
  }, [service.id, service.title]);

  return (
    <div className="min-h-screen bg-[#F8F4EB] text-[#14343A] pt-24 sm:pt-28 pb-20 px-4 sm:px-8 lg:px-12 selection:bg-[#C42A27]/15 selection:text-[#761113] relative overflow-hidden">
      {/* Subtle Peripheral Brand Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        <div className="hidden lg:block absolute top-32 right-8 opacity-65">
          <StickerPalmTree className="w-14 transform rotate-6" />
        </div>
        <div className="hidden lg:block absolute bottom-20 left-8 opacity-65">
          <StickerLifebuoy className="w-13 transform -rotate-12" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Top Breadcrumbs & Primary Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14343A]/10 pb-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A] hover:text-[#C42A27] transition-colors font-secondary cursor-pointer py-1 px-2.5 rounded-[25px] hover:bg-[#14343A]/5 whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <ArrowLeft size={16} />
              <span>Servicios</span>
            </button>
            <span className="text-[#14343A]/30">/</span>
            <button
              onClick={onNavigateHome}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A]/60 hover:text-[#14343A] transition-colors font-secondary cursor-pointer whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              Inicio
            </button>
            <span className="text-[#14343A]/30">/</span>
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C42A27] font-secondary truncate max-w-[260px] sm:max-w-none"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              {service.title}
            </span>
          </div>

          <button
            onClick={() => onOpenContact(`Cotización de servicio: ${service.title}`)}
            className="relative group inline-flex items-center gap-2.5 self-start sm:self-auto px-6 py-2.5 bg-[#14343A] hover:bg-[#761113] active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible whitespace-nowrap shrink-0"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
            <span>Cotizar Servicio</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
          </button>
        </div>

        {/* 1. Split Editorial Hero Card */}
        <section className="rounded-[25px] overflow-hidden border border-[#14343A]/12 bg-[#FAF7F0] shadow-[0_18px_45px_rgba(20,52,58,0.08)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Visual Color-Block Panel */}
          <div
            className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[340px]"
            style={{
              backgroundColor: service.bgColor,
              color: service.textColor,
            }}
          >
            {/* Signature Circular Emblem Showcase */}
            <div className="relative my-4 flex items-center justify-center">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 280 280"
                  className="w-full h-full overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id={`detailTopArc-${service.id}`}
                      d="M 38,140 A 102,102 0 0,1 242,140"
                      fill="none"
                    />
                    <path
                      id={`detailBottomArc-${service.id}`}
                      d="M 38,140 A 102,102 0 0,0 242,140"
                      fill="none"
                    />
                  </defs>

                  <circle
                    cx="140"
                    cy="140"
                    r="134"
                    fill="none"
                    stroke={service.textColor}
                    strokeOpacity={isLightBg ? '0.2' : '0.25'}
                    strokeWidth="2"
                    strokeDasharray="16 6 32 6"
                  />

                  <text
                    fill={service.textColor}
                    fontSize="15.5"
                    fontWeight="bold"
                    letterSpacing="2.6"
                    textAnchor="middle"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    <textPath href={`#detailTopArc-${service.id}`} startOffset="50%">
                      {service.topText}
                    </textPath>
                  </text>

                  <text
                    fill={service.textColor}
                    fontSize="15.5"
                    fontWeight="bold"
                    letterSpacing="2.6"
                    textAnchor="middle"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    <textPath href={`#detailBottomArc-${service.id}`} startOffset="50%">
                      {service.bottomText}
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {renderServiceSticker(service.id, 'w-22 h-22 sm:w-26 sm:h-26')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Detail Narrative */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <h1
                className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#14343A] leading-[1.12] tracking-[-0.025em] text-balance font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {service.title}
              </h1>

              {meta?.tagline && (
                <p
                  className="text-2xl sm:text-3xl text-[#761113] font-script leading-snug"
                  style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
                >
                  {meta.tagline}
                </p>
              )}

              <p className="text-base sm:text-[17px] text-[#14343A]/85 leading-relaxed font-primary">
                {service.fullDesc}
              </p>

              {meta?.idealFor && (
                <div className="pt-4 border-t border-[#14343A]/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#14343A] font-secondary mb-1.5"
                     style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}>
                    Ideal para
                  </p>
                  <p className="text-sm sm:text-[15px] text-[#14343A]/75 leading-relaxed font-primary">
                    {meta.idealFor}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenContact(`Cotización de servicio: ${service.title}`)}
                className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible whitespace-nowrap shrink-0"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                <span className="text-white/80 group-hover:text-white transition-colors select-none font-bold">—</span>
                <span>Solicitar Propuesta</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                <StencilBorder className="text-white/80 group-hover:text-white" />
              </button>

              <button
                onClick={onNavigateServices}
                className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A]/75 hover:text-[#C42A27] transition-colors font-secondary cursor-pointer px-4 py-3 whitespace-nowrap shrink-0"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Ver todos los servicios
              </button>
            </div>
          </div>
        </section>

        {/* 2. Two-Column Breakdown: Deliverables + Process */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Deliverables */}
          <div className="lg:col-span-6 bg-[#FAF7F0] rounded-[25px] border border-[#14343A]/10 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider text-[#C42A27] font-secondary block mb-2"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Alcance & Entregables
              </span>
              <h2
                className="text-4xl sm:text-5xl text-[#14343A] font-script mb-8"
                style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
              >
                ¿Qué incluye este servicio?
              </h2>

              <ul className="divide-y divide-[#14343A]/10">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5">
                    <span
                      className="text-xs font-bold text-[#14343A]/45 tabular-nums pt-0.5 shrink-0 font-secondary"
                      style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <CheckCircle2 size={18} className="text-[#C42A27] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[15px] text-[#14343A]/90 font-medium font-primary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {meta?.outcomes && (
              <div className="mt-8 pt-6 border-t border-[#14343A]/10">
                <h3
                  className="text-xs font-bold uppercase tracking-wider text-[#14343A] font-secondary mb-3"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Resultados que obtienes
                </h3>
                <ul className="space-y-2">
                  {meta.outcomes.map((outcome, idx) => (
                    <li key={idx} className="text-sm text-[#14343A]/75 font-primary flex items-start gap-2">
                      <span className="text-[#C42A27] font-bold">—</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Execution Process in Deep Coastal Teal (#14343A) */}
          <div className="lg:col-span-6 bg-[#14343A] text-white rounded-[25px] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider text-[#F8E6AF] font-secondary block mb-2"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Metodología Lighthouse
              </span>
              <h2
                className="text-4xl sm:text-5xl text-white font-script mb-8"
                style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
              >
                Cómo lo trabajamos
              </h2>

              <div className="divide-y divide-white/12">
                {(meta?.processSteps || []).map((phase) => (
                  <div key={phase.step} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4">
                    <span
                      className="text-sm font-bold text-[#F8E6AF] tabular-nums shrink-0 pt-0.5 font-secondary"
                      style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                    >
                      {phase.step}
                    </span>
                    <div>
                      <h3
                        className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-secondary mb-1"
                        style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-sm text-white/80 font-primary leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/12 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <StickerLighthouse className="w-10 h-10 shrink-0" />
                <p className="text-xs sm:text-sm text-white/85 font-primary">
                  Acompañamiento cercano y revisiones transparentes en cada etapa.
                </p>
              </div>
              <StickerSailboat className="hidden sm:block w-12 h-12 shrink-0 opacity-90" />
            </div>
          </div>
        </section>

        {/* 3. Related Services Strip */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider text-[#C42A27] font-secondary block mb-1"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Sigue Explorando
              </span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#14343A] font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                Otros servicios del estudio
              </h2>
            </div>

            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A] hover:text-[#C42A27] transition-colors font-secondary cursor-pointer whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span>Ver catálogo completo</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((other) => (
              <button
                key={other.id}
                onClick={() => onSelectService(other.id)}
                className="group text-left bg-[#FAF7F0] rounded-[25px] border border-[#14343A]/12 hover:border-[#14343A]/35 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer flex flex-col justify-between gap-5"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-[#14343A]/10"
                  style={{ backgroundColor: other.bgColor }}
                >
                  {renderServiceSticker(other.id, 'w-11 h-11')}
                </div>

                  <div>
                    <h3
                      className="text-sm font-bold text-[#14343A] group-hover:text-[#C42A27] transition-colors uppercase tracking-wider font-secondary leading-snug mb-2"
                      style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                    >
                      {other.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14343A]/75 font-primary leading-relaxed line-clamp-2">
                      {other.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#14343A]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#14343A] group-hover:text-[#C42A27] font-secondary">
                    <span style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}>
                      Ver servicio
                    </span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
            ))}
          </div>
        </section>

        {/* 4. Bottom Call to Action Banner */}
        <section className="relative bg-[#14343A] text-white rounded-[25px] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-5 shadow-xl overflow-hidden">
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#F8E6AF] font-secondary relative z-10"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            Siguiente Paso
          </span>
          <h3
            className="text-4xl sm:text-5xl text-white font-script relative z-10 max-w-2xl"
            style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
          >
            ¿Listo para impulsar tu marca?
          </h3>
          <p className="max-w-xl text-white/80 text-sm sm:text-base font-primary relative z-10">
            Cuéntanos sobre tus metas con {service.title.toLowerCase()} y armamos una propuesta a la medida de tu negocio.
          </p>
          <div className="pt-2 relative z-10">
            <button
              onClick={() => onOpenContact(`Cotización de servicio: ${service.title}`)}
              className="relative group px-8 py-3.5 bg-[#C42A27] hover:bg-[#761113] active:scale-[0.99] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer font-secondary rounded-[25px] flex items-center gap-3 overflow-visible whitespace-nowrap shrink-0"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-white/80 group-hover:text-white transition-colors select-none font-bold">—</span>
              <span>Solicitar Cotización</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              <StencilBorder className="text-white/80 group-hover:text-white" />
            </button>
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
                stroke="#FFFFFF"
                strokeWidth="2.25"
                strokeDasharray="28 5 56 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};
