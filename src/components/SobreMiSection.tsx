import React from 'react';
import { StencilBorder } from './StencilBorder';
import { PORTRAIT_URL } from './PortraitCloud';

interface SobreMiSectionProps {
  onOpenContact: () => void;
  onNavigateAbout: () => void;
}

/**
 * Home page "Sobre mí" band. Layout mirrors the studio reference board:
 * taped portrait with an overlapping notes card on the left, editorial
 * headline and copy on the right, over a soft graph-paper canvas.
 * Uses only the fonts already established on the site and no emojis.
 */
export const SobreMiSection: React.FC<SobreMiSectionProps> = ({
  onOpenContact,
  onNavigateAbout,
}) => {
  const noteLines = [
    'Antes estrategia que decoración',
    'Las reglas existen para cuestionarlas',
    '(Ah, y fundadora de Lighthouse Studio)',
  ];

  return (
    <section
      id="sobre-mi"
      className="relative w-full bg-[#FAF7F0] pt-10 pb-24 px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Soft coastal graph-paper grid, like the reference board */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(152,183,206,0.55) 0px, rgba(152,183,206,0.55) 1px, transparent 1px, transparent 34px), repeating-linear-gradient(to right, rgba(152,183,206,0.55) 0px, rgba(152,183,206,0.55) 1px, transparent 1px, transparent 34px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

        {/* LEFT COLUMN: taped portrait with overlapping notes card */}
        <div className="lg:col-span-5 relative pt-4 px-2 sm:px-4">
          <div className="relative mx-auto w-full max-w-[400px]">

            {/* Brand tape strip anchoring the portrait to the canvas */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 w-24 sm:w-28 h-6 sm:h-7 bg-[#F8E8B4] border border-[#E5CE85] shadow-sm transform -rotate-2 select-none" />

            {/* Portrait recycled from the Hero */}
            <img
              src={PORTRAIT_URL}
              alt="Retrato de la fundadora de Lighthouse Studio"
              className="relative z-10 w-full aspect-[3/4] object-cover object-top bg-[#E9E6E1] border border-[#14343A]/15 shadow-[0_18px_40px_rgba(20,52,58,0.16)]"
            />

            {/* Overlapping sticky-note card with quick facts (no emojis) */}
            <div className="relative z-20 lg:absolute lg:-bottom-12 lg:left-3 lg:w-[78%] w-[88%] mx-auto lg:mx-0 -mt-8 lg:mt-0 bg-[#FAF1DE] border border-[#E8DCC4] shadow-[0_14px_30px_rgba(20,52,58,0.14)] px-5 sm:px-6 py-4 sm:py-5 transform -rotate-1">
              <div className="space-y-2">
                {noteLines.map((line) => (
                  <p
                    key={line}
                    className="flex items-start gap-2.5 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.14em] leading-snug text-[#14343A]"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    <span className="text-[#C42A27] shrink-0" aria-hidden="true">—</span>
                    <span>{line}</span>
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: display headline, copy and CTAs */}
        <div className="lg:col-span-7 lg:pt-6 flex flex-col items-start text-left">

          {/* Display headline in the established headline font */}
          <h3
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#630D16] leading-[1.1] tracking-[-0.03em] max-w-xl text-balance"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
          >
            Diseño marcas con carácter para fundadores con visión
          </h3>

          {/* Dashed divider from the editorial system */}
          <div className="w-full max-w-md border-b-2 border-dashed border-[#14343A]/25 my-5 sm:my-6" />

          {/* First-person copy, no emojis */}
          <div className="space-y-4 text-sm sm:text-[15px] text-[#14343A]/85 leading-relaxed max-w-xl">
            <p>
              Aprendí temprano que construir marcas memorables no es jugar seguro ni seguir
              todas las reglas: es jugar con intención. Mi filosofía es sencilla. ¿Por qué
              hacer todo tan serio? Porque esto también debería ser divertido.
            </p>
            <p>
              Por eso creé Lighthouse Studio: un espacio creativo, sin rodeos y con los ojos
              bien abiertos, donde fundadores y equipos pueden mostrar su verdadera esencia,
              construir marcas que apasionen y disfrutar el proceso. (aka, el patio de juego
              creativo de tu marca).
            </p>
            <p>
              Estoy aquí para dar vida a tu visión, con procesos que reducen el estrés, una
              comunicación que respeta tu historia y un toque creativo que sí lo entiende.
            </p>
          </div>

          {/* CTAs with the stencil border used across the site */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenContact}
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#14343A] hover:bg-[#761113] active:scale-[0.99] text-[#F8F4EB] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer rounded-[25px] overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
              <span>Hablemos de tu marca</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
              <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
            </button>

            <button
              onClick={onNavigateAbout}
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white hover:bg-[#FAF4EB] active:scale-[0.99] text-[#14343A] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer rounded-[25px] overflow-visible"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-[#C42A27] select-none font-bold">—</span>
              <span>Conoce el estudio</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
              <StencilBorder className="text-[#14343A]/60 group-hover:text-[#C42A27]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
