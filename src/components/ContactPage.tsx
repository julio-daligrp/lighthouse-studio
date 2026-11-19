import React, { useState } from 'react';
import { Check, Globe, Send, Mail, MapPin, Phone } from 'lucide-react';
import { SiteContent } from '../types';
import {
  StickerLighthouse,
  StickerTarget,
  StickerPalmTree,
  StickerDashboard,
  StickerSeahorse,
  StickerLocationPin,
  StickerMonitor,
  StickerClipboard,
  StickerSailboat,
  StickerStationery,
  StickerSeashell,
  StickerStopwatch,
  StickerStarfish,
  StickerShipsWheel,
} from './HeroStickers';

import { StencilBorder } from './StencilBorder';

interface ContactPageProps {
  content: SiteContent;
  onSuccessToast: (msg: string) => void;
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ content, onSuccessToast, initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: initialSubject,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessToast('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 4000);
    }, 700);
  };

  return (
    <div className="w-full bg-[#F8F4EB] min-h-screen relative overflow-hidden select-none animate-in fade-in duration-300">
      
      {/* =================================================================== */}
      {/* 1. TOP GRAPHIC BANNER: Horizontal Red & Blue Stripes (from Slide 5)  */}
      {/* Deep Red (#761113) & Soft Sky Blue (#ADC5D9) horizontal repeating   */}
      {/* =================================================================== */}
      <div className="w-full pt-16 sm:pt-20">
        <div
          className="w-full h-16 sm:h-20 md:h-24 shadow-inner relative overflow-hidden border-b-2 border-[#761113]/20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, #761113 0px, #761113 14px, #ADC5D9 14px, #ADC5D9 28px)',
          }}
        >
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. SCATTERED STICKERS (Peripheral & Non-Obstructing with z-0)        */}
      {/* Spread strategically around margins & corners with pointer-events-none*/}
      {/* =================================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Top-Left gutter sticker: Stationery Kit */}
        <div className="absolute top-36 left-3 sm:left-8 xl:left-14 transform -rotate-12 opacity-85 hover:scale-110 transition-transform">
          <StickerStationery className="w-16 sm:w-20 md:w-24" />
        </div>

        {/* Top-Right gutter sticker: Lighthouse */}
        <div className="absolute top-32 right-3 sm:right-8 xl:right-16 transform rotate-6 opacity-90 hover:scale-110 transition-transform">
          <StickerLighthouse className="w-14 sm:w-16 md:w-20" />
        </div>

        {/* Upper-Mid Left gutter: Seashell */}
        <div className="absolute top-80 sm:top-96 left-2 sm:left-6 xl:left-12 transform -rotate-12 opacity-80 hover:scale-110 transition-transform">
          <StickerSeashell className="w-14 sm:w-16 md:w-20" />
        </div>

        {/* Upper-Mid Right gutter: Seahorse */}
        <div className="absolute top-80 sm:top-96 right-3 sm:right-8 xl:right-16 transform rotate-6 opacity-85 hover:scale-110 transition-transform">
          <StickerSeahorse className="w-12 sm:w-14 md:w-16" />
        </div>

        {/* Mid-Left gutter: Starfish */}
        <div className="absolute top-[520px] sm:top-[560px] left-3 sm:left-8 xl:left-14 transform rotate-12 opacity-85 hover:scale-110 transition-transform">
          <StickerStarfish className="w-14 sm:w-16 md:w-18" />
        </div>

        {/* Mid-Right gutter: Target Bullseye */}
        <div className="absolute top-[520px] sm:top-[560px] right-3 sm:right-8 xl:right-16 transform -rotate-6 opacity-90 hover:scale-110 transition-transform">
          <StickerTarget className="w-16 sm:w-18 md:w-22" />
        </div>

        {/* Lower-Mid Left gutter: Analytics Dashboard */}
        <div className="absolute top-[720px] sm:top-[760px] left-2 sm:left-6 xl:left-12 transform -rotate-3 opacity-85 hover:scale-110 transition-transform">
          <StickerDashboard className="w-16 sm:w-18 md:w-22" />
        </div>

        {/* Lower-Mid Right gutter: Location Pin */}
        <div className="absolute top-[720px] sm:top-[760px] right-3 sm:right-8 xl:right-14 transform rotate-6 opacity-85 hover:scale-110 transition-transform">
          <StickerLocationPin className="w-13 sm:w-15 md:w-18" />
        </div>

        {/* Bottom-Left gutter: Palm Tree */}
        <div className="absolute top-[920px] sm:top-[960px] left-3 sm:left-8 xl:left-16 transform -rotate-6 opacity-85 hover:scale-110 transition-transform">
          <StickerPalmTree className="w-16 sm:w-18 md:w-22" />
        </div>

        {/* Bottom-Right gutter: Pocket Compass */}
        <div className="absolute top-[920px] sm:top-[960px] right-4 sm:right-10 xl:right-16 transform rotate-12 opacity-85 hover:scale-110 transition-transform">
          <StickerStopwatch className="w-15 sm:w-18 md:w-20" />
        </div>

        {/* Base-Left footer flank: Sailboat on waves */}
        <div className="absolute bottom-8 left-4 sm:left-10 xl:left-20 transform -rotate-6 opacity-90 hover:scale-110 transition-transform">
          <StickerSailboat className="w-16 sm:w-20 md:w-24" />
        </div>

        {/* Base-Right footer flank: Strategy Clipboard */}
        <div className="absolute bottom-8 right-4 sm:right-10 xl:right-20 transform rotate-6 opacity-90 hover:scale-110 transition-transform">
          <StickerClipboard className="w-16 sm:w-18 md:w-22" />
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. MAIN CONTACT CONTAINER (relative z-10 on top of background)       */}
      {/* =================================================================== */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-24 relative z-10">
        
        {/* Header Block: Using the Footer's Cursive Script Font */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-2xl sm:text-3xl text-[#761113] font-normal font-script"
              style={{
                fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
              }}
            >
              Hablemos
            </span>
            <div className="h-0.5 w-12 bg-[#761113]/30" />
          </div>

          {/* Big Page Title with the Footer's Script Cursive Typography */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#14343A] font-normal tracking-tight font-script leading-[0.95] select-none"
            style={{
              fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
            }}
          >
            Contáctanos
          </h1>
        </div>

        {/* 2-Column Info Header: Description & Direct Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start pb-14 sm:pb-18 border-b border-[#14343A]/10">
          
          {/* Left Column: Description paragraph (Montserrat) */}
          <div className="md:col-span-7">
            <p
              className="text-xl sm:text-2xl lg:text-[26px] leading-[1.35] font-normal text-[#14343A] text-balance font-primary"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Este es el espacio para compartir la información de contacto del negocio. Haz saber a las personas las mejores formas de ponerse en contacto y anímalas a comunicarse.
            </p>
          </div>

          {/* Right Column: Contact details & Underlined Social links */}
          <div className="md:col-span-5 md:pl-6 lg:pl-10 space-y-5 text-sm sm:text-base text-[#14343A] leading-relaxed font-normal">
            
            {/* Email & Phone with Red Badges */}
            <div className="space-y-2">
              <a
                href={`mailto:${content.email}`}
                className="flex items-center gap-2.5 font-medium hover:text-[#761113] transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-[#761113] text-white flex items-center justify-center shrink-0 text-[10px]">
                  <Mail size={11} />
                </span>
                <span>{content.email}</span>
              </a>
              <a
                href={`tel:${content.phone}`}
                className="flex items-center gap-2.5 font-medium hover:text-[#761113] transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-[#761113] text-white flex items-center justify-center shrink-0 text-[10px]">
                  <Phone size={11} />
                </span>
                <span>{content.phone}</span>
              </a>
            </div>

            {/* Physical Address */}
            <div className="flex items-start gap-2.5 text-[#14343A]/85 text-sm">
              <span className="w-5 h-5 rounded-full bg-[#761113] text-white flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                <MapPin size={11} />
              </span>
              <div>
                <p>{content.addressLine1}</p>
                <p>{content.addressLine2}</p>
              </div>
            </div>

            {/* Social channels (underlined list matching screenshot) */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-2 text-xs sm:text-sm font-semibold">
              <a
                href="https://instagram.com/lighthousestudiord"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#761113] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#761113] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#761113] transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#761113] transition-colors"
              >
                Facebook
              </a>
            </div>

          </div>
        </div>

        {/* =================================================================== */}
        {/* =================================================================== */}
        {/* 4. FORM CARD: Stylistic dashed line border & #14343A background      */}
        {/* =================================================================== */}
        <div className="pt-10 sm:pt-14 relative z-10">
          
          {submitted ? (
            <div className="bg-[#14343A] rounded-[25px] p-8 sm:p-14 text-center text-white max-w-2xl mx-auto shadow-2xl animate-in zoom-in-95 relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-[#ADC5D9] text-[#14343A] flex items-center justify-center mx-auto mb-4 shadow-sm relative z-10">
                <Check size={28} />
              </div>
              <h3
                className="text-3xl sm:text-4xl font-normal text-white mb-2 font-script relative z-10"
                style={{
                  fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                }}
              >
                ¡Mensaje Enviado con Éxito!
              </h3>
              <p className="text-sm sm:text-base text-white/85 font-primary max-w-md mx-auto relative z-10">
                Gracias por comunicarte con LIGHTHOUSE Studio. Nuestro equipo revisará tu mensaje y te responderá en breve.
              </p>
              <div className="absolute inset-[2px] !m-0 pointer-events-none z-20" aria-hidden="true">
                <svg className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="23"
                    ry="23"
                    stroke="#FFFFFF"
                    strokeWidth="2.25"
                    strokeDasharray="28 5 56 6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#14343A] rounded-[25px] p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col gap-6 sm:gap-8 relative overflow-hidden"
            >
              {/* Form Title & Subtitle inside the stylish stencil container */}
              <div className="text-center sm:text-left pb-4 border-b border-dashed border-white/20">
                <span
                  className="text-xs font-bold text-[#ADC5D9] uppercase tracking-wider font-secondary mb-1 inline-block"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  Lighthouse Studio
                </span>
                <h2
                  className="text-3xl sm:text-4xl text-white font-normal font-script"
                  style={{
                    fontFamily: "'Des Montilees Regular', 'Des Montilees', 'Caveat', cursive",
                  }}
                >
                  Envíanos un mensaje
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1 font-primary">
                  Completa el formulario y te responderemos a la brevedad posible.
                </p>
              </div>

              {/* Row 1: First name * & Last name * */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                    Nombre <span className="text-[#ADC5D9]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#14343A] rounded-[25px] px-4 py-3 text-sm sm:text-base text-white shadow-xs outline-none transition-all placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                    Apellidos <span className="text-[#ADC5D9]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Tus apellidos"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#14343A] rounded-[25px] px-4 py-3 text-sm sm:text-base text-white shadow-xs outline-none transition-all placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email * & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                    Email <span className="text-[#ADC5D9]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#14343A] rounded-[25px] px-4 py-3 text-sm sm:text-base text-white shadow-xs outline-none transition-all placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                    Teléfono
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-white/60 pointer-events-none z-10">
                      <Globe size={18} />
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (849) 000-0000"
                      className="w-full bg-[#14343A] rounded-[25px] pl-11 pr-4 py-3 text-sm sm:text-base text-white shadow-xs outline-none transition-all placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Subject (Full width) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                  Asunto
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#14343A] rounded-[25px] px-4 py-3 text-sm sm:text-base text-white shadow-xs outline-none transition-all placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                  />
                </div>
              </div>

              {/* Row 4: Message (Full width) */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/95 mb-2 font-primary">
                  Mensaje <span className="text-[#ADC5D9]">*</span>
                </label>
                <div className="relative">
                  <textarea
                    rows={5}
                    required
                    placeholder="Cuéntanos sobre tu visión, objetivos o requerimientos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#14343A] rounded-[25px] p-4 text-sm sm:text-base text-white shadow-xs outline-none transition-all resize-none placeholder:text-white/45 border-[1.5px] border-solid border-white/45 hover:border-white/75 focus:border-[#F8E6AF] focus:ring-2 focus:ring-[#F8E6AF]/25"
                  />
                </div>
              </div>

              {/* Row 5: Submit button with Stencil Border Key Masking style */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/60 font-primary">
                  * Campos requeridos para ponernos en contacto
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full sm:w-auto px-8 py-3.5 bg-[#14343A] hover:bg-white/10 active:scale-[0.99] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 cursor-pointer font-secondary flex items-center justify-center gap-3 rounded-[25px] overflow-visible shadow-sm"
                  style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
                >
                  <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</span>
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  <StencilBorder className="text-white group-hover:text-[#ADC5D9]" />
                </button>
              </div>

              {/* Crisp Stencil Keyline Border matching ENVIAR MENSAJE button style */}
              <div className="absolute inset-[2px] !m-0 pointer-events-none z-20" aria-hidden="true">
                <svg className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="23"
                    ry="23"
                    stroke="#FFFFFF"
                    strokeWidth="2.25"
                    strokeDasharray="28 5 56 6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
