import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { StencilBorder } from './StencilBorder';
import {
  StickerStopwatch,
  StickerClipboard,
  StickerDashboard,
  StickerUmbrella,
  StickerSailboat,
  StickerSeashell,
  StickerPalmTree,
  StickerLifebuoy,
  StickerStarfish,
  LighthouseMonogram,
} from './HeroStickers';

interface SobreNosotrosPageProps {
  onNavigateHome: () => void;
  onNavigateServices?: () => void;
  onOpenContact: (subject?: string) => void;
}

export const SobreNosotrosPage: React.FC<SobreNosotrosPageProps> = ({
  onNavigateHome,
  onNavigateServices,
  onOpenContact,
}) => {
  // Ensure the page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Sobre Nosotros | Lighthouse Studio';
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F4EB] text-[#14343A] pt-24 sm:pt-28 pb-20 px-4 sm:px-8 lg:px-12 selection:bg-[#C42A27]/15 selection:text-[#761113]">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Top Header & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#14343A]/10 pb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14343A] hover:text-[#C42A27] transition-colors font-secondary cursor-pointer py-1 px-2.5 rounded-md hover:bg-[#14343A]/5"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <ArrowLeft size={16} />
              <span>Volver al Inicio</span>
            </button>
            <span className="text-[#14343A]/30">/</span>
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C42A27] font-secondary"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              Sobre Nosotros
            </span>
          </div>

          <button
            onClick={() => onOpenContact('Hablemos sobre una estrategia para mi marca')}
            className="relative group inline-flex items-center gap-2.5 self-start sm:self-auto px-6 py-2.5 bg-[#14343A] hover:bg-[#761113] active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
            <span>Iniciar Proyecto</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
          </button>
        </div>

        {/* =========================================================================
            SECTION 1: Core "Sobre nosotros" & "Nuestros pilares" (Slide 03)
           ========================================================================= */}
        <div className="relative w-full rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.12)] border-4 border-dashed border-[#14343A]/35 flex flex-col md:flex-row min-h-[580px] lg:min-h-[640px]">
          
          {/* LEFT COLUMN: Light Blue Dusty Periwinkle (#98B7CE) */}
          <div className="w-full md:w-[38%] bg-[#98B7CE] p-8 sm:p-10 lg:p-14 flex flex-col justify-start relative z-10">
            {/* Title: Sobre nosotros in cursive script */}
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl text-[#630D16] font-normal tracking-normal select-none font-script mb-8 sm:mb-10 leading-tight"
              style={{
                fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
              }}
            >
              Sobre nosotros
            </h2>

            {/* Paragraph Text */}
            <p
              className="text-[#630D16] text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.68] font-primary font-medium tracking-normal text-left text-balance"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: '#630D16',
              }}
            >
              Somos una agencia creativa que ofrece soluciones personalizadas en gestión, marketing,
              y desarrollo digital, siempre adaptándonos a tus necesidades. Nos enfocamos en construir
              relaciones de confianza a largo plazo, generar resultados sostenibles y convertirnos en
              una parte esencial de tu equipo. No somos una agencia externa; nos involucramos
              contigo, haciendo nuestros tus retos y objetivos. Nacimos para ser la luz que te guía,
              acompañándote en el trayecto que recorre tu negocio camino a sus objetivos.
            </p>
          </div>

          {/* RIGHT COLUMN: Deep Wine / Burgundy Red (#630D16) */}
          <div className="w-full md:w-[62%] bg-[#630D16] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
            
            {/* Seam Stickers */}
            <div className="hidden md:block absolute -top-3 -left-8 lg:-left-10 z-30 pointer-events-auto">
              <StickerStopwatch className="w-16 lg:w-20 transform -rotate-6" />
            </div>

            <div className="hidden md:block absolute -bottom-3 -left-8 lg:-left-10 z-30 pointer-events-auto">
              <StickerDashboard className="w-16 lg:w-20 transform -rotate-3" />
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-8 z-30 pointer-events-auto">
              <StickerClipboard className="w-14 sm:w-16 lg:w-20 transform rotate-12" />
            </div>

            {/* Header: Nuestros pilares */}
            <div className="mb-8 sm:mb-10 pr-16">
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl text-white font-normal tracking-normal select-none font-script leading-tight"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                Nuestros pilares
              </h2>
            </div>

            {/* 4 Pillars List */}
            <div className="space-y-6 sm:space-y-8 my-auto pr-2 sm:pr-8 lg:pr-12">
              {/* Pillar 1: Claridad */}
              <div className="text-white text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
                <span
                  className="font-bold text-white uppercase tracking-wider font-secondary text-[14px] sm:text-[15px] lg:text-[16px] mr-2 inline-block"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Claridad →
                </span>
                <span
                  className="font-primary text-white/95 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Te acompañamos a definir tu marca y objetivos para desarrollar una estrategia acertada.
                </span>
              </div>

              {/* Pillar 2: Equipo */}
              <div className="text-white text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
                <span
                  className="font-bold text-white uppercase tracking-wider font-secondary text-[14px] sm:text-[15px] lg:text-[16px] mr-2 inline-block"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Equipo →
                </span>
                <span
                  className="font-primary text-white/95 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Nos integramos contigo, trabajando codo a codo como parte de tu crecimiento.
                </span>
              </div>

              {/* Pillar 3: Guía */}
              <div className="text-white text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
                <span
                  className="font-bold text-white uppercase tracking-wider font-secondary text-[14px] sm:text-[15px] lg:text-[16px] mr-2 inline-block"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Guía →
                </span>
                <span
                  className="font-primary text-white/95 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Te orientamos en cada paso, adaptándonos a tus necesidades y desafíos.
                </span>
              </div>

              {/* Pillar 4: Creatividad */}
              <div className="text-white text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
                <span
                  className="font-bold text-white uppercase tracking-wider font-secondary text-[14px] sm:text-[15px] lg:text-[16px] mr-2 inline-block"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Creatividad →
                </span>
                <span
                  className="font-primary text-white/95 font-medium"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Transformamos ideas en soluciones innovadoras y estrategias visuales impactantes.
                </span>
              </div>
            </div>

            {/* Mobile stickers fallback row if md screens stack */}
            <div className="flex md:hidden items-center justify-around py-4 border-t border-white/10 mt-6">
              <StickerStopwatch className="w-12" />
              <StickerDashboard className="w-12" />
            </div>

            {/* Subtle Brand Monogram (NO page numbers) */}
            <div className="absolute bottom-4 right-5 opacity-90">
              <LighthouseMonogram color="#FFFFFF" className="w-6 h-7" />
            </div>

          </div>
        </div>


        {/* =========================================================================
            SECTION 2: "Nuestra Metodología" (Slide 05 - image_94680969.png)
           ========================================================================= */}
        <div className="relative w-full rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.12)] border-4 border-dashed border-[#14343A]/35 flex flex-col md:flex-row min-h-[520px] lg:min-h-[580px]">
          
          {/* LEFT PANEL: Warm Cream / Golden Sand (#F7E6B5 / #F8E8B4) */}
          <div className="w-full md:w-[52%] bg-[#F8E8B4] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10">
            <div>
              {/* Title: Nuestra Metodología */}
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl text-[#630D16] font-normal tracking-normal select-none font-script mb-8 sm:mb-10 leading-tight"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                Nuestra Metodología
              </h2>

              {/* Introductory Lead */}
              <p
                className="text-[#630D16] text-[15.5px] sm:text-[17px] font-semibold mb-6 font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Trabajamos bajo cuatro pilares estratégicos:
              </p>

              {/* 4 Strategic Methodology Pillars */}
              <ul className="space-y-3.5 mb-10 text-[#630D16] font-bold text-lg sm:text-[19px] font-primary">
                <li className="flex items-center gap-2">
                  <span className="text-[#630D16] font-extrabold">+</span>
                  <span>Estrategia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#630D16] font-extrabold">+</span>
                  <span>Producción</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#630D16] font-extrabold">+</span>
                  <span>Distribución</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#630D16] font-extrabold">+</span>
                  <span>Análisis</span>
                </li>
              </ul>
            </div>

            {/* Bottom Statement */}
            <p
              className="text-[#630D16] text-[15px] sm:text-[16px] leading-relaxed font-primary font-medium border-t border-[#630D16]/15 pt-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Cada pieza de contenido tendrá un objetivo claro: posicionar, vender o fortalecer tu marca.
            </p>
          </div>

          {/* RIGHT PANEL: Alternating Stripes (Dusty Blue #98B7CE & Burgundy Red #630D16) */}
          <div className="w-full md:w-[48%] min-h-[300px] md:min-h-full flex relative overflow-hidden">
            {/* 6 vertical alternating stripes */}
            <div className="flex-1 bg-[#98B7CE] h-full" />
            <div className="flex-1 bg-[#630D16] h-full" />
            <div className="flex-1 bg-[#98B7CE] h-full" />
            <div className="flex-1 bg-[#630D16] h-full" />
            <div className="flex-1 bg-[#98B7CE] h-full" />
            <div className="flex-1 bg-[#630D16] h-full" />

            {/* Watermark Monogram on bottom right without page number */}
            <div className="absolute bottom-4 right-5 z-20">
              <LighthouseMonogram color="#FFFFFF" className="w-6 h-7 drop-shadow-md" />
            </div>
          </div>

        </div>


        {/* =========================================================================
            SECTION 3: "Estrategia de Redes Sociales y Marketing" (Slide 06 - image_b3bab7a5.png)
           ========================================================================= */}
        <div className="relative w-full rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.12)] border-4 border-dashed border-white/60 flex flex-col md:flex-row min-h-[580px] lg:min-h-[640px] bg-[#163236]">
          
          {/* LEFT PANEL: Deep Dark Slate Teal (#163236) */}
          <div className="w-full md:w-[64%] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative z-10 text-[#FAF7F0]">
            <div>
              {/* Title: Estrategia de Redes Sociales y Marketing */}
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F0] font-normal tracking-normal select-none font-script mb-8 sm:mb-10 leading-tight"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                Estrategia de Redes Sociales
                <br />
                <span className="text-[#FAF7F0]">y Marketing</span>
              </h2>

              {/* Three Strategic Case Study Paragraphs */}
              <div className="space-y-6 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.72] text-[#FAF7F0]/95 font-primary">
                <p>
                  La mayor fortaleza de Herencia BA no es trabajar con 13 aseguradoras ni contar con 28 años de experiencia. Es comprender las “líneas grises” del mercado y acompañar a quienes tienen la responsabilidad de proteger un patrimonio, una empresa o una familia.
                </p>
                <p>
                  Por eso, la comunicación debe comportarse como lo haría una firma de banca privada o una consultora internacional: elegante, sobria y profundamente útil. Cada pieza de contenido debe reforzar la sensación de que Herencia AB no busca vender una póliza, sino convertirse en el asesor de confianza que acompaña decisiones que impactan generaciones.
                </p>
                <p>
                  El objetivo final es que, cuando un empresario piense en proteger su legado, el primer nombre que recuerde sea <strong className="font-bold text-white tracking-wide">Herencia BA.</strong>
                </p>
              </div>
            </div>

            {/* Subtle Footnote quote */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#FAF7F0]/70 font-secondary uppercase tracking-wider">
              <span>Lighthouse Creative Studio</span>
              <span>Estrategia de Contenido & Marca</span>
            </div>
          </div>

          {/* RIGHT PANEL: Alternating Stripes (Dark Teal #163236 & Dusty Blue #98B7CE) */}
          <div className="w-full md:w-[36%] min-h-[260px] md:min-h-full flex relative overflow-hidden">
            {/* Alternating dark teal & dusty blue stripes */}
            <div className="flex-1 bg-[#98B7CE] h-full" />
            <div className="flex-1 bg-[#163236] h-full" />
            <div className="flex-1 bg-[#98B7CE] h-full" />
            <div className="flex-1 bg-[#163236] h-full" />
            <div className="flex-1 bg-[#98B7CE] h-full" />

            {/* Watermark Monogram on bottom right without page number */}
            <div className="absolute bottom-4 right-5 z-20">
              <LighthouseMonogram color="#761113" className="w-6 h-7 drop-shadow-sm" />
            </div>
          </div>

        </div>


        {/* =========================================================================
            SECTION 4: "¿Qué hacemos cuando llevamos tus redes sociales?" (Slide 09 - image_451b6a6f.png)
           ========================================================================= */}
        <div className="relative w-full rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.12)] border-4 border-dashed border-[#14343A]/35 bg-[#98B7CE] p-8 sm:p-12 lg:p-16 min-h-[640px]">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-10">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-[#630D16] font-normal tracking-normal select-none font-script mb-4 leading-tight"
              style={{
                fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
              }}
            >
              ¿Qué hacemos
              <br />
              cuando llevamos
              <br />
              tus redes sociales?
            </h2>

            {/* Badge Highlight: ENTREGABLES DE LIGHTHOUSE STUDIO */}
            <div className="inline-block mt-3 px-3.5 py-1.5 rounded-[25px] bg-[#F8E6AF] shadow-xs">
              <span
                className="text-xs sm:text-[13px] font-bold text-[#14343A] uppercase tracking-wider font-secondary"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                ENTREGABLES DE LIGHTHOUSE STUDIO
              </span>
            </div>
          </div>

          {/* Body Deliverables Grid & Floating Stickers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Left Column of Deliverables (6 Cols) */}
            <div className="lg:col-span-5 space-y-3.5 text-[#14343A] text-[14.5px] sm:text-[15px] font-semibold font-primary">
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Auditoría de marca y diagnóstico inicial</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Definición de posicionamiento</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Arquitectura del mensaje</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Dirección creativa</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Estrategia de contenido</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Calendario editorial mensual</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Creación de carruseles</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Diseño de artes estáticos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Creación de stories estratégicas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Guionización de Reels</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Grabación de contenido</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Edición de videos</span>
              </div>
            </div>

            {/* Right Column of Deliverables (5 Cols) */}
            <div className="lg:col-span-5 space-y-3.5 text-[#14343A] text-[14.5px] sm:text-[15px] font-semibold font-primary">
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Copywriting para publicaciones</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Optimización del perfil</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Programación de publicaciones</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Coordinación de campañas estacionales</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Estrategia de LinkedIn (cuando aplica)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Contenido de autoridad</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Estrategia de referidos</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Gestión básica de pauta publicitaria (cuando aplica)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Reporte mensual de métricas</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Reunión mensual de seguimiento</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Análisis y optimización de KPIs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#630D16] font-bold mt-0.5">*</span>
                <span>Acompañamiento estratégico continuo como parte de tu equipo</span>
              </div>
            </div>

            {/* Maritime Hand-Drawn Stickers Column (2 Cols) matching Slide 09 */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-end gap-5 pointer-events-auto pr-2">
              <StickerUmbrella className="w-16 transform rotate-12" />
              <StickerSailboat className="w-16 transform -rotate-6" />
              <StickerSeashell className="w-14 transform rotate-6" />
              <StickerPalmTree className="w-14 transform -rotate-3" />
              <StickerLifebuoy className="w-14 transform rotate-12" />
              <StickerStarfish className="w-14 transform -rotate-12" />
            </div>

          </div>

          {/* Floating Monogram on bottom right without page number */}
          <div className="absolute bottom-4 right-5 z-20">
            <LighthouseMonogram color="#630D16" className="w-6 h-7 drop-shadow-sm" />
          </div>

        </div>


        {/* =========================================================================
            BOTTOM CALL TO ACTION
           ========================================================================= */}
        <div className="bg-[#FAF7F0] border-4 border-dashed border-[#14343A]/35 rounded-[25px] p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-6 shadow-sm">
          <div className="inline-block px-3.5 py-1 rounded-[25px] bg-[#14343A]/5 border border-[#14343A]/20 text-[#14343A] text-xs font-bold uppercase tracking-wider font-secondary">
            Colaboremos
          </div>
          <h3
            className="text-4xl sm:text-5xl text-[#630D16] font-script"
            style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
          >
            ¿Listo para llevar tu marca al siguiente nivel?
          </h3>
          <p className="max-w-xl text-[#14343A]/80 text-sm sm:text-base font-primary">
            Agenda una reunión de diagnóstico con nosotros o envíanos un mensaje para diseñar una propuesta a la medida de tus objetivos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenContact('Quiero cotizar el manejo de mis redes sociales')}
              className="relative group px-8 py-3.5 bg-[#761113] hover:bg-[#C42A27] active:scale-[0.99] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer font-secondary rounded-[25px] flex items-center gap-2.5 overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
              <span>Contactar con Lighthouse Studio</span>
              <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
            </button>
            <button
              onClick={onNavigateServices || onNavigateHome}
              className="relative group px-8 py-3.5 bg-white hover:bg-[#FAF6EE] active:scale-[0.99] text-[#14343A] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xs cursor-pointer font-secondary rounded-[25px] flex items-center gap-2.5 overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#C42A27] transition-colors select-none font-bold">—</span>
              <span>Explorar Servicios</span>
              <StencilBorder className="text-[#14343A]/70 group-hover:text-[#C42A27]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
