import React from 'react';
import { StickerStopwatch, StickerClipboard, StickerDashboard } from './HeroStickers';

interface AboutSectionProps {
  title?: string;
  headline?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#FAF7F0] py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden border-t border-[#17363C]/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* The Exact Slide 03 Replica Container */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,52,58,0.12)] border border-[#17363C]/10 flex flex-col md:flex-row min-h-[580px] lg:min-h-[640px]">
          
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
            
            {/* Seam Stickers (Positioned accurately over the dividing line) */}
            {/* 1. Top Seam Stopwatch */}
            <div className="hidden md:block absolute -top-3 -left-8 lg:-left-10 z-30 pointer-events-auto">
              <StickerStopwatch className="w-16 lg:w-20 transform -rotate-6" />
            </div>

            {/* 2. Bottom Seam Dashboard */}
            <div className="hidden md:block absolute -bottom-3 -left-8 lg:-left-10 z-30 pointer-events-auto">
              <StickerDashboard className="w-16 lg:w-20 transform -rotate-3" />
            </div>

            {/* 3. Top Right Corner Clipboard */}
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

          </div>
        </div>
      </div>
    </section>
  );
};
