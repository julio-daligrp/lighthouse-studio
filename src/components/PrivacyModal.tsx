import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, brandName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14343A]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F8F4EB] rounded-[25px] shadow-2xl border border-[#14343A]/15 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#14343A]/10">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#C42A27]" />
            <h3
              className="text-lg font-extrabold text-[#14343A] font-primary"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Política de Privacidad
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1.5 text-[#14343A]/60 hover:text-[#14343A] hover:bg-[#14343A]/10 rounded-[25px] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#14343A]/80 leading-relaxed font-normal font-primary">
          <p>
            Esta Política de Privacidad describe cómo <strong>{brandName}</strong> recopila, utiliza y protege tu información cuando visitas nuestro sitio web o te comunicas con nuestro estudio de diseño.
          </p>
          <h4
            className="font-bold text-[#14343A] pt-2 uppercase text-xs tracking-wider font-secondary"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            Información que recopilamos
          </h4>
          <p>
            Cuando te pones en contacto con nosotros a través de nuestro sitio web, podemos recopilar tu nombre, dirección de correo electrónico, teléfono y detalles del proyecto enviados voluntariamente a través del formulario de contacto.
          </p>
          <h4
            className="font-bold text-[#14343A] pt-2 uppercase text-xs tracking-wider font-secondary"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            Uso de la información
          </h4>
          <p>
            Utilizamos tu información exclusivamente para responder a tus consultas, entregar propuestas de diseño personalizadas y mantener la comunicación comercial. Jamás vendemos, alquilamos ni cedemos datos personales a terceros.
          </p>
          <h4
            className="font-bold text-[#14343A] pt-2 uppercase text-xs tracking-wider font-secondary"
            style={{ fontFamily: "'LEMON MILK', 'Lemon Milk Bold', sans-serif" }}
          >
            Cookies y rendimiento
          </h4>
          <p>
            Nuestro sitio emplea métricas de rendimiento esenciales y respetuosas con la privacidad para garantizar una carga fluida y una presentación óptima en cualquier dispositivo.
          </p>
          <div className="pt-4 border-t border-[#14343A]/10 text-xs text-[#14343A]/50">
            Última actualización: Octubre de 2026. Para cualquier consulta, escribe a info@lighthousestudio.com.
          </div>
        </div>
      </div>
    </div>
  );
};
