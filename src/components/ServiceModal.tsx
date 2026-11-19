import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceBadgeData } from './ServiceBadge';
import { StencilBorder } from './StencilBorder';

interface ServiceModalProps {
  service: ServiceBadgeData | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17363C]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-[25px] shadow-2xl border border-[#17363C]/10 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header color accent strip */}
        <div
          className="h-3 w-full"
          style={{ backgroundColor: service.bgColor }}
        />

        <div className="p-6 sm:p-10">
          {/* Top Bar with Title and Close Button */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className="text-xs uppercase tracking-widest font-bold font-secondary text-[#C03225] block mb-2"
                style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
              >
                Servicio Especializado
              </span>
              <h2
                className="text-2xl sm:text-3xl font-extrabold text-[#17363C] font-primary"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                {service.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="p-2 rounded-full text-[#17363C]/60 hover:text-[#17363C] hover:bg-[#17363C]/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C03225]"
            >
              <X size={22} />
            </button>
          </div>

          {/* Description */}
          <div className="mt-6 text-[#17363C]/85 text-base sm:text-lg leading-relaxed font-primary">
            <p>{service.fullDesc}</p>
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-8 pt-6 border-t border-[#17363C]/10">
            <h3
              className="text-xs uppercase tracking-wider font-bold text-[#17363C] font-secondary mb-4"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              ¿Qué incluye este servicio?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-[#17363C]/90 font-primary"
                >
                  <CheckCircle2 size={18} className="text-[#C03225] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-10 pt-6 border-t border-[#17363C]/10 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold tracking-wider uppercase text-[#17363C]/70 hover:text-[#17363C] transition-colors font-secondary rounded-[25px]"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="relative group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#C03225] text-white hover:bg-[#761113] active:scale-[0.99] transition-all duration-200 font-bold text-sm tracking-wider uppercase font-secondary shadow-md rounded-[25px] overflow-visible cursor-pointer"
              style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
            >
              <span className="text-white/80 group-hover:text-white transition-colors select-none font-bold">—</span>
              <span>Cotizar Servicio</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              <StencilBorder className="text-white/80 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
