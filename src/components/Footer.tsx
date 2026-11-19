import React from 'react';
import { LighthouseLogo } from './LighthouseLogo';
import { StencilBorder } from './StencilBorder';

interface FooterProps {
  addressLine1?: string;
  addressLine2?: string;
  email?: string;
  phone?: string;
  copyright?: string;
  onNavigate?: (sectionId: string) => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: () => void;
  onOpenContact?: () => void;
  onOpenPrivacy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  addressLine1 = 'Calle Palo hincando #154',
  addressLine2 = 'Zona Colonial',
  email = 'lighthousestudiodo@gmail.com',
  phone = '(849) 259-3232',
  copyright = '© 2026 LIGHTHOUSE Studio. Todos los derechos reservados.',
  onNavigate,
  onNavigateAbout,
  onNavigateServices,
  onOpenContact,
  onOpenPrivacy,
}) => {
  const fullAddress = `${addressLine1}${addressLine2 ? `, ${addressLine2}` : ''}`;
  const whatsappCleanNumber = phone.replace(/[^0-9]/g, '');

  return (
    <footer className="w-full bg-[#FAF6EE] text-[#14343A] border-t border-[#14343A]/10 relative overflow-hidden select-none">
      {/* Subtle brand warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#F8E6AF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#8FA9BD]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Compact Footer Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-10 relative z-10">
        
        {/* Compact Grid: Brand Logo & Contact Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#14343A]/10">
          
          {/* Left: Brand Logo Lockup */}
          <div className="flex flex-col items-start">
            <h2 className="inline-flex items-center m-0 p-0">
              {onNavigate ? (
                <button
                  type="button"
                  onClick={() => onNavigate('hero')}
                  className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14343A] rounded-md transition-opacity hover:opacity-90 text-left"
                  title="Ir al inicio"
                >
                  <LighthouseLogo variant="horizontal" size="lg" />
                </button>
              ) : (
                <LighthouseLogo variant="horizontal" size="lg" />
              )}
            </h2>
            <p className="text-xs sm:text-sm text-[#14343A]/70 mt-2 font-primary">
              Diseño creativo y sistemas visuales luminosos
            </p>
          </div>

          {/* Right: Quick Action Button to Open Full Contact Form */}
          {onOpenContact && (
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="relative group inline-flex items-center gap-2.5 px-6 py-3 bg-[#14343A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#761113] active:scale-[0.99] transition-all shadow-md cursor-pointer font-secondary rounded-[25px] overflow-visible"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                <span className="text-[#ADC5D9] group-hover:text-white transition-colors select-none font-bold">—</span>
                <span>Escríbenos un mensaje</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                <StencilBorder className="text-white/80 group-hover:text-[#ADC5D9]" />
              </button>
            </div>
          )}
        </div>

        {/* Contact Details List: Clean, responsive row/grid matching Slide 8 */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-[13px] text-[#14343A] font-medium font-primary">
          
          {/* 1. WhatsApp / Phone */}
          <a
            href={`https://wa.me/1${whatsappCleanNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 hover:translate-x-0.5 transition-all duration-200"
            title="Escríbenos por WhatsApp"
          >
            <div className="w-6 h-6 rounded-full bg-[#761113] group-hover:bg-[#C42A27] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="text-[#14343A] group-hover:text-[#761113] transition-colors truncate">
              {phone}
            </span>
          </a>

          {/* 2. Physical Address */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent('Calle Palo Hincado 154, Zona Colonial, Santo Domingo')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 hover:translate-x-0.5 transition-all duration-200"
            title="Ver ubicación en Google Maps"
          >
            <div className="w-6 h-6 rounded-full bg-[#761113] group-hover:bg-[#C42A27] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-[#14343A] group-hover:text-[#761113] transition-colors truncate">
              {fullAddress}
            </span>
          </a>

          {/* 3. Email */}
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-2.5 hover:translate-x-0.5 transition-all duration-200"
            title="Enviar correo electrónico"
          >
            <div className="w-6 h-6 rounded-full bg-[#761113] group-hover:bg-[#C42A27] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <span className="text-[#14343A] group-hover:text-[#761113] transition-colors truncate">
              {email}
            </span>
          </a>

          {/* 4. Instagram Profile */}
          <a
            href="https://instagram.com/lighthousestudiord"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 hover:translate-x-0.5 transition-all duration-200"
            title="Seguir en Instagram @lighthousestudiord"
          >
            <div className="w-6 h-6 rounded-full bg-[#761113] group-hover:bg-[#C42A27] text-white flex items-center justify-center shrink-0 shadow-xs transition-colors">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="text-[#14343A] group-hover:text-[#761113] transition-colors truncate">
              lighthousestudiord
            </span>
          </a>

        </div>

        {/* BOTTOM UTILITY BAR: Brand Seal, Navigation, Privacy & Copyright */}
        <div className="pt-5 border-t border-[#14343A]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#14343A]/70">
          
          {/* Brand Emblem & Name */}
          <div className="flex items-center gap-3">
            <img
              src="assets/Lighthouse%20Creative%20Studio%20Emblem.png"
              alt="LIGHTHOUSE Studio Emblem"
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col">
              <span
                className="font-bold text-[11px] uppercase tracking-wider text-[#14343A]"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Lighthouse Studio
              </span>
              <span className="text-[11px]">{copyright}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex items-center flex-wrap gap-4 text-xs font-semibold text-[#14343A]">
            {(onNavigateServices || onNavigate) && (
              <>
                <button
                  onClick={() => {
                    if (onNavigateServices) {
                      onNavigateServices();
                    } else if (onNavigate) {
                      onNavigate('services');
                    }
                  }}
                  className="hover:text-[#761113] transition-colors cursor-pointer"
                >
                  Servicios
                </button>
                <button
                  onClick={() => {
                    if (onNavigateAbout) {
                      onNavigateAbout();
                    } else if (onNavigate) {
                      onNavigate('about');
                    }
                  }}
                  className="hover:text-[#761113] transition-colors cursor-pointer"
                >
                  Sobre nosotros
                </button>
              </>
            )}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="hover:text-[#761113] transition-colors cursor-pointer"
              >
                Contacto
              </button>
            )}
            {onOpenPrivacy && (
              <button
                onClick={onOpenPrivacy}
                className="hover:text-[#761113] transition-colors text-[#14343A]/60 hover:text-[#14343A] cursor-pointer"
              >
                Privacidad
              </button>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
};
