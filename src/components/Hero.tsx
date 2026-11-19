import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { StencilBorder } from './StencilBorder';
import { PortraitCloud, PORTRAIT_URL } from './PortraitCloud';
import {
  StickerLighthouse,
  StickerTarget,
  StickerSailboat,
  StickerPalmTree,
  StickerDashboard,
  StickerSeahorse,
  StickerUmbrella,
  StickerLocationPin,
  StickerClipboard,
  StickerMonitor,
  LighthouseMonogram,
} from './HeroStickers';

interface HeroProps {
  kicker: string;
  headline: string;
  addressLine1: string;
  addressLine2: string;
  email: string;
  phone: string;
  onScrollDown: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  kicker,
  headline,
  addressLine1,
  addressLine2,
  email,
  phone,
  onScrollDown,
  onOpenContact,
}) => {

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 overflow-hidden select-none bg-[#F8F4EB]">
      {/* 1. Authentic Vertical Striped Coastal Canvas (#B8CCE0 and #F8F4EB) matching the Brand Slide */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(to right, #B8CCE0 0%, #B8CCE0 7.1428%, #F8F4EB 7.1428%, #F8F4EB 14.2857%)',
        }}
      >
        {/* Subtle warm center radial wash to soften stripes behind text for maximum legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(248, 244, 235, 0.88) 0%, rgba(248, 244, 235, 0.45) 55%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Scattered Playful Brand Die-Cut Stickers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
        {/* Left Side Group */}
        <div className="absolute top-20 sm:top-24 left-2 sm:left-6 lg:left-10 pointer-events-auto opacity-70 lg:opacity-100">
          <StickerLighthouse className="w-10 sm:w-14 lg:w-[58px] transform -rotate-6" />
        </div>
        <div className="absolute bottom-28 sm:bottom-32 left-3 sm:left-8 pointer-events-auto opacity-70 lg:opacity-100">
          <StickerDashboard className="w-11 sm:w-14 lg:w-[60px] transform -rotate-3" />
        </div>

        {/* Right Side Group */}
        <div className="absolute top-24 sm:top-28 right-3 sm:right-6 lg:right-10 pointer-events-auto opacity-70 lg:opacity-100">
          <StickerUmbrella className="w-10 sm:w-14 lg:w-[62px] transform -rotate-12" />
        </div>
        <div className="absolute bottom-28 sm:bottom-32 right-4 sm:right-8 pointer-events-auto opacity-70 lg:opacity-100">
          <StickerLocationPin className="w-9 sm:w-12 lg:w-[50px] transform rotate-6" />
        </div>
      </div>

      {/* 3. Center Content: Stylistic Two-Column Composition matching image_c52d44c8.png */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-10 pb-10 sm:pb-14 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Display Typography, Dashed Line, Subtitle & Stencil CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative">
            
            {/* Main Headline styled like the reference (bold title + typewriter line) */}
            <h1
              className="text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] leading-[1.08] font-extrabold tracking-[-0.03em] text-[#14343A] font-primary text-balance"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              <span className="block text-[#14343A]">Tu Agencia</span>
              <span className="block text-[#14343A]">Creativa & Partner</span>
              <span className="inline-flex items-center text-[#C42A27] tracking-tight">
                <span>Estrategia Digital</span>
                <span
                  className="inline-block w-[3.5px] h-[0.8em] bg-[#14343A] ml-2 animate-pulse align-middle"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Horizontal Dashed Divider Line directly from reference image */}
            <div className="w-full max-w-md border-b-2 border-dashed border-[#14343A]/25 my-4 sm:my-5" />

            {/* Subtitle in Serif / Script matching "Where Creative Brands Play" */}
            <p className="text-base sm:text-lg lg:text-xl text-[#14343A]/90 font-medium mb-6 sm:mb-8 max-w-lg">
              Donde las{' '}
              <span
                className="font-script text-2xl sm:text-3xl lg:text-[34px] text-[#761113] font-normal inline-block transform -rotate-1"
                style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive" }}
              >
                Marcas Extraordinarias
              </span>{' '}
              cobran vida
            </p>

            {/* Interactive CTA: Stencil Border Button (No emojis) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={onOpenContact}
                className="relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#14343A] hover:bg-[#761113] active:scale-[0.99] text-[#F8F4EB] text-[13px] font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                <span className="text-[#ADC5D9] group-hover:text-white transition-colors font-bold select-none">—</span>
                <span>Comenzar Proyecto</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
                <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
              </button>
            </div>

            {/* Playful curved loop doodle arrow pointing to the portrait frame */}
            <div className="hidden lg:block absolute -right-16 xl:-right-20 top-[40%] pointer-events-none z-20">
              <svg
                width="115"
                height="75"
                viewBox="0 0 115 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#630D16]/85"
                aria-hidden="true"
              >
                <path
                  d="M 5 22 C 38 15, 60 46, 50 58 C 40 68, 32 46, 54 37 C 78 28, 96 35, 108 39"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 100 31 L 110 39 L 100 47"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

          </div>

          {/* RIGHT COLUMN: Scalloped Cloud Frame with Professional Stock Portrait & Circular Stamp */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[360px] sm:w-[440px] lg:w-[470px] max-w-full">
              
              {/* Tilted Tape Label Note at top-left matching "Hi, I'm Alyssa!" without emojis */}
              <div
                className="absolute -top-3.5 sm:-top-4 -left-3 sm:-left-5 z-30 px-3.5 py-1.5 bg-[#F8E8B4] border border-[#E5CE85] text-[#14343A] shadow-md transform -rotate-6 select-none font-semibold text-xs sm:text-[13px] tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>¡Hola! Somos Lighthouse</span>
              </div>

              {/* Organic Scalloped Cloud SVG Silhouette with Stock Photo Clipped Inside */}
              <PortraitCloud
                imageUrl={PORTRAIT_URL}
                className="w-full h-auto drop-shadow-[0_20px_45px_rgba(20,52,58,0.18)] select-none"
              />

              {/* Circular Rotating Stamp Badge at bottom-left matching "THE CREATIVE PLAYGROUND" */}
              <div className="absolute -bottom-5 sm:-bottom-6 -left-4 sm:-left-6 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#630D16] text-white shadow-xl p-1 flex items-center justify-center select-none border-2 border-[#FAF4EB]">
                <svg className="w-full h-full animate-[spin_24s_linear_infinite]" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="heroBadgePath"
                      d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text
                    className="text-[8.5px] font-bold tracking-[2.6px] uppercase fill-white"
                    style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                  >
                    <textPath href="#heroBadgePath" startOffset="0%">
                      ★ LIGHTHOUSE STUDIO ★ CREATIVE AGENCY
                    </textPath>
                  </text>
                </svg>
                {/* Center Monogram Emblem */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <LighthouseMonogram color="#FFFFFF" className="w-5 h-6 drop-shadow-sm" />
                </div>
              </div>

              {/* Floating Nautical Brand Sticker on the Right Side (replacing the juice box, no emojis!) */}
              <div className="absolute top-1/2 -right-4 sm:-right-7 -translate-y-6 z-30 pointer-events-auto">
                <StickerSailboat className="w-13 sm:w-16 transform rotate-6 drop-shadow-md" />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4. Signature Solid Red Brand Bar (#C42A27) spanning the base of the Hero */}
      <div className="relative z-20 w-full bg-[#C42A27] text-white shadow-[0_-8px_25px_rgba(118,17,19,0.18)]">
        <div className="w-full px-6 sm:px-10 lg:px-16 py-6 sm:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Brand Lockup: Circular White Emblem + "Propuesta de Servicios digitales" */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* White Circular Emblem */}
            <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/40 p-1 flex items-center justify-center bg-white/10 shadow-sm">
              <img
                src="assets/Lighthouse%20Creative%20Studio%20Emblem.png"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'assets/lighthouse_logo_emblem.png';
                }}
                alt="LIGHTHOUSE Creative Studio Emblem"
                className="w-full h-full object-contain filter brightness-0 invert drop-shadow-sm"
              />
            </div>

            {/* Typography Lockup */}
            <div className="flex flex-col">
              <span
                className="text-xs sm:text-[13px] font-bold text-white/90 uppercase tracking-widest leading-none mb-1 font-secondary"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Propuesta de
              </span>
              <span
                className="font-supporting font-script text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight -mt-0.5"
                style={{ fontFamily: "'Des Montilees Regular', 'Des Montilees', cursive" }}
              >
                Servicios digitales
              </span>
              {/* Metadata Fields: Negocio & Fecha */}
              <div
                className="flex items-center gap-4 text-[11px] sm:text-xs text-white/85 font-semibold mt-1 font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>
                  <strong className="text-white font-bold">Negocio:</strong> Lighthouse Studio
                </span>
                <span className="hidden sm:inline opacity-40">•</span>
                <span>
                  <strong className="text-white font-bold">Fecha:</strong> 2026
                </span>
              </div>
            </div>
          </div>

          {/* Right Lockup: Scroll Down indicator & Quick Coordinates */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-6 sm:gap-10 pt-2 md:pt-0 border-t border-white/20 md:border-t-0">
            {/* Scroll Down */}
            <button
              onClick={onScrollDown}
              className="group inline-flex items-center gap-2 text-xs sm:text-[12.5px] font-bold text-white hover:text-[#F8E6AF] transition-colors cursor-pointer uppercase tracking-wider font-secondary"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span>Desplazar hacia abajo</span>
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1 text-[#F8E6AF]"
              />
            </button>

            {/* Physical Coordinates */}
            <div className="hidden sm:block text-right text-[11.5px] sm:text-xs leading-snug text-white/80 font-medium">
              <p>{addressLine1}</p>
              <button
                onClick={onOpenContact}
                className="text-white hover:underline transition-all block mt-0.5 cursor-pointer font-semibold"
              >
                {email}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
